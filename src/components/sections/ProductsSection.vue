<template>
  <section id="productos" class="py-20 bg-zinc-950">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Nuestros Productos</h2>
        <p class="text-zinc-400 text-lg">Calidad turca, precisión mundial</p>
        
        <!-- Botón admin (puedes ocultarlo o protegerlo) -->
        <!-- <button 
          @click="showAdmin = true"
          class="mt-4 text-sm text-orange-500 hover:text-orange-400 underline"
        >
          Gestionar Productos
        </button> -->
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard 
          v-for="product in filteredProducts" 
          :key="product.id"
          :product="product"
          @view-details="openProductModal"
        />
      </div>

      <!-- No Results -->
      <div v-if="filteredProducts.length === 0" class="text-center py-16">
        <svg class="w-16 h-16 mx-auto text-zinc-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <p class="text-zinc-500">No se encontraron productos que coincidan con tu búsqueda</p>
      </div>
    </div>

    <!-- Modal de detalles -->
    <ProductModal 
      v-if="selectedProduct"
      :show="showProductModal"
      :product="selectedProduct"
      @close="closeProductModal"
    />

    <!-- Panel admin (simple) -->
    <div v-if="showAdmin" class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div class="bg-zinc-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold">Gestionar Productos</h3>
          <button @click="showAdmin = false" class="text-zinc-400 hover:text-white">✕</button>
        </div>
        
        <!-- Formulario simple para actualizar precios -->
        <div v-for="product in products" :key="product.id" class="flex items-center gap-4 mb-4 p-4 border border-zinc-700 rounded">
          <div class="flex-1">
            <div class="font-semibold">{{ product.name }}</div>
            <div class="text-sm text-zinc-400">Precio actual: ${{ product.price }}</div>
          </div>
          <input 
            v-model.number="product.price"
            type="number" 
            class="w-24 bg-zinc-800 border border-zinc-600 rounded px-2 py-1 text-white"
          >
        </div>
        
        <button @click="showAdmin = false" class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold mt-4">
          Guardar Cambios
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '../shared/ProductCard.vue'
import ProductModal from '../shared/ProductModal.vue'
import { products } from '../../data/products.js'

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  }
})

const showProductModal = ref(false)
const selectedProduct = ref(null)
const showAdmin = ref(false)

const filteredProducts = computed(() => {
  if (!props.searchQuery) return products
  
  const query = props.searchQuery.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query) ||
    product.caliber.toLowerCase().includes(query)
  )
})

const openProductModal = (product) => {
  selectedProduct.value = product
  showProductModal.value = true
}

const closeProductModal = () => {
  showProductModal.value = false
  // Opcional: limpiar el producto seleccionado después de un delay
  setTimeout(() => {
    selectedProduct.value = null
  }, 300)
}
</script>