/* PÁGINA │ FINANCIAMENTOS – ARJ PRIME */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import FormularioPopup from "@/components/layout/FormularioPopup";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";



/* --------------------------------- DADOS --------------------------------- */

const imagens = [
  "/images/financiamentos/hero1.jpg",
  "/images/financiamentos/hero2.jpg",
  "/images/financiamentos/hero3.jpg"
];

const modalidades = [
  {
    id: "car-equity",
    nome: "CAR EQUITY",
    icone: "/images/financiamentos/icons/carequity.svg",
    desc: "Use seu carro como garantia e libere dinheiro rápido, com juros baixos e sem deixar de usá-lo. Crédito fácil, seguro e aprovado muito rapido.",
    bullets: ["• • • O QUE É CAR EQUITY?",
  "Empréstimo com garantia de veículo (carro ou moto)",
  "Você continua com o carro enquanto paga o empréstimo",
  "Taxas de juros mais baixas que empréstimos pessoais tradicionais",
  "Mais fácil aprovação, mesmo para negativados",

  "• • • PRINCIPAIS VANTAGENS",
  "Liberação rápida do dinheiro (às vezes em até 24h)",
  "Valor de crédito baseado no valor de mercado do veículo",
  "Parcelas que cabem no bolso com prazos de até 60 meses",
  "Possibilidade de antecipar parcelas sem multas",
  "Documentação simplificada e processo 100% digital",

  "• • • TIPOS DE VEÍCULOS ACEITOS",
  "Carros de passeio em bom estado e com até 15 anos de uso",
  "Motos de alta cilindrada (consulte critérios específicos)",
  "Veículos quitados ou parcialmente quitados (dependendo da instituição)",

  "• • • PERFIL IDEAL DO CLIENTE",
  "Autônomos ou informais sem comprovação de renda tradicional",
  "Pessoas negativadas ou com score baixo",
  "Quem precisa de dinheiro rápido sem perder o carro",
  "Empreendedores buscando capital de giro",

  "• • • DOCUMENTAÇÃO NECESSÁRIA",
  "Documento do veículo (CRLV/CRV)",
  "CNH válida ou RG + CPF",
  "Comprovante de residência",
  "Comprovante de renda (quando possível, mas não obrigatório)",

  "• • • PARA QUE SERVE O CRÉDITO?",
  "Pagamento de dívidas ou negativação",
  "Investimentos em negócios ou reformas",
  "Cobrir emergências ou imprevistos",
  "Organizar a vida financeira",

  "• • • QUER FAZER UMA SIMULAÇÃO?",
  "Fale agora com um consultor e veja quanto pode liberar usando seu carro como garantia"
    ],
  },
  
  {
  id: "home-equity",
  nome: "HOME EQUITY",
  icone: "/images/financiamentos/icons/home.svg",
  desc: "Use seu imóvel como garantia e conquiste crédito com juros baixos e prazos longos, sem precisar vender sua casa. Liberação rápida e ideal para grandes projetos.",
  bullets: [
    "• • • O QUE É HOME EQUITY?",
    "Empréstimo com garantia de imóvel residencial ou comercial",
    "Você continua usando o imóvel normalmente enquanto paga o crédito",
    "Taxas de juros mais baixas do que outras linhas de crédito",
    "Prazos longos para pagamento, de até 20 anos",
    "Crédito liberado com flexibilidade para uso livre",

    "• • • PRINCIPAIS VANTAGENS",
    "Juros a partir de 0,99% ao mês (depende do perfil)",
    "Prazo de pagamento de até 240 meses (20 anos)",
    "Até 60% do valor de avaliação do imóvel disponível em crédito",
    "Carência de até 6 meses para começar a pagar",
    "Processo simplificado e análise personalizada",

    "• • • IMÓVEIS ACEITOS COMO GARANTIA",
    "Imóveis residenciais ou comerciais em áreas urbanas",
    "Documentação regularizada e sem restrições judiciais",
    "Imóveis quitados ou com saldo residual pequeno (consulte condições)",
    
    "• • • PERFIL IDEAL DO CLIENTE",
    "Empreendedores que precisam de capital para expandir negócios",
    "Pessoas físicas que desejam trocar dívidas caras por uma linha mais barata",
    "Quem precisa de valores altos com prazos longos para pagar",
    "Clientes que não querem vender o imóvel, mas desejam utilizar seu valor",

    "• • • DOCUMENTAÇÃO NECESSÁRIA",
    "Documentos pessoais (RG, CPF ou CNH)",
    "Comprovante de residência",
    "Comprovante de renda (contracheque, extrato bancário ou declaração)",
    "Documentação completa do imóvel (escritura, matrícula e IPTU)",

    "• • • PARA QUE SERVE O CRÉDITO?",
    "Trocar dívidas caras (cartão, cheque especial, etc.) por uma dívida mais barata",
    "Investimentos em negócios, reformas ou educação",
    "Realização de projetos pessoais de médio e longo prazo",
    "Planejamento financeiro com mais fôlego e tranquilidade",

    "• • • QUER FAZER UMA SIMULAÇÃO?",
    "Converse com um consultor e descubra quanto pode liberar com seu imóvel como garantia"
  ],
},

  {
  id: "fin-imoveis",
  nome: "FINANCIAMENTO IMOBILIÁRIO",
  icone: "/images/financiamentos/icons/imo.svg",
  desc: "Compre seu imóvel novo ou usado com as melhores condições do mercado. Financiamento facilitado, parcelas acessíveis e prazos estendidos.",
  bullets: [
    "• • • O QUE É FINANCIAMENTO IMOBILIÁRIO?",
    "Crédito destinado à compra de imóveis residenciais ou comerciais",
    "Você paga o valor do imóvel em parcelas mensais, com entrada opcional",
    "Pode ser usado para imóveis novos, usados ou na planta",
    "A propriedade fica alienada ao banco até o término do pagamento",

    "• • • PRINCIPAIS VANTAGENS",
    "Parcelas fixas ou reajustadas conforme o índice contratado (TR, IPCA, etc.)",
    "Prazos de pagamento de até 35 anos (420 meses)",
    "Financiamento de até 90% do valor do imóvel",
    "Possibilidade de usar o FGTS como entrada ou amortização",
    "Análise de crédito rápida e contratação simplificada",

    "• • • PERFIL IDEAL DO CLIENTE",
    "Famílias que desejam sair do aluguel e adquirir seu primeiro imóvel",
    "Investidores que buscam adquirir imóveis para renda ou valorização",
    "Pessoas que querem trocar de imóvel com financiamento do saldo",
    "Quem deseja melhores condições de crédito em bancos parceiros",

    "• • • TIPOS DE IMÓVEIS FINANCIÁVEIS",
    "Apartamentos e casas prontas (novos ou usados)",
    "Imóveis em construção ou na planta",
    "Terrenos urbanizados (em algumas modalidades)",
    "Imóveis comerciais (conforme instituição financeira)",

    "• • • DOCUMENTAÇÃO NECESSÁRIA",
    "Documentos pessoais (RG, CPF ou CNH)",
    "Comprovante de estado civil",
    "Comprovante de renda e residência",
    "Documentação completa do imóvel (escritura, matrícula, IPTU, habite-se, etc.)",

    "• • • CONDIÇÕES ESPECIAIS",
    "Possibilidade de financiamento em conjunto (duas ou mais pessoas)",
    "Uso do FGTS como parte da entrada ou amortização de parcelas",
    "Simulações com diferentes bancos para encontrar a melhor taxa",
    "Programas de incentivo como Casa Verde e Amarela (quando disponível)",

    "• • • QUER SIMULAR SUA COMPRA?",
    "Fale com um consultor e descubra as melhores condições para financiar seu imóvel"
  ],
},

  {
  id: "fin-veiculos",
  nome: "FINANCIAMENTO DE VEÍCULOS",
  icone: "/images/financiamentos/icons/veiculo.svg",
  desc: "Compre seu carro, moto ou caminhão com aprovação rápida, parcelas acessíveis e até 100% de financiamento. Novos ou usados, sem burocracia.",
  bullets: [
    "• • • O QUE É FINANCIAMENTO DE VEÍCULOS?",
    "Crédito para compra de veículos novos ou usados",
    "Você paga em parcelas mensais com ou sem entrada",
    "O veículo fica alienado ao banco até a quitação",
    "Disponível para carros, motos, caminhões e utilitários",

    "• • • PRINCIPAIS VANTAGENS",
    "Aprovação em poucas horas (dependendo da instituição)",
    "Financiamento de até 100% do valor do veículo",
    "Prazos de até 60 meses para pagar",
    "Entrada flexível ou até mesmo zero em alguns casos",
    "Taxas personalizadas conforme perfil e veículo",

    "• • • PERFIL IDEAL DO CLIENTE",
    "Quem deseja adquirir um veículo novo ou seminovo",
    "Pessoas que não querem comprometer todo o capital à vista",
    "Motoristas de aplicativo, transportadores e profissionais autônomos",
    "Empresas que precisam ampliar ou renovar sua frota",

    "• • • TIPOS DE VEÍCULOS FINANCIÁVEIS",
    "Carros de passeio (novos ou usados)",
    "Motos (inclusive de alta cilindrada)",
    "Caminhões e veículos utilitários",
    "Veículos leves ou pesados para uso comercial",

    "• • • DOCUMENTAÇÃO NECESSÁRIA",
    "Documento de identidade (RG ou CNH)",
    "CPF regular",
    "Comprovante de renda (contracheque, extrato bancário ou declaração)",
    "Comprovante de residência atualizado",

    "• • • OPÇÕES ADICIONAIS",
    "Seguro do veículo incluso no financiamento (opcional)",
    "Refinanciamento de veículos já quitados",
    "Possibilidade de financiamento com score baixo (consulte condições)",

    "• • • QUER COMPRAR SEU VEÍCULO?",
    "Fale com um consultor e simule o financiamento ideal para você"
  ],
}, 
{
  id: "maquinas-equipamentos",
  nome: "MÁQUINAS E EQUIPAMENTOS",
  icone: "/images/financiamentos/icons/maquinas.svg",
  desc: "Financie máquinas e equipamentos novos ou usados para modernizar sua empresa, aumentar a produtividade e expandir sua operação.",
  bullets: [
    "• • • O QUE É ESSE FINANCIAMENTO?",
    "Linha de crédito voltada para aquisição de máquinas e equipamentos industriais ou comerciais",
    "Permite financiar bens novos ou usados, nacionais ou importados",
    "Ideal para modernização, automação e expansão da capacidade produtiva",
    "Pagamentos parcelados, com entrada reduzida ou carência inicial",

    "• • • PRINCIPAIS VANTAGENS",
    "Prazos de pagamento de até 60 meses",
    "Possibilidade de carência para iniciar os pagamentos",
    "Taxas atrativas com instituições parceiras",
    "Pode ser feito com ou sem garantias adicionais",
    "Aumento imediato da eficiência e competitividade da empresa",

    "• • • ITENS QUE PODEM SER FINANCIADOS",
    "Máquinas industriais, agrícolas ou comerciais",
    "Equipamentos médicos, odontológicos ou laboratoriais",
    "Ferramentas de grande porte, geradores, sistemas de energia",
    "Equipamentos de informática, gráfica, construção civil e mais",

    "• • • PERFIL IDEAL DO CLIENTE",
    "Empresas que buscam modernizar a operação ou aumentar a produção",
    "Empreendedores iniciando ou estruturando um novo negócio",
    "Profissionais da saúde, agronegócio, indústria, logística, construção e tecnologia",
    "Quem deseja adquirir bens de alto valor com pagamento facilitado",

    "• • • DOCUMENTAÇÃO NECESSÁRIA",
    "Documentos dos sócios (RG, CPF ou CNH)",
    "Contrato social e CNPJ ativo",
    "Orçamento ou nota fiscal proforma dos equipamentos",
    "Balanço ou extrato bancário recente para análise de crédito",

    "• • • CONDIÇÕES ESPECIAIS",
    "Possibilidade de usar o bem como garantia (alienação fiduciária)",
    "Linhas com subsídios do BNDES (para setores elegíveis)",
    "Consultoria gratuita para encontrar o melhor plano de financiamento",

    "• • • DESEJA INVESTIR NO SEU NEGÓCIO?",
    "Fale com um consultor e veja como financiar os equipamentos certos para alavancar sua empresa"
  ],
},
 {
  id: "capital-giro",
  nome: "CAPITAL DE GIRO",
  icone: "/images/financiamentos/icons/giro.svg",
  desc: "Crédito rápido para equilibrar o caixa da sua empresa, manter o fluxo financeiro saudável e impulsionar o crescimento com tranquilidade.",
  bullets: [
    "• • • O QUE É CAPITAL DE GIRO?",
    "Linha de crédito voltada para empresas manterem suas operações em dia",
    "Pode ser usado para pagar fornecedores, salários, contas e outras despesas operacionais",
    "Sem necessidade de justificar o uso do recurso (livre destinação)",
    "Ideal para períodos de baixa receita, sazonalidade ou expansão",

    "• • • PRINCIPAIS VANTAGENS",
    "Liberação rápida após análise de crédito",
    "Parcelamento em até 60 meses",
    "Carência de até 90 dias para iniciar os pagamentos",
    "Juros competitivos com possibilidade de negociação personalizada",
    "Flexibilidade de uso conforme necessidade da empresa",

    "• • • PERFIL IDEAL DO CLIENTE",
    "Empresas que precisam reforçar o caixa ou cobrir despesas imediatas",
    "Negócios em fase de crescimento ou reestruturação",
    "Empreendedores que enfrentam sazonalidades ou imprevistos financeiros",
    "Comércios, prestadores de serviço, indústrias e startups",

    "• • • FINALIDADES DO CRÉDITO",
    "Pagamento de fornecedores ou impostos",
    "Reposição de estoque ou insumos",
    "Pagamento de salários, encargos ou comissões",
    "Investimento em marketing, tecnologia ou estrutura",
    "Reserva de emergência para fluxo de caixa",

    "• • • DOCUMENTAÇÃO NECESSÁRIA",
    "Documentos pessoais dos sócios (RG, CPF ou CNH)",
    "Contrato social e alterações atualizadas",
    "Comprovante de endereço da empresa",
    "Balanço, DRE ou extratos bancários recentes",

    "• • • DIFERENCIAIS DISPONÍVEIS",
    "Opções com garantia (imóvel, veículo ou recebíveis) para reduzir juros",
    "Linhas pré-aprovadas com bancos parceiros",
    "Simulação gratuita e sem compromisso",

    "• • • QUER IMPULSIONAR SEU NEGÓCIO?",
    "Fale com um consultor e descubra como acessar crédito com rapidez e segurança para sua empresa"
  ],
},  
];


