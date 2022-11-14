import React from 'react';
import { HeroImg } from '../../../assets/images';

function HeroSection() {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 w-full lg:px-36 md:px-8 px-2 py-12'>
      <div className='my-auto w-full'>
        <h2 className='text-5xl text-main font-semibold mb-4 text-center lg:text-left'>
          Rent a <span className='text-[#A02279]'>place</span> away from
        </h2>
        <h2 className='text-5xl text-main font-semibold mb-14 text-center lg:text-left'>
          <span className='text-[#A02279]'>Home</span> in the
          <span className='text-[#A02279]'> Metaverse</span>
        </h2>
        <p className='text-2xl sm:text-xl font-normal text-main mb-14 text-center lg:text-left'>
          we provide you access to luxury and affordable houses
          <br /> in the metaverse, get a chance to turn your
          <br /> imagination to reality at your comfort zone
        </p>
        <form className='flex justify-center lg:justify-start'>
          <input placeholder='Search for location' className='border-2 border-[#A3A3A3] rounded-l-lg px-4 w-3/5' />
          <button className='bg-purple text-white py-4 sm:px-20 px-8  rounded-r-lg'>Search</button>
        </form>
      </div>
      <div className='lg:ml-20 mx-auto'>
        <img src={HeroImg} alt='hero' />
      </div>
    </div>
  );
}

export default HeroSection;
