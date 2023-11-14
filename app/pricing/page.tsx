import React from 'react'

const features = [
    {
      name : 'Basic',
      price : '£25/month',
      fees : '3.7% + 30p per transaction',
      description : 'Start selling you rproducts online with us in a much easier and simplier way.',
    },

    {
        name : 'Standard',
        price : '£40/month',
        fees : '2.9% + 30p per transaction',
        description : 'Level up your business with our powerful service platform to reach your customers',
      },

      {
        name : 'Premium',
        price : '£100/month',
        fees : '2.4% + 30p per transaction',
        description : 'For businesses that need more . Get access to our premium services to achieve that ',
      },
]

const Pricing = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
       <div className='text-4xl text-center md:text-6xl font-bold bg-gradient-to-r 
        from-black to-gray-500 bg-clip-text text-transparent md:pb-10 '>
           Pricing
           <div className='text-2xl text-center md:text-4xl font-bold md:py-5'>
               Simple and transparent pricing plans for all business
           </div>
       </div>
       <div className='md:flex'>
           {
            features.map((item, index)=> (
                <div key={index} className='p-4 '>
                    <div className='grid justify-center items-center gap-4
                    border rounded-xl p-4 w-96 h-96'>
                 <div className='text-2xl text-black pb-2'>{item.name}</div>
                 <div className='text-xl '>{item.price}</div>
                 <div className='text-xl  '>{item.fees}</div>
                 <div className='text-xl '>{item.description}</div>
                 <div className='bg-blue-500 text-white cursor-pointer p-4 border rounded-xl
                 flex items-center justify-center'>
                     Get Started
                 </div>
                    </div>
                </div>
            ))
           }
       </div>
    </div>
  )
}

export default Pricing
