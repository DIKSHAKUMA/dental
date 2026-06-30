import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { Services } from '@/components/sections/Services'
import { WhyUs } from '@/components/sections/WhyUs'
import { About } from '@/components/sections/About'
import { Reviews } from '@/components/sections/Reviews'
import { Faq } from '@/components/sections/Faq'
import { Booking } from '@/components/sections/Booking'
import { Contact } from '@/components/sections/Contact'
import { CtaBand } from '@/components/sections/CtaBand'

export function Home() {
    const location = useLocation()

    // Scroll to a section when arriving with a hash (e.g. /#services from the blog).
    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash)
            if (el) {
                setTimeout(
                    () => el.scrollIntoView({ behavior: 'smooth', block: 'start' }),
                    120,
                )
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [location])

    return (
        <>
            <Hero />
            <TrustStrip />
            <Services />
            <WhyUs />
            <About />
            <Reviews />
            <Faq />
            <Booking />
            <Contact />
            <CtaBand />
        </>
    )
}
