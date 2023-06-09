import ServiceDivider from "../../../assets/our-services/sec-title-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import SliderImage1 from '../../../assets/our-services/service-img-1.jpg';
import SliderImage2 from '../../../assets/our-services/service-img-2.jpg';
import SliderImage3 from "../../../assets/our-services/service-img-3.jpg";
import SliderImage4 from "../../../assets/our-services/service-img-4.jpg";
import SliderImage5 from "../../../assets/our-services/service-img-5.png";
import '../our-service/our-service.css';
import { MdKeyboardArrowRight } from "react-icons/md";

function OurService() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 py-20">
      {/* section heading start */}
      <div className="text-center max-w-[450px] mx-auto">
        <h4 className="caveat-font text-3xl text-primary">
          Corporate Applications
        </h4>
        <h2 className="text-5xl font-semibold my-4">Our Services</h2>
        <p>
          Assertively myocardinate robust e-tailers for extensible human
          capital. dpropriately benchmark networks.
        </p>
        <img className="mx-auto mt-8" src={ServiceDivider} alt="" />
      </div>
      {/* section heading end  */}

      {/* slider start */}
      <div className="mt-24 md:w-[720px] lg:w-full mx-auto md:px-2 px-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {/* slider item start */}
          <SwiperSlide>
            <div className="slider-item-wrap relative">
              <div className="slider-img-wrap">
                <img className="w-full slider-img" src={SliderImage1} alt="" />
              </div>
              <div className="py-10 px-5 bg-white ">
                <h3 className="slider-title text-primary font-[300]">
                  Party Services
                </h3>
                <p className="text-gray-500 font-[300]">
                  Continually utilize team building niche markets before
                  visionary catalysts for change.
                </p>
                <MdKeyboardArrowRight className="w-[50px] h-[50px] border p-3 bg-white rounded-full absolute z-40 bottom-[-30px] left-14 service-round-btn"></MdKeyboardArrowRight>
                <button className="flex items-center gap-2 btn-bg-primary ps-6 pe-5 py-3 text-white rounded-full service-learn-btn absolute z-40">
                  Learn More <MdKeyboardArrowRight className="text-[20px]" />
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* slider item end  */}

          {/* slider item start */}
          <SwiperSlide>
            <div className="slider-item-wrap relative">
              <div className="slider-img-wrap">
                <img className="w-full slider-img" src={SliderImage2} alt="" />
              </div>
              <div className="py-10 px-5 bg-white ">
                <h3 className="slider-title text-primary font-[300]">
                  Buffet Services
                </h3>
                <p className="text-gray-500 font-[300]">
                  Continually utilize team building niche markets before
                  visionary catalysts for change.
                </p>
                <MdKeyboardArrowRight className="w-[50px] h-[50px] border p-3 bg-white rounded-full absolute z-40 bottom-[-30px] left-14 service-round-btn"></MdKeyboardArrowRight>
                <button className="flex items-center gap-2 btn-bg-primary ps-6 pe-5 py-3 text-white rounded-full service-learn-btn absolute z-40">
                  Learn More <MdKeyboardArrowRight className="text-[20px]" />
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* slider item end  */}

          {/* slider item start */}
          <SwiperSlide>
            <div className="slider-item-wrap relative">
              <div className="slider-img-wrap">
                <img className="w-full slider-img" src={SliderImage3} alt="" />
              </div>
              <div className="py-10 px-5 bg-white ">
                <h3 className="slider-title text-primary font-[300]">
                  Wedding Services
                </h3>
                <p className="text-gray-500 font-[300]">
                  Continually utilize team building niche markets before
                  visionary catalysts for change.
                </p>
                <MdKeyboardArrowRight className="w-[50px] h-[50px] border p-3 bg-white rounded-full absolute z-40 bottom-[-30px] left-14 service-round-btn"></MdKeyboardArrowRight>
                <button className="flex items-center gap-2 btn-bg-primary ps-6 pe-5 py-3 text-white rounded-full service-learn-btn absolute z-40">
                  Learn More <MdKeyboardArrowRight className="text-[20px]" />
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* slider item end  */}

          {/* slider item start */}
          <SwiperSlide>
            <div className="slider-item-wrap relative">
              <div className="slider-img-wrap">
                <img className="w-full slider-img" src={SliderImage4} alt="" />
              </div>
              <div className="py-10 px-5 bg-white ">
                <h3 className="slider-title text-primary font-[300]">
                  Home Delivery
                </h3>
                <p className="text-gray-500 font-[300]">
                  Continually utilize team building niche markets before
                  visionary catalysts for change.
                </p>
                <MdKeyboardArrowRight className="w-[50px] h-[50px] border p-3 bg-white rounded-full absolute z-40 bottom-[-30px] left-14 service-round-btn"></MdKeyboardArrowRight>
                <button className="flex items-center gap-2 btn-bg-primary ps-6 pe-5 py-3 text-white rounded-full service-learn-btn absolute z-40">
                  Learn More <MdKeyboardArrowRight className="text-[20px]" />
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* slider item end  */}
          {/* slider item start */}
          <SwiperSlide>
            <div className="slider-item-wrap relative">
              <div className="slider-img-wrap">
                <img className="w-full slider-img" src={SliderImage5} alt="" />
              </div>
              <div className="py-10 px-5 bg-white ">
                <h3 className="slider-title text-primary font-[300]">
                Reservation Table
                </h3>
                <p className="text-gray-500 font-[300]">
                  Continually utilize team building niche markets before
                  visionary catalysts for change.
                </p>
                <MdKeyboardArrowRight className="w-[50px] h-[50px] border p-3 bg-white rounded-full absolute z-40 bottom-[-30px] left-14 service-round-btn"></MdKeyboardArrowRight>
                <button className="flex items-center gap-2 btn-bg-primary ps-6 pe-5 py-3 text-white rounded-full service-learn-btn absolute z-40">
                  Learn More <MdKeyboardArrowRight className="text-[20px]" />
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* slider item end  */}

        </Swiper>
      </div>
      {/* slider end */}
    </div>
  );
}

export default OurService;
