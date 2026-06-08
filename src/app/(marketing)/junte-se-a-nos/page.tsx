import PageTemplate from '@/components/marketing/PageTemplate';
import JunteSeANosForm from '@/components/marketing/JunteSeANosForm';

export const metadata = { title: 'Junte-se a nós — Localiza Açaí' };

export default function JunteSeANos() {
  return (
    <PageTemplate
      title="Junte-se a nós"
      heroBg="/carousel/1.webp"
    >
      <div className="flex justify-center items-stretch w-full min-w-0 overflow-x-hidden">
      <div className="w-4/5 md:w-[30%] md:flex-shrink-0 flex flex-col gap-4 md:gap-8 self-center min-w-0">
        <div className="flex flex-col gap-2 md:gap-4 text-justify">
          <p className="font-sans font-normal text-[20px] leading-none text-zinc-500">
              Se você já possui um estabelecimento certificado pela Casa do Açaí e deseja se juntar a nós, sinta-se bem vindo.
          </p>
          <p className="font-sans font-normal text-[20px] leading-none text-zinc-500">
              Preencha as informações abaixo e envie o formulário, nossa equipe fará a verificação das informações para aprovar seu cadastro.
          </p>
        </div>
        <JunteSeANosForm />
      </div>
      </div>
    </PageTemplate>
  );
}
