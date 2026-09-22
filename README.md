# Performance de Vendas e Marketing

Projeto de análise de dados desenvolvido para simular uma operação de vendas e marketing no segmento de bebidas.

A solução foi construída com dados sintéticos gerados em Python e contempla desde a estruturação e validação dos dados até a modelagem, criação de indicadores em DAX, desenvolvimento do dashboard em Power BI e análise dos resultados.

O objetivo principal do projeto é demonstrar a construção de uma solução analítica orientada a perguntas de negócio, integrando informações de vendas, clientes, produtos e marketing.

---

## Contexto do Projeto

O projeto simula uma empresa do segmento de bebidas com uma operação composta por diferentes produtos, categorias, clientes, regiões, canais de venda e campanhas de marketing.

A base foi estruturada para permitir a análise integrada do desempenho comercial e das ações de marketing.

O cenário contempla:

- 60 produtos;
- 250 clientes;
- 7 categorias de produtos;
- 5 regiões;
- 4 canais de venda;
- diferentes canais e campanhas de marketing;
- aproximadamente 60 mil registros de vendas;
- período de análise entre janeiro de 2024 e agosto de 2026.

Setembro de 2026 não foi considerado nas análises por representar um período incompleto na base.

Os dados são totalmente sintéticos e foram desenvolvidos exclusivamente para fins de estudo e portfólio.

---

## Objetivo

A construção da base e do dashboard foi orientada pelas perguntas que a solução deveria responder.

Entre as principais:

- Como está o desempenho geral da operação?
- Como receita e margem evoluem ao longo do tempo?
- Quais canais de venda possuem maior participação na receita?
- Quais regiões concentram as vendas?
- Quais clientes possuem maior participação no faturamento?
- Como o investimento em marketing está distribuído?
- Quais campanhas e canais de marketing apresentam maior eficiência?
- Quais categorias possuem maior faturamento e margem?
- Quais produtos combinam alta receita e boa margem?
- Onde existem oportunidades de investigação e otimização?

---

## Tecnologias Utilizadas

| Tecnologia | Aplicação |
|---|---|
| Python | Geração e validação dos dados sintéticos |
| Google Colab | Desenvolvimento do processo de geração dos dados |
| Power BI | Modelagem, análise e visualização |
| DAX | Construção das medidas e regras analíticas |
| GitHub | Versionamento e documentação |
| Google Apps Script | Desenvolvimento da versão web |
| HTML / CSS / JavaScript | Interface da aplicação web |
| Chart.js | Visualizações da aplicação web |

---

## Fluxo da Solução

O desenvolvimento foi organizado nas seguintes etapas:

```text
Definição do cenário de negócio
          ↓
Definição das perguntas analíticas
          ↓
Estruturação do dataset
          ↓
Geração dos dados sintéticos em Python
          ↓
Validação e exportação dos dados
          ↓
Modelagem no Power BI
          ↓
Criação das medidas em DAX
          ↓
Desenvolvimento dos dashboards
          ↓
Análise e interpretação dos resultados
```

A estrutura dos dados foi definida a partir das necessidades analíticas do projeto. Dessa forma, as informações foram geradas considerando previamente quais dimensões, métricas e relações seriam necessárias para responder às perguntas de negócio.

---

## Modelo de Dados

O modelo foi estruturado separando tabelas fato, responsáveis pelo registro dos eventos da operação, e tabelas dimensão, responsáveis pelos atributos utilizados para segmentação e análise.

Entre as principais estruturas estão:

- fato de vendas;
- fato de marketing;
- dimensão de produtos;
- dimensão de clientes;
- dimensão de datas;
- dimensões relacionadas aos canais e campanhas.

As relações seguem predominantemente uma estrutura `1:N`, com as dimensões filtrando as tabelas fato.

A dimensão de datas centraliza a análise temporal e permite aplicar filtros de período de forma consistente sobre diferentes áreas da solução.

### Vendas e Marketing

As informações de vendas e marketing possuem granularidades distintas.

Como um mesmo identificador de campanha pode aparecer diversas vezes nas duas tabelas fato, um relacionamento direto entre elas poderia resultar em uma relação muitos-para-muitos e dificultar a propagação adequada dos filtros.

