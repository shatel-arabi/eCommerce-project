import React from "react";
import loading from "../../../assets/images/loading.gif";


const Product = ({ product,handleAddToCart }) => {
  const { name, img, price, catagory, seller, shipping } = product;
  
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="border-2">
          <img
            src={img}
            alt={name}
            onError={(e) => (e.target.src = loading)} 
            // Fallback to the loading image if error occurs
          />
        </figure>
        {/* <figure className="border-2">
          <img src={img ? img: loading} alt={name} />
        </figure> */}
        <div className="card-body">
          <h2 className="card-title">
            {name} {seller}
          </h2>
          <p>{catagory}</p>
          <p>Price: ${price}</p>
          <p>Shipping: {shipping}</p>
          <div className="card-actions ">
            <button onClick={()=>handleAddToCart(product)} className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
