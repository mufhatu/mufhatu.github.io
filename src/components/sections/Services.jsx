import { motion } from 'framer-motion'
import { services } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'
import { Link } from 'react-scroll'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-dark-800/30">
      <div className="container-max">
        <SectionTitle
          label="What I Offer"
          title="Services"
          subtitle="End-to-end development services tailored to your business needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`card glow-hover bg-gradient-to-br ${service.gradient} group`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Ready to start your project?</p>
          <Link to="contact" smooth duration={700} offset={-80}>
            <button className="btn-primary">Let's Talk →</button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
