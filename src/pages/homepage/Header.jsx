import React from "react"

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-[#330354] to-[#540b89] min-h-[100vh] flex items-center px-6 sm:px-12">
      {/* Curved background layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 w-full h-[45vh] bg-gradient-to-tr from-gray-100 to-transparent rounded-t-[100px] md:rounded-t-[200px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          James Wilson
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Visual Designer & Creative Developer
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-teal-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow transition">
            View Portfolio
          </button>
          <button className="bg text-white hover:text-teal-700 px-6 py-3 rounded-lg text-lg font-semibold border shadow transition opacity-95">
           <p className="opacity-100"> Read Stories</p>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

