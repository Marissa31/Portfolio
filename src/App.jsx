import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// ---------- Data (edit these) ----------
const NAME = "Marissa Aram";
const LOCATION = "Roumieh, Mount Lebanon, Lebanon";
const JOB_TAGLINE = "Web Developer • Content Creator • Tutor";
const TUTORING_EXP = "5+ years";

const projects = [
  {
    title: "Interactive Portfolio UI",
    desc: "A responsive React + Tailwind portfolio with animations and CMS-ready sections.",
    tags: ["React", "Tailwind", "Animation"],
    link: "#",
  },
  {
    title: "AI-powered Study Planner",
    desc: "Small web app that generates study plans using AI prompts for Grade 9 & 12 students.",
    tags: ["React", "AI", "EdTech"],
    link: "#",
  },
  {
    title: "E-Learning Landing Page",
    desc: "Marketing landing page for tutoring services with conversion-focused layout.",
    tags: ["Design", "SEO", "Copy"],
    link: "#",
  },
  {
    title: "Interactive Data Viz",
    desc: "Animated charts & storytelling UI built for a client case study.",
    tags: ["D3", "React"],
    link: "#",
  },
];

const testimonials = [
  {
    name: "Samar (Parent)",
    quote: "Marissa helped my daughter increase her grades and confidence — exam-ready in weeks!",
  },
  {
    name: "Rami (Student)",
    quote: "Clear explanations and real practice — perfect for Grade 12 final prep.",
  },
];

// ---------- Motion variants ----------
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ---------- Small UI helpers ----------
function Tag({ children }) {
  return (
    <span className="inline-block text-xs px-2 py-1 rounded-full border border-white/10 backdrop-blur-sm bg-white/5 mr-2">
      {children}
    </span>
  );
}

// ---------- Main component ----------
export default function MarissaPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] via-[#081028] to-[#071021] text-slate-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-black font-bold">MA</div>
          <div>
            <div className="text-lg font-semibold">{NAME}</div>
            <div className="text-xs text-slate-400">{JOB_TAGLINE}</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#webdev" className="hover:text-white">Web Dev</a>
          <a href="#tutoring" className="hover:text-white">Tutoring</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <motion.div initial="hidden" animate="show" variants={container}>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold leading-tight">
                Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">{NAME}</span>
                <br />
                <span className="text-xl md:text-2xl font-medium text-slate-300">{JOB_TAGLINE}</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-slate-300 max-w-xl">
                I build modern, interactive websites and create engaging digital content. I also tutor students across Lebanese,
                English, and French programs with over <strong>{TUTORING_EXP}</strong> of experience helping students ace official exams.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex gap-4">
                <a href="#projects" className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 text-black font-semibold shadow-lg transform hover:scale-[1.02] transition">
                  View My Work
                </a>
                <a href="#contact" className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 text-slate-200 hover:bg-white/5 transition">
                  Hire Me as a Tutor
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-6 text-sm text-slate-400">
                Based in <span className="text-slate-200">{LOCATION}</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative mx-auto w-full max-w-sm">
              <div className="rounded-3xl p-6 bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm border border-white/10">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60" alt="Marissa" className="w-full rounded-2xl shadow-lg" />
                <div className="mt-4">
                  <div className="font-semibold text-lg">{NAME}</div>
                  <div className="text-sm text-slate-300">{JOB_TAGLINE}</div>
                </div>
                <div className="mt-4 flex gap-3">
                  <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/8"><FaLinkedin /></a>
                  <a aria-label="Github" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/8"><FaGithub /></a>
                  <a aria-label="Instagram" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/8"><FaInstagram /></a>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 rotate-6 w-36 h-36 rounded-2xl bg-gradient-to-br from-indigo-400 to-pink-400 opacity-30 blur-3xl" />
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold">About Me</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-slate-300 max-w-3xl">
              I’m a web developer and educator who loves combining clean UI, micro-interactions, and storytelling to build memorable
              experiences. I specialize in React, TailwindCSS, and modern front-end patterns while using AI tools to speed up workflows.
              When I’m not coding, I’m tutoring students across Lebanese, English, and French curricula — helping them prepare for Grade
              9 & 12 official exams and reach their goals.
            </motion.p>
          </motion.div>
        </section>

        {/* TWO EXPERTISE COLUMNS */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Web Dev Column */}
          <motion.div id="webdev" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-black">W</div>
              <div>
                <h3 className="text-xl font-semibold">Web Development</h3>
                <p className="mt-2 text-slate-300">Building production-ready websites and interactive apps using modern tooling and UX best practices.</p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
                  <li>React & Next.js</li>
                  <li>TailwindCSS & Design Systems</li>
                  <li>Animations & Framer Motion</li>
                  <li>Responsive & Accessibility</li>
                </ul>

                <div className="mt-6 flex gap-3">
                  <a href="#projects" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">See Projects</a>
                  <a href="#contact" className="px-4 py-2 rounded-xl border border-white/10">Hire Me</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tutoring Column */}
          <motion.div id="tutoring" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center font-bold text-black">T</div>
              <div>
                <h3 className="text-xl font-semibold">Tutoring & Teaching</h3>
                <p className="mt-2 text-slate-300">Professional tutoring across Lebanese, English & French curricula. Personalized plans and exam-focused coaching.</p>
                <div className="mt-4 text-slate-300 text-sm">
                  <strong>{TUTORING_EXP} experience</strong>
                  <ul className="mt-2 ml-4 list-disc">
                    <li>Grades: All grades (special focus on Grade 9 & 12 official exams)</li>
                    <li>Subjects: Math, Science, Languages, and More</li>
                    <li>Languages of Instruction: Arabic (Lebanese), English, French</li>
                    <li>Custom learning plans, mocks, and progress tracking</li>
                  </ul>
                </div>

                <div className="mt-6 flex gap-3">
                  <a href="#contact" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">Book a Session</a>
                  <a href="#contact" className="px-4 py-2 rounded-xl border border-white/10">Schedule Call</a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-14">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold">Selected Projects</motion.h2>
          <motion.div initial="hidden" whileInView="show" variants={container} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div variants={fadeUp} key={i} className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/5 border border-white/8 backdrop-blur-sm hover:scale-[1.01] transition">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
                    <div className="mt-3">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                  <a href={p.link} className="ml-4 text-sm px-3 py-2 rounded-lg border border-white/10">View</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Services */}
        <section className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/5 border border-white/8 backdrop-blur-sm">
            <h4 className="font-semibold">Web Dev Services</h4>
            <p className="mt-2 text-slate-300 text-sm">Responsive websites, interactive UI, performance and accessibility-focused builds, AI integrations.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/5 border border-white/8 backdrop-blur-sm">
            <h4 className="font-semibold">Tutoring Services</h4>
            <p className="mt-2 text-slate-300 text-sm">Academic support for all subjects, Grade 9 & 12 exam prep, progress tracking, and mock exams.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/5 border border-white/8 backdrop-blur-sm">
            <h4 className="font-semibold">Content & Strategy</h4>
            <p className="mt-2 text-slate-300 text-sm">Short-form educational content, course outlines, and curriculum-aligned lesson plans for students.</p>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="mt-14">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold">Testimonials</motion.h2>
          <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote key={i} className="p-6 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/8">
                <p className="text-slate-200">"{t.quote}"</p>
                <cite className="mt-4 block text-sm text-slate-300">- {t.name}</cite>
              </motion.blockquote>
            ))}
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14 mb-20">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold">Contact</motion.h2>

          <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/5 border border-white/8 backdrop-blur-sm">
              <h4 className="font-semibold">Let’s work together</h4>
              <p className="mt-3 text-slate-300 text-sm">Available for full-time, freelance, and tutoring roles. Open to remote and local clients in Lebanon.</p>

              <div className="mt-6 flex gap-3">
                <a href="#" aria-label="email" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10"><HiOutlineMail /> Message</a>
              </div>

              <div className="mt-6 text-sm text-slate-400">Follow</div>
              <div className="mt-2 flex gap-3">
                <a href="#" aria-label="linkedin" className="p-2 rounded-lg bg-white/5"><FaLinkedin /></a>
                <a href="#" aria-label="github" className="p-2 rounded-lg bg-white/5"><FaGithub /></a>
                <a href="#" aria-label="instagram" className="p-2 rounded-lg bg-white/5"><FaInstagram /></a>
                <a href="#" aria-label="youtube" className="p-2 rounded-lg bg-white/5"><FaYoutube /></a>
              </div>
            </div>

            <form className="md:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/5 border border-white/8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="p-3 rounded-lg bg-transparent border border-white/10 outline-none" placeholder="Your name*" />
                <input className="p-3 rounded-lg bg-transparent border border-white/10 outline-none" placeholder="Your email*" />
              </div>
              <textarea className="w-full mt-4 p-3 rounded-lg bg-transparent border border-white/10 outline-none" rows={6} placeholder="Message*"></textarea>
              <div className="mt-4 flex items-center gap-3">
                <button type="submit" className="px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 text-black font-semibold">Send Message</button>
                <button type="button" className="px-4 py-2 rounded-2xl border border-white/10">Book a Tutoring Session</button>
              </div>
            </form>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="mt-10 py-8 border-t border-white/6 text-slate-400 text-sm">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              © {new Date().getFullYear()} {NAME}. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}