Para análises específicas de receita atribuída por marketing, foi utilizada uma abordagem com `TREATAS`, permitindo transferir o contexto das campanhas para a tabela de vendas dentro das medidas necessárias, sem criar um relacionamento físico direto entre as tabelas fato.

---

## Principais Indicadores

O dashboard utiliza medidas explícitas em DAX para centralizar as principais regras de negócio.

| Indicador | Definição |
|---|---|
| Receita | Receita total das vendas |
| Custo | Custo associado aos produtos vendidos |
| Lucro Bruto | Receita - Custo |
| Margem Bruta | Lucro Bruto / Receita |
| Quantidade Vendida | Total de unidades vendidas |
| Transações | Quantidade de transações consideradas no contexto da análise |
| Ticket Médio | Receita / Transações |
| Clientes Ativos | Clientes com compras no contexto analisado |
| Produtos Vendidos | Quantidade distinta de produtos vendidos |
| Investimento em Marketing | Total investido nas campanhas |
| Leads | Leads registrados pelas campanhas |
| Conversões | Ações de sucesso registradas pelas campanhas na base sintética |
| CPL | Investimento em Marketing / Leads |
| Receita Atribuída | Receita associada às campanhas conforme a regra de atribuição da base |
| ROAS | Receita Atribuída / Investimento em Marketing |

As medidas são calculadas de acordo com o contexto de filtro do relatório, permitindo análises por período, região, produto, categoria, canal e demais dimensões disponíveis.

---

# Dashboard Power BI

O dashboard foi organizado em quatro páginas, cada uma direcionada a uma pergunta analítica diferente.

## 1. Visão Geral

**Pergunta principal:**

> Como está o desempenho geral da operação e qual a relação entre vendas e marketing?

A primeira página apresenta uma visão consolidada da operação.

### Principais KPIs

- Receita;
- Margem Bruta;
- Investimento em Marketing;
- Conversões;
- ROAS.

Além dos indicadores gerais, a página permite acompanhar:

- evolução mensal da receita;
- evolução do investimento em marketing;
- receita por categoria;
- receita por canal de venda.

Essa visão funciona como ponto de partida para identificar tendências e direcionar análises mais detalhadas nas demais páginas.

![Dashboard - Visão Geral](docs/visao-geral.png)

---

## 2. Marketing

**Pergunta principal:**

> Onde o investimento em marketing está apresentando maior eficiência?

A página de Marketing aprofunda a análise das campanhas e canais utilizados pela operação.

### Principais KPIs

- Investimento em Marketing;
- Receita Atribuída;
- ROAS;
- Conversões;
- CPL.

As análises incluem:

- campanhas com maior receita atribuída;
- campanhas com maior ROAS;
- evolução mensal do ROAS;
- comparação dos canais de marketing;
- investimento, receita atribuída, conversões e CPL por canal.

Essa estrutura permite diferenciar volume de resultado e eficiência. Uma campanha com maior receita atribuída, por exemplo, não necessariamente possui o maior ROAS.

![Dashboard - Marketing](docs/marketing.png)

---

## 3. Vendas e Clientes

**Pergunta principal:**

> Quem compra, quanto compra e onde estão as vendas?

Essa página concentra a análise comercial e do comportamento da carteira de clientes.

### Principais KPIs

- Receita;
- Quantidade Vendida;
- Ticket Médio;
- Clientes Ativos;
- Margem Bruta.

As análises incluem:

- evolução da receita ao longo do tempo;
- distribuição da receita entre as regiões;
- identificação dos principais clientes;
- comparação de receita, transações e ticket médio entre clientes.

A visão permite avaliar tanto a evolução das vendas quanto a distribuição geográfica e a participação dos principais clientes na receita.

![Dashboard - Vendas e Clientes](docs/vendas-clientes.png)

---

## 4. Produtos e Categorias

**Pergunta principal:**

> Quais produtos e categorias apresentam melhor desempenho em receita e margem?

A última página aprofunda a análise do portfólio.

### Principais KPIs

- Receita;
- Quantidade Vendida;
- Lucro Bruto;
- Margem Bruta;
- Produtos Vendidos.

A página inclui:

