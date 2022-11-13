import React from 'react';
import { InspImg } from '../../../assets/images';

function DiscoverSection() {
  return (
    <div className='bg-[#A02279] grid grid-cols-2 px-40 py-12'>
      <div className='my-auto'>
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
        <button className='bg-[#fff] text-[#A02279] py-4 px-8 border-2 border-white rounded-lg'>
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
