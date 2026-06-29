import { SmoothScroll } from '@/components/SmoothScroll'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { Services } from '@/components/sections/Services'
import { WhyUs } from '@/components/sections/WhyUs'
import { About } from '@/components/sections/About'
import { Reviews } from '@/components/sections/Reviews'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'
import { CtaBand } from '@/components/sections/CtaBand'
import { Footer } from '@/components/sections/Footer'
import { MobileBar } from '@/components/sections/MobileBar'

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <About />
        <Reviews />
        <Faq />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
      <MobileBar />
    </SmoothScroll>
  )
}

export default App
