import ServiceDivider from "../../../assets/our-services/sec-title-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderImage from '../../../assets/our-services/service-img-1.jpg';
import '../our-service/our-service.css'

function OurService() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 py-20">
      {/* section heading start */}
      <div className="text-center w-[450px] mx-auto">
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
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[]}
          className="mySwiper"
        >
          {/* slider item start */}
          <SwiperSlide>
            <div className="slider-item-wrap">
              <div className="slider-img-wrap">
                <img
                  className="w-full h-[295px] slider-img"
                  src={SliderImage}
                  alt=""
                />
              </div>
              <div className="py-10 px-5">
                <h3 className="text-[28px] text-primary font-[300]">
                  Party Services
                </h3>
                <p className="text-gray-500 font-[300]">
                  Continually utilize team building niche markets before
                  visionary catalysts for change.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* slider item end  */}
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      {/* slider end */}
    </div>
  );
}

export default OurService;
