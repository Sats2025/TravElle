import React from 'react';

const Settings: React.FC = () => (
  <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-6 mt-8">
    <h2 className="text-xl font-bold mb-4">Settings</h2>
    <form>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Name</label>
        <input type="text" className="w-full border rounded p-2" placeholder="Your name" />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Email</label>
        <input type="email" className="w-full border rounded p-2" placeholder="you@example.com" />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Change Password</label>
        <input type="password" className="w-full border rounded p-2" placeholder="New password" />
      </div>
      <button className="bg-pink-500 text-white px-4 py-2 rounded">Save Changes</button>
    </form>
  </div>
);

export default Settings;