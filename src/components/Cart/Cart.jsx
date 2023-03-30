import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShippingCost = 0;

  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShippingCost = totalShippingCost + product.shipping;
  }
  let TotalTax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShippingCost + TotalTax;
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-6">Cart</h1>
      <p>Selected Item: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShippingCost}</p>
      <p>Total Tax: ${TotalTax}</p>
      <p>Grand Total: ${grandTotal}</p>
    </div>
  );
};

export default Cart;
