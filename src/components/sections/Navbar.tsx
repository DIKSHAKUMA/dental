import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    motion,
    AnimatePresence,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, whatsappLink } from '@/lib/site'
import { Logo, ToothMark } from '@/components/ui/Logo'
import { SectionLink } from '@/components/ui/SectionLink'

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const { scrollY } = useScroll()
    const { pathname } = useLocation()

    useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={false}
                animate={{
                    width: scrolled ? 'min(62rem, 100%)' : 'min(76rem, 100%)',
                    marginTop: scrolled ? 10 : 18,
                    paddingTop: scrolled ? 8 : 12,
                    paddingBottom: scrolled ? 8 : 12,
                    backgroundColor: scrolled
                        ? 'rgba(255,255,255,0.85)'
                        : 'rgba(255,255,255,0)',
                    boxShadow: scrolled
                        ? '0 8px 24px rgba(15,37,64,0.08)'
                        : '0 0 0 rgba(0,0,0,0)',
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                className={cn(
                    'flex items-center justify-between gap-6 rounded-full px-5 backdrop-blur-md',
                    scrolled ? 'border border-black/[0.06]' : 'border border-transparent',
                )}
            >
                {/* ── Logo ── */}
                <Link to="/" className="shrink-0" aria-label="Sri Amutha Dental Care home">
                    <Logo className="hidden sm:flex" />
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white sm:hidden">
                        <ToothMark className="h-5 w-5" />
                    </span>
                </Link>

                {/* ── Desktop links ── */}
                <ul className="hidden md:flex items-center gap-0.5">
                    {navLinks.map((link) =>
                        link.route ? (
                            <li key={link.href}>
                                <Link
                                    to={link.href}
                                    className={cn(
                                        'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                                        pathname === link.href
                                            ? 'text-primary'
                                            : 'text-ink-soft hover:text-primary',
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ) : (
                            <li key={link.href}>
                                <SectionLink
                                    href={link.href}
                                    className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-primary"
                                >
                                    {link.label}
                                </SectionLink>
                            </li>
                        ),
                    )}
                </ul>

                {/* ── Right: CTA + hamburger ── */}
                <div className="flex items-center gap-2">
                    {/* Book CTA — visible on all sizes */}
                    <Link
                        to="/#book"
                        aria-label="Book appointment"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(29,111,224,0.30)] transition-colors hover:bg-primary-600"
                    >
                        <MessageCircle className="h-4 w-4" />
                        <span className="hidden sm:inline">Book Now</span>
                        <span className="sm:hidden">Book</span>
                    </Link>

                    {/* Hamburger — mobile only */}
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                        className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-black/10 text-ink transition-colors hover:border-primary hover:text-primary"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </motion.nav>

            {/* ── Mobile sheet ── */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-[4.5rem] inset-x-4 md:hidden rounded-3xl border border-black/5 bg-white/96 p-2 shadow-[0_16px_40px_rgba(15,37,64,0.12)] backdrop-blur-md"
                    >
                        <ul className="flex flex-col">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    {link.route ? (
                                        <Link
                                            to={link.href}
                                            onClick={() => setOpen(false)}
                                            className="block rounded-2xl px-4 py-3.5 text-base font-medium text-ink-soft transition-colors hover:bg-cream hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <SectionLink
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="block rounded-2xl px-4 py-3.5 text-base font-medium text-ink-soft transition-colors hover:bg-cream hover:text-primary"
                                        >
                                            {link.label}
                                        </SectionLink>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Mobile sheet Book CTA */}
                        <a
                            href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-whatsapp px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-whatsapp-600"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Book on WhatsApp
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
