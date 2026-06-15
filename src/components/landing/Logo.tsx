'use client';

import { useDarkMode } from '@/contexts/DarkModeContext';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 48, height = 48 }: LogoProps) {
  const { daltonism } = useDarkMode();
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={daltonism ? '/logo/logo_dalt.svg' : '/logo/logo_branca.svg'}
      alt="Localiza Açaí"
      width={width}
      height={height}
      className={className}
    />
  );
}
