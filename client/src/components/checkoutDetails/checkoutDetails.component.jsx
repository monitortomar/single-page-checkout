import React from "react";
import { connect } from "react-redux";

import CheckoutProduct from "../checkoutProduct/checkoutProduct.component";
import CheckoutPromo from "../checkoutPromo/checkoutPromo.component";
import CheckoutTotal from "../checkoutTotal/checkoutTotal.component";
import "./checkoutDetails.styles.css";

const localKey = [];
let localdb = [];

const CheckoutDetail = ({ count }) => {
  let total = 0;
  if (!localKey.includes(count.key)) {
    localKey.push(count.key);
    localdb.push(count);
  } else if (count.count === 0) {
    localdb = localdb.map((db) => {
      if (db.key === count.key) {
        db.name = 0;
        db.count = 0;
        return db;
      } else {
        return db;
      }
    });
  } else {
    localdb = localdb.map((db) => {
      if (db.key === count.key) {
        return count;
      } else {
        return db;
      }
    });
  }
  localdb.map((content) => {
    if (content !== 0 && content.count !== 0) {
      let str = content.price.substring(1);
      total = total + content.count * parseFloat(str);
      str = "";
    } else if (content !== 0 && content.count === undefined) {
      let str = content.price.substring(1);
      total = total - parseFloat(str);
    }
  });
  return (
    <div className="checkout-details">
      {localdb.map((content) =>
        content === 0 ? (
          <CheckoutProduct name={undefined} count={undefined} />
        ) : (
          <CheckoutProduct
            key={content.key}
            name={content.name}
            count={content.count}
          />
        )
      )}
      <CheckoutPromo total={total.toFixed(2)} />
      <CheckoutTotal total={total.toFixed(2)} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.product.count,
});

export default connect(mapStateToProps)(CheckoutDetail);
