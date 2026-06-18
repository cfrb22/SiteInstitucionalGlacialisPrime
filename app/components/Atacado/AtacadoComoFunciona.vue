<template>
  <section id="atacado-como-funciona" class="bg-background-surface py-20">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

      <BaseSectionHeader
        badge="Simples assim"
        title="Como Funciona o Pedido"
        description="Do primeiro contato à entrega em 3 passos."
        class="mb-14"
      />

      <div class="relative flex flex-col gap-0">

        <!-- Linha conectora (desktop) -->
        <div
          aria-hidden="true"
          class="absolute left-8 top-10 hidden h-[calc(100%-5rem)] w-px bg-border sm:block"
        />

        <!-- Passo 1 -->
        <div class="relative flex gap-6 pb-10">
          <div class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-background shadow-lg">
            <span class="text-2xl font-black">1</span>
          </div>
          <div class="pt-2">
            <h3 class="font-display mb-1.5 text-lg font-bold text-foreground">Escolha os Sabores e Quantidades</h3>
            <p class="text-sm leading-relaxed text-foreground-muted">
              Defina quantas unidades quer e como prefere distribuir entre os 5 sabores disponíveis.
              O mínimo é 50 unidades e você pode combinar à vontade.
            </p>
          </div>
        </div>

        <!-- Passo 2 -->
        <div class="relative flex gap-6 pb-10">
          <div class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-secondary text-background shadow-lg">
            <span class="text-2xl font-black">2</span>
          </div>
          <div class="pt-2">
            <h3 class="font-display mb-1.5 text-lg font-bold text-foreground">Fale com a Gente no WhatsApp</h3>
            <p class="text-sm leading-relaxed text-foreground-muted">
              Entre em contato direto pelo WhatsApp com o seu pedido. Atendimento rápido,
              sem formulários e sem burocracia.
            </p>
          </div>
        </div>

        <!-- Passo 3 -->
        <div class="relative flex gap-6">
          <div class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent text-background shadow-lg">
            <span class="text-2xl font-black">3</span>
          </div>
          <div class="pt-2">
            <h3 class="font-display mb-1.5 text-lg font-bold text-foreground">Combinamos Entrega e Pagamento</h3>
            <p class="text-sm leading-relaxed text-foreground-muted">
              Alinhamos data, local de entrega e forma de pagamento diretamente com você.
              Simples, rápido e sem intermediários.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
