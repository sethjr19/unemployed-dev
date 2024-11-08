import React from 'react'

const Cardcontainer = () => {
  return (
    <div className='container'>
        <div className='grid sm:grid-cols-3 md:grid-cols-6 gap-4 '>
            <div className='h-50 bg-gray-500 rounded-xl p-3'>CARD1</div>
            <div className=' h-50 bg-gray-500 rounded-xl p-3'>CARD2</div>
            <div className='h-50 bg-gray-500 rounded-xl p-3'>CARD3</div>
        </div>
    </div>
  )
}

export default Cardcontainer