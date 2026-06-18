// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/fonts'],
  fonts: {
    families: [
      { name: 'Baloo 2',          weights: [600, 700] },
      { name: 'Plus Jakarta Sans', weights: [400, 500, 600] },
    ],
  },
})
