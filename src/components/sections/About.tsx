import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import { doctor, whatsappLink } from '@/lib/site'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function About() {
    return (
        <section id="about" className="relative bg-cream py-20 sm:py-28">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    className="relative mx-auto w-full max-w-md"
                >
                    <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-lift)]">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="aspect-[4/5] w-full object-cover"
                        />
                    </div>
                    {/* Floating credential chip */}
                    <div className="absolute -bottom-5 -right-3 rounded-2xl border border-ink/5 bg-white px-5 py-4 shadow-[var(--shadow-soft)] sm:-right-6">
                        <p className="font-display text-3xl font-semibold text-primary">15+</p>
                        <p className="text-xs text-muted">years of care</p>
                    </div>
                </motion.div>

                {/* Bio */}
                <div className="relative">
                    {/* vertical accent (tracing-beam style) */}
                    <span className="absolute -left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-primary/30 to-transparent lg:block" />

                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                        Meet Your Dentist
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
                    >
                        {doctor.name}
                    </motion.h2>

                    <p className="mt-1.5 text-sm font-medium text-primary-700">
                        {doctor.credentials}
                    </p>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-5 text-base leading-relaxed text-muted"
                    >
                        {doctor.bio}
                    </motion.p>

                    <ul className="mt-6 space-y-3">
                        {doctor.highlights.map((h, i) => (
                            <motion.li
                                key={h}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                                className="flex items-start gap-3 text-ink-soft"
                            >
                                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                                </span>
                                {h}
                            </motion.li>
                        ))}
                    </ul>

                    <div className="mt-8">
                        <MagneticButton
                            href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Book on WhatsApp"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-colors hover:bg-whatsapp-600">
                                <MessageCircle className="h-5 w-5" />
                                Book a consultation
                            </span>
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