const passos = [
  {
    step: "1",
    title: "Análise de Perfil",
    desc: "Avaliamos seu perfil financeiro, objetivos e capacidade de pagamento para indicar a melhor linha de crédito.",
    icone: "/images/financiamentos/icons/1.svg"
  },
  {
    step: "2",
    title: "Simulação",
    desc: "Apresentamos cenários personalizados de taxa, prazo e parcela, com base na sua necessidade e perfil.",
    icone: "/images/financiamentos/icons/2.svg"
  },
  {
    step: "3",
    title: "DOCUMENTAÇÃO",
    desc: "Reunimos e enviamos todos os documentos exigidos pela instituição financeira, de forma simples e digital.",
    icone: "/images/financiamentos/icons/3.svg"
  },
  {
    step: "4",
    title: "LIBERAÇÃO",
    desc: "Após aprovação, o crédito é liberado na sua conta com acompanhamento até o final da operação.",
    icone: "/images/financiamentos/icons/4.svg"
  },
];


const faq = [
  {
    q: "Posso fazer Car Equity com carro financiado?",
    a: "Sim. Quitamos o saldo devedor diretamente com o banco atual e liberamos o valor restante como crédito para você."
  },
  {
    q: "Home Equity é só para compra de imóvel?",
    a: "Não. Você pode usar o dinheiro para qualquer finalidade, como quitar dívidas, investir ou reformar seu imóvel."
  },
  {
    q: "Quanto tempo leva para aprovação?",
    a: "De 24 horas (Car Equity e Capital de Giro) até 15 dias úteis (Home Equity), dependendo do tipo de operação e da documentação entregue."
  },
  {
    q: "Existem custos extras?",
    a: "Sim. IOF, taxa de avaliação, registro e outros custos são informados com transparência antes da assinatura do contrato."
  },
  {
    q: "Preciso comprovar renda?",
    a: "Em alguns casos sim, mas para produtos como Car Equity é possível a aprovação mesmo com renda informal ou score baixo."
  },
  {
    q: "Meu nome está negativado. Posso contratar?",
    a: "Sim. Algumas modalidades, como Car Equity, permitem contratação mesmo com restrições no nome, desde que o veículo esteja quitado ou parcialmente quitado."
  },
  {
    q: "Quais bens posso usar como garantia?",
    a: "Carros, motos, imóveis residenciais ou comerciais, e até mesmo equipamentos em algumas linhas de crédito."
  },
  {
    q: "O imóvel ou veículo precisa estar no meu nome?",
    a: "Sim. A titularidade precisa estar regularizada e em nome do solicitante, ou ser possível comprovar vínculo jurídico em caso de co-titularidade."
  },
  {
    q: "O que acontece se eu atrasar as parcelas?",
    a: "Você terá prazo para regularizar, mas após certo tempo o bem pode ser retomado. Por isso, sempre orientamos um planejamento financeiro responsável."
  },
  {
    q: "Como simulo meu crédito?",
    a: "Basta clicar em 'CONTATO' no site e preencher o formulário. Um consultor irá entrar em contato rapidamente com a simulação ideal para seu perfil."
  }
];


