import BlogImg1 from "../../../assets/blog/blog-1.jpg";
import BlogImg2 from "../../../assets/blog/blog-2.jpg";
import BlogImg3 from "../../../assets/blog/blog-3.jpg";
import AuthorImg1 from "../../../assets/blog/author-1.png";
import AuthorImg2 from "../../../assets/blog/author-2.png";
import AuthorImg3 from "../../../assets/blog/author-3.png";
import { BsArrowRight } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import '../../home/blog/blog.css'
import { Slide } from "react-awesome-reveal";

function Blog() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 py-20">
      <div className="mb-10">
        <Slide direction="up" triggerOnce={true}>
          <h4 className="caveat-font text-3xl text-primary">News & Blogs</h4>
        </Slide>
        <Slide direction="up" triggerOnce={true}>
          <h2 className="text-4xl sm:text-5xl font-semibold mt-2">
            Our Latest Foods Blog
          </h2>
        </Slide>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:justify-start lg:justify-between gap-y-10 lg:gap-x-10 sm:gap-x-5">
        {/* blog card start */}
        <div className="border rounded-[5px] max-w-[390px] mx-auto sm:mx-0 blog-box">
          <div className="blog-box-img-wrap">
            <img
              className="w-full h-[300px] blog-box-img rounded-t-[5px]"
              src={BlogImg1}
              alt=""
            />
          </div>
          <div className="py-5 px-5 relative">
            <button className="btn-bg-primary text-white py-1 px-4 text-sm absolute right-[20px] top-[-8px]">
              Restaurant
            </button>
            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-[60px] h-[60px] rounded-full border-[5px] border-white shadow-md"
                src={AuthorImg1}
                alt=""
              />
              <div>
                <h5 className="font-[600] text-[18px]">Stephanie</h5>
                <p className="text-xs font-[300] text-primary">30 Jun, 2023</p>
              </div>
            </div>
            <h3 className="text-[26px] font-[700] blog-box-title">
              Operates approximately 200 restaurants
            </h3>
            <p className="text-sm font-[300] mt-2">
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei. Mei an pericula euripidis
            </p>
            <div className="border-b my-4"></div>
            <div className="flex items-center justify-between">
              <button className="blog-box-btn flex items-center gap-3">
                Read More <BsArrowRight />
              </button>
              <p className="text-primary flex items-center gap-2">
                <FaRegComments /> 30
              </p>
            </div>
          </div>
        </div>
        {/* blog card end */}
        {/* blog card start */}
        <div className="border rounded-[5px] max-w-[390px] mx-auto sm:mx-0 blog-box">
          <div className="blog-box-img-wrap">
            <img
              className="w-full h-[300px] blog-box-img rounded-t-[5px]"
              src={BlogImg2}
              alt=""
            />
          </div>
          <div className="py-5 px-5 relative">
            <button className="btn-bg-primary text-white py-1 px-4 text-sm absolute right-[20px] top-[-8px]">
              Restaurant
            </button>
            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-[60px] h-[60px] rounded-full border-[5px] border-white shadow-md"
                src={AuthorImg2}
                alt=""
              />
              <div>
                <h5 className="font-[600] text-[18px]">Gilbert</h5>
                <p className="text-xs font-[300] text-primary">30 Jun, 2023</p>
              </div>
            </div>
            <h3 className="text-[26px] font-[700] blog-box-title">
              Tender fried baby squid with a salt, pepper
            </h3>
            <p className="text-sm font-[300] mt-2">
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei. Mei an pericula euripidis
            </p>
            <div className="border-b my-4"></div>
            <div className="flex items-center justify-between">
              <button className="blog-box-btn flex items-center gap-3">
                Read More <BsArrowRight />
              </button>
              <p className="text-primary flex items-center gap-2">
                <FaRegComments /> 30
              </p>
            </div>
          </div>
        </div>
        {/* blog card end */}
        {/* blog card start */}
        <div className="border rounded-[5px] max-w-[390px] mx-auto sm:mx-0 blog-box">
          <div className="blog-box-img-wrap">
            <img
              className="w-full h-[300px] blog-box-img rounded-t-[5px]"
              src={BlogImg3}
              alt=""
            />
          </div>
          <div className="py-5 px-5 relative">
            <button className="btn-bg-primary text-white py-1 px-4 text-sm absolute right-[20px] top-[-8px]">
              Restaurant
            </button>
            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-[60px] h-[60px] rounded-full border-[5px] border-white shadow-md"
                src={AuthorImg3}
                alt=""
              />
              <div>
                <h5 className="font-[600] text-[18px]">Taniya</h5>
                <p className="text-xs font-[300] text-primary">30 Jun, 2023</p>
              </div>
            </div>
            <h3 className="text-[26px] font-[700] blog-box-title">
              Introducing Our New Summer Menu!
            </h3>
            <p className="text-sm font-[300] mt-2">
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei. Mei an pericula euripidis
            </p>
            <div className="border-b my-4"></div>
            <div className="flex items-center justify-between">
              <button className="blog-box-btn flex items-center gap-3">
                Read More <BsArrowRight />
              </button>
              <p className="text-primary flex items-center gap-2">
                <FaRegComments /> 30
              </p>
            </div>
          </div>
        </div>
        {/* blog card end */}
      </div>
    </div>
  );
}

export default Blog;
