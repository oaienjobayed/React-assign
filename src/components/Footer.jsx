const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 pt-14 pb-6 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="text-[#A78BFA] font-bold text-xl mb-3">DigiTools</div>
          <p className="text-sm leading-relaxed text-gray-500 max-w-[200px]">
            Premium digital tools for creators, professionals, and enterprises.
          </p>
          {/* Social Links */}
          <div className="flex gap-2 mt-4">
            {['f', 'in', 'tw'].map((s, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-[#7C3AED] rounded-lg flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          {
            title: 'Product',
            links: ['Features', 'Pricing', 'Templates', 'Integrations'],
          },
          {
            title: 'Company',
            links: ['About', 'Blog', 'Press'],
          },
          {
            title: 'Resources',
            links: ['Documentation', 'Community', 'Help Center', 'Contact'],
          },
          {
            title: 'Social Links',
            links: ['Twitter', 'LinkedIn', 'Facebook'],
          },
        ].map((col, i) => (
          <div key={i}>
            <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
            {col.links.map((link, j) => (
              <a
                key={j}
                href="#"
                className="block text-gray-500 hover:text-white text-sm mb-2.5 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
        <span>© 2024 DigiTools. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
