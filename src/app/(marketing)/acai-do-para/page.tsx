import PageTemplate from '@/components/marketing/PageTemplate';

export const metadata = { title: 'Conheça o açaí do Pará — Localiza Açaí' };

export default function AcaiDoPara() {
  return (
    <PageTemplate
      title="Conheça o açaí do Pará"
      heroBg="/carousel/4.webp"
      leftCurve="/elements/decoration/a%C3%A7a%C3%AD%20do%20Par%C3%A1/acai_do_para_1.webp"
      leftCurveClassName="items-start basis-[440px]"
      rightCurve="/elements/decoration/a%C3%A7a%C3%AD%20do%20Par%C3%A1/acai_do_para_2.webp"
      rightCurveClassName="items-start basis-[440px]"
      contentClassName="flex-1 flex items-center gap-12 py-6 md:py-16"
    >
      <div className="w-full flex flex-col gap-8 md:gap-[60px] self-center mx-[20px] md:mx-0">
          <p className="text-zinc-500 text-base md:text-lg">O açaí é um dos principais produtos da sociobiodiversidade amazônica e possui grande relevância econômica, cultural e alimentar no estado do Pará. A produção paraense ocorre principalmente em dois tipos de ambientes: as áreas de várzea e as áreas de terra firme, cada uma apresentando características específicas de cultivo, manejo e produtividade.</p>
          <p className="text-zinc-500 text-base md:text-lg">Segundo a Empresa Brasileira de Pesquisa Agropecuária, as maiores concentrações naturais de açaizeiros encontram-se nas áreas de várzea do estuário amazônico, especialmente nos estados do Pará e Amapá, embora o cultivo em terra firme tenha se expandido significativamente nas últimas décadas.</p>
          <h2 className="text-primary font-bold text-xl md:text-2xl">Mas você sabe o que é açaí de várzea?</h2>
          <p className="text-zinc-500 text-base md:text-lg">O chamado açaí de várzea é produzido em regiões periodicamente inundadas pelos rios amazônicos, principalmente próximas às margens de rios, igarapés e furos. Esse tipo de cultivo ocorre tradicionalmente em açaizais nativos manejados pelas populações ribeirinhas, sendo fortemente associado aos modos de vida tradicionais da Amazônia.</p>
          <p className="text-zinc-500 text-base md:text-lg">Conforme destacam Santos, Sena e Homma, as áreas de várzea apresentam elevada concentração natural da palmeira Euterpe oleracea Mart., favorecendo uma produção extrativista e comunitária</p>
          <p className="text-zinc-500 text-base md:text-lg">Além disso, Silva (2022) aponta que o manejo do açaí em várzea constitui importante fonte de renda para famílias ribeirinhas, integrando práticas tradicionais de cultivo e conservação ambiental.</p>
          <p className="text-zinc-500 text-base md:text-lg">Já o açaí de terra firme é cultivado em áreas não inundáveis, geralmente por meio de sistemas agrícolas planejados, utilizando irrigação, adubação e técnicas de manejo mais intensivas.</p>
          <p className="text-zinc-500 text-base md:text-lg">Esse modelo de produção expandiu-se principalmente a partir da década de 1990, impulsionado pela crescente valorização comercial do fruto. Segundo Mendes et al. (2021), o cultivo em terra firme surge também como alternativa para reduzir a pressão sobre os ecossistemas de várzea e recuperar áreas degradadas.</p>
          <p className="text-zinc-500 text-base md:text-lg">A Empresa Brasileira de Pesquisa Agropecuária destaca ainda que o cultivo em terra firme possibilita maior controle produtivo e expansão comercial do açaí para outras regiões do país.</p>
          <p className="text-zinc-500 text-base md:text-lg">Embora ambos os tipos pertençam majoritariamente à espécie Euterpe oleracea Mart., existem diferenças relacionadas às características físico-químicas, produtividade e manejo. Silva et al. (2016) identificaram distinções significativas entre frutos produzidos em áreas de várzea e de terra firme, especialmente em parâmetros ligados à composição físico-química do fruto. Observa-se então que o Pará é rico em diversidade quando o assunto é açaí.</p>
      </div>
    </PageTemplate>
  );
}
