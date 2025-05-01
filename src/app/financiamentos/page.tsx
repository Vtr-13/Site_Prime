import FormLead from '@/components/forms/FormLead';

export default function Financiamentos() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-primary relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              <span className="text-accent">Financiamentos</span>
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Soluções para aquisição de imóveis, veículos e capital de giro para sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Modalidades de Financiamento */}
      <section className="section bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Modalidades de Financiamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Financiamento Imobiliário</h3>
              <p className="text-white/80 mb-6">
                Realize o sonho da casa própria com as melhores condições do mercado. Financiamos imóveis residenciais e comerciais, novos e usados.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• Taxas a partir de 8% ao ano</li>
                <li>• Financiamento de até 90% do valor do imóvel</li>
                <li>• Prazos de até 35 anos</li>
                <li>• Possibilidade de uso do FGTS</li>
                <li>• Opções com e sem entrada</li>
                <li>• Portabilidade de financiamento</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Financiamento de Veículos</h3>
              <p className="text-white/80 mb-6">
                Adquira seu veículo novo ou usado com condições especiais. Financiamos carros, motos, caminhões e outros veículos.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• Taxas competitivas no mercado</li>
                <li>• Financiamento de até 100% do valor do veículo</li>
                <li>• Prazos de até 60 meses</li>
                <li>• Aprovação rápida</li>
                <li>• Parcelas fixas</li>
                <li>• Refinanciamento de veículos</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Capital de Giro</h3>
              <p className="text-white/80 mb-6">
                Soluções financeiras para empresas que precisam de recursos para investir no negócio ou equilibrar o fluxo de caixa.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• Crédito rápido e descomplicado</li>
                <li>• Valores de R$ 10 mil a R$ 1 milhão</li>
                <li>• Prazos flexíveis de até 60 meses</li>
                <li>• Carência de até 90 dias</li>
                <li>• Sem necessidade de comprovação de destino</li>
                <li>• Garantias flexíveis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Passos do Processo */}
      <section className="section bg-primary/90">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Como Funciona o Processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold text-white mb-4 mt-2">Análise de Perfil</h3>
              <p className="text-white/80">
                Avaliamos seu perfil financeiro para identificar as melhores opções de financiamento disponíveis para você.
              </p>
            </div>
            
            <div className="card relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold text-white mb-4 mt-2">Simulação</h3>
              <p className="text-white/80">
                Realizamos simulações personalizadas com diferentes prazos e condições para você escolher a melhor opção.
              </p>
            </div>
            
            <div className="card relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold text-white mb-4 mt-2">Documentação</h3>
              <p className="text-white/80">
                Orientamos sobre toda a documentação necessária e auxiliamos na organização dos documentos para agilizar o processo.
              </p>
            </div>
            
            <div className="card relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">4</div>
              <h3 className="text-xl font-semibold text-white mb-4 mt-2">Aprovação e Liberação</h3>
              <p className="text-white/80">
                Após a aprovação, acompanhamos todo o processo de liberação do crédito até a conclusão da operação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="section bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Por que escolher a ARJ PRIME?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Vantagens Exclusivas</h3>
              <ul className="text-white/80 space-y-4">
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Acesso às melhores instituições financeiras do mercado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Consultoria especializada e personalizada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Negociação de taxas e condições diferenciadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Acompanhamento de todo o processo até a liberação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Suporte pós-contratação para dúvidas e necessidades</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Diferenciais</h3>
              <ul className="text-white/80 space-y-4">
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Análise completa do seu perfil financeiro para indicar a melhor solução</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Comparativo entre diferentes instituições financeiras</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Orientação sobre documentação e processos burocráticos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Atendimento personalizado com consultores especializados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Soluções integradas com outros produtos financeiros</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="section bg-primary/90">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Solicite uma Simulação</h2>
          <div className="max-w-2xl mx-auto">
            <FormLead 
              segmentoAlvo="Financiamentos" 
              campos={{
                nome: true,
                telefone: true,
                tipoFinanciamento: true,
                valor: true
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
