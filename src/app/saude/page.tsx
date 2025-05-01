import FormLead from '@/components/forms/FormLead';

export default function Saude() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-primary relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Planos de <span className="text-accent">Saúde</span>
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Soluções completas em saúde para você, sua família e sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Planos Individuais */}
      <section className="section bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Planos Individuais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Plano Essencial</h3>
              <p className="text-white/80 mb-6">
                Cobertura básica com rede credenciada de qualidade para atendimentos ambulatoriais e hospitalares.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• Consultas em especialidades básicas</li>
                <li>• Exames de diagnóstico simples</li>
                <li>• Internações em enfermaria</li>
                <li>• Urgência e emergência</li>
              </ul>
              <p className="text-accent font-medium">A partir de R$ 250,00/mês</p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Plano Premium</h3>
              <p className="text-white/80 mb-6">
                Cobertura ampliada com rede credenciada estendida e acesso a hospitais de primeira linha.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• Consultas em todas especialidades</li>
                <li>• Exames de alta complexidade</li>
                <li>• Internações em apartamento</li>
                <li>• Urgência e emergência nacional</li>
                <li>• Reembolso para procedimentos</li>
              </ul>
              <p className="text-accent font-medium">A partir de R$ 450,00/mês</p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Plano Exclusive</h3>
              <p className="text-white/80 mb-6">
                O mais completo plano individual com cobertura premium e serviços exclusivos.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• Livre escolha de médicos e hospitais</li>
                <li>• Exames sem limitação</li>
                <li>• Internações em suíte</li>
                <li>• Cobertura internacional</li>
                <li>• Reembolso integral</li>
                <li>• Concierge médico 24h</li>
              </ul>
              <p className="text-accent font-medium">A partir de R$ 850,00/mês</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Familiares */}
      <section className="section bg-primary/90">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Planos Familiares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Família Essencial</h3>
              <p className="text-white/80 mb-6">
                Proteção básica para toda a família com cobertura completa e preço acessível.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• Consultas em especialidades básicas</li>
                <li>• Exames de diagnóstico simples</li>
                <li>• Internações em enfermaria</li>
                <li>• Urgência e emergência</li>
                <li>• Desconto progressivo por dependente</li>
              </ul>
              <p className="text-accent font-medium">A partir de R$ 600,00/mês (família de 3 pessoas)</p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Família Premium</h3>
              <p className="text-white/80 mb-6">
                Cobertura ampliada para toda a família com benefícios exclusivos.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• Consultas em todas especialidades</li>
                <li>• Exames de alta complexidade</li>
                <li>• Internações em apartamento</li>
                <li>• Urgência e emergência nacional</li>
                <li>• Desconto progressivo por dependente</li>
                <li>• Programas de prevenção familiar</li>
              </ul>
              <p className="text-accent font-medium">A partir de R$ 1.100,00/mês (família de 3 pessoas)</p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Família Exclusive</h3>
              <p className="text-white/80 mb-6">
                O mais completo plano familiar com cobertura premium e serviços exclusivos.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• Livre escolha de médicos e hospitais</li>
                <li>• Exames sem limitação</li>
                <li>• Internações em suíte</li>
                <li>• Cobertura internacional</li>
                <li>• Desconto progressivo por dependente</li>
                <li>• Concierge médico familiar 24h</li>
                <li>• Telemedicina ilimitada</li>
              </ul>
              <p className="text-accent font-medium">A partir de R$ 2.000,00/mês (família de 3 pessoas)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Empresariais */}
      <section className="section bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Planos Empresariais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Empresarial Básico</h3>
              <p className="text-white/80 mb-6">
                Solução ideal para pequenas empresas que buscam oferecer benefício de saúde com custo acessível.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• A partir de 3 vidas</li>
                <li>• Rede credenciada regional</li>
                <li>• Cobertura ambulatorial e hospitalar</li>
                <li>• Internações em enfermaria</li>
                <li>• Coparticipação opcional</li>
              </ul>
              <p className="text-accent font-medium">Cotação personalizada</p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Empresarial Completo</h3>
              <p className="text-white/80 mb-6">
                Plano intermediário com excelente custo-benefício para empresas de médio porte.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• A partir de 10 vidas</li>
                <li>• Rede credenciada nacional</li>
                <li>• Cobertura ambulatorial e hospitalar</li>
                <li>• Internações em apartamento</li>
                <li>• Programas de prevenção</li>
                <li>• Telemedicina</li>
              </ul>
              <p className="text-accent font-medium">Cotação personalizada</p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-white mb-4">Empresarial Premium</h3>
              <p className="text-white/80 mb-6">
                Solução premium para empresas que valorizam a saúde e bem-estar dos colaboradores.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li>• A partir de 30 vidas</li>
                <li>• Rede credenciada premium nacional</li>
                <li>• Cobertura ambulatorial e hospitalar</li>
                <li>• Internações em apartamento</li>
                <li>• Programas de prevenção avançados</li>
                <li>• Telemedicina 24h</li>
                <li>• Medicina ocupacional integrada</li>
                <li>• Gestão de saúde corporativa</li>
              </ul>
              <p className="text-accent font-medium">Cotação personalizada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela Comparativa */}
      <section className="section bg-primary/90">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Tabela Comparativa</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-4 px-4 text-left text-white">Características</th>
                  <th className="py-4 px-4 text-center text-white">Essencial</th>
                  <th className="py-4 px-4 text-center text-white">Premium</th>
                  <th className="py-4 px-4 text-center text-white">Exclusive</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white">Rede Credenciada</td>
                  <td className="py-3 px-4 text-center text-white/80">Regional</td>
                  <td className="py-3 px-4 text-center text-white/80">Nacional</td>
                  <td className="py-3 px-4 text-center text-white/80">Internacional</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white">Consultas</td>
                  <td className="py-3 px-4 text-center text-white/80">Especialidades básicas</td>
                  <td className="py-3 px-4 text-center text-white/80">Todas especialidades</td>
                  <td className="py-3 px-4 text-center text-white/80">Livre escolha</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white">Exames</td>
                  <td className="py-3 px-4 text-center text-white/80">Básicos</td>
                  <td className="py-3 px-4 text-center text-white/80">Alta complexidade</td>
                  <td className="py-3 px-4 text-center text-white/80">Sem limitação</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white">Internação</td>
                  <td className="py-3 px-4 text-center text-white/80">Enfermaria</td>
                  <td className="py-3 px-4 text-center text-white/80">Apartamento</td>
                  <td className="py-3 px-4 text-center text-white/80">Suíte</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white">Reembolso</td>
                  <td className="py-3 px-4 text-center text-white/80">Não</td>
                  <td className="py-3 px-4 text-center text-white/80">Parcial</td>
                  <td className="py-3 px-4 text-center text-white/80">Integral</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white">Telemedicina</td>
                  <td className="py-3 px-4 text-center text-white/80">Básica</td>
                  <td className="py-3 px-4 text-center text-white/80">Completa</td>
                  <td className="py-3 px-4 text-center text-white/80">Ilimitada 24h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="section bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Solicite uma Cotação</h2>
          <div className="max-w-2xl mx-auto">
            <FormLead 
              segmentoAlvo="Saúde" 
              campos={{
                nome: true,
                telefone: true,
                numeroDependentes: true,
                planoInteresse: true
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
