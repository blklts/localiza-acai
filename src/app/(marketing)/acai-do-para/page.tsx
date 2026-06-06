import PageTemplate from '@/components/marketing/PageTemplate';

export const metadata = { title: 'Conheça o açaí do Pará — Localiza Açaí' };

export default function AcaiDoPara() {
  return (
    <PageTemplate
      title="Conheça o açaí do Pará"
      heroBg="/carousel/4.webp"
      leftCurve="/elements/decoration/a%C3%A7a%C3%AD%20do%20Par%C3%A1/1.svg"
      rightCurve="/elements/decoration/a%C3%A7a%C3%AD%20do%20Par%C3%A1/a%C3%A7a%C3%ADzinho.svg"
    >
      <p className="text-zinc-500 text-lg">Conteúdo em breve.</p>
    </PageTemplate>
  );
}
