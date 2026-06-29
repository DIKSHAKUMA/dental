import { LayoutGroup, motion } from 'framer-motion'
import { MessageCircle, Phone, Star } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { TextRotate } from '@/components/ui/text-rotate'
import Floating, { FloatingElement } from '@/components/ui/parallax-floating'

// Dental / smile imagery (swap for real clinic photos later).
const floatingImages = [
    {
        url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
        title: 'Friendly dental consultation',
    },
    {
        url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80',
        title: 'Modern dental treatment room',
    },
    {
        url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
        title: 'Precision dental instruments',
    },
    {
        url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
        title: 'Patient with a bright, healthy smile',
    },
    {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
        title: 'Dentist caring for a patient',
    },
]

export function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-cream"
        >
            {/* Soft ambient glows */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-primary-100 blur-3xl opacity-50"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-sand blur-3xl opacity-50"
            />

            {/* Cursor-reactive floating photos */}
            <Floating sensitivity={-0.5} className="h-full">
                <FloatingElement depth={0.5} className="top-[16%] left-[3%] md:top-[24%] md:left-[7%]">
                    <motion.img
                        src={floatingImages[0].url}
                        alt={floatingImages[0].title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="h-20 w-24 -rotate-[3deg] cursor-pointer rounded-2xl object-cover shadow-[0_18px_50px_rgba(20,48,46,0.18)] transition-transform duration-200 hover:scale-105 sm:h-28 sm:w-32 md:h-28 md:w-36 lg:h-32 lg:w-44"
                    />
                </FloatingElement>

                <FloatingElement depth={1} className="top-[4%] left-[12%] md:top-[8%] md:left-[18%]">
                    <motion.img
                        src={floatingImages[1].url}
                        alt={floatingImages[1].title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.65 }}
                        className="h-28 w-40 -rotate-12 cursor-pointer rounded-2xl object-cover shadow-[0_18px_50px_rgba(20,48,46,0.18)] transition-transform duration-200 hover:scale-105 sm:h-36 sm:w-48 md:h-40 md:w-56 lg:h-44 lg:w-60"
                    />
                </FloatingElement>

                <FloatingElement depth={4} className="top-[80%] left-[6%] md:top-[78%] md:left-[10%]">
                    <motion.img
                        src={floatingImages[2].url}
                        alt={floatingImages[2].title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="h-36 w-36 -rotate-[4deg] cursor-pointer rounded-2xl object-cover shadow-[0_18px_50px_rgba(20,48,46,0.18)] transition-transform duration-200 hover:scale-105 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-60 lg:w-60"
                    />
                </FloatingElement>

                <FloatingElement depth={2} className="top-[2%] left-[80%] md:top-[6%] md:left-[80%]">
                    <motion.img
                        src={floatingImages[3].url}
                        alt={floatingImages[3].title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.95 }}
                        className="h-32 w-36 rotate-[6deg] cursor-pointer rounded-2xl object-cover shadow-[0_18px_50px_rgba(20,48,46,0.18)] transition-transform duration-200 hover:scale-105 sm:h-44 sm:w-48 md:h-52 md:w-60 lg:h-56 lg:w-64"
                    />
                </FloatingElement>

                <FloatingElement depth={1} className="top-[74%] left-[78%] md:top-[70%] md:left-[80%]">
                    <motion.img
                        src={floatingImages[4].url}
                        alt={floatingImages[4].title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1 }}
                        className="h-40 w-40 rotate-[16deg] cursor-pointer rounded-2xl object-cover shadow-[0_18px_50px_rgba(20,48,46,0.18)] transition-transform duration-200 hover:scale-105 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72"
                    />
                </FloatingElement>
            </Floating>

            {/* Center content */}
            <div className="pointer-events-none z-50 flex w-[90%] max-w-3xl flex-col items-center text-center sm:w-[40rem] md:w-[46rem]">
                <motion.h1
                    className="flex flex-col items-center font-display text-[2rem] leading-[1.05] font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
                >
                    <span className="whitespace-nowrap">Gentle dentistry for</span>
                    <LayoutGroup>
                        <motion.span layout className="mt-1 flex md:mt-3">
                            <TextRotate
                                texts={[
                                    'painless care',
                                    'brighter smiles',
                                    'happy families',
                                    'healthy gums',
                                    'lasting implants',
                                ]}
                                mainClassName="text-primary justify-center flex-nowrap whitespace-nowrap"
                                staggerFrom="last"
                                staggerDuration={0.025}
                                rotationInterval={2600}
                                splitLevelClassName="overflow-hidden"
                                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                            />
                        </motion.span>
                    </LayoutGroup>
                </motion.h1>

                <motion.p
                    className="pointer-events-auto mt-6 max-w-md text-base text-muted sm:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: 0.4 }}
                >
                    Advanced micro-surgical technology and a gentle touch — book your visit
                    in seconds on WhatsApp.
                </motion.p>

                <motion.div
                    className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: 0.55 }}
                >
                    <MagneticButton
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Book on WhatsApp"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition-colors hover:bg-whatsapp-600">
                            <MessageCircle className="h-5 w-5" />
                            Book on WhatsApp
                        </span>
                    </MagneticButton>

                    <MagneticButton href={site.phoneHref} aria-label="Call the clinic">
                        <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary">
                            <Phone className="h-5 w-5" />
                            Call Now
                        </span>
                    </MagneticButton>
                </motion.div>

                <motion.div
                    className="pointer-events-auto mt-7 flex items-center gap-2 text-sm text-ink-soft"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <span className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                    </span>
                    <span>
                        <strong className="font-semibold">4.9</strong> from happy patients on
                        Google
                    </span>
                </motion.div>
            </div>
        </section>
    )
}
