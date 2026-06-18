<template>
  <section id="sobre-valores" class="bg-background-surface py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

      <BaseSectionHeader
        badge="O que nos move"
        title="Nossos Valores"
        description="Os princípios que guiam cada decisão dentro da Glacialis Prime."
        class="mb-12"
      />

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">

        <BaseCard padding="md" class="flex flex-col items-start">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Icon name="lucide:medal" class="h-6 w-6 text-primary" />
          </div>
          <h3 class="font-display mb-2 text-lg font-bold text-foreground">Qualidade</h3>
          <p class="text-sm leading-relaxed text-foreground-muted">
            Não abrimos mão do padrão. Cada unidade que sai da nossa fábrica passa por
            controle rigoroso para chegar ao cliente exatamente como deve ser.
          </p>
        </BaseCard>

        <BaseCard padding="md" class="flex flex-col items-start">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15">
            <Icon name="lucide:handshake" class="h-6 w-6 text-secondary" />
          </div>
          <h3 class="font-display mb-2 text-lg font-bold text-foreground">Compromisso com o Cliente</h3>
          <p class="text-sm leading-relaxed text-foreground-muted">
            Atendimento direto, sem intermediários. Cumprimos prazos, respeitamos
            combinados e construímos relações de longo prazo com cada parceiro.
          </p>
        </BaseCard>

        <BaseCard padding="md" class="flex flex-col items-start">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15">
            <Icon name="lucide:sun" class="h-6 w-6 text-accent" />
          </div>
          <h3 class="font-display mb-2 text-lg font-bold text-foreground">Sabor Tropical Autêntico</h3>
          <p class="text-sm leading-relaxed text-foreground-muted">
            Inspirados nos sabores do Brasil, desenvolvemos uma linha que traz autenticidade
            e intensidade ao gelo, diferente de tudo que o mercado já conhece.
          </p>
        </BaseCard>

      </div>
    </div>
  </section>
</template>
