import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    return (
        <div 
            className="bg-cover bg-center h-[90vh] flex flex-col justify-center items-center text-center px-4"
            style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        >
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
                Welcome to <span className="text-pink-400">TravElle</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-xl mb-8">
                Your travel companion for unforgettable experiences.
            </p>
            <Link 
                to="/signup" 
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
                Start Your Journey
            </Link>
        </div>
    );
};

export default HeroSection;
