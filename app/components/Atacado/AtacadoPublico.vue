<template>
  <section id="atacado-publico" class="bg-background py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

      <BaseSectionHeader
        badge="Público-Alvo"
        title="Para Quem é o Atacado"
        description="Atendemos negócios que precisam de volume, variedade e entrega regular."
        class="mb-12"
      />

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">

        <BaseCard padding="md" class="flex flex-col items-start">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Icon name="lucide:truck" class="h-6 w-6 text-primary" />
          </div>
          <h3 class="font-display mb-2 text-lg font-bold text-foreground">Distribuidoras</h3>
          <p class="text-sm leading-relaxed text-foreground-muted">
            Fornecimento em volume com entregas programadas para que a sua operação
            nunca pare por falta de estoque de gelo saborizado.
          </p>
        </BaseCard>

        <BaseCard padding="md" class="flex flex-col items-start">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15">
            <Icon name="lucide:wine" class="h-6 w-6 text-secondary" />
          </div>
          <h3 class="font-display mb-2 text-lg font-bold text-foreground">Adegas</h3>
          <p class="text-sm leading-relaxed text-foreground-muted">
            Variedade de sabores para agregar valor ao portfólio e oferecer ao cliente
            um produto premium e diferenciado direto da geladeira.
          </p>
        </BaseCard>

        <BaseCard padding="md" class="flex flex-col items-start">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15">
            <Icon name="lucide:store" class="h-6 w-6 text-accent" />
          </div>
          <h3 class="font-display mb-2 text-lg font-bold text-foreground">Bares e Conveniências</h3>
          <p class="text-sm leading-relaxed text-foreground-muted">
            Gelo saborizado que transforma drinques e aumenta o ticket médio,
            ideal para bares, lanchonetes e lojas de conveniência.
          </p>
        </BaseCard>

      </div>
    </div>
  </section>
</template>
