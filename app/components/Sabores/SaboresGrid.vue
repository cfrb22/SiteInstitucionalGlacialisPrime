<script setup lang="ts">
const sabores = useSabores()
const { abrirWhatsapp } = useWhatsapp()
</script>

<template>
  <section id="sabores-grid" class="bg-background-surface py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BaseCard
          v-for="sabor in sabores"
          :key="sabor.id"
          padding="md"
          class="flex flex-col"
        >
          <!-- Imagem -->
          <img
            :src="sabor.imagem"
            :alt="sabor.nome"
            class="mb-5 h-48 w-full object-contain drop-shadow-md"
          />

          <!-- Nome -->
          <h3 class="mb-2 text-lg font-bold text-foreground">
            {{ sabor.nome }}
          </h3>

          <!-- Descrição -->
          <p class="mb-6 flex-1 text-sm leading-relaxed text-foreground-muted">
            {{ sabor.descricao }}
          </p>

          <!-- CTA -->
          <BaseButton
            variant="primary"
            size="sm"
            class="w-full"
            @click="abrirWhatsapp(`Olá! Gostaria de fazer um pedido do sabor ${sabor.nome}.`)"
          >
            <Icon name="lucide:message-circle" class="h-4 w-4" />
            Pedir esse Sabor
          </BaseButton>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
