import '../../home/testimonial/testimonial.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { AiFillStar } from "react-icons/ai";
import ClientImg1 from '../../../assets/testimonial/client-1.png';
import ClientImg2 from '../../../assets/testimonial/client-2.png';
import ClientImg3 from '../../../assets/testimonial/client-3.png';
import ClientImg4 from '../../../assets/testimonial/client-4.png';

function Testimonial() {

    return (
      <div className="testimonial">
        <div className="max-w-[1300px] mx-auto px-5 py-20">
          <div className="flex justify-between my-10">
            {/* Testimonial left start */}
            <div className="md:max-w-[400px]">
              <h4 className="caveat-font text-3xl text-primary">
                Our Testimonial
              </h4>
              <h3 className="text-4xl font-semibold mt-4">
                Ehat That Say About Our Service
              </h3>
            </div>
            {/* Testimonial left end */}

            {/* Testimonial right start */}
            <div className="md:max-w-[850px]">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className="testimonial-swiper"
              >
                {/* Testimonial slider item start */}
                <SwiperSlide>
                  <div className="flex justify-between items-center gap-10">
                    <div>
                      <img className="max-w-[300px]" src={ClientImg1} alt="" />
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                      </div>
                      <p className="font-[300]">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don’t look even slightly believable. If you are going to
                        use a passage.
                      </p>
                      <div className="border mt-8 mb-6"></div>
                      <h4 className="text-[22px] font-semibold">
                        Angela Stanton
                      </h4>
                      <p className="text-primary">Canada</p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Testimonial slider item end */}

                {/* Testimonial slider item start */}
                <SwiperSlide>
                  <div className="flex justify-between items-center gap-10">
                    <div>
                      <img className="max-w-[300px]" src={ClientImg2} alt="" />
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                      </div>
                      <p className="font-[300]">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don’t look even slightly believable. If you are going to
                        use a passage.
                      </p>
                      <div className="border mt-8 mb-6"></div>
                      <h4 className="text-[22px] font-semibold">
                        Angela Stanton
                      </h4>
                      <p className="text-primary">America</p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Testimonial slider item end */}

                {/* Testimonial slider item start */}
                <SwiperSlide>
                  <div className="flex justify-between items-center gap-10">
                    <div>
                      <img className="max-w-[300px]" src={ClientImg3} alt="" />
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                      </div>
                      <p className="font-[300]">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don’t look even slightly believable. If you are going to
                        use a passage.
                      </p>
                      <div className="border mt-8 mb-6"></div>
                      <h4 className="text-[22px] font-semibold">
                        Angela Stanton
                      </h4>
                      <p className="text-primary">Africa</p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Testimonial slider item end */}

                {/* Testimonial slider item start */}
                <SwiperSlide>
                  <div className="flex justify-between items-center gap-10">
                    <div>
                      <img className="max-w-[300px]" src={ClientImg4} alt="" />
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                        <AiFillStar className="text-primary text-[20px]" />
                      </div>
                      <p className="font-[300]">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don’t look even slightly believable. If you are going to
                        use a passage.
                      </p>
                      <div className="border mt-8 mb-6"></div>
                      <h4 className="text-[22px] font-semibold">Schubert</h4>
                      <p className="text-primary">London</p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Testimonial slider item end */}
              </Swiper>
            </div>
            {/* Testimonial right end */}
          </div>
        </div>
      </div>
    );
}

export default Testimonial