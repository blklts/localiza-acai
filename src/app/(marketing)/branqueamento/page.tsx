import PageTemplate from '@/components/marketing/PageTemplate';

export const metadata = { title: 'Conheça o branqueamento — Localiza Açaí' };

export default function Branqueamento() {
  return (
    <PageTemplate
      title="Você sabe o que é o branqueamento do açaí?"
      titleClassName="text-[24px]"
      heroBg="/elements/decoration/branqueamento/header.webp"
      leftCurve="/elements/decoration/branqueamento/1.svg"
      rightCurve="/elements/decoration/branqueamento/2.svg"
    >
        <div className="flex items-stretch w-full">
            <div className="w-full md:w-2/3 md:flex-shrink-0 flex flex-col gap-8 md:gap-[60px] self-center">
                <p className="text-zinc-500 text-base md:text-lg">O processo do branqueamento do açaí é um processo utilizado para garantir a segurança sanitária dentro da produção do açaí e assegurar o consumo seguro por parte dos consumidores.</p>
                <p className="text-zinc-500 text-base md:text-lg">Durante o processo, os frutos do açaí passam por uma rigorosa seleção, lavagem e sanitização com água tratada. Após essas etapas, o açaí é submetido rapidamente à água aquecida entre 80 °C a 90 °C por cerca de 10 segundos, sendo resfriado logo em seguida,  para evitar grandes alterações em seu sabor e textura.</p>
                <div className="flex items-center gap-4">
                    <p className="text-zinc-500 text-base md:text-lg flex-1">Atualmente, o processo do branqueamento é considerado requisito obrigatório para a segurança do açaí, com o intuito de reduzir a zero o número de infecções causadas por parte de doenças transmitidas por bactérias que contaminam o açaí.</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/elements/decoration/branqueamento/quadro.svg" alt="" className="block md:hidden w-[160px] flex-shrink-0 self-center" />
                </div>
            </div>
            <div
                className="hidden md:block flex-1 scale-110 bg-contain bg-no-repeat bg-right-top mr-[20px] ml-auto"
                style={{ backgroundImage: "url('/elements/decoration/branqueamento/quadro.svg')" }}
            />
        </div>
    </PageTemplate>
  );
}
