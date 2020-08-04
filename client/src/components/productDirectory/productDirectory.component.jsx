import React from "react";

import ProductItems from "../productItems/productItems.component";
import "./productDirectory.styles.css";

class ProductDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((list) => {
        return this.setState({ productList: list.data });
      });
  };

  render() {
    return (
      <div className="product-directory">
        {this.state.productList.map(({ id, name, url, price }) => {
          return (
            <ProductItems
              key={id}
              dataKey={id}
              name={name}
              price={price}
              url={url}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductDirectory;
