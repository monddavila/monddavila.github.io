import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import TypingEffect from "./TypingEffect";
import HeroImage from "../assets/raymond.png";
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'> 
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col items-center justify-center h-full md:flex-row'>
        {/* Reordered for mobile view */}
        <img src={HeroImage} alt="Raymond" className='rounded-3xl my-6 mx-auto w-2/3 md:w-1/3 md:order-2' />

        <div className="md:order-1">
          <p className='text-yellow-300'>Hi, my name is</p>
          <h1 className='hover:box-decoration-slice hover:bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-4xl sm:text-7xl font-bold'>Raymond Davila</h1>
          {/* Add TypingEffect component here */}
          <TypingEffect
            texts={["Programming Enthusiast", "Web Developer", "Full Stack Developer", "Mining Engineer", "Tech Savvy :)"]}
          />

          <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div>
            <ScrollLink to="about" smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600' >Know More
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
