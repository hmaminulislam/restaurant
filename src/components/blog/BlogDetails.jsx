import { useLoaderData } from "react-router-dom"
import './blog-details.css'


function BlogDetails() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <div className="blog-details-hero sm:h-[300px] h-[180px] flex justify-center items-center">
        <h2 className="text-white sm:text-5xl text-4xl font-semibold">
          {data.name}
        </h2>
      </div>
      <div className="max-w-[1300px] mx-auto px-5 py-20"></div>
    </div>
  );
}

export default BlogDetails
