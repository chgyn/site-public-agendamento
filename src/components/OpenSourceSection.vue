<script setup lang="ts">
import {
  Github,
  FileText,
  Terminal,
  CheckCircle2,
  ExternalLink,
  LockOpen
} from 'lucide-vue-next'

const openSourceBenefits = [
  {
    title: 'Liberdade para Estudar e Auditar',
    desc: 'Código limpo e documentado. Veja exatamente como cada dado é processado, sem códigos ofuscados ou surpresas.'
  },
  {
    title: 'Adaptação Total às Suas Necessidades',
    desc: 'Altere as telas, adicione novos campos, modifique regras de negócio ou integre novos gateways de pagamento com autonomia.'
  },
  {
    title: 'Colabore com a Comunidade',
    desc: 'Abra issues para relatar melhorias, envie pull requests e ajude outros profissionais a terem um sistema livre e acessível.'
  },
  {
    title: 'Independência e Soberania Digital',
    desc: 'Seu banco de dados e as informações dos seus clientes são 100% seus, sem risco de bloqueio arbitrário de conta em plataformas de terceiros.'
  }
]
</script>

<template>
  <section id="open-source" class="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-br from-[#043873] via-[#032B59] to-[#021B35] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
        <!-- Background light meshes -->
        <div class="absolute -right-20 -top-20 w-80 h-80 bg-[#4F9CF9]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-20 -bottom-20 w-80 h-80 bg-[#FFE492]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-4xl mx-auto text-center mb-12">
          <!-- Top badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#FFE492] text-xs font-bold uppercase tracking-wider mb-4">
            <LockOpen class="w-4 h-4" />
            <span>Licença MIT • 100% Livre</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-6">
            Projeto Open-Source feito para durar
          </h2>
          <p class="text-base sm:text-lg text-blue-100/90 leading-relaxed">
            O AgendeFácil nasceu da convicção de que pequenas empresas e profissionais autônomos não devem ser reféns de mensalidades crescentes por cada agendamento feito. Nosso código está publicado sob a Licença MIT, a mais permissiva e amplamente adotada do mundo.
          </p>
        </div>

        <!-- Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <div
            v-for="(b, idx) in openSourceBenefits"
            :key="idx"
            class="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
          >
            <div class="flex items-center gap-2.5 mb-2.5">
              <CheckCircle2 class="w-5 h-5 text-[#FFE492] shrink-0" />
              <h3 class="text-base font-bold text-white">{{ b.title }}</h3>
            </div>
            <p class="text-xs sm:text-sm text-blue-100/80 leading-relaxed pl-7">
              {{ b.desc }}
            </p>
          </div>
        </div>

        <!-- Buttons Row -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <a
            href="https://github.com/chgyn/sistema-agendamento"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-[#043873] bg-[#FFE492] hover:bg-[#FFDE73] shadow-lg hover:shadow-glow-gold transition-all duration-200"
          >
            <Github class="w-5 h-5" />
            <span>Acessar o Repositório no GitHub</span>
            <ExternalLink class="w-4 h-4 opacity-75" />
          </a>

          <a
            href="https://github.com/chgyn/sistema-agendamento/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200"
          >
            <FileText class="w-4 h-4" />
            <span>Consultar Licença MIT</span>
          </a>

          <a
            href="#instalacao"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-[#4F9CF9] hover:bg-[#3584E4] shadow-md transition-all duration-200"
          >
            <Terminal class="w-4 h-4" />
            <span>Instruções de Instalação</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
