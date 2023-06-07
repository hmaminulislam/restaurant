import React from 'react'
import TitleImg from '../../assets/title-shape.png'
import DividerImg from '../../assets/divider-image.png'
import BaristaImg from '../../assets/barista.webp'
import '../home/more-about.css'

function MoreAbout() {
  return (
    <div className="max-w-[1300px] mx-auto md:flex justify-between items-center my-20">
      <div className="w-4/12 text-center">
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
      <div className="w-8/12 md:flex justify-end gap-x-20 items-center">
        <div className="flex flex-col gap-9">
          <div className="text-center counter-wrap">
            <h2 className="counter-text">11 +</h2>
            <p className="text-lg text-gray-600">Years Served</p>
          </div>
          <div className="text-center counter-wrap">
            <h2 className="counter-text">99 +</h2>
            <p className="text-lg text-gray-600">Coffee Items</p>
          </div>
          <div className="text-center counter-wrap">
            <h2 className="counter-text">20 +</h2>
            <p className="text-lg text-gray-600">Expert Chefs</p>
          </div>
        </div>
        <div>
          <img className='rounded-[12px]' src={BaristaImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MoreAbout