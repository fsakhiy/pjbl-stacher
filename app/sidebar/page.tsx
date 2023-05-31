'use client'
import React, { useState } from 'react';
import PageSelector from '../components/PageSelector';
import SigninButton from '../components/SigninButton';
import Providers from '../components/Providers';

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Providers>
      <div>
        <button onClick={toggleVisibility}>Toggle Component</button>
        {isVisible && <ComponentToToggle />}
      </div>
    </Providers>
    
  );
};

const ComponentToToggle = () => {
  return (
    <div className='flex flex-col md:hidden border-b pb-5 '>
      <div className='p-5 text-4xl text-center font-bold text-sky-600'>Stacher</div>
      <div className='flex flex-col gap-4 md:hidden'>

        <PageSelector page='Home'/>
        <PageSelector page='New Data'/>
        <SigninButton />
      </div>
    </div>
  )
};

export default MyComponent;