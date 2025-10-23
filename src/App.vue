
<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProductsSection from '@/components/sections/ProductsSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import AppFooter from '@/components/layout/AppFooter.vue'


const searchQuery = ref('')

const handleSearch = (query) => {
  searchQuery.value = query
}



</script>

<template>
   <div class="min-h-screen bg-black text-white">
    
    <AppHeader @search="handleSearch" />
    
    <HeroSection />
    <ProductsSection :search-query="searchQuery" />
    <AboutSection />
    <FeaturesSection />
    <ContactSection />
    
    <AppFooter />
   </div>
   
  
</template>

<style scoped></style>
