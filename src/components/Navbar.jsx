import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };
  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  return (
    <nav className="bg-deepCharcoal bg-opacity-70 shadow-soft backdrop-blur-aesthetic relative z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Minzs Aesthetic Logo" className="h-14 w-auto" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 ml-4">
          {[
            { path: "/", label: "Home" },
            { path: "/services", label: "Services" },
            { path: "/about", label: "About" },
            { path: "/gallery", label: "Gallery" },
            { path: "/contact", label: "Contact" }
          ].map((item, index) => (
            <motion.div
              key={item.path}
              custom={index}
              initial="initial"
              animate="animate"
              variants={navItemVariants}
            >
              <Link 
                to={item.path} 
                className={`font-heading text-lg tracking-elegant ${
                  isActive(item.path) 
                    ? 'text-pureWhite font-bold' 
                    : 'text-softGold hover:text-blushPink relative group'
                } transition-all duration-300 relative`}
                style={{
                  textShadow: isActive(item.path) ? '0 0 8px rgba(198, 165, 128, 0.5)' : 'none'
                }}
              >
                {item.label}
                <span className={`absolute left-0 bottom-0 h-0.5 bg-softGold transform origin-left ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                } transition-all duration-300 ease-in-out`}></span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="md:hidden"
          whileTap={{ scale: 0.95 }}
        >
          <button 
            className="text-softGold p-2 focus:outline-none hover:shadow-glow transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
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
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-deepCharcoal bg-opacity-90 backdrop-blur-aesthetic shadow-soft rounded-b-aesthetic z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-5">
              {[
                { path: "/", label: "Home" },
                { path: "/services", label: "Services" },
                { path: "/about", label: "About" },
                { path: "/gallery", label: "Gallery" },
                { path: "/contact", label: "Contact" }
              ].map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link 
                    to={item.path} 
                    className={`font-heading text-lg block py-2 tracking-elegant ${
                      isActive(item.path) 
                        ? 'text-pureWhite font-bold' 
                        : 'text-softGold hover:text-blushPink hover:pl-2 relative'
                    } transition-all duration-300`}
                    style={{
                      textShadow: isActive(item.path) ? '0 0 8px rgba(198, 165, 128, 0.5)' : 'none'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <span className={`mr-2 ${isActive(item.path) ? 'opacity-100' : 'opacity-0'}`}>•</span>
                      {item.label}
                    </div>
                    {isActive(item.path) && (
                      <motion.div 
                        className="h-0.5 bg-softGold mt-1 w-1/2"
                        initial={{ width: 0 }}
                        animate={{ width: "50%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
