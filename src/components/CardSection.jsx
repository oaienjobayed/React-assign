const CartSection = ({ cart, onRemove, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (!cart.length) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="border-2 border-dashed border-gray-200 rounded-2xl p-16 text-center">
          <div className="text-5xl mb-4 opacity-30">🛒</div>
          <p className="font-bold text-gray-400 text-lg">Your cart is empty</p>
          <p className="text-gray-400 text-sm mt-1">Add products to get started</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Cart items container with dashed border */}
      <div className="border-2 border-dashed border-[#7C3AED] rounded-2xl p-5 mb-4">
        <p className="text-xs text-gray-400 mb-4">Your Cart</p>
        <div className="flex flex-col gap-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-3"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {item.icon}
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 text-sm truncate">{item.name}</div>
                <div className="text-[#7C3AED] font-bold text-sm">${item.price}</div>
              </div>
              {/* Remove */}
              <button
                onClick={() => onRemove(item.id)}
                className="text-xs text-red-500 hover:text-red-700 font-semibold hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors border border-transparent hover:border-red-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
          <span className="text-sm text-gray-500 font-medium">
            {cart.length} item{cart.length > 1 ? 's' : ''}
          </span>
          <span className="text-xl font-extrabold text-gray-900">${total}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-3.5 rounded-xl font-bold text-sm transition-colors active:scale-[0.98]"
      >
        Proceed To Checkout
      </button>
    </div>
  )
}

export default CartSection
