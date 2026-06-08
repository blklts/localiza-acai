import PageTemplate from '@/components/marketing/PageTemplate';

export const metadata = { title: 'Informações governamentais — Localiza Açaí' };

const links = [
  { label: 'Decreto Estadual 326/2012', href: '#' },
  { label: 'Vigilância Sanitária de Belém', href: '#' },
  { label: 'Prefeitura de Ananindeua', href: '#' },
  { label: 'SESMA – Secretaria Municipal de Saúde', href: '#' },
  { label: 'Portal da Transparência do Pará', href: '#' },
];

export default function InformacoesGovernamentais() {
  return (
    <>
      <PageTemplate title="Informações governamentais" heroBg="/carousel/5.webp" />

      {/* ── MOBILE (hidden on md+) ── */}
      <div className="md:hidden relative w-full min-h-[480px] flex items-center justify-center bg-[#f5f5f5] overflow-hidden">
        {/* wave behind everything */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/elements/decoration/waves/waves_combined.webp"
          alt=""
          className="absolute bottom-0 left-0 w-full h-auto pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute top-[calc(40%+10px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px]"
          style={{ zIndex: 3 }}
        >
          <div
            className="absolute top-[calc(50%-20px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] bg-primary rounded-[20px] px-6 pt-5 pb-[80px] flex flex-col gap-3 shadow-md"
            style={{ zIndex: 1 }}
          >
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="font-sans font-semibold text-sm text-[#f5f5f5] underline leading-snug hover:text-accent transition-colors">
                {label}
              </a>
            ))}
          </div>
          <div
            className="absolute w-full h-full translate-y-[130px] scale-[1.7] bg-no-repeat bg-center bg-contain pointer-events-none"
            style={{ backgroundImage: "url('/elements/rabeta.svg')", zIndex: 2 }}
          />
        </div>
      </div>

      {/* ── DESKTOP (hidden below md) ── */}
      <div className="hidden md:flex relative w-full min-h-[600px] items-center justify-center bg-[#f5f5f5] overflow-hidden">
        {/* wave behind everything */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/elements/decoration/waves/waves_combined.webp"
          alt=""
          className="absolute bottom-0 left-0 w-full h-auto pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px]"
          style={{ zIndex: 3 }}
        >
          <div
            className="absolute top-[calc(50%+20px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] bg-secondary rounded-[20px] px-6 pt-5 pb-[80px] flex flex-col gap-3 shadow-md"
            style={{ zIndex: 1 }}
          >
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="font-sans font-semibold text-sm text-[#f5f5f5] underline leading-snug hover:text-accent transition-colors">
                {label}
              </a>
            ))}
          </div>
          <div
            className="absolute w-full h-full translate-y-[130px] scale-[1.7] bg-no-repeat bg-center bg-contain pointer-events-none"
            style={{ backgroundImage: "url('/elements/rabeta.svg')", zIndex: 2 }}
          />
        </div>
      </div>
    </>
  );
}
