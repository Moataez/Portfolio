"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { PROFILE } from '../data/profile'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 p-4 flex justify-between items-center bg-gray-200 dark:bg-gray-900 transition-colors shadow-lg">
      <div className="flex items-center space-x-6">
        <MobileMenuToggle />
        <h1 className="text-xl font-bold">Moatez Ouaz</h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-accent transition">Home</Link>
          <Link href="#about" className="hover:text-accent transition">About</Link>
          <Link href="#experience" className="hover:text-accent transition">Experience</Link>
          <Link href="#projects" className="hover:text-accent transition">Projects</Link>
          <Link href="#certifications" className="hover:text-accent transition">Certifications</Link>
          <Link href="#education" className="hover:text-accent transition">Education</Link>
          <Link href="#contact" className="hover:text-accent transition">Contact</Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        {/* Social Links in Header */}
        <div className="hidden lg:flex space-x-3">
          <a
            href={`tel:${PROFILE.phone}`}
            className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition"
            title="Phone"
          >
            📱
          </a>
          <a
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition"
            title="LinkedIn"
          >
            <img
              src="/assets/linkedin-logo.png"
              alt="LinkedIn"
              className="h-6 w-6 object-contain"
            />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition"
            title="Email"
          >
            📧
          </a>
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition"
            title="GitHub"
          >
            💻
          </a>
        </div>

        {/* Resume download button (forces PDF download) */}
        <a
          href="/assets/Moatez_Ouaz_CV.pdf"
          download="Moatez_Ouaz_CV.pdf"
          className="hidden md:inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          title="Download Resume (PDF)"
          aria-label="Download Resume as PDF"
        >
          📄&nbsp;Download Resume
        </a>

        <ThemeToggle />
      </div>
    </header>
  )
}

function MobileMenuToggle() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="px-3 py-2 border rounded"
        title={open ? 'Close menu' : 'Open menu'}
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          className="absolute left-0 right-0 mt-2 bg-gray-200 dark:bg-gray-900 shadow-md rounded-b-lg p-4 flex flex-col items-center space-y-3 z-40"
        >
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="w-full text-center py-2 hover:text-accent transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile resume download button */}
          <a
            href="/assets/Moatez_Ouaz_CV.pdf"
            download="Moatez_Ouaz_CV.pdf"
            className="w-full text-center py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            onClick={() => setOpen(false)}
            title="Download Resume (PDF)"
            aria-label="Download Resume as PDF"
          >
            📄&nbsp;Download Resume (PDF)
          </a>
        </nav>
      )}
    </div>
  )
}
