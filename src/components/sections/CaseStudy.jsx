import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { caseStudies } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'

export default function CaseStudy() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="casestudy" className="section-padding">
      <div className="container-max">
        <SectionTitle
          label="Engineering Case Study"
          title="Built in Production"
          subtitle="Real systems, real clients, real trade-offs — documented with full engineering detail."
        />

        <div className="space-y-8">
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Featured card */}
              <div className={`relative rounded-2xl bg-gradient-to-br ${cs.gradient} border border-white/10 overflow-hidden`}>
                {/* Glow accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

                <div className="relative p-8 lg:p-10">
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                      {cs.badge}
                    </span>
                    <span className="text-xs text-gray-500">Production · AWS EC2 · af-south-1</span>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left */}
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">{cs.title}</h3>
                      <p className="text-primary-400 font-medium mb-4">{cs.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed mb-6">{cs.summary}</p>

                      {/* Stack pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {cs.stack.map((s) => (
                          <span key={s.layer} className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300">
                            <span className="text-gray-500">{s.layer}: </span>{s.tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={cs.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm px-5 py-2.5"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                          View Case Study
                        </a>
                        <button
                          onClick={() => setExpanded(expanded === cs.id ? null : cs.id)}
                          className="btn-primary text-sm px-5 py-2.5"
                        >
                          {expanded === cs.id ? 'Collapse Detail' : 'Full Engineering Detail'}
                          <svg className={`w-4 h-4 transition-transform ${expanded === cs.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Right — outcomes */}
                    <div className="space-y-4">
                      <div className="card p-5">
                        <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">My Role</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{cs.role}</p>
                      </div>
                      <div className="card p-5">
                        <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Results</h4>
                        <ul className="space-y-2">
                          {cs.outcomes.map((o, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                              <svg className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded detail panel */}
              <AnimatePresence>
                {expanded === cs.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 rounded-2xl border border-white/10 bg-dark-800/60 p-8 lg:p-10 space-y-10">

                      {/* Problem */}
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs">!</span>
                          Problem Statement
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{cs.problem}</p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 text-xs">⚡</span>
                          Key Features
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {cs.features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
                              <span className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                              <span className="text-gray-300 text-sm">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs">🔧</span>
                          Challenges & Solutions
                        </h4>
                        <div className="space-y-4">
                          {cs.challenges.map((c, i) => (
                            <div key={i} className="grid sm:grid-cols-2 gap-4 p-4 rounded-xl bg-white/3 border border-white/5">
                              <div>
                                <div className="text-xs text-red-400 uppercase tracking-wider mb-1">Challenge</div>
                                <p className="text-gray-300 text-sm">{c.challenge}</p>
                              </div>
                              <div>
                                <div className="text-xs text-accent-400 uppercase tracking-wider mb-1">Solution</div>
                                <p className="text-gray-300 text-sm">{c.solution}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Architecture note */}
                      <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
                        <h4 className="text-xs text-blue-400 uppercase tracking-wider mb-2">Architecture Decision</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{cs.architectureNote}</p>
                      </div>

                      <div className="pt-2">
                        <a
                          href={cs.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm px-6 py-3"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                          Read Full Case Study on GitHub
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
