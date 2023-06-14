import React from 'react'
import HeroDefault from '../share/hero-default/HeroDefault'
import AboutCompany from './about-company/AboutCompany'
import OurProcess from './our-process/OurProcess'

export default function About() {
  return (
    <div>
      <HeroDefault heading={'About'} />
      <AboutCompany />
      <OurProcess />
    </div>
  )
}
