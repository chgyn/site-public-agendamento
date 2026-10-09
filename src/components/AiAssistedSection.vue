<script setup lang="ts">
import { ref } from 'vue'
import {
  Bot,
  Copy,
  Check,
  ShieldAlert,
  AlertTriangle,
  Github,
  ArrowRight
} from 'lucide-vue-next'

const copiedPrompt = ref(false)

const samplePrompt = `Analise o repositório público do AgendeFácil e leia a documentação disponível em docs/INSTALL.md. Explique os requisitos necessários para instalar o sistema em uma VPS, identifique as etapas de configuração e me oriente durante o processo. Antes de executar comandos que alterem o ambiente, solicite minha confirmação e explique os possíveis impactos.`

const copyPrompt = () => {
  navigator.clipboard.writeText(samplePrompt)
  copiedPrompt.value = true
  setTimeout(() => {
    copiedPrompt.value = false
  }, 2500)
}

const aiSteps = [
  {
    step: '1',
    title: 'Instale sua ferramenta de IA',
    desc: 'Configure um agente de código no seu terminal ou editor (ex: Claude Code, Antigravity, Cursor ou Copilot).'
  },
  {
    step: '2',
    title: 'Abra o repositório clonado',
    desc: 'Clone o AgendeFácil na sua máquina ou VPS e inicie a ferramenta na raiz do projeto.'
  },
  {
    step: '3',
    title: 'Solicite análise dos documentos',
    desc: 'Peça para a IA ler docs/INSTALL.md e entender a estrutura de contêineres e variáveis de ambiente.'
  },
  {
    step: '4',
    title: 'Oriente a configuração',
    desc: 'Peça auxílio para gerar os parâmetros do .env, verificar portas e rodar o script install.sh.'
  },
  {
    step: '5',
    title: 'Revise sempre antes de rodar',
    desc: 'Valide cada comando ou alteração proposta pelo agente para garantir a segurança do seu servidor.'
  }
]
</script>

<template>
  <section id="instalacao-ia" class="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E9F2FE] text-[#043873] border border-[#4F9CF9]/30 mb-3">
          Produtividade com IA
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043873] tracking-tight font-display mb-4">
          Utilize agentes de IA para auxiliar na instalação
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
          Ferramentas de programação com inteligência artificial — como Claude Code, Antigravity, Cursor e assistentes CLI — podem atuar como copilotos técnicos, orientando passo a passo na preparação da VPS e configuração do AgendeFácil.
        </p>
      </div>

      <!-- Flow Grid: 5 steps -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-14">
        <div
          v-for="s in aiSteps"
          :key="s.step"
          class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 hover:border-[#4F9CF9]/50 hover:bg-white transition-all duration-200"
        >
          <div class="w-8 h-8 rounded-lg bg-[#043873] text-white flex items-center justify-center font-bold text-xs mb-3 font-display">
            {{ s.step }}
          </div>
          <h3 class="text-sm font-bold text-[#043873] mb-1.5">{{ s.title }}</h3>
          <p class="text-xs text-slate-600 leading-relaxed">{{ s.desc }}</p>
        </div>
      </div>

      <!-- Prompt Box Container -->
      <div class="bg-[#0D1525] border border-slate-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl mb-12 text-white">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#4F9CF9]/20 flex items-center justify-center text-[#4F9CF9]">
              <Bot class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-base font-bold text-white">Exemplo de Instrução (Prompt) para o Agente</h3>
              <p class="text-xs text-slate-400">Copie e cole diretamente no seu agente de código (Claude Code, Cursor, etc.)</p>
            </div>
          </div>
          <button
            @click="copyPrompt"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#4F9CF9] hover:bg-[#3584E4] text-white transition-all duration-150 shadow-md shrink-0 active:scale-95"
            aria-label="Copiar instrução para o agente de IA"
          >
            <Check v-if="copiedPrompt" class="w-4 h-4 text-emerald-300" />
            <Copy v-else class="w-4 h-4" />
            <span>{{ copiedPrompt ? 'Prompt Copiado!' : 'Copiar Prompt' }}</span>
          </button>
        </div>

        <!-- Prompt Content -->
        <div class="bg-black/40 border border-slate-800/80 rounded-xl p-4 sm:p-5 font-mono text-xs sm:text-sm text-blue-100 leading-relaxed">
          <p class="select-all">"{{ samplePrompt }}"</p>
        </div>
      </div>

      <!-- Critical Warnings / Safety Guidelines -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <!-- Safety Alert -->
        <div class="p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-4">
          <div class="p-2 rounded-xl bg-amber-500/15 text-amber-700 shrink-0 mt-0.5">
            <ShieldAlert class="w-5 h-5" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-amber-900 mb-1">Proteja suas Credenciais e Segredos</h4>
            <p class="text-xs text-amber-800 leading-relaxed">
              Nunca compartilhe senhas de banco de dados, chaves privadas SSH, tokens de API ou segredos do arquivo <code>.env</code> com modelos de IA. Mantenha os arquivos de credenciais fora do escopo de prompts.
            </p>
          </div>
        </div>

        <!-- Responsibility Alert -->
        <div class="p-5 sm:p-6 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 flex items-start gap-4">
          <div class="p-2 rounded-xl bg-blue-500/15 text-blue-700 shrink-0 mt-0.5">
            <AlertTriangle class="w-5 h-5" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-[#043873] mb-1">Revisão Humana Obrigatória</h4>
            <p class="text-xs text-blue-800 leading-relaxed">
              Agentes de IA são assistentes e não garantem instalação infalível. Sempre revise comandos que alterem regras de firewall, formatem volumes ou modifiquem pacotes do sistema operacional antes da execução.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Button -->
      <div class="text-center">
        <a
          href="https://github.com/chgyn/sistema-agendamento"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#043873] hover:bg-[#032B59] shadow-md transition-all duration-200"
        >
          <Github class="w-4 h-4" />
          <span>Acessar o Repositório no GitHub</span>
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>
