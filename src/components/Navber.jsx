import { useState } from 'react'

const Navbar = ({ cartCount, onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="text-[#7C3AED] font-bold text-xl tracking-tight">
          DigiTools
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-600">
          <a href="#" className="hover:text-[#7C3AED] transition-colors">Products</a>
          <a href="#" className="hover:text-[#7C3AED] transition-colors">Features</a>
          <a href="#pricing-sec" className="hover:text-[#7C3AED] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#7C3AED] transition-colors">Testimonials</a>
          <a href="#" className="hover:text-[#7C3AED] transition-colors">FAQ</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#7C3AED] transition-colors px-3 py-1.5 rounded-lg hover:bg-purple-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#7C3AED] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <a href="#" className="hidden md:block text-sm text-gray-600 hover:text-[#7C3AED] transition-colors">
            Login
          </a>
          <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
