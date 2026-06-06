import PageTemplate from '@/components/marketing/PageTemplate';

export const metadata = { title: 'Informações governamentais — Localiza Açaí' };

export default function InformacoesGovernamentais() {
  return (
    <PageTemplate
      title="Informações governamentais"
      heroBg="/carousel/5.webp"
      leftCurve="/elements/decoration/main/side_curve.svg"
    >
      <p className="text-zinc-500 text-lg">Conteúdo em breve.</p>
    </PageTemplate>
  );
}
