<template>
  <section id="sobre-processo" class="bg-background py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

      <BaseSectionHeader
        badge="Qualidade"
        title="Nosso Processo"
        description="Do ingrediente ao produto final, cada etapa é controlada para garantir qualidade em todo pedido."
        class="mb-14"
      />

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <BaseCard padding="md" class="flex flex-col items-start">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
            <Icon name="lucide:leaf" class="h-6 w-6 text-success" />
          </div>
          <h3 class="mb-2 text-base font-bold text-foreground">Ingredientes Selecionados</h3>
          <p class="text-sm leading-relaxed text-foreground-muted">
            Usamos ingredientes de procedência confiável, escolhidos pela qualidade do sabor e pela consistência lote a lote.
          </p>
        </BaseCard>

        <BaseCard padding="md" class="flex flex-col items-start">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-info/10">
            <Icon name="lucide:shield-check" class="h-6 w-6 text-info" />
          </div>
          <h3 class="mb-2 text-base font-bold text-foreground">Higiene Rigorosa</h3>
          <p class="text-sm leading-relaxed text-foreground-muted">
            Toda a produção segue protocolos rígidos de higiene e sanitização, garantindo segurança alimentar em cada peça.
          </p>
        </BaseCard>

        <BaseCard padding="md" class="flex flex-col items-start">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15">
            <Icon name="lucide:thermometer-snowflake" class="h-6 w-6 text-secondary" />
          </div>
          <h3 class="mb-2 text-base font-bold text-foreground">Congelamento de Qualidade</h3>
          <p class="text-sm leading-relaxed text-foreground-muted">
            Processo de congelamento controlado para garantir textura firme, transparência e durabilidade no produto final.
          </p>
        </BaseCard>

        <BaseCard padding="md" class="flex flex-col items-start">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15">
            <Icon name="lucide:sparkles" class="h-6 w-6 text-accent" />
          </div>
          <h3 class="mb-2 text-base font-bold text-foreground">Sabor Concentrado e Duradouro</h3>
          <p class="text-sm leading-relaxed text-foreground-muted">
            Formulação que mantém o sabor intenso mesmo durante o derretimento.
          </p>
        </BaseCard>

      </div>
    </div>
  </section>
</template>
