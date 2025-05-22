import React from 'react';
import cpp from '/cpp.png';
import java from '/java.png';
import mysql from '/mysql.png';
import c from '/c.png';
import reactjs from '/reactjs.png';
import express from '/express.png';
import tailwind from '/tailwind.png';
import node from '/node.png';
import mongo from '/mongo.jpg';
import python from '/python.png'; // Ensure this image exists

function Experience() {
  const cardItems = [
    { id: 1, logo: java, name: "Java" },
    { id: 2, logo: cpp, name: "C++" },
    { id: 3, logo: c, name: "C" },
    { id: 4, logo: python, name: "Python" },
    { id: 5, logo: mysql, name: "MySQL" },
    { id: 6, logo: express, name: "ExpressJS" },
    { id: 7, logo: reactjs, name: "ReactJS" },
    { id: 8, logo: node, name: "NodeJS" },
    { id: 9, logo: mongo, name: "MongoDB" },
    { id: 10, logo: tailwind, name: "Tailwind CSS" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
          Experience
        </h1>
        <p className="text-gray-400 mt-2 text-lg">Technologies I've worked with:</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {cardItems.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-md hover:scale-105 transform transition duration-300"
          >
            <img
              src={logo}
              alt={name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-teal-400 object-contain"
            />
            <p className="mt-4 text-teal-300 font-medium">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
