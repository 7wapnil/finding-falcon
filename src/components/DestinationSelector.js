import React from 'react';

const DestinationSelector = ({ planets }) => {
  return (
    <select>
      {planets.map((planet, index) => (
        <option
          key={index}
        >
          {planet.name}
        </option>
      ))}
    </select>
  );
};

export default DestinationSelector;