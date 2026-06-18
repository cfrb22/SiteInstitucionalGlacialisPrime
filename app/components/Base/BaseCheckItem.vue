<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  light?: boolean
}>(), {
  light: false,
})
</script>

<template>
  <div
    class="flex items-center gap-2 text-sm"
    :class="light ? 'text-background/70' : 'text-foreground/60'"
  >
    <Icon
      name="lucide:circle-check"
      class="h-4 w-4 shrink-0"
      :class="light ? 'text-background/60' : 'text-primary'"
    />
    <span>{{ text }}</span>
  </div>
</template>
