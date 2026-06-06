'use client';

import { useState } from 'react';
import SearchButton from './SearchButton';
import IconLinkButton from './IconLinkButton';

export default function HeroText() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-[40px] font-bold text-primary font-sans leading-tight">
            Encontre um ponto de<br /><span className="text-[#40AC8E]">açaí seguro</span> perto de você
        </h1>
      </div>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
            <SearchButton open={searchOpen} setOpen={setSearchOpen} />
            <IconLinkButton href="/map?sort=price"      iconSrc="/icons/dinheirus.svg"      label="Menor preço"        hideLabel={searchOpen} className="bg-secondary hover:bg-secondary-hover" />
            <IconLinkButton href="/map?maxDistance=1"   iconSrc="/icons/geolocalização.svg" label="Mais próximos"      hideLabel={searchOpen} className="bg-secondary hover:bg-secondary-hover" />
            <IconLinkButton href="/map?minStars=5"      iconSrc="/icons/estrela 1.svg"      label="Melhores avaliados" hideLabel={searchOpen} className="bg-secondary hover:bg-secondary-hover" />
        </div>

      <div className="flex flex-col gap-3">
          <p className="font-sans font-normal text-[20px] leading-none tracking-normal text-zinc-600">
              Localize o ponto de venda mais próximo de você em Belém e Região Metropolitana. Aqui tu tem uma experiencia personalizada, podendo escolher a melhor maneira de encontrar um produto de qualidade assegurada pelo selo governamental de maneira rápida simples e de acordo com tuas preferências.
          </p>
      </div>
    </div>
  );
}
