import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import ShapeDivider from './ShapeDivider';

const Footer = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <footer className="bg-deepCharcoal text-white pt-24 pb-16 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-light-grain opacity-5"></div>

      {/* Soft wave divider at top */}
      <ShapeDivider 
        type="gentle-wave" 
        position="top" 
        color="text-creamyNeutral" 
        height="h-12"
      />

      {/* Before You Go Section - New addition */}
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h3 className="font-display text-2xl md:text-3xl text-rosyTaupe mb-6">Before You Go...</h3>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-0.5 bg-gradient-to-r from-rosyTaupe/30 to-softGold/30"></div>
          </div>
          <p className="font-sans text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Book your appointment today and experience the perfect blend of luxury and self-care. 
            Your journey to radiant beauty begins with a single session.
          </p>
          <motion.a 
            href="https://wa.me/918591996399" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-rosyTaupe text-white px-8 py-3 rounded-full font-sans text-sm uppercase tracking-widest shadow-soft hover:shadow-glow hover:bg-softGold transition-all duration-300"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Your Session
          </motion.a>
        </motion.div>

        {/* Decorative floral divider */}
        <div className="relative h-12 mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-rosyTaupe/20 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-deepCharcoal px-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-rosyTaupe/30">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
                <path d="M12 2V6" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18V22" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12H6" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 12H22" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <img src={logo} alt="Minz's Aesthetics Logo" className="h-14 mx-auto mb-4" />
          <p className="font-display text-rosyTaupe tracking-wider text-sm max-w-md mx-auto">
            Your beauty sanctuary in Kharghar, where modern techniques meet timeless rituals
          </p>
        </motion.div>

        {/* Footer links and info */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Contact */}
          <motion.div variants={fadeIn}>
            <h4 className="font-display text-rosyTaupe font-medium tracking-wider text-base mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:+918591996399" 
                className="font-sans text-white/80 hover:text-rosyTaupe transition-colors duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 8591996399
              </a>
              <a 
                href="mailto:minzs.aesthetic@gmail.com"
                className="font-sans text-white/80 hover:text-rosyTaupe transition-colors duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                minzs.aesthetic@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={fadeIn}>
            <h4 className="font-display text-rosyTaupe font-medium tracking-wider text-base mb-4">Location</h4>
            <a 
              href="https://maps.app.goo.gl/uZt5QQVqmtZEjFQV8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-white/80 hover:text-rosyTaupe transition-colors duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Shop No. 3, Sai Symphony,<br />Kharghar, Navi Mumbai</span>
            </a>
          </motion.div>

          {/* Connect */}
          <motion.div variants={fadeIn}>
            <h4 className="font-display text-rosyTaupe font-medium tracking-wider text-base mb-4">Connect</h4>
            <div className="flex justify-center space-x-4">
              <motion.a 
                href="https://wa.me/918591996399" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/30 transition-colors duration-300"
                aria-label="WhatsApp"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://instagram.com/minzs_aesthetics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-rosyTaupe/20 to-softGold/20 flex items-center justify-center hover:from-rosyTaupe/30 hover:to-softGold/30 transition-colors duration-300"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center">
          <p className="font-sans text-white/50 tracking-wider text-xs">&copy; {new Date().getFullYear()} Minz's Aesthetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
