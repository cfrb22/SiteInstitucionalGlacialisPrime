<template>
  <section id="atacado-condicoes" class="bg-background-surface py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

      <BaseSectionHeader
        title="Condições do Pedido"
        description="Simples, flexível e sem burocracia."
        class="mb-14"
      />

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">

        <!-- Pedido mínimo -->
        <div class="flex flex-col items-center text-center">
          <div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Icon name="lucide:package" class="h-8 w-8 text-primary" />
          </div>
          <span class="mb-1 text-5xl font-black tracking-tight text-foreground">50<span class="text-3xl">un</span></span>
          <span class="text-base font-semibold text-foreground">Pedido Mínimo</span>
          <p class="mt-1.5 text-sm leading-relaxed text-foreground-muted">
            A partir de 50 unidades por pedido, direto da fábrica.
          </p>
        </div>

        <!-- Sabores disponíveis -->
        <div class="flex flex-col items-center text-center">
          <div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/15">
            <Icon name="lucide:snowflake" class="h-8 w-8 text-secondary" />
          </div>
          <span class="mb-1 text-5xl font-black tracking-tight text-foreground">5</span>
          <span class="text-base font-semibold text-foreground">Sabores Disponíveis</span>
          <p class="mt-1.5 text-sm leading-relaxed text-foreground-muted">
            Maçã Verde, Melancia, Morango, Maracujá e Água de Coco.
          </p>
        </div>

        <!-- Personalizável -->
        <div class="flex flex-col items-center text-center">
          <div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15">
            <Icon name="lucide:shuffle" class="h-8 w-8 text-accent" />
          </div>
          <span class="mb-1 text-5xl font-black tracking-tight text-foreground">100<span class="text-3xl">%</span></span>
          <span class="text-base font-semibold text-foreground">Personalizável</span>
          <p class="mt-1.5 text-sm leading-relaxed text-foreground-muted">
            Misture os sabores livremente no mesmo pedido como preferir.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
