import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { testimonials } from '@/lib/site'

const AVATAR_TINTS = ['#1D6FE0', '#11489C', '#155BC0', '#2B425F']

export function Reviews() {
    const [index, setIndex] = useState(0)
    const count = testimonials.length

    const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
    const prev = () => setIndex((i) => (i - 1 + count) % count)

    useEffect(() => {
        const id = setInterval(next, 6000)
        return () => clearInterval(id)
    }, [next])

    const active = testimonials[index]

    return (
        <section id="reviews" className="relative bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-3xl px-5 text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Patient Stories
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                    Loved by our patients
                </h2>

                <div className="relative mt-12 min-h-[18rem]">
                    <Quote className="mx-auto mb-6 h-10 w-10 text-primary/20" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <div className="mb-6 flex justify-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>

                            <p className="mx-auto max-w-2xl font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                                “{active.quote}”
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-3">
                                <span
                                    className="grid h-12 w-12 place-items-center rounded-full font-display text-lg font-semibold text-white"
                                    style={{ backgroundColor: AVATAR_TINTS[index % AVATAR_TINTS.length] }}
                                >
                                    {active.name.charAt(0)}
                                </span>
                                <div className="text-left">
                                    <p className="font-semibold text-ink">{active.name}</p>
                                    <p className="text-sm text-muted">{active.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="mt-8 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={prev}
                        aria-label="Previous review"
                        className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink transition-colors hover:border-primary hover:text-primary"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </button>

                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                aria-label={`Go to review ${i + 1}`}
                                onClick={() => setIndex(i)}
                                className={
                                    'h-2 rounded-full transition-all duration-300 ' +
                                    (i === index ? 'w-6 bg-primary' : 'w-2 bg-ink/15')
                                }
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={next}
                        aria-label="Next review"
                        className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink transition-colors hover:border-primary hover:text-primary"
                    >
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </section>
    )
}
