/* PÁGINA │ SEGUROS – ARJ PRIME (com flip-card) */
"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import FormularioPopup from '@/components/layout/FormularioPopup' // ajuste o caminho conforme sua estrutura


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

/* ------------------- DADOS ESTÁTICOS ------------------- */

/* Carrossel hero */
const heroSlides = [
  { src: "/images/seguros/hero/familia.jpg", alt: "Família ao lado do carro segurado" },
  { src: "/images/seguros/hero/medico.jpg", alt: "profissionais" },
  { src: "/images/seguros/hero/empresa.jpg", alt: "Empresa protegida por apólice" },
  { src: "/images/seguros/hero/engenheiro.jpg", alt: "profissao protegida por apólice" },
];

/* Benefícios */
const beneficios = [
  { icon: "/images/seguros/icons/shield.svg", title: "Proteção Completa", desc: "Seguro personalizados para proteger sua família, patrimônio e empresa — tudo em um só lugar." },
  { icon: "/images/seguros/icons/piggy.svg", title: "Melhor Custo-Benefício", desc: "Economia real com negociação direta e sem intermediários. Mais proteção por menos." },
  { icon: "/images/seguros/icons/clock.svg", title: "Assistência 24 horas", desc: "Conte com suporte 24h para imprevistos: guincho, chaveiro, hidráulica e mais. Segurança sempre disponível." },
  { icon: "/images/seguros/icons/user.svg", title: "Consultor Dedicado", desc: "Atendimento humano, rápido e sem enrolação. Um especialista dedicado para cuidar do seu seguro." },
  { icon: "/images/seguros/icons/file.svg", title: "Processo Digital", desc: "Da cotação à apólice final, tudo 100% digital. Rápido, seguro e sem papelada." },
  { icon: "/images/seguros/icons/star.svg", title: "Clientes que recomendam ⭐", desc: "Nossos clientes já indicam a ARJ Prime pela atenção no atendimento e agilidade no processo." },
];

/* Seguradoras parceiras */
const seguradoras = [
  "/images/seguros/logo/tokio.png",
  "/images/seguros/logo/porto.png",
  "/images/seguros/logo/sulamerica.png",
  "/images/seguros/logo/ituran.png",
  "/images/seguros/logo/mapfre.png",
  "/images/seguros/logo/allianz.png",
  "/images/seguros/logo/zurich.png",
  "/images/seguros/logo/suhai.png",
  "/images/seguros/logo/berkley.png",
  "/images/seguros/logo/yelum.png",
  "/images/seguros/logo/azul.png",
  "/images/seguros/logo/unimed.png",
  "/images/seguros/logo/sompo.png",
  "/images/seguros/logo/generali.png",
  "/images/seguros/logo/itau.png",
  "/images/seguros/logo/bradesco.png",
];

