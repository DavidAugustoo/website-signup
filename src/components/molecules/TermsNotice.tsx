import Checkbox from '@/components/atoms/Checkbox';

type TermsNoticeProps = {
  onTermsChange?: (checked: boolean) => void;
  onMarketingChange?: (checked: boolean) => void;
};

const TermsNotice = ({ onTermsChange, onMarketingChange }: TermsNoticeProps) => (
  <div className="flex flex-col gap-3">
    <Checkbox
      required
      onChange={(event) => onTermsChange?.(event.target.checked)}
      label={
        <span>
          Eu concordo com os{' '}
          <a href="#" className="font-medium text-brand-blue underline-offset-2 hover:underline">
            Termos de Uso
          </a>
        </span>
      }
    />
    <Checkbox
      onChange={(event) => onMarketingChange?.(event.target.checked)}
      label={
        <span>
          Concordo em receber contatos da Audaces sobre o Audaces ID e seus benefícios.
        </span>
      }
    />
  </div>
);

export default TermsNotice;
