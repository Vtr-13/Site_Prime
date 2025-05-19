'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary py-4 border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-arj-prime.png"  
            alt="ARJ PRIME Logo"
            width={150}
            height={50}
            className="h-24 w-auto"
            priority
          />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-accent transition-colors font-medium">
            Home
          </Link>
          <Link href="/seguros" className="text-white hover:text-accent transition-colors font-medium">
            Seguros
          </Link>
          <Link href="/emprestimo-consignado" className="text-white hover:text-accent transition-colors font-medium">
            Empréstimos
          </Link>
          <Link href="/saude" className="text-white hover:text-accent transition-colors font-medium">
            Planos de Saúde
          </Link>
          <Link href="/financiamentos" className="text-white hover:text-accent transition-colors font-medium">
            Financiamentos
          </Link>
          <Link href="/consorcios" className="text-white hover:text-accent transition-colors font-medium">
            Consórcios
          </Link>
          <Link href="/investimentos" className="text-white hover:text-accent transition-colors font-medium">
            Investimentos
          </Link>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Link
            href="#contato"
            className="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-6 rounded-md transition-all"
          >
            Faça uma Cotação
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Navegação Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 py-4">
          <div className="container mx-auto flex flex-col space-y-4 px-4">
            <Link href="/" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/seguros" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Seguros
            </Link>
            <Link href="/emprestimo-consignado" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Empréstimos
            </Link>
            <Link href="/saude" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Planos de Saúde
            </Link>
            <Link href="/financiamentos" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Financiamentos
            </Link>
            <Link href="/consorcios" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Consórcios
            </Link>
            <Link href="/investimentos" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>
              Investimentos
            </Link>
            <Link
              href="#contato"
              className="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-6 rounded-md text-center transition-all"
              onClick={toggleMenu}
            >
              Faça uma Cotação
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
