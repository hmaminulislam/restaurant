import { useEffect } from "react"
import { useState } from "react"
import HeroDefault from "../../share/hero-default/HeroDefault"
import BlogCard from "../../share/blog-card/BlogCard"


function Blog() {
  const [blogs, setBlogs] = useState([])
  const [count, setCount] = useState(0)
  // pagination
  const [page, setPage] = useState(0);
  const size = 6;
  const pages = Math.ceil(count / size);
  useEffect(() => {
    fetch(`https://dexos.vercel.app/api/v1/blogs?size=${size}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data?.count);
        setBlogs(data?.blog);
      });
  }, [page, size]);
  return (
    <div>
      <HeroDefault heading={"Blog"} />
      <div className="max-w-[1300px] mx-auto px-5 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:justify-start lg:justify-between gap-y-10 lg:gap-x-10 sm:gap-x-5">
          {blogs?.map((blog, index) => (
            
              <div key={index}>
                <BlogCard blog={blog} />
              </div>
            
          ))}
        </div>
        <div className="text-center mt-[25px]">
          {[...Array(pages).keys()].map((number) => (
            <button
              className={`border px-[15px] py-[5px] mr-[5px] ${
                page === number && "bg-primary text-white"
              }`}
              key={number}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog