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

      {/* ────────────────────────────────────────────
          MOBILE LAYOUT  (hidden on md+)
      ──────────────────────────────────────────── */}
      <div className="md:hidden relative w-full min-h-[480px] flex items-center justify-center overflow-hidden bg-[#f5f5f5]">

        {/* back wave */}
        <div
          className="absolute -bottom-[140px] w-full h-[420px] bg-no-repeat bg-bottom pointer-events-none"
          style={{ backgroundImage: "url('/elements/decoration/waves/wave_back.svg')", backgroundSize: '350% auto', zIndex: 1 }}
        />

        {/* card + rabeta wrapper */}
        <div
          className="absolute top-[calc(40%+10px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px]"
          style={{ zIndex: 3 }}
        >
          {/* links card */}
          <div
            className="absolute top-[calc(50%-20px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] bg-white rounded-[20px] px-6 pt-5 pb-[80px] flex flex-col gap-3 shadow-md"
            style={{ zIndex: 1 }}
          >
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="text-primary font-semibold text-sm hover:text-secondary transition-colors leading-snug">
                {label}
              </a>
            ))}
          </div>
          {/* rabeta */}
          <div
            className="absolute w-full h-full translate-y-[130px] scale-[1.7] bg-no-repeat bg-center bg-contain pointer-events-none"
            style={{ backgroundImage: "url('/elements/rabeta.svg')", zIndex: 2 }}
          />
        </div>

        {/* front wave */}
        <div
          className="absolute -bottom-[140px] w-full h-[320px] bg-no-repeat bg-bottom pointer-events-none"
          style={{ backgroundImage: "url('/elements/decoration/waves/wave_front.svg')", backgroundSize: '350% auto', zIndex: 4 }}
        />
      </div>

      {/* ────────────────────────────────────────────
          DESKTOP LAYOUT  (hidden below md)
          waves use 100% width → height = width / 2.5
          at 1440px: wave height ≈ 576px
      ──────────────────────────────────────────── */}
      <div className="hidden md:flex relative w-full min-h-[600px] items-center justify-center overflow-hidden bg-[#f5f5f5]">

        {/* back wave — full viewport width, anchored to bottom */}
        <div
          className="absolute -bottom-[460px] w-full bg-no-repeat bg-bottom pointer-events-none"
          style={{ backgroundImage: "url('/elements/decoration/waves/wave_back.svg')", backgroundSize: '100vw auto', height: 'calc(100vw / 2.5)', zIndex: 1 }}
        />

        {/* card + rabeta wrapper */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px]"
          style={{ zIndex: 3 }}
        >
          {/* links card */}
          <div
            className="absolute top-[calc(50%+20px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] bg-white rounded-[20px] px-6 pt-5 pb-[80px] flex flex-col gap-3 shadow-md"
            style={{ zIndex: 1 }}
          >
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="text-primary font-semibold text-sm hover:text-secondary transition-colors leading-snug">
                {label}
              </a>
            ))}
          </div>
          {/* rabeta */}
          <div
            className="absolute w-full h-full translate-y-[130px] scale-[1.7] bg-no-repeat bg-center bg-contain pointer-events-none"
            style={{ backgroundImage: "url('/elements/rabeta.svg')", zIndex: 2 }}
          />
        </div>

        {/* front wave — full viewport width, anchored to bottom, slightly shorter */}
        <div
          className="absolute -bottom-[390px] w-full bg-no-repeat bg-bottom pointer-events-none"
          style={{ backgroundImage: "url('/elements/decoration/waves/wave_front.svg')", backgroundSize: '100vw auto', height: 'calc(100vw / 3.5)', zIndex: 4 }}
        />
      </div>
    </>
  );
}