/* Ramos de Seguro – 1ª metade */
const ramos = [
  {
    rota: "/seguros/vida",
    icone: "/images/seguros/icons/vida.svg",
    nome: "VIDA",
    desc: "Garanta o futuro da sua família com proteção financeira em casos de morte, doenças graves ou invalidez. Tranquilidade em todas as fases da vida.",
    bullets: [
    "• • • TIPOS DE SEGURO DE VIDA",
    "Seguro Individual: proteção exclusiva para você ou pessoa específica",
    "Seguro Familiar: cobre cônjuge, filhos e/ou dependentes",
    "Seguro Resgatável: permite recuperar parte do valor pago após um período",
    "Seguro Vitalício: cobertura por toda a vida, sem prazo final",
    "Seguro Empresarial: proteção para sócios, equipes e colaboradores",

    "• • • COBERTURAS INCLUÍDAS",
    "Cobertura para morte natural ou acidental",
    "Indenização por invalidez permanente (acidente ou doença)",
    "Cobertura para diagnóstico de doenças graves",
    "Diárias por Incapacidade Temporária (DIT)",
    "Assistência funeral individual ou familiar",
    "Serviços adicionais: telemedicina, segunda opinião médica, assistência domiciliar",

    "• • • BENEFÍCIOS DO SEGURO DE VIDA",
    "Pagamento rápido da indenização aos beneficiários",
    "Tranquilidade financeira para a família em momentos difíceis",
    "Coberturas personalizadas conforme sua realidade",
    "Planos acessíveis e adaptados ao seu orçamento",
    "Possibilidade de incluir benefícios em vida",

    "• • • PARA QUEM É INDICADO?",
    "Famílias que dependem de um provedor financeiro",
    "Profissionais autônomos ou liberais sem previdência formal",
    "Empresários que desejam proteger sócios ou colaboradores",
    "Pessoas que desejam deixar um legado ou evitar conflitos na sucessão",

    "• • • QUER SABER MAIS?",
    "Fale com um consultor e descubra o plano ideal para proteger quem você ama"
  ],
  },
  {
  rota: "/seguros/responsabilidade-civil",
  icone: "/images/seguros/icons/rc.svg",
  nome: "RESPONSABILIDADE CIVIL PROFISSIONAL",
  desc: "Proteja sua carreira contra processos e prejuízos. Seguro ideal para médicos, advogados, engenheiros, contadores e outros profissionais liberais.",
  bullets: [] // deixado vazio pois esse card redireciona para uma landing completa
},
 
  {
  rota: "/seguros/empresarial",
  icone: "/images/seguros/icons/empresarial.svg",
  nome: "EMPRESARIAL",
  desc: "Segurança patrimonial completa para sua empresa, com coberturas contra incêndio, roubo, danos elétricos e responsabilidade civil.",
  bullets: [
    "• • • TIPOS DE EMPRESA ATENDIDOS",
    "Comércios, escritórios, clínicas e consultórios",
    "Indústrias, galpões, estoques e centros de distribuição",
    "Coworkings, prestadores de serviço e empreendedores individuais",

    "• • • COBERTURAS INCLUÍDAS",
    "Incêndio, explosão, queda de raio e fumaça",
    "Roubo e furto qualificado de bens e mercadorias",
    "Danos elétricos a equipamentos e máquinas",
    "Quebra de vidros, letreiros e fachadas",
    "Responsabilidade civil por danos a terceiros",
    "Lucros cessantes em caso de paralisação da operação",
    "Cobertura para equipamentos eletrônicos e TI",

    "• • • BENEFÍCIOS DO SEGURO EMPRESARIAL",
    "Proteção completa do patrimônio da empresa",
    "Assistência emergencial 24h (eletricista, encanador, etc.)",
    "Planos flexíveis conforme o tipo e porte do negócio",
    "Redução de riscos operacionais e financeiros",
    "Amparo em ações judiciais e danos acidentais",

    "• • • PARA QUEM É INDICADO?",
    "Empresários que desejam proteger seu capital investido",
    "Empresas que operam com mercadorias, equipamentos e público",
    "Negócios que dependem de estrutura física para funcionar",

    "• • • QUER SABER MAIS?",
    "Fale com um especialista e encontre a solução ideal para proteger sua empresa"
  ]
},
  
  {
  rota: "/seguros/transportes",
  icone: "/images/seguros/icons/transportes.svg",
  nome: "TRANSPORTES",
  desc: "Cobertura completa para mercadorias transportadas por rodovias, ferrovias, navios ou aeronaves. Segurança em todas as etapas da carga.",
  bullets: [
    "• • • TIPOS DE TRANSPORTE COBERTOS",
    "Transporte rodoviário nacional de cargas",
    "Transporte internacional (importação/exportação)",
    "Transporte ferroviário, aéreo e marítimo",
    "Seguros para transportadores (RCTRC) e embarcadores (RCF-DC)",
    "Viagens avulsas ou apólices contínuas",

    "• • • COBERTURAS INCLUÍDAS",
    "Roubo, furto, extravio e avarias durante o transporte",
    "Acidentes com o veículo transportador",
    "Danos causados por capotagem, tombamento ou colisão",
    "Perda total ou parcial da carga",
    "Cobertura de despesas com salvamento e transbordo",
    "Extensão para armazéns, espera e descarga",

    "• • • BENEFÍCIOS DO SEGURO DE TRANSPORTE",
    "Redução de prejuízos com cargas valiosas",
    "Cumprimento de exigências contratuais e legais",
    "Assistência ágil em caso de sinistro",
    "Coberturas adaptadas ao tipo de mercadoria e trajeto",
    "Proteção contra riscos logísticos imprevistos",

    "• • • PARA QUEM É INDICADO?",
    "Transportadoras, embarcadores e operadores logísticos",
    "Indústrias e empresas que realizam entregas próprias",
    "Comércios que contratam fretes terceirizados",

    "• • • QUER SABER MAIS?",
    "Solicite sua cotação e garanta segurança para sua operação logística"
  ]
},
{
  rota: "/seguros/fianca-locaticia",
  icone: "/images/seguros/icons/fianca.svg",
  nome: "FIANÇA LOCATÍCIA",
  desc: "Substitua o fiador ou caução e alugue com tranquilidade. Garantia de pagamento e proteção contra inadimplência.",
  bullets: [
    "• • • O QUE É O SEGURO FIANÇA?",
    "É uma garantia locatícia que substitui fiador ou caução",
    "Cobertura do pagamento do aluguel em caso de inadimplência",
    "Pode incluir condomínio, IPTU, água, luz e danos ao imóvel",

    "• • • COBERTURAS INCLUÍDAS",
    "Pagamento de aluguéis atrasados",
    "Encargos como condomínio, IPTU, contas de consumo",
    "Multas contratuais e honorários advocatícios",
    "Danos ao imóvel causados pelo inquilino",
    "Assistência residencial para o imóvel alugado",

    "• • • BENEFÍCIOS DO SEGURO FIANÇA",
    "Dispensa de fiador e caução",
    "Mais agilidade e segurança na locação",
    "Proteção para o proprietário contra prejuízos",
    "Mais facilidade para o inquilino alugar sem burocracia",
    "Pode ser parcelado no cartão de crédito ou boleto",

    "• • • PARA QUEM É INDICADO?",
    "Inquilinos que não possuem fiador",
    "Locadores que desejam garantir o recebimento do aluguel",
    "Imobiliárias que buscam agilidade na aprovação de contratos",

    "• • • QUER SABER MAIS?",
    "Fale com um especialista e alugue com segurança e sem complicações"
  ]
}
,
  {
  rota: "/seguros/garantias",
  icone: "/images/seguros/icons/garantias.svg",
  nome: "GARANTIAS",
  desc: "Assegure o cumprimento de contratos, licitações e obrigações legais com segurança e credibilidade para sua empresa.",
  bullets: [
    "• • • TIPOS DE SEGURO GARANTIA",
    "Garantia Contratual: garante a execução de contratos de obras, fornecimento ou serviços",
    "Garantia Judicial: substitui depósitos judiciais em processos cíveis, fiscais ou trabalhistas",
    "Garantia Administrativa: usada em processos junto a órgãos públicos (ex: ANATEL, ANP)",
    "Garantia Aduaneira: exigida na importação temporária de bens ou produtos",
    "Garantia para Licitações: exigida em concorrências públicas (bid bond)",

    "• • • COBERTURAS INCLUÍDAS",
    "Inadimplência de obrigações contratuais",
    "Descumprimento de cláusulas legais e regulatórias",
    "Multas contratuais e perdas financeiras relacionadas",
    "Substituição de cauções, depósitos e cartas fiança bancárias",

    "• • • BENEFÍCIOS DO SEGURO GARANTIA",
    "Reduz custos em comparação com caução bancária",
    "Melhora a competitividade em licitações públicas",
    "Libera capital de giro da empresa",
    "Processo mais rápido e menos burocrático que bancos",
    "Aceito por órgãos públicos e privados em todo o Brasil",

    "• • • PARA QUEM É INDICADO?",
    "Empresas que participam de licitações públicas",
    "Empreiteiras e fornecedores com contratos de grande porte",
    "Empresas com processos judiciais e necessidade de garantia",
    "Importadores e exportadores que lidam com órgãos alfandegários",

    "• • • QUER SABER MAIS?",
    "Solicite uma cotação e ofereça mais segurança nos seus contratos e projetos"
  ]
},
  {
  rota: "/seguros/viagem",
  icone: "/images/seguros/icons/viagem.svg",
  nome: "VIAGEM",
  desc: "Viaje com segurança e tranquilidade. Cobertura médica, extravio de bagagem e assistência em todo o mundo.",
  bullets: [
    "• • • TIPOS DE VIAGEM ATENDIDAS",
    "Viagens nacionais e internacionais",
    "Viagens de turismo, estudo ou negócios",
    "Cobertura para idosos, gestantes e esportes radicais",
    "Planos individuais, familiares ou em grupo",

    "• • • COBERTURAS INCLUÍDAS",
    "Despesas médicas e hospitalares",
    "Extravio, roubo ou atraso de bagagem",
    "Cancelamento ou interrupção da viagem",
    "Atrasos ou perda de conexão aérea",
    "Repatriação sanitária e traslado de corpo",
    "Assistência jurídica e fiança internacional",

    "• • • BENEFÍCIOS DO SEGURO VIAGEM",
    "Atendimento 24h em português, de qualquer lugar do mundo",
    "Suporte em emergências médicas ou logísticas",
    "Economia com imprevistos caros fora do país",
    "Exigido por diversos países para entrada (ex: Europa)",
    "Contratação fácil, rápida e sem burocracia",

    "• • • PARA QUEM É INDICADO?",
    "Turistas nacionais e internacionais",
    "Estudantes em intercâmbio ou programas no exterior",
    "Executivos em viagens corporativas",
    "Viajantes que buscam segurança e suporte global",

    "• • • QUER SABER MAIS?",
    "Garanta sua proteção antes de embarcar — peça uma cotação personalizada"
  ]
},
  
 
  {
    rota: "/seguros/residencial",
    icone: "/images/seguros/icons/residencial.svg",
    nome: "RESIDENCIAL",
    desc: "Proteja seu lar contra incêndio, roubo, desastres naturais e imprevistos do dia a dia. Segurança completa para casas e apartamentos.",
    bullets:  [
    "• • • TIPOS DE SEGURO RESIDENCIAL",
    "Residencial Habitual: proteção para sua moradia principal",
    "Residencial de Veraneio: cobertura para imóveis de temporada",
    "Residencial Locado: ideal para imóveis alugados (locador ou inquilino)",

    "• • • COBERTURAS INCLUÍDAS",
    "Incêndio, explosão e queda de raio",
    "Roubo e furto qualificado",
    "Danos elétricos a eletrodomésticos e eletrônicos",
    "Desastres naturais (vendaval, alagamento, granizo)",
    "Responsabilidade civil familiar (danos a terceiros)",
    "Cobertura para vidros, janelas e espelhos",
    "Despesas com aluguel em caso de sinistro",

    "• • • BENEFÍCIOS DO SEGURO RESIDENCIAL",
    "Assistência 24h com encanador, chaveiro, eletricista, vidraceiro e mais",
    "Coberturas ajustáveis conforme o valor e perfil do imóvel",
    "Proteção estendida para bens móveis (móveis, TV, notebook, etc.)",
    "Amparo para pequenos imprevistos do dia a dia",
    "Excelente custo-benefício e mensalidades acessíveis",

    "• • • PARA QUEM É INDICADO?",
    "Proprietários de casas e apartamentos",
    "Famílias que desejam proteger seu patrimônio",
    "Inquilinos e locadores em contratos de aluguel",
    "Proprietários de imóveis de veraneio ou segunda residência",

    "• • • QUER SABER MAIS?",
    "Solicite sua cotação e proteja seu lar com tranquilidade e economia"
  ],
  },
  {
    rota: "/seguros/condominio",
    icone: "/images/seguros/icons/condominio.svg",
    nome: "CONDOMÍNIO",
    desc: "Cobertura obrigatória e completa para proteger áreas comuns, estrutura e funcionários do seu condomínio residencial ou comercial.",
    bullets: [
    "• • • TIPOS DE CONDOMÍNIO ATENDIDOS",
    "Condomínios residenciais horizontais e verticais",
    "Condomínios comerciais, escritórios e salas comerciais",
    "Associações e loteamentos com área comum",

    "• • • COBERTURAS INCLUÍDAS",
    "Incêndio, explosão e queda de raio nas áreas comuns",
    "Danos elétricos, roubo de equipamentos e circuitos de segurança",
    "Quebra de vidros e portões automáticos",
    "Danos a elevadores, interfones e sistemas hidráulicos",
    "Responsabilidade civil do síndico e do condomínio",
    "Acidentes pessoais com funcionários e prestadores de serviço",

    "• • • BENEFÍCIOS DO SEGURO CONDOMÍNIO",
    "Assistência 24h emergencial para áreas comuns",
    "Amparo jurídico em ações contra o condomínio ou síndico",
    "Planos personalizáveis de acordo com o porte do condomínio",
    "Cumpre a legislação vigente (seguros obrigatórios por lei)",
    "Proteção contra prejuízos coletivos ou inesperados",

    "• • • PARA QUEM É INDICADO?",
    "Síndicos e administradoras de condomínios",
    "Moradores que desejam segurança para a estrutura do prédio",
    "Empreendimentos comerciais com espaços compartilhados",

    "• • • QUER SABER MAIS?",
    "Peça uma cotação agora mesmo e evite surpresas com imprevistos condominiais"
  ],
  },
{
    rota: "/seguros/auto",
    icone: "/images/seguros/icons/auto.svg",
    nome: "AUTO",
    desc: "Seu carro protegido contra acidentes, furtos, colisões e muito mais. Tranquilidade, assistência 24h e cobertura completa para você dirigir com segurança todos os dias.",
    bullets: [
    "• • • TIPOS DE SEGURO AUTO",
    "Seguro Compreensivo: cobre colisões, roubos, incêndios e danos a terceiros",
    "Seguro Contra Terceiros: protege você de danos materiais e corporais causados a outros veículos ou pessoas",
    "Seguro Auto Popular: opção mais acessível com peças alternativas",
    "Seguro APP (Acidentes Pessoais de Passageiros): proteção para motorista e ocupantes",
    "Seguro Auto Empresarial: ideal para frotas e veículos de empresas",

    "• • • COBERTURAS INCLUÍDAS",
    "Colisão, roubo, furto e incêndio",
    "Danos a terceiros (materiais e corporais)",
    "Perda total ou parcial do veículo",
    "Proteção contra fenômenos naturais (enchentes, granizo, queda de árvore)",
    "Cobertura de vidros, faróis, retrovisores e lanternas",
    "Carro reserva em caso de sinistro",
    "Extensão para veículos de terceiros (carga, passageiros, etc.)",

    "• • • BENEFÍCIOS DO SEGURO AUTO",
    "Assistência 24h em todo o Brasil (guincho, chaveiro, socorro mecânico, troca de pneus, pane seca)",
    "App para acompanhamento e acionamento de sinistro em poucos cliques",
    "Cobertura personalizável de acordo com seu perfil e uso do veículo",
    "Franquia reduzida ou isenta em casos específicos",
    "Descontos para bom condutor, carro com rastreador ou garagem",

    "• • • PARA QUEM É INDICADO?",
    "Motoristas de carro próprio, financiado ou alugado",
    "Famílias que usam o carro no dia a dia e querem proteção completa",
    "Pessoas que circulam com frequência por grandes centros urbanos",
    "Empresas com frota própria que desejam proteger seu patrimônio",

    "• • • QUER SABER MAIS?",
    "Solicite uma cotação e descubra o plano ideal para manter seu veículo seguro em qualquer situação"
  ],
  },
  {
    rota: "/seguros/motos",
    icone: "/images/seguros/icons/motos.svg",
    nome: "MOTOS",
    desc: "Proteja sua moto contra roubo, colisão, incêndio e muito mais. Assistência 24h, cobertura para terceiros e planos sob medida para seu perfil de uso.",
    bullets: [
    "• • • TIPOS DE SEGURO DE MOTOS",
    "Seguro Compreensivo: cobre colisões, roubos, furtos, incêndios e danos a terceiros",
    "Seguro contra Terceiros: proteção para prejuízos causados a outras pessoas ou veículos",
    "Seguro Parcial: ideal para motos com valor de mercado mais baixo",
    "Seguro APP (Acidentes Pessoais de Passageiros): cobertura para o condutor e o garupa",
    "Seguro Empresarial para Motos: ideal para entregadores, motoboys e uso profissional",

    "• • • COBERTURAS INCLUÍDAS",
    "Colisão, incêndio, roubo e furto",
    "Danos materiais e corporais a terceiros",
    "Cobertura para acessórios e equipamentos (baús, antenas, rastreadores)",
    "Indenização por perda total ou parcial da moto",
    "Proteção contra desastres naturais (alagamentos, queda de árvore, etc.)",

    "• • • BENEFÍCIOS DO SEGURO DE MOTOS",
    "Assistência 24h em todo o Brasil (guincho, pane seca, troca de pneu, chaveiro)",
    "Planos personalizáveis de acordo com o tipo de uso da moto",
    "Descontos para bons condutores ou motos com rastreador instalado",
    "Aplicativo para acompanhamento e acionamento de sinistros",
    "Coberturas flexíveis para motos novas, usadas ou financiadas",

    "• • • PARA QUEM É INDICADO?",
    "Motociclistas urbanos que usam a moto no dia a dia",
    "Entregadores, mototaxistas e profissionais de delivery",
    "Pessoas que precisam de segurança extra para motos de alto valor",
    "Clientes que buscam economia sem abrir mão da proteção",

    "• • • QUER SABER MAIS?",
    "Solicite uma cotação personalizada e descubra a melhor forma de proteger sua moto"
  ],
  },
  {
  rota: "/seguros/cyber",
  icone: "/images/seguros/icons/cyber.svg",
  nome: "CYBER",
  desc: "Proteja sua empresa contra vazamentos de dados, ataques virtuais e perdas financeiras causadas por crimes cibernéticos.",
  bullets: [
    "• • • O QUE É O SEGURO CYBER?",
    "Seguro especializado em proteger empresas contra riscos digitais e cibernéticos",
    "Cobre custos com vazamento de dados, sequestro digital (ransomware), fraudes e interrupções",

    "• • • COBERTURAS INCLUÍDAS",
    "Responsabilidade civil por vazamento de dados de clientes",
    "Multas e penalidades por descumprimento da LGPD",
    "Custos de notificação a titulares e comunicação à ANPD",
    "Ressarcimento por sequestro de dados (ransomware)",
    "Despesas com investigação forense e restauração de sistemas",
    "Perda de lucros em caso de interrupção de operação",
    "Custos com assessoria jurídica e gerenciamento de crise",

    "• • • BENEFÍCIOS DO SEGURO CYBER",
    "Amparo completo em caso de ataques ou falhas de segurança",
    "Atendimento emergencial 24h com especialistas em cibersegurança",
    "Cumprimento da LGPD com tranquilidade e suporte técnico",
    "Mitigação de danos à reputação e imagem da marca",
    "Proteção essencial para empresas com dados sensíveis",

    "• • • PARA QUEM É INDICADO?",
    "Empresas que armazenam dados de clientes ou terceiros",
    "Negócios com atuação online, e-commerces e SaaS",
    "Escritórios de contabilidade, advocacia, clínicas e consultórios",
    "Qualquer empresa preocupada com LGPD e segurança digital",

    "• • • QUER SABER MAIS?",
    "Peça uma cotação e proteja seus dados, clientes e reputação com inteligência"
  ]
},
];

