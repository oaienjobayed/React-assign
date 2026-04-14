const steps = [
  {
    icon: '👤',
    title: 'Create Account',
    desc: 'Sign up for free in seconds. No credit card required.',
    color: 'bg-purple-100',
  },
  {
    icon: '📦',
    title: 'Choose Products',
    desc: 'Browse our catalog and find tools that fit your needs.',
    color: 'bg-blue-100',
  },
  {
    icon: '🚀',
    title: 'Start Creating',
    desc: 'Download and start using your premium tools immediately.',
    color: 'bg-green-100',
  },
]

const StepsSection = () => (
  <section className="bg-white py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-sm">Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gray-100 z-0" />

        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center relative z-10">
            {/* Circle icon */}
            <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-3xl mb-5 shadow-sm`}>
              {step.icon}
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default StepsSection
