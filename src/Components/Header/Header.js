import React, { Component } from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import {connect} from 'react-redux'

class Header extends Component {
    state={
        isClicked: false
    }

    onClickedHandler = ()=> {
        this.setState({...this.state, isClicked: !this.state.isClicked})
    }
  render() {
    const {nS,nM,nL} = this.props.products;
    return (
      <div>
        <div className="Header">
          <button 
            className="Header__Item"
            onClick={this.onClickedHandler}>My cart({nS+nM+nL})</button>
        </div>
        <Cart isClicked={this.state.isClicked}></Cart>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    products: state.product
  }
}
export default connect(mapStateToProps,null)(Header);
