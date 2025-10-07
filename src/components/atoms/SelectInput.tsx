import type { SelectHTMLAttributes } from 'react';

export type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  hasError?: boolean;
};

const baseClasses =
  'w-full appearance-none rounded-lg border border-neutral-100 bg-white/80 px-4 py-3 text-sm text-neutral-700 shadow-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 disabled:cursor-not-allowed disabled:bg-neutral-50';

const errorClasses = 'border-red-400 text-red-600 focus:border-red-500 focus:ring-red-200';

const SelectInput = ({ hasError = false, className = '', children, ...props }: SelectInputProps) => {
  const composed = `${baseClasses} ${hasError ? errorClasses : ''} ${className}`.trim();

  return (
    <div className="relative">
      <select className={`${composed} pr-10`} {...props}>
        {children}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-neutral-300">
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.354a.75.75 0 011.04 1.08l-4.235 3.827a.75.75 0 01-1.04 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default SelectInput;
