import React from "react";

import PriceDetail from "../priceDetails/priceDetails.component";
import BuyDetail from "../buyDetails/buyDetails.component";
import "./productDetails.styles.css";

const ProductDetails = ({ dataKey, price, name }) => {
  return (
    <div className="product-details">
      <PriceDetail price={price} />
      <BuyDetail dataKey={dataKey} price={price} name={name} />
    </div>
  );
};

export default ProductDetails;
