import '../../home/blog/blog.css'
import { Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import BlogCard from "../../share/blog-card/BlogCard";

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
          <div key={blog._id}>
            <BlogCard blog={blog} />
          </div>
        ))}
        {/* blog card end */}
      </div>
    </div>
  );
}

export default Blog;
