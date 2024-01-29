import React from 'react';
import PopularCitiesComponent from '../atoms/card/PopularCitiesComponent';

export const PopularCities = () => {
  const indianCities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Ahmedabad", "Gujrat"];

  const  cities = [
  { text: "Mumbai", image: "/assets/image 3.png" },
  { text: "Delhi", image: "/assets/image 4.png" },
  { text: "Bangalore", image: "/assets/image 5.png" },
  { text: "Chennai", image: "/assets/image 6.png" },
  { text: "Kolkata", image: "/assets/image 7.png" },
  { text: "Hyderabad", image: "/assets/image 8.png" },
  { text: "Ahmedabad", image: "/assets/image 9.png" },
  { text: "Gujrat", image: "/assets/image 10.png" }
  ]

  return (
    <div className='h-[500px] flex flex-col items-center'>
      <h1 className="mb-8 text-[25px] font-bold mt-[5%]">Popular Cities</h1>
      <div className='flex gap-4 justify-center items-center relative'>
        {cities.map((city, index) => (
          <PopularCitiesComponent key={index} text={city.text} image = {city.image} />
        ))}
      </div>
    </div>
  );
};


