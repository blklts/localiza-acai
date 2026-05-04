'use client';

import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-zinc-100">
      <p className="text-zinc-500">Carregando mapa...</p>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="h-screen w-full">
      <MapComponent />
    </main>
  );
}
