import Header from '@/components/landing/Header';
import PrimaryFooter from '@/components/landing/PrimaryFooter';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <PrimaryFooter />
    </>
  );
}
