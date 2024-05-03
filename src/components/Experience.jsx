import React from 'react';

const Experience = ({ company, position, duration, description }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{position}</h3>
      <p className="text-gray-600">{company} | {duration}</p>
      <p>{description}</p>
    </div>
  );
};

export default Experience;