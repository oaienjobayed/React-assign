import { useState } from 'react'

const tagStyles = {
  bestseller: { bg: 'bg-orange-100 text-orange-700', label: 'Best Seller' },
  popular: { bg: 'bg-purple-100 text-purple-700', label: 'Popular' },
  new: { bg: 'bg-blue-100 text-blue-700', label: 'New' },
  premium: { bg: 'bg-yellow-100 text-yellow-700', label: 'Premium' },
}

const ProductCard = ({ product, onAdd }) => {
  const [added, setAdded] = useState(false)
  const tag = tagStyles[product.tagType] || tagStyles.new

  const handleBuy = () => {
    onAdd(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 relative">
      {/* Tag */}
      <div className="absolute top-4 right-4">
        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${tag.bg}`}>
          {product.tag}
        </span>
      </div>

      {/* Icon + Name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
          {product.icon}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-sm leading-tight">{product.name}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-xs leading-relaxed">{product.description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-xs">/ {product.period}</span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-1.5 flex-1">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
            <svg className="w-3.5 h-3.5 text-[#7C3AED] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Buy Button */}
      <button
        onClick={handleBuy}
        className={`mt-2 w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
          added
            ? 'bg-green-500 text-white scale-95'
            : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white active:scale-95'
        }`}
      >
        {added ? '✓ Added to Cart' : 'Buy Now'}
      </button>
    </div>
  )
}

export default ProductCard
