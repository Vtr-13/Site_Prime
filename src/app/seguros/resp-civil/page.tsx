'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FormularioPopup from '@/components/layout/FormularioPopup'

const profissionais = [
  {
  id: 'rc-medicos',
  title: 'MÉDICOS',
  desc: 'Cobertura completa para médicos contra erros técnicos, omissões e imperícia. Ideal para clínicos, cirurgiões, anestesistas e demais especialidades médicas. Segurança jurídica e tranquilidade para sua atuação profissional.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Médicos oferece proteção jurídica contra processos decorrentes de falhas involuntárias na prática médica.',
    'Cobre erros técnicos, omissões, imperícia ou negligência no atendimento a pacientes.',
    'Essencial para médicos autônomos, plantonistas, cooperados, profissionais de clínicas, hospitais e consultórios.',
    
    '• • • COBERTURAS',
    'Erros em diagnósticos, condutas clínicas ou cirurgias',
    'Danos morais, corporais, estéticos ou materiais causados a pacientes',
    'Despesas com defesa judicial, perícias técnicas e honorários advocatícios',
    'Indenizações decorrentes de sentença judicial ou acordos extrajudiciais',
    'Cobertura retroativa para atos anteriores à contratação',
    'Cobertura opcional para injúria, calúnia e difamação',
    'Cobertura estendida para atos de auxiliares sob supervisão, quando contratada',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Clínicos gerais, cirurgiões e anestesistas',
    'Ginecologistas, ortopedistas e oftalmologistas',
    'Psiquiatras, médicos do trabalho e médicos de família',
    'Outras especialidades reconhecidas pelo CRM',

    '• • • BENEFÍCIOS',
    'Evita prejuízos financeiros causados por ações judiciais inesperadas',
    'Preserva a reputação e imagem do profissional médico',
    'Garante segurança jurídica para o exercício da medicina com confiança',
    'Facilita acordos e reduz desgastes em disputas judiciais',
    'Atendimento especializado e suporte completo em caso de sinistro',
  ],
},
  {
  id: 'rc-advogados',
  title: 'ADVOGADOS',
  desc: 'Proteção jurídica contra falhas profissionais na advocacia. Ideal para advogados autônomos, sócios de escritórios ou profissionais de departamentos jurídicos. Cobertura contra erros técnicos, omissões e má condução de processos.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Advogados é uma proteção essencial contra processos relacionados a falhas na prestação de serviços jurídicos.',
    'Cobre erros técnicos, perda de prazos, omissões, negligência ou má condução de processos judiciais e administrativos.',
    'Indicado para advogados autônomos, associados, sociedades de advocacia e profissionais jurídicos de empresas.',

    '• • • COBERTURAS',
    'Erro de estratégia jurídica ou omissão de defesa',
    'Perda de prazos processuais ou administrativos',
    'Má redação de petições, contratos ou recursos',
    'Danos materiais, morais ou financeiros causados a clientes',
    'Cobertura de indenizações por decisão judicial ou acordos',
    'Despesas com defesa jurídica, custas e honorários advocatícios',
    'Cobertura para processos disciplinares na OAB',
    'Cobertura retroativa para falhas anteriores à contratação',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Advogados autônomos e liberais',
    'Sócios e associados de escritórios de advocacia',
    'Profissionais atuando em departamentos jurídicos',
    'Correspondentes jurídicos e advogados terceirizados',
    'Advogados iniciantes ou com grande volume de processos',

    '• • • BENEFÍCIOS',
    'Protege contra consequências financeiras de falhas não intencionais',
    'Preserva a credibilidade e reputação profissional',
    'Oferece suporte jurídico qualificado em caso de sinistro',
    'Reduz impactos negativos em processos de clientes insatisfeitos',
    'Permite atuação com mais segurança, especialmente em áreas de alto risco',
  ],
},
  {
  id: 'rc-engenheiros',
  title: 'ENGENHEIROS',
  desc: 'Cobertura essencial para engenheiros contra falhas técnicas, erros de projeto e execução. Segurança jurídica e tranquilidade para profissionais autônomos, empresas e responsáveis técnicos.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Engenheiros oferece proteção contra prejuízos causados por erros, omissões ou falhas técnicas durante o exercício da engenharia.',
    'Voltado para engenheiros civis, elétricos, mecânicos, ambientais, de segurança do trabalho e outras especialidades, que atuam como autônomos, responsáveis técnicos ou em empresas.',
    'Garante segurança jurídica frente a reclamações, ações judiciais ou pedidos de indenização de terceiros prejudicados.',

    '• • • COBERTURAS',
    'Erros de cálculo, especificações técnicas ou dimensionamento incorreto',
    'Falhas em laudos, pareceres técnicos ou execução de obras e projetos',
    'Danos estruturais, elétricos, hidráulicos ou ambientais causados por erro profissional',
    'Despesas com defesa judicial, perícias e honorários advocatícios',
    'Cobertura para indenizações por decisão judicial ou acordo extrajudicial',
    'Cobertura retroativa para atos realizados antes da contratação',
    'Cobertura estendida para equipe técnica sob responsabilidade do engenheiro (opcional)',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Engenheiros civis, elétricos e mecânicos',
    'Engenheiros ambientais, agrônomos e de produção',
    'Engenheiros de segurança do trabalho e telecomunicações',
    'Profissionais que assinam ARTs e atuam como responsáveis técnicos',
    'Empresas de engenharia e consultores independentes',

    '• • • BENEFÍCIOS',
    'Protege o patrimônio pessoal e profissional contra ações de responsabilidade',
    'Evita prejuízos financeiros decorrentes de falhas técnicas ou omissões',
    'Preserva a reputação perante clientes, órgãos públicos e conselhos',
    'Aumenta a confiança de clientes ao contratar serviços de engenharia',
    'Suporte especializado em sinistros com enfoque técnico e jurídico',
  ],
},
  {
  id: 'rc-enfermeiros',
  title: 'ENFERMEIROS',
  desc: 'Proteção contra falhas, omissões e erros na assistência de enfermagem. Ideal para profissionais que atuam em hospitais, clínicas, home care ou como autônomos. Segurança jurídica e respaldo para o seu exercício profissional.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Enfermeiros oferece proteção contra ações judiciais, reclamações e pedidos de indenização causados por falhas no exercício da enfermagem.',
    'Cobre erros técnicos, omissões, imperícia ou negligência em procedimentos assistenciais, medicamentosos ou administrativos.',
    'Indicado para enfermeiros autônomos, assistenciais, hospitalares, de UTI, home care, enfermeiros do trabalho e docentes da área de saúde.',

    '• • • COBERTURAS',
    'Erros em administração de medicamentos, curativos, sondagens ou monitoramento',
    'Omissão de cuidados ou falhas no acompanhamento de pacientes',
    'Danos morais, corporais ou materiais causados a terceiros',
    'Despesas com defesa judicial, perícias e honorários advocatícios',
    'Cobertura para processos administrativos em conselhos de classe',
    'Indenizações determinadas judicialmente ou em acordos extrajudiciais',
    'Cobertura retroativa para atos anteriores à contratação',
    'Cobertura para difamação, calúnia ou injúria no exercício da função (opcional)',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Enfermeiros assistenciais e hospitalares',
    'Enfermeiros de UTI, emergência e centro cirúrgico',
    'Enfermeiros de home care e atendimento domiciliar',
    'Enfermeiros do trabalho e da área acadêmica',
    'Enfermeiros que atuam como autônomos ou em instituições públicas e privadas',

    '• • • BENEFÍCIOS',
    'Evita danos financeiros por falhas não intencionais no atendimento',
    'Preserva a reputação e credibilidade profissional',
    'Aumenta a confiança de pacientes, instituições e empregadores',
    'Proporciona tranquilidade para o exercício da enfermagem com segurança jurídica',
    'Atendimento especializado e suporte completo em caso de sinistro',
  ],
},
{
  id: 'rc-psicologos',
  title: 'PSICÓLOGOS',
  desc: 'Cobertura contra falhas na conduta terapêutica, omissões e erros em avaliações. Segurança para psicólogos clínicos, organizacionais, escolares e hospitalares. Resguarde sua atuação com tranquilidade e respaldo jurídico.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Psicólogos oferece proteção contra ações judiciais ou reclamações por falhas na prestação de serviços psicológicos.',
    'Abrange erros de interpretação, falhas em conduta terapêutica, omissão de intervenção, diagnósticos equivocados ou vazamento indevido de informações.',
    'Indicado para psicólogos autônomos, clínicos, hospitalares, organizacionais, escolares e peritos judiciais.',

    '• • • COBERTURAS',
    'Erros em avaliação psicológica, laudos e pareceres técnicos',
    'Conduta terapêutica inadequada ou omissão de abordagem necessária',
    'Vazamento de informações sigilosas de pacientes ou empresas',
    'Danos morais, psicológicos ou materiais causados a terceiros',
    'Defesa judicial, perícias e honorários advocatícios',
    'Cobertura para processos éticos junto ao CRP',
    'Indenizações por decisão judicial ou acordo',
    'Cobertura retroativa para atendimentos anteriores à contratação',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Psicólogos clínicos, escolares e hospitalares',
    'Psicólogos organizacionais e do trabalho',
    'Psicólogos forenses e peritos judiciais',
    'Autônomos, prestadores de serviço ou contratados por instituições públicas e privadas',

    '• • • BENEFÍCIOS',
    'Garante proteção financeira e jurídica contra falhas não intencionais',
    'Preserva a relação com pacientes e a reputação profissional',
    'Cumpre exigências de instituições que contratam serviços psicológicos',
    'Proporciona segurança para atuar com ética, tranquilidade e confiança',
    'Atendimento especializado em casos de sinistro ou questionamento profissional',
  ],
},
{
  id: 'rc-dentistas',
  title: 'DENTISTAS',
  desc: 'Cobertura essencial contra erros em procedimentos odontológicos, falhas técnicas e complicações estéticas. Ideal para dentistas clínicos, especialistas e cirurgiões. Segurança jurídica e tranquilidade para o consultório.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Dentistas protege contra ações judiciais, reclamações e pedidos de indenização por erros ou omissões na prática odontológica.',
    'Garante respaldo em situações de complicações em tratamentos estéticos, ortodônticos, cirúrgicos ou clínicos, mesmo que não intencionais.',
    'Voltado para dentistas autônomos, clínicas odontológicas e especialistas de todas as áreas da odontologia.',

    '• • • COBERTURAS',
    'Falhas em procedimentos clínicos, restauradores, endodônticos ou cirúrgicos',
    'Complicações em implantes, ortodontia e tratamentos estéticos',
    'Danos morais, corporais ou estéticos causados a pacientes',
    'Despesas com defesa judicial, perícias e honorários advocatícios',
    'Indenizações por sentença judicial ou acordo extrajudicial',
    'Cobertura retroativa para procedimentos anteriores à contratação',
    'Cobertura opcional para calúnia, injúria e difamação profissional',
    'Cobertura para atos de auxiliares odontológicos sob responsabilidade',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Dentistas clínicos gerais e especialistas',
    'Ortodontistas, implantodontistas e endodontistas',
    'Cirurgiões bucomaxilofaciais e periodontistas',
    'Profissionais autônomos, em consultórios ou clínicas odontológicas',

    '• • • BENEFÍCIOS',
    'Evita prejuízos financeiros causados por falhas involuntárias',
    'Preserva a reputação do profissional e do consultório',
    'Garante segurança em procedimentos de alto risco estético e funcional',
    'Cumpre exigências legais e contratuais em atendimentos privados e públicos',
    'Suporte completo em caso de reclamações e processos de pacientes',
  ],
},
{
  id: 'rc-arquitetos',
  title: 'ARQUITETOS',
  desc: 'Proteção contra falhas em projetos arquitetônicos, erros técnicos e prejuízos causados a clientes. Ideal para arquitetos autônomos ou empresas. Segurança jurídica para sua assinatura profissional.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Arquitetos protege contra ações judiciais e pedidos de indenização decorrentes de falhas na elaboração ou execução de projetos arquitetônicos.',
    'Abrange erros técnicos, omissões, falhas de especificação, incompatibilidades e problemas funcionais ou estéticos.',
    'Recomendado para arquitetos autônomos, escritórios, responsáveis técnicos, consultores e designers de interiores que assinam projetos ou acompanham obras.',

    '• • • COBERTURAS',
    'Erros de projeto que comprometam estrutura, estética, funcionalidade ou segurança',
    'Especificações técnicas incorretas ou incompatíveis',
    'Inadequações na planta, memorial descritivo ou orientação de execução',
    'Danos materiais, morais ou estéticos causados a terceiros',
    'Despesas com defesa judicial, perícias técnicas e honorários',
    'Cobertura para indenizações por sentença judicial ou acordo',
    'Cobertura retroativa para projetos realizados antes da contratação',
    'Cobertura opcional para atos de assistentes sob supervisão',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Arquitetos autônomos e responsáveis técnicos',
    'Escritórios de arquitetura e urbanismo',
    'Arquitetos de interiores, paisagistas e designers',
    'Consultores e profissionais que atuam com projetos e acompanhamento de obras',

    '• • • BENEFÍCIOS',
    'Evita prejuízos financeiros e desgastes com clientes por falhas não intencionais',
    'Preserva imagem e reputação profissional no mercado de construção e design',
    'Demonstra compromisso com responsabilidade técnica e ética',
    'Facilita a obtenção de novos contratos e licitações públicas ou privadas',
    'Oferece suporte técnico e jurídico completo em caso de sinistro',
  ],
},
{
  id: 'rc-contadores',
  title: 'CONTADORES',
  desc: 'Proteção contra falhas em declarações, obrigações fiscais e contábeis. Ideal para contadores, auditores e consultores tributários. Segurança jurídica e financeira para sua atuação profissional.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Contadores cobre prejuízos decorrentes de erros ou omissões em atividades contábeis, fiscais, trabalhistas ou patrimoniais prestadas a clientes.',
    'Indicado para contadores autônomos, escritórios de contabilidade, auditores independentes e consultores tributários.',
    'Abrange falhas que gerem autuações, multas, inconsistências em balanços ou perda de prazos legais.',

    '• • • COBERTURAS',
    'Erros em declarações de IRPJ, IRPF, SPED, ECF, DCTF e outras obrigações acessórias',
    'Omissão de informações ou envio fora do prazo',
    'Lançamentos contábeis incorretos, que gerem autuação ou prejuízo ao cliente',
    'Erros em cálculos de impostos, encargos sociais ou tributos indevidos',
    'Danos financeiros, morais ou materiais causados a clientes',
    'Despesas com defesa judicial, perícias e honorários advocatícios',
    'Indenizações determinadas judicialmente ou via acordo',
    'Cobertura retroativa para atos anteriores à contratação',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Contadores autônomos ou responsáveis técnicos',
    'Auditores fiscais e independentes',
    'Empresas de contabilidade e consultoria contábil',
    'Profissionais que atuam com folha de pagamento, tributos e obrigações acessórias',

    '• • • BENEFÍCIOS',
    'Evita prejuízos pessoais causados por falhas em processos contábeis e fiscais',
    'Preserva a imagem profissional frente a clientes e órgãos reguladores',
    'Garante confiança e credibilidade junto a empresas contratantes',
    'Atendimento especializado e suporte jurídico completo em caso de sinistro',
    'Cumpre exigências contratuais de empresas que exigem cobertura de RC',
  ],
},
{
  id: 'rc-nutricionistas',
  title: 'NUTRICIONISTAS',
  desc: 'Cobertura para falhas em prescrição alimentar, omissões ou condutas técnicas equivocadas. Ideal para nutricionistas clínicos, esportivos e consultores. Segurança jurídica e respaldo em casos de responsabilização profissional.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Nutricionistas protege contra reclamações ou ações judiciais decorrentes de erros em orientações nutricionais, planos alimentares, suplementações ou omissões em condutas técnicas.',
    'Recomendado para nutricionistas clínicos, esportivos, hospitalares, de consultórios, home care ou que prestam consultorias para empresas e instituições públicas ou privadas.',
    'Garante suporte jurídico e indenizações em caso de responsabilização civil por prejuízos causados a pacientes ou clientes.',

    '• • • COBERTURAS',
    'Prescrição equivocada de dietas, planos alimentares ou suplementos',
    'Falta de orientação em casos de restrição alimentar ou doenças específicas',
    'Consequências físicas, alérgicas ou nutricionais causadas por erro técnico',
    'Danos morais, materiais ou corporais a pacientes ou clientes',
    'Despesas com defesa judicial, perícias e custas processuais',
    'Cobertura para processos éticos junto ao CRN',
    'Indenizações por acordo ou decisão judicial',
    'Cobertura retroativa para atos realizados antes da contratação',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Nutricionistas clínicos, esportivos e hospitalares',
    'Nutricionistas em home care ou consultórios particulares',
    'Nutricionistas de instituições, restaurantes ou serviços de alimentação coletiva',
    'Consultores em saúde, bem-estar, performance esportiva e emagrecimento',

    '• • • BENEFÍCIOS',
    'Evita prejuízos financeiros causados por falhas involuntárias',
    'Preserva sua credibilidade profissional junto a pacientes e empresas',
    'Garante tranquilidade no atendimento a casos complexos ou de risco',
    'Facilita a atuação em clínicas, academias e hospitais que exigem RC',
    'Atendimento especializado e suporte jurídico completo em caso de sinistro',
  ],
},
{
  id: 'rc-veterinarios',
  title: 'VETERINÁRIOS',
  desc: 'Cobertura contra erros, omissões e falhas técnicas no atendimento veterinário. Ideal para clínicos, cirurgiões, especialistas e profissionais que atuam em pet shops, clínicas ou consultórios.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Veterinários protege contra ações judiciais e pedidos de indenização relacionados a falhas na prestação de serviços médicos veterinários.',
    'Abrange erros em diagnósticos, condutas clínicas, cirurgias ou omissões que resultem em danos ou morte de animais sob os cuidados do profissional.',
    'Indicado para veterinários autônomos, responsáveis técnicos de clínicas, pet shops, hospitais veterinários e consultores especializados.',

    '• • • COBERTURAS',
    'Erros em diagnóstico, medicação ou conduta terapêutica animal',
    'Complicações ou falhas em cirurgias ou anestesia',
    'Omissão de cuidados ou negligência no atendimento clínico',
    'Danos materiais, morais ou emocionais causados a tutores',
    'Custas com defesa judicial, perícias veterinárias e honorários',
    'Cobertura de indenizações por sentença judicial ou acordo',
    'Cobertura retroativa para atendimentos anteriores à contratação',
    'Cobertura para danos causados por auxiliares sob sua supervisão (opcional)',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Veterinários clínicos gerais e especialistas',
    'Cirurgiões veterinários e anestesistas',
    'Veterinários que atuam em clínicas, hospitais, pet shops ou atendimento domiciliar',
    'Responsáveis técnicos por estabelecimentos veterinários ou agropecuários',

    '• • • BENEFÍCIOS',
    'Evita prejuízos financeiros por falhas profissionais com alto impacto emocional',
    'Preserva a reputação do profissional frente aos tutores e ao CRMV',
    'Atendimento especializado e suporte jurídico completo em caso de sinistro',
    'Demonstra responsabilidade e aumenta a confiança de clientes e parceiros',
    'Facilita a atuação em ambientes que exigem seguro de responsabilidade civil',
  ],
},
{
  id: 'rc-corretores-imoveis',
  title: 'CORRETORES DE IMÓVEIS',
  desc: 'Proteção contra falhas na intermediação, omissões ou prejuízos causados a clientes. Ideal para corretores autônomos e imobiliárias. Garanta segurança jurídica e preserve sua reputação no mercado imobiliário.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Corretores de Imóveis cobre erros, omissões e atos não intencionais que causem prejuízos a compradores, locatários ou proprietários durante a intermediação imobiliária.',
    'Abrange falhas em documentação, informações incorretas, perda de prazos ou condutas que gerem ações judiciais por parte de clientes.',
    'Indicado para corretores autônomos, imobiliárias e consultores do setor.',

    '• • • COBERTURAS',
    'Erros na descrição ou divulgação do imóvel',
    'Falta de informações sobre pendências legais ou restrições',
    'Omissões em cláusulas contratuais ou riscos jurídicos na negociação',
    'Perda de prazo em registros, vistorias ou documentações',
    'Danos materiais e morais causados a compradores ou vendedores',
    'Despesas com defesa judicial e honorários advocatícios',
    'Indenizações por acordo extrajudicial ou decisão judicial',
    'Cobertura retroativa para negociações realizadas antes da contratação',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Corretores autônomos com ou sem CRECI',
    'Consultores e avaliadores imobiliários',
    'Imobiliárias e franqueados do setor',
    'Intermediadores de compra, venda, locação ou administração de imóveis',

    '• • • BENEFÍCIOS',
    'Evita perdas financeiras por erros não intencionais em negociações',
    'Preserva a imagem e credibilidade no mercado',
    'Garante segurança jurídica para atuar com grandes valores e contratos',
    'Atende exigências de clientes corporativos e órgãos públicos',
    'Suporte especializado em disputas e processos judiciais relacionados a imóveis',
  ],
},
{
  id: 'rc-ti',
  title: 'PROFISSIONAIS DE TI',
  desc: 'Cobertura contra falhas técnicas, perda de dados, indisponibilidade de sistemas e omissões em projetos. Ideal para desenvolvedores, analistas, consultores e empresas de tecnologia.',
  bullets: [
    '• • • DESCRIÇÃO',
    'O Seguro de Responsabilidade Civil Profissional para Profissionais de TI protege contra perdas causadas por falhas técnicas, omissões, indisponibilidade de sistemas ou erros em entregas digitais.',
    'Essencial para desenvolvedores de software, analistas de dados, consultores, empresas de tecnologia, profissionais de suporte, cibersegurança e infraestrutura.',
    'Garante respaldo financeiro e jurídico em casos de prejuízos a clientes decorrentes de erros profissionais, bugs ou falhas em integração de sistemas.',

    '• • • COBERTURAS',
    'Erros de programação, bugs em sistemas ou falhas de integração',
    'Perda de dados sensíveis ou indisponibilidade de plataformas',
    'Omissão de funcionalidades contratadas ou falhas no escopo do projeto',
    'Violação de confidencialidade ou incidentes de segurança cibernética',
    'Danos financeiros ou reputacionais causados a clientes por falhas técnicas',
    'Despesas com defesa judicial, perícias e honorários técnicos',
    'Indenizações judiciais ou acordos extrajudiciais com clientes prejudicados',
    'Cobertura retroativa para contratos anteriores à contratação do seguro',

    '• • • PROFISSIONAIS ATENDIDOS',
    'Desenvolvedores front-end, back-end e fullstack',
    'Profissionais de infraestrutura, suporte, redes e servidores',
    'Consultores em TI, analistas de dados e especialistas em segurança digital',
    'Agências de desenvolvimento, software houses e freelancers de tecnologia',

    '• • • BENEFÍCIOS',
    'Protege contra perdas causadas por falhas em projetos ou serviços entregues',
    'Garante segurança para atuar com contratos de alto valor e alta responsabilidade',
    'Demonstra profissionalismo e seriedade na relação com clientes e empresas',
    'Facilita a contratação por empresas que exigem seguro de responsabilidade civil',
    'Suporte completo em disputas técnicas com respaldo jurídico e pericial',
  ],
},
]

