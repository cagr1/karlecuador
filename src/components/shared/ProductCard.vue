<template>
  <div class="group bg-zinc-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-orange-500 transition-all cursor-pointer">
    <div class="aspect-video bg-zinc-800 overflow-hidden relative">
      <img 
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      >
      
    </div>
    <div class="p-6">
      <div class="text-xs text-orange-500 font-semibold mb-2">{{ product.category }}</div>
      <h3 class="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{{ product.name }}</h3>
      <p class="text-zinc-400 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
      
      <!-- Especificaciones principales -->
      <div class="grid grid-cols-2 gap-2 mb-4 text-xs">
        <div class="text-zinc-500">Calibre:</div>
        <div class="text-white">{{ product.specs.caliber }}</div>
        
        <div class="text-zinc-500">Peso:</div>
        <div class="text-white">{{ product.specs.weight }}</div>
      </div>

      <div class="flex items-center justify-between">
        
        <button 
          @click="$emit('viewDetails', product)"
          class="text-orange-500 hover:text-orange-400 text-sm font-semibold flex items-center gap-1"
        >
          Ver detalles
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['viewDetails'])

</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>