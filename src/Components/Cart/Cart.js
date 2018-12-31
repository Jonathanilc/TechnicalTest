import React from "react";
import "./Cart.css";
import Tee from "../../img/classic-tee.jpg";
import { connect } from "react-redux";
import {remove_product} from '../../Actions/ActionCreator'

const Cart = props => {
  const onRemoveHandler = (e) =>{
    props.dispatch(remove_product(e.target.name));
  }
  if (props.isClicked === true) {
    return (
      <div className="Cart">
        {props.products.nS !== 0 && (
          <div className="CartItem">
            <div className="CartItem__Img">
              <img  src={Tee} width="100%" alt="Tee" />
            </div>
            <div className="CartItem__Txt">
              <div className="CartItem_Txt--Title">Classic Tee</div>
              <div className="CartItem_Txt--Price">
                {props.products.nS}x{" "}
                <span style={{ fontWeight: "bold" }}>$75.00</span>
              </div>
              <div className="CartItem_Txt--Size">Size: S</div>
              <button className="CartItem--Remove" name="nS" onClick={onRemoveHandler}>remove</button>
            </div>
          </div>
        )}

        {props.products.nM !== 0 && (
          <div className="CartItem">
            <div className="CartItem__Img">
              <img src={Tee} width="100%" alt="Tee" />
            </div>
            <div className="CartItem__Txt">
              <div className="CartItem_Txt--Title">Classic Tee</div>
              <div className="CartItem_Txt--Price">
                {props.products.nM}x{" "}
                <span style={{ fontWeight: "bold" }}>$75.00</span>
              </div>
              <div className="CartItem_Txt--Size">Size: M</div>
              <button className="CartItem--Remove" name="nM" onClick={onRemoveHandler}>remove</button>
            </div>
          </div>
        )}

        {props.products.nL !== 0 && (
          <div className="CartItem">
            <div className="CartItem__Img">
              <img src={Tee} width="100%" alt="Tee" />
            </div>
            <div className="CartItem__Txt">
              <div className="CartItem_Txt--Title">Classic Tee</div>
              <div className="CartItem_Txt--Price">
                {props.products.nL}x{" "}
                <span style={{ fontWeight: "bold" }}>$75.00</span>
              </div>
              <div className="CartItem_Txt--Size">Size: L</div>
              <button className="CartItem--Remove" name="nL" onClick={onRemoveHandler}>remove</button>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    products: state.product
  };
};

export default connect(
  mapStateToProps,
  null
)(Cart);
