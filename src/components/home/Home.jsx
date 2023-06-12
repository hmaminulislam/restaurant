import MoreAbout from "../home/more-about/MoreAbout";
import Menu from "./menu/Menu";
import OurService from "./our-service/OurService";
import OurStory from "./our-story/OurStory";
import Testimonial from "./testimonial/Testimonial";
import Blog from "./blog/Blog";
import Hero from "./hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <MoreAbout />
      <Menu />
      <OurService />
      <OurStory />
      <Testimonial />
      <Blog />
    </div>
  );
}
