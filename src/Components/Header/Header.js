import React, { Component } from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import { connect } from "react-redux";
import { DropdownButton, MenuItem } from "react-bootstrap";

class Header extends Component {
  state = {
    isClicked: false,
    isIconclicked: false
  };

  

  onClickedHandler =()=> {
    this.setState({ ...this.state, isClicked: !this.state.isClicked });
  }
  onMouseEnter = () => {
    this.setState({ ...this.state, isClicked: true });
    console.log("in");
  };

  onMouseLeave = () => {
    this.setState({ ...this.state, isClicked: false });
    console.log("out");
  };
  render() {
    const { nS, nM, nL } = this.props.products;
    return (
      <div className="Header">
        <div className="Item">
          <DropdownButton
            className="Header__Item"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            open={this.state.isClicked}
            bsStyle="default"
            title={`My Cart(${nS+nM+nL})`}
            noCaret
            id="dropdown-no-caret"
          >
            <MenuItem eventKey="1"
            componentClass={Cart}>
            </MenuItem>
          </DropdownButton>
        </div>

        {this.state.isClicked === true ? (
          <div className="Header__Icon Header__Icon--isClicked">
            <button onClick={this.onClickedHandler}>
              <i className="fas fa-cart-arrow-down " />({nS + nM + nL})
            </button>
          </div>
        ) : (
          <div className="Header__Icon">
            <button onClick={this.onClickedHandler}>
              <i className="fas fa-cart-arrow-down " />({nS + nM + nL})
            </button>
          </div>
        )}

        {/* {this.state.isClicked === true ? (
          <button className="Header__Item Header__Item--isClicked">
            My cart({nS + nM + nL})
          </button>
        ) : (
          <button className="Header__Item">My cart({nS + nM + nL})</button>
        )} */}

        {/* <Cart className="mobile" isClicked={this.state.isClicked}/> */}
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
