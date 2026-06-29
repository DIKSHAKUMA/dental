import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
    to: number
    from?: number
    duration?: number // seconds
    decimals?: number
    className?: string
}

/**
 * Counts from `from` to `to` once it scrolls into view. (React Bits style.)
 */
export function CountUp({
    to,
    from = 0,
    duration = 2,
    decimals = 0,
    className,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    const [value, setValue] = useState(from)

    useEffect(() => {
        if (!inView) return

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches
        if (prefersReduced) {
            setValue(to)
            return
        }

        let raf = 0
        const start = performance.now()
        const tick = (now: number) => {
            const progress = Math.min((now - start) / (duration * 1000), 1)
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setValue(from + (to - from) * eased)
            if (progress < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [inView, from, to, duration])

    return (
        <span ref={ref} className={className}>
            {value.toLocaleString('en-IN', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
            })}
        </span>
    )
}
