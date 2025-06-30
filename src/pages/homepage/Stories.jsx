import React from "react"

const stories = [
  {
    id: 1,
    image: "/images/story-1.jpg",
    category: "Design",
    date: "June 25, 2025",
    title: "My Design Process: From Concept to Completion",
    excerpt:
      "A detailed look at how I approach new design projects, including research, wireframing, prototyping, and client collaboration.",
  },
  {
    id: 2,
    image: "/images/story-2.jpg",
    category: "UX/UI",
    date: "June 18, 2025",
    title: "5 UX Principles That Transformed My Design Approach",
    excerpt:
      "Exploring the fundamental UX principles that have significantly improved my design work and client satisfaction.",
  },
  {
    id: 3,
    image: "/images/story-3.jpg",
    category: "Development",
    date: "June 10, 2025",
    title: "Creative Coding: Where Art Meets Technology",
    excerpt:
      "My journey into creative coding and how it has influenced my approach to both design and problem solving.",
  },
]

const Stories = () => {
  return (
    <section className="bg-white py-20 px-4" id="stories">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Stories</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-md">
          Explore my creative process, insights, and behind-the-scenes content through multimedia stories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden text-left">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span className="bg-gray-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    {story.category}
                  </span>
                  <span>{story.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {story.excerpt}
                </p>
                <a href="#" className="text-blue-800 text-sm font-medium hover:underline inline-flex items-center">
                  Read more <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="px-6 py-3 text-blue-800 border border-blue-800 rounded-lg font-medium hover:bg-blue-800 hover:text-white transition">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  )
}

export default Stories
