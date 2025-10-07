import type { ButtonHTMLAttributes } from 'react';

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

const PrimaryButton = ({ fullWidth = false, className = '', children, ...props }: PrimaryButtonProps) => (
  <button
    className={`rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:bg-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:ring-offset-2 focus:ring-offset-white ${
      fullWidth ? 'w-full' : ''
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;
