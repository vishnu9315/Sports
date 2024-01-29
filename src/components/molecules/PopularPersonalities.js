import React from 'react'
import PopularAcademiesPersonalities from '../atoms/card/PopularAcademiesPersonalities'
import {ViewAllButton} from '../atoms/index';

export const PopularPersonalities = () => {
  const data = [
    {
      profileImage: '/image1.png',
      title: 'All INDIA Kyokush, New Town, Kolkata',
      location: 'Dum Dum, Kolkata',
      activities: 'Karate, Badminton, Cricket',
      rating: '4.7',
    },
    {
      profileImage: '/image1.png',
      title: 'All INDIA Kyokush, New Town, Kolkata',
      location: 'Dum Dum, Kolkata',
      activities: 'Karate, Badminton, Cricket',
      rating: '4.7',
    },
    {
      profileImage: '/image1.png',
      title: 'All INDIA Kyokush, New Town, Kolkata',
      location: 'Dum Dum, Kolkata',
      activities: 'Karate, Badminton, Cricket',
      rating: '4.7',
    },
    {
      profileImage: '/image1.png',
      title: 'All INDIA Kyokush, New Town, Kolkata',
      location: 'Dum Dum, Kolkata',
      activities: 'Karate, Badminton, Cricket',
      rating: '4.7',
    },
    {
      profileImage: '/image1.png',
      title: 'All INDIA Kyokush, New Town, Kolkata',
      location: 'Dum Dum, Kolkata',
      activities: 'Karate, Badminton, Cricket',
      rating: '4.7',
    },
    {
      profileImage: '/image1.png',
      title: 'All INDIA Kyokush, New Town, Kolkata',
      location: 'Dum Dum, Kolkata',
      activities: 'Karate, Badminton, Cricket',
      rating: '4.7',
    },
  ];
  return (
    <div className='flex flex-col bg-[#fffafa] pb-8'>
      <div className='flex flex-row justify-between items-center p-10'>
        <h1 className='text-3xl font-bold mb-10'>Academies by popular <br />
          <span className='text-red-500'>sports personalities</span></h1>
        <ViewAllButton title="View All" />
      </div>
      <div className='w-full flex flex-wrap justify-center gap-6 items-center'>
        {data.map((item, index) => (
          <PopularAcademiesPersonalities key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

