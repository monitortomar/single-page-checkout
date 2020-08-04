import React, { Component } from "react";

import SingleCheckoutPage from "../src/pages/singleCheckoutPage.component";

class ProductList extends Component {
  constructor() {
    super();
    this.productCount = 0;
  }

  render() {
    return (
      <div>
        <SingleCheckoutPage />
      </div>
    );
  }
}

export default ProductList;
