import type { InputHTMLAttributes } from 'react';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

const baseClasses =
  'w-full rounded-lg border border-neutral-100 bg-white/80 px-4 py-3 text-sm text-neutral-700 placeholder-neutral-300 shadow-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 disabled:cursor-not-allowed disabled:bg-neutral-50';

const errorClasses = 'border-red-400 text-red-600 focus:border-red-500 focus:ring-red-200 placeholder-red-300';

const TextInput = ({ hasError = false, className = '', ...props }: TextInputProps) => {
  const composed = `${baseClasses} ${hasError ? errorClasses : ''} ${className}`.trim();

  return <input className={composed} {...props} />;
};

export default TextInput;
