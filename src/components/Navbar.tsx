import  { useState, useEffect } from 'react';
import { FaAnchor } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav style={{
      background: 'linear-gradient(to right, #010203, #0c4a6e)', // Dark gradient
    }} className="h-24 sticky top-0 z-99 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="mr-auto pl-0 ml-0 -z-50">
          <div className="flex items-center">
            <img src="images/tefnut_logo.png" alt="" className="w-26 h-25 object-contain" />
            <img 
              src="images/Tefnut Marine.png" 
              alt="Tefnut Logo" 
              className="w-36 h-12 object-contain bg-transparent select-none"
              style={{ imageRendering: 'auto' }}
            />
          </div>
        </div>

        {/* Desktop navigation - Text color updated for dark background */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex space-x-6">
            <a href="/" className="text-white hover:text-[#66ccff] px-3 py-2 text-base font-medium">
              Home
            </a>
            <a href="/services" className="text-white hover:text-[#66ccff] px-3 py-2 text-base font-medium">
              Services
            </a>
            <a href="/about" className="text-white hover:text-[#66ccff] px-3 py-2 text-base font-medium">
              About Us
            </a>
            <a href="/contact" className="text-white hover:text-[#66ccff] px-3 py-2 text-base font-medium">
              Contact
            </a>
          </div>
        </div>

        {/* CTA Button - Updated for better contrast */}
        <div className="hidden md:block">
        <a href="/contact">
          <button className="bg-[#04878f] hover:bg-[#05b8c3] text-white font-medium py-2 px-6 rounded-b-full rounded-l-full transition duration-300 outline-none">
           Get a Quote
          </button>
          </a>
        </div>

        {/* Mobile menu button - Updated for dark background */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#66ccff] focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - Side drawer */}
      {/* Overlay */}
      <div 
        className={`${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        } fixed inset-0 bg-black transition-opacity duration-300 ease-in-out md:hidden z-40`}
        onClick={toggleMenu}
      ></div>
      
      {/* Side drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <FaAnchor className="text-[#0066a1] text-xl mr-2" />
              <span className="text-[#0066a1] font-bold text-lg"><img src="images/Tefnut Marine.png" alt="" /></span>
            </div>
            <button 
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-4">
            <a 
              href="/" 
              className="text-gray-700 hover:text-[#0066a1] py-2 text-base font-medium border-b border-gray-100"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="/services" 
              className="text-gray-700 hover:text-[#0066a1] py-2 text-base font-medium border-b border-gray-100"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a 
              href="/about" 
              className="text-gray-700 hover:text-[#0066a1] py-2 text-base font-medium border-b border-gray-100"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a 
              href="/contact" 
              className="text-gray-700 hover:text-[#0066a1] py-2 text-base font-medium border-b border-gray-100"
              onClick={toggleMenu}
            >
              Contact
            </a>
            
            <div className="pt-4">
              <a href="/contact">
              <button className="w-full bg-[#04878f] hover:bg-[#000000f5] text-white font-medium py-2 px-4 rounded-e-full transition duration-300">
              Get a Quote
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;