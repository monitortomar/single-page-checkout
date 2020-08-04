import React from "react";
import "./checkoutBtn.styles.css";

const ComponentBtn = () => {
  function handelLoad() {
    window.location.reload();
  }
  return (
    <button onClick={handelLoad} className="checkout-btn">
      Checkout
    </button>
  );
};

export default ComponentBtn;
