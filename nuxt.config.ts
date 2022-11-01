// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['maz-ui/css/main.css', '@/assets/main.css'],
  build: {
    transpile: ['maz-ui'],
    analyze: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
