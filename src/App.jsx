import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollProgress from './components/layout/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-dark-900"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="text-center">
        <motion.div
          className="w-16 h-16 rounded-2xl animated-border p-0.5 mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full bg-dark-900 rounded-[14px] flex items-center justify-center">
            <span className="text-xl font-black gradient-text">MS</span>
          </div>
        </motion.div>
        <motion.div
          className="h-0.5 w-40 mx-auto bg-dark-700 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-accent-400 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </motion.div>
        <p className="text-gray-500 text-xs mt-4 font-mono">Loading portfolio...</p>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-dark-900">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Services />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
