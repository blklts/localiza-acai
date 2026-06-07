import PageTemplate from '@/components/marketing/PageTemplate';

export const metadata = { title: 'Quem somos — Localiza Açaí' };

const team = [
  { name: 'Allany Cavalcanti', role: 'UI designer', quote: 'Este projeto foi uma grande aventura. Para mim, pude aprender muitas novas coisas que irão me proporcionar novos caminhos em minha carreira, além de também me permitir aplicar meus conhecimentos na prática.' },
  { name: 'Theo Carvalho', role: 'Pesquisador', quote: 'O projeto trouxe muitas contribuições para o entendimento do processo de projetar uma interface gráfica e as outras particularidades que envolvem todo o projeto. Como o entendimento da estruturação e pré-projeto para a construção de tal, assim como as exigências de mercado para concepção de uma produto relevante.' },
  { name: 'Antônio Venturieri', role: 'Produção Textual', quote: 'O projeto proporcionou grandes desafios pra sua realização, por conta do fator novidade na área atuada. No entanto, apesar do inerente desafio, o grande êxito do projeto habita na realização de um produto cujo resultado poderá ser útil para a sociedade.' },
  { name: 'Gustavo Sânvaro', role: 'Produção Textual', quote: 'O projeto foi elaborado com imensa dedicação, fico feliz com o resultado da pesquisa, pude aprender através do projetos inumeras ferramentas fúlcrais para o funcionamento das interfaces e que auxiliaram para o futuro da minha carreira.' },
  { name: 'Caroline Buna', role: 'Designer Gráfico', quote: 'Esse projeto foi muito importante para o meu crescimento, tanto pessoal quanto acadêmico. Durante o desenvolvimento, precisei estudar mais, pesquisar, testar ideias e aprender coisas novas, o que contribuiu bastante para ampliar meus conhecimentos. Além disso, o processo me ajudou a evoluir na forma de pensar, criar e resolver problemas, agregando ainda mais para minha vida academica.' },
];

export default function QuemSomos() {
  return (
    <>
      <PageTemplate
        title="A equipe do LocalizAçaí"
        heroBg="/elements/decoration/quem_somos/header.png"
        leftCurve="/elements/decoration/quem_somos/1.svg"
        rightCurve="/elements/decoration/quem_somos/2.svg"
      >
        <div className="flex items-stretch w-full">
          <div className="w-full md:w-2/3 md:flex-shrink-0 flex flex-col gap-8 md:gap-[60px] self-center">
            <p className="text-zinc-500 text-base md:text-lg">Olá, somos a equipe do LocalizAçaí, um grupo de acadêmicos apaixonados por açaí, que encontrou em uma observação de campo a oportunidade de ajudar a população belenense e região através da democratização do acesso a informação, facilitando sua busca por um açaí de qualidade e devidamente manipulado, segundo as normas estabelecidas pela vigilância sanitária.</p>
            <p className="text-zinc-500 text-base md:text-lg">Foi devido ao aumento de casos de Doença de Chagas no ano de 2026 que o grupo identificou que poderia criar uma forma contribuir com a população, utilizando de um sistema já existente que garante a segurança da produção do açaí, porém pouco conhecida.</p>
            <p className="text-zinc-500 text-base md:text-lg">Partindo desse principio, nossa missão era desenvolver uma maneira fácil de encontrar estabelecimentos de venda de açaí que estejam adequados segundo as normas da vigilância sanitária.</p>
            <p className="text-zinc-500 text-base md:text-lg">E assim nasceu o Localiz Açaí! Seu site de localização de pontos de venda de açaí devidamente certificados pela Região Metropolitana de Belém.</p>
            <p className="text-zinc-500 text-base md:text-lg">Através do nosso site, nós queremos fornecer para todo mundo que queira aproveitar um bom açaí seguro praticidade e confiança ao escolher onde irá comprar, para desfrutar suas boas refeições.</p>
            <p className="text-zinc-500 text-base md:text-lg">Este projeto foi idealizado por alunos da Universidade do Estado do Pará do curso de Bacharelado em Design, na disciplina de Projeto IV, a qual tem foco em design de interfaces, e aplicando suas particularidades projetuais para a concepção dessa interface a qual proporcionamos a experiência de acesso à informação de localização de pontos de açaí seguros.</p>
          </div>
          {/* Side illustration: desktop only */}
          <div
            className="hidden md:block flex-1 scale-80 bg-contain bg-no-repeat bg-right-top mr-[20px] ml-auto"
            style={{ backgroundImage: "url('/elements/decoration/quem_somos/casinha%202.webp')" }}
          />
        </div>
      </PageTemplate>

      <div className="bg-[#f5f5f5]">
        {/* Decorative figure: desktop only */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/elements/decoration/quem_somos/homenzinho.webp" alt="" className="hidden md:block h-72 w-auto ml-[80px]" />

        <section className="bg-background py-10 md:py-16 relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-l from-background to-transparent" />
          <div className="overflow-x-auto scrollbar-hide w-full">
            <div className="flex flex-nowrap gap-4 md:gap-6 px-6 md:px-16 w-max">
              {team.map((member, i) => (
                <div key={i} className="bg-[#f5f5f5] rounded-xl p-5 md:p-6 flex flex-col gap-4 w-[280px] md:w-[400px] flex-shrink-0">
                  <div>
                    <h3 className="text-primary font-bold text-xl md:text-2xl leading-tight">{member.name}</h3>
                    <p className="text-secondary font-bold text-sm mt-2">{member.role}</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-primary text-4xl md:text-5xl leading-none select-none">&ldquo;</span>
                    <p className="text-zinc-700 text-sm">{member.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
