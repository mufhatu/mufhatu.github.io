import { motion } from 'framer-motion'
import { personal } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'

const highlights = [
  { icon: '🌍', label: 'Location', value: personal.location },
  { icon: '📧', label: 'Email', value: personal.email },
  { icon: '📱', label: 'Phone', value: personal.phone },
  { icon: '💼', label: 'Status', value: personal.availability },
]

const values = [
  { icon: '⚡', title: 'Performance', desc: 'Every line of code is written with speed and scalability in mind.' },
  { icon: '🎨', title: 'Design', desc: 'Pixel-perfect UIs that feel great on any screen.' },
  { icon: '🔐', title: 'Security', desc: 'Security-first approach across every layer of the stack.' },
  { icon: '🤝', title: 'Collaboration', desc: 'Clear communication and transparent delivery throughout.' },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionTitle
          label="Who I Am"
          title="About Me"
          subtitle="Passionate about building things that make a difference."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="relative">
              {/* Avatar placeholder */}
              <div className="w-40 h-40 mx-auto lg:mx-0 rounded-3xl animated-border p-0.5 mb-8">
                <div className="w-full h-full bg-dark-700 rounded-[22px] flex items-center justify-center">
                  <span className="text-5xl font-black gradient-text">
                    {personal.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">{personal.bio}</p>
            <p className="text-gray-400 leading-relaxed">{personal.bioExtended}</p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3 glass rounded-xl p-3">
                  <span className="text-xl">{h.icon}</span>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{h.label}</div>
                    <div className="text-sm text-gray-200 truncate">{h.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                GitHub Profile
              </a>
              <a href={`mailto:${personal.email}`} className="btn-primary text-sm">
                Hire Me
              </a>
            </div>
          </motion.div>

          {/* Right — values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="card glow-hover"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}

            {/* Code snippet decoration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="sm:col-span-2 card font-mono text-xs text-gray-500 leading-relaxed"
            >
              <div className="flex gap-1.5 mb-3">
                <span className="w-3 h-3 bg-red-500/70 rounded-full" />
                <span className="w-3 h-3 bg-yellow-500/70 rounded-full" />
                <span className="w-3 h-3 bg-green-500/70 rounded-full" />
              </div>
              <div><span className="text-purple-400">const</span> <span className="text-primary-400">developer</span> = {'{'}</div>
              <div className="ml-4"><span className="text-accent-400">name</span>: <span className="text-orange-300">"{personal.name}"</span>,</div>
              <div className="ml-4"><span className="text-accent-400">stack</span>: <span className="text-orange-300">["React", "Node.js", "AWS", "Docker"]</span>,</div>
              <div className="ml-4"><span className="text-accent-400">passion</span>: <span className="text-orange-300">"Building great software"</span>,</div>
              <div className="ml-4"><span className="text-accent-400">coffee</span>: <span className="text-purple-400">true</span></div>
              <div>{'}'}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
