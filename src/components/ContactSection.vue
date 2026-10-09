<script setup lang="ts">
import { ref } from 'vue'
import {
  Send,
  CheckCircle2,
  Github,
  Briefcase,
  ExternalLink
} from 'lucide-vue-next'

const formSubmitted = ref(false)
const formData = ref({
  name: '',
  email: '',
  subject: 'instalacao',
  message: ''
})

const submitForm = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    return
  }
  formSubmitted.value = true
}

const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    subject: 'instalacao',
    message: ''
  }
  formSubmitted.value = false
}
</script>

<template>
  <section id="contato" class="py-20 lg:py-28 bg-[#F5F7FA]">
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
          Se você precisa de auxílio para instalar, configurar ou personalizar o sistema, ou deseja colaborar com o projeto, entre em contato. Vamos conversar sobre como colocar a ferramenta em funcionamento e adaptá-la às suas necessidades.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <!-- Contact Info / Scope Cards (Left Column) -->
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

        <!-- Interactive Form (Right Column) -->
        <div class="lg:col-span-7">
          <div class="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 shadow-saas-card">
            <!-- Success Message State -->
            <div v-if="formSubmitted" class="py-12 text-center">
              <div class="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 class="w-8 h-8" />
              </div>
              <h3 class="text-2xl font-bold text-[#043873] mb-2 font-display">Mensagem Enviada com Sucesso!</h3>
              <p class="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                Obrigado pelo contato! Retornaremos para o e-mail <strong>{{ formData.email }}</strong> com todas as orientações necessárias o mais breve possível.
              </p>
              <button
                type="button"
                @click="resetForm"
                class="px-6 py-2.5 rounded-xl text-xs font-semibold bg-[#4F9CF9] text-white hover:bg-[#3584E4] transition-colors"
              >
                Enviar Outra Mensagem
              </button>
            </div>

            <!-- Form State -->
            <form v-else @submit.prevent="submitForm" class="space-y-5">
              <div>
                <h3 class="text-xl font-bold text-[#043873] mb-1 font-display">Envie sua Mensagem</h3>
                <p class="text-xs text-slate-500 mb-6">Preencha o formulário abaixo e entraremos em contato.</p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="contact-name" class="block text-xs font-semibold text-slate-700 mb-1.5">Seu Nome *</label>
                  <input
                    id="contact-name"
                    v-model="formData.name"
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label for="contact-email" class="block text-xs font-semibold text-slate-700 mb-1.5">Seu E-mail *</label>
                  <input
                    id="contact-email"
                    v-model="formData.email"
                    type="email"
                    required
                    placeholder="carlos@exemplo.com.br"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label for="contact-subject" class="block text-xs font-semibold text-slate-700 mb-1.5">Assunto de Interesse *</label>
                <select
                  id="contact-subject"
                  v-model="formData.subject"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent transition-all bg-white"
                >
                  <option value="instalacao">Auxílio na Instalação e Configuração VPS</option>
                  <option value="personalizacao">Personalização do Sistema e Identidade</option>
                  <option value="funcionalidades">Desenvolvimento de Novas Funcionalidades</option>
                  <option value="otimizacao">Otimização de Desempenho e Infraestrutura</option>
                  <option value="colaboracao">Colaboração com o Projeto Open-Source</option>
                  <option value="outro">Outro Assunto</option>
                </select>
              </div>

              <div>
                <label for="contact-message" class="block text-xs font-semibold text-slate-700 mb-1.5">Mensagem ou Detalhes do Projeto *</label>
                <textarea
                  id="contact-message"
                  v-model="formData.message"
                  required
                  rows="4"
                  placeholder="Conte-nos brevemente sobre o seu negócio, sua VPS ou como podemos ajudar..."
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] focus:border-transparent transition-all placeholder:text-slate-400"
                ></textarea>
              </div>

              <div class="pt-2">
                <button
                  type="submit"
                  class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#4F9CF9] hover:bg-[#3584E4] shadow-md hover:shadow-glow-blue transition-all duration-200 active:scale-[0.99]"
                >
                  <Send class="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </div>

              <p class="text-[11px] text-slate-400 text-center">
                Seus dados são protegidos e utilizados exclusivamente para responder ao seu contato.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
