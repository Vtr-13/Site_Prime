# ARJ PRIME - Site Institucional

Site institucional completo para a ARJ PRIME, desenvolvido com Next.js 14 e TailwindCSS, seguindo as diretrizes de branding e requisitos técnicos especificados.

## Estrutura do Projeto

O projeto segue a estrutura recomendada para aplicações Next.js:

```
/src
  /app - Páginas do site
    /api
      /lead - API para recebimento de leads
    /seguros
    /emprestimo-consignado
    /saude
    /financiamentos
    /consorcios
    /investimentos
  /components - Componentes reutilizáveis
    /forms - Formulários
    /layout - Componentes de layout
    /ui - Componentes de interface
  /utils - Utilitários
    odoo.js - Integração com Odoo CRM
  /styles - Estilos globais
```

## Páginas Implementadas

1. **Home** - Página inicial com seções:
   - Hero com slogan "Excelência em Gestão Patrimonial"
   - Quem Somos
   - Missão, Visão e Valores
   - Portfólio de Serviços
   - Formulário "Fale com um Consultor"

2. **Seguros** - Descrição dos ramos:
   - Vida, Auto, Residencial, Empresarial, RC, Transportes, Patrimonial
   - Formulário específico para seguros

3. **Empréstimo Consignado**:
   - Explicação do produto
   - Público-alvo
   - Vantagens
   - Formulário específico

4. **Saúde**:
   - Planos individuais, familiares e empresariais
   - Tabela comparativa
   - Formulário específico

5. **Financiamentos**:
   - Modalidades (imóvel, veículo, capital de giro)
   - Passos do processo
   - Formulário específico

6. **Consórcios**:
   - Benefícios
   - Tipos de bens
   - FAQ
   - Formulário específico

7. **Investimentos**:
   - Consultoria em renda fixa, variável, previdência
   - Atendimento premium
   - Formulário específico

## Integração com Odoo CRM

A integração com o Odoo CRM é realizada através da API JSON-RPC. Todos os formulários do site enviam os dados para a rota `/api/lead`, que processa e encaminha para o Odoo CRM.

### Configuração das Variáveis de Ambiente

Para o funcionamento correto da integração com o Odoo CRM, é necessário configurar as seguintes variáveis de ambiente no arquivo `.env`:

```
NEXT_PUBLIC_SITE_URL=https://crodo.arjprime.com.br
ODOO_URL=https://seu-servidor-odoo.com
ODOO_DB=nome_do_banco_de_dados
ODOO_USER=usuario_odoo
ODOO_PASS=senha_odoo
```

## Tecnologias Utilizadas

- **Next.js 14** - Framework React para desenvolvimento web
- **TailwindCSS** - Framework CSS para estilização
- **TypeScript** - Superset JavaScript com tipagem estática

## Diretrizes de Branding

O site segue as diretrizes de branding da ARJ PRIME:

- **Marca**: ARJ PRIME
- **Slogan**: "Excelência em Gestão Patrimonial"
- **Tom de voz**: premium, sofisticado, objetivo
- **Estilo**: minimalista, limpo
- **Paleta**:
  - Azul profundo #14223B (background primário)
  - Dourado metálico #C08E00 (destaques)
  - Tipografia branca #FFFFFF para contraste
- **Tipografia**:
  - Headings — "Poppins", 600
  - Corpo — "Inter", 400

## Requisitos Técnicos

- **Acessibilidade**: Nível AA
- **Meta tags SEO**: Implementadas
- **Responsividade**: Mobile-first
- **Favicon e OG tags**: Configurados

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`
4. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```
5. Acesse `http://localhost:3000` no navegador

## Build e Deployment

Para gerar a versão de produção:

```
npm run build
```

Para iniciar o servidor de produção:

```
npm start
```

## Contato

Para mais informações ou suporte, entre em contato com a equipe de desenvolvimento.
