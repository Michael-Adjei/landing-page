import React from 'react'

const  FourthSection = () => {
  return (
    <div className='flex items-center justify-center md:py-10'>
      <div className='text-center md:text-6xl text-4xl bg-gradient-to-r
       from-blue-800 to-purple-300 bg-clip-text text-transparent font-bold'>
         Frontend Development Made Simple
         <div className='flex justify-center items-center md:pt-10 pt-5'>
             <video className=' rounded-xl w-2/3  ' autoPlay muted loop>
                <source src='/content/office.mp4'  />
             </video>
         </div>
      </div>
    </div>
  )
}

export default FourthSection
