<script setup lang="ts">
const sabores = useSabores()
const { abrirWhatsapp } = useWhatsapp()
</script>

<template>
  <section id="sabores-grid" class="bg-background-surface py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
        <BaseCard
          v-for="sabor in sabores"
          :key="sabor.id"
          padding="md"
          class="flex shrink-0 w-72 flex-col snap-center sm:w-auto sm:shrink"
        >
          <!-- Imagem -->
          <img
            :src="sabor.imagem"
            :alt="sabor.nome"
            class="mb-5 h-48 w-full object-contain drop-shadow-md"
          />

          <!-- Nome -->
          <h3 class="font-display mb-2 text-lg font-bold text-foreground">
            {{ sabor.nome }}
          </h3>

          <!-- Descrição -->
          <p class="mb-6 flex-1 text-sm leading-relaxed text-foreground-muted">
            {{ sabor.descricao }}
          </p>

          <!-- Badge disponível -->
          <div class="mb-4 flex items-center gap-1.5">
            <span class="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            <span class="text-xs text-success">Disponível</span>
          </div>

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

      <!-- Não achou o sabor? -->
      <div class="mt-12 rounded-2xl bg-background p-8 text-center ring-1 ring-border">
        <p class="font-display mb-2 text-lg font-bold text-foreground">
          Não encontrou o sabor que procura?
        </p>
        <p class="mx-auto mb-5 max-w-xl text-sm leading-relaxed text-foreground-muted">
          Entre em contato com a gente! Conte qual sabor você gostaria de ver na linha Glacialis Prime.
        </p>
        <BaseButton
          variant="outline"
          size="md"
          @click="abrirWhatsapp('Olá! Não encontrei o sabor que procuro no site da Glacialis Prime. Gostaria de saber se é possível.')"
        >
          <Icon name="lucide:message-circle" class="h-4 w-4" />
          Falar no WhatsApp
        </BaseButton>
      </div>
    </div>
  </section>
</template>
