import { motion } from 'framer-motion'
import { education } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <SectionTitle
          label="Academic Background"
          title="Education"
          subtitle="The academic foundation that underpins my technical expertise."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card glow-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/20 border border-primary-600/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-primary-400 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-400 mt-1">{edu.description}</p>
                    {edu.achievements.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {edu.achievements.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-accent-400 mt-0.5">›</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-gray-300">{edu.period}</div>
                  <div className="text-gray-500 text-xs">{edu.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
