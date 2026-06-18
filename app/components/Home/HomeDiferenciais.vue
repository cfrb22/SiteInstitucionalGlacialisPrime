<script setup lang="ts">
const diferenciais = [
  {
    icone: 'lucide:sparkles',
    titulo: 'Qualidade Premium',
    descricao: 'Gelo saborizado com sabor concentrado e duradouro, feito com ingredientes selecionados.',
  },
  {
    icone: 'lucide:droplet',
    titulo: 'Sabores Variados',
    descricao: '5 opções exclusivas para combinar com qualquer bebida e agradar todos os gostos.',
  },
  {
    icone: 'lucide:package',
    titulo: 'Flexibilidade no Atacado',
    descricao: 'Pedido mínimo de 50 unidades com liberdade para misturar sabores no mesmo pedido.',
  },
  {
    icone: 'lucide:truck',
    titulo: 'Pronta Entrega',
    descricao: 'Fornecimento regular e confiável para distribuidoras, adegas e estabelecimentos da região.',
  },
]
</script>

<template>
  <section id="home-diferenciais" class="bg-background-surface py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div class="mb-12">
        <BaseSectionHeader
          badge="Nossos Diferenciais"
          title="Por que escolher a Glacialis Prime?"
          description="Qualidade, variedade e atendimento pensados para o sucesso do seu negócio."
        />
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <BaseCard
          v-for="item in diferenciais"
          :key="item.titulo"
          padding="lg"
          class="flex flex-col gap-4"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Icon :name="item.icone" class="h-6 w-6 text-primary" />
          </div>

          <h3 class="text-base font-bold text-foreground">
            {{ item.titulo }}
          </h3>

          <p class="text-sm leading-relaxed text-foreground-muted">
            {{ item.descricao }}
          </p>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
