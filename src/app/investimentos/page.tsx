import FormLead from '@/components/forms/FormLead';

export default function Investimentos() {
  const perfisInvestidor = [
    'Conservador',
    'Moderado',
    'Arrojado',
    'Agressivo'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-primary relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              <span className="text-accent">Investimentos</span>
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Consultoria especializada para diversificação e crescimento do seu patrimônio.
            </p>
          </div>
        </div>
      </section>

      {/* Consultoria em Renda Fixa */}
      <section className="section bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Consultoria em Renda Fixa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/80 mb-6">
                A renda fixa é uma categoria de investimentos que oferece maior previsibilidade de retorno e menor volatilidade. É ideal para investidores com perfil conservador a moderado, ou para compor a base de qualquer carteira de investimentos.
              </p>
              <p className="text-white/80">
                Nossa consultoria especializada em renda fixa analisa as melhores opções disponíveis no mercado, considerando seu perfil de investidor, objetivos financeiros e horizonte de tempo, para recomendar as aplicações mais adequadas às suas necessidades.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Opções de Renda Fixa</h3>
              <ul className="text-white/80 space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Tesouro Direto</span>
                    <p className="mt-1">Títulos públicos com diferentes prazos e indexadores</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">CDBs e LCIs/LCAs</span>
                    <p className="mt-1">Certificados e Letras com garantia do FGC</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Debêntures</span>
                    <p className="mt-1">Títulos de dívida corporativa com diferentes riscos e retornos</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Fundos de Renda Fixa</span>
                    <p className="mt-1">Diversificação com gestão profissional</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria em Renda Variável */}
      <section className="section bg-primary/90">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Consultoria em Renda Variável</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-white mb-4">Opções de Renda Variável</h3>
              <ul className="text-white/80 space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Ações</span>
                    <p className="mt-1">Participação em empresas listadas na bolsa de valores</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">ETFs</span>
                    <p className="mt-1">Fundos negociados em bolsa que replicam índices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Fundos Imobiliários</span>
                    <p className="mt-1">Investimento em imóveis com liquidez e sem burocracia</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <div>
                    <span className="font-medium">Fundos de Investimento</span>
                    <p className="mt-1">Diversificação com gestão profissional especializada</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-white/80 mb-6">
                A renda variável oferece potencial de retornos superiores à renda fixa no longo prazo, embora com maior volatilidade. É recomendada para investidores com perfil moderado a arrojado, que buscam crescimento patrimonial e estão dispostos a assumir riscos calculados.
              </p>
              <p className="text-white/80">
                Nossa consultoria em renda variável analisa o cenário macroeconômico, setores promissores e empresas com bons fundamentos para recomendar as melhores oportunidades de investimento, sempre alinhadas ao seu perfil e objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Previdência Privada */}
      <section className="section bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Previdência Privada</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Planejamento Sucessório</h3>
              <p className="text-white/80 mb-6">
                A previdência privada é uma excelente ferramenta de planejamento sucessório, permitindo a transferência de recursos para os beneficiários de forma mais simples e com potencial redução de custos tributários.
              </p>
              <ul className="text-white/80 space-y-2">
                <li>• Não entra em inventário</li>
                <li>• Transferência imediata aos beneficiários</li>
                <li>• Redução de custos com inventário</li>
                <li>• Planejamento tributário eficiente</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Complemento de Aposentadoria</h3>
              <p className="text-white/80 mb-6">
                Garanta uma aposentadoria tranquila com uma renda complementar à previdência social, mantendo seu padrão de vida na terceira idade.
              </p>
              <ul className="text-white/80 space-y-2">
                <li>• Planos PGBL e VGBL</li>
                <li>• Diferentes perfis de investimento</li>
                <li>• Aportes flexíveis</li>
                <li>• Benefícios fiscais (PGBL)</li>
                <li>• Opções de renda vitalícia ou temporária</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Acumulação de Patrimônio</h3>
              <p className="text-white/80 mb-6">
                Utilize a previdência privada como estratégia de acumulação de patrimônio de longo prazo, com vantagens tributárias e gestão profissional.
              </p>
              <ul className="text-white/80 space-y-2">
                <li>• Disciplina de investimento</li>
                <li>• Gestão profissional</li>
                <li>• Tributação diferenciada</li>
                <li>• Diversificação de investimentos</li>
                <li>• Liquidez após carência</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Atendimento Premium */}
      <section className="section bg-primary/90">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Atendimento Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/80 mb-6">
                Na ARJ PRIME, oferecemos um atendimento premium e personalizado para nossos clientes investidores. Entendemos que cada pessoa possui objetivos financeiros únicos e necessita de uma estratégia personalizada para alcançá-los.
              </p>
              <p className="text-white/80">
                Nossos consultores de investimentos são certificados e possuem ampla experiência no mercado financeiro, garantindo um aconselhamento de alto nível e alinhado às melhores práticas do mercado. Trabalhamos com arquitetura aberta, o que nos permite recomendar os melhores produtos disponíveis, sem conflitos de interesse.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Diferenciais</h3>
              <ul className="text-white/80 space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Consultores certificados e experientes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Atendimento personalizado e exclusivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Arquitetura aberta de investimentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Relatórios periódicos de desempenho</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Revisão constante da estratégia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Acesso a produtos exclusivos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="section bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Agende uma Consultoria</h2>
          <div className="max-w-2xl mx-auto">
            <FormLead 
              segmentoAlvo="Investimentos" 
              campos={{
                nome: true,
                telefone: true,
                objetivoFinanceiro: true,
                perfilInvestidor: true
              }}
              perfisInvestidor={perfisInvestidor}
            />
          </div>
        </div>
      </section>
    </>
  );
}
