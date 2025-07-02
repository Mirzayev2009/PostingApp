import React, { useState } from "react";
import { FaSearch, FaThLarge, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = ["All Categories", "Design", "UX/UI", "Development"];
const sortOptions = ["Newest First", "Oldest First"];

const Stories = () => {
  const stories = JSON.parse(localStorage.getItem("stories") || "[]");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOrder, setSortOrder] = useState("Newest First");
  const [howToShow, setHowToShow] = useState(false); // false = grid, true = list

  const filteredStories = stories
    .filter(
      (story) =>
        (selectedCategory === "All Categories" ||
          story.category === selectedCategory) &&
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "Newest First" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-xl font-bold text-teal-700">logo</div>
            <a href="/" className="text-sm text-gray-600 hover:text-black">
              ← Back to Home
            </a>
          </div>
          <nav className="hidden md:flex space-x-8 text-gray-600 text-sm font-medium">
            <a href="#" className="hover:text-black">
              Portfolio
            </a>
            <a
              href="#"
              className="text-black font-semibold border-b-2 border-teal-600 pb-1"
            >
              Stories
            </a>
            <a href="#" className="hover:text-black">
              About
            </a>
            <a href="#" className="hover:text-black">
              Contact
            </a>
          </nav>
          <Link to="/login">
            <button className="bg-teal-700 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-teal-800">
              + New Story
            </button>
          </Link>
        </div>
      </header>

      {/* Heading */}
      <section className="text-center mt-12">
        <h1 className="text-3xl font-bold text-gray-900">All Stories</h1>
        <p className="mt-2 text-gray-600 text-sm">
          Explore my creative process, insights, and behind-the-scenes content
          through multimedia stories.
        </p>
      </section>

      {/* Filters + Search */}
      <div className="max-w-7xl mx-auto mt-8 px-4 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm text-gray-700"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm text-gray-700"
          >
            {sortOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>

          {/* Icon Toggle Buttons */}
          <div className="flex space-x-2 ml-2">
            <button
              onClick={() => setHowToShow(false)}
              className={`p-2 border rounded-md ${
                !howToShow
                  ? "bg-teal-700 text-white"
                  : "text-gray-500 hover:text-black"
              }`}
              title="Grid View"
            >
              <FaThLarge />
            </button>
            <button
              onClick={() => setHowToShow(true)}
              className={`p-2 border rounded-md ${
                howToShow
                  ? "bg-teal-700 text-white"
                  : "text-gray-500 hover:text-black"
              }`}
              title="List View"
            >
              <FaList />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search stories..."
            className="w-full border rounded-md px-4 py-2 text-sm pl-10"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Story Cards */}
      <div
        className={`max-w-7xl mx-auto mt-10 px-4 ${
          howToShow ? "flex flex-col gap-6" : "grid grid-cols-1 md:grid-cols-3 gap-6"
        }`}
      >
        {filteredStories.map((story, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-sm overflow-hidden ${
              howToShow ? "flex" : ""
            }`}
          >
            <img
              src={story.featuredImage}
              alt={story.title}
              className={`${
                howToShow ? "w-64 h-48 object-cover" : "w-full h-48 object-cover"
              }`}
            />
            <div className={`${howToShow ? "p-6 flex-1" : "p-4"}`}>
              <span className="text-xs text-teal-700 bg-teal-100 px-2 py-1 rounded-full">
                {story.category}
              </span>
              <p className="text-gray-900 font-semibold mt-2">{story.title}</p>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{story.description}</p>
              <p className="text-xs text-gray-400 mt-2">{story.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe */}
      <section className="max-w-6xl mx-auto mt-20 mb-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Subscribe to My Newsletter</h2>
          <p className="text-gray-600 text-sm mb-4">
            Get notified when I publish new stories and receive exclusive content directly in your inbox.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full border rounded-md px-4 py-2 text-sm mb-2"
          />
          <div className="flex items-center space-x-2 mb-4">
            <input type="checkbox" className="w-4 h-4" />
            <label className="text-sm text-gray-500">I agree to the privacy policy and terms</label>
          </div>
          <button className="w-full bg-teal-700 text-white font-medium py-2 rounded-md hover:bg-teal-800">
            Subscribe Now
          </button>
        </div>

        <div className="text-sm text-gray-700 space-y-3 pt-4">
          <h3 className="text-base font-semibold">What You'll Receive</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Monthly design insights and case studies</li>
            <li>Early access to new stories and projects</li>
            <li>Exclusive resources and design tips</li>
            <li>Special offers for subscribers only</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Stories;
