import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PLACE, HOME } from '../../../navigation/CONSTANTS';
import { NavLogo } from '../../../assets/images';
import { Modal } from '../modal';
import { close, menu } from '../../../assets/icons';

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className='h-24 flex gap-52 justify-between items-center lg:px-36 px-2 sticky top-0 z-40'>
      <div className='flex items-center'>
        <Link to={HOME}>
          <img
            src={NavLogo}
            alt='nav logo'
            className='sm:w-[195px] w-[140px]'
          />
        </Link>
        <div className='lg:hidden absolute right-8 top-[2.5rem] cursor-pointer' onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? (
            <img src={close} alt='close logo' />
          ) : (
            <img src={menu} alt='menu logo' />
          )}
        </div>
      </div>

      <div
        className={` bg-[#fff] transition-all duration-500 ease-in lg:flex items-center absolute lg:static left-0 lg:z-auto z-[-1] w-full gap-32 pb-8 sm:p-0 ${
          navOpen ? ' top-[6.2rem]' : ' top-[-800px]'
        }`}
      >
        <div className='flex flex-col lg:flex-row lg:gap-16 gap-8  font-normal text-[#434343] sm:mb-0 mb-8 items-center'>
          <Link to={HOME}>Home</Link>
          <Link to={PLACE}>Place to stay</Link>
          <Link>NFTs</Link>
          <Link>Community</Link>
        </div>

        <Link className="flex items-center justify-center">
          <button
            className='bg-purple px-8 py-4 rounded-lg text-white lg:ml-24 w-[80%]'
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Connect wallet
          </button>
        </Link>
      </div>
      {modalOpen ? <Modal setOpenModal={setModalOpen} /> : null}
    </div>
  );
}

export default Navbar;
