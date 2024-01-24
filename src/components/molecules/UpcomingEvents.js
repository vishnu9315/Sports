import React from 'react';
import UpcomingEventsComponent from '../atoms/card/UpcomingEventsComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import ViewAllButton from '../atoms/button/ViewAllButton';

const UpcomingEvents = () => {
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
  ];

  return (
    <div className='w-full h-[500px]'>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-[2%] flex flex-grow gap-4'>
        <div className='flex flex-col items-start w-full'>
          <div>
            <h1 className='text-3xl font-bold mr-8'>Upcoming <br />
              <span className='text-red-500'>Events</span>
            </h1>
            <h2 className='text-lg tracking-widest'>Kolkata</h2>
            <div className='flex mt-[30%] '>
              <button className='text-white bg-red-500 rounded-[50%]' >
                <FontAwesomeIcon icon={faArrowLeft} height={30} width={30} className='p-2'/>
              </button>
              <button className='text-white bg-red-500 rounded-[50%] ml-4'>
                <FontAwesomeIcon icon={faArrowRight} height={30} width={30} className='p-2'/>
              </button>
            </div>
          </div>
          <ViewAllButton title="View All Events" className="ml-auto" />
        </div>
        {data.map((sport, index) => (
          <UpcomingEventsComponent key={index} {...sport} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
