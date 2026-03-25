import React from 'react';

interface VerifiedStayCardProps {
    title: string;
    description: string;
    imageUrl: string;
    location: string;
    price: string;
}

const VerifiedStayCard: React.FC<VerifiedStayCardProps> = ({ title, description, imageUrl, location, price }) => {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 hover:shadow-xl transition-shadow duration-300">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
                <p className="text-gray-700 text-base mb-2">{description}</p>
                <p className="text-gray-600 text-sm mb-1">📍 {location}</p>
                <p className="text-gray-900 font-bold text-lg">{price}</p>
            </div>
        </div>
    );
};

export default VerifiedStayCard;
