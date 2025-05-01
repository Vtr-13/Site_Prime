import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'ARJ PRIME - Excelência em Gestão Patrimonial',
  description: 'Soluções completas para proteção e crescimento do seu patrimônio. Seguros, Empréstimos, Saúde, Financiamentos, Consórcios e Investimentos.',
  keywords: 'gestão patrimonial, seguros, empréstimo consignado, planos de saúde, financiamentos, consórcios, investimentos',
  openGraph: {
    title: 'ARJ PRIME - Excelência em Gestão Patrimonial',
    description: 'Soluções completas para proteção e crescimento do seu patrimônio.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://crodo.arjprime.com.br',
    siteName: 'ARJ PRIME',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
