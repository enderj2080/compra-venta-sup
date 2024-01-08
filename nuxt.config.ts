// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir:'src',
  modules:['@nuxtjs/supabase', '@unocss/nuxt', '@vueuse/nuxt', "@nuxt/image"],
supabase:{
  clientOptions:{ },
  
  

},
imports: {
  dirs: ['@/types/*/*.*'],
},
  
})