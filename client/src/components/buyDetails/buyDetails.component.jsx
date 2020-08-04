import React from "react";
import { connect } from "react-redux";

import { updateProductCount } from "../../redux/product/product.actions";
import "./buyDetails.styles.css";

class BuyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      active: 0,
      price: 0,
      count: 0,
      mode: "add",
    };
    this.toggleView = this.toggleView.bind(this);
    this.getView = this.getView.bind(this);
  }

  toggleView(e) {
    const { updateProductCount } = this.props;
    if (e.target.id === "addbtn") {
      this.setState({
        mode: "added",
        active: 1,
        price: this.props.price,
        count: 1,
      });
      updateProductCount({
        count: 1,
        price: this.props.price,
        name: this.props.name,
        key: this.props.dataKey,
      });
    }
    if (e.target.id === "minus" && this.state.count === 1) {
      this.setState({
        mode: "add",
        active: 1,
        price: this.props.price,
        count: 0,
      });
      updateProductCount({
        count: 0,
        price: this.props.price,
        name: this.props.name,
        key: this.props.dataKey,
      });
    }
    if (e.target.id === "plus") {
      this.setState({
        mode: "added",
        active: 1,
        count: this.state.count + 1,
        price: this.props.price,
      });
      updateProductCount({
        count: this.state.count + 1,
        price: this.props.price,
        name: this.props.name,
        key: this.props.dataKey,
      });
    }
    if (e.target.id === "minus" && this.state.count !== 1) {
      this.setState({
        mode: "added",
        active: 1,
        count: this.state.count - 1,
        price: this.props.price,
      });
      updateProductCount({
        count: this.state.count - 1,
        price: this.props.price,
        name: this.props.name,
        key: this.props.dataKey,
      });
    }
  }

  inputChangedHandler = (event) => {};

  getView(mode) {
    const views = {
      add: (
        <button id={`addbtn`} className="buy-details">
          ADD TO CART
        </button>
      ),
      added: (
        <div className="plus-minus">
          <button id={`minus`}>-</button>
          <input
            className="plus-minus-input"
            type="text"
            size="1"
            maxLength="2"
            value={this.state.count}
            onChange={(event) => this.inputChangedHandler(event)}
          />
          <button id={`plus`}>+</button>
        </div>
      ),
    };
    return views[mode];
  }

  render() {
    return <div onClick={this.toggleView}>{this.getView(this.state.mode)}</div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateProductCount: (product) => dispatch(updateProductCount(product)),
});

export default connect(null, mapDispatchToProps)(BuyDetails);
