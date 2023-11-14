import React from 'react'

const FirstSection = () => {
  return (
   <section className='md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200
   space-y-10 '>
        <div className='container mx-auto text-center'>
            <div className='text-6xl flex justify-center font-bold md:px-20 pb-10
         text-gradient bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text
          text-transparent'>
                 <h1>Build A Brand And Sell Your Dream</h1> 
            </div>
            <p className='text-lg md:text-xl  bg-gradient-to-r from-black
             to-gray-400 bg-clip-text text-transparent font-bold'>
                No matter what you design, we bring your dreams to life.
             </p>
             <div className='flex gap-4 justify-center pt-5'>
              <button className='bg-blue-500 text-white px-10 py-4 rounded-xl text-lg
               font-bold '> Get Started</button>
               <button className='bg-gray-600 text-white px-10 py-4 rounded-xl text-lg
                font-bold'>Learn More</button>
             </div>

         <div className='pt-10 '>
          <video className=' rounded-xl m-auto   ' autoPlay muted loop >
              <source src='/content/nft.mp4' type='video/mp4'/>
          </video>
          </div>
        </div>
    
  </section>
  )
}

export default FirstSection
