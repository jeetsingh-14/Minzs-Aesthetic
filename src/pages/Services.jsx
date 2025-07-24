import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredServices, setFilteredServices] = useState([]);
  const categoryRefs = useRef({});
  const servicesSection = useRef(null);

  // Get unique categories
  const categories = ['All', ...new Set(servicesData.map(service => service.category))];

  // Filter services based on selected category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredServices(servicesData);
    } else {
      setFilteredServices(servicesData.filter(service => service.category === selectedCategory));
    }

    // Scroll to the selected category section after a short delay to allow rendering
    setTimeout(() => {
      if (selectedCategory !== 'All' && categoryRefs.current[selectedCategory]) {
        categoryRefs.current[selectedCategory].scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else if (servicesSection.current) {
        servicesSection.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }, [selectedCategory]);

  // Group services by category for sectional display
  const groupedServices = () => {
    if (selectedCategory !== 'All') {
      return { [selectedCategory]: filteredServices };
    }

    return filteredServices.reduce((acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = [];
      }
      acc[service.category].push(service);
      return acc;
    }, {});
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Services Header */}
      <section className="py-16 bg-darkAccent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primaryGold mb-4">
            Our Services
          </h1>
          <p className="text-softText max-w-2xl mx-auto">
            At Minzs Aesthetics, we offer a wide range of beauty and wellness services to help you look and feel your best.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 sticky top-0 bg-[#1d1d1d] z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 py-6 px-6 bg-[#1d1d1d]">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`px-5 py-2 min-w-[100px] rounded-[999px] font-['Poppins',sans-serif] text-[19px] font-semibold tracking-[0.5px] transition-all duration-300 flex items-center justify-center ${
                  selectedCategory === category
                    ? 'bg-[#b99b6b] text-white shadow-lg'
                    : 'bg-[#1d1d1d] text-[#b99b6b] hover:bg-[#d9cbb0] hover:text-[#1d1d1d] border border-[#d9cbb0] hover:shadow-[0_0_5px_rgba(185,155,107,0.3)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List - Sectional */}
      <section className="py-16" ref={servicesSection}>
        <div className="container mx-auto px-4">
          {Object.entries(groupedServices()).map(([category, services]) => (
            <div 
              key={category} 
              className="mb-20 rounded-lg overflow-hidden"
              ref={el => categoryRefs.current[category] = el}
            >
              <div className="bg-darkAccent bg-opacity-50 p-6 border-l-4 border-primaryGold">
                <h2 className="text-2xl font-semibold text-primaryGold">{category}</h2>
                <p className="text-softText text-sm mt-1">{services.length} services available</p>
              </div>
              <div className="p-6 bg-[#111111] bg-opacity-30 rounded-b-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <div key={service.id} className="animate-fadeIn">
                      <ServiceCard
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        category={service.category}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-secondaryText text-lg">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-12 bg-darkAccent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primaryGold mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-softText mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment and experience the best beauty services in Kharghar.
          </p>
          <a 
            href="https://wa.me/911234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#8bc34a] text-white px-6 py-3 rounded-md hover:bg-opacity-90 inline-block"
          >
            Book via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
