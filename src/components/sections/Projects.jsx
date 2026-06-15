import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, codeProjects } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'

const accentMap = {
  blue:   'text-blue-400 bg-blue-400/10 border-blue-400/20',
  emerald:'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  orange: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  violet: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  cyan:   'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
}

function ProjectCard({ project, index, typeBadge }) {
  const [expanded, setExpanded] = useState(false)
  const accent = accentMap[project.accentColor] || accentMap.blue
  const isGitHub = project.type === 'github'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative card glow-hover overflow-hidden bg-gradient-to-br ${project.gradient} border border-white/10 flex flex-col`}
    >
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient.replace('/20', '')}`} />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full border ${accent}`}>
              {typeBadge}
            </span>
            {project.year && (
              <span className="text-xs text-gray-500">{project.year}</span>
            )}
          </div>
          <h3 className="text-lg font-bold text-white leading-snug">{project.title}</h3>
          <p className="text-xs text-gray-500 mt-0.5 font-mono">{project.subtitle}</p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 glass rounded-lg text-gray-400 hover:text-white glass-hover flex-shrink-0 ml-3"
          aria-label={`Open ${project.title}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-5">{project.description}</p>

      {/* Features */}
      <div className="mb-5 flex-1">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
        <ul className="space-y-1.5">
          {project.features.slice(0, expanded ? undefined : 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
              <svg className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        {project.features.length > 3 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-xs text-primary-400 hover:text-primary-300 mt-2 transition-colors"
          >
            {expanded ? '▲ Show less' : `▼ +${project.features.length - 3} more`}
          </button>
        )}
      </div>

      {/* Challenges (live projects only) */}
      <AnimatePresence>
        {expanded && project.challenges && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-5 overflow-hidden"
          >
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Challenge Solved</h4>
            <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-primary-500/50 pl-3">{project.challenges}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tech stack */}
      <div className="mb-5">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 text-xs glass rounded-md text-gray-400 border border-white/5">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={isGitHub ? 'btn-secondary w-full justify-center text-sm' : 'btn-primary w-full justify-center text-sm'}
      >
        {isGitHub ? (
          <>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Live Demo
          </>
        )}
      </a>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionTitle
          label="Featured Work"
          title="Projects"
          subtitle="Live platforms and open-source code — real users, real results, real commits."
        />

        {/* Live web platforms */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Live Platforms</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} typeBadge="Live Project" />
            ))}
          </div>
        </div>

        {/* Code / GitHub projects */}
        <div className="mt-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Personal Projects</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {codeProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} typeBadge="Open Source" />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">More projects on GitHub</p>
          <a
            href="https://github.com/mufhatu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
