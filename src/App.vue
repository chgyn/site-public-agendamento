<script setup lang="ts">
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import TargetAudienceSection from './components/TargetAudienceSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import HowItWorksSection from './components/HowItWorksSection.vue'
import VpsInstallSection from './components/VpsInstallSection.vue'
import AiAssistedSection from './components/AiAssistedSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import OpenSourceSection from './components/OpenSourceSection.vue'
import ContactSection from './components/ContactSection.vue'
import FaqSection from './components/FaqSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#F5F7FA] text-[#212529] selection:bg-[#4F9CF9] selection:text-white">
    <!-- Header Fixo Responsivo -->
    <HeaderNav />

    <!-- Conteúdo Principal Semântico com foco em SEO -->
    <main class="flex-grow">
      <!-- 1. Hero com Apresentação, Diferenciais e Screenshots Reais -->
      <HeroSection />

      <!-- 2. Segmentos / Para Quem É -->
      <TargetAudienceSection />

      <!-- 3. Funcionalidades Reais Implementadas -->
      <FeaturesSection />

      <!-- 4. Como Funciona (Fluxo de 5 passos) -->
      <HowItWorksSection />

      <!-- 5. Instalação em VPS Linux (Destaque Principal com INSTALL.md) -->
      <VpsInstallSection />

      <!-- 6. Agentes de IA para Auxílio na Instalação -->
      <AiAssistedSection />

      <!-- 7. Tecnologias Utilizadas (Golang, Vue, Postgres, Redis, WUZAPI, Caddy) -->
      <TechStackSection />

      <!-- 8. Projeto Open-Source & Licença MIT -->
      <OpenSourceSection />

      <!-- 9. Contato, Consultoria Técnica e Suporte -->
      <ContactSection />

      <!-- 10. Perguntas Frequentes (FAQ) -->
      <FaqSection />
    </main>

    <!-- Rodapé Completo com Links Oficiais -->
    <FooterSection />
  </div>
</template>
