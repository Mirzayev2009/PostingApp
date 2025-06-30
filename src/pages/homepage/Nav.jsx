import React, { useState } from "react"
import { Menu, X } from "lucide-react"

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Stories", href: "#stories" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="w-full bg-gray-100 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-800 tracking-tight">
          logo
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="hover:text-blue-800 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 pt-2 shadow-md rounded-b-xl">
          <ul className="space-y-4 text-gray-700 font-medium text-base">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-blue-800 transition-colors block"
                  onClick={() => setMenuOpen(false)} // close menu after click
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Nav
