/* === ARJ Prime ▸ Tela Quem Somos === */
'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import FormularioPopup from '@/components/layout/FormularioPopup' // ajuste o caminho conforme sua estrutura

export default function Page() {
  /* inicia AOS apenas uma vez */
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  /* números de destaque (ajuste se tiver dados reais) */
  const diferenciais = [
    { valor: '10+', texto: 'anos de mercado' },
    { valor: '1000+', texto: 'clientes atendidos' },
    { valor: 'R$ 50 mi+', texto: 'em patrimônio protegido' },
    { valor: '24 h', texto: 'suporte humanizado' },
  ]

  return (
    <main className="text-white bg-gradient-to-b from-primary via-primary/90 to-primary/80">
      {/* HERO */}
      <section
        id="hero-quem-somos"
        className="relative flex flex-col items-center justify-center text-center py-24 px-6"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">QUEM SOMOS</h1>
        <p className="max-w-3xl text-lg md:text-xl">
          A ARJ PRIME É UMA EMPRESA ESPECIALIZADA EM GESTÃO PATRIMONIAL E SOLUÇÕES FINANCEIRAS. OFERECEMOS CONSULTORIA ESTRATÉGICA E PERSONALIZADA EM SEGUROS,
           PLANOS DE SAÚDE, INVESTIMENTOS, FINANCIAMENTOS E CONSÓRCIOS. NOSSO COMPROMISSO É PROPORCIONAR SEGURANÇA,
            EXCLUSIVIDADE E CRESCIMENTO SUSTENTÁVEL PARA O PATRIMÔNIO DOS NOSSOS CLIENTES.
        </p>
      </section>

      {/* HISTÓRIA / PROPÓSITO */}
      <section
        id="historia"
        className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center"
      >
        <div data-aos="fade-right">
          <h2 className="texto-titulo">Nossa Essência</h2>
          <p className="texto-paragrafo">
  A <strong>ARJ PRIME</strong> surgiu com o propósito de conectar pessoas e empresas a um futuro financeiro mais seguro e inteligente.
   Estamos construindo uma trajetória sólida no mercado de seguros, investimentos e soluções financeiras, com foco em um atendimento consultivo,
    humano e transparente.
</p>

        </div>

        {/* Substitua por <Image …> quando definir a arte */}
        <div
  className="rounded-lg overflow-hidden w-full h-64 relative"
  data-aos="fade-left"
>
  <Image
    src="/images/quem_somos/hero.png"
    alt="Atendimento consultivo personalizado"
    fill
    className="object-cover"
    priority
  />
</div>
      </section>

      {/* MISSÃO ▸ VISÃO ▸ VALORES */}
      <section id="triplade" className="bg-primary/95 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {/* Missão */}
          <div data-aos="zoom-in">
            <h3 className="subtitulo-card">Missão</h3>
            <p className="texto-paragrafo-sm">
              Conectar pessoas e empresas a um futuro financeiro mais seguro e próspero, 
              oferecendo soluções premium em gestão patrimonial, seguros e investimentos. 
              Atuamos com excelência, personalização e transparência.
            </p>
          </div>

          {/* Visão */}
          <div data-aos="zoom-in" data-aos-delay="100">
            <h3 className="subtitulo-card">Visão</h3>
            <p className="texto-paragrafo-sm">
             Ser referência nacional em gestão patrimonial e soluções financeiras exclusivas,
              reconhecida pela confiança, inovação e atendimento excepcional.
            </p>
          </div>

          {/* Valores */}
          <div data-aos="zoom-in" data-aos-delay="200">
            <h3 className="subtitulo-card">Valores</h3>
            <ul className="texto-paragrafo-sm space-y-1 text-left list-disc list-inside">
              <li>Atendimento Personalizado e Humano</li>
              <li>Inovação Consciente e Sofisticada</li>
              <li>Transparência e Integridade Absoluta</li>
              <li>Educação Financeira e Empoderamento</li>
              <li>Sustentabilidade&nbsp;&amp;&nbsp;Responsabilidade Social</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS EM NÚMEROS */}
      <section
  id="diferenciais"
  className="max-w-4xl mx-auto py-20 px-6 text-center"
  data-aos="fade-up"
>
  <h2 className="texto-titulo mb-6">Por que escolher a ARJ PRIME?</h2>
  <p className="texto-paragrafo">
    Atuamos com compromisso real com cada cliente, oferecendo orientação acessível, linguagem simples e foco total na sua tranquilidade financeira. Estamos prontos para crescer com você.
  </p>
</section>


    {/* CALL TO ACTION */}
<section
  id="cta"
  className="py-16 bg-offwhite text-primary text-center"
  data-aos="fade-up"
>
  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    Quer entender como podemos ajudar você?
  </h2>
  <p className="mb-8">
    Fale com um consultor da ARJ PRIME e receba uma orientação personalizada para proteger e impulsionar seu patrimônio.
  </p>

  {/* Substitua o antigo botão por isto abaixo: */}
   <FormularioPopup
    buttonText="Solicitar Cotação"
    className="inline-block bg-accent/100 text-accent hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition shadow-md"
  />

</section>

    </main>
  )
}
