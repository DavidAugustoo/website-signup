import type { ReactNode } from 'react';
import HelperText from '@/components/atoms/HelperText';
import TextInput, { type TextInputProps } from '@/components/atoms/TextInput';
import SelectInput, { type SelectInputProps } from '@/components/atoms/SelectInput';

type FieldBaseProps = {
  id: string;
  label: string;
  helperText?: ReactNode;
  required?: boolean;
  hasError?: boolean;
  className?: string;
};

type TextFieldProps = FieldBaseProps & {
  type?: 'text' | 'email' | 'password' | 'tel';
  inputProps?: Omit<TextInputProps, 'id' | 'required'>;
  component?: 'input';
};

type SelectFieldProps = FieldBaseProps & {
  component: 'select';
  options: Array<{ value: string; label: string }>;
  selectProps?: Omit<SelectInputProps, 'id' | 'required'>;
};

type InputFieldProps = TextFieldProps | SelectFieldProps;

const labelClass = 'mb-2 block text-sm font-medium text-neutral-700';

const InputField = (props: InputFieldProps) => {
  const { id, label, helperText, required, hasError = false, className = '' } = props;

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? <span className="text-brand-blue"> *</span> : null}
      </label>
      {props.component === 'select' ? (
        <SelectInput id={id} hasError={hasError} required={required} {...(props.selectProps ?? {})}>
          <option value="">Selecione uma opção</option>
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectInput>
      ) : (
        <TextInput id={id} type={props.type ?? 'text'} hasError={hasError} required={required} {...(props.inputProps ?? {})} />
      )}
      {helperText ? <HelperText tone={hasError ? 'error' : 'neutral'}>{helperText}</HelperText> : null}
    </div>
  );
};

export default InputField;
