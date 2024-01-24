import React from 'react'
import Image from 'next/image'
import img from '../card/Rectangle.png'
const UpcomingEvents = () => {
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-2xl  shadow dark:bg-gray-800 dark:border-gray-700 '>
      <div className='flex flex-col justify-between gap-5 '>
        <div>
          <Image src={img} alt="" className='object-fit: "cover" rounded-2xl' />
        </div>
        <div className='ml-6 mb-4'>
          <h2 className='text-lg font-bold'>Inter-state Badminton
            Tournament</h2>
          <h4 className='mt-2 text-md'>Kolata</h4>
          <p className='mt-2'>Category</p>
          <p className='mt-2 text-lg'>Price</p>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents