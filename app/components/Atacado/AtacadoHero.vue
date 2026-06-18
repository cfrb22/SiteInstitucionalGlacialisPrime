<script setup lang="ts">
const { abrirWhatsapp } = useWhatsapp()
</script>

<template>
  <section
    id="atacado-hero"
    class="bg-gradient-to-b from-primary via-primary to-background py-24"
  >
    <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

      <!-- Badge -->
      <div class="mb-6 inline-flex items-center gap-2 border-b-2 border-accent pb-1">
        <Icon name="lucide:package" class="h-4 w-4 text-accent" />
        <span class="text-sm font-semibold text-accent">Atacado · Viana e Cariacica</span>
      </div>

      <!-- Título -->
      <h1 class="font-display mb-5 text-4xl font-black leading-[1.1] tracking-tight text-background sm:text-5xl lg:text-6xl">
        Fornecimento de Gelo Saborizado para
        <span class="text-accent">Distribuidoras e Adegas</span>
      </h1>

      <!-- Subtítulo -->
      <p class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-background/75">
        Garantimos regularidade no abastecimento e qualidade em cada entrega —
        para que o seu negócio nunca fique sem produto e os seus clientes sempre
        encontrem o gelo saborizado que procuram.
      </p>

      <!-- CTA -->
      <BaseButton
        variant="accent"
        size="lg"
        class="group shadow-lg hover:shadow-xl"
        @click="abrirWhatsapp('Olá! Gostaria de saber mais sobre o fornecimento de gelo saborizado no atacado pela Glacialis Prime.')"
      >
        <Icon name="lucide:message-circle" class="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
        Falar no WhatsApp
      </BaseButton>

    </div>
  </section>
</template>
