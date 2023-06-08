import React from 'react';
import Burger from "../../assets/burger.png";
import '../home/hero.css';
import BgShap from '../../assets/hero-bg-shap.png'

export default function 
() {
  return (
    <div className='bg-primary hero'>
        <div className='hero-content py-14 contianer max-w-[1300px] mx-auto flex felx-col flex-col-reverse md:flex-row items-center justify-between px-5'>
            <div className='md:w-1/2 w-full'>
                <h4 className='text-2xl font-semibold'>Diner</h4>
                <h2 className='md:text-8xl sm:text-6xl text-5xl font-bold text-white my-6'>LET'S EAT & DRINK</h2>
                <button className='btn-bg-primary text-white font-semibold py-[10px] px-6 rounded-sm'>Read More</button>
                <img className='hero-content-shap' src={BgShap} alt="" />
            </div>
            <div className='md:w-1/2 w-full'>
                <img src={Burger} alt="" />
            </div>
        </div>
    </div>
  )
}
