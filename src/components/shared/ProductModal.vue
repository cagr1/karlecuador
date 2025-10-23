<template>
  <transition name="modal">
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div class="bg-zinc-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
        <div class="p-6">
          <!-- Header -->
          <div class="flex justify-between items-start mb-6">
            <div>
              <h2 class="text-2xl font-bold">{{ product.name }}</h2>
              <p class="text-orange-500">{{ product.category }}</p>
            </div>
            <button @click="$emit('close')" class="text-zinc-400 hover:text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Imagen con zoom real al hacer clic -->
            <div class="flex flex-col">
              <div 
                class="relative bg-zinc-800 rounded-lg overflow-hidden cursor-zoom-in flex-1 min-h-[400px]"
                @click="toggleZoom"
              >
                <img 
                  :src="product.image" 
                  :alt="product.name" 
                  class="w-full h-full object-contain transition-transform duration-300 p-4"
                  :class="{'scale-180 cursor-zoom-out': isZoomed}"
                  :style="zoomTransform"
                />
                <!-- Indicador de zoom -->
                <div v-if="!isZoomed" class="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                  Click para zoom
                </div>
                <div v-else class="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                  Click para normal
                </div>
              </div>
              <div class="text-3xl font-bold text-orange-500 mt-4 text-center">${{ product.price }}</div>
            </div>

            <!-- Especificaciones y características -->
            <div class="space-y-6">
              <!-- Especificaciones -->
              <div>
                <h3 class="text-lg font-semibold mb-4">Especificaciones Técnicas</h3>
                <div class="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  <div v-for="(value, key) in product.specs" :key="key" class="grid grid-cols-2 gap-4 border-b border-zinc-700 pb-2">
                    <span class="text-zinc-400 capitalize">{{ formatSpecKey(key) }}:</span>
                    <span class="text-white">{{ value || 'N/A' }}</span>
                  </div>
                </div>
              </div>

              <!-- Características -->
              <div v-if="product.features && product.features.length">
                <h3 class="text-lg font-semibold mb-3">Características</h3>
                <ul class="space-y-2">
                  <li v-for="feature in product.features" :key="feature" class="flex items-center gap-2 text-zinc-300">
                    <svg class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Botones de acción -->
              <div class="flex gap-3 pt-4">
                <button class="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  Contactar para compra
                </button>
                <button class="px-4 border border-zinc-700 hover:border-orange-500 rounded-lg transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  show: {
    type: Boolean,
    required: true
  },
  product: {
    type: Object,
    default: () => ({})
  }
})

defineEmits(['close'])

// Zoom functionality
const isZoomed = ref(false)

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value
}

const formatSpecKey = (key) => {
  const words = key.replace(/([A-Z])/g, ' $1').toLowerCase()
  return words.charAt(0).toUpperCase() + words.slice(1)
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Scrollbar personalizado */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1f1f1f;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #52525b;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #f97316;
}

/* Para Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #52525b #1f1f1f;
}

/* Transición suave para el zoom */
.scale-180 {
  transform: scale(1.80);
  transform-origin: center;
}
</style>