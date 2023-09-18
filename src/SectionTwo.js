import React from "react";

const SectionTwo = ({message,highScore,score}) => {
  return (
    <section className="right">
      <p className="message">{message}</p>
      <p className="label-score">
        💯 Score: <span className="score">{score}</span>
      </p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{highScore}</span>
      </p>
    </section>
  );
};

export default SectionTwo;
