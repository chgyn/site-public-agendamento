<script setup lang="ts">
import { ref } from 'vue'
import {
  Github,
  ArrowRight,
  Terminal,
  Sparkles,
  Server,
  Code2,
  Layers,
  Shield,
  ExternalLink,
  ChevronRight
} from 'lucide-vue-next'

const activeTab = ref(0)
const baseUrl = import.meta.env.BASE_URL

const tabs = [
  {
    id: 'dashboard',
    label: 'Dashboard Admin',
    desc: 'Visão executiva com métricas de faturamento, ocupação da agenda e gráficos.',
    image: `${baseUrl}images/dashboard-dark.png`,
    badge: 'Painel do Gestor'
  },
  {
    id: 'booking-flow',
    label: 'Agendamento Público',
    desc: 'Página pública moderna por slug para os clientes agendarem serviços 24/7.',
    image: `${baseUrl}images/booking-dom-navalha.png`,
    badge: 'Experiência do Cliente'
  },
  {
    id: 'booking-slots',
    label: 'Seleção de Horários',
    desc: 'Cálculo dinâmico de disponibilidade e bloqueio contra dupla reserva.',
    image: `${baseUrl}images/booking-horarios.png`,
    badge: 'Horários em Tempo Real'
  },
  {
    id: 'planos',
    label: 'Planos & Monetização',
    desc: 'Gestão completa de planos comerciais com recorrência Asaas e Gatekeeper.',
    image: `${baseUrl}images/planos-gestao.png`,
    badge: 'Monetização SaaS'
  },
  {
    id: 'tenants',
    label: 'Gestão Multi-Tenant',
    desc: 'Administração centralizada de múltiplos estabelecimentos na mesma instância.',
    image: `${baseUrl}images/estabelecimentos-tenants.png`,
    badge: 'Arquitetura Multi-Tenant'
  }
]
</script>

