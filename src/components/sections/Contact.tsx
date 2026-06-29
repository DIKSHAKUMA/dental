import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'
import { MagneticButton } from '@/components/ui/MagneticButton'

const mapEmbed = `https://maps.google.com/maps?q=${site.mapsLat},${site.mapsLng}&z=15&output=embed`
const directions = `https://www.google.com/maps/dir/?api=1&destination=${site.mapsLat},${site.mapsLng}`

export function Contact() {
    return (
        <section id="contact" className="relative bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-5">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                        Visit Us
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                        Find us, easily
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-5">
                    {/* Map */}
                    <div className="overflow-hidden rounded-[var(--radius-card)] border border-ink/8 shadow-[var(--shadow-soft)] lg:col-span-3">
                        <iframe
                            title="Sri Amutha Dental Care location"
                            src={mapEmbed}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-72 w-full sm:h-96 lg:h-full lg:min-h-[28rem]"
                        />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-5 lg:col-span-2">
                        <div className="rounded-[var(--radius-card)] border border-ink/8 bg-cream p-6">
                            <div className="flex items-start gap-3">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                                    <MapPin className="h-5 w-5" />
                                </span>
                                <div>
                                    <h3 className="font-display text-lg font-semibold text-ink">
                                        Our Clinic
                                    </h3>
                                    <p className="mt-1 text-muted">{site.address}</p>
                                    <a
                                        href={directions}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-600"
                                    >
                                        <Navigation className="h-4 w-4" />
                                        Get directions
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[var(--radius-card)] border border-ink/8 bg-cream p-6">
                            <div className="flex items-start gap-3">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                                    <Clock className="h-5 w-5" />
                                </span>
                                <div className="w-full">
                                    <h3 className="font-display text-lg font-semibold text-ink">
                                        Opening Hours
                                    </h3>
                                    <ul className="mt-2 space-y-1.5">
                                        {site.hours.map((h) => (
                                            <li
                                                key={h.day}
                                                className="flex justify-between gap-4 text-sm"
                                            >
                                                <span className="text-ink-soft">{h.day}</span>
                                                <span className="font-medium text-ink">{h.time}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <MagneticButton
                                href={whatsappLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Book on WhatsApp"
                                className="flex-1"
                            >
                                <span className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-colors hover:bg-whatsapp-600">
                                    <MessageCircle className="h-5 w-5" />
                                    Book on WhatsApp
                                </span>
                            </MagneticButton>

                            <MagneticButton
                                href={site.phoneHref}
                                aria-label="Call the clinic"
                                className="flex-1"
                            >
                                <span className="flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary">
                                    <Phone className="h-5 w-5" />
                                    {site.phoneDisplay}
                                </span>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
