import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, price, category, duration, badge, image, imageStyle = "circle" }) => {
  return (
    <motion.div 
      className="relative group bg-pureWhite rounded-aesthetic p-6 transition-all duration-300 shadow-soft overflow-hidden hover:shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {image && (
        <motion.div 
          className="mb-4 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {imageStyle === "circle" ? (
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-blushPink p-1">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover rounded-full filter brightness-105 saturate-75"
              />
            </div>
          ) : (
            <div className="w-full h-40 overflow-hidden rounded-aesthetic shadow-soft">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover filter brightness-105 saturate-75"
              />
            </div>
          )}
        </motion.div>
      )}

      <h3 className="text-lg font-bold font-heading text-softGold tracking-elegant">{title}</h3>
      <p className="text-sm text-deepCharcoal/80 mt-1 tracking-wider font-body">{price}</p>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-deepCharcoal bg-opacity-90 text-champagneBeige opacity-0 group-hover:opacity-100 rounded-aesthetic p-4 max-w-[90%] transition-all duration-300">
          <p className="text-sm text-left font-body leading-relaxed line-clamp-3">{description}</p>
          {duration && <p className="text-sm font-body mt-2 text-blushPink">{duration}</p>}

          {badge && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-softGold to-blushPink text-pureWhite text-xs px-3 py-1 rounded-full shadow-soft">
              {badge}
            </div>
          )}
        </div>
      </div>

      {badge && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-softGold to-blushPink text-pureWhite text-xs px-3 py-1 rounded-full shadow-soft">
          {badge}
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
