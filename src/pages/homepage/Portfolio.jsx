import React, { useState } from "react"
import Masonry from "react-masonry-css"

const categories = ["All", "UX/UI Design", "Development", "Branding", "Photography"]

const portfolioItems = [
  { id: 1, category: "UX/UI Design", image: "https://picsum.photos/400/300?1" },
  { id: 2, category: "Development", image: "https://picsum.photos/400/300?2" },
  { id: 3, category: "Branding", image: "https://picsum.photos/400/300?3" },
  { id: 4, category: "Photography", image: "https://picsum.photos/400/300?4" },
  { id: 5, category: "Development", image: "https://picsum.photos/400/300?5" },
  { id: 6, category: "Photography", image: "https://picsum.photos/400/300?6" },
  { id: 7, category: "UX/UI Design", image: "https://picsum.photos/400/300?7" },
  { id: 8, category: "Branding", image: "https://picsum.photos/400/300?8" },
]

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

const filteredItems = selectedCategory === "All"
? portfolioItems : portfolioItems.filter((item)=> item.category === selectedCategory)

  return (
    <section className="bg-gray-50 py-20 px-4" id="portfolio">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Portfolio</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-md">
          A curated selection of my latest projects showcasing my skills in design,
          development, and creative direction.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg border text-lg font-medium transition ${
                selectedCategory === cat
                  ? "bg-teal-700 text-white border-teal-700"
                  : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="masonry-column"
        >
          {filteredItems.map((item) => (
            <div key={item.id} className="mb-6 overflow-hidden rounded-xl shadow-sm">
              <img
                src={item.image}
                alt={`Project ${item.id}`}
                className="w-full object-cover rounded-lg hover:scale-[1.03] transition-transform duration-300"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  )
}

export default Portfolio
