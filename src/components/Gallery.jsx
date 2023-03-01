import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <div className='text-center text-gray-700 p-4'>Gallery</div>
      <div className='grid sm:grid-col-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-full h-full object-cover' src="./images/3.jpg" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="./images/5.jpg" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="./images/7.jpg" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="./images/8.jpg" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="./images/9.jpg" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Gallery
