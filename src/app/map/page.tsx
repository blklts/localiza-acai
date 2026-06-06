'use client';

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import type { MapProps } from '@/components/Map';

const MapComponent = dynamic<MapProps>(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-zinc-100">
      <p className="text-zinc-500">Carregando mapa...</p>
    </div>
  ),
});

export default function Home() {
  const searchParams = useSearchParams();
  const q           = searchParams.get('q')           ?? undefined;
  const sort        = searchParams.get('sort')        ?? undefined;
  const minStars    = searchParams.get('minStars')    ? Number(searchParams.get('minStars'))    : undefined;
  const maxDistance = searchParams.get('maxDistance') ? Number(searchParams.get('maxDistance')) : undefined;

  return (
    <main className="h-screen w-full">
      <MapComponent q={q} sort={sort} minStars={minStars} maxDistance={maxDistance} />
    </main>
  );
}
