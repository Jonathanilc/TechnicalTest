import React from "react";
import "./Cart.css";
import Tee from "../../img/classic-tee.jpg";

const Cart = props => {
  if (props.isClicked === true) {
    return (
      <div className="Cart">
        <div className="CartItem">
          <div className="CartItem__Img">
            <img src={Tee} width="100%" />
          </div>
          <div className="CartItem__Txt">
            <div className="CartItem_Txt--Title">Classic Tee</div>
            <div className="CartItem_Txt--Price">
              1x <span style={{ fontWeight: "bold" }}>$75.00</span>
            </div>
            <div className="CartItem_Txt--Size">Size: S</div>
          </div>
        </div>

        <div className="CartItem">
          <div className="CartItem__Img">
            <img src={Tee} width="100%" />
          </div>
          <div className="CartItem__Txt">
            <div className="CartItem_Txt--Title">Classic Tee</div>
            <div className="CartItem_Txt--Price">
              3x <span style={{ fontWeight: "bold" }}>$75.00</span>
            </div>
            <div className="CartItem_Txt--Size">Size: L</div>
          </div>
        </div>
      </div>
    );
  }else{
    return null;
  }
};

export default Cart;
