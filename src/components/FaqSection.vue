<script setup lang="ts">
import { ref } from 'vue'
import {
  ChevronDown,
  ExternalLink
} from 'lucide-vue-next'

const openIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    q: 'O que é o AgendeFácil?',
    a: 'O AgendeFácil é um sistema de agendamento online open-source (código aberto sob a Licença MIT) desenvolvido com backend em Golang e frontend em Vue.js 3. Ele foi criado para permitir que barbearias, salões de beleza e pequenos negócios gerenciem seus horários, clientes e atendimentos sem depender de plataformas SaaS fechadas.'
  },
  {
    q: 'Para quais tipos de negócio o sistema é indicado?',
    a: 'Embora tenha sido desenhado com foco especial em barbearias, salões de estética e cabeleireiros, o sistema é versátil para qualquer micro ou pequena empresa que trabalhe com agendamento com hora marcada, como clínicas, estúdios de tatuagem, massoterapia e pet shops.'
  },
  {
    q: 'O AgendeFácil é gratuito?',
    a: 'Sim, o software em si é 100% gratuito e livre de qualquer taxa ou mensalidade pelo código, pois é distribuído sob a Licença MIT. No entanto, é importante ressaltar que a infraestrutura onde o sistema for hospedado (como a contratação de uma VPS Linux em provedores como Hetzner, DigitalOcean ou Contabo) e o registro anual de um domínio próprio (.com.br) possuem custos de terceiros.'
  },
  {
    q: 'O que significa o projeto utilizar a Licença MIT?',
    a: 'A Licença MIT é uma das mais permissivas e respeitadas licenças de software livre do mundo. Ela concede a você a liberdade jurídica de usar o sistema para fins comerciais ou pessoais, estudar a arquitetura, modificar o código-fonte, redistribuir e até mesmo empacotar como solução para clientes sem pagar royalties.'
  },
  {
    q: 'Posso instalar o sistema em minha própria VPS?',
    a: 'Com certeza! Essa é a principal premissa do AgendeFácil. O projeto foi projetado para execução autônoma (self-hosted) utilizando Docker e Docker Compose, acompanhado de um script automatizado (install.sh) e um proxy Caddy que emite e renova o certificado SSL HTTPS gratuitamente.'
  },
  {
    q: 'Preciso pagar por uma plataforma para hospedar o sistema?',
    a: 'Você não precisa pagar nenhuma mensalidade para os criadores do AgendeFácil. O único custo recorrente é a sua própria VPS (geralmente entre R$ 25 a R$ 60 mensais no provedor de sua escolha para 2 a 4 GB de RAM) e o domínio (cerca de R$ 40/ano no Registro.br).'
  },
  {
    q: 'Como faço para instalar o AgendeFácil?',
    a: 'Basta contratar uma VPS Linux com Ubuntu 22.04/24.04 ou Debian 12, apontar o DNS para o IP do servidor e rodar o script oficial: "sudo ./install.sh --domain seuapp.com.br --email seu@email.com". O instalador configura o Docker, o banco de dados PostgreSQL, o Redis, o Caddy e inicializa a aplicação. Todas as etapas estão documentadas no arquivo docs/INSTALL.md.'
  },
  {
    q: 'Posso modificar o código-fonte?',
    a: 'Sim! Você tem total liberdade para customizar a interface, mudar cores, alterar a logo, adicionar novos fluxos de agendamento ou plugar outros gateways de pagamento conforme as particularidades do seu negócio.'
  },
  {
    q: 'Como posso contribuir com o projeto?',
    a: 'Desenvolvedores, designers e usuários podem colaborar no repositório do GitHub abrindo issues para reportar problemas ou sugerir recursos, submetendo pull requests com melhorias de código e participando das discussões técnicas da comunidade.'
  },
  {
    q: 'Posso contratar ajuda profissional para instalar ou personalizar o sistema?',
    a: 'Sim! Se você não tem familiaridade técnica com terminal Linux, servidores VPS ou programação, pode entrar em contato conosco na seção de Contato para solicitar serviços profissionais independentes de instalação, configuração de domínio, personalização visual e consultoria técnica.'
  }
]
</script>

<template>
  <section id="faq" class="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E9F2FE] text-[#043873] border border-[#4F9CF9]/30 mb-3">
          Tire suas Dúvidas
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043873] tracking-tight font-display mb-4">
          Perguntas Frequentes (FAQ)
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
          Respostas claras e transparentes sobre licenciamento, custos reais de hospedagem, instalação e customização do AgendeFácil.
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-4">
        <div
          v-for="(item, idx) in faqs"
          :key="idx"
          class="border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all duration-200"
          :class="openIndex === idx ? 'bg-[#F8FAFC] border-[#4F9CF9]/50 shadow-sm' : 'bg-white hover:border-slate-300'"
        >
          <button
            type="button"
            @click="toggleFaq(idx)"
            class="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#4F9CF9] rounded-2xl"
            :aria-expanded="openIndex === idx"
          >
            <span class="text-base font-bold text-[#043873] leading-snug">
              {{ item.q }}
            </span>
            <div
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200',
                openIndex === idx ? 'bg-[#4F9CF9] text-white rotate-180' : 'bg-slate-100 text-slate-500'
              ]"
            >
              <ChevronDown class="w-4 h-4" />
            </div>
          </button>

          <div
            v-show="openIndex === idx"
            class="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80"
          >
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom Card -->
      <div class="mt-12 p-6 rounded-2xl bg-[#F4F8FD] border border-[#4F9CF9]/20 text-center">
        <p class="text-sm text-slate-700">
          Ainda tem dúvidas técnicas ou gostaria de discutir uma necessidade específica?
          <a href="#contato" class="text-[#043873] font-bold hover:text-[#4F9CF9] underline ml-1">
            Entre em contato conosco
          </a>
          ou consulte a
          <a
            href="https://github.com/chgyn/sistema-agendamento/blob/main/docs/INSTALL.md"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#043873] font-bold hover:text-[#4F9CF9] underline ml-1 inline-flex items-center gap-0.5"
          >
            <span>documentação técnica</span>
            <ExternalLink class="w-3 h-3 inline" />
          </a>.
        </p>
      </div>
    </div>
  </section>
</template>
