// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-og-image'],
  site: {
    url: 'https://rp-nuxt-test.pages.dev',
    name: 'Nuxt test',
    description: 'Testje voor nuxt-og-image',
  },
})
