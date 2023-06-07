import Home from "../components/home/Home";
import About from "../components/about/About";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import OurMenu from "../components/our-menu/OurMenu";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/our-menu",
          element: <OurMenu/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    }
  ]);

export default router