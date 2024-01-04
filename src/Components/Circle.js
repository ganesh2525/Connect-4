import React from "react";
import '../Game.css';

const Circle = ({id, children, circleCliked, gameboard}) => {

    return (
        <div 
        key={id} 
        className={`circle player${gameboard[id]}`} 
        onClick={() => circleCliked(id)}>
            {children}
        </div>
    )
}

export default Circle;