import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Linkedin, Github, Sparkles } from 'lucide-react'

const sections = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const teamProjects = [
  {
    title: 'Unified Design System',
    role: 'Team effort • Design Ops + UI Kit',
    desc: 'Scaled a shared component library across web and mobile with tokens, motion, and accessibility baked in.',
    tags: ['Design System', 'Figma Tokens', 'A11y'],
    link: '#',
  },
  {
    title: 'Analytics Dashboard 2.0',
    role: 'Team effort • Research + Interaction',
    desc: 'Reimagined insights with spatial hierarchy, progressive drill-down, and micro-interactions for clarity.',
    tags: ['Research', 'Data Viz', 'Prototyping'],
    link: '#',
  },
  {
    title: 'Onboarding Journey',
    role: 'Team effort • UX Strategy',
    desc: 'Reduced time-to-value by 42% with contextual nudges, empty states, and guided walkthroughs.',
    tags: ['UX Writing', 'Guidance', 'Motion'],
    link: '#',
  },
]

const soloProjects = [
  {
    title: 'Concept Storefront',
    role: 'Individual • Visual + Motion',
    desc: 'A playful ecommerce concept with tactile interactions and 3D product exploration.',
    tags: ['3D', 'Motion', 'Visual'],
    link: '#',
  },
  {
    title: 'Micro-Interactions Pack',
    role: 'Individual • Prototyping',
    desc: 'A collection of reusable motion patterns for delight without distraction.',
    tags: ['Framer', 'Prototyping'],
    link: '#',
  },
  {
    title: 'Brand Playground',
    role: 'Individual • Identity',
    desc: 'Explorations in color, type, and depth for a modern, tech-forward tone.',
    tags: ['Brand', 'Type', 'Exploration'],
    link: '#',
  },
]

function Nav() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-fuchsia-500 to-amber-400 shadow-lg" />
            <span className="text-sm sm:text-base font-semibold tracking-tight">Design Collective</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {s.label}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-gray-900 text-white text-sm px-4 py-2 shadow hover:shadow-md transition">
              Let’s Collaborate
            </a>
          </nav>
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? '✕' : '☰'}</span>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 space-y-1 rounded-lg border border-gray-200 p-2 bg-white/70 backdrop-blur">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-50">
                  {s.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-white bg-gray-900">
                Let’s Collaborate
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-900/5 text-gray-800 px-2 py-1 text-xs font-medium">
      {children}
    </span>
  )
}

function ProjectCard({ title, role, desc, tags, link, idx }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      href={link}
      className="group block rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-5 hover:shadow-md transition relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div className="absolute -inset-20 bg-gradient-to-tr from-blue-500/10 via-fuchsia-500/10 to-amber-400/10 blur-2xl" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight flex items-center gap-2">
            {title}
            <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition" />
          </h3>
          <p className="mt-1 text-xs text-gray-600">{role}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags?.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </motion.a>
  )
}

function Hero() {
  return (
    <section id="home" className="relative h-[88vh] sm:h-[92vh] pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white" />
      <div className="relative mx-auto max-w-7xl h-full flex items-end sm:items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl pb-10 sm:pb-0"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs">
            <Sparkles size={14} className="text-blue-600" />
            Tech • Portfolio • Interactive • Playful • Modern
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            We design products that feel intuitive, playful, and unmistakably modern.
          </h1>
          <p className="mt-4 text-gray-700 max-w-xl">
            A living showcase of our team and individual explorations — from scalable systems to experimental visuals.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#work" className="rounded-full bg-gray-900 text-white text-sm px-5 py-2.5 shadow hover:shadow-md transition">
              See the work
            </a>
            <a href="#contact" className="rounded-full border border-gray-300 text-gray-900 text-sm px-5 py-2.5 bg-white/70 backdrop-blur hover:bg-white transition">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WorkSection() {
  return (
    <section id="work" className="relative py-16">
      <div className="absolute inset-x-0 top-0 -z-0">
        <div className="pointer-events-none mx-auto h-40 max-w-7xl bg-gradient-to-b from-blue-500/10 via-fuchsia-500/10 to-transparent blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Team projects</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl">
              Cross-functional work where we co-created systems, journeys, and interfaces.
            </p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
            Explore all
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamProjects.map((p, i) => (
            <ProjectCard key={p.title} idx={i} {...p} />
          ))}
        </div>

        <div className="mt-14 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Individual projects</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl">
              Solo explorations to push craft, motion, and generative visuals.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {soloProjects.map((p, i) => (
            <ProjectCard key={p.title} idx={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6"
          >
            <h3 className="text-xl font-semibold tracking-tight">How we work</h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              We blend research, systems thinking, and motion to craft coherent product experiences. We value
              playful exploration as much as rigorous execution — prototypes early, tokens everywhere, and a
              steady cadence of critiques.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6"
          >
            <h3 className="text-xl font-semibold tracking-tight">Toolbox</h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Figma, Framer, Spline, code, and lots of sticky notes. We lean on tokens and component-driven design
              to build once and ship everywhere.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Let’s build something memorable</h3>
              <p className="mt-2 text-sm text-gray-700">Reach out for collaborations, workshops, or design support.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:design@yourcompany.com" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white text-sm px-5 py-2.5">
                <Mail size={16} /> Email
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 text-gray-900 text-sm px-5 py-2.5">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 text-gray-900 text-sm px-5 py-2.5">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Design Collective. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-gray-900">Top</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-white">
      <Nav />
      <Hero />
      <WorkSection />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
