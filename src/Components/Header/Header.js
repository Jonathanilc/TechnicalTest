import React, { Component } from "react";
import "./Header.css";
import Cart from "../Cart/Cart";

class Header extends Component {
    state={
        isClicked: false
    }

    onClickedHandler = ()=> {
        this.setState({...this.state, isClicked: !this.state.isClicked})
    }
  render() {
    return (
      <div>
        <div className="Header">
          <button 
            className="Header__Item"
            onClick={this.onClickedHandler}>My cart(4)</button>
        </div>
        <Cart isClicked={this.state.isClicked}></Cart>
      </div>
    );
  }
}

export default Header;
