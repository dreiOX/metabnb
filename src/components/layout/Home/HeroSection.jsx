import React from 'react';
import { HeroImg } from '../../../assets/images';

function HeroSection() {
  return (
    <div className='grid grid-cols-2 px-40 py-12 gap-8'>
      <div className='my-auto'>
        <h2 className='text-5xl text-main font-semibold mb-4'>
          Rent a <span className='text-[#A02279]'>place</span> away from
        </h2>
        <h2 className='text-5xl text-main font-semibold mb-14'>
          <span className='text-[#A02279]'>Home</span> in the
          <span className='text-[#A02279]'> Metaverse</span>
        </h2>
        <p className='text-2xl font-normal text-main mb-14'>
          we provide you access to luxury and affordable houses
          <br /> in the metaverse, get a chance to turn your
          <br /> imagination to reality at your comfort zone
        </p>
        <form className='flex'>
          <input placeholder='Search for location' className='border-2 border-[#A3A3A3] rounded-l-lg px-4 w-3/5' />
          <button className='bg-purple text-white py-4 px-20 rounded-r-lg'>Search</button>
        </form>
      </div>
      <div className='ml-20'>
        <img src={HeroImg} alt='hero' />
      </div>
    </div>
  );
}

export default HeroSection;
