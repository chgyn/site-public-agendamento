<script setup lang="ts">
import {
  CalendarCheck,
  ShieldCheck,
  Bot,
  CreditCard,
  LayoutDashboard,
  Lock,
  CheckCircle2,
  Sparkles
} from 'lucide-vue-next'

const features = [
  {
    icon: CalendarCheck,
    title: 'Wizard de Agendamento Público',
    subtitle: 'Experiência fluida para o cliente',
    tag: 'Multi-Tenant',
    color: 'text-blue-600 bg-blue-50 border-blue-200',
    description: 'Cada estabelecimento possui uma URL pública exclusiva (/agendamento/:slug) onde os clientes agendam serviços em menos de 1 minuto, sem necessidade de cadastro burocrático.',
    highlights: [
      'Seleção de serviços e profissionais disponíveis',
      'Cálculo dinâmico de horários livres em tempo real',
      'Compatível com smartphones, tablets e desktops',
      'Confirmação com resumo claro do agendamento'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Prevenção de Dupla Reserva',
    subtitle: 'Consistência transacional real',
    tag: 'Zero Double-Booking',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    description: 'Transações atômicas com travas no PostgreSQL (SELECT ... FOR UPDATE) e validação matemática de sobreposição de intervalos temporais.',
    highlights: [
      'Impossibilita dois clientes no mesmo horário',
      'Locks transacionais a nível de banco de dados',
      'Isolamento estrito entre profissionais e datas',
      'Testado contra alta concorrência de requisições'
    ]
  },
  {
    icon: Bot,
    title: 'WhatsApp com IA Autônoma (WUZAPI)',
    subtitle: 'Atendimento humanizado 24/7',
    tag: 'Zero Alucinação',
    color: 'text-purple-600 bg-purple-50 border-purple-200',
    description: 'Instância privada do WUZAPI via Docker com pareamento por QR Code. Agente inteligente (Google Gemini & OpenAI) com Function Calling para consultar e agendar direto no banco.',
    highlights: [
      'Pareamento do WhatsApp por QR Code no painel',
      'Function Calling nativo: consulta e reserva sem alucinar',
      'Despacho humanizado: simulação de "digitando..."',
      'Fila assíncrona Asynq + Redis para processar mensagens'
    ]
  },
  {
    icon: CreditCard,
    title: 'Planos de Assinatura & Asaas (v3)',
    subtitle: 'Monetização e cobrança recorrente',
    tag: 'Gateway Asaas v3',
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    description: 'Gestão completa de planos comerciais (mensal, trimestral, anual), faturas automáticas via Asaas e Gatekeeper de acesso para proteger rotas operacionais do tenant.',
    highlights: [
      'CRUD de planos exclusivo para Administrador Global',
      'Geração de assinaturas e clientes no Asaas',
      'Processamento resiliente de Webhooks via fila crítica',
      'Middleware Gatekeeper por status de pagamento'
    ]
  },
  {
    icon: LayoutDashboard,
    title: 'Painel Administrativo & Gestão',
    subtitle: 'Controle operacional completo',
    tag: 'Dashboard Intuitivo',
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    description: 'Dashboard analítico com métricas de agendamentos, clientes atendidos, equipe de colaboradores, serviços prestados e visão gerencial multi-tenant.',
    highlights: [
      'Visualização da agenda diária e semanal',
      'Cadastro de profissionais, serviços e horários',
      'Gestão de estabelecimentos e usuários',
      'Suporte a temas claro e escuro no painel'
    ]
  },
  {
    icon: Lock,
    title: 'Segurança & Criptografia Avançada',
    subtitle: 'Proteção de ponta a ponta',
    tag: 'AES-256-GCM',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    description: 'Armazenamento seguro com criptografia AES-256-GCM para chaves de API de IA em repouso, autenticação JWT com escopo de tenant, hash bcrypt e Caddy HTTPS automático.',
    highlights: [
      'Criptografia AES-256-GCM com nonce de 12 bytes',
      'Tokens JWT com isolamento estrito de tenant',
      'Certificados SSL/TLS automáticos via Let’s Encrypt',
      'Banco de dados e Redis isolados na rede Docker'
    ]
  }
]
</script>

<template>
  <section id="funcionalidades" class="py-20 lg:py-28 bg-[#F5F7FA]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E9F2FE] text-[#043873] border border-[#4F9CF9]/30 mb-3">
          Recursos Reais Implementados
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043873] tracking-tight font-display mb-4">
          Funcionalidades do Sistema
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
          Tudo o que sua barbearia, salão ou pequeno negócio precisa para operar com eficiência, segurança e atendimento automatizado — 100% verificado no código-fonte.
        </p>
      </div>

      <!-- Features 3-column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feat, idx) in features"
          :key="idx"
          class="bg-white border border-[#E2E8F0] rounded-2xl p-7 shadow-saas-card hover:shadow-saas-hover hover:border-[#4F9CF9]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Header badge & icon -->
            <div class="flex items-center justify-between gap-3 mb-5">
              <div :class="['w-12 h-12 rounded-xl border flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200', feat.color]">
                <component :is="feat.icon" class="w-6 h-6" />
              </div>
              <span class="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[#E9F2FE] text-[#043873] border border-[#4F9CF9]/20">
                {{ feat.tag }}
              </span>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="text-xl font-bold text-[#043873] mb-1 group-hover:text-[#4F9CF9] transition-colors">
              {{ feat.title }}
            </h3>
            <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3.5">
              {{ feat.subtitle }}
            </p>

            <!-- Description -->
            <p class="text-sm text-slate-600 leading-relaxed mb-6">
              {{ feat.description }}
            </p>

            <!-- Highlights Checklist -->
            <ul class="space-y-2.5 pt-4 border-t border-slate-100">
              <li
                v-for="(item, iIdx) in feat.highlights"
                :key="iIdx"
                class="flex items-start gap-2 text-xs text-slate-700 leading-snug"
              >
                <CheckCircle2 class="w-4 h-4 text-[#4F9CF9] shrink-0 mt-0.5" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Transparent Note Badge -->
      <div class="mt-14 max-w-2xl mx-auto flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 shadow-sm text-center">
        <Sparkles class="w-4 h-4 text-amber-500 shrink-0" />
        <span><strong>Transparência Open-Source:</strong> Todas as funcionalidades listadas acima já estão implementadas, testadas e disponíveis no repositório oficial do projeto.</span>
      </div>
    </div>
  </section>
</template>
