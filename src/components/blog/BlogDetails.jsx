import { useLoaderData } from "react-router-dom"
import './blog-details.css'
import { BsFillTagsFill, BsArrowRight } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";


function BlogDetails() {
  const data = useLoaderData()
  const [blogs, setBlogs] = useState([]);
  const latestBlogs = blogs.slice(0, 4);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/blog`);
      const data = await res.json();
      setBlogs(data);
    };
    getData();
  }, []);

  console.log(data)
  return (
    <div>
      <div className="blog-details-hero sm:h-[300px] h-[180px] flex justify-center items-center">
        <h2 className="text-white sm:text-5xl text-4xl font-semibold">
          {data.name}
        </h2>
      </div>
      <div className="max-w-[1300px] mx-auto px-5 py-20 flex justify-between gap-10">
        {/* blog left side */}
        <div className="max-w-[800px]">
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
        <div className="max-w-[460px]">
          {/* blogs  */}
          <div className="bg-[#F8F1ED] px-[24px] py-[30px]">
            <h4 className="font-[500] text-[24px] mb-[14px]">Recent Posts</h4>
            <div className="flex flex-col gap-[35px]">
              {/* blog item  */}
              {latestBlogs.map((blog) => (
                <>
                  <div className="flex gap-[14px]">
                    <div className="">
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
                </>
              ))}
            </div>
          </div>
          {/* categories  */}
          <div className="bg-[#F8F1ED] px-[24px] py-[30px] mt-[50px]">
            <h4 className="font-[500] text-[24px] mb-[14px]">Categories</h4>
            <div className="flex flex-col gap-[20px]">
              <div className="flex items-center gap-[8px]">
                <BsArrowRight />
                <p>Food</p>
              </div>
              <div className="flex items-center gap-[8px]">
                <BsArrowRight />
                <p>Inspiration</p>
              </div>
              <div className="flex items-center gap-[8px]">
                <BsArrowRight />
                <p>Lifestyle</p>
              </div>
              <div className="flex items-center gap-[8px]">
                <BsArrowRight />
                <p>Recipes</p>
              </div>
              <div className="flex items-center gap-[8px]">
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
              <button className="bg-primary text-sm text-white px-4 py-[5px]">
                Food
              </button>
              <button className="bg-primary text-sm text-white px-4 py-[5px]">
                Lifestyle
              </button>
              <button className="bg-primary text-sm text-white px-4 py-[5px]">
                Pizza
              </button>
              <button className="bg-primary text-sm text-white px-4 py-[5px]">
                Restaurant
              </button>
              <button className="bg-primary text-sm text-white px-4 py-[5px]">
                Vincent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails
