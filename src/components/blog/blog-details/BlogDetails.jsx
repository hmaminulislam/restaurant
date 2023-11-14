import { Link, useLoaderData } from "react-router-dom"
import './blog-details.css'
import { BsFillTagsFill, BsArrowRight } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


function BlogDetails() {
  const data = useLoaderData()
  const [blogs, setBlogs] = useState([]);
  const latestBlogs = blogs.slice(0, 4);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://dexos.vercel.app/api/v1/blog`);
      const data = await res.json();
      setBlogs(data);
    };
    getData();
  }, []);
  return (
    <div>
      {/* breadcamb section  */}
      <div className="blog-details-hero">
        <div className="blog-hero-overley sm:h-[400px] h-[280px] flex flex-col justify-between">
          <div className="h-[300px] flex justify-center items-center">
            <h2 className="text-white sm:text-4xl text-2xl text-center px-5">
              {data.name}
            </h2>
          </div>
          <div className="h-[100px] flex items-center justify-center gap-[8px] border-t border-gray-500">
            <Link to="/" className="flex items-center gap-[8px] breadcamp-home">
              <span className="bg-primary text-white rounded-full w-[28px] sm:w-[34px] h-[28px] sm:h-[34px] flex items-center justify-center">
                <FaHome className="sm:text-[20px]" />
              </span>
              <p className="text-white text-sm sm:text-base">Home</p>
            </Link>
            <Link to={"/blog"} className="flex items-center gap-[8px]">
              <IoIosArrowForward className="text-primary sm:text-[20px]" />
              <p className="text-primary text-sm sm:text-base">Blog</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto px-5 py-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        {/* blog left side */}
        <div className="xl:max-w-[800px] lg:w-[65%]">
          {/* feature image */}
          <div className="relative">
            <img src={data.fetureImg} alt="" />
            <span className="absolute top-3 left-3 bg-primary text-white px-[12px] py-[5px] text-sm font-[300]">
              30 Jun, 2023
            </span>
          </div>
          {/* blog content  */}
          <div className="bg-[#F8F1ED] px-[20px] py-[35px]">
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center gap-2">
                <img
                  className="w-[45px] h-[45px] rounded-full"
                  src={data.authorImg}
                  alt=""
                />
                <p className="text-sm">{data.author}</p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillTagsFill />
                <p className="text-sm">{data.tag}</p>
              </div>
            </div>
            {/* summary  */}
            <p className="font-[300] mt-[20px] text-gray-600">{data.summary}</p>
            {/* writter */}
            <div className="relative border-l-[6px] border-primary px-5 py-[30px] bg-white mt-[35px] rounded-r-[5px]">
              <p className="font-[300] text-gray-600">{data.writerDesc}</p>
              <p className="font-[500] text-[20px] text-primary mt-[20px] z-[99]">
                {data.writer}
              </p>
              <img
                className="absolute bottom-5 right-5 z-[1]"
                src="https://i.ibb.co/vVySND6/Blockquote.png"
                alt=""
              />
            </div>
            {/* images content  */}
            <h3 className="text-[30px] text-gray-600 mt-[35px]">
              {data.subBodyOne.title}
            </h3>
            <p className="font-[300] text-gray-600 mt-[20px]">
              {data.subBodyOne.contentOne}
            </p>
            {/* images  */}
            <div className="flex items-center gap-5 mt-[35px]">
              <div>
                <img className="rounded-[2px]" src={data.bodyImgOne} alt="" />
              </div>
              <div>
                <img className="rounded-[2px]" src={data.bodyImgTwo} alt="" />
              </div>
            </div>
            <p className="font-[300] text-gray-600 mt-[30px]">
              {data.subBodyOne.contentTwo}
            </p>
            <h3 className="text-[30px] text-gray-600 mt-[35px]">
              {data.subBodyTwo.title}
            </h3>
            <p className="font-[300] text-gray-600 mt-[20px]">
              {data.subBodyTwo.contentOne}
            </p>
          </div>
        </div>
        {/* blog right side  */}
        <div className="xl:max-w-[460px] lg:w-[35%]">
          {/* blogs  */}
          <div className="bg-[#F8F1ED] px-[24px] py-[30px]">
            <h4 className="font-[500] text-[24px] mb-[14px]">Recent Posts</h4>
            <div className="flex flex-col gap-[35px]">
              {/* blog item  */}
              {latestBlogs.map((blog) => (
                <div key={blog._id}>
                  <Link to={`/blog/${blog._id}`} className="blog-side-item">
                    <div className="flex gap-[14px]">
                      <div>
                        <img
                          className="max-w-[90px] h-full rounded-[1px]"
                          src={blog.fetureImg}
                          alt=""
                        />
                      </div>
                      <div>
                        <h5 className="font-[400] text-[17px]">{blog.name}</h5>
                        <div className="flex items-center gap-[3px]">
                          <MdDateRange />
                          <p className="text-xs font-[300] mt-[5px]">
                            30 Jun, 2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* categories  */}
          <div className="bg-[#F8F1ED] px-[24px] py-[30px] mt-[50px]">
            <h4 className="font-[500] text-[24px] mb-[14px]">Categories</h4>
            <div className="flex flex-col gap-[20px]">
              <div className="flex items-center gap-[8px] cate-div">
                <BsArrowRight className="cate-icon" />
                <p>Food</p>
              </div>
              <div className="flex items-center gap-[8px] cate-div">
                <BsArrowRight />
                <p>Inspiration</p>
              </div>
              <div className="flex items-center gap-[8px] cate-div">
                <BsArrowRight />
                <p>Lifestyle</p>
              </div>
              <div className="flex items-center gap-[8px] cate-div">
                <BsArrowRight />
                <p>Recipes</p>
              </div>
              <div className="flex items-center gap-[8px] cate-div">
                <BsArrowRight />
                <p>World</p>
              </div>
            </div>
          </div>
          <div className="mt-[50px]">
            <img src="https://i.ibb.co/2gd4wMt/digital-marketing.png" alt="" />
          </div>
          {/* Tag  */}
          <div className="bg-[#F8F1ED] px-[24px] py-[30px] mt-[50px]">
            <h4 className="font-[500] text-[24px] mb-[14px]">Tag</h4>
            <div className="flex gap-5 flex-wrap">
              <button className="tag-btn">Food</button>
              <button className="tag-btn">Lifestyle</button>
              <button className="tag-btn">Pizza</button>
              <button className="tag-btn">Restaurant</button>
              <button className="tag-btn">Vincent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails
