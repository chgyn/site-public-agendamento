<script setup lang="ts">
import {
  Scissors,
  Sparkles,
  Building2,
  Code2,
  CheckCircle2,
  ArrowRight
} from 'lucide-vue-next'

const audiences = [
  {
    id: 'barbearias',
    title: 'Barbearias',
    badge: 'Cortes & Barbas',
    icon: Scissors,
    color: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/10 text-amber-600 border-amber-200',
    description: 'Projetado para barbearias tradicionais e modernas que precisam eliminar mensagens perdidas e filas de espera na recepção.',
    benefits: [
      'Organização impecável dos horários de atendimento por barbeiro.',
      'Gestão autônoma dos agendamentos diretamente pelos clientes.',
      'Facilidade total para sincronizar a rotina do estabelecimento.',
      'Atendimento automático via WhatsApp para tirar dúvidas e agendar.'
    ]
  },
  {
    id: 'saloes',
    title: 'Salões de Beleza',
    badge: 'Cabelo, Estética & Unhas',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-600',
    iconBg: 'bg-rose-500/10 text-rose-600 border-rose-200',
    description: 'Ideal para salões e centros estéticos com múltiplos profissionais, tempos de procedimento variados e catálogo visual de serviços.',
    benefits: [
      'Organização detalhada dos atendimentos e especialidades.',
      'Gestão transparente dos horários disponíveis de cada profissional.',
      'Melhor organização da agenda, reduzindo atrasos e conflitos.',
      'Experiência premium de agendamento online com design limpo.'
    ]
  },
  {
    id: 'pequenas-empresas',
    title: 'Micro e Pequenas Empresas',
    badge: 'Serviços com Hora Marcada',
    icon: Building2,
    color: 'from-blue-600 to-indigo-700',
    iconBg: 'bg-blue-500/10 text-blue-600 border-blue-200',
    description: 'Solução robusta para qualquer negócio baseado em agendamento (clínicas, estúdios de tatuagem, massoterapia, pet shops e consultorias).',
    benefits: [
      'Independência total de plataformas SaaS de terceiros e comissões.',
      'Hospedagem em infraestrutura própria com controle total dos dados.',
      'Liberdade para adaptar a ferramenta às necessidades da sua operação.',
      'Suporte a múltiplos estabelecimentos na mesma plataforma (Multi-tenant).'
    ]
  },
  {
    id: 'desenvolvedores',
    title: 'Desenvolvedores e Profissionais de TI',
    badge: 'Comunidade & Open Source',
    icon: Code2,
    color: 'from-emerald-600 to-teal-700',
    iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
    description: 'Para programadores e consultores de tecnologia que desejam um projeto real em Golang e Vue.js para estudar, monetizar ou colaborar.',
    benefits: [
      'Acesso 100% irrestrito ao código-fonte sob a Licença MIT.',
      'Estudo prático de arquitetura moderna (Go, Gin, GORM, Postgres, Redis, Asynq).',
      'Liberdade para estender, criar integrações e empacotar para clientes.',
      'Oportunidade real de colaborar com a evolução do ecossistema open-source.'
    ]
  }
]
</script>

<template>
  <section id="publico" class="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title & Subheading -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E9F2FE] text-[#043873] border border-[#4F9CF9]/30 mb-3">
          Segmentos Atendidos
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043873] tracking-tight font-display mb-4">
          Para quem é o AgendeFácil?
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
          Desenvolvido com foco nas necessidades reais de quem trabalha com serviços agendados, proporcionando autonomia para o empreendedor e liberdade para o desenvolvedor.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
        <div
          v-for="item in audiences"
          :key="item.id"
          class="relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 lg:p-8 hover:shadow-saas-hover hover:border-[#4F9CF9]/40 hover:bg-white transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <!-- Header of card -->
            <div class="flex items-center justify-between gap-4 mb-5">
              <div class="flex items-center gap-3.5">
                <div :class="['w-12 h-12 rounded-xl border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200', item.iconBg]">
                  <component :is="item.icon" class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-[#043873]">{{ item.title }}</h3>
                  <span class="text-xs font-medium text-slate-500">{{ item.badge }}</span>
                </div>
              </div>
            </div>

            <!-- Description -->
            <p class="text-sm text-slate-600 leading-relaxed mb-6">
              {{ item.description }}
            </p>

            <!-- Benefit List -->
            <ul class="space-y-3 pt-2 border-t border-slate-200/70 mb-6">
              <li
                v-for="(benefit, bIdx) in item.benefits"
                :key="bIdx"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug"
              >
                <CheckCircle2 class="w-4 h-4 text-[#4F9CF9] shrink-0 mt-0.5" />
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>

          <!-- Bottom subtle tag -->
          <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Open-source & Self-hosted</span>
            <span class="text-[#043873] font-semibold group-hover:text-[#4F9CF9] flex items-center gap-1">
              Ver solução
              <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>

      <!-- Non-limiting Disclaimer Note -->
      <div class="mt-12 p-4 sm:p-5 rounded-2xl bg-[#F4F8FD] border border-[#4F9CF9]/20 text-center max-w-3xl mx-auto">
        <p class="text-xs sm:text-sm text-[#043873]/80 leading-relaxed">
          <strong class="text-[#043873] font-semibold">Nota de versatilidade:</strong> Embora barbearias e salões sejam o modelo natural, o AgendeFácil possui arquitetura genérica para qualquer negócio baseado em agendamento com profissionais, horários e catálogo de serviços.
        </p>
      </div>
    </div>
  </section>
</template>
