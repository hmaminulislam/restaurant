import { BsArrowRight } from 'react-icons/bs';
import { FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './blog-card.css'

function BlogCard({ blog }) {
    const {fetureImg, category,authorImg, author, name, _id, summary} = blog
  return (
    <div className="border rounded-[5px] max-w-[390px] mx-auto sm:mx-0 blog-box">
      <div className="blog-box-img-wrap">
        <Link to={`/blog/${_id}`}>
          <img
            className="w-full h-[260px] blog-box-img rounded-t-[5px]"
            src={fetureImg}
            alt=""
          />
        </Link>
      </div>
      <div className="py-5 px-5 relative">
        <p className="btn-bg-primary text-white py-1 px-4 text-sm absolute right-[20px] top-[-8px]">
          {category}
        </p>
        <div className="flex items-center gap-4 mb-4">
          <img
            className="w-[60px] h-[60px] rounded-full border-[5px] border-white shadow-md"
            src={authorImg}
            alt=""
          />
          <div>
            <h5 className="font-[600] text-[18px]">{author}</h5>
            <p className="text-xs font-[300] text-primary">30 Jun, 2023</p>
          </div>
        </div>
        <Link to={`/blog/${_id}`}>
          <h3 className="text-[26px] font-[700] blog-box-title">{name}</h3>
        </Link>
        <p className="text-sm font-[300] mt-2">
          {`${summary.slice(0, 125)} ...`}
        </p>
        <div className="border-b my-4"></div>
        <div className="flex items-center justify-between">
          <Link to={`/blog/${_id}`} className="card-read-btn">
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
  );
}

export default BlogCard