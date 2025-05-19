'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { BarChart3, MessageCircle, FileText, Activity, Briefcase, UserSquare, TrendingUp,CheckCircle,  XCircle, Smile, 
  ShieldCheck, LineChart,Eye ,Package, BadgeCheck, Landmark, } from 'lucide-react'; 
import { useState } from "react"


export default function Page() {
  useEffect(() => {
  AOS.init({
    once: true,          // anima só na 1ª vez que aparece
    duration: 800,       // ms da animação
    easing: 'ease-out',  // feeling suave
  });
}, []);

const [openIndex3, setOpenIndex3] = useState<number | null>(null);

const faq = [
  {
    q: "Qual a diferença entre consultoria e assessoria de investimentos?",
    a: "A consultoria é independente e foca exclusivamente no que é melhor para o cliente. A assessoria, geralmente, está vinculada a corretoras, o que pode gerar conflitos de interesse."
  },
  {
    q: "Como funciona o processo de criação de um plano de investimentos?",
    a: "Começamos com uma análise completa do seu perfil, objetivos e tolerância ao risco. A partir disso, desenvolvemos um plano totalmente personalizado, sempre revisado conforme suas metas evoluem."
  },
  {
    q: "A Seiko Partners trabalha com clientes que têm investimentos no exterior?",
    a: "Sim, temos ampla experiência em alocação de recursos em ativos internacionais, garantindo uma diversificação sólida e alinhada às oportunidades globais."
  },
  {
    q: "É necessário um valor mínimo para contratar a Seiko Partners?",
    a: "Sim, atendemos clientes com, no mínimo, R$ 500 mil para investir, ou profissionais com alto potencial de geração de renda."
  },
  {
    q: "Como a Seiko Partners garante que minha carteira está alinhada com meu perfil de risco?",
    a: "Começamos com uma análise detalhada do seu perfil de risco, considerando fatores como objetivos financeiros, tolerância a perdas e horizonte de investimento. Com base nisso, desenvolvemos uma estratégia personalizada, ajustando a alocação de ativos para garantir que sua carteira esteja sempre em harmonia com seus objetivos e tolerância ao risco."
  },
  {
    q: "Quais são os custos envolvidos na consultoria da Seiko Partners?",
    a: "A Seiko Partners adota uma estrutura de taxas transparente, dependendo do valor do seu patrimônio. As taxas são reduzidas à medida que o valor investido aumenta, o que torna a consultoria acessível para clientes com diferentes níveis de investimento. Não cobramos taxas ocultas, garantindo total clareza nos custos."
  },
  {
    q: "Por que eu preciso de uma consultoria de investimentos se posso investir sozinho?",
    a: "Embora seja possível investir por conta própria, a consultoria de investimentos oferece uma abordagem estratégica e experiente. A Seiko Partners cuida de todo o planejamento e acompanhamento dos seus investimentos, ajudando a evitar erros comuns e a otimizar o retorno com base em seu perfil e objetivos. Isso proporciona mais segurança e tranquilidade ao tomar decisões financeiras."
  },
  {
    q: "Como funciona a relação entre a Seiko Partners e os bancos ou corretoras?",
    a: "A Seiko Partners é totalmente independente de qualquer banco ou corretora. Isso significa que não estamos vinculados a nenhum produto ou instituição específica. Recomendamos os melhores ativos para você, de acordo com o seu perfil e objetivos, sem pressões externas, o que garante uma consultoria imparcial e focada no seu sucesso."
  },
  {
    q: "O que um consultor de investimentos faz?",
    a: "Um consultor de investimentos atua como um especialista independente, analisando seu perfil financeiro, metas e tolerância ao risco para criar estratégias personalizadas. Ele recomenda os melhores ativos e alocações para o seu portfólio, sem vínculos com corretoras ou bancos, garantindo que suas decisões financeiras estejam sempre alinhadas aos seus interesses."
  }
];
  const informativos = [
    {
      titulo: 'Profissionais altamente qualificados',
      texto: 'Contamos com profissionais com certificações como CFA Charterholder e CGA, além de experiência no mercado.',
    },
    {
      titulo: 'Consultoria independente e sem conflitos de interesse',
      texto: 'Atuação agnóstica, sem vínculo com bancos. Foco no que é melhor para você, com total isenção.',
    },
    {
      titulo: 'Parceria de longo prazo',
      texto: 'Buscamos criar uma relação de confiança que inspire recomendações e fortaleça nossa parceria com o tempo.',
    },
    {
      titulo: 'Serviço Personalizado',
      texto: 'Estratégias ajustadas ao seu perfil, objetivos e momento de vida. Análises patrimoniais completas.',
    },
    {
      titulo: 'Acesso a Soluções Premium',
      texto: 'Soluções comparáveis aos bancos privados para clientes com alto patrimônio, com sofisticação e equilíbrio.',
    },
    {
      titulo: 'Metodologia baseada em excelência',
      texto: 'Abordagem com base nos conceitos do CFA Institute e Value Investing, com inovação técnica.',
    },
    {
      titulo: 'Rentabilidade e eficiência tributária',
      texto: 'Carteira otimizada para rendimento sem riscos desnecessários, incluindo eficiência tributária.',
    },
    {
      titulo: 'Proximidade e acompanhamento contínuo',
      texto: 'Monitoramento constante, com suporte dedicado e atenção total às suas dúvidas e necessidades.',
    },
  ]

  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative w-full h-[90vh] overflow-hidden text-white flex items-end">
        <Image
          src="/images/investimentos/hero.jpg"
          alt="Consultoria de investimentos"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        <div className="relative z-10 max-w-6xl px-6 pb-20 mx-auto text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4" data-aos="fade-down">
            Consultoria de investimentos exclusiva para ampliar seus resultados
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl" data-aos="fade-up" data-aos-delay="200">
            Planejamos estratégias personalizadas para você alcançar seus objetivos financeiros com segurança e rentabilidade.
          </p>
          <a
          href="https://wa.me/5511988889998 "
          target="_blank"
          className="inline-block bg-tertiary hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded transition duration-300" data-aos="zoom-in" data-aos-delay="200"
        >
          Faça uma analise personalizada
        </a>
        </div>
      </section>

      
      {/* CONSULTORIA QUE TRABALHA PRA VOCÊ */}
      <section className="py-20 bg-offwhite text-secondary">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Uma consultoria que trabalha <br /> para você
            </h2>
            <p className="text-gray-800">
              Na Seiko Partners, somos especialistas em criar estratégias de investimento 100% alinhadas às suas metas e perfil.
              Diferente das assessorias, nosso foco é exclusivamente no que é melhor para você, garantindo que seu patrimônio esteja sempre protegido e em crescimento.
            </p>
          </div>
          <div className="w-full" data-aos="fade-left" data-aos-delay="200">
            <Image
              src="/images/investimentos/consultores.jpg"
              alt="Consultores Seiko"
              width={600}
              height={400}
              className="rounded-md w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-offwhite text-neutro">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-left">

    {/* CARD 1 ---------------------------------------------------- */}
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      className="flex flex-col"
    >
      {/* ícone */}
      <Briefcase
        className="w-8 h-8 text-accent mb-4 shrink-0"
        strokeWidth={2}
      />

      {/* título + texto */}
      <h3 className="text-lg font-bold mb-2">
        Consultores independentes, sem vínculos com corretoras
      </h3>
      <p>
        Na Seiko Partners, trabalhamos com total independência, sem qualquer ligação a corretoras ou bancos. 
        Isso significa que todas as nossas recomendações são focadas exclusivamente no que é melhor para você, 
        garantindo decisões imparciais e alinhadas aos seus objetivos financeiros.
      </p>
    </div>

    {/* CARD 2 ---------------------------------------------------- */}
    <div
      data-aos="fade-up"
      data-aos-delay="150"
      className="flex flex-col"
    >
      <UserSquare
        className="w-8 h-8 text-accent mb-4 shrink-0"
        strokeWidth={2}
      />

      <h3 className="text-lg font-bold mb-2">
        Metodologia adaptada ao perfil do investidor
      </h3>
      <p>
        Cada cliente é único, e assim também deve ser sua estratégia de investimentos. Desenvolvemos planos personalizados,
         considerando seu perfil de risco, objetivos financeiros e momento de vida, 
         para garantir que suas metas sejam alcançadas de maneira eficiente e segura.
      </p>
    </div>

    {/* CARD 3 ---------------------------------------------------- */}
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="flex flex-col"
    >
      <TrendingUp
        className="w-8 h-8 text-accent mb-4 shrink-0"
        strokeWidth={2}
      />

      <h3 className="text-lg font-bold mb-2">
        Foco em otimização de rentabilidade com segurança
      </h3>
      <p>
        Nossa consultoria busca maximizar os resultados do seu patrimônio sem comprometer sua segurança financeira. 
        Não temos acesso às suas contas ou recursos, e todas as movimentações são realizadas diretamente por você, 
        minimizando riscos e garantindo controle total sobre os seus investimentos.
      </p>
    </div>

  </div>
</section>


{/* ETAPAS DO PROCESSO */}
<section className="py-24 bg-secondary text-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Saiba como funciona a nossa consultoria
    </h2>
    <p className="max-w-2xl mx-auto mb-16">
      Seguimos um processo estruturado para garantir que cada etapa da consultoria
      seja clara, eficiente e alinhada aos seus objetivos financeiros.
    </p>

    {/* TIMELINE GRADE 9×4 */}
    <div className="relative hidden md:grid md:grid-cols-9 md:grid-rows-4 gap-8 items-stretch">

      {/* LINHA VERTICAL */}
      <span className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-[#c35e00] z-0" />

      {/* ========= LINHA 1 ========= */}
      <div
        className="md:col-span-4 md:row-start-1 md:row-end-2 border border-borda rounded-lg p-4 text-right z-10"
        data-aos="fade-right"
        data-aos-delay="0"
      >
        <div className="flex justify-end mb-2">
    <BarChart3 className="w-6 h-6 text-[#c35e00]" strokeWidth={2} />
  </div>
        <h3 className="text-lg font-semibold mb-1">
          Diagnóstico e planejamento
        </h3>
        <p className="text-sm text-gray-300">
          Formulários e entrevista: Coletamos informações sobre seu momento de vida, objetivos e perfil de investidor.
          <br /><br />
          Estruturação de plano: Criamos uma estratégia detalhada e personalizada para o seu patrimônio.
        </p>
      </div>

      <div className="md:col-span-1 md:row-start-1 md:row-end-2 flex items-center justify-center z-10">
        <span
          className="w-4 h-4 bg-[#c35e00] rotate-45 transform aspect-square"
          data-aos="zoom-in"
          data-aos-delay="0"
        />
      </div>

      <div className="md:col-span-4 md:row-start-1 md:row-end-2" />

      {/* ========= LINHA 2 ========= */}
      <div className="md:col-span-4 md:row-start-2 md:row-end-3" />

      <div className="md:col-span-1 md:row-start-2 md:row-end-3 flex items-center justify-center z-10">
        <span
          className="w-4 h-4 bg-[#c35e00] rotate-45 transform aspect-square"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
      </div>

      <div
        className="md:col-span-4 md:row-start-2 md:row-end-3 border border-borda rounded-lg p-4 text-left z-10"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className="flex justify-start mb-2">
  <MessageCircle className="w-6 h-6 text-[#c35e00]" strokeWidth={2} />
</div>

        <h3 className="text-lg font-semibold mb-1">Proposta de alocação</h3>
        <p className="text-sm text-gray-300">
          Análise criteriosa: Cada ativo é avaliado para atender ao equilíbrio entre risco e retorno.
          <br /><br />
          Apresentação da proposta: Compartilhamos o plano sugerido para alinhamento.
        </p>
      </div>

      {/* ========= LINHA 3 ========= */}
      <div
        className="md:col-span-4 md:row-start-3 md:row-end-4 border border-borda rounded-lg p-4 text-right z-10"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div className="flex justify-end mb-2">
  <FileText className="w-6 h-6 text-[#c35e00]" strokeWidth={2} />
</div>

        <h3 className="text-lg font-semibold mb-1">Execução</h3>
        <p className="text-sm text-gray-300">
          Alocação: Você implementa o plano diretamente com suas instituições financeiras, com nosso suporte completo.
        </p>
      </div>

      <div className="md:col-span-1 md:row-start-3 md:row-end-4 flex items-center justify-center z-10">
        <span
          className="w-4 h-4 bg-[#c35e00] rotate-45 transform aspect-square"
          data-aos="zoom-in"
          data-aos-delay="400"
        />
      </div>

      <div className="md:col-span-4 md:row-start-3 md:row-end-4" />

      {/* ========= LINHA 4 ========= */}
      <div className="md:col-span-4 md:row-start-4 md:row-end-5" />

      <div className="md:col-span-1 md:row-start-4 md:row-end-5 flex items-center justify-center z-10">
        <span
          className="w-4 h-4 bg-[#c35e00] rotate-45 transform aspect-square"
          data-aos="zoom-in"
          data-aos-delay="600"
        />
      </div>

      <div
        className="md:col-span-4 md:row-start-4 md:row-end-5 border border-borda rounded-lg p-4 text-left z-10"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <div className="flex justify-start mb-2">
  <Activity className="w-6 h-6 text-[#c35e00]" strokeWidth={2} />
</div>

        <h3 className="text-lg font-semibold mb-1">Acompanhamento contínuo</h3>
        <p className="text-sm text-gray-300">
          Relatórios e reuniões: Envio de relatórios mensais e reuniões periódicas para discutir avanços e ajustes.
          <br /><br />
          Rebalanceamento: Adaptamos a carteira conforme mudanças de mercado ou evolução dos seus objetivos.
        </p>
      </div>
    </div>
  </div>
</section>


{/* COMPARATIVO */}
<section className="py-20 bg-[#f7f7ed] text-secondary">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Veja por que na consultoria de investimentos seus interesses sempre vêm em primeiro lugar
    </h2>
  </div>

  <div className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-6 text-left">

    {/* CONSULTORIA */}
    <div className="space-y-3" data-aos="fade-up">
      <h3 className="text-xl font-bold text-center mb-4">Consultoria de investimentos</h3>

      {[
        'Planejamento financeiro feito sob medida para você.',
        'Total independência na escolha das melhores opções de mercado.',
        'Estratégias personalizadas, alinhadas aos seus objetivos de vida.',
        'Foco exclusivo nos seus interesses, sem comissões ocultas.',
        'Atendimento especializado com análises detalhadas e claras.',
        'Acesso a uma visão ampla e imparcial do mercado financeiro.',
      ].map((item, i) => (
        <div key={i} className="bg-secondary text-white px-4 py-3 rounded flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-[#c35e00]" strokeWidth={2} />
          <span className="text-sm">{item}</span>
        </div>
      ))}

      <div className="flex items-center justify-center gap-2 text-sm pt-3 text-gray-800">
        <Smile className="w-4 h-4 text-[#c35e00]" strokeWidth={2} />
        <span className="font-medium">Foco no cliente</span>
      </div>
    </div>

    {/* VS */}
    <div className="flex items-center justify-center font-bold text-5xl" data-aos="zoom-in" data-aos-delay="200">VS</div>

    {/* ASSESSORIA */}
    <div className="space-y-3" data-aos="fade-up" data-aos-delay="400">
      <h3 className="text-xl font-bold text-center mb-4">Assessoria e bancos</h3>

      {[
        'Sugestões de produtos atreladas a metas de corretoras.',
        'Conflito de interesses: foco no que beneficia a corretora.',
        'Portfólios padronizados e com pouca flexibilidade.',
        'Atendimento genérico e menos individualizado.',
        'Dependência de comissões, que impactam as recomendações.',
        'Limitação a opções vinculadas à instituição representada.',
      ].map((item, i) => (
        <div key={i} className="border border-borda px-4 py-3 rounded flex items-center gap-3 text-sm text-gray-800">
          <XCircle className="w-5 h-5 text-[#c35e00]" strokeWidth={2} />
          <span>{item}</span>
        </div>
      ))}

      <div className="flex items-center justify-center gap-2 text-sm pt-3 text-gray-800">
        <Package className="w-4 h-4 text-[#c35e00]" strokeWidth={2} />
        <span className="font-medium">Foco no produto</span>
      </div>
    </div>
  </div>

  {/* CTA FINAL */}
  <div className="bg-secondary text-white text-center px-6 py-16 mt-20">
    <h3 className="text-2xl font-bold max-w-3xl mx-auto mb-6">
      Nosso sucesso está diretamente ligado ao seu: crescemos juntos, alinhando nossos interesses e alcançando resultados
    </h3>
    <a
          href="https://wa.me/5511988889998 "
          target="_blank"
          className="inline-block bg-tertiary hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded transition duration-300" data-aos="zoom-in" data-aos-delay="200"
        >
          Fale com um consultor
        </a>
  </div>
</section>

      {/* INFORMATIVOS - CARROSSEL */}
      <section className="py-24 bg-[#f7f7ed] text-secondary">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a Seiko Partners como sua consultoria de investimentos?
          </h2>
          <p className="max-w-3xl mx-auto mb-10">
            Seguimos um processo estruturado para garantir que cada etapa da consultoria seja clara, eficiente e alinhada aos seus objetivos financeiros.
          </p>
        </div>

        <div className="relative px-6"> {/* Abre espaço lateral para os botões */}

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={1}
    spaceBetween={30}
    navigation
    autoplay={{ delay: 10000 }}
    pagination={{ clickable: true }}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="max-w-6xl mx-auto"
  >
  {/* SLIDE 1 */}
  <SwiperSlide className="flex">
    <div className="flex flex-col border border-borda bg-offwhite rounded-md p-6 text-left shadow-sm hover:shadow-md transition w-full h-full min-h-[340px]">
      <ShieldCheck className="w-6 h-6 mb-4 text-[#c35e00]" strokeWidth={2} />
      <h3 className="text-lg font-semibold mb-2 text-secondary">
        Profissionais altamente qualificados
      </h3>
      <p className="text-sm text-secondary leading-relaxed">
        Contamos com profissionais com certificações de destaque, como CFA Charterholder e CGA, além de ampla experiência no mercado financeiro.
        <br /><br />
        Estamos sempre atualizados sobre as melhores práticas e oportunidades do mercado.
      </p>
    </div>
  </SwiperSlide>

  {/* SLIDE 2 */}
  <SwiperSlide className="flex">
    <div className="flex flex-col border border-borda bg-offwhite rounded-md p-6 text-left shadow-sm hover:shadow-md transition w-full h-full min-h-[340px]">
      <LineChart className="w-6 h-6 mb-4 text-[#c35e00]" strokeWidth={2} />
      <h3 className="text-lg font-semibold mb-2 text-secondary">
        Consultoria independente e sem conflitos de interesse
      </h3>
      <p className="text-sm text-secondary leading-relaxed">
        Atuamos de forma agnóstica, sempre priorizando o que é melhor para você.
        <br /><br />
       Não estamos vinculados a corretoras ou bancos; isso significa que todas as decisões são tomadas pensando exclusivamente no seu retorno e segurança.
      </p>
    </div>
  </SwiperSlide>

  {/* SLIDE 3 */}
  <SwiperSlide className="flex">
    <div className="flex flex-col border border-borda bg-offwhite rounded-md p-6 text-left shadow-sm hover:shadow-md transition w-full h-full min-h-[340px]">
      <Eye className="w-6 h-6 mb-4 text-[#c35e00]" strokeWidth={2} />
      <h3 className="text-lg font-semibold mb-2 text-secondary">
         Parceria de longo prazo
      </h3>
      <p className="text-sm text-secondary leading-relaxed">
        Nosso modelo é construído sobre um alinhamento estratégico que prioriza sua satisfação.
        <br /><br />
        Mais do que resultados financeiros, buscamos criar uma relação de confiança que inspire recomendações e fortaleça nossa parceria ao longo do tempo.
      </p>
    </div>
  </SwiperSlide>
   {/* SLIDE 4 — Acesso a soluções premium */}
   <SwiperSlide className="flex">
  <div className="flex flex-col border border-borda bg-offwhite rounded-md p-6 text-left shadow-sm hover:shadow-md transition w-full h-full min-h-[340px]">
    <BadgeCheck className="w-6 h-6 mb-4 text-[#c35e00]" strokeWidth={2} />
    <h3 className="text-lg font-semibold mb-2 text-secondary">
     Serviço Personalizado
    </h3>
    <p className="text-sm text-secondary leading-relaxed">
      Desenvolvemos estratégias ajustadas ao seu perfil, momento de vida e objetivos financeiros.
    <br /><br />
      Realizamos análises personalizadas que vão além dos investimentos, como planejamento financeiro completo e decisões patrimoniais.
    </p>
  </div>
</SwiperSlide>

{/* SLIDE 5 — Isenção e foco no cliente*/}
<SwiperSlide className="flex">
  <div className="flex flex-col border border-borda bg-offwhite rounded-md p-6 text-left shadow-sm hover:shadow-md transition w-full h-full min-h-[340px]">
    <Smile className="w-6 h-6 mb-4 text-[#c35e00]" strokeWidth={2} />
    <h3 className="text-lg font-semibold mb-2 text-secondary">
     Acesso a Soluções Premium
    </h3>
    <p className="text-sm text-secondary leading-relaxed">
      Oferecemos um serviço comparável ao de bancos privados para clientes com alto patrimônio.
      <br /><br />
      Realizamos alocações sofisticadas em ativos nacionais e internacionais, considerando sempre o equilíbrio entre risco e retorno.
    </p>
  </div>
</SwiperSlide>

{/* SLIDE 6 — Planejamento técnico e regulatório */}
<SwiperSlide className="flex">
  <div className="flex flex-col border border-borda bg-offwhite rounded-md p-6 text-left shadow-sm hover:shadow-md transition w-full h-full min-h-[340px]">
    <Landmark className="w-6 h-6 mb-4 text-[#c35e00]" strokeWidth={2} />
    <h3 className="text-lg font-semibold mb-2 text-secondary">
      Metodologia baseada em excelência
    </h3>
    <p className="text-sm text-secondary leading-relaxed">
      Nossa abordagem segue os conceitos do CFA Institute e Value Investing, oferecendo estratégias comprovadas e consistentes.
      <br /><br />
      Combinamos expertise técnica e inovação para maximizar o potencial do seu portfólio.
    </p>
  </div>
</SwiperSlide>



</Swiper>
</div>        
      </section>

    {/* SÓCIOS / EQUIPE */}
<section className="py-20 bg-neutro text-white" data-aos="fade-up">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      Quem está à frente da Seiko Partners
    </h2>

    {/* FABIO */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div className="relative h-[360px] w-full rounded overflow-hidden" data-aos="fade-right">
        <Image
          src="/images/investimentos/fabio.jpg"
          alt="Foto de Fabio Tsukahara"
          fill
          className="object-cover"
        />
      </div>
      <div data-aos="fade-left" data-aos-delay="150">
        <h3 className="text-xl font-bold text-accent mb-1">Fabio Tsukahara</h3>
        <p className="text-sm font-semibold mb-4">Diretor de Consultoria e Suitability</p>
        <p className="text-sm leading-relaxed mb-3">
          Com uma trajetória de 16 anos no mercado financeiro, Fabio é um profissional formado em Física, com mestrado em Finanças e pós-graduação em Liderança Organizacional pela Northwestern University.
        </p>
        <p className="text-sm leading-relaxed mb-3">
          Sua carreira foi iniciada em grandes bancos atuando nas áreas de riscos e controles.
        </p>
        <p className="text-sm leading-relaxed mb-3">
          Ao longo da carreira, atuou em posições executivas na área de Crédito em corporações como Porto Seguro, Riachuelo, Marisa e no Grupo Loft.
        </p>
        <p className="text-sm leading-relaxed">
          Na Seiko Partners, atua como Diretor de Consultoria de Valores Mobiliários, definindo diretrizes de orientação, recomendação e aconselhamento sobre investimento aos clientes.
        </p>
      </div>
    </div>

    {/* DIEGO */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right" data-aos-delay="300">
        <h3 className="text-xl font-bold text-accent mb-1">Diego Andrade</h3>
        <p className="text-sm font-semibold mb-4">Diretor de Compliance e PLD</p>
        <p className="text-sm leading-relaxed mb-3">
          Diego tem mais de 5 anos de experiência no mercado financeiro.
        </p>
        <p className="text-sm leading-relaxed mb-3">
          Já atuou como Assessor de Investimentos, foi Analista e Gestor em um Single Family Office e Analista de Crédito Sr. na Loft.
        </p>
        <p className="text-sm leading-relaxed mb-3">
          Formado em Relações Internacionais pela Unesp, possui a Certificação de Gestores ANBIMA (CGA) e é CFA Charterholder, uma das certificações com maior prestígio internacional.
        </p>
        <p className="text-sm leading-relaxed">
          Na Seiko Partners, atua como Diretor de Compliance e PLD, definindo as políticas e controles internos e garantindo o cumprimento da regulamentação.
        </p>
      </div>
      <div className="relative h-[360px] w-full rounded overflow-hidden" data-aos="fade-left" data-aos-delay="450">
        <Image
          src="/images/investimentos/diego.jpg"
          alt="Foto de Diego Andrade"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
  
</section>
  {/* CTA FINAL */}
      <section id="contato" className="py-20 bg-secondary text-white text-center px-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seus investimentos?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Fale com nossos consultores e descubra como alcançar seus objetivos com segurança, estratégia e personalização.
        </p>
        <a
          href="https://wa.me/5511988889998 "
          target="_blank"
          className="inline-block bg-tertiary hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded transition duration-300" data-aos="zoom-in" data-aos-delay="200"
        >
          Fale com um consultor
        </a>
      </section>

{/* FAQ */}
    <section className="py-16 bg-[#FDFCF6] text-[#0D1B1E]" data-aos="fade-up">
  <div className="container mx-auto px-6">
    <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
      Ficou com alguma dúvida?
    </h2>

    <div className="max-w-4xl mx-auto divide-y divide-[#e9e4da] rounded-lg overflow-hidden">
      {faq.map(({ q, a }, i) => {
        const isOpen = openIndex3 === i;
        return (
          <div
            key={i}
            className={`transition-all ${isOpen ? "bg-orange-50 border border-orange-300" : "bg-[#FDFCF6]"}`}
          >
            <button
              onClick={() => setOpenIndex3(isOpen ? null : i)}
              className={`w-full text-left p-4 font-medium flex justify-between items-center ${
                isOpen ? "text-orange-700" : "text-[#0D1B1E]"
              }`}
            >
              {q}
              <span
                className={`text-xl transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-orange-700" : "text-[#0D1B1E]"
                }`}
              >
                {isOpen ? "▲" : "▼"}
              </span>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 text-sm text-[#0D1B1E]">
                {a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>



    </main>
  )
}
