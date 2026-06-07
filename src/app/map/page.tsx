import { readFileSync } from 'fs';
import { join } from 'path';
import { Suspense } from 'react';
import MapClient from '@/components/MapClient';
import type { AcaiLocation, MenuItem } from '@/data/locations';

function parseCsvRow(line: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      fields.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

const MOCK_PRICES = [
  'R$ 8 – R$ 18',
  'R$ 10 – R$ 22',
  'R$ 12 – R$ 25',
  'R$ 15 – R$ 30',
  'R$ 18 – R$ 35',
  'R$ 20 – R$ 40',
];

const MOCK_STARS = [3, 4, 5, 4, 3, 5, 4, 4, 3, 5];

const MOCK_MENUS: MenuItem[][] = [
  [
    { name: 'Peixe frito',        imageUrl: 'https://placehold.co/80x80?text=Peixe',     price: 'R$ 18,00', unit: 'unidade'      },
    { name: 'Farinha de tapioca',   imageUrl: 'https://placehold.co/80x80?text=Tapioca',   price: 'R$ 10,00', unit: 'litro' },
    { name: 'Farinha',imageUrl: 'https://placehold.co/80x80?text=Farinha',  price: 'R$ 8,00',  unit: 'litro'    },
    { name: 'Camarão', imageUrl: 'https://placehold.co/80x80?text=Camarao', price: 'R$ 25,00', unit: 'kg'      },
  ],
  [
    { name: 'Cupuaçu',          imageUrl: 'https://placehold.co/80x80?text=Cupuacu',  price: 'R$ 15,00', unit: 'kg'   },
    { name: 'Tapioca',          imageUrl: 'https://placehold.co/80x80?text=Tapioca',  price: 'R$ 6,00',  unit: 'litro' },
    { name: 'Suco de Taperebá', imageUrl: 'https://placehold.co/80x80?text=Suco',     price: 'R$ 7,00',  unit: '300ml'   },
  ],
];

function mockPrice(seed: number): string {
  return MOCK_PRICES[seed % MOCK_PRICES.length];
}

function mockStars(seed: number): number {
  return MOCK_STARS[seed % MOCK_STARS.length];
}

function mockMenu(seed: number): MenuItem[] {
  return MOCK_MENUS[seed % MOCK_MENUS.length];
}

function parseCsvLocations(): AcaiLocation[] {
  const csvPath = join(process.cwd(), 'src/data/data.csv');
  const content = readFileSync(csvPath, 'utf-8');
  const lines = content.split('\n').filter(l => l.trim());
  const result: AcaiLocation[] = [];

  for (let i = 1; i < lines.length; i++) {
    const fields = parseCsvRow(lines[i]);
    const nome       = fields[0]?.trim();
    const contato    = fields[1]?.trim();
    const redeSocial = fields[2]?.trim();
    const latLngRaw  = fields[3]?.trim();
    const endereco   = fields[4]?.trim() ?? '';

    if (!nome || !latLngRaw) continue;

    const coords = latLngRaw.split(',');
    const lat = parseFloat(coords[0]);
    const lng = parseFloat(coords[1]);

    if (isNaN(lat) || isNaN(lng)) continue;

    result.push({
      id: String(i),
      name: nome,
      address: endereco,
      phone: contato === 'não disponível' ? '' : contato,
      hours: '',
      imageUrl: `https://placehold.co/300x160?text=${encodeURIComponent(nome.trim())}`,
      price: mockPrice(i),
      stars: mockStars(i),
      menu: mockMenu(i),
      lat,
      lng,
      instagram: redeSocial === 'não disponível' ? undefined : redeSocial,
    });
  }

  return result;
}

function LoadingScreen() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-100">
      <p className="text-zinc-500">Carregando mapa...</p>
    </div>
  );
}

export default function MapPage() {
  const locations = parseCsvLocations();
  return (
    <main className="h-screen w-full">
      <Suspense fallback={<LoadingScreen />}>
        <MapClient locations={locations} />
      </Suspense>
    </main>
  );
}
