import React from 'react';
import DestinationSelector from './DestinationSelector';

const Destinations = () => {
  const vehicles = [
    {
      "name": "Space pod",
      "total_no": 2,
      "max_distance": 200,
      "speed": 2
    },
    {
      "name": "Space rocket",
      "total_no": 1,
      "max_distance": 300,
      "speed": 4
    },
    {
      "name": "Space shuttle",
      "total_no": 1,
      "max_distance": 400,
      "speed": 5
    },
    {
      "name": "Space ship",
      "total_no": 2,
      "max_distance": 600,
      "speed": 10
    }
  ];

  const planets = [
    {
      "name": "Donlon",
      "distance": 100
    },
    {
      "name": "Enchai",
      "distance": 200
    },
    {
      "name": "Jebing",
      "distance": 300
    },
    {
      "name": "Sapir",
      "distance": 400
    },
    {
      "name": "Lerbin",
      "distance": 500
    },
    {
      "name": "Pingasor",
      "distance": 600
    }
  ];

  return (
    <div>
      { vehicles.map((_, index) => (
        <DestinationSelector
          key={index}
          planets={planets}
        />
      ))}
    </div>
  );
};

export default Destinations;