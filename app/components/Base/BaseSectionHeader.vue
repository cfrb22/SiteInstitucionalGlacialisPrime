<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  badge?: string
  description?: string
  align?: 'left' | 'center'
}>(), {
  align: 'center',
})
</script>

<template>
  <div :class="align === 'center' ? 'text-center' : 'text-left'">
    <span
      v-if="badge"
      class="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-secondary"
    >
      {{ badge }}
    </span>

    <h2 class="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="mt-4 max-w-xl text-base text-foreground-muted"
      :class="align === 'center' ? 'mx-auto' : ''"
    >
      {{ description }}
    </p>
  </div>
</template>
