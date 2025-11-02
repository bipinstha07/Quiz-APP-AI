import { useState } from 'react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-900 flex items-center justify-center">
              <span className="text-white text-sm font-light">Q</span>
            </div>
            <div>
              <h1 className="text-lg font-light text-gray-900 tracking-tight">QuizMaster AI</h1>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light uppercase tracking-wide"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light uppercase tracking-wide"
            >
              About
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light uppercase tracking-wide"
            >
              Contact
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-gray-900 text-white px-6 py-2 hover:bg-gray-800 transition-colors text-xs font-light uppercase tracking-wide">
              Sign In
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light uppercase tracking-wide py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light uppercase tracking-wide py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light uppercase tracking-wide py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button className="bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors text-xs font-light uppercase tracking-wide mt-2 w-full">
                Sign In
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
