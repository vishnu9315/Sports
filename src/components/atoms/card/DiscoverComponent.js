import React from 'react'
import Image from 'next/image';

const DiscoverComponent = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between mt-[50px] w-full">
    <div className="flex-grow mr-4 w-1/6 flex justify-center flex-col relative rounded-xl">
      {/* Image with absolute-positioned text */}
      <Image src='/assets/Rectangle 2.png' width={800} height={560} alt="court" className='object-cover rounded-xl' />

      {/* Overlay text */}
      <div className='absolute ml-4  z-10'>
        <h3 className="text-2xl text-white font-bold mb-2 ">
          Best Badminton
        </h3>

        <p className="text-lg text-white absolute z-10">Academies in Your area.</p>
      </div>
    </div>
    <div className='flex flex-row justify-between'>
      <div className="flex-grow mr-4 w-1/4 flex justify-center relative rounded-xl">
        <Image src='/assets/Rectangle 3.png' width={250} height={300} alt="court" className='"object-fit: "cover" rounded-xl' />

        <div className='absolute z-10 p-6'>
          <h3 className="text-2xl text-white font-bold mb-2 ">
            Events
          </h3>

          <p className="text-sm text-white absolute z-10">Get a curated list of events.</p>
        </div>
      </div>

      <div className="flex-grow mr-4 w-1/4 flex justify-center relative rounded-xl">
        <Image src='/assets/Rectangle 4.png' width={250} height={300} alt="court" className='"object-fit: "cover" rounded-xl' />

        <div className='absolute z-10 p-6'>
          <h3 className="text-2xl text-white font-bold mb-2 ">
            LIST YOUR ACADEMY
          </h3>
        </div>
      </div>
      <div className="flex-grow mr-4 w-1/4 flex justify-center relative rounded-xl">
        <Image src='/assets/Rectangle 5.png' width={250} height={300} alt="court" className='"object-fit: "cover" rounded-xl' />

        <div className='absolute z-10 p-6'>
          <h3 className="text-2xl text-white font-bold mb-2 ">
            DOWNLOAD THE APP
          </h3>

        
        </div>
      </div>
    </div>
  </div>
  )
}

export default DiscoverComponent