import React from 'react';


const PopularCitiesComponent = ({city}) => {
  return (
    <div>
        <div className="shape border border-black h-48 w-32 rounded-full flex justify-center items-center">
            {city}
        </div>
    </div>
  );
};

export default PopularCitiesComponent;
