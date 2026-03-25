import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-900 shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold tracking-wide">
                    TravElle
                </div>

                {/* Links */}
                <div className="space-x-6">
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                    <Link to="/signup" className="text-gray-300 hover:text-white transition-colors">Sign Up</Link>
                    <Link to="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
                    <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link>
                    <Link to="/travel-stories" className="text-gray-300 hover:text-white transition-colors">Travel Stories</Link>
                    <Link to="/verified-stays" className="text-gray-300 hover:text-white transition-colors">Verified Stays</Link>
                    <Link to="/settings" className="text-gray-300 hover:text-white transition-colors">Settings</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
