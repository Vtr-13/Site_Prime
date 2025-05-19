import FormLead from '@/components/forms/FormLead';
import Image from 'next/image';
import Link from 'next/link';

export default function Seguros() {
  const segurosOptions = [
    'Vida',
    'Auto',
    'Residencial',
    'Empresarial',
    'Responsabilidade Civil',
    'Transportes',
    'Patrimonial'
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-accent">ARJ PRIME</span> <span className="text-white">SEGUROS</span> 
            </h1>
            <p className="text-lg mb-8">
              Proteção completa para você, sua família e seu patrimônio com as melhores opções do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Ramos de Seguros Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">
            <span className="text-primary">Nossos Ramos de</span> <span className="text-accent">Seguros</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Seguro de Vida</h3>
              <p className="text-gray-600 mb-4">
                Garanta a proteção financeira da sua família em momentos difíceis. Nossos planos de seguro de vida oferecem coberturas para morte natural, acidental, invalidez e doenças graves.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Cobertura para morte natural e acidental</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Invalidez permanente total ou parcial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Cobertura para doenças graves</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Assistência funeral</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Seguro Auto</h3>
              <p className="text-gray-600 mb-4">
                Proteção completa para seu veículo contra colisão, roubo, furto e danos a terceiros. Conte com assistência 24h, carro reserva e diversos serviços adicionais.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Cobertura contra colisão, roubo e furto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Responsabilidade civil contra terceiros</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Assistência 24h em todo o Brasil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Carro reserva e serviços adicionais</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Seguro Residencial</h3>
              <p className="text-gray-600 mb-4">
                Proteja seu lar contra incêndio, roubo, danos elétricos e muito mais. Nossos planos incluem assistência 24h para reparos emergenciais e coberturas personalizadas.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Cobertura contra incêndio e explosão</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Proteção contra roubo e furto qualificado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Danos elétricos e quebra de vidros</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Assistência 24h para reparos emergenciais</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Seguro Empresarial</h3>
              <p className="text-gray-600 mb-4">
                Soluções completas para proteger seu negócio contra incêndio, roubo, danos elétricos, lucros cessantes e responsabilidade civil. Mantenha sua empresa segura.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Proteção patrimonial completa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Cobertura para lucros cessantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Responsabilidade civil operações</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Planos personalizados por segmento</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Responsabilidade Civil</h3>
              <p className="text-gray-600 mb-4">
                Proteção financeira contra reclamações de terceiros por danos causados pela sua atividade profissional ou empresarial. Essencial para profissionais liberais e empresas.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>RC Profissional para diversas áreas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>RC Operações para empresas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Cobertura para danos materiais e corporais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Proteção jurídica especializada</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Seguro de Transportes</h3>
              <p className="text-gray-600 mb-4">
                Garanta a proteção das suas mercadorias durante o transporte nacional e internacional. Cobertura para roubo, colisão, tombamento e muito mais.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Transporte nacional e internacional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Cobertura para roubo e furto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Proteção contra avarias e danos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Soluções para diversos tipos de carga</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            <span className="text-white">Solicite uma</span> <span className="text-accent">Cotação</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para oferecer a melhor solução para suas necessidades.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FormLead 
              title="Fale com um Consultor" 
              service="seguro"
              serviceOptions={segurosOptions}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
