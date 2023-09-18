// import React from 'react'
import Header from "./Header";
import Main from "./Main";
import React, { useState } from "react";

const App = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  const [userGuess, setUserGuess] = useState("");

  const [playing, setPlaying] = useState(true);

  const [win, setWin] = useState(false);

  const [score, setScore] = useState(20);

  const [highScore, setHighScore] = useState(0);

  const [message, setMessage] = useState("Start guessing...");

  const handleCheck = () => {
    if(playing){
    if (!userGuess) {
      setMessage((message) => "Input a number");
    } else if (userGuess === randomNumber) {
      setMessage((message) => "You are correct");
      setPlaying((e)=>!playing)
      setWin(!win)
      setHighScore((highScore)=>score)
    } else if (userGuess > randomNumber) {
      setMessage((message) => "Too high! try again");
      setScore((score)=>score - 1)
    } else if (userGuess < randomNumber) {
      setMessage((message) => "Too low! try again");
      setScore((score)=>score - 1)
    }
    if(score === 1){
      setPlaying(!playing)
      setScore((e)=> 0)
      setMessage((message) => "You lost the Game");
    }
  }
  };
  const handleReset =()=>{
    setPlaying(true)
    setWin(false)
    setMessage((message) => "Start guessing...")
    setScore(20)
    setRandomNumber(Math.trunc(Math.random() * 20) + 1)
  }
  return (
    <div
      style={{
        backgroundColor: `${win ? "#60b347" : score < 1 ? "red" : "#222"}`,
      }}
    >
      <Header playing={playing} randomNumber={randomNumber} handleReset={handleReset} />
      <Main
        randomNumber={randomNumber}
        handleCheck={handleCheck}
        userGuess={userGuess}
        setUserGuess={setUserGuess}
        message={message}
        highScore={highScore}
        score={score}
      />
    </div>
  );
};

export default App;
