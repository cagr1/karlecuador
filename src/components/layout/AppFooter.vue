<template>
  <footer class="bg-zinc-950 border-t border-zinc-800 py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="flex items-center justify-center">
            <img 
              src="@/assets/images/hlogo.png" 
              alt="KRAL Arms Logo" 
              class="h-8 w-auto"  
            />
          </div>
            <span class="font-bold">KRAL ARMS®</span>
          </div>
          <p class="text-sm text-zinc-500">Distribuidor oficial en Ecuador</p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Productos</h4>
          <ul class="space-y-2 text-sm text-zinc-500">
            <li><a href="#" class="hover:text-orange-500 transition-colors">Rifles PCP</a></li>
            <li><a href="#" class="hover:text-orange-500 transition-colors">Escopetas</a></li>
            <li><a href="#" class="hover:text-orange-500 transition-colors">Accesorios</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Empresa</h4>
          <ul class="space-y-2 text-sm text-zinc-500">
            <li><a href="#" class="hover:text-orange-500 transition-colors">Nosotros</a></li>
            <li><a href="#" class="hover:text-orange-500 transition-colors">Contacto</a></li>
            <li><a href="#" class="hover:text-orange-500 transition-colors">Distribuidores</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Síguenos</h4>
          <div class="flex gap-4">
            <SocialIcon 
              v-for="social in socialLinks" 
              :key="social.name"
              :icon="social.icon" 
              :href="social.href"
            />
          </div>
        </div>
      </div>
      <div class="border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
        <p>&copy; 2025 KRAL Arms Ecuador. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialIcon from '@/components/shared/SocialIcon.vue'

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: 'facebook'
  },
  {
    name: 'Instagram', 
    href: '#',
    icon: 'instagram'
  },
  {
    name: 'TikTok',
    href: '#', 
    icon: 'tiktok'
  },
  {
    name: 'Twitter',
    href: '#', 
    icon: 'twitter'
  }
]
</script>