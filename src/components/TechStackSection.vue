<script setup lang="ts">
import {
  Code2,
  Layers,
  Database,
  Radio,
  Bot,
  ShieldCheck,
  Server,
  Box
} from 'lucide-vue-next'

const technologies = [
  {
    name: 'Golang',
    category: 'Backend & APIs',
    desc: 'Linguagem compilada de alta performance, concorrente por natureza e baixo consumo de memória RAM. Framework Gin e ORM GORM.',
    badge: 'Go 1.22+',
    icon: Code2,
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
  },
  {
    name: 'Vue.js 3 & TypeScript',
    category: 'Frontend SPA',
    desc: 'Frontend moderno e reativo com Composition API, Vite para compilação instantânea, Pinia para gerenciamento de estado e Tailwind CSS.',
    badge: 'Vue 3 + Vite',
    icon: Layers,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
  },
  {
    name: 'PostgreSQL',
    category: 'Banco de Dados',
    desc: 'Banco relacional robusto com transações ACID, locks concorrentes (SELECT ... FOR UPDATE) para garantir integridade e isolamento multi-tenant.',
    badge: 'Postgres 16',
    icon: Database,
    color: 'text-blue-600 bg-blue-50 border-blue-200'
  },
  {
    name: 'Redis & Asynq',
    category: 'Fila & Mensageria',
    desc: 'Fila assíncrona de processamento desacoplado para webhooks financeiros do Asaas e despacho humanizado de mensagens no WhatsApp sem travar a API.',
    badge: 'Asynq Worker',
    icon: Radio,
    color: 'text-rose-600 bg-rose-50 border-rose-200'
  },
  {
    name: 'WUZAPI WhatsApp',
    category: 'Comunicação Autônoma',
    desc: 'Microserviço Go nativo no Docker Compose para conexão direta via QR Code sem dependência de serviços externos pagos de WhatsApp.',
    badge: 'Instância Privada',
    icon: Bot,
    color: 'text-green-600 bg-green-50 border-green-200'
  },
  {
    name: 'Caddy Server',
    category: 'Proxy & HTTPS Automático',
    desc: 'Servidor web e proxy reverso de última geração com HTTPS automático nativo (Let’s Encrypt), suporte a HTTP/3 e cabeçalhos de segurança.',
    badge: 'TLS Automático',
    icon: Server,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
  },
  {
    name: 'Docker & Compose',
    category: 'Infraestrutura',
    desc: 'Orquestração conteinerizada de todos os serviços (API, Worker, Frontend, Postgres, Redis, WUZAPI e Caddy) com isolamento de rede.',
    badge: 'Docker Compose',
    icon: Box,
    color: 'text-sky-600 bg-sky-50 border-sky-200'
  },
  {
    name: 'Licença MIT',
    category: 'Licenciamento Aberto',
    desc: '100% livre para estudar, modificar, hospedar, comercializar e criar soluções derivadas sem pagamento de royalties ou licenças restritivas.',
    badge: 'MIT Open-Source',
    icon: ShieldCheck,
    color: 'text-amber-600 bg-amber-50 border-amber-200'
  }
]
</script>

<template>
  <section id="tecnologias" class="py-20 lg:py-28 bg-[#F5F7FA] border-b border-[#E2E8F0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E9F2FE] text-[#043873] border border-[#4F9CF9]/30 mb-3">
          Stack Moderna & Eficiente
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043873] tracking-tight font-display mb-4">
          Tecnologias Utilizadas
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
          Uma arquitetura leve, moderna e escalável concebida para rodar perfeitamente em servidores acessíveis, com o máximo de rendimento e confiabilidade.
        </p>
      </div>

      <!-- Grid of Technologies -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(tech, idx) in technologies"
          :key="idx"
          class="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-saas-card hover:shadow-saas-hover hover:border-[#4F9CF9]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div class="flex items-center justify-between gap-3 mb-4">
              <div :class="['w-11 h-11 rounded-xl border flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200', tech.color]">
                <component :is="tech.icon" class="w-5 h-5" />
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {{ tech.badge }}
              </span>
            </div>

            <h3 class="text-lg font-bold text-[#043873] mb-1 group-hover:text-[#4F9CF9] transition-colors">
              {{ tech.name }}
            </h3>
            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
              {{ tech.category }}
            </span>
            <p class="text-xs text-slate-600 leading-relaxed">
              {{ tech.desc }}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-400">
            Efetivamente implementado no repositório
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
