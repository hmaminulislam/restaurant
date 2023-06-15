import React from 'react'
import EshopImg from '../../../assets/about-us/download-app/e-shop.png'
import GoogleImg from '../../../assets/about-us/download-app/googleplay.png'
import AppImg from '../../../assets/about-us/download-app/appstore.png'

function DownloadApp() {
  return (
    <div className="bg-primary mt-32">
      <div className="max-w-[1300px] mx-auto px-5 flex flex-col-reverse lg:flex-row items-center pb-20 gap-20">
        <div className="max-w-[600px] lg:w-auto text-center lg:text-start lg:pt-10">
          <h4 className="text-xl font-semibold text-white">
            DOWNLOAD MOBILE APP AND
          </h4>
          <h2 className="sm:text-[65px] text-[45px] font-bold text-white">
            Save up to 20%
          </h2>
          <p className="font-[300] text-white">
            Aliquam a augue suscipits, luctus neque purus ipsum and neque dolor
            primis libero tempuss, blandit varius
          </p>
          <div className="flex items-center gap-5 mt-5 justify-center lg:justify-start">
            <img
              className="sm:max-w-[200px] max-w-[140px] cursor-pointer"
              src={GoogleImg}
              alt=""
            />{" "}
            <img
              className="sm:max-w-[200px] max-w-[140px] cursor-pointer"
              src={AppImg}
              alt=""
            />
          </div>
        </div>
        <div className="relative">
          <img
            className="mt-[-100px] sm:max-w-[500px] max-w-[380px] lg:w-auto"
            src={EshopImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp