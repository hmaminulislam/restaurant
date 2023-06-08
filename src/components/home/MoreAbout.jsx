import React from 'react'
import TitleImg from '../../assets/title-shape.png'
import DividerImg from '../../assets/divider-image.png'
import BaristaImg from '../../assets/barista.webp'
import '../home/more-about.css';
import CountUp from 'react-countup';

function MoreAbout() {
  return (
    <div className="max-w-[1300px] mx-auto lg:flex justify-between items-center my-20 px-5">
      <div className="lg:w-4/12 md:w-4/6 mx-auto text-center mb-20 lg-mb-0">
        <img className="mx-auto" src={TitleImg} alt="" />
        <h3 className="text-3xl font-semibold mt-8">More About Dinenos Café</h3>
        <img className="w-[100px] mx-auto my-6" src={DividerImg} alt="" />
        <p className="text-lg mb-8">
          It’s the story of an everlasting love affair, Dieter Delicioz and the
          Atlantic Ocean. Our proximity of the sea and Portugal’s excellent
          produce.
        </p>
        <button className="btn-bg-primary py-3 px-8 text-white rounded-sm">
          More About Us
        </button>
      </div>
      <div className="lg:w-8/12 md:flex lg:justify-end justify-center gap-x-20 items-center">
        <div className="flex flex-col gap-9">
          <div className="text-center counter-wrap">
          <CountUp start={0} end={15} delay={0} duration={2}>
            {({ countUpRef }) => (
              <div>
                <span className="counter-text" ref={countUpRef} /> <span className="counter-text">+</span>
              </div>
            )}
          </CountUp>
            <p className="text-lg text-gray-600">Years Served</p>
          </div>
          <div className="text-center counter-wrap">
            <CountUp start={0} end={88} delay={0} duration={4}>
            {({ countUpRef }) => (
              <div>
                <span className="counter-text" ref={countUpRef} /> <span className="counter-text">+</span>
              </div>
            )}
          </CountUp>
            <p className="text-lg text-gray-600">Coffee Items</p>
          </div>
          <div className="text-center counter-wrap">
            <CountUp start={0} end={20} delay={0} duration={3}>
            {({ countUpRef }) => (
              <div>
                <span className="counter-text" ref={countUpRef} /> <span className="counter-text">+</span>
              </div>
            )}
          </CountUp>
            <p className="text-lg text-gray-600">Expert Chefs</p>
          </div>
        </div>
        <div className='mt-20 lg:mt-0'>
          <img className='rounded-[12px] w-auto mx-auto' src={BaristaImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MoreAbout