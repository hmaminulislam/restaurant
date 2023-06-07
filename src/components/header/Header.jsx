import React from 'react'
import Logo from "../../assets/logo.jpg"
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='max-w-[1200px] mx-auto h-[60px] bg-white flex items-center justify-between'>
        <div>
            <img className='w-[120px]' src={Logo} alt="" />
        </div>
        <div>
            <div className='flex items-center gap-10'>
                <ul className='flex gap-8'>
                    <li className='font-semibold'><NavLink to="/">Home</NavLink></li>
                    <li className='font-semibold'><NavLink to="/our-menu">Our Menu</NavLink></li>
                    <li className='font-semibold'><NavLink to="/about">About</NavLink></li>
                    <li className='font-semibold'><NavLink to="/contact">Contact</NavLink></li>
                    <li className='font-semibold'><NavLink to="/blog">Blog</NavLink></li>
                </ul>
                <button className='bg-primary text-white font-semibold py-[10px] px-6 rounded-sm'>Book Now</button>
            </div>
        </div>
    </div>
  )
}
