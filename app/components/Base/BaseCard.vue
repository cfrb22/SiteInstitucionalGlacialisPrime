<script setup lang="ts">
defineProps<{
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div
    class="rounded-2xl border border-white/60 bg-ice-tint/90 ring-1 ring-ice-tint shadow-[0_4px_20px_rgba(27,79,114,0.08)] transition-all duration-200"
    :class="[
      hover !== false ? 'hover:-translate-y-1 hover:shadow-md' : '',
      padding === 'sm' ? 'p-4' : padding === 'lg' ? 'p-8' : 'p-6',
    ]"
  >
    <slot />
  </div>
</template>
