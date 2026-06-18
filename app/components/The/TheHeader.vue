<script setup lang="ts">
const { abrirWhatsapp } = useWhatsapp()
const menuAberto = ref(false)
const logoSrc = '/imagens/GLACIALIS PRIME_principal.jpg'

const links = [
  { label: 'Home',     to: '/' },
  { label: 'Sabores',  to: '/sabores' },
  { label: 'Atacado',  to: '/atacado' },
  { label: 'Sobre',    to: '/sobre' },
  { label: 'Contato',  to: '/contato' },
]

function fecharMenu() {
  menuAberto.value = false
}
</script>

<template>
  <header id="the-header" class="fixed top-0 z-50 w-full bg-primary shadow-md">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

      <!-- Logo -->
      <NuxtLink to="/" class="flex shrink-0 items-center gap-2.5" @click="fecharMenu">
        <img
          :src="logoSrc"
          alt="Glacialis Prime"
          class="h-10 w-auto"
        />
        <span class="hidden font-display text-lg font-bold leading-none sm:block">
          <span class="text-secondary">Glacialis</span><span class="text-accent"> Prime</span>
        </span>
      </NuxtLink>

      <!-- Navegação desktop -->
      <nav class="hidden items-center gap-7 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-background/75 transition-colors hover:text-background"
          active-class="!text-background font-semibold underline underline-offset-4"
          exact-active-class="!text-background font-semibold underline underline-offset-4"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Lado direito -->
      <div class="flex items-center gap-3">
        <!-- CTA desktop -->
        <BaseButton
          variant="accent"
          size="md"
          class="hidden md:inline-flex"
          @click="abrirWhatsapp()"
        >
          Fazer Pedido
        </BaseButton>

        <!-- Botão hambúrguer (mobile) -->
        <button
          class="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
          :aria-expanded="menuAberto"
          aria-label="Abrir menu de navegação"
          @click="menuAberto = !menuAberto"
        >
          <span
            class="block h-0.5 w-5 bg-background transition-transform duration-200"
            :class="menuAberto ? 'translate-y-2 rotate-45' : ''"
          />
          <span
            class="block h-0.5 w-5 bg-background transition-opacity duration-200"
            :class="menuAberto ? 'opacity-0' : ''"
          />
          <span
            class="block h-0.5 w-5 bg-background transition-transform duration-200"
            :class="menuAberto ? '-translate-y-2 -rotate-45' : ''"
          />
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <Transition name="slide-down">
      <div
        v-if="menuAberto"
        class="border-t border-background/20 bg-primary md:hidden"
      >
        <nav class="flex flex-col px-4 py-2">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="border-b border-background/10 py-3 text-sm font-medium text-background/75 transition-colors last:border-0 hover:text-background"
            active-class="!text-background font-semibold"
            @click="fecharMenu"
          >
            {{ link.label }}
          </NuxtLink>

          <BaseButton
            variant="accent"
            size="md"
            class="mb-2 mt-4 w-full py-2.5"
            @click="abrirWhatsapp(); fecharMenu()"
          >
            Fazer Pedido
          </BaseButton>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
