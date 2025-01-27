import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({handleAddToCart}) => {
const [products,  setProducts] = useState([]);
    useEffect(()=> {
        fetch("allProducts.json")
        .then((res)=> res.json())
        .then((data) => setProducts(data));
    },[]) ;
   
    
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {
        products.map((product)=>
          (<Product 
            key={product.id} 
            product={product} 
            handleAddToCart={handleAddToCart}
          ></Product>))
  
      }
    </div>
  );
};

export default Products;
