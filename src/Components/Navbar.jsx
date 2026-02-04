import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-amber-900 top-0 right-0 fixed z-50 w-full text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-amber-50">Hasib's Coffee</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-amber-200 transition-colors duration-200">
              Home
            </a>
            <a href="#menu" className="hover:text-amber-200 transition-colors duration-200">
              Menu
            </a>
            <a href="#about" className="hover:text-amber-200 transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="hover:text-amber-200 transition-colors duration-200">
              Contact
            </a>
            <button className="bg-amber-700 hover:bg-amber-600 px-4 py-2 rounded-lg transition-colors duration-200">
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-amber-50 hover:text-amber-200 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-800 rounded-lg mt-2">
              <a
                href="#home"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-700 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#menu"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-700 transition-colors duration-200"
              >
                Menu
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-700 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-700 transition-colors duration-200"
              >
                Contact
              </a>
              <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-amber-700 hover:bg-amber-600 transition-colors duration-200">
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;