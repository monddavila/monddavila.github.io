import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    const intervalId = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayText((prevText) => prevText + currentText.charAt(charIndex));
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setDisplayText('');
          setCharIndex(0);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000); // Delay before starting the next text
      }
    }, 100); // Adjust the delay (in milliseconds) between each character
    return () => clearInterval(intervalId);
  }, [charIndex, textIndex, texts]);

  return (
    <span className="text-yellow-300 text-2xl sm:text-4xl md:text-3xl font-bold py-4"><span className="text-gray-500">I'm a </span>{displayText}</span>
  );
};

export default TypingEffect;
