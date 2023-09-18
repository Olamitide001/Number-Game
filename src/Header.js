import React from "react";

const Header = ({playing,randomNumber,handleReset}) => {
  return (
    <header>
      {/* <h1>Guess My Number!</h1> */}
      <h1>{playing ? "Guess My Number!" : "You Are Awesome"}</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again" onClick={handleReset}>New Game!</button>
      <div className="number">{playing ? "?" :randomNumber }</div>
    </header>
  );
};

export default Header;
