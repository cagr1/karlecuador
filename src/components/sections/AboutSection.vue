<template>
  <section id="nosotros" class="py-20 bg-black">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch"> <!-- Cambiado a items-stretch -->
        <!-- Contenido de texto -->
        <div class="flex flex-col justify-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">KRAL Arms Ecuador</h2>
          <p class="text-zinc-400 text-lg leading-relaxed mb-6">
            Distribuidor oficial de KRAL Arms en Ecuador. Ofrecemos rifles de aire comprimido y armas deportivas de la más alta calidad, fabricadas en Turquía con estándares internacionales.
          </p>
          <p class="text-zinc-400 text-lg leading-relaxed mb-8">
            Con más de 30 años de experiencia en la industria, KRAL Arms combina tecnología de punta con artesanía tradicional para crear productos excepcionales para caza deportiva y tiro de precisión.
          </p>
          <div class="grid grid-cols-3 gap-6">
            <div>
              <div class="text-3xl font-bold text-orange-500 mb-2">30+</div>
              <div class="text-sm text-zinc-500">Años de experiencia</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div class="text-sm text-zinc-500">Modelos disponibles</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-orange-500 mb-2">100%</div>
              <div class="text-sm text-zinc-500">Calidad garantizada</div>
            </div>
          </div>
        </div>

        <!-- Contenedor de imagen que ocupa todo el espacio -->
        <div class="relative h-full min-h-[400px] md:min-h-[500px]">
          <img 
            src="@/assets/images/SignatureAlt.jpg"
            alt="KRAL Arms Workshop"
            class="w-full h-full object-cover rounded-xl shadow-2xl"
          />
          <!-- Overlay sutil para mejor contraste -->
          <div class="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent rounded-xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>