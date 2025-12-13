"use client";
import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {PROFILE.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-lg border-l-4 border-accent hover:shadow-lg transition-all"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-lg text-accent font-semibold">
                  {exp.employer}
                </p>
              </div>
              <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium whitespace-nowrap">
                {exp.start} - {exp.end}
              </span>
            </div>

            <ul className="space-y-3 mt-4">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start text-gray-700 dark:text-gray-300"
                >
                  <span className="mr-3 text-accent text-lg">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
