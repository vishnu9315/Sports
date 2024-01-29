import React from 'react'
import PopularAcademiesComponent from '../atoms/card/PopularAcademiesComponent'
import {ViewAllButton} from '../atoms/index.js'

export const PopularAcademies = () => {
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
        // Add more data objects as needed
      ];

  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold mb-10'>Popular Academies in <span className='text-red-500' >Kolkata </span></h1>
    
    <div className='w-full flex flex-wrap justify-center gap-6 items-center'>
      {data.map((item, index) => (
        <PopularAcademiesComponent key={index} title={item.title} {...item} />
      ))}
    </div>
    <ViewAllButton title="View All Events"/>
    </div>
  )
}
