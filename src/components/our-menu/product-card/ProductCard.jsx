import React from 'react'
import { AiFillStar } from "react-icons/ai";
import './product-card.css'

function ProductCard({ product }) {
  return (
    <div className="rounded-[12px] shadow max-w-[320px] mx-auto product-card">
      <img
        className="h-[220px] w-full rounded-t-[12px] product-card-img"
        src={product.image}
        alt=""
      />
      <div className="relative text-center px-[20px] py-[30px]">
        <span className="px-[10px] py-[5px] bg-primary capitalize text-xs font-semibold text-white absolute top-[-16px] right-[8px] rounded-[2px]">
          {product.category}
        </span>
        <h4 className="text-[22px]">{product.name}</h4>
        <div className="flex items-center justify-center gap-[2px] mt-[10px]">
          <AiFillStar className="text-[20px]" />
          <AiFillStar className="text-[20px]" />
          <AiFillStar className="text-[20px]" />
          <AiFillStar className="text-[20px]" />
          <AiFillStar className="text-[20px]" />
        </div>
        <h5 className="text-[18px] font-semibold text-primary mt-[15px]">
          ${product.price}
        </h5>
      </div>
    </div>
  );
}

export default ProductCard