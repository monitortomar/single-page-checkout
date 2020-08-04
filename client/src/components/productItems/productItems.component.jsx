import React from "react";

import ProductName from "../productName/productName.component";
import ProductImage from "../productImage/productImage.component";
import ProductDetails from "../productDetails/productdetails.component";
import "./productItems.styles.css";

const ProductItems = ({ dataKey, name, url, price }) => {
  return (
    <div className="product-item">
      <ProductImage url={url} />
      <div className="product-content">
        <ProductName name={name} />
        <ProductDetails dataKey={dataKey} price={price} name={name} />
      </div>
    </div>
  );
};

export default ProductItems;
