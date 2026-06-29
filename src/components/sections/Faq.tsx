import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Faq() {
    const [open, setOpen] = useState<number | null>(0)

    return (
        <section className="relative bg-cream py-20 sm:py-28">
            <div className="mx-auto max-w-3xl px-5">
                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                        Good to Know
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                        Questions, answered
                    </h2>
                </div>

                <div className="mt-12 space-y-3">
                    {faqs.map((faq, i) => {
                        const isOpen = open === i
                        return (
                            <div
                                key={faq.q}
                                className="overflow-hidden rounded-2xl border border-ink/8 bg-white"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                                >
                                    <span className="font-display text-lg font-medium text-ink">
                                        {faq.q}
                                    </span>
                                    <span
                                        className={cn(
                                            'grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-transform duration-300',
                                            isOpen && 'rotate-45',
                                        )}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                        >
                                            <p className="px-5 pb-5 text-muted sm:px-6">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
