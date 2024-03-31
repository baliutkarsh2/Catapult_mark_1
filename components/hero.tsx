import React from 'react';
import MeowImage from '@/public/images/meow.jpg'; // Adjust the path as needed
import Link from 'next/link';

export default function Hero() {
  const backgroundImageStyle = {
    backgroundImage: `url(${MeowImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section style={backgroundImageStyle} className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="z-10 max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Plan Your Degree</h1>
        <p className="text-xl mb-8 text-gray-800">Crafting Your Degree, One Steamy Step at a Time</p>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* Use Link component for client-side navigation */}
          <Link href="/input-major" className="text-white bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-md"> 
          Start here
          </Link>
          {/* Assuming "Learn more" stays as is or links elsewhere */}
          <Link className="text-white bg-gray-700 hover:bg-gray-800 px-5 py-2 rounded-md" href="#0">Learn more</Link>
        </div>
      </div>
    </section>
  ); 
}
