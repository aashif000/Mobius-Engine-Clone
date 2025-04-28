
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ResumePlans from '@/components/ResumePlans';
import ServicePlans from '@/components/ServicePlans';
import Testimonials from '@/components/Testimonials';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactCTA from '@/components/ContactCTA';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="plans">
          <ServicePlans />
          <hr className="max-w-1500 mx-auto my-12 border-t border-gray-200" />
          <ResumePlans />
        </section>
        <section id="contact" className="mb-16">
          <ContactCTA />
        </section>
        <section id="privacy">
          {/* Privacy section would be placed here when implemented */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
