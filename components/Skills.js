"use client";
import { motion } from 'framer-motion'
import { PROFILE } from '../data/profile'

export default function Skills(){
  return (
    <section id="skills" className="max-w-5xl mx-auto">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        Technical Skills
      </motion.h2>

      {/* Technical Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {PROFILE.skills.technical.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-lg border border-purple-200 dark:border-purple-700"
      >
        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6">
          Professional & Soft Skills
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {PROFILE.skills.soft.map((skill, i) => (
            <motion.div
              key={i}
              className="flex items-center space-x-3"
              whileHover={{ x: 5 }}
            >
              <span className="text-2xl">✨</span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}