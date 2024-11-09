import React from 'react'
import { categories } from '@/lib/data'

const Cardcontainer = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-2 md:grid-cols-6 gap-4 mb-[3rem] '>
          {categories.map((category: any, index: number) => (
              <div 
                  className='h-[5rem] md:h-[10rem] rounded-xl p-3 relative overflow-hidden cursor-pointer' 
                  key={index}
                  style={{
                      backgroundImage: `url(${category.backgroundImage})`,  // Set the background image
                      backgroundSize: 'cover',  // Cover the entire card
                      backgroundPosition: 'center',  // Center the image
                      backgroundRepeat: 'no-repeat'  // Do not repeat the image
                  }}
              >
                  <span className='text-white font-semibold z-10 relative'>{category.name}</span> {/* Ensuring the text is on top */}
                  <div className='absolute inset-0 bg-black opacity-20 hover:opacity-30'>overlay</div>
              </div>
          ))}
      </div>
  </div>
  )
}

export default Cardcontainer