import React, {Component} from 'react';
import './ContentBox.css'


class ContentBox extends Component {
    render() {
        return(
            <div className="ContentBox">
                <div className="ContentBox__Title">Classic Tee</div>
                <div className="ContentBox__Price">$75.00</div>
                <div className="ContentBox__Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit lectus ligula, quis maximus ligula eleifend eget. Aenean sit amet velit at lorem varius suscipit. Vestibulum eu magna ante. Quisque viverra ornare consequat. Sed iaculis odio eu dui dignissim, eu facilisis nisi vestibulum. Aenean vestibulum est velit. Sed dapibus augue at tempus viverra.</div>
                <div className="ContentBox__Size">SIZE<span style={{color:'#C90000', fontWeight:'bold'}}>*</span>:<span style={{color:'#222222',fontWeight:'bold'}}>S</span></div>

                <div className="ContentBox__Buttons">
                    <button className="ContentBox__Buttons--s">S</button>
                    <button className="ContentBox__Buttons--m">M</button>
                    <button className="ContentBox__Buttons--l">L</button>
                </div>

                <button className="ContentBox_Add">ADD TO CART</button>
            </div>
        )
    }
}

export default ContentBox;