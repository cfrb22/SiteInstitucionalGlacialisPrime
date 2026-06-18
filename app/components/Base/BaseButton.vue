<script setup lang="ts">
import { resolveComponent, computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
})

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const variantClasses: Record<string, string> = {
  primary: 'bg-primary text-background hover:brightness-110',
  accent:  'bg-accent text-foreground hover:opacity-90',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-background',
  ghost:   'text-foreground hover:bg-foreground/10',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3.5 text-base',
}
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    class="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 active:scale-95"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </component>
</template>
