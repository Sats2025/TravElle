import React from 'react';

const Dashboard: React.FC = () => {
    const recentTrips = [
        { destination: "Manali, Himachal Pradesh", date: "July 2025", highlights: "Snow trekking & Solang Valley" },
        { destination: "Jaipur, Rajasthan", date: "June 2025", highlights: "Amber Fort & Local Handicrafts" },
        { destination: "Goa", date: "May 2025", highlights: "Beaches & Nightlife" },
    ];

    const upcomingTrips = [
        { destination: "Leh-Ladakh", date: "September 2025" },
        { destination: "Kerala", date: "December 2025" },
    ];

    return (
        <div className="min-h-screen p-6 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to your Dashboard!</h1>
            <p className="mb-6 text-gray-600">Here you can find your personalized travel insights and features.</p>

            {/* Travel Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg shadow bg-pink-100">
                    <h2 className="text-lg font-semibold text-gray-800">Trips Completed</h2>
                    <p className="text-2xl font-bold text-pink-700">12</p>
                </div>
                <div className="p-4 rounded-lg shadow bg-green-100">
                    <h2 className="text-lg font-semibold text-gray-800">Countries Visited</h2>
                    <p className="text-2xl font-bold text-green-700">4</p>
                </div>
                <div className="p-4 rounded-lg shadow bg-yellow-100">
                    <h2 className="text-lg font-semibold text-gray-800">Upcoming Trips</h2>
                    <p className="text-2xl font-bold text-yellow-700">{upcomingTrips.length}</p>
                </div>
            </div>

            {/* Recent Trips */}
            <div className="p-4 rounded-lg shadow bg-blue-100 mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Trips</h2>
                <ul className="space-y-3">
                    {recentTrips.map((trip, index) => (
                        <li key={index} className="border-b border-blue-200 pb-2">
                            <p className="font-bold text-blue-800">{trip.destination}</p>
                            <p className="text-gray-500 text-sm">{trip.date}</p>
                            <p className="text-gray-700">{trip.highlights}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Upcoming Trips */}
            <div className="p-4 rounded-lg shadow bg-purple-100">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Trips</h2>
                <ul className="space-y-3">
                    {upcomingTrips.map((trip, index) => (
                        <li key={index} className="border-b border-purple-200 pb-2">
                            <p className="font-bold text-purple-800">{trip.destination}</p>
                            <p className="text-gray-500 text-sm">{trip.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
