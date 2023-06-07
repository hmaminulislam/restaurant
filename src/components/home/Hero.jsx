import React from 'react';
import Burger from "../../assets/burger.png"

export default function 
() {
  return (
    <div className='bg-primary'>
        <div className='contianer max-w-[1300px] mx-auto flex items-center justify-between px-5'>
            <div>
                <h4 className='text-2xl font-semibold'>Diner</h4>
                <h2 className='text-8xl font-bold text-white my-6'>LET'S EAT & DRINK</h2>
                <button className='btn-bg-primary text-white font-semibold py-[10px] px-6 rounded-sm'>Read More</button>
            </div>
            <div>
                <img src={Burger} alt="" />
            </div>
        </div>
    </div>
  )
}
