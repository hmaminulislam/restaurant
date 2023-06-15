import React from 'react'
import '../need-help/need-help.css';
import NeedIcon1 from '../../../assets/contact/need-help/need-help-1.png'
import NeedIcon2 from '../../../assets/contact/need-help/need-help-2.png'
import NeedIcon3 from '../../../assets/contact/need-help/need-help-3.png'

function NeedHelp() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 py-20">
      {/* nedd help header  */}
      <div className="text-center">
        <h4 className="text-[22px] font-[600] mb-3">
          You can reach out to us for all your
        </h4>
        <h2 className="text-4xl font-semibold text-secondary">
          Need More Help?
        </h2>
        <p className="mt-3">
          Queries, complaints and feedback. We will be happy to serve you
        </p>
      </div>
      {/* need help boxes */}
      <div className="mt-10 md:flex justify-between gap-10 xl:gap-20">
        {/* need help box start */}
        <div className="text-center border border-[#21268986] rounded-lg px-5 py-10 md:w-[30%] max-w-[350px] mx-auto md:mx-0 mb-10 md:mb-0">
          <img
            className="w-[80px] mx-auto h-[80px] bg-[#21268915] p-3 rounded-full"
            src={NeedIcon1}
            alt=""
          />
          <h4 className="text-[20px] font-[600] mt-4 mb-2">Sales</h4>
          <p className="font-[300]">sales@dexos.com</p>
        </div>
        {/* need help box end */}
        {/* need help box start */}
        <div className="text-center border border-[#21268986] rounded-lg px-5 py-10 md:w-[30%] max-w-[350px] mx-auto md:mx-0 mb-10 md:mb-0">
          <img
            className="w-[80px] mx-auto h-[80px] bg-[#21268915] p-3 rounded-full"
            src={NeedIcon2}
            alt=""
          />
          <h4 className="text-[20px] font-[600] mt-4 mb-2">Help & Support</h4>
          <p className="font-[300]">help@dexos.com</p>
        </div>
        {/* need help box end */}
        {/* need help box start */}
        <div className="text-center border border-[#21268986] rounded-lg px-5 py-10 md:w-[30%] max-w-[350px] mx-auto md:mx-0">
          <span className="w-[80px] mx-auto h-[80px] bg-[#21268915] p-3 rounded-full flex justify-center items-center">
            <img src={NeedIcon3} alt="" />
          </span>
          <h4 className="text-[20px] font-[600] mt-4 mb-2">Media & Press</h4>
          <p className="font-[300]">media@dexos.com</p>
        </div>
        {/* need help box end */}
      </div>
    </div>
  );
}

export default NeedHelp