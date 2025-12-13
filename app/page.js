"use client";

import { motion } from "framer-motion";
import Certifications from "../components/Certifications";
import ContactLinks from "../components/ContactLinks";
import Projects from "../components/Projects";
import ExperienceSection from "../components/ExperienceSection";
import ProfilePhoto from "../components/ProfilePhoto";
import Skills from "../components/Skills";
import Education from "../components/Education";

export default function Page() {
  return (
    <main className="px-6 md:px-20 lg:px-40 py-24 space-y-40 bg-white dark:bg-slate-950">

      {/* ============================== */}
      {/* HERO SECTION */}
      {/* ============================== */}
      <section className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-primary dark:text-blue-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm <span className="text-accent">Moatez Ouaz</span> 👋
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          2nd Year Student– Master in Data Science.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block mt-10 px-8 py-4 bg-accent text-white font-semibold rounded-xl shadow-lg hover:bg-primary transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Let's Work Together 🚀
        </motion.a>
      </section>

      {/* ============================== */}
      {/* ABOUT SECTION */}
      {/* ============================== */}
      <section id="about" className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="section-title text-left"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              I am a Master's student in Data Science with strong foundations in software engineering.
              Skilled in AI, backend & frontend development and cloud technologies.
            </motion.p>

            <motion.p
              className="text-slate-600 dark:text-slate-400 text-base leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              With hands-on experience in building full-stack applications and developing machine learning models,
               I'm passionate about solving complex problems with innovative solutions.
            </motion.p>
          </motion.div>

          {/* Right side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </section>

      {/* ============================== */}
      {/* EXPERIENCE SECTION */}
      {/* ============================== */}
      <ExperienceSection />

      {/* ============================== */}
      {/* SKILLS SECTION */}
      {/* ============================== */}
      <Skills />

      {/* ============================== */}
      {/* PROJECTS SECTION */}
      {/* ============================== */}
      <Projects />

      {/* ============================== */}
      {/* CERTIFICATIONS SECTION */}
      {/* ============================== */}
      <Certifications />

      {/* ============================== */}
      {/* EDUCATION SECTION */}
      {/* ============================== */}
      <Education />

      {/* ============================== */}
      {/* LANGUAGES */}
      {/* ============================== */}
      <section id="languages">
        <motion.h2 className="section-title">Languages</motion.h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="card">Arabic — Native</div>
          <div className="card">English — Proficient</div>
          <div className="card">French — Advanced</div>
        </div>
      </section>

      {/* ============================== */}
      {/* CONTACT SECTION */}
      {/* ============================== */}
      <section id="contact" className="text-center">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Get In Touch
        </motion.h2>

        <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
          I'm always open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
        </p>

        <ContactLinks />
      </section>
    </main>
  );
}
