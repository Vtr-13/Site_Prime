
import type { Metadata, Viewport } from 'next'
import './globals.css'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons' // ✅ ajuste o caminho se necessário

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'ARJ PRIME - Excelência em Gestão Patrimonial',
  description:
    'Soluções completas para proteção e crescimento do seu patrimônio. Seguros, Empréstimos, Saúde, Financiamentos, Consórcios e Investimentos.',
  keywords:
    'gestão patrimonial, seguros, empréstimo consignado, planos de saúde, financiamentos, consórcios, investimentos',
  openGraph: {
    title: 'ARJ PRIME - Excelência em Gestão Patrimonial',
    description:
      'Soluções completas para proteção e crescimento do seu patrimônio.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://arjprime.com.br',
    siteName: 'ARJ PRIME',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ✅ COOKIE CONSENT - estilo ARJ PRIME */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
          data-cfasync="false"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function () {
                window.cookieconsent.initialise({
                  palette: {
                    popup: { background: "#1d1d1d" },
                    button: { background: "#f3b700", text: "#000000" }
                  },
                  theme: "classic",
                  position: "bottom",
                  content: {
                    message: 'Clicando em "Aceitar Cookies", você concorda com o armazenamento destes para melhoria na sua navegação pelo site.',
                    dismiss: "Aceitar Cookies",
                    deny: "Rejeitar Cookies",
                    link: "Saiba mais",
                    href: "/politica-privacidade"
                  },
                  type: "opt-in",
                  elements: {
                    allow: '<button class="cc-btn cc-allow">Aceitar Cookies</button>',
                    deny: '<button class="cc-btn cc-deny">Rejeitar Cookies</button>'
                  }
                });
              });
            `,
          }}
        />
      </head>

      <body className="bg-primary">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />

        {/* ✅ Componente client com os botões flutuantes */}
        <FloatingButtons />
      </body>
    </html>
  )
}
