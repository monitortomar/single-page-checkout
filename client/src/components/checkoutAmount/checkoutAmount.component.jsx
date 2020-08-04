import React from "react";

import CheckoutDetail from "../checkoutDetails/checkoutDetails.component";
import ComponentBtn from "../checkoutBtn/checkoutBtn.component";

import "./checkoutAmount.styles.css";

const CheckoutAmount = () => {
  return (
    <div className="checkout-amount">
      <CheckoutDetail />
      <ComponentBtn />
    </div>
  );
};

export default CheckoutAmount;
