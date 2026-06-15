import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { personal } from '../../data/portfolioData'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const typeSequence = personal.roles.flatMap((role) => [role, 2200])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern"
    >
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-primary-600/15 -top-40 -left-40" />
      <div className="orb w-[500px] h-[500px] bg-purple-600/10 top-1/2 -right-32" />
      <div className="orb w-[400px] h-[400px] bg-accent-500/10 bottom-0 left-1/4" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 w-full mx-auto text-center">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-300 border border-white/10">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            {personal.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-2">
          <span className="text-white">{personal.name.split(' ')[0]} </span>
          <span className="gradient-text">{personal.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div {...fadeUp(0.35)} className="text-xl sm:text-3xl font-semibold text-gray-300 mb-3 h-10">
          <TypeAnimation
            sequence={typeSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-primary-400"
          />
        </motion.div>

        {/* Bio */}
        <motion.p {...fadeUp(0.5)} className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-6">
          {personal.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.65)} className="flex flex-wrap items-center justify-center gap-4">
          <Link to="projects" smooth duration={700} offset={-80}>
            <motion.button
              className="btn-primary text-base px-8 py-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
              </svg>
              View Projects
            </motion.button>
          </Link>

          <motion.a
            href={personal.cv}
            download
            className="btn-secondary text-base px-8 py-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </motion.a>

          <Link to="contact" smooth duration={700} offset={-80}>
            <motion.button
              className="btn-secondary text-base px-8 py-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div {...fadeUp(0.8)} className="mt-8 flex flex-wrap justify-center gap-8">
          {[
            { value: '20+', label: 'Projects Delivered' },
            { value: '3+', label: 'Live Platforms' },
            { value: '100+', label: 'Hosting Clients' },
            { value: '5★', label: 'Client Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-primary-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