- matriz de produtos relacionando receita e margem;
- quantidade vendida representada no tamanho das bolhas;
- receita por categoria;
- margem por categoria comparada à margem geral;
- ranking dos produtos de maior receita;
- participação do Top 10 na receita total;
- classificação dos produtos conforme receita e margem.

![Dashboard - Produtos e Categorias](docs/produtos-categorias.png)

### Classificação dos Produtos

Para complementar a análise, os produtos foram classificados de acordo com sua posição relativa em receita e margem:

| Classificação | Característica |
|---|---|
| Estratégico | Alta receita e alta margem |
| Otimização | Alta receita e margem inferior à referência |
| Oportunidade | Receita inferior à referência e alta margem |
| Avaliação | Receita e margem inferiores às referências |

A classificação permite analisar o portfólio considerando simultaneamente faturamento e rentabilidade bruta, evitando uma avaliação baseada apenas em receita.

---

# Principais Resultados

## Desempenho Geral

No período analisado, a operação apresentou aproximadamente:

- **R$ 99,4 milhões em receita**;
- **R$ 28,64 milhões em lucro bruto**;
- **28,81% de margem bruta**;
- **527 mil unidades vendidas**;
- **250 clientes ativos**.

Esses indicadores servem como referência para as análises realizadas nas demais áreas do dashboard.

---

## Whisky lidera o faturamento por categoria

A categoria **Whisky** apresentou aproximadamente **R$ 28,1 milhões em receita**, sendo a categoria de maior faturamento.

Sua margem bruta foi de aproximadamente **30,79%**, acima da margem geral da operação de **28,81%**.

---

## Food Service possui a maior receita entre os canais de venda

O canal **Food Service** apresentou aproximadamente **R$ 41 milhões em receita**, sendo o canal com maior faturamento no período analisado.

O resultado indica uma participação expressiva desse canal na receita da operação e pode servir como ponto de partida para análises adicionais sobre clientes, volume, ticket e mix de produtos.

---

## Instagram apresenta o maior ROAS entre os canais analisados

Entre os canais de marketing, o **Instagram apresentou ROAS de 16,45**, o maior entre os canais analisados.

O canal registrou aproximadamente:

- **R$ 426 mil em investimento**;
- **R$ 7,0 milhões em receita atribuída**;
- **ROAS de 16,45**.

Isso significa que, segundo a regra de atribuição utilizada na base, aproximadamente R$ 16,45 em receita foram associados às campanhas do canal para cada R$ 1 investido.

O indicador representa eficiência de receita atribuída sobre investimento e não deve ser interpretado como lucro ou ROI.

---

## Top 10 representa 31,58% da receita

Os dez produtos de maior receita representam aproximadamente **31,58% do faturamento total**, equivalente a cerca de **R$ 31 milhões**.

Entre eles:

- 8 produtos foram classificados como **Estratégicos**;
- 2 produtos foram classificados como **Otimização**.

Os produtos classificados como Otimização combinam alto faturamento com margem inferior à referência utilizada, tornando-se candidatos para análises adicionais de custos, preços e descontos.

---

## Categorias com oportunidades de investigação

Apesar do alto faturamento, a categoria **Vinho** apresentou margem bruta de aproximadamente **27,30%**, abaixo da margem geral de **28,81%**.

A categoria **Cerveja Premium** apresentou margem de aproximadamente **23,37%**, a menor entre as categorias analisadas.

Esses resultados não determinam isoladamente uma ação comercial, mas indicam pontos que podem ser aprofundados por meio de análises de custos, preços, descontos, volume e composição do portfólio.

---

# Decisões Técnicas e Desafios

Durante o desenvolvimento, algumas situações exigiram decisões específicas de modelagem e DAX.

## Integração entre Marketing e Vendas

As tabelas de vendas e marketing possuem granularidades diferentes e podem conter múltiplas ocorrências de uma mesma campanha.

Em vez de criar um relacionamento direto muitos-para-muitos entre as tabelas fato, a interação necessária para determinadas medidas foi controlada utilizando `TREATAS`.

Essa abordagem permitiu aplicar o conjunto de campanhas presente no contexto de marketing como filtro sobre as vendas associadas às campanhas.

---

## Contexto de Filtro

As principais métricas foram implementadas como medidas para que os resultados fossem recalculados dinamicamente conforme os filtros aplicados no dashboard.

Isso é especialmente relevante para indicadores como:

