'use client'
import React from "react"

  import Link from "next/link"
  

  const list =[
    {
      id : 1,
      title : 'Get started'
    },

    {
      id : 2,
      title : 'Features'
    },

    {
      id : 3,
      title : 'Abot Us'
    },

    {
      id : 4,
      title : 'Contact'
    },
 ]

 


const Navigationbar = () => {
  return (
    <div className='hidden md:flex gap-6  font-bold '>
        
     
     {
       list.map((item)=> {
        return (
           
              <Link href='/' key={item.id} className='hover:bg-black
               hover:text-white text-lg text-black transition-all ease-in-out duration-300'>{item.title}</Link>
           
        )
       })
     }



    </div>
  )
}

export default Navigationbar
