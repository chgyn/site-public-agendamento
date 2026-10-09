<script setup lang="ts">
import { ref } from 'vue'
import {
  Server,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-vue-next'

const copiedIndex = ref<number | null>(null)
const activeInstallTab = ref<'quick' | 'noninteractive' | 'httponly' | 'dev'>('quick')

const copyToClipboard = (text: string, index: number) => {
  navigator.clipboard.writeText(text)
  copiedIndex.value = index
  setTimeout(() => {
    copiedIndex.value = null
  }, 2500)
}

const installTabs = {
  quick: {
    title: 'Instalação Automática Interativa (Recomendado)',
    desc: 'O instalador pergunta seu domínio e e-mail ACME, gera senhas seguras, instala o Docker (se necessário), sobe os containers e valida os healthchecks.',
    code: `# 1. Acesse sua VPS Linux como root ou sudo
sudo apt-get update && sudo apt-get install -y git

# 2. Clone o repositório oficial
git clone https://github.com/chgyn/sistema-agendamento.git
cd sistema-agendamento

# 3. Dê permissão e execute o instalador
sudo chmod +x install.sh scripts/*.sh
sudo ./install.sh`
  },
  noninteractive: {
    title: 'Modo Não-Interativo (Produção Direta / Scripted)',
    desc: 'Informe o domínio e o e-mail diretamente como argumentos para automação rápida.',
    code: `# Execução direta com parâmetros informados
sudo ./install.sh \\
  --domain app.seudominio.com.br \\
  --email admin@seudominio.com.br \\
  --non-interactive`
  },
  httponly: {
    title: 'Modo Testes HTTP (Sem Domínio / Via IP)',
    desc: 'Ideal para validar e testar a aplicação na VPS antes de apontar o DNS final.',
    code: `# Execução apenas em HTTP pela porta 80
sudo ./install.sh --http-only --non-interactive`
  },
  dev: {
    title: 'Ambiente Local com Docker Compose',
    desc: 'Para desenvolvedores testando localmente na máquina com portas mapeadas.',
    code: `# Copie o arquivo de variáveis de ambiente
cp .env.example .env

# Inicie os serviços locais (PostgreSQL, Redis, Backend, Frontend e WUZAPI)
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build

# Frontend: http://localhost:5173
# API Backend: http://localhost:8080/api/v1/health`
  }
}
</script>

<template>
  <section id="instalacao" class="py-20 lg:py-28 bg-[#043873] text-white relative overflow-hidden">
    <!-- Background subtle glows -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4F9CF9]/15 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFE492]/10 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#FFE492] border border-[#FFE492]/30 mb-3">
          Self-Hosted & Independente
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
          Instale em sua própria VPS Linux
        </h2>
        <p class="text-base sm:text-lg text-blue-100/90 leading-relaxed">
          Tenha soberania sobre sua aplicação. Hospede o AgendeFácil no provedor de nuvem de sua preferência (DigitalOcean, Hetzner, AWS, Linode, Contabo ou Oracle Cloud) sem mensalidades ou taxas de intermediação.
        </p>
      </div>

      <!-- Specs & Requirements Overview (from INSTALL.md) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <!-- Hardware Requirements -->
        <div class="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-[#4F9CF9]/20 flex items-center justify-center text-[#4F9CF9]">
              <Cpu class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-base font-bold text-white">Requisitos de Hardware</h3>
              <span class="text-xs text-blue-200">Conforme docs/INSTALL.md</span>
            </div>
          </div>
          <div class="space-y-2.5 text-xs text-blue-100/80">
            <div class="flex items-center justify-between py-1 border-b border-white/10">
              <span class="text-blue-200">Processador (vCPU):</span>
              <span class="font-semibold text-white">2 vCPU (Recomendado 2–4)</span>
            </div>
            <div class="flex items-center justify-between py-1 border-b border-white/10">
              <span class="text-blue-200">Memória RAM:</span>
              <span class="font-semibold text-white">2 GB (Recomendado 4 GB)</span>
            </div>
            <div class="flex items-center justify-between py-1 border-b border-white/10">
              <span class="text-blue-200">Armazenamento:</span>
              <span class="font-semibold text-white">20 GB SSD (Recomendado 40 GB)</span>
            </div>
            <div class="flex items-center justify-between py-1">
              <span class="text-blue-200">Rede:</span>
              <span class="font-semibold text-white">IPv4 público com DNS</span>
            </div>
          </div>
        </div>

        <!-- Operating Systems -->
        <div class="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Server class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-base font-bold text-white">Sistemas Homologados</h3>
              <span class="text-xs text-blue-200">Instalação com Docker Automático</span>
            </div>
          </div>
          <ul class="space-y-2.5 text-xs text-blue-100/90">
            <li class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Ubuntu 22.04 LTS</strong> e <strong>Ubuntu 24.04 LTS</strong></span>
            </li>
            <li class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Debian 12</strong> (Bookworm)</span>
            </li>
            <li class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Outras distros Linux (com Docker já instalado)</span>
            </li>
            <li class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Arquiteturas: <strong>amd64</strong> (x86_64) e <strong>arm64</strong></span>
            </li>
          </ul>
        </div>

        <!-- Caddy & Firewall -->
        <div class="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-[#FFE492]/20 flex items-center justify-center text-[#FFE492]">
              <Lock class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-base font-bold text-white">Caddy & HTTPS Automático</h3>
              <span class="text-xs text-blue-200">Zero dor de cabeça com SSL</span>
            </div>
          </div>
          <p class="text-xs text-blue-100/80 leading-relaxed mb-3">
            O proxy reverso <strong>Caddy</strong> emite e renova automaticamente os certificados TLS via Let's Encrypt nas portas <strong>80</strong> e <strong>443</strong>.
          </p>
          <div class="p-2.5 rounded-lg bg-black/20 border border-white/10 text-[11px] font-mono text-blue-200 space-y-1">
            <div>• Portas necessárias: <strong>22 (SSH), 80, 443</strong></div>
            <div>• Roteamento seguro: /api/* e SPA Vue</div>
            <div>• Bancos de dados isolados internamente</div>
          </div>
        </div>
      </div>

      <!-- Interactive Terminal Box -->
      <div class="bg-[#0B1528] border border-blue-400/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden mb-12">
        <!-- Terminal Header with Tabs -->
        <div class="bg-[#07101E] px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <!-- Window Dots -->
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose-500"></span>
            <span class="w-3 h-3 rounded-full bg-amber-500"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span class="ml-2 font-mono text-xs text-slate-400 hidden sm:inline">bash — install.sh</span>
          </div>

          <!-- Tabs Selection -->
          <div class="flex items-center gap-1.5 bg-black/30 p-1 rounded-xl text-xs">
            <button
              @click="activeInstallTab = 'quick'"
              :class="[
                'px-3 py-1.5 rounded-lg font-medium transition-colors',
                activeInstallTab === 'quick' ? 'bg-[#4F9CF9] text-white' : 'text-slate-400 hover:text-white'
              ]"
            >
              Interativo
            </button>
            <button
              @click="activeInstallTab = 'noninteractive'"
              :class="[
                'px-3 py-1.5 rounded-lg font-medium transition-colors',
                activeInstallTab === 'noninteractive' ? 'bg-[#4F9CF9] text-white' : 'text-slate-400 hover:text-white'
              ]"
            >
              Não-Interativo
            </button>
            <button
              @click="activeInstallTab = 'httponly'"
              :class="[
                'px-3 py-1.5 rounded-lg font-medium transition-colors',
                activeInstallTab === 'httponly' ? 'bg-[#4F9CF9] text-white' : 'text-slate-400 hover:text-white'
              ]"
            >
              HTTP-Only
            </button>
            <button
              @click="activeInstallTab = 'dev'"
              :class="[
                'px-3 py-1.5 rounded-lg font-medium transition-colors',
                activeInstallTab === 'dev' ? 'bg-[#4F9CF9] text-white' : 'text-slate-400 hover:text-white'
              ]"
            >
              Dev Local
            </button>
          </div>
        </div>

        <!-- Terminal Body -->
        <div class="p-6">
          <div class="flex items-start justify-between gap-4 mb-4">
            <div>
              <h4 class="text-sm sm:text-base font-bold text-white mb-1">
                {{ installTabs[activeInstallTab].title }}
              </h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                {{ installTabs[activeInstallTab].desc }}
              </p>
            </div>
            <button
              @click="copyToClipboard(installTabs[activeInstallTab].code, 1)"
              class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-150 shrink-0"
              aria-label="Copiar comandos do terminal"
            >
              <Check v-if="copiedIndex === 1" class="w-4 h-4 text-emerald-400" />
              <Copy v-else class="w-4 h-4" />
              <span>{{ copiedIndex === 1 ? 'Copiado!' : 'Copiar' }}</span>
            </button>
          </div>

          <!-- Code Snippet Area -->
          <div class="bg-black/50 p-4 sm:p-5 rounded-xl border border-white/5 font-mono text-xs sm:text-sm text-emerald-300 overflow-x-auto leading-relaxed">
            <pre>{{ installTabs[activeInstallTab].code }}</pre>
          </div>

          <!-- Idempotency & Secrets Highlight -->
          <div class="mt-4 flex items-center gap-2 text-xs text-blue-200/80">
            <ShieldCheck class="w-4 h-4 text-[#FFE492] shrink-0" />
            <span>O script é <strong>idempotente</strong>: executá-lo novamente preserva volumes e segredos já gerados no <code>.env</code>.</span>
          </div>
        </div>
      </div>

      <!-- Action Button to Official INSTALL.md -->
      <div class="text-center">
        <a
          href="https://github.com/chgyn/sistema-agendamento/blob/main/docs/INSTALL.md"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#043873] bg-[#FFE492] hover:bg-[#FFDE73] shadow-lg hover:shadow-glow-gold transition-all duration-200 group"
        >
          <ExternalLink class="w-5 h-5" />
          <span>Ver documentação completa de instalação (INSTALL.md)</span>
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <p class="text-xs text-blue-200 mt-2">
          Inclui instruções detalhadas de DNS, variáveis de ambiente, backup e troubleshooting.
        </p>
      </div>
    </div>
  </section>
</template>
