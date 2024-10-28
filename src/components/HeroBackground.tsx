

import React, { useState, useEffect } from 'react';
import heroImage2 from '/public/hero.png';
//import heroImage3 from '/public/image2.jpg';
import { deeladColor } from '../styles'

const HeroBackground = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage2.src];
  const intervalDuration = 1000; // Interval duration in milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, intervalDuration);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="pt-20">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h2 className="my-2 text-9xl font-bold leading-tight" style={deeladColor}>Fintech</h2>
            <h4 className="my-2 text-5xl font-bold leading-tight">The Fintech Platform</h4>
            <p className="leading-normal text-2xl mb-8">-That suites Your Lifestyle</p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Learn More
            </button>
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 py-6 text-center relative">
            <img
              src={images[currentImage]}
              width={500}
              height={400}
              alt="fintech"
              className="w-full md:w-4/5 z-50"
            />
          </div>
        </div>
      </div>
      <div className="relative -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          {/* Your SVG path here */}
        </svg>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default HeroBackground;

