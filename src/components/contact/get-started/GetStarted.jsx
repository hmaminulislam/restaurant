import React from 'react'
import GetImg from '../../../assets/contact/get-started/get-start.png'

function GetStarted() {
  return (
    <div className='mx-5'>
      <div className="max-w-[1300px] mx-auto lg:px-10 px-6 py-10 lg:py-20 flex flex-col-reverse lg:flex-row justify-between items-center bg-secondary lg:h-[265px] rounded-lg my-20">
        <div>
          <h2 className="text-4xl text-white font-semibold mb-3">
            Ready to get started?
          </h2>
          <p className="text-white font-[300]">
            It only takes a few minutes to register your FREE Bankio account.
          </p>
          <button className="bg-white py-[15px] px-8 block mt-4 rounded-full">
            Open an Account
          </button>
        </div>
        <img className="mb-20" src={GetImg} alt="" />
      </div>
    </div>
  );
}

export default GetStarted