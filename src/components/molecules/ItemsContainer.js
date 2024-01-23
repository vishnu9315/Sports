import React from 'react'
import Items from '../atoms/Items'
import SocialMediaIcons from '../atoms/socialmediaicons/SocialMediaIcons'
import { cities, academies, countries } from '../../utils/Data'

const ItemsContainer = () => {
    return (
        <div className='bg-[#151515] py-[50px] w-full'>
            <div className="flex justify-between px-12 mb-4">

                <h1 className='text-[30px]'><span className='text-red-500'>//</span>9Sportz</h1>

                <SocialMediaIcons />

            </div>

            <hr className="border-t-[0.5px] solid border-[#FFFFFF] w-[95%] m-auto" />

            <div className='grid grid-cols-1 justify-center place-content-center sm:grid-cols-3 lg:grid-cols-3 ml-8 gap-6 sm:px-16 py-12 '>
                <Items Links={cities} title="Popular Cities" />
                <Items Links={academies} title="Popular Academies" />
                <Items Links={countries} title="Popular Countries" />

            </div>
        </div>
    )
}

export default ItemsContainer