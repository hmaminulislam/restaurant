import DividerImg from '../../../assets/our-services/sec-title-1.png';
import ProcessImg1 from '../../../assets/about-us/our-process/process-1.jpg';
import ProcessImg2 from '../../../assets/about-us/our-process/process-2.jpg';
import ProcessImg3 from '../../../assets/about-us/our-process/process-3.jpg';
import ProcIcon1 from '../../../assets/about-us/our-process/p-icon-1.png';
import ProcIcon2 from '../../../assets/about-us/our-process/p-icon-2.png';
import ProcIcon3 from '../../../assets/about-us/our-process/p-icon-3.png';
import ProcIcon4 from '../../../assets/about-us/our-process/p-icon-4.png';
import { Link } from 'react-router-dom';

function OurProcess() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 py-20">
      {/* porcess header  */}
      <div className="text-center">
        <h4 className="text-3xl text-primary">Our Process</h4>
        <h2 className="text-4xl sm:text-5xl font-semibold my-4">
          Healthy & Improves Your Mood
        </h2>
        <img className="mx-auto" src={DividerImg} alt="" />
      </div>
      {/* process boxes */}
      <div className="flex flex-col items-center md:items-start md:flex-row flex-wrap lg:flex-nowrap gap-14 mt-16">
        {/* prcess box start */}
        <div className="border max-w-[384px] md:w-[46%]">
          <div className="flex justify-between items-center px-5 mt-8">
            <img className="w-[70px]" src={ProcIcon1} alt="" />
            <h3 className="text-4xl bg-primary rounded-full w-[80px] h-[80px] flex items-center justify-center text-white font-bold">
              01
            </h3>
          </div>
          <div className="mb-6 mt-4 px-5">
            <h3 className="text-3xl font-semibold mb-2 text-secondary">
              Clean Bar
            </h3>
            <p className="font-[300]">
              Lorem Ipsum is simply dummy text of the printing typesetting
              industry ipsum.
            </p>
          </div>
          <div>
            <img src={ProcessImg1} alt="" />
          </div>
        </div>
        {/* prcess box end */}

        {/* prcess box start */}
        <div className="border max-w-[384px] md:w-[46%]">
          <div className="flex justify-between items-center px-5 mt-8">
            <img className="w-[70px]" src={ProcIcon2} alt="" />
            <h3 className="text-4xl bg-primary rounded-full w-[80px] h-[80px] flex items-center justify-center text-white font-bold">
              02
            </h3>
          </div>
          <div className="mb-6 mt-4 px-5">
            <h3 className="text-3xl font-semibold mb-2 text-secondary">
              Clean Bar
            </h3>
            <p className="font-[300]">
              Lorem Ipsum is simply dummy text of the printing typesetting
              industry ipsum.
            </p>
          </div>
          <div>
            <img src={ProcessImg2} alt="" />
          </div>
        </div>
        {/* prcess box end */}

        {/* prcess box start */}
        <div className="border max-w-[384px] md:w-[46%]">
          <div className="flex justify-between items-center px-5 mt-8">
            <img className="w-[70px]" src={ProcIcon3} alt="" />
            <h3 className="text-4xl bg-primary rounded-full w-[80px] h-[80px] flex items-center justify-center text-white font-bold">
              03
            </h3>
          </div>
          <div className="mb-6 mt-4 px-5">
            <h3 className="text-3xl font-semibold mb-2 text-secondary">
              Clean Bar
            </h3>
            <p className="font-[300]">
              Lorem Ipsum is simply dummy text of the printing typesetting
              industry ipsum.
            </p>
          </div>
          <div>
            <img src={ProcessImg3} alt="" />
          </div>
        </div>
        {/* prcess box end */}
      </div>
      {/* process footer  */}
      <div className="flex lg:flex-row flex-col lg:items-center justify-between px-10 py-8 bg-lime-100 mt-10 gap-5">
        <div>
          <img className="w-[70px]" src={ProcIcon4} alt="" />
        </div>
        <div className="lg:max-w-[600px] xl:max-w-[800px]">
          <h4 className="text-2xl text-secondary font-semibold">
            We Have 25+ Years of Experience, Give Better Quality Results
          </h4>
          <p className="mt-3 sm:mt-0">
            Perspiciatis unde omnis iste natus error sit voluptatem laudantium,
            totam rem, eaque ipsa quae
          </p>
        </div>
        <div>
          <Link to="/contact">
            <button className="bg-secondary py-3 px-6 text-white rounded uppercase">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurProcess