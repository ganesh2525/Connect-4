import React from "react";
import "../Game.css";

const Header = ({player, state, moves, currentColor}) => {

    const prevPlayer = (player===1) ? 2 : 1;

    return (
        <div className="panel">
        {
            state===1 ? 
            (
                <div className={`header shine animate`}>
                    <h3>Player {prevPlayer} Wins</h3>
                </div>
            ) : (
                    moves===16 ? 
                    (
                        <div className={`header shine animate`}>
                            <h3>Draw</h3>
                        </div>
                    ) : (
                            <div className={`header player${player}-header`}>
                                <h3>Player {player} Turn</h3>
                            </div>
                        ) 
                )
            }
        </div>
    )
}

export default Header;