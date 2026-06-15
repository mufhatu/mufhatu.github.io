// ─────────────────────────────────────────────────────────────────────────────
// PERSONAL INFO — sourced from CV
// ─────────────────────────────────────────────────────────────────────────────
export const personal = {
  name: 'Salem Magoloi',
  fullName: 'Salem Mufhatutshedzwa Magoloi',
  title: 'Full Stack Developer',
  email: 'mufhatusalemm@gmail.com',
  phone: '+36 70 43 161 40',
  location: 'Győr, Hungary',
  github: 'https://github.com/mufhatu',
  linkedin: 'https://www.linkedin.com/in/mufhatutshedzwa/',
  cv: '../../public/Salem_CV.pdf',
  bio: `Full Stack Developer with 4+ years of experience building web apps and platforms — now levelling up with an MSc in Computer Science, Docker, and cloud infrastructure.`,
  bioExtended: `Outside of coursework I've been building things — wrapping ML models in FastAPI services with Docker and GitHub Actions pipelines, and rewriting the same ML problem in C++ with OpenMP to achieve a 3.63× speedup at 109,800 rows. I hold an AWS Technical Essentials certificate and I'm actively working toward more cloud credentials.`,
  availability: 'Open to opportunities',
  languages: [
    { lang: 'English', level: 'Fluent' },
    { lang: 'Tshivenda', level: 'Native' },
    { lang: 'Hungarian', level: 'Beginner (studying)' },
  ],
  roles: [
    'Full Stack Developer',
    'MSc Computer Science',
    'Learning Cloud & DevOps',
    'ML / AI Enthusiast',
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS — sourced from CV
// ─────────────────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    label: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'WordPress', 'WooCommerce', 'Wix'],
  },
  {
    label: 'Backend & APIs',
    icon: '⚙️',
    skills: ['Python', 'FastAPI', 'Node.js', 'PHP', 'REST API design', 'Uvicorn'],
  },
  {
    label: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['Docker', 'docker-compose', 'GitHub Actions', 'AWS', 'Linux server admin', 'cPanel'],
  },
  {
    label: 'ML & Data',
    icon: '🤖',
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Feature engineering', 'Model evaluation'],
  },
  {
    label: 'Systems & HPC',
    icon: '⚡',
    skills: ['C++17', 'OpenMP', 'CMake', 'Ninja', 'GoogleTest'],
  },
  {
    label: 'Databases & Tools',
    icon: '🗄️',
    skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code'],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED PROJECTS (live web platforms)
// ─────────────────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'NettWebs Hosting',
    subtitle: 'Web Hosting & Digital Solutions Platform',
    description:
      'A modern web hosting and digital solutions platform built with Vite and React, providing hosting packages and domain services and connected to an woo-commerce store.',
    features: [
      'Fast, responsive UI built with Vite + React',
      'Connected to a WordPress/WooCommerce shop',
      'Service and pricing pages for hosting plans',
      'Clean component-based architecture for easy updates',
      'Mobile-first responsive design',
    ],
    tech: ['Vite', 'React', 'JavaScript', 'WordPress', 'WooCommerce', 'CSS3'],
    challenges:
      'Building a polished, performant React frontend that integrates cleanly with an existing WordPress shop backend — keeping the customer journey smooth across both systems.',
    url: 'http://nettwebshosting.co.za/',
    gradient: 'from-blue-600/20 to-primary-600/20',
    accentColor: 'blue',
    type: 'live',
  },
  {
    id: 2,
    title: 'External Glow',
    subtitle: 'eCommerce Skincare Platform',
    description:
      'A premium eCommerce platform specialising in Aloe Ferox-based skincare products, delivering a sophisticated shopping experience with seamless checkout, product discovery, and mobile-first design.',
    features: [
      'Product catalogue with advanced filtering & search',
      'Secure payment gateway integration',
      'Customer accounts, wishlists & order history',
      'Responsive mobile-first product pages',
      'Inventory & order management backend',
      'Email marketing & discount code engine',
    ],
    tech: ['WooCommerce', 'WordPress', 'PHP', 'MySQL', 'CSS3', 'REST API'],
    challenges:
      'Built a high-converting product experience that communicates brand premium-ness while ensuring fast load times, secure transactions, and a seamless mobile UX for health-conscious shoppers.',
    url: 'https://externalglow.shop/',
    gradient: 'from-emerald-600/20 to-teal-600/20',
    accentColor: 'emerald',
    type: 'live',
  },
  {
    id: 3,
    title: 'SATIA Africa',
    subtitle: 'Non Profit Organisation Website',
    description:
      'A clean, scalable organisational website for SATIA Africa — designed for clarity, credibility, and ease of content management by non-technical staff across the continent.',
    features: [
      'Content-managed pages for events & publications',
      'Member directory and registration flows',
      'Accessible, WCAG-compliant design system',
      'SEO-optimised structure with sitemap generation',
      'Integrated contact & enquiry management',
      'Performance optimised for African network conditions',
    ],
    tech: ['WordPress', 'PHP', 'MySQL', 'CSS3', 'REST API', 'Yoast SEO'],
    challenges:
      'Designed a scalable CMS-driven architecture that allows non-technical staff to manage content autonomously while maintaining brand consistency and performance.',
    url: 'https://satia.africa/',
    gradient: 'from-orange-600/20 to-amber-600/20',
    accentColor: 'orange',
    type: 'live',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PERSONAL / GITHUB PROJECTS (from CV)
// ─────────────────────────────────────────────────────────────────────────────
export const codeProjects = [
  {
    id: 4,
    title: 'Developer Burnout Predictor API',
    subtitle: 'Python · FastAPI · Docker · GitHub Actions',
    year: '2025',
    description:
      'A REST API that takes 11 inputs about a developer\'s work habits and returns a burnout risk level — Low, Medium, or High — with a confidence score peaking around 0.89.',
    features: [
      'REST API built with FastAPI and Pydantic input validation',
      'Fully containerised with Docker & docker-compose',
      'GitHub Actions CI pipeline runs on every push',
      'Clean architecture: routes in main.py, model logic in model.py',
      'Confidence score output (peaks ~0.89) across three risk levels',
    ],
    tech: ['Python', 'FastAPI', 'Docker', 'docker-compose', 'GitHub Actions', 'Pydantic', 'Scikit-learn'],
    url: 'https://github.com/mufhatu/developer-burnout-predictor',
    gradient: 'from-violet-600/20 to-purple-600/20',
    accentColor: 'violet',
    type: 'github',
  },
  {
    id: 5,
    title: 'Parallel ML Training with OpenMP',
    subtitle: 'C++17 · OpenMP · CMake · GoogleTest',
    year: '2025',
    description:
      'Linear regression with gradient descent written from scratch in C++, then parallelised with OpenMP — achieving a 3.63× speedup at 109,800 rows and demonstrating Amdahl\'s Law in practice.',
    features: [
      'Linear regression & gradient descent from scratch — no libraries',
      '3.63× speedup at 109,800 rows using OpenMP parallelisation',
      'Amdahl\'s Law analysis across multiple dataset sizes',
      'GoogleTest suite validates parallel and sequential convergence',
      'CMake + Ninja build system, clean include/ src/ tests/ structure',
    ],
    tech: ['C++17', 'OpenMP', 'CMake', 'Ninja', 'GoogleTest'],
    url: 'https://github.com/mufhatu/burnout-prediction-ml-openmp',
    gradient: 'from-cyan-600/20 to-blue-600/20',
    accentColor: 'cyan',
    type: 'github',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE — sourced from CV
// ─────────────────────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: 'Web Developer',
    company: 'Way Out Studios',
    period: 'Oct 2023 – Jul 2025',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Maintained and grew a portfolio of client websites — building new ones, keeping existing ones running, and integrating third-party services via REST APIs.',
    achievements: [
      'Built and maintained client websites using WordPress, Bootstrap, and JavaScript',
      'Integrated REST APIs for email automation, payment gateways, and booking tools',
      'Managed server-side operations via cPanel — monitoring, performance tuning, and security',
      'Delivered reliable, production-stable integrations by reading API docs end-to-end',
    ],
    tech: ['WordPress', 'JavaScript', 'Bootstrap', 'PHP', 'REST APIs', 'cPanel', 'Wix'],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'Wild Side Creative',
    period: 'Jan 2021 – Sept 2023',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Worked across the full stack building features for existing sites, fixing performance issues, and collaborating with designers and project managers in fast feedback-loop cycles.',
    achievements: [
      'Delivered full-stack features using JavaScript, PHP, HTML/CSS, and MySQL',
      'Fixed performance bottlenecks and cross-browser compatibility issues',
      'Collaborated directly with designers and PMs for rapid, high-quality deploys',
      'Maintained consistent delivery cadence across multiple concurrent projects',
    ],
    tech: ['JavaScript', 'PHP', 'HTML/CSS', 'Bootstrap', 'MySQL'],
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'Essential Webs',
    period: 'Aug 2020 – Dec 2020',
    location: 'South Africa',
    type: 'Full-time',
    description:
      'Developed responsive WordPress websites using HTML, CSS, Bootstrap, and PHP while enhancing site performance, usability, and overall functionality.',
    achievements: [
      'Developed and maintained responsive websites using HTML5, CSS3, Bootstrap, WordPress, and PHP.',
      'Enhanced website design, user experience, and overall functionality through continuous updates and optimizations.',
      'Optimized websites for responsiveness, cross-browser compatibility, and performance.',
      'Collaborated on implementing new features, troubleshooting issues, and maintaining existing web applications.',
    ],
    tech: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress'],
  },
  {
    id: 4,
    role: 'Junior Developer',
    company: 'Magubane Technologies',
    period: 'Apr 2019 – Apr 2020',
    location: 'South Africa',
    type: 'Full-time',
    description:
      'First professional roles — built responsive websites, assisted with database management, and learned the fundamentals of Linux server administration on the job.',
    achievements: [
      'Built responsive client websites from scratch',
      'Assisted with database design and management',
      'Gained foundational Linux server administration skills',
      'Established core development practices that carried through later roles',
    ],
    tech: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'Linux'],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// EDUCATION — sourced from CV
// ─────────────────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: 'MSc in Computer Science',
    institution: 'Széchenyi István University',
    period: 'Sept 2025 – Present',
    location: 'Győr, Hungary',
    description: 'Focus areas: machine learning, software development, cloud computing.',
    achievements: [],
    current: true,
  },
  {
    id: 2,
    degree: 'BSc in Computer Science',
    institution: 'University of Venda',
    period: '2015 – 2018',
    location: 'South Africa',
    description: 'Focus areas: software engineering, artificial intelligence.',
    achievements: [],
    current: false,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// CERTIFICATIONS — sourced from CV
// ─────────────────────────────────────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    name: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services',
    year: '2025',
    badge: '🏆',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: '🌐',
    title: 'Full Stack Web Development',
    description: 'End-to-end web applications built with modern frameworks — from pixel-perfect UIs to scalable backend APIs and databases.',
    features: ['JavaScript','React.js frontend', 'Node.js / Python / PHP backends', 'REST API design & integration', 'MySQL & MongoDB databases'],
    gradient: 'from-primary-600/10 to-purple-600/10',
  },
  {
    icon: '☁️',
    title: 'Docker & CI/CD Pipelines',
    description: 'Containerising applications with Docker and automating build/test workflows via GitHub Actions — actively deepening cloud skills through my MSc and AWS certification path.',
    features: ['Docker & docker-compose', 'GitHub Actions CI/CD', 'AWS (Technical Essentials cert)', 'Linux server administration'],
    gradient: 'from-blue-600/10 to-cyan-600/10',
  },
  {
    icon: '🤖',
    title: 'ML API Development',
    description: 'Wrap machine learning models in production-ready FastAPI services with proper validation, containerisation, and CI pipelines.',
    features: ['FastAPI + Pydantic APIs', 'Scikit-learn model integration', 'Dockerised deployments', 'GitHub Actions automation'],
    gradient: 'from-emerald-600/10 to-teal-600/10',
  },
  {
    icon: '🛒',
    title: 'eCommerce Solutions',
    description: 'High-converting online stores with secure payments, inventory management, and seamless checkout experiences.',
    features: ['WooCommerce & WordPress', 'Payment gateway integration', 'Product catalogue & search', 'Mobile-first UX'],
    gradient: 'from-orange-600/10 to-amber-600/10',
  },
  {
    icon: '⚡',
    title: 'Performance Engineering',
    description: 'Profiling, parallelisation, and optimisation — from front-end load times to HPC-style C++ compute workloads.',
    features: ['OpenMP parallelisation', 'Web performance audits', 'Database query optimisation', 'cPanel server tuning'],
    gradient: 'from-pink-600/10 to-rose-600/10',
  },
  {
    icon: '🔒',
    title: 'Web Hosting & Maintenance',
    description: 'Managed hosting setup, SSL, DNS, backups, and ongoing maintenance so you can focus on your business.',
    features: ['cPanel / WHM setup', 'SSL & DNS management', 'Security hardening', 'Regular backups & monitoring'],
    gradient: 'from-violet-600/10 to-indigo-600/10',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// NAV LINKS
// ─────────────────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Services', to: 'services' },
  { label: 'Contact', to: 'contact' },
]
