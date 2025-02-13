import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const { initialCart } = useLoaderData();
  console.log(initialCart);
  const {cart, setCart} = useState(initialCart);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <h1 className="text-center font-samibold text-primary">
          
        </h1>
        {
            initialCart.map((product) => (
              <div className="card card-side bg-base-100 shadow-xl my-5">
              <figure>
                <img className="h-80"
                  src={product.img}
                  alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>QTY: {product.quantity}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>)) }
      </div>
    </div>
  );
};

export default Order;
