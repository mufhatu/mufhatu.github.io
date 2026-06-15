import { motion } from 'framer-motion'
import { experience, certifications } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-dark-800/30">
      <div className="container-max">
        <SectionTitle
          label="Work History"
          title="Experience"
          subtitle="Building and shipping real-world products across multiple industries."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/50 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative sm:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary-600 border-2 border-dark-900 hidden sm:block shadow-lg shadow-primary-600/30" />

                <div className="card glow-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-primary-400 font-medium">{job.company}</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-xs px-2 py-0.5 glass rounded-full text-gray-400">{job.type}</span>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div>{job.period}</div>
                      <div className="text-xs text-gray-500">{job.location}</div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{job.description}</p>

                  <ul className="space-y-2 mb-4">
                    {job.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs glass rounded-md text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-white text-center mb-8">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card text-center"
                >
                  <div className="text-4xl mb-2">{cert.badge}</div>
                  <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{cert.issuer}</p>
                  <p className="text-xs text-primary-400 mt-1">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
