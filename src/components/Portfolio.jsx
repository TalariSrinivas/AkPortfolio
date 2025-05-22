import React from 'react';
import EcoSnap from '/c.png'; // Make sure the path is valid

function Portfolio() {
  const cardItems = [
    {
      id: 0,
      logo: EcoSnap,
      name: "Eco Snap Reward System",
      description:
        "A web-based platform encouraging users to upload nature-themed photos and earn credits upon admin approval. Includes dashboard and gamified features.",
      url: "#", // Replace with real link
      repo: "#", // Replace with real repo
      complete: true,
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white"
    >
      <div>
        <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
          Projects
        </h1>
        <p className="text-gray-300 mb-10 text-lg font-medium underline">
          Featured Projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardItems.map(({ id, logo, name, description, url, repo, complete }) => (
          <div
            key={id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-5 shadow-lg backdrop-blur-md hover:scale-105 transform transition duration-300"
          >
            <img
              src={logo}
              alt={name}
              className="w-[100px] h-[100px] rounded-full border-4 border-teal-400 mx-auto mb-4"
            />
            <h2 className="text-center text-2xl font-semibold text-teal-300">{name}</h2>
            <p className="text-center text-gray-400 mt-3 text-sm">{description}</p>

            {!complete && (
              <div className="mt-4 text-yellow-400 text-center font-semibold">
                🚧 Under Processing...
              </div>
            )}

            <div className="flex justify-center gap-4 mt-6">
              <a
                href={url}
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white text-sm font-semibold transition-all duration-200"
              >
                Site Link
              </a>
              <a
                href={repo}
                target="_blank"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white text-sm font-semibold transition-all duration-200"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