export default function ResponsabilidadeCivil() {
  const [flipped, setFlipped] = useState<string | null>(null)

  useEffect(() => {
    AOS.init({ once: true })
    document.body.style.overflow = flipped ? 'hidden' : ''
  }, [flipped])

  const Card = ({ p }: { p: typeof profissionais[number] }) => {
    const isOpen = flipped === p.id
    return (
      <div
        className={`flip-card bg-white rounded-lg shadow-card h-full ${isOpen ? 'is-flipped' : ''}`}
        onClick={() => setFlipped(isOpen ? null : p.id)}
      >
        <div className="flip-card-inner">
          {/* FRENTE */}
          <div className="flip-card-front p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-primary mb-3">{p.title}</h3>
            <p className="text-gray-700 mb-4 line-clamp-4">{p.desc}</p>
            <div className="mt-auto flex flex-col gap-3">
              <button className="inline-block bg-primary text-white hover:bg-accent hover:text-primary font-medium py-3 px-8 rounded-lg transition shadow-md hover:scale-105">Saiba mais</button>
              <div onClick={(e) => e.stopPropagation()}>
                <FormularioPopup
                  buttonText="Solicitar Cotação"
                  className="inline-block bg-accent/90 text- hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition shadow-md"
                />
              </div>
            </div>
          </div>

          {/* VERSO */}
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
                  e.stopPropagation()
                  setFlipped(null)
                }}
              >
                ✕ Fechar
              </button>

              <h3 className="text-3xl font-semibold mb-4">{p.title}</h3>
              <p className="mb-6 text-lg">{p.desc}</p>

              <h4 className="text-xl font-semibold mb-2 text-accent">Coberturas e Benefícios</h4>
              <ul className="space-y-2 mb-8">
                {p.bullets.map((b, index) =>
                  b.startsWith('• • •') ? (
                    <li
                      key={index}
                      className="mt-6 mb-1 text-accent font-semibold uppercase tracking-wide"
                    >
                      {b.replace('• • •', '').trim()}
                    </li>
                  ) : (
                    <li key={index} className="list-disc list-inside text-white/90">
                      {b}
                    </li>
                  )
                )}
              </ul>

              <Link
                href="#cotacao"
                onClick={() => setFlipped(null)}
                className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition-transform"
              >
                Solicitar cotação
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-primary text-white overflow-hidden">
     <section className="relative w-full h-[90vh] overflow-hidden">
  {/* Imagem de fundo */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/seguros/hero/rc.png" // Altere se o caminho for diferente
      alt="Profissional protegido"
      fill
      priority
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60" />
  </div>

  {/* Conteúdo do hero */}
  <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6 h-full max-w-4xl mx-auto">
    <h1 className="text-6xl md:text-7xl font-bold mb-6">
      Responsabilidade Civil Profissional
    </h1>
    <p className="text-xl text-white/80 max-w-2xl mb-8">
      Proteção contra falhas, omissões e processos judiciais para profissionais que atuam com responsabilidade técnica.
    </p>
    <FormularioPopup
      buttonText="Simular agora"
      className="inline-block bg-primary text-white hover:bg-accent hover:text-primary font-medium px-8 py-3 rounded-lg transition shadow-md"
    />
  </div>
</section>



      <section className="py-16" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">PROFISSIONAIS ATENDIDOS </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {profissionais.map((p) => (
              <div key={p.id} className="h-full">
                <Card p={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cotacao" className="py-24 bg-primary/90">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">PRONTO PARA PROTEGER SUA PROFISSÃO?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Solicite sua cotação personalizada e conte com o suporte da ARJ Prime para garantir sua tranquilidade profissional.
          </p>
          {/* Substitua o antigo botão por isto abaixo: */}
             <FormularioPopup
              buttonText="Simular agora"
              className="inline-block bg-accent/100 text-accent hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition shadow-md"
            />
        </div>
      </section>
    </main>
  )
}
