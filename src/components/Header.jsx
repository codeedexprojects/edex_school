import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/header new.png"; 
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/30 backdrop-blur-lg shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo - Already on left side */}
          <Link to="/home" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Edex Logo" 
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu - This will be on the right side */}
         <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 lufga text-lg font-bold"> 
  <li>
    <Link 
      to="/home" 
      className="text-white hover:text-white transition-colors duration-200 py-2"
    >
      Home
    </Link>
  </li>

  <li>
    <Link 
      to="/curiculam" 
      className="text-white hover:text-white transition-colors duration-200 py-2"
    >
      Curriculum
    </Link>
  </li>

  <li>
    <Link 
      to="/about" 
      className="text-white hover:text-white transition-colors duration-200 py-2"
    >
      About Us
    </Link>
  </li>

  <li>
    <Link 
      to="/contact" 
      className="text-white hover:text-white transition-colors duration-200 py-2"
    >
      Contact
    </Link>
  </li>
</ul>

          {/* Mobile Menu Button - This appears on the right side on mobile */}
          <button 
            className="md:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 w-3/4 max-w-sm h-full bg-black/90 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white text-2xl p-2 hover:bg-white/10 rounded-lg"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <FiX />
            </button>

            {/* Mobile Menu Links */}
            <ul className="flex flex-col space-y-6 lufga text-xl font-bold">
              <li>
                <Link 
                  to="/home" 
                  className="block text-white/80 hover:text-white transition-colors duration-200 py-3 border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/curiculam" 
                  className="block text-white/80 hover:text-white transition-colors duration-200 py-3 border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Curriculum
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block text-white/80 hover:text-white transition-colors duration-200 py-3 border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-white/80 hover:text-white transition-colors duration-200 py-3 border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;