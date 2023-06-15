import React from 'react'
import HeroDefault from '../share/hero-default/HeroDefault'
import ContactForm from './contact-form/ContactForm';

export default function Contact() {
  return (
    <div>
      <HeroDefault heading={"Contact Us"} />
      <ContactForm />
    </div>
  );
}
