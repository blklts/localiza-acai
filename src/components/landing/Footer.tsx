const contactLinks = [
  { iconSrc: '/icons/telefone 1.svg', label: 'Telefone',  href: '#' },
  { iconSrc: '/icons/instagram.svg',  label: 'Instagram', href: '#' },
  { iconSrc: '/icons/wpp.svg',        label: 'WhatsApp',  href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#997aaf] text-[#f5f5f5]">
      <div className="grid grid-cols-2 gap-6 px-[100px] pb-4 w-full">
        <div className="flex flex-col gap-1 text-sm text-[#f5f5f5]">
          <p>Copyright © 2026 LocalizAçaí Projeto acadêmico. Universidade do Estado do Pará - UEPA</p>
          <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
            <a href="#" className="hover:underline whitespace-nowrap">Política de Privacidade</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:underline whitespace-nowrap">Política de vendas</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:underline whitespace-nowrap">Avisos legais</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:underline whitespace-nowrap">Mapa do site</a>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 justify-center">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-70">Entre em contato</span>
          <div className="flex gap-2">
            {contactLinks.map(({ iconSrc, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-hover rounded-full w-10 h-10 transition-colors flex-shrink-0"
              >
                <img src={iconSrc} alt="" style={{ width: '1.25em', height: '1.25em', filter: 'brightness(0) invert(1)' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
