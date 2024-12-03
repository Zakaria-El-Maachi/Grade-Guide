// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'pinia-plugin-persistedstate/nuxt'],
  runtimeConfig: {
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
  },
})