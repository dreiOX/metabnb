import React from 'react';
import { InspImg } from '../../../assets/images';

function DiscoverSection() {
  return (
    <div className='bg-[#A02279] grid lg:grid-cols-2 grid-cols-1 lg:px-36 px-2 py-12 lg:gap-0 gap-12'>
      <div className='my-auto text-center lg:text-left'>
        <h2 className='text-5xl font-bold text-white mb-12'>Metabnb NFTs</h2>
        <p className='text-lg font-normal text-white mb-12'>
          Discover our NFT gift cards collection. Loyal
          <br />
          customers gets amazing gift cards which are
          <br />
          traded as NFTs. These NFTs gives our cutomer
          <br />
          access to loads of our exclusive services.
        </p>
        <button className='bg-[#fff] text-[#A02279] py-4 lg:px-4 px-8 border-2 border-white rounded-lg w-[80%] sm:w-[50%] lg:w-[26%]'>
          Learn more
        </button>
      </div>
      <div>
        <img src={InspImg} alt='places' />
      </div>
    </div>
  );
}

export default DiscoverSection;
