import React from 'react';
import { Link } from 'react-router-dom';
import { arrow, close } from '../../../assets/icons';
import { metamaskImg, walletConnectImg } from '../../../assets/images';

function Modal({ setOpenModal }) {
  return (
    <div
      className='fixed inset-0 bg-[#000] bg-opacity-70 flex items-center justify-center '
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <div className='sm:w-[600px] w-[90%] sm:h-[340px] h-[326px] rounded-lg py-4 bg-[#fff]'>
        <div className='flex border-b-2 border-b-[#D7D7D7] p-4 sm:px-8 pl-4 pr-8 justify-between'>
          <div>
            <p className='font-bold'>Connect Wallet</p>
          </div>
          <div className=' font-bold'>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <img src={close} alt='close icon' />
            </button>
          </div>
        </div>
        <div className='mb-3 mt-6'>
          <p className='sm:ml-8 ml-4'>Choose your preferred wallet:</p>
        </div>
        <div className='sm:px-8 px-4'>
          <Link>
            <div className='flex items-center justify-between sm:py-4 py-2 px-4 w-full border-2 border-[#D7D7D7] rounded-lg mb-3'>
              <div className='flex items-center gap-2'>
                <img src={metamaskImg} alt='metamask logo' />
                <p className=' font-bold'>Metamask</p>
              </div>
              <div>
                <button>
                  <img src={arrow} alt='arrow icon' />
                </button>
              </div>
            </div>
          </Link>
          <Link>
            <div className='flex items-center justify-between  sm:py-4 py-2 px-4 w-full border-2 border-[#D7D7D7] rounded-lg'>
              <div className='flex items-center gap-2'>
                <img src={walletConnectImg} alt='metamask logo' />
                <p className=' font-bold'>WalletConnect</p>
              </div>
              <div>
                <button>
                  <img src={arrow} alt='arrow icon' />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
