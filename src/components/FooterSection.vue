<script setup lang="ts">
import {
  Calendar,
  Github,
  ExternalLink,
  ArrowUp
} from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-[#021B35] text-slate-300 pt-16 pb-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <!-- Brand & Description (Col 1 & 2) -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F9CF9] to-[#2563EB] flex items-center justify-center text-white shadow-md">
              <Calendar class="w-5 h-5" />
            </div>
            <div>
              <span class="text-xl font-extrabold text-white font-display">AgendeFácil</span>
              <span class="block text-[11px] text-blue-200">Open-Source Self-Hosted Scheduling</span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
            Sistema de agendamento open-source para micro e pequenas empresas que buscam independência, soberania sobre seus dados e automação moderna via WhatsApp com IA.
          </p>

          <div class="pt-2">
            <a
              href="https://github.com/chgyn/sistema-agendamento"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors"
            >
              <Github class="w-4 h-4" />
              <span>Ver no GitHub</span>
              <ExternalLink class="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">Navegação</h4>
          <ul class="space-y-2.5 text-xs text-slate-400">
            <li><a href="#inicio" class="hover:text-white transition-colors">Início</a></li>
            <li><a href="#publico" class="hover:text-white transition-colors">Para Quem É</a></li>
            <li><a href="#funcionalidades" class="hover:text-white transition-colors">Funcionalidades</a></li>
            <li><a href="#como-funciona" class="hover:text-white transition-colors">Como Funciona</a></li>
            <li><a href="#instalacao" class="hover:text-white transition-colors">Instalar na VPS</a></li>
          </ul>
        </div>

        <!-- Technical & AI Links -->
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">Projeto & Código</h4>
          <ul class="space-y-2.5 text-xs text-slate-400">
            <li><a href="#instalacao-ia" class="hover:text-white transition-colors">Instalação com IA</a></li>
            <li><a href="#tecnologias" class="hover:text-white transition-colors">Tecnologias</a></li>
            <li><a href="#open-source" class="hover:text-white transition-colors">Projeto Open-Source</a></li>
            <li><a href="#faq" class="hover:text-white transition-colors">Perguntas Frequentes</a></li>
            <li><a href="#contato" class="hover:text-white transition-colors">Contato & Suporte</a></li>
          </ul>
        </div>

        <!-- External & Legal Links -->
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">Repositório Oficial</h4>
          <ul class="space-y-2.5 text-xs text-slate-400">
            <li>
              <a
                href="https://github.com/chgyn/sistema-agendamento"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Repositório GitHub</span>
                <ExternalLink class="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/chgyn/sistema-agendamento/blob/main/docs/INSTALL.md"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Guia INSTALL.md</span>
                <ExternalLink class="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/chgyn/sistema-agendamento/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Licença MIT</span>
                <ExternalLink class="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/chgyn/sistema-agendamento/blob/main/docs/DEPLOY.md"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Guia DEPLOY.md</span>
                <ExternalLink class="w-3 h-3 opacity-60" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Divider & Copyright -->
      <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div class="flex items-center gap-2">
          <span>&copy; 2026 Charles Egidio. Distribuído sob a <strong>Licença MIT</strong>.</span>
        </div>

        <div class="flex items-center gap-4">
          <span class="inline-flex items-center gap-1 text-[11px] text-blue-200">
            <span>Desenvolvido com Golang & Vue.js</span>
          </span>
          <button
            type="button"
            @click="scrollToTop"
            class="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Voltar ao Topo"
            aria-label="Voltar ao Topo"
          >
            <ArrowUp class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
