import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);
  return (
    <div className="grid grid-cols-4 gap-12 py-12">
    {
        products.map((product) =><Product product={product}></Product>)
    }
    </div>
  );
};

export default Shop;
