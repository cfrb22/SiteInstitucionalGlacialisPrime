import { sabores } from '../../shared/constants/siteConfig'
import type { Sabor } from '../../shared/types/Sabor'

export function useSabores(): Sabor[] {
  return sabores
}
