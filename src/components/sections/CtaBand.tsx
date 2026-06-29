import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function CtaBand() {
    return (
        <section className="bg-white px-5 py-16 sm:py-20">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center sm:px-12 sm:py-20">
                {/* Soft beams */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-1/2 left-1/4 h-[120%] w-1/2 -rotate-12 bg-gradient-to-b from-white/15 to-transparent blur-2xl"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-1/2 right-1/4 h-[120%] w-1/3 rotate-12 bg-gradient-to-t from-white/10 to-transparent blur-2xl"
                />

                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl"
                >
                    Ready for a pain-free smile?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    className="relative mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg"
                >
                    Booking takes seconds on WhatsApp. Tell us your preferred time and our
                    team will confirm your appointment.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.16 }}
                    className="relative mt-9 flex flex-wrap items-center justify-center gap-3"
                >
                    <MagneticButton
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Book on WhatsApp"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-white shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition-colors hover:bg-whatsapp-600">
                            <MessageCircle className="h-5 w-5" />
                            Book on WhatsApp
                        </span>
                    </MagneticButton>

                    <MagneticButton href={site.phoneHref} aria-label="Call the clinic">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                            <Phone className="h-5 w-5" />
                            Call Now
                        </span>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    )
}
