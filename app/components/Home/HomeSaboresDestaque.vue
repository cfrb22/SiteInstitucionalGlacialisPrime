<script setup lang="ts">
const sabores = useSabores()
</script>

<template>
  <section id="home-sabores-destaque" class="bg-background py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- Cabeçalho da seção -->
      <div class="mb-12">
        <BaseSectionHeader
          badge="Linha Premium"
          title="Nossos Sabores"
          description="Cinco opções exclusivas de gelo saborizado para encantar os seus clientes e diferenciar o seu negócio."
        />
      </div>

      <!-- Grid de sabores -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        <BaseCard
          v-for="sabor in sabores"
          :key="sabor.id"
          :hover="true"
          padding="md"
          class="flex flex-col items-center text-center"
        >
          <!-- Imagem do sabor -->
          <img
            :src="sabor.imagem"
            :alt="sabor.nome"
            class="mb-4 h-36 w-full object-contain drop-shadow-md"
          />

          <!-- Nome -->
          <h3 class="mb-2 text-sm font-bold text-foreground">
            {{ sabor.nome }}
          </h3>

          <!-- Descrição -->
          <p class="text-xs leading-relaxed text-foreground-muted">
            {{ sabor.descricao }}
          </p>

          <!-- Badge disponível -->
          <div class="mt-4 flex items-center gap-1.5">
            <span
              class="h-2 w-2 rounded-full"
              :style="{ backgroundColor: sabor.corDestaque }"
              aria-hidden="true"
            />
            <span class="text-xs text-foreground-muted/70">Disponível</span>
          </div>
        </BaseCard>
      </div>

      <!-- CTA inferior -->
      <div class="mt-12 text-center">
        <BaseButton to="/sabores" variant="outline" size="lg" class="group">
          Ver Todos os Sabores
          <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </BaseButton>
      </div>
    </div>
  </section>
</template>
