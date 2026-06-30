import { useRef, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import {
    Microscope,
    Bone,
    Smile,
    Crown,
    Sparkles,
    Baby,
    HeartPulse,
    ShieldCheck,
    ArrowUpRight,
    type LucideIcon,
} from 'lucide-react'
import { services, whatsappLink, type Service } from '@/lib/site'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
    Microscope,
    Bone,
    Smile,
    Crown,
    Sparkles,
    Baby,
    HeartPulse,
    ShieldCheck,
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
    const ref = useRef<HTMLAnchorElement>(null)
    const Icon = iconMap[service.icon] ?? ShieldCheck

    const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--x', `${e.clientX - rect.left}px`)
        el.style.setProperty('--y', `${e.clientY - rect.top}px`)
    }

    const featured = service.featured

    return (
        <motion.a
            ref={ref}
            onMouseMove={handleMove}
            href={whatsappLink(
                `Hello, I'd like to know more about ${service.title} at Sri Amutha Dental Care.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
            className={cn(
                'group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-ink/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]',
                featured
                    ? 'bg-gradient-to-br from-primary-100/50 to-sand-soft/40 sm:col-span-2 lg:row-span-1 lg:p-8'
                    : '',
            )}
        >
            {/* Cursor-follow teal spotlight */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background:
                        'radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgba(29,111,224,0.14), transparent 70%)',
                }}
                aria-hidden
            />

            <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between">
                    <span
                        className={cn(
                            'grid place-items-center rounded-2xl bg-ink/[0.04] text-ink-soft',
                            featured ? 'h-14 w-14' : 'h-12 w-12',
                        )}
                    >
                        <Icon className={featured ? 'h-7 w-7' : 'h-6 w-6'} strokeWidth={1.5} />
                    </span>

                    {featured && (
                        <span className="rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary-700 backdrop-blur-sm">
                            Flagship
                        </span>
                    )}

                    {!featured && (
                        <ArrowUpRight className="h-5 w-5 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-primary" />
                    )}
                </div>

                <h3
                    className={cn(
                        'mt-5 font-display font-semibold tracking-tight text-ink',
                        featured ? 'text-2xl sm:text-3xl' : 'text-xl',
                    )}
                >
                    {service.title}
                </h3>
                <p
                    className={cn(
                        'mt-2 text-muted',
                        featured ? 'max-w-md text-base' : 'text-sm',
                    )}
                >
                    {service.description}
                </p>

                {featured && (
                    <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Book on WhatsApp
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                )}
            </div>
        </motion.a>
    )
}

export function Services() {
    return (
        <section id="services" className="relative bg-cream py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-5">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold uppercase tracking-[0.16em] text-primary"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:whitespace-nowrap sm:text-5xl"
                    >
                        Complete care, under one roof
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-muted sm:whitespace-nowrap"
                    >
                        Tap any service to book instantly on WhatsApp.
                    </motion.p>
                </div>

                {/* Bento grid */}
                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <ServiceCard key={service.title} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
