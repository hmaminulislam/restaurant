import React from "react";
import AboutImg from '../../../assets/about/about_chef.jpg'
import AboutIcon from '../../../assets/about/about_check.png'

function AboutCompany() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 flex justify-between items-center py-20 gap-28">
      {/* abot left  */}
      <div className="">
        <div className="relative">
          <img className="max-w-[500px]" src={AboutImg} alt="" />
          <div className="w-[180px] h-[180px] bg-primary rounded-full flex flex-col justify-center items-center gap-3 px-8 border-[10px] border-white absolute right-[-50px] top-[30px]">
            <h3 className="text-4xl text-white font-bold">12+</h3>
            <p className="text-center text-white font-[300]">
              Years Experience
            </p>
          </div>
          <div className="bg-secondary px-8 py-10 mt-[10px]">
            <p className="text-white font-[300]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis architecto reiciendis.
            </p>
            <h4 className="text-white font-bold text-xl text-right">
              Jhon Doe
            </h4>
          </div>
        </div>
      </div>
      {/* about right  */}
      <div className="">
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
          <div className="flex items-start gap-4">
            <img src={AboutIcon} alt="" />
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
          <div className="flex items-start gap-4">
            <img src={AboutIcon} alt="" />
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
          <div className="flex items-start gap-4">
            <img src={AboutIcon} alt="" />
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
