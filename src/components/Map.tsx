'use client';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, ZoomControl } from 'react-leaflet';
import { locations, AcaiLocation, MenuItem } from '@/data/locations';
import { FaSearch, FaReply } from 'react-icons/fa';
import Link from 'next/link';

function createAcaiIcon(stars: number) {
  return L.divIcon({
    html: `<div style="background:#DB6006;border-radius:20px;padding:3px 8px;box-shadow:0 2px 6px rgba(0,0,0,0.25);font-size:13px;font-weight:700;color:#f5f5f5;white-space:nowrap;display:flex;align-items:center;gap:2px;">${stars}<img src="/icons/estrela 2.svg" alt="" style="width:13px;height:13px;filter:brightness(0) invert(1);" /></div>`,
    className: '',
    iconSize: [40, 26],
    iconAnchor: [20, 13],
  });
}

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

export interface MapProps {
  q?: string;
  sort?: string;
  minStars?: number;
  maxDistance?: number;
}

export default function MapComponent({ q, sort, minStars, maxDistance }: MapProps) {
  const [selected, setSelected] = useState<AcaiLocation | null>(null);
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [feedbacks, setFeedbacks] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<Record<string, boolean>>({});
  const [filterDistance, setFilterDistance] = useState<number | null>(maxDistance ?? null);
  const [filterStars, setFilterStars] = useState<number | null>(minStars ?? null);
  const lowestPrice = Math.min(...locations.map(l => parsePriceMin(l.price)));
  const [filterPriceMax, setFilterPriceMax] = useState<number>(sort === 'price' ? lowestPrice : 50);
  const [filterQuery, setFilterQuery] = useState<string>(q ?? '');

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
    let result = locations.filter((loc) => {
      if (filterQuery) {
        const lower = filterQuery.toLowerCase();
        if (!loc.name.toLowerCase().includes(lower) && !loc.address.toLowerCase().includes(lower)) return false;
      }
      if (filterStars !== null && loc.stars < filterStars) return false;
      if (filterPriceMax < 50 && parsePriceMin(loc.price) > filterPriceMax) return false;
      if (filterDistance !== null && userCoords) {
        const dist = haversineKm(userCoords.lat, userCoords.lng, loc.lat, loc.lng);
        if (dist > filterDistance) return false;
      }
      return true;
    });
    if (sort === 'price') {
      result = [...result].sort((a, b) => parsePriceMin(a.price) - parsePriceMin(b.price));
    }
    return result;
  }, [filterQuery, filterStars, filterPriceMax, filterDistance, userCoords, sort]);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-[68px] h-[calc(100%-68px)] w-80 bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${
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

              {/* Menu */}
              {selected.menu && selected.menu.length > 0 && (
                <>
                  <hr className="border-gray-200" />
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-semibold text-gray-800">Cardápio Adicional</p>
                    <div className="flex flex-col gap-2">
                      {selected.menu.map((item: MenuItem, i: number) => (
                        <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-2">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-14 h-14 object-cover rounded-md flex-shrink-0"
                          />
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-sm font-medium text-gray-800 leading-tight truncate">{item.name}</span>
                            <span className="text-xs text-gray-500">{item.unit}</span>
                            <span className="text-sm font-semibold text-orange-600">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
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
        className="fixed top-0 left-0 right-0 bg-primary rounded-b-[20px] shadow-lg px-4 py-3"
        style={{ zIndex: 1000 }}
      >
        <div className="relative flex flex-wrap gap-2 items-center justify-center">
          {/* Back button */}
          <Link
            href="/"
            className="absolute left-0 inline-flex items-center justify-center bg-secondary hover:bg-secondary-hover text-white rounded-lg w-9 h-9 transition-colors flex-shrink-0"
            aria-label="Voltar"
          >
            <FaReply />
          </Link>

        {/* Search */}
        <div className="inline-flex items-center gap-2 bg-secondary text-white font-semibold rounded-lg px-4 py-2 whitespace-nowrap">
          <FaSearch className="flex-shrink-0 text-sm" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Buscar por nome"
            className="bg-transparent outline-none placeholder-white/60 text-sm w-32"
          />
        </div>

        {/* Price */}
        <div className="inline-flex items-center gap-2 bg-secondary text-white font-semibold rounded-lg px-4 py-2 whitespace-nowrap">
          <img src="/icons/dinheirus.svg" alt="" style={{ width: '1em', height: '1em', filter: 'brightness(0) invert(1)', flexShrink: 0 }} />
          <input
            type="range"
            min={5}
            max={50}
            step={1}
            value={filterPriceMax}
            onChange={(e) => setFilterPriceMax(Number(e.target.value))}
            className="w-20 accent-white cursor-pointer"
          />
          <span className="text-xs w-14 text-right">
            {filterPriceMax < 50 ? `até R$${filterPriceMax}` : 'qualquer'}
          </span>
        </div>

        {/* Distance */}
        <div className="inline-flex items-center gap-2 bg-secondary text-white font-semibold rounded-lg px-4 py-2 whitespace-nowrap">
          <img src="/icons/geolocalização.svg" alt="" style={{ width: '1em', height: '1em', filter: 'brightness(0) invert(1)', flexShrink: 0 }} />
          <select
            className="bg-transparent outline-none cursor-pointer text-sm font-semibold text-white"
            value={filterDistance ?? ''}
            onChange={(e) => setFilterDistance(e.target.value === '' ? null : Number(e.target.value))}
          >
            <option value=""  className="bg-white text-gray-800">Distância</option>
            <option value="1" className="bg-white text-gray-800">Até 1 km</option>
            <option value="2" className="bg-white text-gray-800">Até 2 km</option>
            <option value="5" className="bg-white text-gray-800">Até 5 km</option>
          </select>
        </div>

        {/* Stars */}
        <div className="inline-flex items-center gap-2 bg-secondary text-white font-semibold rounded-lg px-4 py-2 whitespace-nowrap">
          <img src="/icons/estrela 1.svg" alt="" style={{ width: '1em', height: '1em', filter: 'brightness(0) invert(1)', flexShrink: 0 }} />
          <select
            className="bg-transparent outline-none cursor-pointer text-sm font-semibold text-white"
            value={filterStars ?? ''}
            onChange={(e) => setFilterStars(e.target.value === '' ? null : Number(e.target.value))}
          >
            <option value=""  className="bg-white text-gray-800">Estrelas</option>
            <option value="5" className="bg-white text-gray-800">5 estrelas</option>
            <option value="4" className="bg-white text-gray-800">4+ estrelas</option>
            <option value="3" className="bg-white text-gray-800">3+ estrelas</option>
          </select>
        </div>

        {/* Clear */}
        <button
          onClick={() => { setFilterDistance(null); setFilterStars(null); setFilterPriceMax(50); setFilterQuery(''); }}
          className={`inline-flex items-center gap-2 bg-secondary text-white font-semibold rounded-lg px-4 py-2 text-sm whitespace-nowrap transition-opacity hover:bg-secondary-hover ${
            filterDistance !== null || filterStars !== null || filterPriceMax < 50 || filterQuery
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          Limpar
        </button>
        </div>
      </div>

      {/* Map */}
      <MapContainer
        center={BELEM_CENTER}
        zoom={14}
        zoomControl={false}
        style={{ height: '100%', width: '100%' }}
      >
        <ZoomControl position="bottomleft" />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredLocations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={createAcaiIcon(loc.stars)}
            eventHandlers={{ click: () => setSelected(loc) }}
          >
            <Tooltip direction="top" offset={[0, -16]} opacity={1}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '2px' }}>
                <img src={loc.imageUrl} alt={loc.name} style={{ width: 130, height: 80, objectFit: 'cover', borderRadius: 6 }} />
                <span style={{ fontWeight: 600, fontSize: 13, maxWidth: 130, textAlign: 'center', lineHeight: 1.3 }}>{loc.name}</span>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
