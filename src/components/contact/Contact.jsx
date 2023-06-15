import React from 'react'
import HeroDefault from '../share/hero-default/HeroDefault'
import ContactForm from './contact-form/ContactForm';
import NeedHelp from './need-help/NeedHelp';

export default function Contact() {
  return (
    <div>
      <HeroDefault heading={"Contact Us"} />
      <ContactForm />
      <NeedHelp />
    </div>
  );
}
