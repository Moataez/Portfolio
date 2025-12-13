"use client";
import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        Featured Projects
      </motion.h2>

      <div className="space-y-8">
        {PROFILE.projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-accent"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <span className="text-sm font-semibold text-accent">
                {project.date}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              {project.summary}
            </p>

            {project.bullets && (
              <ul className="space-y-2 mb-4">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-600 dark:text-gray-400"
                  >
                    <span className="mr-3 text-accent">▪</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {project.tech && (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}