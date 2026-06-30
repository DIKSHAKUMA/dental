import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site, navLinks } from '@/lib/site'
import { ToothMark } from '@/components/ui/Logo'
import { SectionLink } from '@/components/ui/SectionLink'

export function Footer() {
    return (
        <footer className="bg-ink px-5 pt-16 pb-28 text-cream/80 md:pb-12">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2.5">
                            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white">
                                <ToothMark className="h-5 w-5" />
                            </span>
                            <div className="leading-none">
                                <p className="font-display text-lg font-semibold text-white">Sri Amutha</p>
                                <p className="text-[0.6rem] uppercase tracking-[0.18em] text-cream/50">
                                    Dental Care
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
                            {site.tagline}. Painless, precise dental care for the whole family.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="font-display text-base font-medium text-white">
                            Quick Links
                        </h4>
                        <ul className="mt-4 grid grid-cols-2 gap-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <SectionLink
                                        href={link.href}
                                        className="text-sm text-cream/70 transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </SectionLink>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/blog"
                                    className="text-sm text-cream/70 transition-colors hover:text-primary"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display text-base font-medium text-white">
                            Get in Touch
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <span className="text-cream/70">{site.address}</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 shrink-0 text-primary" />
                                <a
                                    href={site.phoneHref}
                                    className="text-cream/70 transition-colors hover:text-primary"
                                >
                                    {site.phoneDisplay}
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <span className="text-cream/70">
                                    {site.hours.map((h) => `${h.day}: ${h.time}`).join(' · ')}
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 shrink-0 text-primary" />
                                <span className="text-cream/70">care@sriamuthadental.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-cream/50">
                    © {new Date().getFullYear()} {site.name}. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
