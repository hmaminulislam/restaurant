import BlogImg1 from "../../../assets/blog/blog-1.jpg";
import AuthorImg1 from "../../../assets/blog/author-1.png";
import { BsArrowRight } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";

function Blog() {
  return (
    <div className="max-w-[1300px] mx-auto px-5 py-20">
      <div className="mb-10">
        <h4 className="caveat-font text-3xl text-primary">News & Blogs</h4>
        <h2 className="text-4xl sm:text-5xl font-semibold mt-2">Our Latest Foods Blog</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 lg:justify-between sm:justify-start justify-center gap-10">
        {/* blog card start */}
        <div className="border rounded-[5px] max-w-[390px]">
          <div className="relative">
            <img
              className="w-full h-[300px] rounded-t-[5px]"
              src={BlogImg1}
              alt=""
            />
            <button className="btn-bg-primary text-white py-1 px-4 text-sm absolute right-[20px] bottom-[-8px]">
              Restaurant
            </button>
          </div>
          <div className="py-5 px-5">
            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-[60px] h-[60px] rounded-full border-[5px] border-white shadow-md"
                src={AuthorImg1}
                alt=""
              />
              <div>
                <h5 className="font-[600]">Jhon doe</h5>
                <p className="text-sm font-[300] text-primary">30 jun, 2023</p>
              </div>
            </div>
            <h3 className="text-[26px] font-[700]">
              Introducing Our New Summer Menu!
            </h3>
            <p className="text-sm font-[300] mt-2">
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei. Mei an pericula euripidis
            </p>
            <div className="border-b my-4"></div>
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-3">
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
        <div className="border rounded-[5px] max-w-[390px]">
          <div className="relative">
            <img
              className="w-full h-[300px] rounded-t-[5px]"
              src={BlogImg1}
              alt=""
            />
            <button className="btn-bg-primary text-white py-1 px-4 text-sm absolute right-[20px] bottom-[-8px]">
              Restaurant
            </button>
          </div>
          <div className="py-5 px-5">
            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-[60px] h-[60px] rounded-full border-[5px] border-white shadow-md"
                src={AuthorImg1}
                alt=""
              />
              <div>
                <h5 className="font-[600]">Jhon doe</h5>
                <p className="text-sm font-[300] text-primary">30 jun, 2023</p>
              </div>
            </div>
            <h3 className="text-[26px] font-[700]">
              Introducing Our New Summer Menu!
            </h3>
            <p className="text-sm font-[300] mt-2">
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei. Mei an pericula euripidis
            </p>
            <div className="border-b my-4"></div>
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-3">
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
        <div className="border rounded-[5px] max-w-[390px]">
          <div className="relative">
            <img
              className="w-full h-[300px] rounded-t-[5px]"
              src={BlogImg1}
              alt=""
            />
            <button className="btn-bg-primary text-white py-1 px-4 text-sm absolute right-[20px] bottom-[-8px]">
              Restaurant
            </button>
          </div>
          <div className="py-5 px-5">
            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-[60px] h-[60px] rounded-full border-[5px] border-white shadow-md"
                src={AuthorImg1}
                alt=""
              />
              <div>
                <h5 className="font-[600]">Jhon doe</h5>
                <p className="text-sm font-[300] text-primary">30 jun, 2023</p>
              </div>
            </div>
            <h3 className="text-[26px] font-[700]">
              Introducing Our New Summer Menu!
            </h3>
            <p className="text-sm font-[300] mt-2">
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei. Mei an pericula euripidis
            </p>
            <div className="border-b my-4"></div>
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-3">
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
