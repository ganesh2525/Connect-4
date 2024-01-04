import React from "react";
import "../Game.css";

const Footer = ({buttonClicked}) => {
    return (
        <div className="footer">
            <button onClick={buttonClicked}>New Game</button>
        </div>
    )
}

export default Footer;