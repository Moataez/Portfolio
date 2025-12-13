"use client"

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true) // Default to dark mode
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    } else {
      // Dark mode is the default
      document.documentElement.classList.add('dark')
      setIsDark(true)
      if (!stored) localStorage.setItem('theme', 'dark')
    }

    const handler = (e) => {
      const nextIsDark = e.matches
      document.documentElement.classList.toggle('dark', nextIsDark)
      setIsDark(nextIsDark)
      localStorage.setItem('theme', nextIsDark ? 'dark' : 'light')
    }

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    if (mq.addEventListener) mq.addEventListener('change', handler)
    else mq.addListener(handler)

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler)
      else mq.removeListener(handler)
    }
  }, [])

  const toggle = () => {
    const nextIsDark = !isDark
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', nextIsDark)
    setIsDark(nextIsDark)
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggle}
      className="relative inline-flex items-center w-16 h-8 rounded-full transition-all duration-300 bg-gray-300 dark:bg-slate-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {/* Moon icon - left side */}
      <span
        className={`absolute left-2 text-lg transition-opacity duration-300 ${
          isDark ? 'opacity-100' : 'opacity-40'
        }`}
      >
        🌙
      </span>

      {/* Sun icon - right side */}
      <span
        className={`absolute right-2 text-lg transition-opacity duration-300 ${
          !isDark ? 'opacity-100' : 'opacity-40'
        }`}
      >
        ☀️
      </span>

      {/* Slider ball */}
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
          isDark ? 'translate-x-1' : 'translate-x-9'
        }`}
      />
    </button>
  )
}
