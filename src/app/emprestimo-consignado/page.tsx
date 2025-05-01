import FormLead from '@/components/forms/FormLead';

export default function EmprestimoConsignado() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-primary relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Empréstimo <span className="text-accent">Consignado</span>
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Taxas competitivas e condições especiais para empréstimos com desconto em folha.
            </p>
          </div>
        </div>
      </section>

      {/* Explicação do Produto */}
      <section className="section bg-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">O que é Empréstimo Consignado?</h2>
              <p className="text-white/80 mb-6">
                O empréstimo consignado é uma modalidade de crédito com desconto direto na folha de pagamento, oferecendo taxas de juros mais baixas em comparação a outras linhas de crédito disponíveis no mercado.
              </p>
              <p className="text-white/80">
                Por ter o pagamento descontado diretamente do salário ou benefício, o empréstimo consignado representa menor risco para as instituições financeiras, o que permite oferecer condições mais vantajosas para os clientes.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Vantagens</h3>
              <ul className="text-white/80 space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Taxas de juros reduzidas em comparação a outras modalidades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Prazo estendido para pagamento (até 96 meses)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Aprovação facilitada e sem consulta ao SPC/Serasa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Desconto direto na folha de pagamento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Sem necessidade de avalista ou garantias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Possibilidade de portabilidade para melhores condições</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Público-alvo */}
      <section className="section bg-primary/90">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Para quem é indicado?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Aposentados e Pensionistas</h3>
              <p className="text-white/80">
                Beneficiários do INSS podem comprometer até 35% do benefício com empréstimo consignado, além de 5% para cartão de crédito consignado, totalizando 40% da renda mensal.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Servidores Públicos</h3>
              <p className="text-white/80">
                Funcionários públicos federais, estaduais e municipais podem acessar o crédito consignado com condições especiais e margem consignável conforme regulamentação específica.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Funcionários de Empresas Privadas</h3>
              <p className="text-white/80">
                Colaboradores de empresas que possuem convênio com instituições financeiras também podem solicitar o empréstimo consignado, com desconto em folha de pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usos Comuns */}
      <section className="section bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Usos Comuns do Empréstimo Consignado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-3">Quitação de Dívidas</h3>
              <p className="text-white/80">
                Unificação de dívidas com juros mais altos, como cartão de crédito e cheque especial.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-3">Reforma Residencial</h3>
              <p className="text-white/80">
                Financiamento de melhorias e reformas em sua residência com taxas mais acessíveis.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-3">Tratamentos de Saúde</h3>
              <p className="text-white/80">
                Custeio de procedimentos médicos, tratamentos e medicamentos não cobertos por planos.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-3">Educação</h3>
              <p className="text-white/80">
                Investimento em cursos, especializações e formação profissional para você ou familiares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="section bg-primary/90">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Solicite sua Proposta</h2>
          <div className="max-w-2xl mx-auto">
            <FormLead 
              segmentoAlvo="Empréstimo Consignado" 
              campos={{
                nome: true,
                cpf: true,
                telefone: true,
                valorDesejado: true,
                rendaMensal: true
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
