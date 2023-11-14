import Home from "../components/home/Home";
import About from "../components/about/About";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import OurMenu from "../components/our-menu/OurMenu";
import Contact from "../components/contact/Contact";
import BlogDetails from "../components/blog/blog-details/BlogDetails";
import Blog from "../components/blog/blog/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "blog/:id",
        element: <BlogDetails />,
        loader: async ({ params }) => {
          return fetch(`https://dexos.vercel.app/api/v1/blog/${params.id}`);
        },
      },
    ],
  },
]);

export default router