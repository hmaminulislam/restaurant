import React from 'react'
import FoodMenu1 from '../../../assets/food-menu-1.jpg'

function OurMenu() {

    const menus = {
        
    }
  return (
    <div className='max-w-[1300px] mx-auto px-5'>
        {/* section heading start */}
        <div className='text-center'>
            <h4>From Our Menu</h4>
            <h2 className='text-5xl font-semibold'>Delicious Food Forever</h2>
            <img src="" alt="" />
        </div>
        {/* section heading end */}
        {/* section menus */}
        <div className='grid grid-cols-2'>
            {/* single menu start */}
            <div className='flex items-center gap-5'>
                <div className='w-[90px]'>
                    <img className='rounded-full' src={FoodMenu1} alt="" />
                </div>
                <div className='w-full'>
                    <div className='flex justify-between items-center gap-2 mb-2'>
                        <h3 className='text-2xl font-semibold'>Raw Scallops from Erquy</h3>
                        <div className='border border-gray-600 grow'></div>
                        <p className='text-primary'>$32.08</p>
                    </div>
                    <p>Candied Jerusalem artichokes, truffle</p>
                </div>
            </div>
            {/* single menu end */}
        </div>
    </div>
  )
}

export default OurMenu