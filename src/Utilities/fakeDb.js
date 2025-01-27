const addToDb =(id) =>{
let shoppingCart ={};

 const storedCart = localStorage.getItem("shopping-Cart");
 if(storedCart){
   shoppingCart= JSON.parse(storedCart)
 }

//add quantity
const quantity = shoppingCart[id];
if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity
}
else{
    shoppingCart[id]= 1;
}

localStorage.setItem('shopping-Cart' , JSON.stringify(shoppingCart));


}
//get stored product
const getStoredProduct = () =>
{
    let shoppingCart ={};
   const storedCart = localStorage.getItem("shopping-Cart");
   if(storedCart){
   shoppingCart = JSON.parse(storedCart)
   }
   return shoppingCart;

}

export {addToDb, getStoredProduct}