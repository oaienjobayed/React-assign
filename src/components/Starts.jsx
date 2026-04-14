const Stats = () => (
  <section className="bg-[#7C3AED] py-10 px-6">
    <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-purple-400">
      {[
        { num: '50K+', label: 'Active Users' },
        { num: '200+', label: 'Premium Tools' },
        { num: '4.9', label: 'Rating' },
      ].map((s, i) => (
        <div key={i} className="text-center px-8 py-2">
          <div className="text-white text-3xl md:text-4xl font-extrabold mb-1">{s.num}</div>
          <div className="text-purple-200 text-sm font-medium">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
)

export default Stats
