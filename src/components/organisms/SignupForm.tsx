import InputField from '@/components/molecules/InputField';
import PrimaryButton from '@/components/atoms/PrimaryButton';
import TermsNotice from '@/components/molecules/TermsNotice';

const jobOptions = [
  { value: 'diretor', label: 'Diretor(a)' },
  { value: 'gerente', label: 'Gerente' },
  { value: 'coordenador', label: 'Coordenador(a)' },
  { value: 'analista', label: 'Analista' },
  { value: 'assistente', label: 'Assistente' }
];

const SignupForm = () => (
  <form className="flex flex-col gap-6">
    <div className="space-y-2">
      <h1 className="text-3xl font-semibold text-neutral-900">Registre-se para obter seu Audaces ID</h1>
      <p className="text-sm text-neutral-500">
        Esta conta será necessária para acesso ao Audaces Automação e Economia Industrial. Entre com seus dados abaixo para continuar.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <InputField
        id="company"
        label="Audaces ID (seu endereço de e-mail)"
        type="email"
        required
        inputProps={{ placeholder: 'Inserir email' }}
        className="md:col-span-2"
      />
      <InputField
        id="firstName"
        label="Primeiro nome"
        required
        inputProps={{ placeholder: 'Inserir nome' }}
      />
      <InputField
        id="lastName"
        label="Sobrenome"
        required
        inputProps={{ placeholder: 'Inserir último nome' }}
      />
      <InputField
        id="jobTitle"
        label="Cargo"
        component="select"
        required
        options={jobOptions}
        selectProps={{ defaultValue: '' }}
        className="md:col-span-2"
      />
      <InputField
        id="phone"
        label="Telefone"
        type="tel"
        inputProps={{ placeholder: 'Inserir contato' }}
      />
      <InputField
        id="companyName"
        label="Empresa"
        inputProps={{ placeholder: 'Texto' }}
      />
      <InputField
        id="teamSize"
        label="Tamanho da equipe"
        component="select"
        options={[
          { value: '1-10', label: '1-10 colaboradores' },
          { value: '11-50', label: '11-50 colaboradores' },
          { value: '51-200', label: '51-200 colaboradores' },
          { value: '200+', label: 'Acima de 200 colaboradores' }
        ]}
        selectProps={{ defaultValue: '' }}
      />
      <InputField
        id="industry"
        label="Segmento"
        component="select"
        options={[
          { value: 'moda', label: 'Moda e vestuário' },
          { value: 'calcados', label: 'Calçados' },
          { value: 'industria', label: 'Indústria têxtil' }
        ]}
        selectProps={{ defaultValue: '' }}
      />
    </div>
    <TermsNotice />
    <PrimaryButton type="submit" fullWidth>
      Criar conta
    </PrimaryButton>
  </form>
);

export default SignupForm;
