import { useEffect, useRef, useState } from 'react'

/**
 * Marca uma seção como "revelada" quando ela entra na viewport.
 * Usado uma vez por seção (não por card), para manter a animação
 * como um único gesto orquestrado em vez de um efeito repetido.
 */
export function useReveal(threshold = 0.18) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}
