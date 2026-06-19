<script setup lang="ts">
useSeo({
  title: 'Nossos Sabores',
  description: 'Conheça os 5 sabores de gelo saborizado Glacialis Prime: Maçã Verde, Melancia, Morango, Maracujá e Água de Coco. Qualidade premium, direto da fábrica em Viana, ES.',
})
</script>

<template>
  <div id="page-sabores">
    <SaboresIntro />
    <SaboresGrid />

    <!-- Aviso sobre embalagens e disponibilidade -->
    <div class="bg-background-surface pb-2 pt-0">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="flex items-start justify-center gap-1.5 text-center text-xs leading-relaxed text-foreground-muted/55">
          <Icon name="lucide:info" class="mt-0.5 h-3.5 w-3.5 shrink-0" />
          As cores da embalagem podem sofrer alterações. Em caso de indisponibilidade de algum sabor, nosso time informa diretamente no WhatsApp.
        </p>
      </div>
    </div>

    <SaboresMix />
    <HomeBannerAtacado />
  </div>
</template>
