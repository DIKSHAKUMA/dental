import { Routes, Route } from 'react-router-dom'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import { MobileBar } from '@/components/sections/MobileBar'
import { Home } from '@/pages/Home'
import { Blog } from '@/pages/Blog'
import { Article } from '@/pages/Article'

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
      </Routes>
      <Footer />
      <MobileBar />
    </SmoothScroll>
  )
}

export default App
