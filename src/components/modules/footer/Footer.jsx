import React from 'react';
import { Link } from 'react-router-dom';
import { facebook, instagram, twitter } from '../../../assets/icons';
import { FooterLogo } from '../../../assets/images';

function Footer() {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-40 px-2 bg-[#1D1D1E] text-white py-10'>
      <div className='flex flex-col sm:mb-0 mb-16 sm:items-start items-center'>
        <img src={FooterLogo} alt='footer logo' className='sm:mb-32 mb-12 w-[195px]' />
        <p className='mb-8 flex gap-6'>
          <img src={facebook} alt='facebook icon' />
          <img src={instagram} alt='instagram icon' />
          <img src={twitter} alt='twitter icon' />
        </p>
        <p className='text-sm font-normal  sm:block hidden'>
          © {new Date().getFullYear()} Metabnb
        </p>
      </div>

      <div className='flex flex-col gap-4 sm:mb-0 mb-12'>
        <h2 className=' text-lg font-bold mb-4 sm:ml-24 mx-auto'>Community</h2>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>NFT</Link>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>Tokens</Link>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>Landlords</Link>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>Discord</Link>
      </div>
      <div className='flex flex-col gap-4 sm:mb-0 mb-12'>
        <h2 className=' text-lg font-bold mb-4 sm:ml-24 mx-auto'>Places</h2>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>Castle</Link>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>Farms</Link>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>Beach</Link>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>Learnmore</Link>
      </div>
      <div className='flex flex-col gap-4 sm:mb-0 mb-16'>
        <h2 className=' text-lg font-bold mb-4 sm:ml-24 mx-auto'>About us</h2>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>Road map</Link>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>Creators</Link>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>Career</Link>
        <Link className='text-sm font-normal sm:ml-24 mx-auto'>Contact us</Link>
      </div>
      <p className='text-sm font-normal  sm:hidden block text-center sm:text-left'>
          © {new Date().getFullYear()} Metabnb
        </p>
    </div>
  );
}

export default Footer;
