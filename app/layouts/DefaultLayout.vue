<template>
  <div class="flex min-h-screen flex-col bg-background">
    <TheHeader />

    <main class="flex-1 pt-16">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>
