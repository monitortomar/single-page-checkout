import React from "react";
import { connect } from "react-redux";

import { updateTotalAmt } from "../../redux/total/total.action";
import "./checkoutPromo.styles.css";

class CheckoutPromo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      promoList: [],
      status: "",
      desc: "",
      totalAmt: 0,
    };
    this.promoCode = this.promoCode.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.updatePromo = this.updatePromo.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch("/api/promo")
      .then((res) => res.json())
      .then((list) => {
        return this.setState({ promoList: list.data });
      });
  };

  updatePromo = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("/api/update_promo", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ code: this.state.code }),
    }).then(function (response) {
      return response.json();
    });
  };

  promoCode(event) {
    this.setState({ code: event.target.value });
  }

  checkStatus(e) {
    this.state.promoList.map((promo) => {
      if (promo.code === this.state.code) {
        if (promo.status === false) {
          this.setState({
            status: "apply",
            desc: promo.description,
          });
          let amt = this.props.total;
          if (this.state.code === "RRD4D32") {
            amt = amt / 10;
            amt = amt > 5000 ? 5000 : amt;
            amt = this.props.total - amt + "";
          } else {
            amt = amt * 0.15;
            amt = amt > 10000 ? 10000 : amt;
            amt = this.props.total - amt + "";
          }
          this.setState({
            totalAmt: amt,
          });
          this.updatePromo();
        } else {
          this.setState({
            status: "no",
          });
        }
      }
    });
  }

  render() {
    const { updateTotalAmt } = this.props;
    if (this.state.totalAmt === 0) {
      updateTotalAmt({
        total: this.props.total,
      });
    } else {
      updateTotalAmt({
        total: this.state.totalAmt,
      });
    }
    if (this.state.status === "") {
      return (
        <div className="checkout-promotion">
          <input
            className="checkout-promotion-input"
            type="text"
            placeholder="Add Promocode"
            onChange={this.promoCode}
          />
          <button
            onClick={this.checkStatus}
            className="checkout-promotion-button"
            type="submit"
          >
            Apply
          </button>
        </div>
      );
    }
    if (this.state.status === "apply") {
      return (
        <div className="checkout-promotion">
          <input
            className="checkout-promotion-input"
            type="text"
            placeholder="Add Promocode"
            onChange={this.promoCode}
          />
          <button
            onClick={this.checkStatus}
            className="checkout-promotion-button-apply"
            type="submit"
          >
            Apply
          </button>
          <div className="promo-desc">{this.state.desc}</div>
        </div>
      );
    }
    if (this.state.status === "no") {
      return (
        <div className="checkout-promotion">
          <input
            className="checkout-promotion-input"
            type="text"
            placeholder="Add Promocode"
            onChange={this.promoCode}
          />
          <button
            onClick={this.checkStatus}
            className="checkout-promotion-button-no"
            type="submit"
          >
            Apply
          </button>
        </div>
      );
    }
  }
}

// const CheckoutPromo = () => {
//   return (
//     <div className="checkout-promotion">
//       <input
//         className="checkout-promotion-input"
//         type="text"
//         placeholder="Add Promocode"
//       />
//       <button className="checkout-promotion-button" type="submit">
//         Apply
//       </button>
//     </div>
//   );
// };

const mapDispatchToProps = (dispatch) => ({
  updateTotalAmt: (total) => dispatch(updateTotalAmt(total)),
});

export default connect(null, mapDispatchToProps)(CheckoutPromo);