- Receita;
- Lucro Bruto;
- Margem Bruta;
- Ticket Médio;
- ROAS;
- Receita Atribuída.

A margem bruta geral, por exemplo, é calculada a partir do lucro bruto e da receita agregados no contexto analisado, em vez de utilizar uma média simples das margens individuais.

---

## Análise de Produtos

A classificação dos produtos foi desenvolvida considerando simultaneamente receita e margem.

Essa abordagem permite distinguir produtos de alto faturamento e boa margem daqueles que apresentam faturamento relevante, mas margem inferior à referência, criando uma análise mais completa do portfólio.

---

## Validação

A validação foi considerada em diferentes etapas do projeto:

1. validação dos dados gerados em Python;
2. verificação das chaves e granularidade das tabelas;
3. validação dos relacionamentos e propagação dos filtros;
4. conferência das medidas e totais;
5. testes dos indicadores sob diferentes contextos de filtro.

Esse processo foi importante principalmente nas análises que envolvem mais de uma tabela fato.

---

# Geração dos Dados

Os dados utilizados são sintéticos e foram gerados em Python utilizando Google Colab.

O processo de geração foi organizado considerando previamente o cenário de negócio e as análises que seriam realizadas posteriormente.

O notebook contempla:

- configuração do cenário;
- criação da dimensão de datas;
- geração dos produtos;
- geração dos clientes;
- definição dos canais;
- criação das campanhas;
- geração da fato de vendas;
- geração da fato de marketing;
- validação dos dados;
- exportação dos arquivos para análise.

A utilização de dados sintéticos permitiu desenvolver o projeto de ponta a ponta, desde a estruturação do dataset até a construção da solução analítica.

---

# Limitações da Análise

Por se tratar de um projeto de portfólio construído com dados sintéticos, algumas limitações devem ser consideradas.

### Dados sintéticos

Os resultados representam exclusivamente o cenário simulado e não devem ser interpretados como comportamento real do mercado de bebidas.

### Conversões

A base registra conversões como ações de sucesso associadas às campanhas, porém não detalha uma jornada individual completa entre lead, conversão, cliente e venda.

Uma evolução do projeto seria estruturar esse funil de forma mais granular, permitindo acompanhar a jornada de aquisição e avaliar com maior profundidade a qualidade dos leads.

### Receita Atribuída

Receita atribuída representa vendas associadas às campanhas segundo a regra utilizada na base sintética.

A associação não representa, por si só, evidência de causalidade entre a campanha e a venda.

### ROAS e ROI

O projeto utiliza ROAS para avaliar a relação entre receita atribuída e investimento em marketing:

```text
ROAS = Receita Atribuída / Investimento em Marketing
```

ROAS não representa lucro.

Um cálculo financeiro completo de ROI exigiria uma definição mais abrangente dos ganhos e custos relevantes para a operação.

---

# Aplicação Web

Além do dashboard em Power BI, está sendo desenvolvida uma versão web interativa utilizando:

- Google Apps Script;
- HTML;
- CSS;
- JavaScript;
- Chart.js.

A aplicação replica as quatro perspectivas principais do dashboard e possui:

- KPIs dinâmicos;
- filtros interativos;
- gráficos;
- tabelas detalhadas;
- navegação entre as áreas analíticas.

**Status:** Em desenvolvimento.

A estrutura principal encontra-se funcional e o projeto está em etapa de refinamento e validação.

---

# Estrutura do Repositório

```text
performance-vendas-marketing/
│
├── docs/
│   ├── visao-geral.png
│   ├── marketing.png
│   ├── vendas-clientes.png
│   └── produtos-categorias.png
│
├── notebook/
│   └── Performance_Vendas_Marketing.ipynb
│
├── power-bi/
│   ├── Performance de Vendas e Marketing.pbix
│   └── Performance de Vendas e Marketing.pdf
│
├── web-app/
│   ├── Code.gs
│   ├── Index.html
│   ├── Data.html
│   ├── Charts.html
│   ├── Components.html
│   ├── Scripts.html
│   ├── Styles.html
│   └── README.md
│
└── README.md
```

---

# Autora

**Fernanda**

Projeto desenvolvido para estudo e portfólio em Data Analytics e Business Intelligence.
