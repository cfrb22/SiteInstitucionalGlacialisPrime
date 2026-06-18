<script setup lang="ts">
const { abrirWhatsapp } = useWhatsapp()
</script>

<template>
  <section
    id="home-hero"
    class="relative flex min-h-[88vh] items-center overflow-hidden bg-gradient-to-br from-secondary to-accent"
  >
    <!-- Manchas decorativas -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div class="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div class="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div class="absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-background/10 blur-2xl" />
    </div>

    <div class="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        <!-- Coluna esquerda: conteúdo -->
        <div>
          <!-- Badge -->
          <div class="mb-6 inline-flex items-center gap-2 border-b-2 border-primary pb-1">
            <Icon name="lucide:factory" class="h-4 w-4 text-primary" />
            <span class="text-sm font-semibold text-primary">Fornecimento direto da fábrica · Viana, ES</span>
          </div>

          <!-- Título -->
          <h1 class="font-display mb-5 text-4xl font-black leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Gelo Saborizado<br />
            <span class="text-primary">Premium para o<br />seu Negócio</span>
          </h1>

          <!-- Subtítulo -->
          <p class="mb-10 max-w-lg text-lg leading-relaxed text-foreground/70">
            Fornecemos gelo saborizado de alta qualidade para
            <strong class="font-semibold text-foreground/90">distribuidoras, adegas, bares e restaurantes</strong>.
            Variedade de sabores, entrega ágil e preço de atacado em Viana e Cariacica.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3">
            <BaseButton
              variant="primary"
              size="lg"
              class="group shadow-lg hover:shadow-xl"
              @click="abrirWhatsapp('Olá! Gostaria de fazer um pedido de gelo saborizado Glacialis Prime.')"
            >
              <Icon name="lucide:message-circle" class="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              Fazer Pedido no WhatsApp
            </BaseButton>

            <BaseButton
              to="/sabores"
              variant="outline"
              size="lg"
              class="group border-foreground/25 bg-background/25 text-foreground backdrop-blur-sm hover:border-foreground/50 hover:bg-background/40"
            >
              Ver Sabores
              <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </BaseButton>
          </div>

          <!-- Selos de confiança -->
          <div class="mt-12 flex flex-wrap items-center gap-6">
            <BaseCheckItem text="5 sabores disponíveis" />
            <BaseCheckItem text="Entrega para atacado" />
            <BaseCheckItem text="Direto da fábrica" />
          </div>
        </div>

        <!-- Coluna direita: imagem -->
        <div class="hidden lg:flex lg:justify-center">
          <div class="relative w-full max-w-2xl animate-float">
            <img
              :src="'/imagens/publicimagenshero-produto.png'"
              alt="Gelo saborizado Glacialis Prime"
              class="relative w-full object-contain drop-shadow-2xl"
              style="aspect-ratio: 4/5;"
            />
          </div>
        </div>

        <!-- Imagem mobile (abaixo do texto, apenas em telas menores) -->
        <div class="lg:hidden">
          <img
            :src="'/imagens/publicimagenshero-produto.png'"
            alt="Gelo saborizado Glacialis Prime"
            class="w-full object-contain drop-shadow-xl"
            style="aspect-ratio: 16/9;"
          />
        </div>

      </div>
    </div>
  </section>
</template>
