import { whatsappNumber } from '#shared/constants/siteConfig'

const MENSAGEM_PADRAO = 'Olá! Gostaria de saber mais sobre os produtos da Glacialis Prime.'

export function useWhatsapp() {
  function abrirWhatsapp(mensagem: string = MENSAGEM_PADRAO): void {
    if (!import.meta.client) return

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return { abrirWhatsapp }
}
