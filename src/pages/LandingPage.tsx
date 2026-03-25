import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default LandingPage;
