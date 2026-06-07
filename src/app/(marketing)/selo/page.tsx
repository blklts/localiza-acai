import PageTemplate from '@/components/marketing/PageTemplate';

export const metadata = { title: 'Como funciona o selo — Localiza Açaí' };

export default function Selo() {
  return (
    <PageTemplate
      title="Como funciona o selo?"
      heroBg="/elements/decoration/selo/header.webp"
      leftCurve="/elements/decoration/selo/1.svg"
      rightCurve="/elements/decoration/selo/2.svg"
    >
        <div className="flex items-stretch w-full">
            <div className="w-full md:w-2/3 md:flex-shrink-0 flex flex-col gap-8 md:gap-[60px] self-center">
                <p className="text-zinc-500 text-base md:text-lg">O selo Açaí Bom é um indicativo de biosegurança que é dado aos estabelecimentos que estejam de acordo com as normas de vigilância e atendem ao Decreto Estadual 326/2012, na capital belenense.</p>
                <p className="text-zinc-500 text-base md:text-lg">Vale ressaltar que na Região Metropolitana há dois selos de açaí seguro,<span className="text-[#57227A]"> o de Belém,  Açaí Bom</span>, e o de <span className="text-[#57227A]">Ananindeua,  Açaí Bom que Só</span>. Ambos os selos são baseados no Decreto Estadual 326, que estabelece normas sanitárias, usos do espaço, processo de branqueamento, etc.</p>
                <div className="flex gap-4 justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/elements/decoration/selo/selo1.png" alt="Selo Açaí Bom - Belém" className="w-1/2 max-w-[180px] object-contain" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/elements/decoration/selo/selo2.png" alt="Selo Açaí Bom que Só - Ananindeua" className="w-1/2 max-w-[180px] object-contain" />
                </div>
                <p className="text-zinc-500 text-base md:text-lg">A diferença entre os dois se dá pelo tempo de renovação, enquanto o de Belém é anual, o de Ananindeua é atualizado a cada dois anos.</p>
                <p className="text-zinc-500 text-base md:text-lg">Para o funcionamento do site, utilizamos os dados disponibilizados pelas prefeituras entre ambos os bancos de dados. E para facilitar a denúncia de alguma irregularidade, temos nosso canal de avaliações</p>
            </div>
            <div className="hidden md:block flex-1" />
        </div>
    </PageTemplate>
  );
}
