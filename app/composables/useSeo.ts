interface SeoOptions {
  title: string
  description: string
}

const SITE_NAME = 'Glacialis Prime'
const BASE_URL = 'https://glacialisprime.com.br'
const OG_IMAGE = '/imagens/GLACIALIS PRIME_principal.jpg'

export function useSeo({ title, description }: SeoOptions) {
  const fullTitle = `${title} · ${SITE_NAME}`

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogImage: OG_IMAGE,
    ogSiteName: SITE_NAME,
    ogUrl: BASE_URL,
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: OG_IMAGE,
  })
}
