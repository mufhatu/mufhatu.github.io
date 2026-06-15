import { motion } from 'framer-motion'

export default function SectionTitle({ label, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto'

  return (
    <motion.div
      className={`mb-16 max-w-2xl ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-primary-400 bg-primary-400/10 rounded-full border border-primary-400/20">
          {label}
        </span>
      )}
      <h2 className="section-title gradient-text">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
