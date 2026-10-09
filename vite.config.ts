import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Em deploys do GitHub Pages sob chgyn/site-public-agendamento, a base padrão é /site-public-agendamento/
  // Pode ser sobrescrita via variável de ambiente BASE_PATH (ex: '/' para domínio próprio agendefacil.com.br)
  base: (() => {
    const rawBase = process.env.BASE_PATH
    if (rawBase !== undefined && rawBase !== '') {
      return rawBase.endsWith('/') ? rawBase : `${rawBase}/`
    }
    return process.env.GITHUB_ACTIONS ? '/site-public-agendamento/' : '/'
  })(),
})


