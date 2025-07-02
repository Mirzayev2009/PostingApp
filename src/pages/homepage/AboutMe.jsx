import React from "react"

const AboutMe = () => {
  return (
    <section className="py-20 px-4 bg-white" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://picsum.photos/400/300?8"
            alt="Profile"
            className="rounded-2xl w-full object-cover shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 mb-4">
            I'm James Wilson, a visual designer and creative developer with over 8 years
            of experience crafting digital experiences that balance aesthetics with
            functionality. Based in San Francisco, I work with clients globally to bring
            their visions to life through thoughtful design and clean code.
          </p>
          <p className="text-gray-700 mb-8">
            My approach combines strategic thinking with creative execution, ensuring that
            every project not only looks beautiful but also achieves its business
            objectives. I believe in the power of minimalist design principles, focusing
            on what truly matters and eliminating unnecessary complexity.
          </p>

          {/* Skills and Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Skills</h3>
              <ul className="text-gray-700 space-y-1 list-disc list-inside">
                <li>UX/UI Design</li>
                <li>Frontend Development</li>
                <li>Brand Identity</li>
                <li>Interaction Design</li>
                <li>Prototyping</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Tools & Technologies</h3>
              <ul className="text-gray-700 space-y-1 list-disc list-inside">
                <li>Figma, Adobe Creative Suite</li>
                <li>HTML, CSS, JavaScript</li>
                <li>React, Vue, Svelte</li>
                <li>Tailwind CSS, SCSS</li>
                <li>Framer Motion, GSAP</li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-teal-700 hover:bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
