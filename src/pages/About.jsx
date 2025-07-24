import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* About Header */}
      <section className="py-16 bg-darkAccent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primaryGold mb-4">
            About Minzs Aesthetics
          </h1>
          <p className="text-softText max-w-2xl mx-auto">
            Your premier beauty destination in Kharghar, Navi Mumbai
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              {/* Placeholder for about image */}
              <div className="bg-darkAccent h-80 flex items-center justify-center">
                <span className="text-primaryGold">Image Coming Soon</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-primaryGold mb-4">Our Story</h2>
              <div className="text-softText space-y-4">
                <p>
                  // About section content will be added here
                </p>
                <p>
                  // More about the salon's history and mission
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-darkAccent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-primaryGold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for team members */}
            <div className="text-center text-secondaryText">
              // Team member cards will be added here
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-primaryGold text-center mb-12">
            Why Choose Minzs Aesthetics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-darkAccent p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primaryGold mb-3">Experienced Professionals</h3>
              <p className="text-softText">
                // Content about the team's expertise
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-darkAccent p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primaryGold mb-3">Premium Products</h3>
              <p className="text-softText">
                // Content about the quality of products used
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-darkAccent p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primaryGold mb-3">Relaxing Environment</h3>
              <p className="text-softText">
                // Content about the salon atmosphere
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
