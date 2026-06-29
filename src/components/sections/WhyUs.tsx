import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'

const points = [
    {
        title: 'Virtually painless treatment',
        body: 'Micro-surgical magnification and gentle techniques mean most patients feel little to nothing — no more fear of the dental chair.',
        image:
            'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Single-visit root canals',
        body: 'Advanced equipment lets us complete most root canals in one sitting, so you spend less time in the clinic and more time smiling.',
        image:
            'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Hospital-grade hygiene',
        body: 'Every instrument is sterilised and every room sanitised to strict protocols, so your safety is never in question.',
        image:
            'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Experience you can trust',
        body: '15+ years of focused endodontic care and over 10,000 treated patients — precision that only comes with practice.',
        image:
            'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    },
]

export function WhyUs() {
    const ref = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState(0)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'end center'],
    })

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const idx = Math.min(
            points.length - 1,
            Math.floor(latest * points.length),
        )
        setActive(idx)
    })

    return (
        <section id="why-us" className="relative bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-5">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                        Why Sri Amutha
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                        Care that puts you at ease
                    </h2>
                </div>

                <div ref={ref} className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left: scrolling points */}
                    <div className="flex flex-col gap-12 lg:gap-[14vh] lg:py-[12vh]">
                        {points.map((point, i) => (
                            <div
                                key={point.title}
                                className="flex flex-col justify-center"
                                onMouseEnter={() => setActive(i)}
                            >
                                <span
                                    className={cn(
                                        'font-display text-5xl font-semibold transition-colors duration-300',
                                        active === i ? 'text-primary' : 'text-ink/15',
                                    )}
                                >
                                    0{i + 1}
                                </span>
                                <h3
                                    className={cn(
                                        'mt-3 font-display text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-3xl',
                                        active === i ? 'text-ink' : 'text-ink/40',
                                    )}
                                >
                                    {point.title}
                                </h3>
                                <p
                                    className={cn(
                                        'mt-3 max-w-md text-base transition-colors duration-300',
                                        active === i ? 'text-muted' : 'text-muted/50',
                                    )}
                                >
                                    {point.body}
                                </p>
                                {/* Mobile image */}
                                <div className="mt-5 overflow-hidden rounded-[var(--radius-card)] lg:hidden">
                                    <img
                                        src={point.image}
                                        alt={point.title}
                                        loading="lazy"
                                        className="h-56 w-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: sticky visual */}
                    <div className="hidden lg:block">
                        <div className="sticky top-28 h-[70vh] overflow-hidden rounded-[var(--radius-card)] border border-ink/5 shadow-[var(--shadow-soft)]">
                            {points.map((point, i) => (
                                <motion.img
                                    key={point.title}
                                    src={point.image}
                                    alt={point.title}
                                    initial={false}
                                    animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.05 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            ))}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
