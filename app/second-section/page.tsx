'use client'
import React from 'react'
import Image from 'next/image'

const features = [
    {
        id : 1,
        name : 'Connection',
        description : 'We connect very well with our clients and our services are open to all.',
        image : '/images/pictures/heart.png',
        alt : 'Connections'
    },

    {
        id : 2,
        name : 'Ideas',
        description : 'We take every idea serious and try our best to bring it to life as our customers want it to be presented.',
        image : '/images/pictures/Bulb.png',
        alt : 'Ideas'
    },

    {
        id : 3,
        name : 'Global',
        description : 'Our service run in over 28 countries and currently working on opening more branches.',
        image : '/images/pictures/earth.png',
        alt : 'Global'
    },
    
    {
        id : 4,
        name : 'Customer Service',
        description : 'Our customer service is second to none as our doors are open to everyone.',
        image : '/images/pictures/customer.png',
        alt : 'Customer Service'
    },

    {
        id : 5,
        name : '24hrs Chat Service',
        description : 'Our 24hrs chat service helps address customers issues throughout the week to help the operate very well.',
        image : '/images/pictures/chat.png',
        alt : '24hrs Chat Service'
    },

    {
        id : 6,
        name : 'Full Stack Development',
        description : 'We develop both frontend and backend for our client and make sure we maintain the site.',
        image : '/images/pictures/sdk.png',
        alt : 'Connections'
    },
]

const SecondSection = () => {
  return (
    <div>
       <div className='flex md:flex-row flex-col items-center justify-center pb-10'>
         <div className='flex flex-col p-5 justify-center md:w-1/3'>
             <div className=' bg-gradient-to-r from-blue-800 to-green-300
              bg-clip-text text-transparent text-4xl md:text-6xl font-bold pb-10'>
                 From A Humble StartUp To A Global Force
             </div>
             <div className='text-2xl mb-8 '>
               Built for all business and communities. We transform startups to global companies.
             </div>
             <button className='bg-blue-500 text-white p-4 flex justify-center items-center
              md:w-1/3 rounded-xl hover:bg-blue-600'> Get Started</button>
              </div>

              <video className='rounded-xl md:w-2/4 p-4 md:p-0' autoPlay loop muted >
                 <source src='/content/sketch.mp4' />
              </video>
         
       </div>
       <div className='flex flex-col items-center justify-center'>
            <div className='text-3xl flex justify-center items-center md:text-5xl font-bold
             pt-5 pb-10 bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text 
             text-transparent '>
                Product Features
            </div>
            <div className='grid grid-cols-1 p-4 md:grid-cols-3 gap-6 md:px-40'>
                {
                  features.map((item, index)=> {
                    return (
                        <div key={index} className='flex flex-col space-y-6 pb-10 border
                         p-8 rounded-xl items-center justify-center w-full hover:scale-105
                         transform transition-all ease-in-out duration-500' >
                            <div className='text-gray-600 text-3xl font-bold'>
                             <Image src={item.image} alt={item.alt} width={300} height={300}
                             className=' object-contain h-20 w-20 flex justify-center 
                             items-center mx-auto mb-10'/>
                             <div >
                                <div className='text-2xl pb-4 bg-gradient-to-r from-black
                                 to-gray-400 bg-clip-text text-transparent'>
                                     {item.name}
                                </div>
                                <div className=' bg-gradient-to-r from-gray-800
                                 to-gray-500 bg-clip-text text-transparent text-lg'>
                                    {item.description}
                                </div>
                             </div>
                            </div>
                        </div>
                    )
                  })
                }
            </div>
       </div>
    </div>
  )
}

export default SecondSection
