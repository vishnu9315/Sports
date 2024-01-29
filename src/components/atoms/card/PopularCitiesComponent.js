import React from 'react';
import Image from 'next/image';

const PopularCitiesComponent = ({text, image}) => {
  return (
    <div>
        <div className="shape border border-black h-48 w-32 rounded-full flex flex-col justify-center items-center">
        <Image src={image} alt="Small Card Image" height = {100} width = {100} className="mb-2" />
        <p className="text-sm font-semibold p-4">{text}</p>
          
        </div>
    </div>
  );
};

export default PopularCitiesComponent;
