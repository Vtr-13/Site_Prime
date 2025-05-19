'use client'
import React from 'react'

export default function TermoDeUso() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Termos de Uso</h1>

      <p className="mb-6">
        Este Termo de Uso regula o acesso e a utilização dos serviços oferecidos pelo site da <strong>ARJ PRIME</strong>, empresa especializada em gestão patrimonial
        e soluções financeiras premium. Ao navegar por este site ou utilizar qualquer de suas funcionalidades, você concorda com os termos descritos abaixo.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">1. Objetivo do Site</h2>
      <p className="mb-6">
        O site <strong>arjprime.com.br</strong> tem por objetivo apresentar os produtos e serviços oferecidos pela ARJ PRIME, incluindo:
        seguros, planos de saúde, investimentos, financiamentos, consórcios e soluções financeiras personalizadas. O site também visa informar, orientar
        e possibilitar a solicitação de contato ou simulações por meio de formulários.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">2. Aceitação dos Termos</h2>
      <p className="mb-6">
        Ao acessar ou utilizar este site, o usuário declara estar ciente, ter lido e concordado com os presentes Termos de Uso. Caso não concorde com qualquer cláusula,
        deve cessar imediatamente sua navegação.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">3. Serviços Oferecidos</h2>
      <p className="mb-6">
        Os serviços disponíveis no site têm caráter informativo e consultivo. Cotações, simulações e propostas reais dependem de análise técnica individual,
        podendo sofrer variações conforme critérios das instituições parceiras (seguradoras, operadoras de saúde, bancos ou administradoras).
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">4. Uso das Informações</h2>
      <p className="mb-6">
        As informações disponibilizadas no site são de uso exclusivo da ARJ PRIME e de seus usuários, sendo vedada a reprodução, distribuição ou modificação de qualquer conteúdo
        sem autorização prévia. O uso indevido poderá acarretar responsabilização civil e criminal.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">5. Responsabilidade do Usuário</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Preencher corretamente seus dados nos formulários;</li>
        <li>Utilizar o site de forma ética, segura e dentro dos limites da legislação vigente;</li>
        <li>Abster-se de tentar invadir, hackear ou comprometer a estrutura do site ou servidores.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-2">6. Responsabilidade da ARJ PRIME</h2>
      <p className="mb-6">
        A ARJ PRIME não garante que o site estará disponível de forma ininterrupta ou livre de erros, embora se esforce para garantir estabilidade e segurança.
        Também não se responsabiliza por decisões tomadas exclusivamente com base em conteúdos apresentados no site, sem a devida consultoria especializada.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">7. Proteção de Dados</h2>
      <p className="mb-6">
        Os dados pessoais coletados durante o uso do site estão protegidos conforme descrito em nossa <a href="/politica-de-privacidade" className="text-blue-600 underline">Política de Privacidade</a>,
        elaborada de acordo com a Lei Geral de Proteção de Dados (LGPD).
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">8. Propriedade Intelectual</h2>
      <p className="mb-6">
        Todos os textos, imagens, logos, marcas, códigos e conteúdos disponíveis no site são de propriedade da ARJ PRIME ou licenciados para seu uso, sendo protegidos por leis de direitos autorais
        e propriedade intelectual.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">9. Alterações no Termo</h2>
      <p className="mb-6">
        A ARJ PRIME reserva-se o direito de alterar, modificar ou atualizar este Termo de Uso a qualquer momento, sendo recomendável a revisão periódica por parte do usuário.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">10. Foro e Legislação Aplicável</h2>
      <p className="mb-6">
        Este termo será regido pela legislação brasileira. Quaisquer disputas serão resolvidas no foro da comarca de Jundiaí – SP, com renúncia de qualquer outro, por mais privilegiado que seja.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">11. Contato</h2>
      <p className="mb-6">
        Em caso de dúvidas, sugestões ou solicitações relacionadas a este Termo de Uso, entre em contato com a nossa equipe:
        <br />
        <strong>E-mail:</strong> <a href="mailto:contato@arjprime.com.br" className="text-blue-600 hover:underline">contato@arjprime.com.br</a><br />
        <strong>Telefone:</strong> (11) 98888-9998<br />
        <strong>Endereço:</strong> Av. Francisco Pereira de Castro, 1063 – Sala 4 – Anhangabaú, Jundiaí – SP – CEP 13208-110
      </p>

      <p className="text-sm text-gray-500 mt-10 text-center">
        Última atualização: Maio de 2025
      </p>
    </section>
  )
}
