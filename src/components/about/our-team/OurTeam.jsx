import "../our-team/our-team.css";
import ChefImg1 from "../../../assets/about-us/our-team/chef-1.jpg";
import ChefImg2 from "../../../assets/about-us/our-team/chef-2.jpg";
import ChefImg3 from "../../../assets/about-us/our-team/chef-3.jpg";
function OurTeam() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 py-20">
      {/* our team header  */}
      <div>
        <h2 className="text-4xl sm:text-5xl font-semibold my-4 text-secondary">
          MEET OUR TEAM
        </h2>
      </div>
      {/* our teams */}
      <div className="flex flex-col items-center lg:items-start md:flex-row flex-wrap lg:flex-nowrap gap-14 mt-16">
        {/* team start */}
        <div className="max-w-[384px] md:w-[46%] text-center px-5 border py-12 chef-wrap">
          {/* <img className='w-[140px] h-[140px]' src={ChefImg1} alt="" /> */}
          <div
            className="chef-img-bg"
            style={{ backgroundImage: `url(${ChefImg1})` }}
          ></div>
          <h4 className="text-2xl font-bold mb-2 mt-5">Rosemarie Potter</h4>
          <p className="font-[500] mb-6">Head of chef</p>
          <p className="font-[300]">
            Home to over a hundred breweries in the years prior to Home to over
            a hundred.
          </p>
          {/* team hover */}
          <div
            className="chef-hover-bg"
            style={{ backgroundImage: `url(${ChefImg1})` }}
          >
            <div className="flex flex-col items-start justify-end p-5 relative h-full">
              <div className="overley-chef"></div>
              <div className="z-10 text-left">
                <h4 className="text-2xl font-bold mb-1 text-white">
                  Rosemarie Potter
                </h4>
                <p className="font-[500] text-white">Head of chef</p>
              </div>
            </div>
          </div>
        </div>
        {/* team end  */}

        {/* team start */}
        <div className="max-w-[384px] md:w-[46%] text-center px-5 border py-12 chef-wrap">
          {/* <img className='w-[140px] h-[140px]' src={ChefImg1} alt="" /> */}
          <div
            className="chef-img-bg"
            style={{ backgroundImage: `url(${ChefImg2})` }}
          ></div>
          <h4 className="text-2xl font-bold mb-2 mt-5">Pat Paul</h4>
          <p className="font-[500] mb-6">Head of chef</p>
          <p className="font-[300]">
            Home to over a hundred breweries in the years prior to Home to over
            a hundred.
          </p>
          {/* team hover */}
          <div
            className="chef-hover-bg"
            style={{ backgroundImage: `url(${ChefImg2})` }}
          >
            <div className="flex flex-col items-start justify-end p-5 relative h-full">
              <div className="overley-chef"></div>
              <div className="z-10 text-left">
                <h4 className="text-2xl font-bold mb-1 text-white">Pat Paul</h4>
                <p className="font-[500] text-white">Head of chef</p>
              </div>
            </div>
          </div>
        </div>
        {/* team end  */}

        {/* team start */}
        <div className="max-w-[384px] md:w-[46%] text-center px-5 border py-12 chef-wrap">
          {/* <img className='w-[140px] h-[140px]' src={ChefImg1} alt="" /> */}
          <div
            className="chef-img-bg"
            style={{ backgroundImage: `url(${ChefImg3})` }}
          ></div>
          <h4 className="text-2xl font-bold mb-2 mt-5">Jordan Simmons</h4>
          <p className="font-[500] mb-6">Head of chef</p>
          <p className="font-[300]">
            Home to over a hundred breweries in the years prior to Home to over
            a hundred.
          </p>
          {/* team hover */}
          <div
            className="chef-hover-bg"
            style={{ backgroundImage: `url(${ChefImg3})` }}
          >
            <div className="flex flex-col items-start justify-end p-5 relative h-full">
              <div className="overley-chef"></div>
              <div className="z-10 text-left">
                <h4 className="text-2xl font-bold mb-1 text-white">
                  Jordan Simmons
                </h4>
                <p className="font-[500] text-white">Head of chef</p>
              </div>
            </div>
          </div>
        </div>
        {/* team end  */}
      </div>
    </div>
  );
}

export default OurTeam;
