import PageTemplate from '@/components/marketing/PageTemplate';
import JunteSeANosForm from '@/components/marketing/JunteSeANosForm';

export const metadata = { title: 'Junte-se a nós — Localiza Açaí' };

export default function JunteSeANos() {
  return (
    <PageTemplate
      title="Junte-se a nós"
      heroBg="/carousel/1.webp"
    >
      <div className="flex flex-col gap-8 w-full max-w-lg mx-auto">
        <div className="flex flex-col gap-4">
          <p className="text-zinc-500 text-base md:text-lg">
              Se você já possui um estabelecimento certificado pela Casa do Açaí e deseja se juntar a nós, sinta-se bem vindo.
          </p>
          <p className="text-zinc-500 text-base md:text-lg">
              Preencha as informações abaixo e envie o formulário, nossa equipe fará a verificação das informações para aprovar seu cadastro.
          </p>
        </div>
        <JunteSeANosForm />
      </div>
    </PageTemplate>
  );
}
