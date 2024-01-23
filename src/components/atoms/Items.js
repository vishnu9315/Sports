import React from 'react'

const Items = ({Links, title}) => {
  return (
    <ul>
      <h1 className='mb-3 font-semibold text-lg'>{title}</h1>
      {Links.map((link) => (
        <li className='mb-2' key = {link}>
          <a className='text-gray-500 text-sm cursor-pointer'>{link}</a>
        </li>
      ))}
    </ul>
  )
}

export default Items