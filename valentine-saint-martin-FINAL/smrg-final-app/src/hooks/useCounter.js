import { useState, useEffect, useRef } from 'react'

export function useCounter(target, duration = 1400) {
  const [value, setValue] = useState(0)
  const ref = useRef()
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1)
            const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
            setValue(Math.floor(ease * target))
            if (p < 1) requestAnimationFrame(tick)
            else setValue(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return [value, ref]
}
