import React from "react";
import AboutImg from '../../../assets/about/about_chef.jpg'
import AboutIcon from '../../../assets/about/about_check.png'

function AboutCompany() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 lg:flex justify-between items-center py-20 gap-28">
      {/* abot left  */}
      <div className="max-w-[500px] mx-auto lg:mx-0">
        <div className="relative">
          <img className="sm:max-w-[500px] max-w-[300]" src={AboutImg} alt="" />
          <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] bg-primary rounded-full flex flex-col justify-center items-center sm:gap-3 gap-[2px] px-8 sm:border-[10px] border-[5px] border-white absolute sm:right-[-50px] right-[-20px] sm:top-[30px] top-[-35px]">
            <h3 className="text-base sm:text-4xl  text-white font-bold">12+</h3>
            <p className="text-center text-xs sm:text-base text-white font-[300]">
              Years Experience
            </p>
          </div>
          <div className="bg-secondary sm:px-8 px-5 sm:py-10 py-6 mt-[10px]">
            <p className="text-white sm:font-[300] font-[200] text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis architecto reiciendis.
            </p>
            <h4 className="text-white sm:font-bold font-[600] sm:text-xl text-base text-right">
              Jhon Doe
            </h4>
          </div>
        </div>
      </div>
      {/* about right  */}
      <div className="max-w-[700px] lg:w-auto mx-auto lg:mx-0 mt-10 lg:mt-0">
        <h4 className="text-primary font-semibold text-xl">About Company</h4>
        <h2 className="text-4xl font-bold text-secondary mt-2">
          Helathy Foods Provider
        </h2>
        <p className="font-[300] mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aspernatur molestiae minima pariatur consequatur voluptate sapiente
          deleniti soluta,
        </p>
        {/* all list  */}
        <div className="mt-10 flex flex-col gap-8">
          {/* list itma start */}
          <div className="sm:flex items-start gap-4">
            <img className="w-[60px] sm:w-auto" src={AboutIcon} alt="" />
            <div>
              <h5 className="text-xl font-semibold">Trusted Partner</h5>
              <p className="font-[300]">
                Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus,
                Officiis Placeat Iusto Quasi Adipisci Impedit Delectus Beatae Ab
                Maxime.
              </p>
            </div>
          </div>
          {/* list itma end */}

          {/* list itma start */}
          <div className="sm:flex items-start gap-4">
            <img className="w-[60px] sm:w-auto" src={AboutIcon} alt="" />
            <div>
              <h5 className="text-xl font-semibold">First Delivery</h5>
              <p className="font-[300]">
                Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus,
                Officiis Placeat Iusto Quasi Adipisci Impedit Delectus Beatae Ab
                Maxime.
              </p>
            </div>
          </div>
          {/* list itma end */}

          {/* list itma start */}
          <div className="sm:flex items-start gap-4">
            <img className="w-[60px] sm:w-auto" src={AboutIcon} alt="" />
            <div>
              <h5 className="text-xl font-semibold">Secure Payment</h5>
              <p className="font-[300]">
                Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus,
                Officiis Placeat Iusto Quasi Adipisci Impedit Delectus Beatae Ab
                Maxime.
              </p>
            </div>
          </div>
          {/* list itma end */}
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
