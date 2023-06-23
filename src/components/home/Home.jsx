import MoreAbout from "../home/more-about/MoreAbout";
import OurService from "./our-service/OurService";
import OurStory from "./our-story/OurStory";
import Testimonial from "./testimonial/Testimonial";
import Blog from "./blog/Blog";
import Hero from "./hero/Hero";
import MenuHome from "./menu/MenuHome";

export default function Home() {
  return (
    <div>
      <Hero />
      <MoreAbout />
      <MenuHome />
      <OurService />
      <OurStory />
      <Testimonial />
      <Blog />
    </div>
  );
}
