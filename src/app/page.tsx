"use client"

import { data } from '@/data/data'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });

      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).toLowerCase();

      setCurrentTime(`${formattedDate} ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='max-w-[450px]'>
      <div className='w-full h-[100vh] relative'>
        {/* Image */}
        <Image 
          src='/images/pic1.jpeg' 
          fill 
          alt='' 
          className='object-cover'
        />
        
        <div className='flex items-center gap-2 absolute bottom-[1rem] w-[96%] h-[90px] p-[1rem] left-[.5rem] right-2'>
          {/* Left Image */}
          <div className='w-[25%] h-full relative'>
            <Image 
              src='/images/pic2.jpeg' 
              alt='s' 
              fill
              className='object-cover' 
            />
          </div>

          {/* Glassmorphic Transparent Overlay */}
          <div className='w-[75%] h-full rounded-md rounded-tr-[0px] padding leading-[20px] text-white bg-[rgba(0,0,0,0.55)] backdrop-filter'>
            <div className='flex items-center gap-2 p-2 absolute text-[0.65rem] right-[0] top-[-1rem] font-[900] m-3 bg-[rgba(0,0,0,0.55)] backdrop-filter'>
              <Image 
                src='/images/gps.jpg' 
                alt='s' 
                height={30} 
                width={30} 
                className='object-contain' 
              />
              <h3>GPS Map Camera</h3>
            </div>
            <p className='text-[0.8rem]'>{data.location}</p>
            <span className='text-[0.75rem]'>{data.address}</span>
            <p className='text-[0.75rem]'>Lat {data.lat} Long {data.long}</p>
            <p className='uppercase text-[0.75rem]'>{currentTime} GMT +1:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page