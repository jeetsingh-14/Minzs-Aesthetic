import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Contact Header */}
      <section className="py-16 bg-darkAccent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primaryGold mb-4">
            Contact & Booking
          </h1>
          <p className="text-softText max-w-2xl mx-auto">
            We'd love to hear from you! Reach out to us for appointments or inquiries.
          </p>

          {/* Quick Contact CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="https://wa.me/918591996399" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#8bc34a] text-white px-6 py-3 rounded-full font-bold flex items-center hover:bg-opacity-90 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Book on WhatsApp
            </a>
            <a 
              href="tel:+918591996399" 
              className="bg-accentGold text-background px-6 py-3 rounded-full font-bold flex items-center hover:bg-opacity-90 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call +91 8591996399
            </a>
            <a 
              href="https://share.google/rxzocR232SkTwOfVM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-darkAccent text-softText border border-accentGold px-6 py-3 rounded-full font-bold flex items-center hover:bg-lightAccent transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primaryGold" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Check our Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-semibold text-primaryGold mb-6">Get In Touch</h2>

              <div className="mb-6">
                <h3 className="font-semibold text-softText mb-2">Address</h3>
                <p className="text-secondaryText">
                  Minzs Aesthetics<br />
                  Shop No. 3, Sai Symphony, Kharghar, Navi Mumbai<br />
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-softText mb-2">Contact Information</h3>
                <p className="text-secondaryText">
                  Phone: +91 8591996399<br />
                  Email: minzs.aesthetic@gmail.com
                </p>
              </div>

              <div className="mb-6 bg-darkAccent p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-softText mb-2">Business Hours</h3>
                <p className="text-secondaryText">
                  Monday: Closed<br />
                  Tuesday: 11 AM–8 PM<br />
                  Wednesday: 11 AM–8 PM<br />
                  Thursday: 11 AM–8 PM<br />
                  Friday: 11 AM–8 PM<br />
                  Saturday: 11 AM–8 PM<br />
                  Sunday: 11 AM–8 PM<br />
                  <span className="font-medium">By Appointment Only</span>
                </p>
              </div>

              <div className="flex space-x-4 mt-8">
                <a 
                  href="https://wa.me/918591996399" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#8bc34a] text-white px-4 py-2 rounded-md hover:bg-opacity-90"
                >
                  WhatsApp
                </a>
                <a 
                  href="https://instagram.com/minzs_aesthetics" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accentGold text-background px-4 py-2 rounded-md hover:bg-opacity-90"
                >
                  Instagram
                </a>
                <a 
                  href="https://share.google/rxzocR232SkTwOfVM"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-darkAccent text-softText border border-accentGold px-4 py-2 rounded-md hover:bg-lightAccent"
                >
                  Google Reviews
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primaryGold mb-6">Send Us a Message</h2>

              {/* Contact Form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-softText mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accentGold"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-softText mb-1">Service Interested In</label>
                  <select 
                    id="service" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accentGold"
                  >
                    <option value="">Select a Service</option>
                    <option value="facial">Facial Treatment</option>
                    <option value="skincare">Skincare Consultation</option>
                    <option value="makeup">Professional Makeup</option>
                    <option value="bridal">Bridal Package</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dateTime" className="block text-softText mb-1">Preferred Date & Time</label>
                  <input 
                    type="text" 
                    id="dateTime" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accentGold"
                    placeholder="e.g., July 15, 2:00 PM"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-softText mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accentGold"
                    placeholder="Any specific requirements or questions?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-accentGold text-background px-6 py-2 rounded-md hover:bg-opacity-90"
                >
                  Send Inquiry
                </button>
              </form>

              <div className="mt-4 text-secondaryText text-sm">
                {/* Form will be connected to EmailJS in the future */}
                Form submission will be processed via EmailJS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-darkAccent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-primaryGold text-center mb-8">
            Find Us
          </h2>
          <div className="bg-background rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6407.429288527454!2d73.0731265!3d19.0721304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1c365df3e03%3A0xd7fbb14497f0e4f0!2sMinzs%20Aesthetic!5e1!3m2!1sen!2sus!4v1753313807500!5m2!1sen!2sus" 
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-6 text-center">
            <p className="text-softText font-medium">
              Minzs Aesthetics<br />
              Shop No. 3, Sai Symphony, Kharghar, Navi Mumbai<br />
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
