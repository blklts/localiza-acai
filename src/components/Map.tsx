'use client';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { locations, AcaiLocation } from '@/data/locations';

const acaiIcon = L.divIcon({
  html: '<div style="font-size:28px;line-height:1;margin-top:-14px;">🍇</div>',
  className: '',
  iconSize: [30, 30],
  iconAnchor: [15, 28],
});

const BELEM_CENTER: [number, number] = [-1.4558, -48.4902];

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const toRad = (v: number) => (v * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(km: number): string {
  return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`;
}

function parsePriceMin(price: string): number {
  const match = price.match(/R\$\s*(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400 text-lg tracking-tight">
      {Array.from({ length: 5 }, (_, i) => (i < count ? '★' : '☆')).join('')}
    </span>
  );
}

export default function MapComponent() {
  const [selected, setSelected] = useState<AcaiLocation | null>(null);
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [feedbacks, setFeedbacks] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<Record<string, boolean>>({});
  const [filterDistance, setFilterDistance] = useState<number | null>(null);
  const [filterStars, setFilterStars] = useState<number | null>(null);
  const [filterPriceMax, setFilterPriceMax] = useState<number>(50);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setUserCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => {} // permission denied — distance stays hidden
    );
  }, []);

  const distance =
    selected && userCoords
      ? formatDistance(haversineKm(userCoords.lat, userCoords.lng, selected.lat, selected.lng))
      : null;

  const filteredLocations = useMemo(() => {
    return locations.filter((loc) => {
      if (filterStars !== null && loc.stars < filterStars) return false;
      if (filterPriceMax < 50 && parsePriceMin(loc.price) > filterPriceMax) return false;
      if (filterDistance !== null && userCoords) {
        const dist = haversineKm(userCoords.lat, userCoords.lng, loc.lat, loc.lng);
        if (dist > filterDistance) return false;
      }
      return true;
    });
  }, [filterStars, filterPriceMax, filterDistance, userCoords]);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${
          selected ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ zIndex: 1000 }}
      >
        {selected && (
          <div className="flex flex-col">
            {/* Image + close button */}
            <div className="relative shrink-0">
              <img
                src={selected.imageUrl}
                alt={selected.name}
                className="w-full object-cover"
                style={{ height: 180 }}
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow text-gray-600 hover:text-gray-900 hover:shadow-md transition-all"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            <div className="p-5 flex flex-col gap-4">
              {/* Name */}
              <h2 className="text-xl font-bold text-gray-900 leading-tight">{selected.name}</h2>

              {/* Stars */}
              <div className="flex items-center gap-2">
                <Stars count={selected.stars} />
                <span className="text-sm text-gray-500">{selected.stars}/5</span>
              </div>

              {/* Info rows */}
              <div className="flex flex-col gap-2 text-sm text-gray-700">
                <p className="flex gap-2">
                  <span>📍</span>
                  <span>{selected.address}</span>
                </p>
                <p className="flex gap-2">
                  <span>📞</span>
                  <span>{selected.phone}</span>
                </p>
                <p className="flex gap-2">
                  <span>🕐</span>
                  <span>{selected.hours}</span>
                </p>
                <p className="flex gap-2">
                  <span>💰</span>
                  <span>{selected.price}</span>
                </p>
                {distance && (
                  <p className="flex gap-2">
                    <span>📏</span>
                    <span>{distance} de você</span>
                  </p>
                )}
              </div>

              {/* Additional info (only when present) */}
              {selected.additionalInfo && (
                <>
                  <hr className="border-gray-200" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-gray-800">Informações adicionais</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{selected.additionalInfo}</p>
                  </div>
                </>
              )}

              {/* Divider */}
              <hr className="border-gray-200" />

              {/* Feedback */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800">Feedback</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  rows={4}
                  placeholder="Qual seu comentário?"
                  value={feedbacks[selected.id] ?? ''}
                  onChange={(e) => {
                    setSent((prev) => ({ ...prev, [selected.id]: false }));
                    setFeedbacks((prev) => ({ ...prev, [selected.id]: e.target.value }));
                  }}
                />
                {sent[selected.id] ? (
                  <p className="text-sm text-green-600 font-medium">✓ Comentário enviado!</p>
                ) : (
                  <button
                    onClick={() => {
                      if (feedbacks[selected.id]?.trim()) {
                        setSent((prev) => ({ ...prev, [selected.id]: true }));
                      }
                    }}
                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold py-2 rounded-lg transition-colors"
                    disabled={!feedbacks[selected.id]?.trim()}
                  >
                    Enviar comentário
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filter bar */}
      <div
        className="fixed top-4 left-2 right-2 md:left-1/2 md:right-auto md:-translate-x-1/2 flex flex-wrap gap-x-2 gap-y-1 bg-white rounded-2xl shadow-lg px-4 py-2 items-center justify-center"
        style={{ zIndex: 1000 }}
      >
        <select
          className="text-sm text-gray-700 bg-transparent outline-none cursor-pointer pr-1"
          value={filterDistance ?? ''}
          onChange={(e) => setFilterDistance(e.target.value === '' ? null : Number(e.target.value))}
        >
          <option value="">📏 Distância</option>
          <option value="1">Até 1 km</option>
          <option value="2">Até 2 km</option>
          <option value="5">Até 5 km</option>
        </select>

        <span className="text-gray-200 select-none hidden sm:inline">|</span>

        <select
          className="text-sm text-gray-700 bg-transparent outline-none cursor-pointer pr-1"
          value={filterStars ?? ''}
          onChange={(e) => setFilterStars(e.target.value === '' ? null : Number(e.target.value))}
        >
          <option value="">★ Estrelas</option>
          <option value="5">5 estrelas</option>
          <option value="4">4+ estrelas</option>
          <option value="3">3+ estrelas</option>
        </select>

        <span className="text-gray-200 select-none hidden sm:inline">|</span>

        <div className="flex items-center gap-1 md:gap-2">
          <span className="text-sm text-gray-700">💰</span>
          <input
            type="range"
            min={5}
            max={50}
            step={1}
            value={filterPriceMax}
            onChange={(e) => setFilterPriceMax(Number(e.target.value))}
            className="w-20 md:w-24 accent-purple-600 cursor-pointer"
          />
          <span className="text-xs text-gray-600 w-12 md:w-16 text-right">
            {filterPriceMax < 50 ? `até R$${filterPriceMax}` : 'qualquer'}
          </span>
        </div>

        <span className="text-gray-200 select-none hidden sm:inline">|</span>
        <button
          onClick={() => { setFilterDistance(null); setFilterStars(null); setFilterPriceMax(50); }}
          className={`text-xs text-purple-600 hover:text-purple-800 font-medium whitespace-nowrap transition-opacity ${
            filterDistance !== null || filterStars !== null || filterPriceMax < 50
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          Limpar
        </button>
      </div>

      {/* Map */}
      <MapContainer
        center={BELEM_CENTER}
        zoom={14}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredLocations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={acaiIcon}
            eventHandlers={{ click: () => setSelected(loc) }}
          />
        ))}
      </MapContainer>
    </div>
  );
}
