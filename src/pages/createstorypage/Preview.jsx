import React, { useState } from "react"
import { FaTimes, FaDesktop, FaTabletAlt, FaMobileAlt } from "react-icons/fa"

const Preview = ({ story, onClose }) => {
  const [device, setDevice] = useState("desktop")

  const deviceStyles = {
    desktop: "w-full md:w-[800px]",
    tablet: "w-[600px]",
    mobile: "w-[360px]"
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Story Preview</h2>

        {/* Device controls */}
        <div className="flex items-center gap-3">
          <button
            className={`p-2 rounded-full hover:bg-gray-200 ${device === "desktop" ? "bg-teal-700 text-white" : "bg-white text-gray-700"}`}
            onClick={() => setDevice("desktop")}
            title="Desktop view"
          >
            <FaDesktop />
          </button>
          <button
            className={`p-2 rounded-full hover:bg-gray-200 ${device === "tablet" ? "bg-teal-700 text-white" : "bg-white text-gray-700"}`}
            onClick={() => setDevice("tablet")}
            title="Tablet view"
          >
            <FaTabletAlt />
          </button>
          <button
            className={`p-2 rounded-full hover:bg-gray-200 ${device === "mobile" ? "bg-teal-700 text-white" : "bg-white text-gray-700"}`}
            onClick={() => setDevice("mobile")}
            title="Mobile view"
          >
            <FaMobileAlt />
          </button>

          {/* Close */}
          <button
            className="ml-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
            onClick={onClose}
            title="Close preview"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex justify-center px-4 py-10">
        <div className={`bg-white shadow-md p-6 rounded-md ${deviceStyles[device]}`}>
          {story?.featuredImage && (
            <img
              src={story.featuredImage}
              alt="Featured"
              className="mb-6 rounded-md w-full max-h-64 object-cover"
            />
          )}
          <h1 className="text-2xl font-bold mb-2">{story?.title || "Story Title"}</h1>
          <p className="text-sm text-gray-500 mb-4">
            {story?.category || "Category"} • {story?.publicationDate || "Date"}
          </p>
          <p className="text-gray-700 mb-6">{story?.description || "Story excerpt will appear here..."}</p>
          <div className="prose max-w-none text-gray-800">
            {story?.content || "Start writing your story here..."}
          </div>
        </div>
      </div>
    </div>
  )
}



export default Preview

