import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Configuração do caminho base de publicação:
  // - Com domínio próprio (ex: agendefacil.charlesegidio.space): a raiz é '/'
  // - No GitHub Pages padrão (ex: chgyn.github.io/site-public-agendamento/): '/site-public-agendamento/'
  // Se BASE_PATH for fornecido pelo workflow (mesmo vazio ""), respeitamos:
  // '' ou '/' -> '/'
  // '/site-public-agendamento' -> '/site-public-agendamento/'
  base: (() => {
    const rawBase = process.env.BASE_PATH
    if (rawBase !== undefined) {
      if (rawBase === '' || rawBase === '/' || rawBase === '.') {
        return '/'
      }
      return rawBase.endsWith('/') ? rawBase : `${rawBase}/`
    }
    return '/'
  })(),
})


