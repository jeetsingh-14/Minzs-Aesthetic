import React from 'react';
import Footer from '../components/Footer';
import InstagramGallery from '../components/InstagramGallery';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Gallery Header */}
      <section className="py-16 bg-darkAccent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primaryGold mb-4">
            Our Gallery
          </h1>
          <p className="text-softText max-w-2xl mx-auto">
            Take a look at our work and the beautiful transformations we create
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-primaryGold mb-8">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Placeholder for before/after images */}
            <div className="bg-darkAccent h-64 flex items-center justify-center">
              <span className="text-primaryGold">Before/After Image 1</span>
            </div>
            <div className="bg-darkAccent h-64 flex items-center justify-center">
              <span className="text-primaryGold">Before/After Image 2</span>
            </div>
            <div className="bg-darkAccent h-64 flex items-center justify-center">
              <span className="text-primaryGold">Before/After Image 3</span>
            </div>
            <div className="bg-darkAccent h-64 flex items-center justify-center">
              <span className="text-primaryGold">Before/After Image 4</span>
            </div>
            <div className="bg-darkAccent h-64 flex items-center justify-center">
              <span className="text-primaryGold">Before/After Image 5</span>
            </div>
            <div className="bg-darkAccent h-64 flex items-center justify-center">
              <span className="text-primaryGold">Before/After Image 6</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-primaryGold mb-8">Our Salon</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Placeholder for salon images */}
            <div className="bg-darkAccent h-48 flex items-center justify-center">
              <span className="text-primaryGold">Salon Image 1</span>
            </div>
            <div className="bg-darkAccent h-48 flex items-center justify-center">
              <span className="text-primaryGold">Salon Image 2</span>
            </div>
            <div className="bg-darkAccent h-48 flex items-center justify-center">
              <span className="text-primaryGold">Salon Image 3</span>
            </div>
            <div className="bg-darkAccent h-48 flex items-center justify-center">
              <span className="text-primaryGold">Salon Image 4</span>
            </div>
            <div className="bg-darkAccent h-48 flex items-center justify-center">
              <span className="text-primaryGold">Salon Image 5</span>
            </div>
            <div className="bg-darkAccent h-48 flex items-center justify-center">
              <span className="text-primaryGold">Salon Image 6</span>
            </div>
            <div className="bg-darkAccent h-48 flex items-center justify-center">
              <span className="text-primaryGold">Salon Image 7</span>
            </div>
            <div className="bg-darkAccent h-48 flex items-center justify-center">
              <span className="text-primaryGold">Salon Image 8</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-darkAccent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-primaryGold mb-8">
            Follow Us on Instagram
          </h2>
          <p className="text-softText mb-8 max-w-2xl mx-auto">
            Stay updated with our latest work and promotions by following us on Instagram
          </p>
          <div className="max-w-5xl mx-auto">
            <InstagramGallery />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
