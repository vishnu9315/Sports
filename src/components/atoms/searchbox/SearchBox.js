// SearchBox.js

import React from 'react';

const SearchBox = ({ placeholder }) => {
  return (
    <div className='w-full'>
      <input type="text" placeholder={placeholder} className='rounded py-1 px-4' />
    </div>
  );
};

export default SearchBox;
