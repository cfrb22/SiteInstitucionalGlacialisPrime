<script setup lang="ts">
const { abrirWhatsapp } = useWhatsapp()

const MSG = 'Olá! Gostaria de fazer um pedido no atacado de gelo saborizado Glacialis Prime.'
</script>

<template>
  <section id="home-banner-atacado" class="bg-primary py-20">
    <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

      <!-- Badge -->
      <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5">
        <Icon name="lucide:package" class="h-4 w-4 text-accent" />
        <span class="text-sm font-semibold text-accent">Atacado Disponível</span>
      </div>

      <!-- Título -->
      <h2 class="mb-5 text-3xl font-black leading-tight tracking-tight text-background sm:text-4xl lg:text-5xl">
        Compre no Atacado e<br />
        Revenda com Qualidade
      </h2>

      <!-- Descrição -->
      <p class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-background/75">
        Pedido mínimo de <strong class="font-semibold text-background">50 unidades</strong> com total
        liberdade para combinar entre os <strong class="font-semibold text-background">5 sabores disponíveis</strong>
        no mesmo pedido. Ideal para distribuidoras, adegas e bares que querem oferecer
        algo diferente aos seus clientes.
      </p>

      <!-- CTA -->
      <BaseButton
        variant="accent"
        size="lg"
        class="group shadow-lg hover:shadow-xl"
        @click="abrirWhatsapp(MSG)"
      >
        <Icon
          name="lucide:message-circle"
          class="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
        />
        Quero Comprar no Atacado
      </BaseButton>

      <!-- Trust items -->
      <div class="mt-10 flex flex-wrap items-center justify-center gap-6">
        <BaseCheckItem light text="Mínimo de 50 unidades" />
        <BaseCheckItem light text="Mix de sabores no mesmo pedido" />
        <BaseCheckItem light text="Entrega na região de Viana" />
      </div>
    </div>
  </section>
</template>