<template>
  <section id="inicio" class="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#043873] overflow-hidden">
    <!-- Decorative Ambient Lights / Mesh Glows (Whitepace Style) -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40">
      <div class="absolute -top-32 left-1/4 w-96 h-96 bg-[#4F9CF9] rounded-full blur-[128px]"></div>
      <div class="absolute top-20 right-1/4 w-80 h-80 bg-[#FFE492] rounded-full blur-[140px] opacity-25"></div>
    </div>

    <!-- Background Grid Lines subtle -->
    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="background-image: radial-gradient(#FFFFFF 1px, transparent 1px); background-size: 32px 32px;"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Badge Pill -->
      <div class="flex justify-center mb-6">
        <a
          href="https://github.com/chgyn/sistema-agendamento"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-blue-100 text-xs sm:text-sm font-medium backdrop-blur-md transition-all duration-200 group"
        >
          <span class="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="font-semibold text-white">Versão 1.0 Aberta</span>
          <span class="text-blue-300">•</span>
          <span class="text-[#FFE492] font-semibold">Licença MIT Gratuita</span>
          <ChevronRight class="w-4 h-4 text-blue-200 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      <!-- Main Heading & Subtitle -->
      <div class="text-center max-w-4xl mx-auto mb-10">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-display">
          AgendeFácil <span class="text-blue-300">—</span> Agendamento simples,
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE492] via-[#FFF2B2] to-[#4F9CF9]">
            liberdade para personalizar.
          </span>
        </h1>
        <p class="text-base sm:text-lg lg:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">
          Um sistema de agendamento open-source para barbearias, salões de beleza e pequenos negócios. Hospede sua própria solução, tenha liberdade para personalizar e organize seus atendimentos com uma ferramenta desenvolvida para quem precisa de praticidade.
        </p>
      </div>

      <!-- Key Differentiator Badges -->
      <div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-10">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-medium backdrop-blur-sm">
          <Shield class="w-4 h-4 text-[#FFE492]" />
          <span>Licença MIT 100% Livre</span>
        </div>
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-medium backdrop-blur-sm">
          <Code2 class="w-4 h-4 text-cyan-300" />
          <span>Backend em Golang</span>
        </div>
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-medium backdrop-blur-sm">
          <Layers class="w-4 h-4 text-emerald-300" />
          <span>Frontend em Vue.js 3</span>
        </div>
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-medium backdrop-blur-sm">
          <Server class="w-4 h-4 text-[#4F9CF9]" />
          <span>Instalação em VPS Própria</span>
        </div>
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-medium backdrop-blur-sm">
          <Sparkles class="w-4 h-4 text-yellow-300" />
          <span>WhatsApp + IA Autônoma</span>
        </div>
      </div>

      <!-- Call to Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-16">
        <a
          href="https://github.com/chgyn/sistema-agendamento"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-[#043873] bg-[#FFE492] hover:bg-[#FFDE73] shadow-lg hover:shadow-glow-gold transition-all duration-200 active:scale-95 group"
        >
          <Github class="w-5 h-5 text-[#043873]" />
          <span>Acessar o GitHub</span>
          <ExternalLink class="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <a
          href="#instalacao"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white bg-[#4F9CF9] hover:bg-[#3584E4] shadow-lg hover:shadow-glow-blue transition-all duration-200 active:scale-95 group"
        >
          <Terminal class="w-5 h-5" />
          <span>Ver como instalar</span>
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="#funcionalidades"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-blue-100 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200"
        >
          <span>Conhecer as funcionalidades</span>
        </a>
      </div>

      <!-- Interactive Real Screenshots Showcase (Whitepace SaaS Window) -->
      <div class="max-w-6xl mx-auto">
        <!-- Tabs Header -->
        <div class="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
          <button
            v-for="(tab, index) in tabs"
            :key="tab.id"
            @click="activeTab = index"
            :class="[
              'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2',
              activeTab === index
                ? 'bg-white text-[#043873] shadow-md shadow-black/20 scale-[1.02]'
                : 'bg-white/10 text-blue-200 hover:bg-white/20 hover:text-white'
            ]"
          >
            <span>{{ tab.label }}</span>
            <span
              :class="[
                'text-[10px] px-1.5 py-0.5 rounded-full font-medium',
                activeTab === index ? 'bg-[#043873]/10 text-[#043873]' : 'bg-white/10 text-blue-200'
              ]"
            >
              {{ tab.badge }}
            </span>
          </button>
        </div>

        <!-- Window Mockup Frame with Real Screenshot -->
        <div class="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/20 to-white/5 border border-white/20 shadow-2xl backdrop-blur-xl">
          <!-- Window Header Bar (Browser-like) -->
          <div class="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#032B59]/90 rounded-t-xl sm:rounded-t-2xl border-b border-white/10 text-xs text-blue-200">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span class="hidden md:inline-block ml-3 font-mono text-[11px] text-blue-300/80">
                app.seudominio.com.br — {{ tabs[activeTab].label }}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-medium border border-emerald-500/30">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                HTTPS Ativo
              </span>
            </div>
          </div>

          <!-- Image Container with Transition -->
          <div class="relative overflow-hidden rounded-b-xl sm:rounded-b-2xl bg-[#0F172A] aspect-[16/10] sm:aspect-[16/9] shadow-inner">
            <img
              :src="tabs[activeTab].image"
              :alt="tabs[activeTab].label + ' — Interface real do AgendeFácil'"
              class="w-full h-full object-cover object-top transition-opacity duration-300"
              loading="eager"
            />

            <!-- Subtle caption badge at the bottom -->
            <div class="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto max-w-xl p-3 sm:p-4 rounded-xl bg-[#043873]/90 backdrop-blur-md border border-white/20 text-white shadow-xl">
              <div class="flex items-start gap-2.5">
                <div class="p-1.5 rounded-lg bg-[#4F9CF9]/20 text-[#4F9CF9] mt-0.5">
                  <Sparkles class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="text-xs sm:text-sm font-bold text-white">{{ tabs[activeTab].label }}</h4>
                  <p class="text-[11px] sm:text-xs text-blue-100/80 leading-snug mt-0.5">
                    {{ tabs[activeTab].desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
