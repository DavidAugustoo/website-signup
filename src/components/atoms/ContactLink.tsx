import type { FC, ReactNode } from 'react';

const ContactLink: FC<{ href: string; icon: ReactNode; children: ReactNode }> = ({ href, icon, children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue transition hover:text-brand-navy"
  >
    <span className="text-base">{icon}</span>
    {children}
  </a>
);

export default ContactLink;
