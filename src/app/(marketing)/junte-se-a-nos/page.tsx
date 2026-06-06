import PageTemplate from '@/components/marketing/PageTemplate';

export const metadata = { title: 'Junte-se a nós — Localiza Açaí' };

export default function JunteSeANos() {
  return (
    <PageTemplate
      title="Junte-se a nós"
      heroBg="/carousel/1.webp"
      leftCurve="/elements/decoration/main/side_curve.svg"
    >
      <p className="text-zinc-500 text-lg">Conteúdo em breve.</p>
    </PageTemplate>
  );
}
