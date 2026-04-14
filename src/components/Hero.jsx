const Hero = () => {
  return (
    <section className="bg-white pt-16 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-50 text-[#7C3AED] text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-purple-100">
            <span className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full"></span>
            New AI-Powered Tools Available
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Supercharge Your <br />
            <span className="text-gray-900">Digital Workflow</span>
          </h1>

          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
            Access premium AI tools, design packs, templates, and productivity software — all in one place. Stop paying for digital tools individually.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => document.getElementById('products-sec').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Explore Products
            </button>
            <button className="flex items-center gap-2 border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg text-sm hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right — Abstract digital illustration */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-80 h-72">
            {/* Background circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl"></div>
            {/* Floating cards */}
            <div className="absolute top-6 left-6 bg-white rounded-2xl shadow-lg p-4 w-36">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-2 text-lg">🤖</div>
              <div className="h-2 bg-gray-100 rounded mb-1 w-20"></div>
              <div className="h-2 bg-gray-100 rounded w-14"></div>
            </div>
            <div className="absolute top-10 right-4 bg-white rounded-2xl shadow-lg p-4 w-32">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mb-2 text-lg">🎨</div>
              <div className="h-2 bg-gray-100 rounded mb-1 w-16"></div>
              <div className="h-2 bg-gray-100 rounded w-12"></div>
            </div>
            <div className="absolute bottom-8 left-10 bg-white rounded-2xl shadow-lg p-4 w-40">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-2 text-lg">📊</div>
              <div className="h-2 bg-gray-100 rounded mb-1 w-24"></div>
              <div className="h-2 bg-gray-100 rounded w-16"></div>
            </div>
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 320 288">
              <circle cx="160" cy="144" r="60" stroke="#7C3AED" strokeWidth="1" fill="none" strokeDasharray="4 4"/>
              <circle cx="160" cy="144" r="100" stroke="#7C3AED" strokeWidth="1" fill="none" strokeDasharray="4 4"/>
            </svg>
            {/* Center icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#7C3AED] rounded-2xl flex items-center justify-center shadow-xl text-2xl">
              ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
