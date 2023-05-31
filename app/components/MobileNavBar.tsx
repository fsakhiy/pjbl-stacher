'use client'
import React, { useState } from 'react';
import PageSelector from '../components/PageSelector';
import SigninButton from '../components/SigninButton';
import Providers from '../components/Providers';

const MobileNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Providers>
      <div className='fixed w-full bg-white md:hidden border-b-2'>
        <div className='flex items-center'>
        <button onClick={toggleVisibility} className='w-auto p-3 m-5 rounded-lg font-semibold bg-neutral-200'>Menu</button>
        <div className='text-3xl font-bold text-sky-600'>Stacher</div>
        </div>
        {isVisible && <ComponentToToggle />}
      </div>
    </Providers>
    
  );
};

const ComponentToToggle = () => {
  return (
    <div className='h-screen bg-white flex flex-col md:hidden border-b pb-5 shadow-lg'>
      {/* <div className='p-5 text-4xl text-center font-bold text-sky-600'>Stacher</div> */}
      <div className='flex flex-col gap-4 md:hidden'>

        <PageSelector page='Home'/>
        <PageSelector page='New Data'/>
        <SigninButton />
      </div>
    </div>
  )
};

export default MobileNavbar;