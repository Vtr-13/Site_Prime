import FormLead from '@/components/forms/FormLead';
import Image from 'next/image';
import Link from 'next/link';

export default function Consorcios() {
  const consorciosOptions = [
    'Imóveis',
    'Veículos',
    'Equipamentos',
    'Serviços'
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="text-white">CONSÓRCIO</span>
            </h1>
            <p className="text-xl mb-8">
              Realize seus planos com as melhores condições
            </p>
            <Link href="#contato" className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-md transition-all inline-block">
              ENTRE EM CONTATO
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image 
              src="/images/Minha imagem do ChatGPT.png" 
              alt="Consórcio ARJ PRIME" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* O que é Consórcio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            <span className="text-primary">O QUE É</span> <span className="text-accent">CONSÓRCIO?</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8 text-gray-700">
              Consórcio é um sistema de compra programada, onde um grupo de pessoas se reúne para adquirir bens ou serviços, sem cobrança de juros ou pagamento de entrada. É uma forma inteligente de planejar a compra de bens e serviços, com parcelas que cabem no seu bolso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">DIVERSOS OBJETIVOS</h3>
              <p className="text-gray-600">
                Adquira soluções para qualquer objetivo, seja para compra de imóvel, carro, moto, equipamentos ou serviços.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">VANTAGENS E FLEXIBILIDADE</h3>
              <p className="text-gray-600">
                Não incorre em juros, taxas administrativas e você tem flexibilidade de pagamento e tempo de quitação em até 200 meses.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">ASSESSORAMENTO ESPECIALIZADO</h3>
              <p className="text-gray-600">
                Dedicamos nossos consultores para encontrar o melhor consórcio de acordo com suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Consórcios Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            <span className="text-primary">TIPOS DE</span> <span className="text-accent">CONSÓRCIOS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Consórcio de Imóveis</h3>
              <p className="text-gray-600 mb-6">
                Realize o sonho da casa própria, compre um terreno, financie uma reforma ou adquira um imóvel comercial com parcelas que cabem no seu orçamento.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Créditos de R$ 50 mil a R$ 1 milhão</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Prazos de até 200 meses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Sem juros e sem entrada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Parcelas reduzidas</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Consórcio de Veículos</h3>
              <p className="text-gray-600 mb-6">
                Adquira carros, motos, caminhões ou qualquer outro veículo novo ou usado com parcelas acessíveis e sem os juros do financiamento tradicional.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Créditos de R$ 20 mil a R$ 300 mil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Prazos de até 80 meses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Veículos novos ou usados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Economia de até 30% em relação ao financiamento</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Consórcio de Equipamentos</h3>
              <p className="text-gray-600 mb-6">
                Ideal para empresas que precisam adquirir máquinas, equipamentos industriais, agrícolas ou tecnológicos sem comprometer o fluxo de caixa.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Créditos personalizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Prazos flexíveis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Planejamento financeiro para empresas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Sem impacto em linhas de crédito</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Consórcio de Serviços</h3>
              <p className="text-gray-600 mb-6">
                Planeje viagens, cirurgias, tratamentos estéticos, festas de casamento, formação acadêmica e outros serviços com tranquilidade financeira.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Créditos a partir de R$ 5 mil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Prazos adaptáveis às suas necessidades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Múltiplas opções de serviços</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Planejamento para realizações pessoais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            <span className="text-primary">O QUE NOSSOS</span> <span className="text-accent">CLIENTES DIZEM</span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-card">
            <div className="flex flex-col items-center text-center">
              <div className="text-accent mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-xl text-gray-700 mb-6 italic">
                "A ARJ PRIME me ajudou a encontrar o consórcio ideal. Estou muito feliz com a minha aquisição!"
              </p>
              <div className="mt-4">
                <h4 className="font-heading font-semibold text-lg">Maria Silva</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            <span className="text-white">ENTRE EM CONTATO E SAIBA MAIS SOBRE NOSSOS</span><br />
            <span className="text-accent">PLANOS DE CONSÓRCIO.</span>
          </h2>
        </div>
      </section>

      {/* Form Section */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FormLead 
              title="Fale com um Consultor" 
              service="consórcio"
              serviceOptions={consorciosOptions}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
