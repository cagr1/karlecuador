<template>
  <section class="py-20 bg-zinc-950">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="feature in features" 
          :key="feature.title"
          class="text-center p-8 group hover:bg-zinc-900/50 rounded-xl transition-all duration-300 border border-zinc-800 hover:border-orange-500/30"
        >
          <div class="w-20 h-20 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon :icon="feature.icon" class="w-10 h-10 text-orange-500" />
          </div>
          <h3 class="text-xl font-bold mb-4 group-hover:text-orange-500 transition-colors">{{ feature.title }}</h3>
          <p class="text-zinc-400 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { features } from '@/data/products.js'
import { Icon } from '@iconify/vue'



</script>