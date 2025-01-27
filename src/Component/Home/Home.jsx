import React, { useState } from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import { addToDb } from "../../Utilities/fakeDb";
//import { useState } from "react";

const Home = () => {
//create new array
   const[cart, setCart] = useState([]);
   
   const clearCart = () =>{
    setCart([]);
   }
  const handleAddToCart=(clickedProduct) => {
    //console.log(clickedProduct);
    //to check the clicked product is existed  in the  array. exist product is, it was selected before
    const exists = cart.find(product => product.id === clickedProduct.id);
    let newCart = [];
    if(!exists){ 
     
      clickedProduct.quantity = 1; 
      //spread operator
      newCart = [...cart, clickedProduct]
    }
    else {
      //rest is the product that means among all the product without (matchone)clicked one
      const rest = cart.filter(product => product.id !== clickedProduct.id);
      exists.quantity= exists.quantity + 1;
      //spread operator
      newCart = [...rest, exists]
    }
    //newCart.push(clickedProduct);
  
    setCart(newCart);
    addToDb(clickedProduct);

    };
  
  return (
    <div className="mx-10 my-5">
      <div className="flex justify-between">
        <div className="w-3/4 me-2">
          <Products handleAddToCart={handleAddToCart}></Products>
        </div>
        <div className="bg-primary md:fixed md:w-1/4 md:ms-2 right-0 rounded">
          <Cart cart={cart} clearCart={clearCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
