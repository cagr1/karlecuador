<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center">
            <img 
              src="@/assets/images/hlogo.png" 
              alt="KRAL Arms Logo" 
              class="h-8 w-auto"  
            />
          </div>
          <div>
            <div class="text-xl font-bold tracking-wider">KRAL ARMS®</div>
            <div class="text-xs text-zinc-400">ECUADOR</div>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#productos" class="text-sm hover:text-orange-500 transition-colors">PRODUCTOS</a>
          <a href="#nosotros" class="text-sm hover:text-orange-500 transition-colors">NOSOTROS</a>
          <a href="#contacto" class="text-sm hover:text-orange-500 transition-colors">CONTACTO</a>
        </nav>

        <!-- Search Icon -->
        <button @click="toggleSearch" class="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <span class="hidden md:inline">Buscar</span>
        </button>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Search Bar -->
      <transition name="slide-down">
        <div v-if="showSearch" class="mt-4 pb-2" ref="searchContainer">
          <div class="relative">
            <input 
              ref="searchInput"
              v-model="searchQuery"
              type="text" 
              placeholder="Buscar productos..."
              class="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 pl-12 pr-10 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
              @keyup.enter="performSearch"
              @input="performSearch"
            >
            <!-- Search Icon -->
            <svg class="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            
            <!-- Clear Button -->
            <button 
              v-if="searchQuery" 
              @click="clearSearch"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </transition>

      <!-- Mobile Menu -->
      <transition name="slide-down">
        <nav v-if="mobileMenuOpen" class="md:hidden mt-4 pb-2 flex flex-col gap-4">
          <a href="#productos" class="text-sm hover:text-orange-500 transition-colors">PRODUCTOS</a>
          <a href="#nosotros" class="text-sm hover:text-orange-500 transition-colors">NOSOTROS</a>
          <a href="#contacto" class="text-sm hover:text-orange-500 transition-colors">CONTACTO</a>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showSearch = ref(false)
const mobileMenuOpen = ref(false)
const searchQuery = ref('')
const searchContainer = ref(null)
const searchInput = ref(null)

// Función para buscar en las armas
const performSearch = () => {
  const searchTerm = searchQuery.value.toLowerCase().trim()
  console.log('Buscando:', searchTerm) // Para debug
  
  // Buscar en todos los productos
  const productCards = document.querySelectorAll('#productSection .bg-zinc-900')
  
  let foundResults = false
  
  productCards.forEach(card => {
    // Buscar en el nombre del producto (dentro del h3)
    const productName = card.querySelector('h3')?.textContent.toLowerCase() || ''
    // Buscar en la categoría
    const productCategory = card.querySelector('.text-xs.text-orange-500')?.textContent.toLowerCase() || ''
    // Buscar en las especificaciones
    const productSpecs = card.querySelectorAll('.text-white')
    let specsText = ''
    productSpecs.forEach(spec => {
      specsText += spec.textContent.toLowerCase() + ' '
    })
    
    const cardText = productName + ' ' + productCategory + ' ' + specsText
    
    console.log('Card text:', cardText) // Para debug
    
    // Mostrar/ocultar basado en la búsqueda
    if (searchTerm === '' || cardText.includes(searchTerm)) {
      card.style.display = 'block'
      foundResults = true
    } else {
      card.style.display = 'none'
    }
  })
  
  // Opcional: Mostrar mensaje si no hay resultados
  const noResultsMessage = document.getElementById('noResultsMessage')
  if (noResultsMessage) {
    noResultsMessage.style.display = foundResults || searchTerm === '' ? 'none' : 'block'
  }
}

// Limpiar búsqueda
const clearSearch = () => {
  searchQuery.value = ''
  performSearch()
  searchInput.value?.focus()
}

// Alternar búsqueda
const toggleSearch = () => {
  showSearch.value = !showSearch.value
  if (showSearch.value) {
    setTimeout(() => {
      searchInput.value?.focus()
    }, 100)
  } else {
    clearSearch()
  }
}

// Cerrar al hacer clic fuera
const handleClickOutside = (event) => {
  if (showSearch.value && 
      searchContainer.value && 
      !searchContainer.value.contains(event.target) &&
      !event.target.closest('button')) {
    showSearch.value = false
    // No limpiar la búsqueda aquí para mantener los resultados
  }
}

// Cerrar al presionar ESC
const handleEscape = (event) => {
  if (event.key === 'Escape' && showSearch.value) {
    showSearch.value = false
  }
}

// Agregar event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

// Limpiar event listeners
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  max-height: 200px;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>