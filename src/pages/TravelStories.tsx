import React, { useState } from 'react';

const TravelStories: React.FC = () => {
  const [story, setStory] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleLinkPaste = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">Share Your Travel Story</h2>
      <textarea
        className="w-full border rounded p-2 mb-4"
        rows={4}
        placeholder="Write your story..."
        value={story}
        onChange={e => setStory(e.target.value)}
      />
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Or Paste Image Link</label>
        <input
          type="text"
          className="w-full border rounded p-2"
          placeholder="https://example.com/image.jpg"
          onChange={handleLinkPaste}
        />
      </div>
      {image && (
        <img src={image} alt="Story" className="w-full h-48 object-cover rounded mb-4" />
      )}
      <button className="bg-pink-500 text-white px-4 py-2 rounded">Post Story</button>
    </div>
  );
};

export default TravelStories;