import React from 'react';

const SafetyInsights: React.FC = () => (
  <div className="bg-white rounded-lg shadow p-6 mb-6">
    <h2 className="text-xl font-semibold mb-2">Safety Insights</h2>
    <ul className="list-disc pl-5 mb-4">
      <li>Share your live location with trusted contacts.</li>
      <li>Check local emergency numbers before you travel.</li>
      <li>Read safety tips from fellow travelers.</li>
    </ul>
    <div>
      <h3 className="font-bold mb-1">Emergency Contacts</h3>
      <p>Police: 112</p>
      <p>Ambulance: 911</p>
      <p>Local Women's Helpline: 1091</p>
    </div>
  </div>
);

export default SafetyInsights;