export const Footer = () => {
  return (
    <footer className="bg-white mt-auto border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-gray-900 flex items-center justify-center">
              <span className="text-white text-xs font-light">Q</span>
            </div>
            <span className="text-sm font-light text-gray-900 tracking-tight">QuizMaster AI</span>
          </div>

          {/* Center: Links */}
          <nav className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-xs font-light uppercase tracking-wide"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-xs font-light uppercase tracking-wide"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-xs font-light uppercase tracking-wide"
            >
              Contact
            </a>
          </nav>

          {/* Right: Copyright */}
          <div className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} QuizMaster. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
