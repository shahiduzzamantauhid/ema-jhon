import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id)
  };
  return (
    <div className="flex justify-between w-full">
      <div className="mx-auto grid grid-cols-3 gap-12 py-12">
      {products.map((product) => (
        <Product product={product} handleAddToCart={()=>handleAddToCart(product)}></Product>
      ))}
    </div>
    <div className="w-2/12 bg-amber-500 my-12 rounded-xl px-8 h-96">
      <Cart cart={cart}></Cart>
    </div>
    </div>
  );
};

export default Shop;
