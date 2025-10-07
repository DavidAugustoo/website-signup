import type { FC, ReactNode } from 'react';

type HelperTextProps = {
  tone?: 'neutral' | 'error';
  children: ReactNode;
};

const toneClasses: Record<NonNullable<HelperTextProps['tone']>, string> = {
  neutral: 'text-neutral-400',
  error: 'text-red-500'
};

const HelperText: FC<HelperTextProps> = ({ tone = 'neutral', children }) => (
  <p className={`mt-1 text-xs ${toneClasses[tone]}`}>{children}</p>
);

export default HelperText;
