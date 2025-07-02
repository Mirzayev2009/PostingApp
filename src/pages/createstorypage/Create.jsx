// Create.jsx
import React, { useState } from "react"
import Preview from "./Preview"
import { useNavigate } from "react-router-dom"
import RichTextEditor from "./TextEditor";



const Create = () => {
  const [allowComments, setAllowComments] = useState(false)
  const [featuredStory, setFeaturedStory] = useState(false)
  const [seoOptimization, setSeoOptimization] = useState(false)
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")
  const [publicationDate, setPublicationDate] = useState("2025-07-02")
  const [featuredImage, setFeaturedImage] = useState("")
  const [showPreview, setShowPreview] = useState(false)

  const navigate = useNavigate()

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFeaturedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  const story = {
    title,
    category,
    description,
    content,
    tags: tags.split(",").map((tag) => tag.trim()),
    publicationDate,
    allowComments,
    featuredStory,
    seoOptimization,
    featuredImage,
  }

  // Save to localStorage or send to server here
  
  const existing = JSON.parse(localStorage.getItem("stories") || "[]")
  existing.push(story)
  localStorage.setItem("stories", JSON.stringify(existing))

  alert("Story saved successfully!")
    setTitle("")
    setCategory("")
    setDescription("")
    setContent("")
    setTags("")
    setPublicationDate("2025-07-02")
    setAllowComments(false)
    setFeaturedStory(false)
    setSeoOptimization(false)
    setFeaturedImage("")

    navigate("/stories")
}


  const storyData = {
    title,
    category,
    description,
    content,
    tags: tags.split(",").map((tag) => tag.trim()),
    publicationDate,
    allowComments,
    featuredStory,
    seoOptimization,
    featuredImage,
  }

  if (showPreview) {
    return <Preview story={storyData} onClose={() => setShowPreview(false)} />
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <div className="text-sm text-gray-500 mb-6">
        <a href="/stories" className="hover:underline">&larr; Back to Stories</a>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-700">Create New Story</span>
      </div>

      <h1 className="text-3xl font-bold mb-2">Create New Story</h1>
      <p className="text-sm text-gray-600 mb-10">
        Share your insights, experiences, and creative process with your audience.
      </p>

      <form className="space-y-10" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Story Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a compelling title..."
            className="w-full border rounded-md px-4 py-2 text-sm"
          />
          <p className="text-xs text-gray-400 text-right mt-1">0/100 characters</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-md px-4 py-2 text-sm text-gray-700"
          >
            <option>Select a category</option>
            <option>Design</option>
            <option>Development</option>
            <option>UX/UI</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
          <div className="w-full border-2 border-dashed rounded-md px-6 py-10 text-center text-sm text-gray-500">
            <p className="mb-2">Drag and drop your image here, or click to browse</p>
            <p className="text-xs text-gray-400 mb-3">Recommended size: 1200 × 630 pixels (16:9 ratio)</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="fileUpload"
            />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-md inline-block"
            >
              Browse Files
            </label>
            {featuredImage && (
              <img
                src={featuredImage}
                alt="Preview"
                className="mt-4 rounded-md w-full max-h-64 object-cover"
              />
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Publication Date</label>
          <input
            type="date"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            className="w-full border rounded-md px-4 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description/Excerpt</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a brief summary of your story..."
            className="w-full border rounded-md px-4 py-2 text-sm"
            rows={3}
          ></textarea>
          <p className="text-xs text-gray-400 text-right mt-1">0/200 characters</p>
        </div>

        <RichTextEditor content={content} setContent={setContent} />


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Add tags separated by commas..."
            className="w-full border rounded-md px-4 py-2 text-sm"
          />
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-base font-semibold text-gray-800">Story Settings</h2>

          <div className="flex justify-between items-center border-b pb-4">
            <span className="text-sm text-gray-700">Allow Comments</span>
            <button
              type="button"
              onClick={() => setAllowComments((prev) => !prev)}
              className={`w-12 h-6 rounded-full transition-all duration-300 ${
                allowComments ? "bg-teal-700" : "bg-white border border-gray-300"
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  allowComments ? "translate-x-6 bg-white" : "translate-x-0 bg-gray-400"
                }`}
              />
            </button>
          </div>

          <div className="flex justify-between items-center border-b pb-4">
            <span className="text-sm text-gray-700">Featured Story</span>
            <button
              type="button"
              onClick={() => setFeaturedStory((prev) => !prev)}
              className={`w-12 h-6 rounded-full transition-all duration-300 ${
                featuredStory ? "bg-teal-700" : "bg-white border border-gray-300"
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  featuredStory ? "translate-x-6 bg-white" : "translate-x-0 bg-gray-400"
                }`}
              />
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">SEO Optimization</span>
            <button
              type="button"
              onClick={() => setSeoOptimization((prev) => !prev)}
              className={`w-12 h-6 rounded-full transition-all duration-300 ${
                seoOptimization ? "bg-teal-700" : "bg-white border border-gray-300"
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  seoOptimization ? "translate-x-6 bg-white" : "translate-x-0 bg-gray-400"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-10 justify-between">
           <button type="button" onClick={() => setShowPreview(true)} className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm">
            Preview
          </button>
          <div className="flex gap-5">
            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm">
              Save as Draft
            </button>

              <button
              type="submit"
              className="px-6 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-md text-sm"
            >
              Publish Story
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Create;
