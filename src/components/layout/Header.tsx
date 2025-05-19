"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FormularioPopup from "@/components/layout/FormularioPopup";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-primary bg-opacity-40 backdrop-blur-md z-50 py-3 md:py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-arj-prime.png"
            alt="ARJ PRIME Logo"
            width={120}
            height={40}
            className="h-12 md:h-20 w-auto transition-all duration-300"
            priority
          />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-accent transition-colors font-medium">HOME</Link>
          <Link href="/quem-somos" className="text-white hover:text-accent transition-colors font-medium">QUEM SOMOS</Link>
          <Link href="/seguros" className="text-white hover:text-accent transition-colors font-medium">SEGUROS</Link>
          <Link href="/investimentos" className="text-white hover:text-accent transition-colors font-medium">INVESTIMENTOS</Link>
          <Link href="/saude" className="text-white hover:text-accent transition-colors font-medium">SAÚDE</Link>
          <Link href="/financiamentos" className="text-white hover:text-accent transition-colors font-medium">FINANCIAMENTOS</Link>
          <Link href="/consorcios" className="text-white hover:text-accent transition-colors font-medium">CONSÓRCIOS</Link>

         <div className="flex items-center h-full">
  <FormularioPopup
    buttonText="CONTATO"
    className="text-white hover:text-accent transition-colors font-medium bg-transparent border-none shadow-none px-4 py-0"
  />
</div>

        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Navegação Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary bg-opacity-95 border-t border-white/10 py-4">
          <div className="container mx-auto flex flex-col space-y-4 px-4">
            <Link href="/" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>HOME</Link>
            <Link href="/seguros" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>SEGUROS</Link>
            <Link href="/investimentos" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>INVESTIMENTOS</Link>
            <Link href="/saude" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>PLANOS DE SAÚDE</Link>
            <Link href="/financiamentos" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>FINANCIAMENTOS</Link>
            <Link href="/consorcios" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>CONSÓRCIOS</Link>
            <Link
              href="#"
              className="text-white hover:text-accent transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                const botao = document.getElementById("botao-contato");
                if (botao) botao.click();
                toggleMenu();
              }}
            >
              CONTATO
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
