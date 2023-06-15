import React from 'react'
import HeroDefault from '../share/hero-default/HeroDefault'
import ContactForm from './contact-form/ContactForm';
import NeedHelp from './need-help/NeedHelp';
import Faq from './faq/Faq';

export default function Contact() {
  return (
    <div>
      <HeroDefault heading={"Contact Us"} />
      <ContactForm />
      <NeedHelp />
      <Faq />
    </div>
  );
}
