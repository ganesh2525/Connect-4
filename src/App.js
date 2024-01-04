import React from "react";
import {useRef, useState} from "react";
import './Game.css';

import Header from "./Components/Header";
import Board from "./Components/Board";
import Footer from "./Components/Footer";

import {isWinner} from "./Helper";

import turns from "./Musics/turns.wav";
import wins from "./Musics/wins.wav";
import buttons from "./Musics/buttons.wav";

const App = () => {

    const NO_PLAYER = 0;
    const PLAYER_1 = 1;
    const PLAYER_2 = 2;

    const GAME_STATE_PLAYING = 0;
    const GAME_STATE_WIN = 1;

    const [board,setBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("rgb(227, 138, 138)");

    const turnsAudio = useRef(null);
    const winsAudio = useRef(null);
    const buttonsAudio = useRef(null);

    const resetGame = () => {

        playButtonsAudio();
        setBoard(board);
        setCurrentPlayer(PLAYER_1);
        setGameState(GAME_STATE_PLAYING);
        setCount(0);
        setColor("rgb(227, 138, 138)");
        
        for(let i=0;i<16;i++)
        {
            board[i]=0;
        }
    }

    const playTurnsAudio = () => {
        turnsAudio.current.currentTime = 0;
        turnsAudio.current.play();
    }

    const playWinsAudio = () => {
        winsAudio.current.currentTime = 0;
        winsAudio.current.play();
    }

    const playButtonsAudio = () => {
        buttonsAudio.current.currentTime = 0;
        buttonsAudio.current.play();
    }

    const handleClick = (id) => {
        
        playTurnsAudio();

        if(board[id] !== NO_PLAYER) return;
        if(gameState === GAME_STATE_WIN) return;

        setCount(count+1);
        board[id] = currentPlayer;
        setBoard(board);
        setColor(currentPlayer===PLAYER_1 ? "rgb(128, 128, 223)" : "rgb(227, 138, 138)");
        setCurrentPlayer(currentPlayer===PLAYER_1 ? PLAYER_2 : PLAYER_1);
        
        
        if(isWinner(board))
        {
            console.log("Winner");
            setGameState(GAME_STATE_WIN);
            setColor("green");
            playWinsAudio();
        }
    }

    return (
        <>
        <audio ref={turnsAudio} src={turns} />
        <audio ref={winsAudio} src={wins} />
        <audio ref={buttonsAudio} src={buttons} />

        <div className="container">
        <Header player={currentPlayer} state={gameState} moves={count} currentColor={color}/>
        <Board board={board} handleClick={handleClick}/>
        <Footer buttonClicked={resetGame}/>
        </div>
        
        </>
    )
}

export default App;