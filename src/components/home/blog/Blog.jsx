import { BsArrowRight } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import '../../home/blog/blog.css'
import { Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [data, setData] = useState([])
  const latestData = data.slice(0, 3);
  useEffect(() => {
    const getData = async() => {
      const res = await fetch(`http://localhost:5000/api/v1/blog`);
      const data = await res.json()
       setData(data)
    }
    getData()
  }, [])
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
        {latestData.map((blog) => (
          <>
            <div className="border rounded-[5px] max-w-[390px] mx-auto sm:mx-0 blog-box">
              <div className="blog-box-img-wrap">
                <img
                  className="w-full h-[260px] blog-box-img rounded-t-[5px]"
                  src={blog.fetureImg}
                  alt=""
                />
              </div>
              <div className="py-5 px-5 relative">
                <button className="btn-bg-primary text-white py-1 px-4 text-sm absolute right-[20px] top-[-8px]">
                  {blog.category}
                </button>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    className="w-[60px] h-[60px] rounded-full border-[5px] border-white shadow-md"
                    src={blog.authorImg}
                    alt=""
                  />
                  <div>
                    <h5 className="font-[600] text-[18px]">{blog.author}</h5>
                    <p className="text-xs font-[300] text-primary">
                      30 Jun, 2023
                    </p>
                  </div>
                </div>
                <h3 className="text-[26px] font-[700] blog-box-title">
                  {blog.name}
                </h3>
                <p className="text-sm font-[300] mt-2">
                  {`${blog.summary.slice(0, 125)} ...`}
                </p>
                <div className="border-b my-4"></div>
                <div className="flex items-center justify-between">
                  <Link to={`blog/${blog._id}`}>
                    <button className="blog-box-btn flex items-center gap-3">
                      Read More <BsArrowRight />
                    </button>
                  </Link>
                  <p className="text-primary flex items-center gap-2">
                    <FaRegComments /> 30
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
        {/* blog card end */}
      </div>
    </div>
  );
}

export default Blog;
