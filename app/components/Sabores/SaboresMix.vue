<script setup lang="ts">
const sabores = useSabores()
const { abrirWhatsapp } = useWhatsapp()
</script>

<template>
  <section id="sabores-mix" class="bg-background py-20">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl bg-gradient-to-br from-secondary/15 to-accent/15 p-10 text-center ring-1 ring-border">

        <!-- Ícone destaque -->
        <div class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <Icon name="lucide:shuffle" class="h-7 w-7 text-primary" />
        </div>

        <!-- Título -->
        <h2 class="mb-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Monte seu Mix
        </h2>

        <!-- Descrição -->
        <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
          No pedido de atacado com mínimo de <strong class="font-semibold text-foreground">50 unidades</strong>,
          você combina livremente os 5 sabores como quiser — sem precisar fechar pedido de um sabor só.
          Ideal para <strong class="font-semibold text-foreground">distribuidoras e adegas</strong> que querem
          testar o que vende melhor com os seus clientes.
        </p>

        <!-- Imagens dos sabores lado a lado -->
        <div class="mb-8 flex items-center justify-center gap-4">
          <div
            v-for="sabor in sabores"
            :key="sabor.id"
            class="group relative"
          >
            <div class="h-16 w-16 overflow-hidden rounded-full bg-background shadow-md ring-2 ring-border transition-transform duration-200 group-hover:scale-110 sm:h-20 sm:w-20">
              <img
                :src="sabor.imagem"
                :alt="sabor.nome"
                class="h-full w-full object-contain p-1"
              />
            </div>
            <span class="mt-1.5 block text-center text-[10px] font-medium text-foreground-muted">
              {{ sabor.nome }}
            </span>
          </div>
        </div>

        <!-- CTA -->
        <BaseButton
          variant="primary"
          size="lg"
          class="group shadow-lg hover:shadow-xl"
          @click="abrirWhatsapp('Olá! Gostaria de fazer um pedido de mix de sabores no atacado da Glacialis Prime.')"
        >
          <Icon name="lucide:message-circle" class="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
          Montar meu Mix no WhatsApp
        </BaseButton>

      </div>
    </div>
  </section>
</template>
