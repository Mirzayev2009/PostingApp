import React from "react"
import {
  FaDribbble,
  FaBehance,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-white mb-6 md:mb-0">logo</div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-sm font-medium text-gray-300">
          <li className="hover:text-white cursor-pointer">Portfolio</li>
          <li className="hover:text-white cursor-pointer">Stories</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>

      <div className="border-t border-gray-700 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 James Wilson. All rights reserved.</p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white" aria-label="Dribbble">
              <FaDribbble className="text-xl" />
            </a>
            <a href="#" className="hover:text-white" aria-label="Behance">
              <FaBehance className="text-xl" />
            </a>
            <a href="#" className="hover:text-white" aria-label="Instagram">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn">
              <FaLinkedin className="text-xl" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-gray-800 hover:bg-gray-700 rounded-full p-2"
              title="Back to top"
            >
              <FaArrowUp className="text-white text-sm" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

