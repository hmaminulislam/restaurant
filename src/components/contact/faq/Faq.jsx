import { useState } from 'react';
import FaqData from '../faq/FaqData'
import Accordion from './Accordion';
import '../faq/faq.css'

function Faq() {
  const [open, setOpen] = useState(false)

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  return (
    <div className="max-w-[880px] mx-auto px-5 py-20">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold text-secondary">
          Frequently asked questions
        </h2>
        <p className="mt-3 max-w-[500px] mx-auto">
          Get answers to all questions you have and boost your knowledge so you
          can save, invest and spend smarter.
        </p>
      </div>
      <div>
        {FaqData.map((faq, index) => (
          <Accordion
            title={faq.title}
            body={faq.body}
            open={index === open}
            toggle={() => toggle(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Faq