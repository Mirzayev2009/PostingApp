import React from "react"
import { Link } from "react-router-dom"


const Stories = () => {

  const stories = JSON.parse(localStorage.getItem('stories'))


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
                src={story.featuredImage}
                alt={story.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span className="bg-gray-100 text-teal-700 px-3 py-1 rounded-full font-medium">
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
                <a href="#" className="text-teal-700 text-sm font-medium hover:underline inline-flex items-center">
                  Read more <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
         
         <Link to="/stories">
          <button className="px-6 py-3 text-teal-700 border border-teal-700 rounded-lg font-medium hover:bg-teal-700 hover:text-white transition">
            View All Stories
          </button>
         </Link>
        </div>
      </div>
    </section>
  )
}

export default Stories
