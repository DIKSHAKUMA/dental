import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, Loader2, MessageCircle } from 'lucide-react'
import {
    serviceOptions,
    site,
    web3formsAccessKey,
    whatsappLink,
} from '@/lib/site'
import { ToothAnimation } from '@/components/ui/ToothAnimation'

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
    'w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15'

export function Booking() {
    const [status, setStatus] = useState<Status>('idle')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('loading')

        const form = e.currentTarget
        const formData = new FormData(form)

        // Demo mode: until the real Web3Forms key is added, simulate a
        // successful submission so the flow can be shown end-to-end.
        if (web3formsAccessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
            setTimeout(() => {
                setStatus('success')
                form.reset()
            }, 900)
            return
        }

        formData.append('access_key', web3formsAccessKey)
        formData.append('subject', 'New appointment request — Sri Amutha Dental Care')
        formData.append('from_name', 'Sri Amutha Website')

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })
            const data = await res.json()
            if (data.success) {
                setStatus('success')
                form.reset()
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section id="book" className="relative overflow-hidden bg-cream py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-5">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left: intro + animation */}
                    <div className="text-center lg:text-left">
                        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                            Book Online
                        </span>
                        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                            Reserve your visit
                        </h2>
                        <p className="mt-4 max-w-md text-muted lg:mx-0 mx-auto">
                            Pick a time that suits you and our team will confirm your
                            appointment. Prefer to chat? Book instantly on WhatsApp.
                        </p>

                        <div className="mt-6 hidden lg:block">
                            <ToothAnimation />
                        </div>

                        <a
                            href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,211,102,0.35)] transition-colors hover:bg-whatsapp-600"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Book on WhatsApp instead
                        </a>
                    </div>

                    {/* Right: form */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5 }}
                        className="rounded-[var(--radius-card)] border border-ink/8 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
                    >
                        {status === 'success' ? (
                            <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                                <CheckCircle2 className="h-14 w-14 text-primary" />
                                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                                    Request received!
                                </h3>
                                <p className="mt-2 max-w-xs text-muted">
                                    Thank you. Our team will reach out shortly to confirm your
                                    appointment.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                                >
                                    Book another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Honeypot */}
                                <input
                                    type="checkbox"
                                    name="botcheck"
                                    className="hidden"
                                    style={{ display: 'none' }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-ink-soft">
                                            Full name
                                        </label>
                                        <input
                                            name="name"
                                            required
                                            placeholder="Your name"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-ink-soft">
                                            Phone
                                        </label>
                                        <input
                                            name="phone"
                                            type="tel"
                                            required
                                            placeholder="+91 ..."
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-ink-soft">
                                            Preferred date
                                        </label>
                                        <input name="preferred_date" type="date" className={inputClass} />
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-ink-soft">
                                            Preferred time
                                        </label>
                                        <input name="preferred_time" type="time" className={inputClass} />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-ink-soft">
                                        Service
                                    </label>
                                    <select name="service" className={inputClass} defaultValue="">
                                        <option value="" disabled>
                                            Select a service
                                        </option>
                                        {serviceOptions.map((s) => (
                                            <option key={s} value={s}>
                                                {s}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-ink-soft">
                                        Message <span className="text-muted">(optional)</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        placeholder="Anything we should know?"
                                        className={inputClass}
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="text-sm text-red-600">
                                        Something went wrong. Please try again or reach us on WhatsApp
                                        at {site.phoneDisplay}.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(29,111,224,0.3)] transition-colors hover:bg-primary-600 disabled:opacity-70"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Calendar className="h-5 w-5" />
                                            Request appointment
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-muted">
                                    We'll never share your details. Booking sends a request to our
                                    clinic by email.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
