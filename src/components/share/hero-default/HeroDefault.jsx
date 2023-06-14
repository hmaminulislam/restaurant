import React from 'react'
import '../hero-default/hero-default.css'

function HeroDefault({heading}) {
  return (
    <div className='hero-default'>
        <div className='max-w-[1300px] mx-auto flex justify-center items-center sm:h-[300px] h-[180px]'>
            <h1 className='text-white sm:text-5xl text-4xl font-semibold'>{heading}</h1>
        </div>
    </div>
  )
}

export default HeroDefault