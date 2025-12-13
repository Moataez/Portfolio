"use client";
import { motion } from "framer-motion";

export default function ProfilePhoto() {
  return (
    <motion.div
      className="relative w-64 h-64 mx-auto mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-80"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating decoration circles */}
      <motion.div
        className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-8 -right-6 w-24 h-24 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Circular image container */}
      <motion.div
        className="relative w-full h-full bg-white dark:bg-slate-900 rounded-full shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/assets/IMG_7777-removebg-preview.png"
          alt="Moatez Ouaz"
          className="w-full h-full object-cover rounded-full"
        />

        {/* Shine effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Small floating orbs around the circle */}
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-400 rounded-full mix-blend-multiply filter blur-md opacity-70" />
      <div className="absolute -top-4 right-6 w-8 h-8 bg-purple-400 rounded-full mix-blend-multiply filter blur-md opacity-70" />
      <div className="absolute bottom-6 -right-4 w-6 h-6 bg-pink-400 rounded-full mix-blend-multiply filter blur-md opacity-70" />

      {/* Badge centered below the photo */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Data Scientist 🚀
      </motion.div>
    </motion.div>
  );
}
