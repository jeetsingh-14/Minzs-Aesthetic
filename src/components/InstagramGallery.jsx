import React from 'react';

const InstagramGallery = ({ useEmbed = false, embedCode = '' }) => {
  const placeholderImages = [
    '/assets/placeholder1.jpg',
    '/assets/placeholder2.jpg',
    '/assets/placeholder3.jpg',
    '/assets/placeholder4.jpg',
    '/assets/placeholder5.jpg',
    '/assets/placeholder6.jpg',
    '/assets/placeholder7.jpg',
    '/assets/placeholder8.jpg',
    '/assets/placeholder9.jpg',
  ];

  if (useEmbed && embedCode) {
    return (
      <div className="w-full">
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {placeholderImages.slice(0, 9).map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden group"
          >
            <img 
              src={image} 
              alt={`Instagram post ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-charcoal bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white text-sm md:text-base font-medium tracking-wider">View on Instagram</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a 
          href="https://instagram.com/minzs_aesthetics" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-gold text-white px-6 py-3 rounded-md hover:bg-taupe hover:text-charcoal transition-colors duration-300 tracking-wider"
        >
          Follow Us on Instagram
        </a>
      </div>
    </div>
  );
};

export default InstagramGallery;
