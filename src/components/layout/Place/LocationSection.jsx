import React, { useState, useEffect } from 'react';
import PlaceCard from '../../modules/cards/PlaceCard';
import PlaceCardData from '../../../data/PlaceCardData';

function LocationSection() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const data = PlaceCardData;
    setCardData(data);
  }, []);
  return (
    <div className='px-36 py-12'>
      <div className='grid grid-cols-4 items-center gap-8 justify-center my-12'>
        {cardData.map((location) => {
          return (
            <PlaceCard
              key={location.id}
              image={location.image}
              title={location.title}
              price={location.price}
              distance={location.distance}
              availability={location.availability}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LocationSection;
