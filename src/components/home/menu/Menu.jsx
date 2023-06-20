import "./menu.css";
import FoodMenu1 from "../../../assets/food-menu/food-menu-1.jpg";
import FoodMenu2 from "../../../assets/food-menu/food-menu-2.jpg";
import FoodMenu3 from "../../../assets/food-menu/food-menu-3.jpg";
import FoodMenu4 from "../../../assets/food-menu/food-menu-4.jpg";
import FoodMenu5 from "../../../assets/food-menu/food-menu-5.jpg";
import FoodMenu6 from "../../../assets/food-menu/food-menu-6.jpg";
import FoodMenu7 from "../../../assets/food-menu/food-menu-7.jpg";
import FoodMenu8 from "../../../assets/food-menu/food-menu-8.jpg";
import ServiceDivider from "../../../assets/our-services/sec-title-1.png";
import { Slide } from "react-awesome-reveal";

function Menu() {
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
          <div className="flex items-center gap-5 menu-item-hover">
            <div className="w-[90px]">
              <img className="rounded-full" src={FoodMenu8} alt="" />
            </div>
            <div className="w-full">
              <div className="sm:flex justify-between items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold menu-item-title">
                  Raw Scallops from Erquy
                </h3>
                <div className="border-b grow hidden sm:block"></div>
                <div className="flex sm:flex-none justify-between items-center gap-4">
                  <div className="border-b w-full"></div>
                  <p className="text-primary font-[500]">$32.08</p>
                </div>
              </div>
              <p className="font-[300]">
                Candied Jerusalem artichokes, truffle
              </p>
            </div>
          </div>
          {/* single menu end */}
          {/* single menu start */}
          <div className="flex items-center gap-5 menu-item-hover">
            <div className="w-[90px]">
              <img className="rounded-full" src={FoodMenu1} alt="" />
            </div>
            <div className="w-full">
              <div className="sm:flex justify-between items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold menu-item-title">
                  Greek Salab
                </h3>
                <div className="border-b grow hidden sm:block"></div>
                <div className="flex sm:flex-none justify-between items-center gap-4">
                  <div className="border-b w-full"></div>
                  <p className="text-primary font-[500]">$40.02</p>
                </div>
              </div>
              <p className="font-[300]">
                Candied Jerusalem artichokes, truffle
              </p>
            </div>
          </div>
          {/* single menu end */}
          {/* single menu start */}
          <div className="flex items-center gap-5 menu-item-hover">
            <div className="w-[90px]">
              <img className="rounded-full" src={FoodMenu2} alt="" />
            </div>
            <div className="w-full">
              <div className="sm:flex justify-between items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold menu-item-title">
                  Tender Octopus and Fennel
                </h3>
                <div className="border-b grow hidden sm:block"></div>
                <div className="flex sm:flex-none justify-between items-center gap-4">
                  <div className="border-b w-full"></div>
                  <p className="text-primary font-[500]">$22.04</p>
                </div>
              </div>
              <p className="font-[300]">
                Candied Jerusalem artichokes, truffle
              </p>
            </div>
          </div>
          {/* single menu end */}
          {/* single menu start */}
          <div className="flex items-center gap-5 menu-item-hover">
            <div className="w-[90px]">
              <img className="rounded-full" src={FoodMenu3} alt="" />
            </div>
            <div className="w-full">
              <div className="sm:flex justify-between items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold menu-item-title">
                  Celeriac and Truffle Ravioli
                </h3>
                <div className="border-b grow hidden sm:block"></div>
                <div className="flex sm:flex-none justify-between items-center gap-4">
                  <div className="border-b w-full"></div>
                  <p className="text-primary font-[500]">$28.06</p>
                </div>
              </div>
              <p className="font-[300]">
                Candied Jerusalem artichokes, truffle
              </p>
            </div>
          </div>
          {/* single menu end */}
          {/* single menu start */}
          <div className="flex items-center gap-5 menu-item-hover">
            <div className="w-[90px]">
              <img className="rounded-full" src={FoodMenu4} alt="" />
            </div>
            <div className="w-full">
              <div className="sm:flex justify-between items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold menu-item-title">
                  Broccoli and Chorizo Fritters
                </h3>
                <div className="border-b grow hidden sm:block"></div>
                <div className="flex sm:flex-none justify-between items-center gap-4">
                  <div className="border-b w-full"></div>
                  <p className="text-primary font-[500]">$40.02</p>
                </div>
              </div>
              <p className="font-[300]">
                Candied Jerusalem artichokes, truffle
              </p>
            </div>
          </div>
          {/* single menu end */}
          {/* single menu start */}
          <div className="flex items-center gap-5 menu-item-hover">
            <div className="w-[90px]">
              <img className="rounded-full" src={FoodMenu5} alt="" />
            </div>
            <div className="w-full">
              <div className="sm:flex justify-between items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold menu-item-title">
                  Peri peri chicken burger
                </h3>
                <div className="border-b grow hidden sm:block"></div>
                <div className="flex sm:flex-none justify-between items-center gap-4">
                  <div className="border-b w-full"></div>
                  <p className="text-primary font-[500]">$30.02</p>
                </div>
              </div>
              <p className="font-[300]">
                Candied Jerusalem artichokes, truffle
              </p>
            </div>
          </div>
          {/* single menu end */}
          {/* single menu start */}
          <div className="flex items-center gap-5 menu-item-hover">
            <div className="w-[90px]">
              <img className="rounded-full" src={FoodMenu6} alt="" />
            </div>
            <div className="w-full">
              <div className="sm:flex justify-between items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold menu-item-title">
                  Chicken & Sundried tomato
                </h3>
                <div className="border-b grow hidden sm:block"></div>
                <div className="flex sm:flex-none justify-between items-center gap-4">
                  <div className="border-b w-full"></div>
                  <p className="text-primary font-[500]">$40.02</p>
                </div>
              </div>
              <p className="font-[300]">
                Candied Jerusalem artichokes, truffle
              </p>
            </div>
          </div>
          {/* single menu end */}
          {/* single menu start */}
          <div className="flex items-center gap-5 menu-item-hover">
            <div className="w-[90px]">
              <img className="rounded-full" src={FoodMenu7} alt="" />
            </div>
            <div className="w-full">
              <div className="sm:flex justify-between items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold menu-item-title">
                  Bruno&apos;s Scribble
                </h3>
                <div className="border-b grow hidden sm:block"></div>
                <div className="flex sm:flex-none justify-between items-center gap-4">
                  <div className="border-b w-full"></div>
                  <p className="text-primary font-[500]">$32.08</p>
                </div>
              </div>
              <p className="font-[300]">
                Candied Jerusalem artichokes, truffle
              </p>
            </div>
          </div>
          {/* single menu end */}
        </div>
      </div>
    </div>
  );
}

export default Menu;
