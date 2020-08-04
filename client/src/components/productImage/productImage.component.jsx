import React from "react";

import "./productImage.styles.css";

const ProductImage = ({ url }) => {
  return (
    <div className="product-image">
      <img className="pro-image" src={url} alt="Image" />
    </div>
  );
};

export default ProductImage;
