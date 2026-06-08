import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative flex-1 flex flex-col">
        <HeroSection />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/elements/decoration/footer.png"
          alt=""
          className="absolute bottom-[-50px] left-0 w-full h-auto block pointer-events-none"
        />
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
