import { getStoredProduct } from "../Utilities/fakeDb";

export const productsAndCartLoader = async () => {
    //get all products
    const productData =  await fetch("allProducts.json");
    console.log(productData);
    
    //as it shows json format, we want to convert it parse
    const products = await productData.json();
    console.log(products);
    
    //get cart
    const savedCart = getStoredProduct();
    const initialCart = [];

    console.log(savedCart);
    for (const id in savedCart) {
        //console.log(id);
        
        const addedProduct = products.find(product => product.id === id);
        console.log(addedProduct);
        
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
            
        }
        
    }
    console.log(initialCart);
    
    return { products: products, initialCart: initialCart};
}