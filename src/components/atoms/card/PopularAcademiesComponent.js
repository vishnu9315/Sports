'use client'
import Image from 'next/image';
import image from '../card/image.png'
import HorizontalLine from '../horizontalline/HorizontalLine';
import { FcCallback } from "react-icons/fc";


const PopularAcademiesComponent = ({ profileImage, title, location, activities, rating, address }) => {
    console.log(title)
    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  p-6">
            <div className='flex items-center justify-between gap-5'>
                <div>
                    <Image src={image} alt="" height={150} width={150} className='rounded-[50%]' />
                </div>
                <div>
                    <div className='flex'>
                        <h1>All INDIA Kyokush, New
                            Town, kolkata</h1>
                        <p>Heart</p>
                    </div>
                    <p>Category</p>
                    <p>Ratings</p>
                </div>
            </div>

            <hr style={{ borderTop: '2px solid #e6e6e6' }} className='mt-6 mb-2'/>

            <div className='flex items-center'>
                <h4 className='mr-8 mt-4'>Dum Dum, Kolkata, West Bengal</h4>
                <div className='flex gap-2'>
                    <button className='p-2'><FcCallback /></button>
                    <button className='p-2'><FcCallback /></button>
                </div>
            </div>



        </div>

    );
};

export default PopularAcademiesComponent;
