// ViewAllButton.js
import React from 'react';

export const ViewAllButton = ({title}) => {
  return (
    <div className="flex items-center mt-10 mb-10 ">
      <button className="border border-red-500 text-black font-bold py-2 px-11 rounded-lg">
        {title}
      </button>
    </div>
  );
};

