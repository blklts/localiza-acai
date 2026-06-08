import HeroText from './HeroText';
import ImageCarousel from './ImageCarousel';

export default function HeroSection() {
  return (
    <main className="relative z-0 flex-1 min-h-[500px] overflow-hidden -mt-3">
      {/* Background carousel */}
      <div className="absolute inset-0">
        <ImageCarousel />
      </div>

      {/* Mobile: solid primary covers the carousel */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-primary-dark md:hidden" />


      {/* Desktop: directional gradient from background to transparent */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{ background: 'linear-gradient(to right, var(--background) 45%, transparent 75%)' }}
      />

      <div className="relative flex items-start min-h-[500px]">
        {/* Side curve: desktop only */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/elements/decoration/main/side_curve.svg"
          alt=""
          className="relative z-40 self-stretch w-auto pointer-events-none flex-shrink-0 max-h-[50vh] hidden md:block"
        />
        <div className="relative z-20 flex flex-col justify-start px-8 pt-12 pb-24 flex-1 max-w-3xl">
          <HeroText />
        </div>
      </div>
    </main>
  );
}
