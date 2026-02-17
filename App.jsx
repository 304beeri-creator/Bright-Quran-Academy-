import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Courses from './sections/Courses';
import ClassStructure from './sections/ClassStructure';
import FeeStructure from './sections/FeeStructure';
import ReferralOffer from './sections/ReferralOffer';
import WhyChooseUs from './sections/WhyChooseUs';
import Contact from './sections/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-primary-100 selection:text-primary-900">
      <Header />

      <main>
        <Hero />
        <About />
        <Courses />
        <ClassStructure />
        <FeeStructure />
        <ReferralOffer />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
