import React,{Component} from "react";
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div className="Header">
                <div className = "Header__Item">My cart(0)</div>
            </div>
        )
    }
}

export default Header;