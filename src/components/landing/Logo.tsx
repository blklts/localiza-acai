interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 48, height = 48 }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo/logo_branca.svg"
      alt="Localiza Açaí"
      width={width}
      height={height}
      className={className}
    />
  );
}
