import React from 'react'
import Image from 'next/image'
import google from '../card/googleplay.png'
import apple from '../card/Appstore.png'
import img from '../card/qr.png'
import image1 from '../card/image1.png'

export const DownloadAppComponent = () => {
    return (
        <div className='w-full h-screen flex justify-between pr-[5%]'>
            <div className='flex flex-col p-[10%]'>
                <h1 className='mt-5 text-4xl font-bold'>Download our App</h1>
                <h4 className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                <div className='flex mt-5'>
                    <a href = "/#" className='mr-4'>
                        <Image src={google} alt="App" />
                    </a>
                    <a>
                        <Image src={apple} alt="App" />
                    </a>
                </div>
                <hr style={{ borderTop: '2px solid #e6e6e6' }} className='mt-6 mb-2' />

                <div className='w-4/3 flex items-center p-4 justify-between mt-8'>
                    <h1 className='font-bold text-2xl'>Scan the QR to download
                        <br />the application</h1>
                    <Image src={img} alt="Scan" height={80} width={80} className='ml-8'/>
                </div>
            </div>



            <div className='flex items-end'>
                <Image src={image1} alt="tryiea" />
            </div>

        </div>
    )
}

