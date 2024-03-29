import Burger from "../../../assets/hero/burger.png";
import "../hero/hero.css";
import BgShap from "../../../assets/hero/hero-bg-shap.png";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-primary hero">
      <div className="hero-content py-14 contianer max-w-[1300px] mx-auto flex felx-col flex-col-reverse md:flex-row items-center justify-between px-5">
        <div className="w-full md:w-1/2">
          <Slide direction="up" triggerOnce={true}>
            <h4 className="font-semibold caveat-font text-3xl">Diner</h4>
          </Slide>

          <Slide direction="up" triggerOnce={true}>
            <h2 className="md:text-8xl sm:text-6xl text-5xl font-bold text-white my-6">
              LET&#39;S EAT & DRINK
            </h2>
          </Slide>

          <Slide direction="up" triggerOnce={true}>
            <Link to={'/blog'} className="bg-primary text-white border-2 border-white font-semibold py-[10px] px-6 rounded-full">
              Read More
            </Link>
          </Slide>
          <img className="hero-content-shap" src={BgShap} alt="" />
        </div>
        <div className="md:w-1/2 w-full">
          <Slide direction="right" triggerOnce={true}>
            <img src={Burger} alt="" />
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Hero;
