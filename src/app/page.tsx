import Image from 'next/image';
import Link from 'next/link';
import FormLead from '@/components/forms/FormLead';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="text-white">Soluções Financeiras</span><br />
              <span className="text-accent">Integradas e Personalizadas</span>
            </h1>
            <p className="text-lg mb-8">
              Consultoria de investimentos, Seguros, Planos de Saúde e muito mais.
            </p>
            <Link href="#servicos" className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-md transition-all inline-block">
              Saiba Mais
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-primary/40 p-8 rounded-lg backdrop-blur-sm border border-white/10 max-w-md">
              <h2 className="text-3xl font-heading font-semibold mb-6 text-accent">ARJ PRIME</h2>
              <p className="mb-6">
                Soluções completas para proteção e crescimento do seu patrimônio, com atendimento personalizado e consultoria especializada.
              </p>
              <div className="flex justify-center">
                <Image 
                  src="/images/logo-arj-prime.png" 
                  alt="ARJ PRIME Logo" 
                  width={200} 
                  height={80} 
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            <span className="text-primary">Quem</span> <span className="text-accent">Somos</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                A ARJ PRIME é especializada em oferecer soluções financeiras completas para proteção e crescimento do seu patrimônio, com atendimento personalizado e consultoria especializada.
              </p>
              <p className="text-lg mb-6">
                Nossa abordagem integrada permite que você tenha acesso a um portfólio completo de serviços financeiros e securitários em um único lugar, simplificando a gestão do seu patrimônio e garantindo a melhor estratégia para seus objetivos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-primary text-white p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-accent">Missão</h3>
                  <p>Proporcionar soluções financeiras e securitárias de excelência, contribuindo para a proteção e o crescimento do patrimônio de nossos clientes.</p>
                </div>
                <div className="bg-primary text-white p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-accent">Visão</h3>
                  <p>Ser reconhecida como referência em gestão patrimonial no mercado brasileiro, destacando-se pela excelência no atendimento.</p>
                </div>
                <div className="bg-primary text-white p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-accent">Valores</h3>
                  <ul className="space-y-2">
                    <li>• Excelência em serviços</li>
                    <li>• Ética e transparência</li>
                    <li>• Compromisso com resultados</li>
                    <li>• Inovação constante</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
                <div className="relative z-10 bg-white p-2 rounded-lg shadow-lg">
                  <Image 
                    src="/images/Minha imagem do ChatGPT (3).png" 
                    alt="Equipe ARJ PRIME" 
                    width={500} 
                    height={350} 
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">+100</div>
              <div className="text-xl text-white font-heading">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">12</div>
              <div className="text-xl text-white font-heading">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">7</div>
              <div className="text-xl text-white font-heading">Serviços Especializados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            <span className="text-primary">Nossos</span> <span className="text-accent">Serviços</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Seguros</h3>
              <p className="text-gray-600 mb-4">
                Proteção completa para você, sua família e seu patrimônio com as melhores opções do mercado.
              </p>
              <Link href="/seguros" className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Empréstimo Consignado</h3>
              <p className="text-gray-600 mb-4">
                Taxas competitivas e condições especiais para empréstimos com desconto em folha.
              </p>
              <Link href="/emprestimo-consignado" className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Saúde</h3>
              <p className="text-gray-600 mb-4">
                Planos de saúde individuais, familiares e empresariais com ampla cobertura.
              </p>
              <Link href="/saude" className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Financiamentos</h3>
              <p className="text-gray-600 mb-4">
                Soluções para aquisição de imóveis, veículos e capital de giro para sua empresa.
              </p>
              <Link href="/financiamentos" className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Consórcios</h3>
              <p className="text-gray-600 mb-4">
                Planejamento financeiro inteligente para aquisição de bens e serviços.
              </p>
              <Link href="/consorcios" className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Investimentos</h3>
              <p className="text-gray-600 mb-4">
                Consultoria especializada para diversificação e crescimento do seu patrimônio.
              </p>
              <Link href="/investimentos" className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            <span className="text-primary">O que nossos</span> <span className="text-accent">clientes dizem</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "A ARJ PRIME me ajudou a encontrar o consórcio ideal. Estou muito feliz com a minha aquisição!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    MS
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Silva</h4>
                  <p className="text-sm text-gray-500">Cliente desde 2022</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "O suporte financeiro da ARJ PRIME foi essencial para a expansão da nossa empresa. Profissionalismo e dedicação em cada etapa do processo."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    JS
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">João Santos</h4>
                  <p className="text-sm text-gray-500">Empresário</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Encontrei o plano perfeito para minha empresa com a ajuda da ARJ PRIME. Atendimento excepcional!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    AP
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Ana Paula</h4>
                  <p className="text-sm text-gray-500">Empresária</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            <span className="text-primary">Entre em</span> <span className="text-accent">Contato</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">Pronto para garantir o melhor suporte financeiro?</h3>
              <p className="text-gray-600 mb-8">
                Entre em contato com nossa equipe de especialistas e descubra como podemos ajudar você a alcançar seus objetivos financeiros com soluções personalizadas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Endereço</h4>
                    <p className="text-gray-600">Av. Paulista, 1000, São Paulo - SP</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Telefone</h4>
                    <p className="text-gray-600">(11) 3456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">E-mail</h4>
                    <p className="text-gray-600">contato@arjprime.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FormLead />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
