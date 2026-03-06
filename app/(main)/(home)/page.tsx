import ContactForm from '@/src/components/Home/ContactForm';
import Features from '@/src/components/Home/Features';
import Hero from '@/src/components/Home/Hero';
import Pricing from '@/src/components/Home/Pricing';
import Reviews from '@/src/components/Home/Reviews';
import Services from '@/src/components/Home/Services';
import Stats from '@/src/components/Home/Stats';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Pricing />
            <Reviews />
            <Features />
            <ContactForm />
            <Stats />
        </div>
    );
};

export default HomePage;