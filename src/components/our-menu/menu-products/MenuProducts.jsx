import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from '../product-card/ProductCard';


function MenuProducts() {
    const [products, setProducts] = useState([])
    useEffect(() => {
      fetch(`http://localhost:5000/api/v1/products`)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
        });
    }, []);
  return (
      <div className="max-w-[1300px] mx-auto px-5 py-[80px]">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-[38px]'>
              {
                  products.map(product => <ProductCard key={product.id} product={product} />)
              }
          </div>
    </div>
  )
}

export default MenuProducts