/* ------------------- COMPONENTE CARD ------------------- */
function Card({ ramo, flipped, setFlipped }: {
  ramo: (typeof modalidades)[number];
  flipped: string | null;
  setFlipped: (v: string | null) => void;
}) {
  const isOpen = flipped === ramo.nome;

  return (
    <div
      className={`flip-card bg-offwhite rounded-xl shadow-lg h-full transform hover:scale-105 transition-transform duration-300 ${isOpen ? "is-flipped" : ""}`}
      onClick={() => setFlipped(isOpen ? null : ramo.nome)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front p-8 border-t-4 border-accent flex flex-col">
          <Image src={ramo.icone} alt={`Ícone do ramo ${ramo.nome}`} width={48} height={48} className="mb-5" />
          <h3 className="text-xl font-semibold text-primary mb-3">{ramo.nome}</h3>
          <p className="text-primary mb-4">{ramo.desc}</p>
          <div className="mt-auto flex flex-col gap-3">
            <button
  onClick={(e) => {
    e.stopPropagation();
    setFlipped(ramo.nome); // Força o flip ao clicar
  }}
  className="inline-block bg-primary text-white hover:bg-primary hover:text-primary font-medium py-3 px-8 rounded-lg transition shadow-md hover:scale-105"
>
  Saiba mais
</button>

            <div onClick={(e) => e.stopPropagation()}>
              <FormularioPopup
                buttonText="Solicitar Cotação"
                className="inline-block bg-accent text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition shadow-md hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="flip-card-back text-white flex justify-center items-start overflow-auto" onClick={() => setFlipped(null)}>
          <div className="relative w-full max-w-3xl pt-14 pb-10 px-4 md:px-0" onClick={(e) => e.stopPropagation()}>
            <button className="flip-close" onClick={(e) => { e.stopPropagation(); setFlipped(null); }}>✕ Fechar</button>
            <h3 className="text-3xl font-semibold mb-4">{ramo.nome}</h3>
            <p className="mb-6 text-lg">{ramo.desc}</p>
            <h4 className="text-xl font-semibold mb-2 text-accent">Diferenciais</h4>
            <ul className="space-y-2 mb-8">
  {ramo.bullets.map((b, i) => {
    const isTitulo = b.startsWith("• • • ");
    return isTitulo ? (
      <li key={i} className="text-accent font-bold mt-6">{b.replace("• • • ", "")}</li>
    ) : (
      <li key={i} className="list-disc list-inside text-white/90">{b}</li>
    );
  })}
</ul>

            <button
  onClick={(e) => {
    e.stopPropagation();
    setFlipped(null); // Fecha o card
    setTimeout(() => {
      const target = document.getElementById("formulario-cotacao");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // pequeno atraso para a animação de flip concluir antes de rolar
  }}
  className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition-transform"
>
  Fazer Cotação
</button>


          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ PÁGINA ----------------------------------- */

export default function Financiamentos() {
  const [flipped, setFlipped] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  useEffect(() => {
  if (flipped) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [flipped]);


  return (
    <main className="bg-primary text-white overflow-hidden relative">
     <section className="relative h-[calc(100vh-96px)] w-full overflow-hidden text-center">
  {/* Carrossel de Imagens */}
  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    loop
    className="absolute inset-0 h-full w-full z-0"
  >
    {[
      "/images/financiamentos/hero1.jpg",
      "/images/financiamentos/hero2.jpg",
      "/images/financiamentos/hero3.jpg"
    ].map((src, i) => (
      <SwiperSlide key={i} className="relative h-full w-full">
        <Image
          src={src}
          alt={`Slide ${i + 1}`}
          fill
          className="object-cover"
          priority={i === 0}
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* 🔴 Overlay escurecendo toda a imagem */}
  <div className="absolute inset-0 bg-black/80 z-10" />

  {/* Conteúdo sobreposto */}
  <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-10 max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold mb-3 whitespace-nowrap drop-shadow-lg">
      FINANCIAMENTOS <span className="text-accent">&</span> CRÉDITOS
    </h1>
    <p className="text-lg text-white/80 mb-6 drop-shadow-sm">
      Seis soluções sob medida — do <em>Car Equity</em> ao capital de giro.
    </p>
    <FormularioPopup
      buttonText="Simular agora"
      className="inline-block bg-primary text-white hover:bg-accent hover:text-primary font-medium px-8 py-3 rounded-lg transition shadow-md"
    />
  </div>
</section>



      <section className="py-16" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">MODALIDADES DE CRÉDITO</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {modalidades.map((m) => (
              <Card key={m.id} ramo={m} flipped={flipped} setFlipped={setFlipped} />
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-offwhite" data-aos="fade-up">

  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-primary mb-12">COMO FUNCIONA O PROCESSO...</h2>

    <div className="space-y-4">
      {passos.map((p) => (
        <div
          key={p.title}
          data-aos="zoom-in-up"
          data-aos-delay={+p.step * 100}
        >
          {/* Aqui fica o efeito hover separado do AOS */}
          <div className="bg-[#121E30] rounded-xl px-6 py-6 border border-white/10 backdrop-blur-sm shadow-md transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg">
            {/* Ícone + título */}
            <div className="flex flex-col items-center justify-center gap-3 mb-2">
              <Image
                src={p.icone}
                alt={`Ícone do passo ${p.title}`}
                width={40}
                height={40}
                className="text-accent"
              />
              <h3 className="text-accent text-xl font-bold uppercase">{p.title}</h3>
            </div>

            {/* Descrição */}
            <p className="text-white/80 text-lg text-center">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>







      <section className="py-12" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">INSTITUIÇÕES PARCEIRAS</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 grayscale hover:grayscale-0 transition-all">
            {["itau.png", "bradesco.png", "santander.png","c6.png",  "caixa.png", "bv.png", "pan.png"].map((logo) => (
              <Image
                key={logo}
                src={`/images/financiamentos/${logo}`}
                alt={`Logo do banco ${logo.replace(".png", "")}`}
                width={120}
                height={60}
                className="opacity-80 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white" data-aos="fade-up">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-semibold text-center mb-8">PERGUNTAS FREQUENTES</h2>
    <div className="max-w-4xl mx-auto space-y-4">
      {faq.map(({ q, a }, i) => (
        <div
          key={i}
          className="bg-offwhite border border-white/10 rounded-lg transition-all"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left p-4 font-semibold text-accent cursor-pointer focus:outline-none flex justify-between items-center"
          >
            {q}
            <span
               className={`text-accent text-lg transform transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {openIndex === i && (
            <div className="px-4 pb-4 text-primary text-sm">{a}</div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      
      <section id="formulario-cotacao" className="bg-primary py-16 px-4 md:px-0 text-offwhite">
  <div className="max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center">SOLICITE SUA CORAÇÃO</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Seu nome"
        className="w-full border border-gray-300 rounded p-3"
        required
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        className="w-full border border-gray-300 rounded p-3"
        required
      />
      <input
        type="tel"
        placeholder="Seu telefone"
        className="w-full border border-gray-300 rounded p-3"
        required
      />
      <textarea
        placeholder="Informações adicionais"
        className="w-full border border-gray-300 rounded p-3"
        rows={4}
      ></textarea>
      <button
        type="submit"
        className="bg-accent text-white font-semibold py-3 px-6 rounded hover:bg-primary transition"
      >
        Enviar Cotação
      </button>
    </form>
  </div>
</section>

    </main>
  );
}
