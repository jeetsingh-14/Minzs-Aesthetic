import React from 'react';

const TestimonialCard = ({ name, testimonial, rating, imageUrl }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "text-accentGold" : "text-lightAccent"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-background border border-lightAccent p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-accentGold">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-background flex items-center justify-center">
              <span className="text-primaryGold text-xs">Photo</span>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold font-heading text-primaryGold">{name}</h4>
          <div className="flex">{renderStars()}</div>
        </div>
      </div>
      <p className="font-body text-softText italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
