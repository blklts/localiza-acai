import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative flex-1 flex flex-col">
        <HeroSection />
        {/* Desktop decorative image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/elements/decoration/footer.png"
          alt=""
          className="absolute bottom-0 left-0 w-full h-auto pointer-events-none hidden md:block"
        />
        {/* Mobile decorative image */}
        <div className="block md:hidden mt-[10px] mx-[30px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/elements/decoration/main/rabeta.webp"
            alt=""
            className="w-full pointer-events-none"
            style={{ transform: 'scaleX(-1)' }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
