import React from "react";
import { connect } from "react-redux";

import "./checkoutTotal.styles.css";

const CheckoutTotal = ({ total }) => {
  return (
    <div className="checkout-total">
      <span>Total</span>
      <span>{total.total ? `$${total.total}` : 0}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.total.total,
});

export default connect(mapStateToProps)(CheckoutTotal);
