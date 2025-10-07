import Image from 'next/image';
import type { FC } from 'react';

const LOGO_URL =
  'https://res.cloudinary.com/dsucs2hhi/image/upload/v1705351762/audaces/logo-audaces-white.svg';

const BrandLogo: FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'light' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-navy';

  return (
    <div className="flex items-center gap-3">
      <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white/10 p-3 shadow-card backdrop-blur">
        <Image
          src={LOGO_URL}
          alt="Audaces"
          fill
          sizes="56px"
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className={`text-xl font-semibold tracking-wide ${textColor}`}>Audaces ID</span>
        <span className={`text-sm font-medium ${variant === 'light' ? 'text-white/70' : 'text-neutral-500'}`}>
          Automação e Economia Industrial
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;