/* Depoimentos */
const depoimentos = [
  { name: "Carlos Andrade", cargo: "Empresário", photo: "/images/seguros/clientes/carlos.jpg",
    text: "Em menos de 24 h a ARJ Prime cotou e emitiu o seguro da nossa frota. Atendimento impecável!" },
  { name: "Letícia Pires", cargo: "Arquiteta", photo: "/images/seguros/clientes/leticia.jpg",
    text: "Tive um sinistro em casa e o consultor acompanhou tudo até o reembolso. Super recomendo!" },
  { name: "João Martins", cargo: "Médico", photo: "/images/seguros/clientes/joao.jpg",
    text: "Migrei meu seguro de vida sem burocracia e pagando menos. Atendimento nota dez!" },
  { name: "Marcia Moreira", cargo: "Médica", photo: "/images/seguros/clientes/Marcia.jpg",
    text: "Agora exerço minha profissão com muito mais tranquilidade. Sei que estou amparado caso algo inesperado aconteça. Excelente atendimento da ARJ Prime!" },
  ];

/* FAQ */
const faqs = [
 {
    q: "Posso contratar um seguro totalmente online?",
    a: "Sim. Todo o processo pode ser feito digitalmente: simulação, proposta, assinatura eletrônica e emissão da apólice sem sair de casa."
  },
  {
    q: "Como funciona a franquia no seguro auto?",
    a: "A franquia é o valor que o segurado paga em caso de sinistro com indenização parcial. É cobrada apenas quando há necessidade de reparo."
  },
  {
    q: "Seguro residencial cobre danos elétricos?",
    a: "Sim, desde que essa cobertura esteja contratada. Ela reembolsa conserto ou substituição de eletrodomésticos danificados por variações elétricas."
  },
  {
    q: "Preciso ter CNPJ para contratar seguro empresarial?",
    a: "Sim, mas também oferecemos soluções para MEIs, autônomos e profissionais liberais, com coberturas específicas para suas atividades."
  },
  {
    q: "Quais documentos são necessários para emitir uma apólice?",
    a: "Geralmente: RG, CPF/CNPJ, comprovante de residência e dados do bem segurado (como CNH e documento do veículo). Pode variar por tipo de seguro."
  },
  {
    q: "O que é cobertura adicional no seguro?",
    a: "São proteções extras que você pode contratar, como carro reserva, assistência 24h, vidros, terceiros, danos morais e muito mais."
  },
  {
    q: "Posso fazer seguro mesmo com carro financiado?",
    a: "Sim. O seguro cobre veículos financiados normalmente, e o beneficiário da indenização total será o banco em caso de perda total."
  },
  {
    q: "Tem carência no seguro de vida?",
    a: "Algumas coberturas podem ter carência, como doenças preexistentes ou suicídio. Mas muitas entram em vigor imediatamente após o pagamento."
  },
  {
    q: "Posso incluir familiares no seguro de vida?",
    a: "Sim. Existem planos familiares que permitem incluir cônjuge, filhos ou até pais, dependendo da seguradora."
  },
  {
    q: "Como recebo a indenização em caso de sinistro?",
    a: "Após envio e análise da documentação, o valor da indenização é depositado diretamente na conta indicada, dentro do prazo estabelecido."
  }
];

