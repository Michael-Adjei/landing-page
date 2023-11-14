 'use client'
 import React,{useState,useEffect} from 'react'
 import { motion ,AnimatePresence } from 'framer-motion'
 import Image from 'next/image'

 const images = [
    

    {
        id : 2,
        url : '/images/logo/logo-2.svg',
        alt : 'logo'
    },

    {
        id : 3,
        url : '/images/logo/logo-3.svg',
        alt : 'logo'
    },

    {
        id : 4,
        url : '/images/logo/logo-4.svg',
        alt : 'logo'
    },

    {
        id : 5,
        url : '/images/logo/logo-5.svg',
        alt : 'logo'
    },
    
    {
        id : 6,
        url : '/images/logo/logo-6.svg',
        alt : 'logo'
    }, 

    {
        id : 7,
        url : '/images/logo/logo-7.svg',
        alt : 'logo'
    },

    {
        id : 8,
        url : '/images/logo/logo-8.svg',
        alt : 'logo'
    },

    {
        id : 9,
        url : '/images/logo/logo-8.svg',
        alt : 'logo'
    },

    {
        id : 10,
        url : '/images/logo/logo-10.svg',
        alt : 'logo'
    },

    {
        id : 11,
        url : '/images/logo/logo-11.svg',
        alt : 'logo'
    },

    {
        id : 12,
        url : '/images/logo/logo-12.svg',
        alt : 'logo'
    },

    {
        id : 13,
        url : '/images/logo/logo-13.svg',
        alt : 'logo'
    },
 ]

const Carousel = () => {
    const [currentImgIndex,setCurrentImgIndex] = useState(0);

    useEffect(()=> {
        const interval = setInterval(()=> {
            setCurrentImgIndex((prevIndex)=> prevIndex === images.length -1 ? 
            0 : prevIndex -1)
        },5000)
        return ()=> {
            clearInterval(interval);
        }
    },[])

 
  return (
    <div>
         <div className='flex items-center justify-center text-3xl font-bold 
          md:pb-10 px-10 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text 
          text-transparent'>
           <h1>More Than 100+ Brands Have Worked With Us</h1> 
         </div>
        
        <div className='grid grid-cols-3 p-4 md:flex justify-center items-center md:px-6 '>
          <AnimatePresence custom={currentImgIndex} >
             {
                images.map((image, index)=> {
                    return (
                      <motion.div  key={index} initial={{opacity : 0}}
                      animate={{
                        opacity : index === currentImgIndex ? 1 : 0.8,
                        scale : index === currentImgIndex ? 1.2 : 1,
                        transition : {duration : 0.5},
                      }}
                      className='w-40 h-40'
                      exit= {{opacity : 0}}
                      custom={index}
                      transition={{opacity : {duration : 0.5}}}
                      >
                        <Image src={image.url} alt='images' 
                        width={200} height={200} className='object-contain h-20 w-20
                        flex justify-center items-center mx-auto'/>
                      </motion.div>
                    )
                })
             }
          </AnimatePresence>
        </div>
    </div>
  ) 
}

export default Carousel
