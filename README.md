# 📊 Performance de Vendas e Marketing

Projeto de análise de dados desenvolvido para simular uma operação de vendas e marketing no segmento de bebidas, com foco em acompanhamento de desempenho, rentabilidade, eficiência de campanhas, clientes e produtos.

O projeto foi construído a partir de uma base de dados sintética gerada em Python e analisada em Power BI. Também está sendo desenvolvida uma versão web interativa em Google Apps Script.

---

## 🎯 Objetivo

Construir uma solução analítica capaz de responder perguntas como:

- Como está o desempenho geral da operação?
- Quais canais de venda geram mais receita?
- Quais campanhas e canais de marketing apresentam melhor retorno?
- Quais clientes possuem maior participação nas vendas?
- Quais produtos combinam alta receita e boa margem?
- Onde existem oportunidades de otimização?

---

## 🛠️ Tecnologias utilizadas

- Python
- Google Colab
- Power BI
- DAX
- Google Apps Script
- HTML
- CSS
- JavaScript
- Chart.js
- GitHub

---

## 📁 Estrutura do projeto

```text
performance-vendas-marketing/
│
├── power-bi/
│   ├── Performance_Vendas_Marketing.pbix
│   └── Performance_Vendas_Marketing.pdf
│
├── notebook/
│   └── geracao_base_dados.ipynb
│
├── web-app/
│   ├── Code.gs
│   ├── Index.html
│   ├── Data.html
│   ├── Charts.html
│   ├── Components.html
│   ├── Scripts.html
│   └── README.md
│
└── README.md
```

---

## 📈 Dashboard Power BI

O dashboard foi dividido em quatro páginas analíticas:

### 1. Visão Geral

Apresenta os principais indicadores da operação, incluindo:

- Receita
- Margem Bruta
- Investimento em Marketing
- Conversões
- ROAS

Também permite acompanhar a evolução da receita e do investimento em marketing ao longo do tempo.

### 2. Marketing

Análise da eficiência das campanhas e dos canais de marketing.

Principais indicadores:

- Investimento em Marketing
- Receita Atribuída
- ROAS
- Conversões
- Custo por Lead

### 3. Vendas e Clientes

Análise do desempenho comercial, clientes e distribuição geográfica das vendas.

Principais indicadores:

- Receita
- Quantidade Vendida
- Ticket Médio
- Clientes Ativos
- Margem Bruta

### 4. Produtos e Categorias

Análise do portfólio de produtos considerando receita, volume e rentabilidade.

Foi utilizada uma matriz de produtos para classificar os itens em:

- Estratégico
- Otimização
- Oportunidade
- Avaliação

---

## 🔎 Principais resultados

Alguns dos resultados identificados no projeto:

- Receita total de aproximadamente **R$ 99,4 milhões**
- Margem bruta geral de **28,81%**
- **Whisky** como categoria de maior receita
- **Food Service** como principal canal de vendas
- **Instagram** como canal de marketing com maior ROAS
- Os 10 produtos de maior receita representam aproximadamente **31,6% do faturamento total**

---

## 🌐 Aplicação Web

Além da versão em Power BI, está sendo desenvolvida uma versão web interativa utilizando Google Apps Script.

A aplicação possui:

- KPIs dinâmicos
- Filtros interativos
- Gráficos com Chart.js
- Tabelas detalhadas
- Navegação entre as quatro áreas analíticas

### Status

🚧 **Em desenvolvimento**

A estrutura principal já está funcional. Atualmente o projeto está na etapa de refinamento visual, validação e preparação da versão final.

---

## 🐍 Geração dos Dados

Os dados utilizados no projeto são sintéticos e foram gerados em Python.

O notebook contém etapas de:

- Criação das dimensões
- Geração das tabelas fato
- Simulação de vendas
- Simulação de campanhas de marketing
- Validação dos dados
- Exportação para análise

---

## 📝 Observações

Este projeto utiliza **dados fictícios** e foi desenvolvido exclusivamente para fins de estudo e portfólio.

A **Receita Atribuída** representa apenas vendas associadas às campanhas segundo a regra de atribuição definida na base sintética.

O **ROAS** é calculado como:

**Receita Atribuída ÷ Investimento em Marketing**

e não deve ser interpretado como ROI.

---

## 👩‍💻 Autora

**Fernanda**
