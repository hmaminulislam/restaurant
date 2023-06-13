import React from 'react'
import HeroDefault from '../share/hero-default/HeroDefault'
import AboutCompany from './about-company/AboutCompany'

export default function About() {
  return (
    <div>
      <HeroDefault heading={'About'} />
      <AboutCompany />
    </div>
  )
}
