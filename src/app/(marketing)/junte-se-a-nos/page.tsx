import PageTemplate from '@/components/marketing/PageTemplate';
import JunteSeANosForm from '@/components/marketing/JunteSeANosForm';

export const metadata = { title: 'Junte-se a nós — Localiza Açaí' };

export default function JunteSeANos() {
  return (
    <PageTemplate
      title="Junte-se a nós"
      heroBg="/carousel/1.webp"
    >
      <div className="flex items-stretch w-full">
      <div className="w-full md:w-2/3 md:flex-shrink-0 flex flex-col gap-4 md:gap-8 self-center">
        <div className="flex flex-col gap-2 md:gap-4">
          <p className="text-zinc-500 text-base md:text-lg">
              Se você já possui um estabelecimento certificado pela Casa do Açaí e deseja se juntar a nós, sinta-se bem vindo.
          </p>
          <p className="text-zinc-500 text-base md:text-lg">
              Preencha as informações abaixo e envie o formulário, nossa equipe fará a verificação das informações para aprovar seu cadastro.
          </p>
        </div>
        <JunteSeANosForm />
      </div>
      </div>
    </PageTemplate>
  );
}
