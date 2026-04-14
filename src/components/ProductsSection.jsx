import products from '../data/products.json'
import ProductCard from './ProductCard'
import CartSection from './CartSection'

const ProductsSection = ({ view, setView, cart, onAdd, onRemove, onCheckout }) => {
  return (
    <section id="products-sec" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Choose from our curated collection of premium digital tools for every creator and enterprise
          </p>

          {/* Toggle Buttons */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setView('products')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                view === 'products'
                  ? 'bg-[#7C3AED] text-white'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED]'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setView('cart')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                view === 'cart'
                  ? 'bg-[#7C3AED] text-white'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED]'
              }`}
            >
              Cart
              {cart.length > 0 && (
                <span className={`text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ${view === 'cart' ? 'bg-white text-[#7C3AED]' : 'bg-[#7C3AED] text-white'}`}>
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {view === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAdd} />
            ))}
          </div>
        )}

        {/* Cart View */}
        {view === 'cart' && (
          <CartSection cart={cart} onRemove={onRemove} onCheckout={onCheckout} />
        )}
      </div>
    </section>
  )
}

export default ProductsSection
