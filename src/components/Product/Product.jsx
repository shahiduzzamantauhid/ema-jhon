import React from "react";

const Product = (props) => {
    console.log(props.product);
    const {img, name, seller, price, stock, ratings} = props.product;
  return (
    <div className="">
        <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <div className="text-2xl font-bold text-center">Price: <span className="text-red-500">${price}</span></div>
        <h2 className="text-xl font-bold text-center">{name}</h2>
        <p>Seller: {seller}</p>
        <p>Ratings: {ratings}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
