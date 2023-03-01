import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img className='w-full h-full object-cover' src='./images/1.jpg' alt="Hero-img" />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
        <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
        <h2 className='text-4xl py-4 italic'>With Flyaway</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis quod at alias itaque corporis sequi facere, ducimus ipsum aliquam officia cupiditate debitis aut molestias optio, eius, amet eaque inventore!</p>
        </div>
    </div>
    </div>
  )
}

export default Hero
