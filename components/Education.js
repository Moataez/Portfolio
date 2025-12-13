"use client";
import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="max-w-4xl mx-auto">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        Education
      </motion.h2>

      <div className="space-y-6">
        {PROFILE.education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="p-8 bg-purple-50 dark:bg-purple-900 rounded-lg border-l-4 border-purple-500 hover:shadow-lg transition-all"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-lg text-purple-600 dark:text-purple-300 font-medium mt-1">
                  {edu.school}
                </p>
              </div>
              {edu.gpa && (
                <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-bold whitespace-nowrap ml-4">
                  GPA: {edu.gpa}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2 text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
              <span>📅 {edu.start} - {edu.end}</span>
            </div>

            {edu.highlights && edu.highlights.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm">
                  Key Courses & Focus Areas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}