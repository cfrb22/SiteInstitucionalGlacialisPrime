<script setup lang="ts">
import { whatsappNumber, endereco } from '#shared/constants/siteConfig'

const { abrirWhatsapp } = useWhatsapp()

const whatsappFormatado = `+${whatsappNumber.slice(0, 2)} (${whatsappNumber.slice(2, 4)}) ${whatsappNumber.slice(4, 9)}-${whatsappNumber.slice(9)}`
</script>

<template>
  <section id="contato-info" class="bg-background py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">

      <BaseSectionHeader
        badge="Fale Conosco"
        title="Entre em Contato"
        description="Atendimento direto, sem burocracia. Fale com a gente pelo WhatsApp."
        class="mb-12"
      />

      <div class="flex flex-col gap-8">

        <!-- WhatsApp CTA -->
        <div class="flex flex-col items-center gap-3">
          <BaseButton
            variant="primary"
            size="lg"
            class="group w-full justify-center shadow-lg hover:shadow-xl sm:w-auto sm:px-12"
            @click="abrirWhatsapp('Olá! Gostaria de entrar em contato com a Glacialis Prime.')"
          >
            <Icon name="lucide:message-circle" class="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            Falar no WhatsApp
          </BaseButton>
          <span class="text-sm text-foreground-muted">{{ whatsappFormatado }}</span>
        </div>

        <div class="border-t border-border" />

        <!-- Horário de atendimento -->
        <div class="flex items-start gap-4">
          <div class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Icon name="lucide:clock" class="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 class="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground-muted">
              Horário de Atendimento
            </h3>
            <div class="space-y-1 text-sm text-foreground/75">
              <p><strong class="font-semibold text-foreground">Segunda a Sexta:</strong> 8h às 22h, última entrega às 22h</p>
              <p><strong class="font-semibold text-foreground">Sábado e Domingo:</strong> 8h às 18h, última entrega às 18h</p>
            </div>
          </div>
        </div>

        <!-- Instagram -->
        <div class="flex items-start gap-4">
          <div class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Icon name="lucide:instagram" class="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 class="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground-muted">
              Instagram
            </h3>
            <a
              href="https://www.instagram.com/glacialisprime?igsh=MWVtbHZvaGU0NzRhNg=="
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              @glacialisprime
            </a>
          </div>
        </div>

        <!-- Endereço -->
        <div class="flex items-start gap-4">
          <div class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Icon name="lucide:map-pin" class="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 class="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground-muted">
              Endereço
            </h3>
            <address class="text-sm not-italic leading-relaxed text-foreground/75">
              {{ endereco }}
            </address>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
