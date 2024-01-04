import React from "react";
import Circle from "./Circle";
import "../Game.css";

const Board = ({board, handleClick}) => {

    return (
        <div className="gameBoard">
            <Circle id={0} gameboard={board} circleCliked={handleClick}/>
            <Circle id={1} gameboard={board} circleCliked={handleClick}/>
            <Circle id={2} gameboard={board} circleCliked={handleClick}/>
            <Circle id={3} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={4} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={5} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={6} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={7} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={8} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={9} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={10} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={11} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={12} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={13} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={14} gameboard={board}  circleCliked={handleClick}/>
            <Circle id={15} gameboard={board}  circleCliked={handleClick}/>
        </div>
    )
}

export default Board;
