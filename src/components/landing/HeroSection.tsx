import HeroText from './HeroText';
import ImageCarousel from './ImageCarousel';

export default function HeroSection() {
  return (
    <main className="relative z-0 flex-1 min-h-[500px] overflow-hidden -mt-3">
      {/* Infinite scrolling background */}
      <div className="absolute inset-0">
        <ImageCarousel />
      </div>

      {/* Gradient: background color → transparent at 50% */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--background) 45%, transparent 75%)' }}
      />

      {/* Flex row has no z-index so children participate directly in main's stacking context */}
      <div className="relative flex items-start min-h-[500px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/elements/decoration/main/side_curve.svg"
          alt=""
          className="relative z-40 self-stretch w-auto pointer-events-none flex-shrink-0 max-h-[70vh]"
        />
        <div className="relative z-20 flex flex-col justify-start px-8 py-16 max-w-3xl">
          <HeroText />
        </div>
      </div>
    </main>
  );
}
