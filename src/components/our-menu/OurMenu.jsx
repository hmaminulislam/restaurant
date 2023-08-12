import HeroDefault from "../share/hero-default/HeroDefault";
import MenuProducts from "./menu-products/MenuProducts";

export default function OurMenu() {
  return (
    <div>
      <HeroDefault heading={"Our Menu"} />
      <MenuProducts />
    </div>
  );
}
