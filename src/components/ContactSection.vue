<script setup lang="ts">
import { ref } from 'vue'
import {
  Briefcase,
  CheckCircle2,
  Github,
  Mail,
  Linkedin,
  Globe,
  ExternalLink,
  Copy,
  Check,
  Sparkles
} from 'lucide-vue-next'

const emailCopied = ref(false)

const copyEmail = async () => {
  const email = 'charlesegidio@gmail.com'
  let success = false

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(email)
      success = true
    } else {
      throw new Error('Clipboard API not available')
    }
  } catch {
    try {
      const textArea = document.createElement('textarea')
      textArea.value = email
      textArea.style.position = 'fixed'
      textArea.style.left = '-9999px'
      textArea.style.top = '-9999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      success = document.execCommand('copy')
      document.body.removeChild(textArea)
    } catch (err) {
      console.error('Falha ao copiar:', err)
    }
  }

  if (success) {
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2500)
  }
}
</script>

<template>
  <section id="contato" class="py-20 lg:py-28 bg-[#F5F7FA] scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E9F2FE] text-[#043873] border border-[#4F9CF9]/30 mb-3">
          Suporte & Parcerias
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043873] tracking-tight font-display mb-4">
          Precisa de ajuda com o AgendeFácil?
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
          Se você precisa de auxílio para instalar, configurar ou personalizar o sistema, ou deseja contratar consultoria especializada, entre em contato diretamente pelos canais abaixo.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <!-- Scope / Consulting Info (Left Column) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-saas-card">
            <h3 class="text-xl font-bold text-[#043873] mb-4 font-display flex items-center gap-2">
              <Briefcase class="w-5 h-5 text-[#4F9CF9]" />
              <span>Serviços de Consultoria Técnica</span>
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              O AgendeFácil é 100% open-source e gratuito para você mesmo instalar. Caso sua empresa prefira economizar tempo e delegar a infraestrutura para especialistas, oferecemos serviços profissionais independentes:
            </p>

            <ul class="space-y-3 text-xs sm:text-sm text-slate-700">
              <li class="flex items-start gap-2.5">
                <CheckCircle2 class="w-4 h-4 text-[#4F9CF9] shrink-0 mt-0.5" />
                <span>Implantação e configuração completa em VPS Linux (Ubuntu/Debian)</span>
              </li>
              <li class="flex items-start gap-2.5">
                <CheckCircle2 class="w-4 h-4 text-[#4F9CF9] shrink-0 mt-0.5" />
                <span>Configuração de domínio próprio, SSL Let's Encrypt e DNS</span>
              </li>
              <li class="flex items-start gap-2.5">
                <CheckCircle2 class="w-4 h-4 text-[#4F9CF9] shrink-0 mt-0.5" />
                <span>Personalização visual com a identidade e cores do seu negócio</span>
              </li>
              <li class="flex items-start gap-2.5">
                <CheckCircle2 class="w-4 h-4 text-[#4F9CF9] shrink-0 mt-0.5" />
                <span>Integração de WhatsApp com agentes inteligentes personalizados</span>
              </li>
              <li class="flex items-start gap-2.5">
                <CheckCircle2 class="w-4 h-4 text-[#4F9CF9] shrink-0 mt-0.5" />
                <span>Desenvolvimento de novos recursos sob medida</span>
              </li>
            </ul>
          </div>

          <!-- Community Channels -->
          <div class="bg-[#043873] text-white rounded-2xl p-6 sm:p-7 shadow-saas-card">
            <h4 class="text-base font-bold text-white mb-2 font-display flex items-center gap-2">
              <Github class="w-5 h-5 text-[#FFE492]" />
              <span>Canal da Comunidade no GitHub</span>
            </h4>
            <p class="text-xs text-blue-100/90 leading-relaxed mb-4">
              Para relatar bugs, propor melhorias ou tirar dúvidas técnicas diretamente com a comunidade de desenvolvedores, utilize as Issues e Discussions do repositório oficial.
            </p>
            <a
              href="https://github.com/chgyn/sistema-agendamento/issues"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
            >
              <span>Abrir uma Issue no GitHub</span>
              <ExternalLink class="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        <!-- Direct Contact Info (Right Column) -->
        <div class="lg:col-span-7">
          <div class="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-saas-card">
            <!-- Profile Header -->
            <div class="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 flex-wrap gap-4">
              <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#043873] to-[#4F9CF9] text-white font-extrabold text-xl flex items-center justify-center shadow-md font-display shrink-0">
                  CE
                </div>
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <h3 class="text-lg sm:text-xl font-bold text-[#043873] font-display">Charles Egidio</h3>
                    <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Disponível
                    </span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-500 mt-0.5">Criador & Desenvolvedor do AgendeFácil</p>
                </div>
              </div>

              <span class="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
                <Sparkles class="w-3.5 h-3.5 text-[#4F9CF9]" />
                <span>Contato Direto</span>
              </span>
            </div>

            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Fale diretamente comigo para consultoria personalizada, auxílio em implantação em servidores VPS, desenvolvimento de novos módulos ou suporte técnico:
            </p>

            <!-- Contact Cards List -->
            <div class="space-y-4">
              <!-- Email Card -->
              <div class="group relative bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-[#4F9CF9] rounded-2xl p-5 transition-all duration-200 hover:shadow-md">
                <div class="flex items-start gap-4">
                  <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#4F9CF9] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail class="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">E-mail Profissional</span>
                    <div class="text-base sm:text-lg font-bold text-[#043873] mt-0.5 select-all">
                      charlesegidio@gmail.com
                    </div>
                    <p class="text-xs text-slate-500 mt-1">Orçamentos, consultoria e projetos sob medida</p>

                    <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <a
                        href="mailto:charlesegidio@gmail.com?subject=Contato%20AgendeF%C3%A1cil"
                        class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#4F9CF9] hover:bg-[#3584E4] text-white shadow-sm transition-colors"
                      >
                        <Mail class="w-3.5 h-3.5" />
                        <span>Enviar E-mail</span>
                      </a>
                      <button
                        type="button"
                        @click="copyEmail"
                        class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors cursor-pointer"
                        :title="emailCopied ? 'E-mail copiado!' : 'Copiar e-mail'"
                      >
                        <component :is="emailCopied ? Check : Copy" class="w-3.5 h-3.5" :class="emailCopied ? 'text-emerald-600' : 'text-slate-500'" />
                        <span>{{ emailCopied ? 'E-mail Copiado!' : 'Copiar E-mail' }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- LinkedIn Card -->
              <div class="group relative bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-[#0A66C2] rounded-2xl p-5 transition-all duration-200 hover:shadow-md">
                <div class="flex items-start gap-4">
                  <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#0A66C2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin class="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Rede Profissional</span>
                    <div class="text-base sm:text-lg font-bold text-[#043873] mt-0.5">
                      linkedin.com/in/charlesegidio
                    </div>
                    <p class="text-xs text-slate-500 mt-1">Conecte-se para networking, dúvidas e mensagens diretas</p>

                    <div class="mt-4 pt-3 border-t border-slate-100 flex items-center">
                      <a
                        href="https://www.linkedin.com/in/charlesegidio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A66C2] hover:bg-[#004182] text-white shadow-sm transition-colors"
                      >
                        <span>Acessar Perfil no LinkedIn</span>
                        <ExternalLink class="w-3.5 h-3.5 opacity-80" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Personal Site Card -->
              <div class="group relative bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-[#043873] rounded-2xl p-5 transition-all duration-200 hover:shadow-md">
                <div class="flex items-start gap-4">
                  <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-purple-50 border border-purple-100 text-[#043873] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Globe class="w-5 h-5 sm:w-6 sm:h-6 text-[#4F9CF9]" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Site Pessoal & Portfólio</span>
                    <div class="text-base sm:text-lg font-bold text-[#043873] mt-0.5">
                      charlesegidio.online
                    </div>
                    <p class="text-xs text-slate-500 mt-1">Conheça mais sobre outros projetos, artigos e trajetória profissional</p>

                    <div class="mt-4 pt-3 border-t border-slate-100 flex items-center">
                      <a
                        href="https://charlesegidio.online/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#043873] hover:bg-[#032b57] text-white shadow-sm transition-colors"
                      >
                        <span>Visitar Site Pessoal</span>
                        <ExternalLink class="w-3.5 h-3.5 opacity-80" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Disclaimer / Fast response -->
            <div class="mt-6 pt-5 border-t border-slate-100 text-center sm:text-left">
              <p class="text-[11px] text-slate-500">
                💬 Atendimento direto com o desenvolvedor responsável pelo projeto. Resposta garantida com orientações técnicas claras e transparentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
