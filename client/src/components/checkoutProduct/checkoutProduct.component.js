import React from "react";
import { connect } from "react-redux";

import "./checkoutProduct.styles.css";
let check = true;
const CheckoutProduct = ({ name, count }) => {
  if (
    (name === 0 && count === 0) ||
    (name === undefined && count === undefined)
  ) {
    check = false;
    return null;
  } else {
    return (
      <div className="checkout-product">
        <span className="product-span">Product</span>
        <span className="count-span">{`${count} * ${name}`}</span>
      </div>
    );
  }
};
export default CheckoutProduct;
