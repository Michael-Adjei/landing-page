import React from 'react'
import Image from 'next/image'

const ThirdSection = () => {
  return (
    <div className='flex p-10 flex-col md:flex-row md:justify-evenly'>
       <div className='flex flex-col md:flex-row gap-6 md:px-10'>
          <div className=' md:w-2/3 w-full '>
             <video className=' rounded-xl' autoPlay muted loop>
               <source src='/content/video1.mp4' />
             </video>
          </div>
          <div className='flex flex-col border p-4 rounded-xl md:w-2/5'>
            <div className='text-4xl flex justify-center text-center md:text-5xl font-bold
             bg-gradient-to-l from-yellow-300 to-blue-300 bg-clip-text text-transparent'>
              Future Starts Now
            </div>
            <div className='md:px-20 space-y-6 flex flex-col items-center justify-center'>
              <div className='text-lg pt-10 flex gap-4 '>
                <Image src='/images/pictures/home.png' alt='home image' width={70} height={70}
                className=' object-contain h-20 w-20 flex items-center justify-center rounded-xl'/>
                <div className='flex flex-col gap-2 '>
                     Choose from a variety of plan with us to get you started.
                </div>
              </div>
                 <div className='flex flex-col'>
                     <div className='text-lg flex items-center gap-5'>
                        <Image src='/images/pictures/brain.png' alt='idea image' width={70} height={70}/>
                        <div className='flex flex-col gap-2 '>
                         We pay attention to even the smallest ideas and grow it to some great
                </div>
                     </div>
                 </div>
                 <div className='flex flex-col'>
                     <div className='text-lg flex items-center gap-5'>
                        <Image src='/images/pictures/two.png' alt='idea image' width={70} height={70}/>
                        <div className='flex flex-col gap-2 '>
                         We pay attention to even the smallest ideas and grow it to some great
                </div>
                     </div>
                 </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default ThirdSection
