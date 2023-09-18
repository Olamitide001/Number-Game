import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

const Main = ({
  randomNumber,
  handleCheck,
  userGuess,
  setUserGuess,
  message,
  highScore,
  score,
}) => {
  return (
    <main>
      <SectionOne
        randomNumber={randomNumber}
        handleCheck={handleCheck}
        userGuess={userGuess}
        setUserGuess={setUserGuess}
      />
      <SectionTwo message={message} highScore={highScore} score={score} />
    </main>
  );
};

export default Main;
