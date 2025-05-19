'use client'

// src/components/Footer.tsx
// Footer do site ARJ PRIME – rev. 11/05/2025 (logos alinhados)

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'


export default function Footer() {
  const anoAtual = new Date().getFullYear();
  const pathname = usePathname()
  const isInvestimentos = pathname === '/investimentos'


  /** Lista de logos das autarquias / certificadoras */
  const logos = [
    { src: "/images/autarquias/anbima-logo.svg",   alt: "ANBIMA" },
    { src: "/images/autarquias/abecip-logo.svg",   alt: "ABECIP" },
    { src: "/images/autarquias/febraban-logo.svg", alt: "FEBRABAN" },
    { src: "/images/autarquias/susep-logo.svg",    alt: "SUSEP" },
    { src: "/images/autarquias/cvm-logo.svg",      alt: "CVM" },
    { src: "/images/autarquias/bacen-logo.svg",    alt: "Banco Central" },
  ];

  return (
    <footer className={`pt-16 pb-8 text-white ${isInvestimentos ? 'bg-secondary text-neutro' : 'bg-primary bg-opacity-40 backdrop-blur-md'}`}>
      <div className="container mx-auto px-4">

        {/* ---------- GRID PRINCIPAL ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* 1. Identidade + redes sociais */}
          <div className="col-span-1">
            <Image
              src="/images/logo-arj-prime.png"
              alt="ARJ PRIME Logo"
              width={150}
              height={60}
              className="h-12 w-auto mb-4"
            />

            <p className="text-gray-300 mt-4">
              Soluções financeiras integradas e personalizadas para proteção e
              crescimento do seu patrimônio.
            </p>

            <div className="flex space-x-4 mt-6">
              {/* Facebook */}
              <a href="https://www.facebook.com/arjseguros" aria-label="Facebook" className="hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/arj_prime/" aria-label="Instagram" className="hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Serviços */}
          <div className="col-span-1">
            <h3 className="text-xl font-heading font-semibold mb-4 text-accent">
              Serviços
            </h3>
            <ul className="space-y-2">
              <li><Link href="/seguros"              className="text-gray-300 hover:text-accent">Seguros</Link></li>
              <li><Link href="/investimentos"        className="text-gray-300 hover:text-accent">Investimentos</Link></li>
              <li><Link href="/saude"                className="text-gray-300 hover:text-accent">Planos de Saúde</Link></li>                        
              <li><Link href="/financiamentos"       className="text-gray-300 hover:text-accent">Financiamentos</Link></li>
              <li><Link href="/consorcios"           className="text-gray-300 hover:text-accent">Consórcios</Link></li>
              
            </ul>
          </div>

          {/* 3. Institucional */}
          <div className="col-span-1">
            <h3 className="text-xl font-heading font-semibold mb-4 text-accent">
              Institucional
            </h3>
            <ul className="space-y-2">
              <li><Link href="/quem-somos"                   className="text-gray-300 hover:text-accent">Quem Somos</Link></li>
              <li><Link href="/quem-somos/#historia"         className="text-gray-300 hover:text-accent">Missão, Visão e Valores</Link></li>
              <li><Link href="/blog"                         className="text-gray-300 hover:text-accent">Blog</Link></li>
              <li><Link href="/politica-privacidade"         className="text-gray-300 hover:text-accent">Política de Privacidade</Link></li>
              <li><Link href="/termo-uso"                    className="text-gray-300 hover:text-accent">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* 4. Contato */}
          <div className="col-span-1">
            <h3 className="text-xl font-heading font-semibold mb-4 text-accent">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  Av. Francisco Pereira de Castro, 1063 – Sala 4 – Anhangabaú, Jundiaí-SP
                </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.516l1.13-2.257a1 1 0 011.21-.502l4.49 1.498A1 1 0 0121 19v1a2 2 0 01-2 2h-1C9.716 22 3 15.284 3 7V5z" />
                </svg>
                <span className="text-gray-300">(11) 98888-9999</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">contato@arjprime.com.br</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">Seg – Sáb • 8h → 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- LOGOS DAS ENTIDADES ---------- */}
        <div className="flex flex-wrap justify-center gap-8 items-center mt-12">
          {logos.map((logo) => (
            <div key={logo.alt} className="h-18 w-24 flex justify-center items-center">
              <Image
                {...logo}
                height={48}      // altura fixa
                width={96}       // largura declarativa (ajustada pelo w-auto)
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* ---------- DISCLAIMER ---------- */}
        <p className="max-w-5xl mx-auto mt-6 text-center text-xs leading-relaxed text-gray-300">
          <strong>ARJ PRIME Corretora de Seguros e Planos de Saúde LTDA</strong>
          (CNPJ 59.985.681/0001-37) é responsável <u>exclusivamente</u> pela
          intermediação de seguros, previdência, capitalização e planos de saúde,
          sob supervisão da SUSEP e demais reguladores do setor.
          <br /><br />
          <strong>ARJ PRIME Banker Soluções em Investimentos, Crédito e Seguros LTDA</strong>
          (CNPJ 59.043.589/0001-58) responde pelos serviços de consultoria de
          investimentos, distribuição de produtos financeiros, operações de
          crédito, consórcios e gestão patrimonial, em conformidade com CVM,
          Banco Central e ANBIMA.
          <br /><br />
          Profissionais habilitados em <em>CEA – ANBIMA, CA-600 – ABECIP, ENS (Vida,
          Previdência &amp; Capitalização), FBB 100 – FEBRABAN</em> e
          <em> PLDFT para Correspondentes</em>. As informações aqui divulgadas têm
          caráter educativo e não constituem oferta ou garantia de rentabilidade.
          Todo investimento envolve riscos, inclusive possibilidade de perda
          integral do capital. Avalie objetivos e perfil de risco e, se
          necessário, consulte nossos especialistas.
        </p>

        {/* ---------- COPYRIGHT ---------- */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {anoAtual} ARJ PRIME. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
