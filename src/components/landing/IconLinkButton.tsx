import Link from 'next/link';

interface IconLinkButtonProps {
  href: string;
  iconSrc: string;
  label: string;
  className?: string;
  hideLabel?: boolean;
}

export default function IconLinkButton({ href, iconSrc, label, className, hideLabel }: IconLinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold rounded-[24px] px-4 py-3 transition-colors whitespace-nowrap${className ? ` ${className}` : ''}`}
    >
      <span className={`transition-all duration-300 overflow-hidden ${hideLabel ? 'w-0 opacity-0' : 'opacity-100'}`}>{label}</span>
      <img src={iconSrc} alt="" style={{ width: '1em', height: '1em', filter: 'brightness(0) invert(1)', flexShrink: 0 }} />
    </Link>
  );
}
