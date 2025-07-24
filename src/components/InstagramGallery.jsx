import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InstagramGallery = ({ useEmbed = false, embedCode = '' }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reliable placeholder images from Unsplash (beauty/spa themed)
  const placeholderImages = [
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1560830889-96266c6dbe96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  ];

  useEffect(() => {
    // Simulate loading time for a smoother experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // If using embed code (from SnapWidget, LightWidget, etc.)
  if (useEmbed && embedCode) {
    return (
      <div className="w-full">
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      </div>
    );
  }

  // Show loading state
  if (loading) {
    return (
      <div className="w-full text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-rosyTaupe"></div>
        <p className="mt-4 text-deepCharcoal/70 font-sans">Loading Instagram feed...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="w-full text-center py-12">
        <p className="text-red-400">Unable to load Instagram feed</p>
        <a 
          href="https://instagram.com/minzs_aesthetics" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-rosyTaupe text-white px-6 py-3 rounded-md hover:bg-opacity-90"
        >
          View on Instagram Instead
        </a>
      </div>
    );
  }

  return (
    <div className="w-full">
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {placeholderImages.map((image, index) => (
          <motion.a 
            href="https://instagram.com/minzs_aesthetics"
            target="_blank" 
            rel="noopener noreferrer"
            key={index} 
            className="relative aspect-square overflow-hidden group rounded-md shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={image} 
              alt={`Instagram post ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter saturate-[0.9]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-deepCharcoal bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white text-sm md:text-base font-display tracking-wider px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">View on Instagram</span>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <motion.a 
          href="https://instagram.com/minzs_aesthetics" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-rosyTaupe text-white px-8 py-3 rounded-full font-sans text-sm uppercase tracking-widest shadow-soft hover:shadow-glow hover:bg-softGold transition-all duration-300"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
        >
          Follow Us on Instagram
        </motion.a>
      </div>
    </div>
  );
};

export default InstagramGallery;
