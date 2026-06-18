<script setup lang="ts">
defineProps<{
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div
    class="rounded-2xl border border-border bg-background-surface transition-all duration-200"
    :class="[
      hover !== false ? 'hover:-translate-y-1 hover:shadow-md' : '',
      padding === 'sm' ? 'p-4' : padding === 'lg' ? 'p-8' : 'p-6',
    ]"
  >
    <slot />
  </div>
</template>
