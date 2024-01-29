import Image from 'next/image';
import React from 'react';
import court from '../atoms/Rectangle 2.png'

const CardComponent = () => {
  return (
    <div className="flex flex-row justify-between mt-[50px] w-full ">
      <div className="p-4 mr-4 flex-grow w-1/2 h-[300px] flex justify-center flex-col rounded-xl">
        
        <h3 className="text-xl font-bold mb-2">Best Badminton</h3>
        <Image src={court} alt="court" height={40} width={40} className='object-fit: "cover" z-10' />

        <p>Academies in Your area.</p>
      </div>
        <div className='flex flex-row justify-between'>
        <div className="bg-green-200 p-4 w-1/4 flex-grow mr-2 rounded-xl">
        {/* Other cards with regular width */}
        <h3 className="text-xl font-bold mb-2">Card 2</h3>
        <p>Shorter card content.</p>
      </div>
      <div className="bg-yellow-200 p-4 w-1/4 flex-grow mr-2 rounded-xl">
        <h3 className="text-xl font-bold mb-2">Card 3</h3>
        <p>Another shorter card content.</p>
      </div>
      <div className="bg-yellow-200 p-4 w-1/4 flex-grow mr-2 rounded-xl">
        <h3 className="text-xl font-bold mb-2">Card 4</h3>
        <p>Yet another shorter card content.</p>
      </div>
        </div>
    </div>
  );
};

export default CardComponent;
