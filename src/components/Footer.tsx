import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1D34] border-t border-white/10 mt-20">
      {/* Subtle math background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,20 50,50 T100,50" stroke="currentColor" fill="none" strokeWidth="0.5" />
          <circle cx="20" cy="30" r="5" stroke="currentColor" fill="none" strokeWidth="0.5" />
          <circle cx="80" cy="70" r="5" stroke="currentColor" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2F6FED] to-[#A9C7FF] rounded-lg flex items-center justify-center">
                <span className="text-white">π</span>
              </div>
              <span className="tracking-wide">StudySouq</span>
            </div>
            <p className="text-[#94A3B8] text-sm">
              Learn Edexcel Maths with Clarity & Confidence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-[#94A3B8] hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link to="/subjects" className="block text-[#94A3B8] hover:text-white text-sm transition-colors">
                Subjects
              </Link>
              <Link to="/pricing" className="block text-[#94A3B8] hover:text-white text-sm transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-[#94A3B8] hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-[#94A3B8] hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-[#94A3B8] hover:text-white text-sm transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-[#94A3B8] text-sm">
          <p>&copy; {new Date().getFullYear()} StudySouq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
