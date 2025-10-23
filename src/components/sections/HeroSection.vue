<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
    <!-- Fondo con overlay elegante -->
    <div class="absolute inset-0 bg-gradient-to-br from-black via-zinc-90 to-orange-900/20 z-10"></div>
    
    <!-- Imagen de fondo -->
    <img 
      src="@/assets/images/hero_background.png"
      alt="KRAL Arms Ecuador - Distribuidor Oficial"
      class="absolute inset-0 w-full h-full object-cover opacity-40"
    >
    
    <!-- Contenido principal - Mejor centrado -->
    <div class="container mx-auto px-4 sm:px-6 z-20 relative">
      <div class="flex flex-col items-center justify-center text-center w-full">
        <!-- Badge de distribuidor oficial -->
        <div class="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8">
          <Icon icon="heroicons:shield-check-20-solid" class="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
          <span class="text-orange-500 font-semibold text-xs md:text-sm uppercase tracking-wider">
            Distribuidor Oficial
          </span>
        </div>

        <!-- Título principal impactante -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-balance leading-tight">
          <span class="text-white block">KRAL ARMS</span>
          <span class="text-orange-500 block mt-1 md:mt-2">ECUADOR</span>
        </h1>

        <!-- Descripción clara y directa -->
        <p class="text-lg sm:text-xl md:text-2xl text-zinc-300 mb-6 md:mb-8 text-pretty max-w-xl md:max-w-2xl mx-auto leading-relaxed px-4">
          Distribuidores exclusivos de la reconocida marca turca. 
          Calidad, precisión y garantía en cada producto.
        </p>

        <!-- Botones de acción principales -->
        <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full max-w-md mx-auto">
          <button class="group flex items-center justify-center gap-2 md:gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-orange-500/25 w-full sm:w-auto">
            <span>Ver Catálogo</span>
            <Icon icon="heroicons:arrow-right-20-solid" class="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button class="group flex items-center justify-center gap-2 md:gap-3 border border-zinc-700 hover:border-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all hover:bg-zinc-900/50 w-full sm:w-auto">
            <Icon icon="heroicons:phone-20-solid" class="w-4 h-4 md:w-5 md:h-5" />
            <span>Contactar</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Scroll indicator minimalista -->
    <div class="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div class="animate-bounce">
        <Icon icon="heroicons:chevron-double-down-20-solid" class="w-5 h-5 md:w-6 md:h-6 text-zinc-400" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Mejorar el centrado en móviles */
@media (max-width: 640px) {
  .min-h-screen {
    min-height: 100vh;
    height: 100vh;
    max-height: -webkit-fill-available; /* Para iOS */
  }
}
</style>