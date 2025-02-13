import React from "react";
import { Link } from "react-router-dom";

const Cart = ({cart, clearCart}) => {
 // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    //console.log(product);
    total = total + product.price * product.quantity;
    //quantity = quantity + product.quantity;
    
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="md:p-2">
      <div>
      <h1 className=" text-xl font-semibold text-center">Order Summary </h1>
      </div>
      <div className="p-3 my-5 font-semibold">
      {/* <p>Total Items: {quantity}</p>  */}
      <p>Total Products : {cart.length}</p> 
      <p>Total Price: ${total}</p>     
      <p>Shipping cost: ${shipping}</p>      
      <p>Tax :{tax} </p> 
      <p className="font-bold">Subtotal : ${grandTotal} </p>
      </div>
      
      <div className="flex justify-center">
        <Link to="/orders"><button className="btn btn-primary-sm md:mr-2 hover:bg-secondary hover:text-white">View Order</button>  </Link>   
      <button onClick={clearCart} className="btn btn-primary-sm hover:bg-secondary hover:text-white">Back to Home</button></div>
           

    </div>
  );
};

export default Cart;
