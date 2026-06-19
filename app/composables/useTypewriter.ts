interface TypewriterOptions {
  speed?: number
}

export function useTypewriter(text: string, options: TypewriterOptions = {}) {
  const { speed = 40 } = options

  // Inicia com texto completo para SSR (sem hydration mismatch)
  const displayed = ref(text)
  const done = ref(true)
  let timerId: ReturnType<typeof setTimeout> | null = null

  const typeNext = (i: number) => {
    if (i < text.length) {
      displayed.value += text[i]
      timerId = setTimeout(() => typeNext(i + 1), speed)
    } else {
      done.value = true
    }
  }

  onMounted(() => {
    displayed.value = ''
    done.value = false
    timerId = setTimeout(() => typeNext(0), speed)
  })

  onUnmounted(() => {
    if (timerId) clearTimeout(timerId)
  })

  return { displayed, done }
}
