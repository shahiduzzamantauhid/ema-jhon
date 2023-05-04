import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Product = (props) => {
    const {img, name, seller, price, stock, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
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
          <button onClick={()=>handleAddToCart(props.Product)} className="btn btn-primary">Buy Now <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
      </div>
    </div>
    <p>Hello world</p>
    </div>
  );
};

export default Product;
