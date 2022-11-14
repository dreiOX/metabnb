import React, { useState, useEffect } from 'react';
import PlaceCard from '../../modules/cards/PlaceCard';
import PlaceCardData from '../../../data/PlaceCardData';
import { filter } from '../../../assets/icons';

function LocationSection() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const data = PlaceCardData;
    setCardData(data);
  }, []);
  return (
    <div className='lg:px-36 md:px-1 px-2 py-12'>
      <div className='flex items-center '>
        <div className='sm:flex justify-between items-center sm:gap-4 lg:gap-16 hidden'>
          <p>Restaurant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>fantast city</p>
          <p>beach</p>
          <p>Carbins</p>
          <p>Off-grid</p>
          <p>Farm</p>
        </div>
        <p className='flex gap-2 border-2 border-[#D7D7D7] rounded-md sm:p-2 py-2 px-24 sm:ml-6 lg:ml-24 mx-auto'>
          Location
          <span>
            <img src={filter} alt='filter icon' className='rotate-90' />
          </span>
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 md:gap-4 items-center gap-8  lg:gap-8 justify-center my-12'>
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
