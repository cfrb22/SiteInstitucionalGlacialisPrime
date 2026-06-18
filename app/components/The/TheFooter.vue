<script setup lang="ts">
import { whatsappNumber, endereco } from '#shared/constants/siteConfig'

const { abrirWhatsapp } = useWhatsapp()

const anoAtual = new Date().getFullYear()

const links = [
  { label: 'Home',    to: '/' },
  { label: 'Sabores', to: '/sabores' },
  { label: 'Atacado', to: '/atacado' },
  { label: 'Sobre',   to: '/sobre' },
  { label: 'Contato', to: '/contato' },
]

const whatsappFormatado = `+${whatsappNumber.slice(0, 2)} (${whatsappNumber.slice(2, 4)}) ${whatsappNumber.slice(4, 9)}-${whatsappNumber.slice(9)}`
const logoSrc = '/imagens/GLACIALIS PRIME_principal.jpg'
</script>

<template>
  <footer id="the-footer" class="border-t border-white/10 bg-primary text-background">
    <div class="mx-auto max-w-7xl px-4 py-12">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

        <!-- Coluna 1: Logo + tagline -->
        <div class="flex flex-col gap-4">
          <NuxtLink to="/">
            <img :src="logoSrc" alt="Glacialis Prime" class="h-12 w-auto" />
          </NuxtLink>
          <p class="max-w-xs text-sm leading-relaxed text-background/70">
            Gelo e bebidas de qualidade para o seu negócio. Entrega rápida em Viana e Cariacica.
          </p>
        </div>

        <!-- Coluna 2: Links rápidos -->
        <div class="flex flex-col gap-3">
          <h3 class="text-xs font-semibold uppercase tracking-widest text-background/50">
            Links Rápidos
          </h3>
          <nav class="flex flex-col gap-2">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="w-fit text-sm text-background/75 transition-colors hover:text-background"
              active-class="!text-background font-medium"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Coluna 3: Contato -->
        <div class="flex flex-col gap-4">
          <h3 class="text-xs font-semibold uppercase tracking-widest text-background/50">
            Contato
          </h3>

          <!-- WhatsApp: número -->
          <div class="flex items-start gap-2">
            <Icon name="lucide:message-circle" class="mt-0.5 h-4 w-4 shrink-0 text-background/60" />
            <span class="text-sm text-background/75">{{ whatsappFormatado }}</span>
          </div>

          <!-- WhatsApp: botão -->
          <BaseButton
            variant="accent"
            size="md"
            class="w-fit"
            @click="abrirWhatsapp()"
          >
            Falar pelo WhatsApp
          </BaseButton>

          <!-- Endereço -->
          <div class="flex items-start gap-2">
            <Icon name="lucide:map-pin" class="mt-0.5 h-4 w-4 shrink-0 text-background/60" />
            <address class="text-sm not-italic leading-relaxed text-background/75">
              {{ endereco }}
            </address>
          </div>

          <!-- Instagram -->
          <BaseButton
            href="https://www.instagram.com/glacialisprime?igsh=MWVtbHZvaGU0NzRhNg=="
            variant="ghost"
            size="sm"
            class="w-fit gap-2 px-0 text-background/75 hover:bg-transparent hover:text-background"
            aria-label="Instagram da Glacialis Prime"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="lucide:instagram" class="h-4 w-4" />
            @glacialisprime
          </BaseButton>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-10 border-t border-background/20 pt-6 text-center">
        <p class="text-xs text-background/50">
          © {{ anoAtual }} Glacialis Prime. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
