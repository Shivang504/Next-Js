import React from 'react';
import Image from 'next/image';
import Vector from '../../../public/next.svg';

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-8'>
      <h1 className='text-2xl font-semibold mb-6'>Image Optimization</h1>

      <Image src={Vector} alt='Vercel Logo' width={200} height={200} />
      {/* You can adjust width and height as needed */}

      {/* we need to pass domain in next config.js to use url images */}

      <Image src={'g'} alt='imag1' width={400} height={400} />
    </div>
  );
};

export default Page;
