import React from 'react'
import '../hero-default/hero-default.css'

function HeroDefault({heading}) {
  return (
    <div className='hero-default'>
        <div className='max-w-[1300px] mx-auto flex justify-center items-center hero-default-container'>
            <h1 className='text-white text-5xl font-semibold'>{heading}</h1>
        </div>
    </div>
  )
}

export default HeroDefault