/* ------------------- COMPONENTE CARD ------------------- */
function Card({
  ramo,
  flipped,
  setFlipped,
}: {
  ramo: (typeof ramos)[number];
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

        {/* FACE 1 */}
        <div className="flip-card-front p-8 border-t-4 border-accent flex flex-col">
          <Image src={ramo.icone} alt="" width={48} height={48} className="mb-5" />
          <h3 className="text-xl font-semibold text-primary mb-3">{ramo.nome}</h3>
          <p className="text-gray-600 mb-4">{ramo.desc}</p>
          <div className="mt-auto flex flex-col gap-3">
  {ramo.nome === "RESPONSABILIDADE CIVIL PROFISSIONAL" ? (
  <Link
    href="/seguros/resp-civil"
    className="inline-block bg-primary text-white hover:bg-accent hover:text-primary font-medium py-3 px-8 rounded-lg transition shadow-md hover:scale-105"
    onClick={(e) => e.stopPropagation()}
  >
    Saiba mais
  </Link>
) : (
  <button className="inline-block bg-primary text-white hover:bg-accent hover:text-primary font-medium py-3 px-8 rounded-lg transition shadow-md hover:scale-105">Saiba mais</button>
)}

  <div onClick={(e) => e.stopPropagation()}>
  <FormularioPopup
    buttonText="Solicitar Cotação"
    className="inline-block bg-accent/90 text-accent hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition shadow-md"
  />
</div>

</div>

        </div>
        {/* FACE 2 */}
        <div
          className="flip-card-back text-white flex justify-center items-start overflow-auto"
          onClick={() => setFlipped(null)}
        >
          <div
            className="relative w-full max-w-3xl pt-14 pb-10 px-4 md:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="flip-close"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(null);
              }}
            >
              ✕ Fechar
            </button>

            <h3 className="text-3xl font-semibold mb-4">{ramo.nome}</h3>
            <p className="mb-6 text-lg">{ramo.desc}</p>

            <h4 className="text-xl font-semibold mb-2 text-accent">
              Coberturas & Vantagens
            </h4>
            <ul className="space-y-2 mb-8">
  {ramo.bullets.map((b, index) =>
    b.startsWith("• • •") ? (
      <li key={index} className="mt-6 mb-1 text-accent font-semibold uppercase tracking-wide">
        {b.replace("• • •", "").trim()}
      </li>
    ) : (
      <li key={index} className="list-disc list-inside text-white/90">{b}</li>
    )
  )}
