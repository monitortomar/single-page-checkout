import React from "react";

import ProductDirectory from "../components/productDirectory/productDirectory.component";
import CheckoutAmount from "../components/checkoutAmount/checkoutAmount.component";
import "./singleCheckoutPage.styles.css";

const SingleCheckoutPage = () => {
  return (
    <div className="checkout-page">
      <ProductDirectory />
      <CheckoutAmount />
    </div>
  );
};

export default SingleCheckoutPage;
