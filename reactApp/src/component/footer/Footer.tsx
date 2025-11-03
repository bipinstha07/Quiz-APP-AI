export const Footer = () => {
  return (
    <footer className="bg-white mt-auto">
      {/* Hero CTA Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 tracking-tight">
              Get Unlimited Quizzes Today
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
              Explore the power of AI-generated quizzes. Start for free – no credit card required.
              <br />
              Upgrade only when you're ready to scale.
            </p>
           
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-gray-200">
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
                href="/privacy" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-xs font-light uppercase tracking-wide"
              >
                Privacy
              </a>
              <a 
                href="/terms" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-xs font-light uppercase tracking-wide"
              >
                Terms
              </a>
              <a 
                href="/contact" 
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
      </div>
    </footer>
  )
}
