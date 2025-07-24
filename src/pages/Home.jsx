import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import InstagramGallery from '../components/InstagramGallery';
import servicesData from '../data/servicesData';
import testimonialsData from '../data/testimonialsData';

const Home = () => {
  // Sticky WhatsApp button component
  const StickyWhatsAppButton = () => (
    <a 
      href="https://wa.me/918591996399" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );

  // Top 4 services to display
  const topServices = [
    {
      id: 1,
      title: "Hydra Facial",
      description: "Deep hydration and rejuvenation for glowing skin",
      price: "₹2,499",
      category: "Aesthetic Treatments"
    },
    {
      id: 2,
      title: "Carbon Peel",
      description: "Advanced treatment for skin rejuvenation and pore reduction",
      price: "₹3,499",
      category: "Aesthetic Treatments"
    },
    {
      id: 3,
      title: "Brazilian Wax",
      description: "Complete hair removal from the bikini area with minimal discomfort",
      price: "₹1,200",
      category: "Waxing"
    },
    {
      id: 4,
      title: "Gel Nail Extensions",
      description: "Beautiful, durable gel extensions that look natural",
      price: "₹1,299",
      category: "Nails"
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
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

  const buttonScale = {
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-background">
      <StickyWhatsAppButton />

      {/* Hero Section */}
      <motion.section 
        className="py-20 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 md:flex items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold font-heading text-primaryGold mb-4"
              variants={slideInLeft}
            >
              Minzs Aesthetics
            </motion.h1>
            <motion.p 
              className="text-2xl font-body text-softText mb-4"
              variants={slideInLeft}
            >
              Glow Confidently. Feel Beautiful.
            </motion.p>
            <motion.p 
              className="text-softText font-body text-base mb-8"
              variants={slideInLeft}
            >
              Facials • Laser • Nails • Waxing • Hair Treatment
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              variants={slideInLeft}
            >
              <motion.a 
                href="https://wa.me/918591996399" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-whatsApp text-white px-6 py-3 rounded-full font-body text-sm uppercase shadow hover:brightness-110 inline-flex items-center justify-center"
                whileTap="tap"
                variants={buttonScale}
              >
                Book on WhatsApp
              </motion.a>
              <motion.a 
                href="https://maps.app.goo.gl/uZt5QQVqmtZEjFQV8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-accentGold text-accentGold px-6 py-3 rounded-full font-body text-sm uppercase hover:bg-accentGold hover:text-black transition inline-flex items-center justify-center"
                whileTap="tap"
                variants={buttonScale}
              >
                Get Directions
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-darkAccent text-accentGold px-6 py-8 rounded-xl shadow-md border border-accentGold max-w-sm">
              <h3 className="text-xl font-heading mb-2">Beautiful Skin Starts Here</h3>
              <p className="text-softText font-body text-sm">
                Discover rejuvenating treatments tailored to your skin, delivered by certified experts.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Preview Section */}
      <motion.section 
        className="py-20 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h2 
            className="text-3xl font-heading text-primaryGold mb-4 underline underline-offset-4 decoration-accentGold"
            variants={slideInLeft}
          >
            About Us
          </motion.h2>
          <motion.p 
            className="text-softText font-body text-base mb-8"
            variants={slideInLeft}
          >
            Based in the heart of Kharghar, Minzs Aesthetics blends advanced skincare with the art of self-care. 
            From facials to laser treatments and nail extensions, we help you glow inside and out.
          </motion.p>
          <motion.a 
            href="/about" 
            className="inline-block border-2 border-accentGold text-softText px-6 py-3 rounded-md hover:bg-accentGold hover:text-background font-body transition duration-300 ease-in-out"
            whileTap="tap"
            variants={buttonScale}
          >
            Learn More
          </motion.a>
        </div>
      </motion.section>

      {/* Top Services Preview Section */}
      <motion.section 
        className="py-20 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-heading text-primaryGold mb-4 underline underline-offset-4 decoration-accentGold"
            variants={slideInLeft}
          >
            Our Top Services
          </motion.h2>
          <motion.p 
            className="text-center text-softText font-body text-base mb-12 max-w-3xl mx-auto"
            variants={slideInLeft}
          >
            Experience our most popular treatments, designed to enhance your natural beauty and boost your confidence.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {topServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                custom={index}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                data-aos="fade-up" 
                data-aos-delay={100 * index}
              >
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  category={service.category}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-10"
            variants={slideInLeft}
          >
            <motion.a 
              href="/services" 
              className="inline-block border-2 border-accentGold text-softText px-6 py-3 rounded-md hover:bg-accentGold hover:text-background font-body transition duration-300 ease-in-out"
              whileTap="tap"
              variants={buttonScale}
            >
              View All Services
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Preview Section */}
      <motion.section 
        className="py-20 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-heading text-primaryGold mb-4 underline underline-offset-4 decoration-accentGold"
            variants={slideInLeft}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-center text-softText font-body text-base mb-12 max-w-3xl mx-auto"
            variants={slideInLeft}
          >
            Don't just take our word for it - hear from our satisfied clients about their experiences at Minzs Aesthetics.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
          >
            {testimonialsData.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeIn}
                custom={index}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <TestimonialCard 
                  name={testimonial.name}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                  imageUrl={testimonial.imageUrl}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-10"
            variants={slideInLeft}
          >
            <motion.a 
              href="/gallery" 
              className="inline-block border-2 border-accentGold text-softText px-6 py-3 rounded-md hover:bg-accentGold hover:text-background font-body transition duration-300 ease-in-out"
              whileTap="tap"
              variants={buttonScale}
            >
              See All
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Contact Section */}
      <motion.section 
        className="py-20 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-heading text-primaryGold mb-4 underline underline-offset-4 decoration-accentGold"
            variants={slideInLeft}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto bg-background border border-lightAccent rounded-lg shadow-md overflow-hidden"
            variants={fadeIn}
          >
            <div className="md:flex">
              <motion.div 
                className="md:w-1/2 p-6"
                variants={slideInLeft}
              >
                <h3 className="text-xl font-semibold font-heading text-primaryGold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accentGold mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href="tel:+918591996399" className="font-body text-softText hover:text-accentGold transition-colors duration-300">+91 8591996399</a>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accentGold mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <a 
                      href="https://maps.app.goo.gl/uZt5QQVqmtZEjFQV8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-body text-softText hover:text-accentGold transition-colors duration-300"
                    >
                      Shop No. 3, Sai Symphony, Kharghar, Navi Mumbai
                    </a>
                  </motion.div>
                </div>
                <motion.div 
                  className="mt-8"
                  variants={slideInLeft}
                >
                  <motion.a 
                    href="https://wa.me/918591996399" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center bg-whatsapp text-white px-6 py-3 rounded-md hover:bg-opacity-90 font-body transition-colors duration-300"
                    whileTap="tap"
                    variants={buttonScale}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book on WhatsApp
                  </motion.a>
                </motion.div>
              </motion.div>
              <motion.div 
                className="md:w-1/2 bg-background border-l border-lightAccent p-6 flex items-center justify-center"
                variants={slideInRight}
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold font-heading text-primaryGold mb-4">Business Hours</h3>
                  <div className="space-y-2 font-body text-softText text-base">
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p>Sunday: 11:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Instagram Section */}
      <motion.section 
        className="py-20 px-6 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-heading text-primaryGold mb-4 underline underline-offset-4 decoration-accentGold"
            variants={slideInLeft}
          >
            Our Work on Instagram
          </motion.h2>
          <motion.p 
            className="text-center text-softText font-body text-base mb-12 max-w-3xl mx-auto"
            variants={slideInLeft}
          >
            Stay updated with our latest work, promotions, and beauty tips by following us on Instagram.
          </motion.p>
          <motion.div 
            className="max-w-5xl mx-auto"
            variants={fadeIn}
          >
            <InstagramGallery />
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Home;
