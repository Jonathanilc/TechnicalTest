import React, { Component } from "react";
import "./ContentBox.css";
import { connect } from "react-redux";

import { add_product } from "../../../Actions/ActionCreator";

class ContentBox extends Component {
  state = {
    s: false,
    m: false,
    l: false,
    current: "",
    nS: 0,
    nM: 0,
    nL: 0
  };

  onhandleClicked = e => {
    this.setState(
      Object.assign(
        { s: false, m: false, l: false, current: e.target.value },
        { [e.target.name]: true }
      )
    );
    console.log(this.state);
  };

  onHandleAdd = () => {
    const currentValue = this.state[["n", this.state.current].join("")];
    this.setState({
      ...this.state,
      [["n", this.state.current].join("")]: currentValue + 1
    });
    console.log(this.state);
  };

  componentDidUpdate() {
    this.props.dispatch(
      add_product({
        title: "Classic Tee",
        price: 75,
        nS: this.state.nS,
        nM: this.state.nM,
        nL: this.state.nL
      })
    );
  }
  render() {
    return (
      <div className="ContentBox">
        <div className="ContentBox__Title">Classic Tee</div>
        <div className="ContentBox__Price">$75.00</div>
        <div className="ContentBox__Text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
          lectus ligula, quis maximus ligula eleifend eget. Aenean sit amet
          velit at lorem varius suscipit. Vestibulum eu magna ante. Quisque
          viverra ornare consequat. Sed iaculis odio eu dui dignissim, eu
          facilisis nisi vestibulum. Aenean vestibulum est velit. Sed dapibus
          augue at tempus viverra.
        </div>
        <div className="ContentBox__Size">
          SIZE<span style={{ color: "#C90000", fontWeight: "bold" }}>*</span>:
          <span style={{ color: "#222222", fontWeight: "bold" }}>
            {this.state.current}
          </span>
        </div>

        <div className="ContentBox__Buttons">
          {this.state.s === true ? (
            <button
              className="ContentBox__Buttons--s isClicked"
              name="s"
              value="S"
              onClick={this.onhandleClicked}
            >
              S
            </button>
          ) : (
            <button
              className="ContentBox__Buttons--s"
              name="s"
              value="S"
              onClick={this.onhandleClicked}
            >
              S
            </button>
          )}

          {this.state.m === true ? (
            <button
              className="ContentBox__Buttons--m isClicked"
              name="m"
              value="M"
              onClick={this.onhandleClicked}
            >
              M
            </button>
          ) : (
            <button
              className="ContentBox__Buttons--m"
              name="m"
              value="M"
              onClick={this.onhandleClicked}
            >
              M
            </button>
          )}
          {this.state.l === true ? (
            <button
              className="ContentBox__Buttons--l isClicked"
              name="l"
              value="L"
              onClick={this.onhandleClicked}
            >
              L
            </button>
          ) : (
            <button
              className="ContentBox__Buttons--l"
              name="l"
              value="L"
              onClick={this.onhandleClicked}
            >
              L
            </button>
          )}
        </div>

        <button className="ContentBox_Add" onClick={this.onHandleAdd}>
          ADD TO CART
        </button>
      </div>
    );
  }
}

export default connect()(ContentBox);
