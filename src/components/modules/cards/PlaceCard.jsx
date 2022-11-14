import React from 'react';
import PropTypes from 'prop-types';

function PlaceCard({ image, title, price, distance, availability }) {
  return (
    <div>
      <div className='w-[292px] md:w-[250px] lg:w-[292px] h-[372px] bg-white rounded-2xl border-2 border-[#D7D7D7] flex flex-col p-2 mx-auto'>
        <div className=' flex items-center justify-center'>
          <img src={image} alt={title} />
        </div>
        <div className='flex gap-24 md:gap-[4.5rem] mt-2 items-center justify-center'>
          <p className='text-xs font-normal text-left'>{title}</p>
          <p className='text-xs font-bold text-right'>{price}</p>
        </div>
        <div className='flex gap-6 md:gap-4 mt-2 items-center justify-center'>
          <p className='text-xs font-normal text-left'>{distance}</p>
          <p className='text-xs font-normal text-right'>{availability}</p>
        </div>
        <div className='ml-2 mt-2 flex gap-1'>
          <span className='text-[#A02279]'>&#9733;</span>
          <span className='text-[#A02279]'>&#9733;</span>
          <span className='text-[#A02279]'>&#9733;</span>
          <span className='text-[#A02279]'>&#9733;</span>
          <span className='text-[#A02279]'>&#9733;</span>
        </div>
      </div>
    </div>
  );
}
PlaceCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  distance: PropTypes.string,
  availability: PropTypes.string,
};

export default PlaceCard;
