import "./menu-home.css";
import ServiceDivider from "../../../assets/our-services/sec-title-1.png";
import { Slide } from "react-awesome-reveal";
import MenuHomeData from "./MenuHomeData";

function MenuHome() {
  return (
    <div className="our-menu-section">
      <div className="max-w-[1300px] mx-auto px-5 py-20">
        {/* section heading start */}
        <div className="text-center">
          <Slide direction="up" triggerOnce={true}>
            <h4 className="caveat-font text-3xl text-primary">From Our Menu</h4>
          </Slide>

          <Slide direction="up" triggerOnce={true}>
            <h2 className="text-4xl sm:text-5xl font-semibold my-4">
              Delicious Food Forever
            </h2>
          </Slide>

          <img className="mx-auto mb-4" src={ServiceDivider} alt="" />
        </div>
        {/* section heading end */}
        {/* section menus */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 gap-y-14 sm:gap-y-10 mt-14">
          {/* single menu start */}
          {MenuHomeData.map((data, index) => (
            <div key={index} className="flex items-center gap-5 menu-item-hover">
              <div className="w-[90px]">
                <img className="rounded-full" src={data.img} alt="" />
              </div>
              <div className="w-full">
                <div className="sm:flex justify-between items-center gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl sm:font-semibold menu-item-title">
                    {data.name}
                  </h3>
                  <div className="border-b grow hidden sm:block"></div>
                  <div className="flex sm:flex-none justify-between items-center gap-4">
                    <div className="border-b w-full"></div>
                    <p className="text-primary font-[500]">{data.price}</p>
                  </div>
                </div>
                <p className="font-[300]">
                  {data.body}
                </p>
              </div>
            </div>
          ))}
          {/* single menu end */}
        </div>
      </div>
    </div>
  );
}

export default MenuHome;