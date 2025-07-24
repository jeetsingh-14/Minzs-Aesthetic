import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCard = ({ 
  title, 
  description, 
  price, 
  category, 
  duration, 
  badge, 
  image, 
  imageStyle = "circle",
  benefits = ["Relaxing experience", "Expert care", "Premium products"]
}) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [touchStartTime, setTouchStartTime] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState({ x: 0, y: 0 });
  const hoverTimeoutRef = useRef(null);

  // Detect if device is touch-enabled
  useEffect(() => {
    const detectTouch = () => {
      setIsTouchDevice(true);
      window.removeEventListener('touchstart', detectTouch);
    };

    window.addEventListener('touchstart', detectTouch);

    return () => {
      window.removeEventListener('touchstart', detectTouch);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Default icons for different service categories
  const getDefaultIcon = (category) => {
    switch(category?.toLowerCase()) {
      case 'facial':
      case 'facials':
      case 'aesthetic treatments':
        return (
          <svg className="w-12 h-12 text-rosyTaupe" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 19H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'waxing':
        return (
          <svg className="w-12 h-12 text-rosyTaupe" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'nails':
        return (
          <svg className="w-12 h-12 text-rosyTaupe" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 13L16 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 17L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return (
          <svg className="w-12 h-12 text-rosyTaupe" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  // Overlay animation variants
  const overlayVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  // Content fade animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.3 } }
  };

  // Handle touch events for better mobile experience
  const handleTouchStart = (e) => {
    setTouchStartTime(Date.now());
    setTouchStartPosition({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchEnd = (e) => {
    // Only show details if it was a tap (short duration and minimal movement)
    const touchDuration = Date.now() - touchStartTime;

    // Get the touch end position
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    // Calculate distance moved
    const distanceMoved = Math.sqrt(
      Math.pow(touchEndX - touchStartPosition.x, 2) + 
      Math.pow(touchEndY - touchStartPosition.y, 2)
    );

    // If touch was short and didn't move much, consider it a tap
    if (touchDuration < 250 && distanceMoved < 10) {
      setIsDetailsVisible(!isDetailsVisible);
      e.preventDefault(); // Prevent default behavior
    }
  };

  // Handle mouse enter with delay for smoother experience
  const handleMouseEnter = () => {
    if (isTouchDevice) return;

    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHovered(true);
  };

  // Handle mouse leave with delay for smoother experience
  const handleMouseLeave = () => {
    if (isTouchDevice) return;

    // Add a small delay before hiding the overlay for elegance
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  return (
    <motion.div 
      className="relative cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div 
        className="relative w-full bg-[#fdfaf8] rounded-2xl p-6 shadow-soft overflow-hidden border border-[#f0c4b8]/10 h-[305px]"
        whileHover={!isTouchDevice ? { scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.07), 0 8px 10px -6px rgba(0, 0, 0, 0.03)" } : {}}
      >
        <div className="flex flex-col items-center justify-between h-full">
          {/* Icon or Image */}
          <motion.div 
            className="mb-5 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {image ? (
              imageStyle === "circle" ? (
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-blushPink/20 p-1 shadow-soft">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover rounded-full filter brightness-105 saturate-75 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-40 overflow-hidden rounded-xl shadow-soft">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover filter brightness-105 saturate-75 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )
            ) : (
              <div className="flex justify-center items-center w-24 h-24 mx-auto rounded-full bg-blushPink/20 p-1">
                {getDefaultIcon(category)}
              </div>
            )}
          </motion.div>

          {/* Title and price */}
          <div className="text-center mb-3 flex-grow flex flex-col justify-center">
            <h3 className="text-xl font-bold font-display text-deepCharcoal tracking-wider mb-2">{title}</h3>
            <div className="w-16 h-0.5 bg-rosyTaupe/30 mx-auto mb-3"></div>
            <p className="text-base text-deepCharcoal/80 tracking-wider font-sans font-medium">{price.includes('₹') ? price : `₹${price}`}</p>
          </div>

          {/* Details prompt */}
          <motion.div 
            className="text-xs text-rosyTaupe/80 font-sans mt-2 flex items-center justify-center"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isTouchDevice ? '› Tap to view details' : '› Hover to view details'}
          </motion.div>

          {/* Badge if provided */}
          {badge && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-rosyTaupe to-softGold text-white text-xs px-3 py-1 rounded-full shadow-soft">
              {badge}
            </div>
          )}

          {/* Subtle shine effect on hover */}
          <motion.div 
            className="absolute inset-0 bg-white/5 opacity-0"
            animate={{ opacity: isHovered ? 0.5 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Hover/Tap Overlay */}
          <AnimatePresence>
            {(isHovered || (isTouchDevice && isDetailsVisible)) && (
              <motion.div 
                className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl flex flex-col p-6 overflow-y-auto shadow-soft border border-white/50"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="h-full flex flex-col"
                >
                  <h3 className="text-xl font-display text-rosyTaupe mb-3 tracking-wide">About this service</h3>
                  <p className="text-sm font-sans text-deepCharcoal/80 leading-relaxed mb-4 tracking-wide">{description}</p>

                  {/* Benefits list */}
                  <div className="mt-auto">
                    <h4 className="text-xs uppercase tracking-wider text-deepCharcoal/70 mb-2 font-sans font-medium">Benefits</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {benefits.map((benefit, index) => (
                        <span key={index} className="text-xs bg-rosyTaupe/10 text-deepCharcoal/80 px-3 py-1 rounded-full font-sans flex items-center">
                          <svg className="w-3 h-3 text-rosyTaupe mr-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {duration && (
                      <div className="text-xs font-sans mb-4 text-rosyTaupe/90 bg-rosyTaupe/5 px-3 py-1.5 rounded-lg inline-block">
                        <span className="text-xs uppercase tracking-wider text-deepCharcoal/70 mr-1 font-medium">Duration:</span>
                        {duration}
                      </div>
                    )}

                    <motion.a 
                      href={`https://wa.me/918591996399?text=I'm%20interested%20in%20booking%20a%20session%20for%20the%20${title}%20service`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm bg-rosyTaupe text-white px-4 py-2 rounded-full hover:bg-deepCharcoal transition-colors duration-300 font-sans font-medium shadow-soft w-full block text-center"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(240,196,184,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
