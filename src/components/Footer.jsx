import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="bg-gray-900 py-4 text-center text-white">
      <div className="flex justify-center space-x-4">
      <a href="https://www.linkedin.com/in/raymond-luna-davila/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin className="text-3xl hover:text-gray-400" />
        </a>
        <a href="https://github.com/monddavila" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub className="text-3xl hover:text-gray-400" />
        </a>
        <a href="https://medium.com/@raymonddavila" target="_blank" rel="noopener noreferrer" title="Medium">
          <FaMedium className="text-3xl hover:text-gray-400" />
        </a>
      </div>
      {showScrollButton && (
        <button onClick={scrollToTop} className="fixed bottom-3 right-4 bg-gray-700 text-white p-3 rounded-full focus:outline-none hover:bg-gray-500">
          <HiArrowUp className="text-xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
