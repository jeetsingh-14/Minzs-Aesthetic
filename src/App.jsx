import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-champagneBeige text-deepCharcoal font-body leading-relaxed">
      <div className="fixed top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-softGold opacity-30"></div>
      <div className="fixed top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-softGold opacity-30"></div>
      <div className="fixed bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-softGold opacity-30"></div>
      <div className="fixed bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-softGold opacity-30"></div>

      <Navbar />

      <main className="animate-elegant relative z-10 px-4 md:px-6 lg:px-8 pt-6 pb-16">
        {children}
      </main>

      <WhatsAppButton />
      <div className="fixed -z-10 top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-softGold rounded-full filter blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blushPink rounded-full filter blur-[100px] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-1/4 h-1/4 bg-champagneBeige rounded-full filter blur-[90px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-softGold rounded-full animate-sparkle opacity-0"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full animate-bokeh opacity-0"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              background: i % 2 === 0 ? 'rgba(198, 165, 128, 0.4)' : 'rgba(233, 201, 193, 0.4)',
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 bg-soft-texture opacity-[0.03] pointer-events-none"></div>
    </div>
  );
};

const PageWithLayout = ({ Component }) => (
  <Layout>
    <Component />
  </Layout>
);

const App = () => {
  useEffect(() => { 
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false
    }); 
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PageWithLayout Component={Home} />} />
      <Route path="/services" element={<PageWithLayout Component={Services} />} />
      <Route path="/about" element={<PageWithLayout Component={About} />} />
      <Route path="/gallery" element={<PageWithLayout Component={Gallery} />} />
      <Route path="/contact" element={<PageWithLayout Component={Contact} />} />
    </Routes>
  );
};

export default App;
