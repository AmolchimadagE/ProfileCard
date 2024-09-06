import React, { useState } from 'react';

const ProfileCard = () => {
  const [activeTab, setActiveTab] = useState('about');

  const TabButton = ({ value, label }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`py-2 px-4 text-sm font-medium rounded-md transition-colors duration-200 ${
        activeTab === value ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="w-80 bg-gray-800 text-white p-5 rounded-xl shadow-lg">
      <div className="flex space-x-1 bg-gray-700 rounded-lg p-1 mb-4">
        <TabButton value="about" label="About Me" />
        <TabButton value="experiences" label="Experiences" />
        <TabButton value="recommended" label="Recommended" />
      </div>
      
      <div className="mt-4">
        {activeTab === 'about' && (
          <div className="flex items-start space-x-4">
            <div className="flex-grow">
              <p className="text-sm leading-relaxed">Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
              <p className="text-sm mt-3 leading-relaxed">I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-yellow-900 text-2xl">👤</span>
            </div>
          </div>
        )}
        {activeTab === 'experiences' && (
          <p className="text-sm">Experiences content goes here.</p>
        )}
        {activeTab === 'recommended' && (
          <p className="text-sm">Recommended content goes here.</p>
        )}
      </div>
      
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-3">Gallery</h3>
        <div className="flex items-center space-x-3">
          <button className="bg-gray-700 p-2 rounded-full text-xs hover:bg-gray-600 transition-colors duration-200">
            🖼️
          </button>
          <div className="flex-grow grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-700 aspect-square rounded-lg overflow-hidden">
                <img src={`https://via.placeholder.com/100x100?text=${i}`} alt={`Placeholder ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <button className="bg-gray-700 p-2 rounded-full text-xs hover:bg-gray-600 transition-colors duration-200">
            ◀️
          </button>
          <button className="bg-gray-700 p-2 rounded-full text-xs hover:bg-gray-600 transition-colors duration-200">
            ▶️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;