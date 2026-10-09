<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Calendar,
  Github,
  Menu,
  X,
  ArrowRight,
  Terminal,
  ExternalLink
} from 'lucide-vue-next'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Público', href: '#publico' },
  { name: 'Funcionalidades', href: '#funcionalidades' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Instalar na VPS', href: '#instalacao' },
  { name: 'Instalação com IA', href: '#instalacao-ia' },
  { name: 'Tecnologias', href: '#tecnologias' },
  { name: 'Open-Source', href: '#open-source' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' },
]

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-[#043873]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5'
        : 'bg-[#043873] border-b border-white/10 py-5'
    ]"
  >
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-4">
        <!-- Logo e Identidade -->
        <a href="#inicio" class="flex items-center gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] rounded-lg p-1">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F9CF9] to-[#2563EB] flex items-center justify-center shadow-md shadow-[#4F9CF9]/30 group-hover:scale-105 transition-transform duration-200 shrink-0">
            <Calendar class="w-5 h-5 text-white" />
          </div>
          <div class="flex flex-col shrink-0">
            <div class="flex items-center gap-2">
              <span class="text-xl font-extrabold tracking-tight text-white font-display whitespace-nowrap">AgendeFácil</span>
              <span class="hidden sm:inline-flex items-center px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#FFE492]/20 text-[#FFE492] border border-[#FFE492]/30 whitespace-nowrap shrink-0">
                MIT Open-Source
              </span>
            </div>
            <span class="text-[11px] text-blue-200/80 -mt-0.5 hidden md:block whitespace-nowrap">Agendamento Inteligente & Self-Hosted</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 shrink-0">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="px-1.5 2xl:px-2.5 py-1.5 text-[11px] 2xl:text-xs font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- Action Buttons (Desktop) -->
        <div class="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href="https://github.com/chgyn/sistema-agendamento"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-200 backdrop-blur-sm whitespace-nowrap shrink-0"
          >
            <Github class="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="#instalacao"
            class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#043873] bg-[#FFE492] hover:bg-[#FFDE73] rounded-xl shadow-md hover:shadow-glow-gold transition-all duration-200 whitespace-nowrap shrink-0"
          >
            <Terminal class="w-3.5 h-3.5" />
            <span>Como Instalar</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-2 xl:hidden">
          <a
            href="https://github.com/chgyn/sistema-agendamento"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-blue-100 hover:text-white rounded-lg bg-white/10 border border-white/10 md:hidden"
            aria-label="Repositório GitHub"
          >
            <Github class="w-4 h-4" />
          </a>

          <button
            type="button"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 text-blue-100 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#4F9CF9]"
            aria-label="Abrir Menu Principal"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="xl:hidden bg-[#032B59] border-b border-white/10 px-4 pt-4 pb-6 shadow-2xl"
      >
        <nav class="grid grid-cols-2 gap-2 mb-4">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click="closeMobileMenu"
            class="px-3 py-2 text-xs font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {{ link.name }}
          </a>
        </nav>

        <div class="flex flex-col sm:flex-row gap-2.5 pt-3 border-t border-white/10">
          <a
            href="https://github.com/chgyn/sistema-agendamento"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl"
          >
            <Github class="w-4 h-4" />
            <span>Ver no GitHub</span>
            <ExternalLink class="w-3.5 h-3.5 opacity-70" />
          </a>

          <a
            href="#instalacao"
            @click="closeMobileMenu"
            class="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-[#043873] bg-[#FFE492] hover:bg-[#FFDE73] rounded-xl shadow-md"
          >
            <Terminal class="w-4 h-4" />
            <span>Guia de Instalação na VPS</span>
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>
