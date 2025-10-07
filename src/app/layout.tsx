import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Audaces ID - Cadastro',
  description: 'Registre-se para acessar seu Audaces ID e economizar na indústria.'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pt-BR" className={inter.variable}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
