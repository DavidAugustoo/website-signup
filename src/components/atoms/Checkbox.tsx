import type { InputHTMLAttributes, ReactNode } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
};

const Checkbox = ({ className = '', label, ...props }: CheckboxProps) => (
  <label className="inline-flex cursor-pointer items-start gap-3">
    <input
      type="checkbox"
      className={`mt-1 h-4 w-4 rounded border-neutral-300 text-brand-blue focus:ring-brand-blue ${className}`}
      {...props}
    />
    <span className="text-sm text-neutral-500">{label}</span>
  </label>
);

export default Checkbox;
