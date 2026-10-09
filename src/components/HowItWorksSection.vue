<script setup lang="ts">
import {
  Github,
  Server,
  Terminal,
  Sliders,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-vue-next'

const steps = [
  {
    step: '01',
    title: 'Conheça o Projeto',
    subtitle: 'Código aberto e transparente',
    icon: Github,
    description: 'Acesse o repositório público no GitHub, explore o código-fonte em Golang e Vue.js, leia a documentação técnica e confira a licença MIT.',
    actionLabel: 'Ver no GitHub',
    actionHref: 'https://github.com/chgyn/sistema-agendamento',
    isExternal: true
  },
  {
    step: '02',
    title: 'Prepare o Ambiente',
    subtitle: 'VPS Linux acessível',
    icon: Server,
    description: 'Escolha uma VPS Linux (Ubuntu 22.04/24.04 ou Debian 12 com 2–4 GB de RAM), aponte seu domínio (registro A) para o IP do servidor e libere as portas 80/443.',
    actionLabel: 'Ver requisitos de VPS',
    actionHref: '#instalacao',
    isExternal: false
  },
  {
    step: '03',
    title: 'Instale o Sistema',
    subtitle: 'Script automatizado ou Compose',
    icon: Terminal,
    description: 'Clone o repositório na VPS e execute o script `./install.sh`. O instalador prepara o Docker, sobe os contêineres e configura o Caddy com HTTPS automático.',
    actionLabel: 'Ver comando de instalação',
    actionHref: '#instalacao',
    isExternal: false
  },
  {
    step: '04',
    title: 'Configure a Aplicação',
    subtitle: 'Variáveis e integrações',
    icon: Sliders,
    description: 'Personalize o arquivo `.env` com seu domínio, credenciais do Asaas (se utilizar cobrança) e conecte o WhatsApp escaneando o QR Code pelo painel.',
    actionLabel: 'Ver guia de configuração',
    actionHref: '#instalacao',
    isExternal: false
  },
  {
    step: '05',
    title: 'Comece a Utilizar',
    subtitle: 'Atendimento e agendamentos',
    icon: CheckCircle,
    description: 'Acesse o sistema pelo seu domínio com certificado SSL emitido, cadastre profissionais e serviços, e compartilhe o link de agendamento com seus clientes.',
    actionLabel: 'Conhecer os módulos',
    actionHref: '#funcionalidades',
    isExternal: false
  }
]
</script>

<template>
  <section id="como-funciona" class="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E9F2FE] text-[#043873] border border-[#4F9CF9]/30 mb-3">
          Passo a Passo
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043873] tracking-tight font-display mb-4">
          Como funciona o AgendeFácil?
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
          Um fluxo simples e direto para colocar uma plataforma de agendamento profissional e independente no ar em poucos minutos.
        </p>
      </div>

      <!-- Steps Timeline Grid -->
      <div class="relative">
        <!-- Connecting Line for desktop -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F9CF9]/20 via-[#4F9CF9] to-[#FFE492] -translate-y-12 z-0"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          <div
            v-for="item in steps"
            :key="item.step"
            class="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-saas-hover hover:border-[#4F9CF9]/50 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <!-- Step Number & Icon -->
              <div class="flex items-center justify-between mb-4">
                <span class="text-2xl font-black text-[#043873]/30 font-display group-hover:text-[#4F9CF9] transition-colors">
                  {{ item.step }}
                </span>
                <div class="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#043873] group-hover:bg-[#4F9CF9] group-hover:text-white group-hover:border-[#4F9CF9] shadow-sm transition-all duration-200">
                  <component :is="item.icon" class="w-5 h-5" />
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-base font-bold text-[#043873] mb-1 group-hover:text-[#4F9CF9] transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
                {{ item.subtitle }}
              </p>

              <!-- Description -->
              <p class="text-xs text-slate-600 leading-relaxed mb-5">
                {{ item.description }}
              </p>
            </div>

            <!-- Action Link -->
            <div class="pt-3 border-t border-slate-200/60">
              <a
                :href="item.actionHref"
                :target="item.isExternal ? '_blank' : undefined"
                :rel="item.isExternal ? 'noopener noreferrer' : undefined"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#043873] hover:text-[#4F9CF9] transition-colors"
              >
                <span>{{ item.actionLabel }}</span>
                <ExternalLink v-if="item.isExternal" class="w-3 h-3 opacity-70" />
                <ArrowRight v-else class="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
