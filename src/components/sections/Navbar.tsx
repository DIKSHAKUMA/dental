import { useState } from 'react'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X, MessageCircle, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, site, whatsappLink } from '@/lib/site'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (v) => {
        setScrolled(v > 40)
    })

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={false}
                animate={{
                    width: scrolled ? 'min(64rem, 100%)' : 'min(80rem, 100%)',
                    marginTop: scrolled ? 12 : 20,
                    paddingTop: scrolled ? 8 : 12,
                    paddingBottom: scrolled ? 8 : 12,
                    backgroundColor: scrolled ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0)',
                    boxShadow: scrolled ? '0 10px 30px rgba(20,48,46,0.08)' : '0 0 0 rgba(0,0,0,0)',
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 26 }}
                className={cn(
                    'flex items-center justify-between gap-4 rounded-full px-5 backdrop-blur-md',
                    scrolled ? 'border border-black/5' : 'border border-transparent',
                )}
            >
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2.5 shrink-0">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-white font-display text-lg">
                        S
                    </span>
                    <span className="hidden sm:flex flex-col leading-none">
                        <span className="font-display text-[1.05rem] text-ink">Sri Amutha</span>
                        <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                            Dental Care
                        </span>
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-primary"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTAs */}
                <div className="flex items-center gap-2">
                    <a
                        href={site.phoneHref}
                        aria-label="Call the clinic"
                        className="hidden sm:grid h-10 w-10 place-items-center rounded-full border border-black/10 text-ink transition-colors hover:border-primary hover:text-primary"
                    >
                        <Phone className="h-4 w-4" />
                    </a>

                    <MagneticButton
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Book on WhatsApp"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,211,102,0.35)] transition-colors hover:bg-whatsapp-600">
                            <MessageCircle className="h-4 w-4" />
                            <span className="hidden sm:inline">Book on WhatsApp</span>
                            <span className="sm:hidden">Book</span>
                        </span>
                    </MagneticButton>

                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-label="Toggle menu"
                        className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-black/10 text-ink"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile sheet */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-20 left-4 right-4 md:hidden rounded-3xl border border-black/5 bg-white/95 p-3 shadow-[0_18px_50px_rgba(20,48,46,0.14)] backdrop-blur-md"
                    >
                        <ul className="flex flex-col">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-2xl px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-cream hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
