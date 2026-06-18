<script setup lang="ts">
// TODO: substituir pelos depoimentos reais dos clientes
const depoimentos = [
  {
    texto: 'A entrega é sempre pontual e o sabor se mantém intenso até o fim nossos clientes notaram a diferença.',
    nome: 'Marcos Silva',
    negocio: 'Distribuidora Vitória · Viana - ES',
  },
  {
    texto: 'A variedade de sabores ajudou a diversificar nosso estoque sem complicação no pedido.',
    nome: 'Juliana Costa',
    negocio: 'Adega Cariacica Bebidas · Cariacica - ES',
  },
  {
    texto: 'Virou item fixo no cardápio. Os clientes pedem direto pelo nome.',
    nome: 'Rafael Souza',
    negocio: 'Bar · Viana - ES',
  },
]
</script>

<template>
  <section id="home-depoimentos" class="bg-background py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

      <div class="mb-12">
        <BaseSectionHeader
          badge="Clientes"
          title="O que dizem nossos clientes"
        />
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <BaseCard
          v-for="d in depoimentos"
          :key="d.nome"
          padding="md"
          class="flex flex-col gap-4"
        >
          <Icon name="lucide:quote" class="h-6 w-6 text-secondary" />

          <p class="flex-1 text-sm leading-relaxed text-foreground/75 italic">
            "{{ d.texto }}"
          </p>

          <div class="border-t border-border pt-4">
            <p class="text-sm font-semibold text-foreground">{{ d.nome }}</p>
            <p class="text-xs text-foreground-muted">{{ d.negocio }}</p>
          </div>
        </BaseCard>
      </div>

    </div>
  </section>
</template>
