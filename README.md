# AgendeFácil — Landing Page Institucional & Divulgação Open-Source

Landing page moderna, responsiva e otimizada para SEO para divulgação do **AgendeFácil**, um sistema open-source de agendamento voltado para micro e pequenas empresas que trabalham com serviços com hora marcada, como barbearias, salões de beleza, clínicas e estúdios.

O projeto é distribuído sob **Licença MIT** e seu código-fonte principal está disponível publicamente no GitHub:
👉 [https://github.com/chgyn/sistema-agendamento](https://github.com/chgyn/sistema-agendamento)

---

## 🎨 Identidade Visual & Design System

Inspirado nas melhores práticas do design SaaS internacional (referência **Figma Whitepace**):
- **Paleta de Cores:** Deep Navy (`#043873`), Sky Blue vibrante (`#4F9CF9`), Warm Gold (`#FFE492`), fundos suaves em Slate (`#F5F7FA`) e cards elevados.
- **Tipografia:** Google Fonts *Outfit* (títulos de alto impacto) e *Plus Jakarta Sans* (textos e leitura fluida).
- **Interatividade:** Vitrine com abas de capturas de tela reais do sistema, botões de copiar comandos com feedback em tempo real, acordão acessível de FAQ e formulário de contato.
- **Responsividade Total:** Perfeito em telas ultrawide, desktops, tablets e smartphones.

---

## 🚀 Estrutura de Seções

1. **Header & Navegação Fixa:** Logo com calendário, badge de licença MIT, links âncora e botões diretos de ação (GitHub e Como Instalar).
2. **Hero de Alto Impacto:** Proposta de valor clara, diferenciais técnicos, botões de CTA e janela interativa com capturas de tela reais do painel e do fluxo de agendamento público.
3. **Para Quem É o AgendeFácil:** Segmentos detalhados para Barbearias, Salões de Beleza, Microempresas e Desenvolvedores.
4. **Funcionalidades Reais:** Agendamento público multi-tenant, bloqueio contra dupla reserva no PostgreSQL (`SELECT ... FOR UPDATE`), atendimento automatizado via WhatsApp com IA (WUZAPI + Function Calling), cobrança recorrente via Asaas v3 com Gatekeeper, dashboard administrativo e criptografia AES-256-GCM.
5. **Como Funciona:** Fluxo linear de 5 etapas para colocar o sistema no ar.
6. **Instalação em VPS Linux (Destaque Principal):** Requisitos de hardware (vCPU, RAM, SSD), sistemas homologados (Ubuntu 22.04/24.04, Debian 12), terminal interativo com modos de instalação (`install.sh`), Caddy com HTTPS automático Let's Encrypt e link direto para `docs/INSTALL.md`.
7. **Instalação Auxiliada por Agentes de IA:** Guia prático de como utilizar Claude Code, Antigravity, Cursor e assistentes CLI com prompt pronto para copiar e avisos essenciais de segurança de credenciais.
8. **Tecnologias Utilizadas:** Visão detalhada da stack (Golang, Vue 3, PostgreSQL, Redis, Asynq, WUZAPI, Caddy e Docker).
9. **Projeto Open-Source & Comunidade:** Vantagens da licença MIT, soberania de dados e canais de colaboração no GitHub.
10. **Contato, Consultoria & Suporte:** Serviços profissionais independentes (implantação, customização, integrações) e formulário interativo de contato.
11. **Perguntas Frequentes (FAQ):** Accordion com respostas transparentes sobre custos reais de VPS/domínio, gratuidade do código, licença MIT e suporte.
12. **Rodapé Completo:** Links rápidos, documentação oficial, licença MIT e copyright Charles Egidio.

---

## 🔍 SEO & Otimização Orgânica

- **Meta Tags:** Título e descrição otimizados com palavras-chave estratégicas (*sistema de agendamento open-source*, *agendamento barbearia*, *agendamento salão*, *self-hosted*, *sem mensalidade*).
- **Redes Sociais:** Open Graph e Twitter Cards configurados para pré-visualização enriquecida com imagem do dashboard.
- **Schema.org:** JSON-LD estruturado como `SoftwareApplication` e `OpenSourceApplication`.
- **Arquivos Padrão:** `robots.txt` e `sitemap.xml` prontos em `public/`.
- **Performance:** Build leve e modular via Vite (Gzip reduzido, zero dependências supérfluas).

---

## 💻 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ (recomendado Node 20 ou superior)
- npm 9+

### Passos:
```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Acessar no navegador
# http://localhost:5173 (ou porta exibida no terminal)
```

### Build de Produção
```bash
# Validar tipos e compilar os arquivos estáticos otimizados
npm run build

# Testar o resultado da compilação
npm run preview
```
Os arquivos para publicação serão gerados no diretório `dist/`.

---

## 📄 Licença

Distribuído sob os termos da **[Licença MIT](https://github.com/chgyn/sistema-agendamento/blob/main/LICENSE)**.

```text
Copyright (c) 2026 Charles Egidio
```
