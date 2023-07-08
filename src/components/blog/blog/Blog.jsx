import { useEffect } from "react"
import { useState } from "react"
import HeroDefault from "../../share/hero-default/HeroDefault"
import BlogCard from "../../share/blog-card/BlogCard"


function Blog() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/blog`)
      .then((res) => res.json())
    .then(data => setBlogs(data))
  }, [])
  console.log(blogs)
  return (
    <div>
      <HeroDefault heading={"Blog"} />
      <div className="max-w-[1300px] mx-auto px-5 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:justify-start lg:justify-between gap-y-10 lg:gap-x-10 sm:gap-x-5">
          {
            blogs.map((blog, index) => <><BlogCard index={index} blog={blog} /></>)
          }
        </div>
      </div>
    </div>
  );
}

export default Blog