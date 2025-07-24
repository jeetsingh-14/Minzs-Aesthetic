import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import InstagramGallery from '../components/InstagramGallery';
import ShapeDivider from '../components/ShapeDivider';
import servicesData from '../data/servicesData';
import testimonialsData from '../data/testimonialsData';

const Home = () => {
  // Enhanced sticky buttons component with booking and WhatsApp
  const StickyButtons = () => {
    // State to track scroll position for animation
    const [scrolled, setScrolled] = useState(false);

    // Update scroll position
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 200;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
      <>
        {/* WhatsApp Button */}
        <motion.a 
          href="https://wa.me/918591996399" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 z-50 bg-whatsApp text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: scrolled ? -70 : 0 // Move up when scrolled to make room for booking button
          }}
          transition={{ 
            duration: 0.3,
            y: { duration: 0.2 }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>

        {/* Booking Button - Only visible after scrolling on mobile */}
        <motion.a 
          href="https://wa.me/918591996399?text=I'd%20like%20to%20book%20an%20appointment" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 z-50 bg-rosyTaupe text-white px-5 py-3 rounded-full shadow-lg flex items-center justify-center md:hidden"
          aria-label="Book Appointment"
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: scrolled ? 0 : 100,
            opacity: scrolled ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2 font-sans text-sm tracking-wide">Book Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        </motion.a>
      </>
    );
  };

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
      <StickyButtons />

      {/* Hero Section - Enhanced with parallax effect and animations */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {/* Parallax background layers */}
        <motion.div 
          className="absolute inset-0 bg-cream-to-rose z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>

        {/* Textured background overlay with parallax effect */}
        <motion.div 
          className="absolute inset-0 bg-light-grain opacity-20 z-0"
          style={{ backgroundSize: "cover" }}
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "mirror", 
            duration: 20, 
            ease: "linear" 
          }}
        ></motion.div>

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-creamyNeutral/50 to-blushPink/30 z-0"></div>

        {/* Subtle bokeh/sparkle effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20 backdrop-blur-sm"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-6 z-10 flex flex-col items-center justify-center text-center py-20">
          <motion.div 
            className="max-w-3xl"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-display text-deepCharcoal mb-4 tracking-elegant leading-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.8,
                    ease: "easeOut"
                  } 
                }
              }}
            >
              Minz's Aesthetics
            </motion.h1>

            {/* Tagline with glow effect */}
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.p 
                className="text-2xl md:text-3xl font-display text-rosyTaupe italic font-light tracking-wider relative z-10"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 1.2 } }
                }}
              >
                Where Beauty Meets Ritual
              </motion.p>

              {/* Subtle glow behind tagline */}
              <motion.div 
                className="absolute -inset-4 bg-softGold/10 rounded-full blur-xl z-0"
                animate={{ 
                  opacity: [0.4, 0.7, 0.4],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "mirror" 
                }}
              />
            </motion.div>

            <motion.p 
              className="text-deepCharcoal/80 font-sans text-base md:text-lg mb-10 max-w-xl mx-auto tracking-wider"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }
              }}
            >
              Facials • Laser • Nails • Waxing • Hair Treatment
            </motion.p>

            <motion.div 
              className="mt-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }
              }}
            >
              {/* Enhanced CTA with micro animations */}
              <motion.a 
                href="https://wa.me/918591996399" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-rosyTaupe text-white px-8 py-4 rounded-full font-sans text-sm uppercase tracking-widest shadow-soft hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden"
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Subtle shine effect on hover */}
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ 
                    x: "100%", 
                    opacity: 1,
                    transition: { duration: 0.8 }
                  }}
                />

                <span className="relative flex items-center">
                  Book a Session
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2 opacity-70"
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3, transition: { repeat: Infinity, repeatType: "mirror", duration: 0.6 } }}
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <motion.div 
              className="w-16 h-16 opacity-50"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="#5A4B41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Custom shape divider at bottom */}
        <ShapeDivider 
          type="gentle-wave" 
          position="bottom" 
          color="text-creamyNeutral" 
          height="h-12"
        />
      </motion.section>

      {/* About Section - Enhanced with philosophy and founder photo */}
      <motion.section 
        className="py-24 px-6 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {/* Background texture */}
        <div className="absolute inset-0 bg-light-grain opacity-10"></div>

        {/* Shape divider at top */}
        <ShapeDivider 
          type="curve" 
          position="top" 
          color="text-white" 
          height="h-12"
          flip={true}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            {/* Left column - Founder/Studio image with decorative elements */}
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute inset-0 border-2 border-rosyTaupe/20 rounded-xl transform translate-x-4 translate-y-4"></div>

                {/* Main image container */}
                <div className="relative bg-white p-4 rounded-xl shadow-soft overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Founder portrait" 
                    className="w-full h-auto rounded-lg object-cover filter saturate-[0.9]"
                  />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/30 to-transparent rounded-lg"></div>

                  {/* Founder name tag */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-soft">
                    <p className="font-display text-deepCharcoal text-lg">Maninder Kaur Saini</p>
                    <p className="font-sans text-rosyTaupe text-sm">Founder & Lead Aesthetician</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-rosyTaupe/10 rounded-full -z-10"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-softGold/10 rounded-full -z-10"></div>
              </div>
            </motion.div>

            {/* Right column - About text with philosophy */}
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-display text-deepCharcoal mb-4 tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Welcome to Our Sanctuary
              </motion.h2>

              {/* Decorative divider */}
              <motion.div 
                className="w-24 h-0.5 bg-gradient-to-r from-rosyTaupe to-softGold mb-6"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 96, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>

              <motion.p 
                className="text-deepCharcoal/80 font-sans text-base mb-8 tracking-wide leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Based in the heart of Kharghar, Minz's Aesthetics blends advanced skincare with the art of self-care. 
                Our approach combines time-honored beauty rituals with modern techniques to create a truly personalized experience.
              </motion.p>

              {/* Our Philosophy section with floral divider */}
              <div className="mb-8">
                <div className="relative flex items-center mb-4">
                  <div className="flex-grow h-px bg-rosyTaupe/10"></div>
                  <div className="mx-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-rosyTaupe/30">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="flex-grow h-px bg-rosyTaupe/10"></div>
                </div>

                <h3 className="font-display text-rosyTaupe text-xl mb-3">Our Philosophy</h3>
                <p className="text-deepCharcoal/80 font-sans text-base tracking-wide leading-relaxed mb-4">
                  Beauty is not just skin deep—it's a reflection of self-care and inner wellness.
                </p>
                <p className="text-deepCharcoal/80 font-sans text-base tracking-wide leading-relaxed mb-4">
                  We believe in enhancing your natural beauty, not masking it.
                </p>
                <p className="text-deepCharcoal/80 font-sans text-base tracking-wide leading-relaxed">
                  Every treatment is an opportunity to nurture both body and spirit.
                </p>
              </div>

              <motion.a 
                href="/about" 
                className="group bg-white border border-rosyTaupe text-rosyTaupe px-8 py-4 rounded-full font-sans text-sm uppercase tracking-widest shadow-soft hover:bg-rosyTaupe hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Shape divider at bottom */}
        <ShapeDivider 
          type="curve" 
          position="bottom" 
          color="text-white" 
          height="h-12"
        />
      </motion.section>

      {/* Services Section - Redesigned with filter and flip cards */}
      <motion.section 
        className="py-24 px-6 bg-creamyNeutral relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {/* Background texture */}
        <div className="absolute inset-0 bg-light-grain opacity-20"></div>

        {/* Shape divider at top */}
        <ShapeDivider 
          type="curve" 
          position="top" 
          color="text-creamyNeutral" 
          height="h-12"
          flip={true}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-display text-deepCharcoal mb-4 tracking-wider"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.8,
                    ease: "easeOut"
                  } 
                }
              }}
            >
              Radiant Services
            </motion.h2>

            <motion.div 
              className="w-24 h-0.5 bg-gradient-to-r from-rosyTaupe to-softGold mx-auto mb-6"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            ></motion.div>

            <motion.p 
              className="text-deepCharcoal/70 font-sans text-base tracking-wide leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }
              }}
            >
              Experience our most popular treatments, designed to enhance your natural beauty and boost your confidence.
            </motion.p>
          </div>

          {/* Service Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {['All', 'Aesthetic Treatments', 'Facials', 'Waxing', 'Nails'].map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-sans tracking-wider transition-all duration-300
                  ${category === 'All' 
                    ? 'bg-rosyTaupe text-white shadow-soft' 
                    : 'bg-white/50 text-deepCharcoal/70 hover:bg-rosyTaupe/10'}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
          >
            {topServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  category={service.category}
                  benefits={[
                    `Premium ${service.category.toLowerCase()} experience`,
                    "Performed by certified experts",
                    "Uses high-quality products"
                  ]}
                  duration={service.category === "Aesthetic Treatments" ? "60-90 minutes" : 
                            service.category === "Waxing" ? "30-45 minutes" : 
                            "45-60 minutes"}
                  badge={index === 0 ? "Popular" : index === 1 ? "New" : null}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* See All Services Button */}
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="/services" 
              className="group bg-rosyTaupe text-white px-8 py-4 rounded-full font-sans text-sm uppercase tracking-widest shadow-soft hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden"
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Subtle shine effect on hover */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ 
                  x: "100%", 
                  opacity: 1,
                  transition: { duration: 0.8 }
                }}
              />

              <span className="relative flex items-center">
                See All Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Decorative quote */}
          <motion.div 
            className="relative mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Decorative corners */}
            <div className="absolute left-0 top-0 w-16 h-16 border-t-2 border-l-2 border-rosyTaupe/20 opacity-70"></div>
            <div className="absolute right-0 top-0 w-16 h-16 border-t-2 border-r-2 border-rosyTaupe/20 opacity-70"></div>
            <div className="absolute left-0 bottom-0 w-16 h-16 border-b-2 border-l-2 border-rosyTaupe/20 opacity-70"></div>
            <div className="absolute right-0 bottom-0 w-16 h-16 border-b-2 border-r-2 border-rosyTaupe/20 opacity-70"></div>

            <div className="text-center py-12 px-6">
              <p className="italic text-rosyTaupe font-display text-xl md:text-2xl tracking-wide leading-relaxed">
                "Beauty begins the moment you decide to be yourself."
              </p>
              <p className="text-deepCharcoal/60 text-sm mt-3 font-sans">— Coco Chanel</p>
            </div>
          </motion.div>
        </div>

        {/* Shape divider at bottom */}
        <ShapeDivider 
          type="curve" 
          position="bottom" 
          color="text-creamyNeutral" 
          height="h-12"
        />
      </motion.section>

      {/* Gallery Section - New masonry layout with hover effects */}
      <motion.section 
        className="py-24 px-6 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {/* Background texture */}
        <div className="absolute inset-0 bg-light-grain opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-display text-deepCharcoal mb-4 tracking-wider"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.8,
                    ease: "easeOut"
                  } 
                }
              }}
            >
              Our Gallery
            </motion.h2>

            <motion.div 
              className="w-24 h-0.5 bg-gradient-to-r from-rosyTaupe to-softGold mx-auto mb-6"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            ></motion.div>

            <motion.p 
              className="text-deepCharcoal/70 font-sans text-base tracking-wide leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }
              }}
            >
              Explore our aesthetic transformations and beauty moments captured in our studio.
            </motion.p>
          </div>

          {/* Masonry Gallery */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto"
            variants={staggerContainer}
          >
            {/* Gallery images with different heights for masonry effect */}
            {[
              {
                src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                span: "row-span-2",
                category: "Facial"
              },
              {
                src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                span: "",
                category: "Skincare"
              },
              {
                src: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                span: "row-span-2",
                category: "Nails"
              },
              {
                src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                span: "",
                category: "Aesthetic"
              },
              {
                src: "https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                span: "",
                category: "Facial"
              },
              {
                src: "https://images.unsplash.com/photo-1560830889-96266c6dbe96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                span: "row-span-2",
                category: "Skincare"
              },
              {
                src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                span: "",
                category: "Waxing"
              },
              {
                src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                span: "row-span-2",
                category: "Nails"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`${item.span} overflow-hidden rounded-lg shadow-sm`}
                variants={fadeIn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className="relative h-full group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={item.src} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-[0.9]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-deepCharcoal bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-white text-sm font-display tracking-wider">{item.category}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="/gallery" 
              className="group bg-white border border-rosyTaupe text-rosyTaupe px-8 py-4 rounded-full font-sans text-sm uppercase tracking-widest shadow-soft hover:bg-rosyTaupe hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              View Full Gallery
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section - Enhanced slider with elegant styling */}
      <motion.section 
        className="py-28 px-6 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-creamyNeutral to-blushPink/30 opacity-80"></div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-light-grain opacity-10"></div>

        {/* Shape divider at top */}
        <ShapeDivider 
          type="gentle-wave" 
          position="top" 
          color="text-white" 
          height="h-12"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-display text-deepCharcoal mb-4 tracking-wider"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.8,
                    ease: "easeOut"
                  } 
                }
              }}
            >
              Client Experiences
            </motion.h2>

            <motion.div 
              className="w-24 h-0.5 bg-gradient-to-r from-rosyTaupe to-softGold mx-auto mb-6"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            ></motion.div>

            <motion.p 
              className="text-deepCharcoal/70 font-sans text-base tracking-wide leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }
              }}
            >
              The words of our clients reflect our commitment to excellence and personalized care.
            </motion.p>
          </div>

          {/* Testimonial Slider */}
          <motion.div 
            className="max-w-4xl mx-auto relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Decorative quote marks - more subtle and elegant */}
            <svg className="absolute -top-10 left-0 w-20 h-20 text-rosyTaupe/20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.13456 9H5.25C4.83579 9 4.5 9.33579 4.5 9.75V13.5C4.5 13.9142 4.83579 14.25 5.25 14.25H8.25C8.66421 14.25 9 14.5858 9 15V18.75C9 19.1642 8.66421 19.5 8.25 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.1346 9H15.25C14.8358 9 14.5 9.33579 14.5 9.75V13.5C14.5 13.9142 14.8358 14.25 15.25 14.25H18.25C18.6642 14.25 19 14.5858 19 15V18.75C19 19.1642 18.6642 19.5 18.25 19.5H15.25C14.8358 19.5 14.5 19.1642 14.5 18.75V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <svg className="absolute -bottom-10 right-0 w-20 h-20 text-rosyTaupe/20 rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.13456 9H5.25C4.83579 9 4.5 9.33579 4.5 9.75V13.5C4.5 13.9142 4.83579 14.25 5.25 14.25H8.25C8.66421 14.25 9 14.5858 9 15V18.75C9 19.1642 8.66421 19.5 8.25 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.1346 9H15.25C14.8358 9 14.5 9.33579 14.5 9.75V13.5C14.5 13.9142 14.8358 14.25 15.25 14.25H18.25C18.6642 14.25 19 14.5858 19 15V18.75C19 19.1642 18.6642 19.5 18.25 19.5H15.25C14.8358 19.5 14.5 19.1642 14.5 18.75V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            {/* Testimonial cards in slider format */}
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-500 ease-out">
                {testimonialsData.slice(0, 3).map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className={`w-full flex-shrink-0 ${index === 0 ? 'block' : 'hidden md:block'}`}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-soft mx-2 border border-white/50">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Client Avatar/Initials */}
                        <div className="mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0">
                          {testimonial.imageUrl ? (
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-rosyTaupe/20 shadow-soft">
                              <img 
                                src={testimonial.imageUrl} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-rosyTaupe/20 to-softGold/20 flex items-center justify-center border-2 border-rosyTaupe/10 shadow-soft">
                              <span className="text-rosyTaupe text-xl font-display">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          {/* Subtle quote mark at beginning of testimonial */}
                          <div className="mb-2 text-rosyTaupe/30">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.13456 9H5.25C4.83579 9 4.5 9.33579 4.5 9.75V13.5C4.5 13.9142 4.83579 14.25 5.25 14.25H8.25C8.66421 14.25 9 14.5858 9 15V18.75C9 19.1642 8.66421 19.5 8.25 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>

                          <p className="italic text-deepCharcoal font-display text-lg md:text-xl leading-relaxed mb-6">
                            {testimonial.testimonial}
                          </p>

                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <div>
                              <p className="font-display text-rosyTaupe font-medium">{testimonial.name}</p>
                              <p className="text-deepCharcoal/60 text-sm font-sans">{testimonial.service || "Loyal Client"}</p>
                            </div>

                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i} 
                                  className={`w-4 h-4 ${i < testimonial.rating ? 'text-rosyTaupe' : 'text-rosyTaupe/20'}`} 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
                <button 
                  className="w-10 h-10 rounded-full bg-white/80 shadow-soft flex items-center justify-center text-rosyTaupe hover:bg-rosyTaupe hover:text-white transition-colors duration-300 pointer-events-auto"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-white/80 shadow-soft flex items-center justify-center text-rosyTaupe hover:bg-rosyTaupe hover:text-white transition-colors duration-300 pointer-events-auto"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {[0, 1, 2].map((_, i) => (
                <button 
                  key={i} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-rosyTaupe w-8' : 'bg-rosyTaupe/30'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* View All Testimonials Button */}
            <motion.div 
              className="flex justify-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="/testimonials" 
                className="group text-rosyTaupe hover:text-deepCharcoal font-sans text-sm tracking-wider transition-all duration-300 inline-flex items-center"
                whileHover={{ x: 3 }}
              >
                View All Testimonials
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Shape divider at bottom */}
        <ShapeDivider 
          type="gentle-wave" 
          position="bottom" 
          color="text-white" 
          height="h-12"
          flip={true}
        />
      </motion.section>

      {/* Contact/Booking Section - New CTA */}
      <motion.section 
        className="py-28 px-6 bg-[#FAF5F0] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-[#E8D6CB]/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-l from-[#E8D6CB]/30 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main CTA Card */}
            <motion.div 
              className="bg-white rounded-aesthetic shadow-soft overflow-hidden"
              variants={fadeIn}
            >
              <div className="md:flex">
                {/* Left side - CTA */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <motion.div variants={staggerContainer}>
                    <motion.h2 
                      className="text-3xl md:text-4xl font-heading text-[#5A4B41] mb-4 tracking-wider"
                      variants={slideInLeft}
                    >
                      Ready to Glow?
                    </motion.h2>
                    <motion.p 
                      className="text-[#5A4B41]/80 font-body text-lg mb-8 tracking-wide leading-relaxed"
                      variants={slideInLeft}
                    >
                      Book your personalized skincare session today.
                    </motion.p>
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4"
                      variants={slideInLeft}
                    >
                      <a 
                        href="https://wa.me/918591996399" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-[#A17C6B] text-white px-8 py-4 rounded-full font-body text-sm uppercase tracking-widest shadow-soft hover:shadow-glow hover:bg-[#5A4B41] transition-all duration-300 text-center"
                      >
                        Schedule Appointment
                      </a>
                      <a 
                        href="tel:+918591996399" 
                        className="border border-[#A17C6B] text-[#A17C6B] px-6 py-4 rounded-full font-body text-sm uppercase tracking-widest hover:bg-[#A17C6B] hover:text-white transition-all duration-300 flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call Us
                      </a>
                    </motion.div>

                    {/* WhatsApp and Email with soft icons */}
                    <motion.div 
                      className="mt-8 flex flex-col sm:flex-row items-center gap-6"
                      variants={slideInLeft}
                    >
                      <a 
                        href="https://wa.me/918591996399" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-[#5A4B41]/70 hover:text-[#A17C6B] transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        +91 8591996399
                      </a>
                      <a 
                        href="mailto:contact@minzsaesthetics.com" 
                        className="flex items-center text-[#5A4B41]/70 hover:text-[#A17C6B] transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#A17C6B]" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        contact@minzsaesthetics.com
                      </a>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Right side - Business hours and location */}
                <div className="md:w-1/2 bg-[#FAF5F0]/50 p-10 border-t md:border-t-0 md:border-l border-[#E8D6CB]">
                  <motion.div 
                    className="h-full flex flex-col justify-center"
                    variants={slideInRight}
                  >
                    <h3 className="text-xl font-heading text-[#5A4B41] mb-6 tracking-wider">Visit Our Studio</h3>

                    <div className="mb-6">
                      <p className="font-heading text-[#A17C6B] font-semibold mb-2">Location</p>
                      <a 
                        href="https://maps.app.goo.gl/uZt5QQVqmtZEjFQV8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-body text-[#5A4B41]/80 hover:text-[#A17C6B] transition-colors duration-300 flex items-start"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-[#A17C6B]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Shop No. 3, Sai Symphony,<br />Kharghar, Navi Mumbai</span>
                      </a>
                    </div>

                    <div>
                      <p className="font-heading text-[#A17C6B] font-semibold mb-2">Business Hours</p>
                      <div className="space-y-1 font-body text-[#5A4B41]/80">
                        <p className="flex justify-between">
                          <span>Monday - Saturday:</span>
                          <span>10:00 AM - 8:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Sunday:</span>
                          <span>11:00 AM - 6:00 PM</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
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