</ul>


            <Link
              href="#cotacao"
              onClick={() => setFlipped(null)}
              className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition-transform"
            >
              Fazer cotação
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------- PÁGINA ------------------- */
export default function Page() {
  const [flipped, setFlipped] = useState<string | null>(null);
   const [openIndex2, setOpenIndex2] = useState<number | null>(null);


  useEffect(() => { AOS.init({ once: true }); }, []);
  useEffect(() => { document.body.style.overflow = flipped ? "hidden" : ""; }, [flipped]);

  return (
    <>
      <Head>
        <title>Seguros | ARJ Prime Corretora</title>
        <meta
          name="description"
          content="Seguros de vida, auto, residencial, empresarial e muito mais com quem entende de proteção. Solicite sua cotação na ARJ Prime."
        />
      </Head>

      {/* HERO --------------------------------------------------------- */}
<section className="relative isolate text-white h-[90vh] overflow-hidden">
              <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {heroSlides.map((s, i) => (
            <SwiperSlide key={i} className="relative h-full">
              <Image src={s.src} alt={s.alt} fill className="object-cover" priority={i === 0} />
              <div className="absolute inset-0 bg-gradient-to-b from-[#14223B]/60 to-[#14223B]/90" />
              <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white px-4 pb-20">
  <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-down">
    SEGUROS <span className="text-white">PERSONALIZADOS</span>
  </h1>
  <p className="max-w-xl mb-8 text-base md:text-xl" data-aos="fade-up" data-aos-delay="150">
    Proteja o que realmente importa com o atendimento premium da ARJ PRIME.
  </p>
  <FormularioPopup
  buttonText="Solicitar Cotação"
  className="inline-block bg-accent/100 text-white hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition shadow-md"
/>
</div>

            </SwiperSlide>
          ))}
        </Swiper>
      </section>

     {/* BENEFÍCIOS --------------------------------------------------- */}
<section className="py-20 bg-gradient-to-b from-[#14223B] to-[#0D1624] text-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12" data-aos="fade-up">
      PORQUE ESCOLHER <span className="text-white">ARJ PRIME</span>
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {beneficios.map((b, i) => (
        <div
          key={i}
          className="group p-6 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm transform hover:scale-120 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)] transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay={i * 80}
        >
          <div className="w-[48px] h-[48px] mb-4 transition-transform duration-500 ease-in-out group-hover:rotate-6 group-hover:scale-110 group-hover:brightness-150">
            <Image src={b.icon} alt="" width={48} height={48} />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-offwhite">{b.title}</h3>
          <p className="text-sm text-accent">{b.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>





      {/* SEGURADORAS -------------------------------------------------- */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Swiper
            slidesPerView={2.2}
            spaceBetween={30}
            breakpoints={{ 640: { slidesPerView: 3.5 }, 1024: { slidesPerView: 5 } }}
            autoplay={{ delay: 2400 }}
            modules={[Autoplay]}
          >
            {seguradoras.map((logo, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <Image src={logo} alt="Seguradora" width={160} height={64} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* RAMOS DE SEGURO (flip) -------------------------------------- */}
      <section className="py-20 bg-gradient-to-b from-primary to-[#0D1624] text-white" id="ramos">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12" data-aos="fade-up">
             <span className="text-offwhite">NOSSOS RAMOS DE SEGUROS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
            {ramos.map((ramo, i) => (
              <div key={ramo.nome} data-aos="zoom-in" data-aos-delay={i * 100}>
                <Card ramo={ramo} flipped={flipped} setFlipped={setFlipped} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS -------------------------------------------------- */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12" data-aos="fade-up">
            CLIENTES <span className="text-white">SATISFEITOS</span>
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
          >
            {depoimentos.map((d, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-xl mx-auto text-center">
                  <Image src="/images/seguros/icons/quotes.svg" alt="" width={48} height={48} className="mx-auto mb-4" />
                  <p className="italic mb-6">“{d.text}”</p>
                  <div className="flex flex-col items-center gap-2">
                    <Image src={d.photo} alt={d.name} width={64} height={64} className="rounded-full object-cover" />
                    <span className="font-semibold">{d.name}</span>
                    <span className="text-xs text-white/60">{d.cargo}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FAQ ---------------------------------------------------------- */}
      <section className="py-16 bg-primary text-white" data-aos="fade-up">
  <div className="container mx-auto px-6">
    <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
      PERGUNTAS FREQUENTES
    </h2>

    <div className="max-w-4xl mx-auto space-y-3">
      {faqs.map((f, i) => (
        <div
          key={i}
          className="bg-offwhite border border-white/10 rounded-lg transition-all"
        >
          <button
            onClick={() => setOpenIndex2(openIndex2 === i ? null : i)}
            className="w-full text-left p-4 text-accent font-medium cursor-pointer flex justify-between items-center"
          >
            {f.q}
            <span
              className={`text-accent text-lg transform transition-transform duration-300 ${
                openIndex2 === i ? "rotate-180" : ""
              }`}
            >
              {openIndex2 === i ? "▲" : "▼"}
            </span>
          </button>

          {openIndex2 === i && (
            <div className="px-4 pb-4 text-primary text-sm">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>



      {/* FORMULÁRIO --------------------------------------------------- */}
      <section className="py-20 bg-primary/90 text-white" id="cotacao">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8" data-aos="fade-up">
            <span className="text-white"> SOLICITE SUA COTÇÃO</span>
          </h2>

          <form
            action="https://formsubmit.co/contato@arjprime.com.br"
            method="POST"
            className="grid sm:grid-cols-2 gap-6"
            data-aos="fade-up" data-aos-delay="150"
          >
            <input type="text" name="nome" placeholder="Seu nome" required
              className="p-4 rounded bg-white text-primary placeholder:text-primary/60" />
            <input type="email" name="email" placeholder="Seu e-mail" required
              className="p-4 rounded bg-white text-primary placeholder:text-primary/60" />
            <input type="tel" name="telefone" placeholder="Telefone/WhatsApp" required
              className="p-4 rounded bg-white text-primary placeholder:text-primary/60" />
            <select name="ramo" required className="p-4 rounded bg-white text-primary">
              <option value="">Tipo de Seguro</option>
              {ramos.map(r => (<option key={r.nome}>{r.nome}</option>))}
            </select>
            <textarea name="mensagem" rows={4} placeholder="Mensagem"
              className="sm:col-span-2 p-4 rounded bg-white text-primary placeholder:text-primary/60" />
            <button type="submit"
              className="sm:col-span-2 bg-accent text-primary font-semibold py-4 rounded-full hover:-translate-y-0.5 transition">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
