const plans = [
  {
    tier: 'Starter',
    desc: 'Perfect for getting started',
    price: '$0',
    period: '/Month',
    featured: false,
    features: [
      'Access to 5 templates',
      'Basic analytics',
      'Community support',
      'Core tools (limit)',
    ],
    cta: 'Get Started Free',
  },
  {
    tier: 'Pro',
    desc: 'Best for professionals',
    price: '$29',
    period: '/Month',
    featured: true,
    features: [
      'All tools and premium tools',
      'Advanced analytics',
      'Priority support',
      'Monthly updates',
      'Email sets',
      'Advanced pipeline',
    ],
    cta: 'Start Pro Trial',
  },
  {
    tier: 'Enterprise',
    desc: 'For large businesses',
    price: '$99',
    period: '/Month',
    featured: false,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    cta: 'Contact Sales',
  },
]

const PricingSection = () => (
  <section className="bg-white py-16 px-6" id="pricing-sec">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-sm">
          To be honest, this is too good. Try it before changing to a paid plan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-2xl p-7 flex flex-col gap-4 transition-all ${
              plan.featured
                ? 'bg-[#7C3AED] text-white shadow-2xl shadow-purple-200 scale-105'
                : 'bg-white border border-gray-200 hover:shadow-md'
            }`}
          >
            {/* Badge */}
            {plan.featured && (
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full w-fit">
                Most Popular
              </span>
            )}

            <div>
              <div className={`font-bold text-lg mb-0.5 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                {plan.tier}
              </div>
              <div className={`text-xs ${plan.featured ? 'text-purple-200' : 'text-gray-400'}`}>
                {plan.desc}
              </div>
            </div>

            <div className="flex items-baseline gap-1">
              <span className={`text-4xl font-extrabold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                {plan.price}
              </span>
              <span className={`text-sm ${plan.featured ? 'text-purple-200' : 'text-gray-400'}`}>
                {plan.period}
              </span>
            </div>

            <hr className={plan.featured ? 'border-purple-400' : 'border-gray-100'} />

            <ul className="flex flex-col gap-2.5 flex-1">
              {plan.features.map((f, j) => (
                <li key={j} className={`flex items-center gap-2.5 text-sm ${plan.featured ? 'text-purple-100' : 'text-gray-500'}`}>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 ${plan.featured ? 'text-white' : 'text-[#7C3AED]'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`mt-2 py-3 rounded-xl font-semibold text-sm transition-all active:scale-95 ${
                plan.featured
                  ? 'bg-white text-[#7C3AED] hover:bg-purple-50'
                  : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default PricingSection
