import React, { useState, useEffect } from 'react';
import PlaceCard from '../../modules/cards/PlaceCard';
import HomeCardData from '../../../data/HomeCardData';

function InspirationSection() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const data = HomeCardData;
    setCardData(data);
  }, []);
  return (
    <div className='lg:px-36 px-20 py-12'>
      <h2 className='font-bold text-5xl text-[#000000] text-center mb-12'>
        Inspiration for your next adventure
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-center gap-8 justify-center my-12'>
        {cardData.map((place) => {
          return (
            <PlaceCard
              key={place.id}
              image={place.image}
              title={place.title}
              price={place.price}
              distance={place.distance}
              availability={place.availability}
            />
          );
        })}
      </div>
    </div>
  );
}

export default InspirationSection;
