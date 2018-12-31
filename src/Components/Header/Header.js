import React, { Component } from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import { connect } from "react-redux";

class Header extends Component {
  state = {
    isClicked: false
  };

  onClickedHandler = () => {
    this.setState({ ...this.state, isClicked: !this.state.isClicked });
  };
  render() {
    const { nS, nM, nL } = this.props.products;
    return (
      <div>
        <div className="Header">

          {this.state.isClicked === true?<div className="Header__Icon Header__Icon--isClicked">
            <button onClick={this.onClickedHandler}><i className="fas fa-cart-arrow-down " />({nS + nM + nL})</button>
          </div>:<div className="Header__Icon">
            <button onClick={this.onClickedHandler}><i className="fas fa-cart-arrow-down " />({nS + nM + nL})</button>
          </div>}
          
          {this.state.isClicked === true ? (
            <button
              className="Header__Item Header__Item--isClicked"
              onClick={this.onClickedHandler}
            >
              My cart({nS + nM + nL})
            </button>
          ) : (
            <button className="Header__Item" onClick={this.onClickedHandler}>
              My cart({nS + nM + nL})
            </button>
          )}
        </div>
        <Cart isClicked={this.state.isClicked} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product
  };
};
export default connect(
  mapStateToProps,
  null
)(Header);
