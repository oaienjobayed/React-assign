const CTASection = () => (
  <section className="bg-[#7C3AED] py-16 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
        Ready To Transform Your Workflow?
      </h2>
      <p className="text-purple-200 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
        Join thousands who are using DigiTools to work smarter, create faster and make more. Start your free trial today.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <button
          onClick={() => document.getElementById('products-sec').scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-[#7C3AED] font-bold px-7 py-3 rounded-xl text-sm hover:bg-purple-50 transition-colors"
        >
          Explore Products
        </button>
        <a
          href="#pricing-sec"
          className="border border-white/30 text-white font-semibold px-7 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors"
        >
          View Pricing
        </a>
      </div>
      <p className="text-purple-300 text-xs mt-5">
        No credit card required • Cancel anytime • Instant access
      </p>
    </div>
  </section>
)

export default CTASection
