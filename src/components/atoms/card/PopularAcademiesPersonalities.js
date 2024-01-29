import React from 'react';
import ms from '../card/ms.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

const PopularAcademiesPersonalities = () => {
    const indianCities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Ahmedabad", "Gujrat"];
    return (
        <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className='w-full flex items-center justify-between gap-5 p-4'>
                <div>
                    <Image src={ms} alt="" height={150} width={150} className='rounded-[50%]' />
                </div>
                <div>
                    <div className='flex justify-center'>
                        <h1>All INDIA Kyokush, New Town, Kolkata</h1>
                    </div>
                    <p className='text-sm'>Cricket</p>
                </div>
            </div>

            <div className='w-full flex flex-row items-center p-4'>
                <span className='text-gray-500 font-bold mr-4'>Country</span>
                <hr className='flex-grow border-t-2 border-gray-300' />
            </div>

            <div className='w-full grid grid-cols-4 gap-3 pl-4'>
                <h2>India</h2>
                <h2>India</h2>
                <h2>India</h2>
                <h2>+4</h2>
            </div>

            <div className='w-full bg-[#fffafa] p-4'>
                <div className='grid grid-cols-3 gap-3 mt-2'>
                {indianCities.map((city, index) => (
                    <h3 className='border border-black bg-[#ffeaf0] px-2 rounded-xl' key = {index}>{city}</h3>
                   
                ))}
                
                </div>
            </div>

        </div>
    );
};

export default PopularAcademiesPersonalities;
