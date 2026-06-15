import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark-800/30">
      <div className="container-max">
        <SectionTitle
          label="What I Work With"
          title="Skills & Technologies"
          subtitle="A curated toolkit built through real-world projects and continuous learning."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              whileHover={{ y: -4 }}
              className="card glow-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-semibold text-white">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.04 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...skillCategories.flatMap((c) => c.skills), ...skillCategories.flatMap((c) => c.skills)].map(
              (skill, i) => (
                <span key={i} className="text-gray-600 font-mono text-sm px-2">
                  {skill}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
