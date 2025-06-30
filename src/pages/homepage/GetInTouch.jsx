import React, { useState } from "react"

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    subscribe: true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted:", formData)
    // Add backend integration or toast here
  }

  return (
    <section className="bg-gray-50 py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I’d love to hear from you.
          Fill out the form below or reach out directly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow p-6 text-left space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-1 text-gray-800">Email</h3>
            <p className="text-gray-600">hello@jameswilson.design</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-gray-800">Phone</h3>
            <p className="text-gray-600">+1 (415) 555-1234</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-gray-800">Location</h3>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Follow Me</h3>
            <div className="flex space-x-3 text-gray-500 text-xl">
              <a href="#"><i className="fab fa-dribbble"></i></a>
              <a href="#"><i className="fab fa-behance"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
            required
          />
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="accent-blue-800"
            />
            <span>Subscribe to my newsletter for design tips and updates</span>
          </label>
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default GetInTouch
