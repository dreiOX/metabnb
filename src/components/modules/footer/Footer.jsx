import React from 'react';
import { Link } from 'react-router-dom';
import { facebook, instagram, twitter } from '../../../assets/icons';
import { FooterLogo } from '../../../assets/images';

function Footer() {
  return (
    <div className='grid grid-cols-4 px-40 bg-[#1D1D1E] text-white py-10'>
      <div className='flex flex-col'>
        <img src={FooterLogo} alt='footer logo' className='mb-32 w-[195px]' />
        <p className='mb-8 flex gap-6'>
          <img src={facebook} alt='facebook icon' />
          <img src={instagram} alt='instagram icon' />
          <img src={twitter} alt='twitter icon' />
        </p>
        <p className='text-sm font-normal'>
          © {new Date().getFullYear()} Metabnb
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className=' text-lg font-bold mb-4 ml-24'>Community</h2>
        <Link className='text-sm font-normal ml-24'>NFT</Link>
        <Link className='text-sm font-normal ml-24'>Tokens</Link>
        <Link className='text-sm font-normal ml-24'>Landlords</Link>
        <Link className='text-sm font-normal ml-24'>Discord</Link>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className=' text-lg font-bold mb-4 ml-24'>Places</h2>
        <Link className='text-sm font-normal ml-24'>Castle</Link>
        <Link className='text-sm font-normal ml-24'>Farms</Link>
        <Link className='text-sm font-normal ml-24'>Beach</Link>
        <Link className='text-sm font-normal ml-24'>Learnmore</Link>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className=' text-lg font-bold mb-4 ml-24'>About us</h2>
        <Link className='text-sm font-normal ml-24'>Road map</Link>
        <Link className='text-sm font-normal ml-24'>Creators</Link>
        <Link className='text-sm font-normal ml-24'>Career</Link>
        <Link className='text-sm font-normal ml-24'>Contact us</Link>
      </div>
    </div>
  );
}

export default Footer;
