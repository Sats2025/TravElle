import React from 'react';

const stays = [
  {
    name: 'SafeStay Hostel',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    verified: true,
    description: 'Women-only hostel with 24/7 security and great reviews.',
    bgColor: 'bg-pink-100',
  },
  {
    name: 'Comfort Inn',
    location: 'Berlin, Germany',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    verified: true,
    description: 'Verified by TravElle community for safety and comfort.',
    bgColor: 'bg-blue-100',
  },
];

const VerifiedStays: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 p-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Verified Stays</h2>
      <p className="mb-8 text-gray-600">
        Trusted accommodations personally verified for safety, comfort, and a stress-free stay.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stays.map((stay, idx) => (
          <div
            key={idx}
            className={`rounded-lg shadow-lg p-4 flex flex-col ${stay.bgColor} hover:shadow-xl transition-shadow duration-300`}
          >
            <img
              src={stay.image}
              alt={stay.name}
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{stay.name}</h3>
            <p className="text-sm text-gray-600">{stay.location}</p>
            <p className="mt-2 text-gray-700">{stay.description}</p>
            {stay.verified && (
              <span className="mt-2 inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                ✅ Verified
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default VerifiedStays;
