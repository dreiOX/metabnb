import React from 'react';
import { Link } from 'react-router-dom';
import { PLACE, HOME } from '../../../navigation/CONSTANTS';
import { NavLogo } from '../../../assets/images';

function Navbar() {
  return (
    <div className='h-28 flex justify-between items-center px-40'>
      <div>
        <Link>
          <img src={NavLogo} alt='nav logo' className='w-[195px]' />
        </Link>
      </div>
      <div className='flex gap-20 text-sm font-normal text-[#434343]'>
        <Link to={HOME}>Home</Link>
        <Link to={PLACE}>Place to stay</Link>
        <Link>NFTs</Link>
        <Link>Community</Link>
      </div>

      <Link>
        <button className='bg-purple px-8 py-4 rounded-lg text-white'>
          Connect wallet
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
