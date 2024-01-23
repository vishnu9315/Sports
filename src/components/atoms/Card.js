import React from 'react';

const CardComponent = () => {
  return (
    <div className="flex flex-row justify-between mt-[50px] w-full ">
      <div className="bg-blue-200 p-4 mr-4 flex-grow w-1/2 h-[300px] flex justify-center flex-col rounded-xl">
        {/* First card with more width */}
        <h3 className="text-xl font-bold mb-2">Best Badminton</h3>
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
