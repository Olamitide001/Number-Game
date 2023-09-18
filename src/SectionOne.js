import React from "react";

const Section = ({randomNumber,handleCheck,setUserGuess,userGuess}) => {

  return (
      <section className="left">
        <input
          type="number"
          className="guess"
          value={userGuess}
          onChange={(e)=> setUserGuess(parseInt(e.target.value))}
        />
        {randomNumber}
        <button className="btn check" onClick={handleCheck}>
          Check!
        </button>
      </section>

  );
};

export default Section;
