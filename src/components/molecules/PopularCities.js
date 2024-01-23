import React from 'react';
import PopularCitiesComponent from '../atoms/card/PopularCitiesComponent';

const PopularCities = () => {
  const indianCities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Ahmedabad", "Gujrat"];

  return (
    <div className='h-[500px] flex flex-col items-center'>
      <h1 className="mb-8 text-[25px] font-bold mt-[5%]">Popular Cities</h1>
      <div className='flex gap-4 justify-center items-center relative'>
        {indianCities.map((city, index) => (
          <PopularCitiesComponent key={index} city={city} />
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
