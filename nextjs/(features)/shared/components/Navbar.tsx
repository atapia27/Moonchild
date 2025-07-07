'use client'

import Link from 'next/link'
import { useState } from 'react'
import NavButton from './navButton'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { text: 'Home', href: '/' },
    { text: 'Posts', href: '/' },
    { text: 'Notes', href: '/' },
  ]
  return (
    <nav className="border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="min-w-screen">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              <span className="text-2xl">🌙</span>
              <span>Moonchild</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            {navItems.map(({ text, href }) => (
              <NavButton key={text} text={text} href={href} />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:text-gray-300 dark:hover:text-blue-400 dark:focus:text-blue-400"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex items-center justify-center space-x-8 border-t border-gray-200 p-2 sm:px-3 dark:border-gray-700">
              {navItems.map(({ text, href }) => (
                <NavButton
                  key={text}
                  text={text}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
