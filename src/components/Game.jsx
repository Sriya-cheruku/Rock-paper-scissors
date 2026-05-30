import { useState } from "react";
import ChoiceButton from "./ChoiceButton";
import Result from "./Result";

function Game({ setScore }) {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const options = ["rock", "paper", "scissors"];

  const handleClick = (choice) => {
    const random =
      options[Math.floor(Math.random() * 3)];

    setUserChoice(choice);
    setComputerChoice(random);

    if (choice === random) {
      setResult("DRAW");
    } else if (
      (choice === "rock" && random === "scissors") ||
      (choice === "paper" && random === "rock") ||
      (choice === "scissors" && random === "paper")
    ) {
      setResult("YOU WIN");
      setScore((prev) => prev + 1);
    } else {
      setResult("YOU LOSE");
      setScore((prev) => prev - 1);
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="game">
      {!userChoice ? (
        <div className="triangle">
          <img
            src="/images/bg-triangle.svg"
            className="triangle-bg"
          />

          {options.map((item) => (
            <ChoiceButton
              key={item}
              choice={item}
              onClick={handleClick}
            />
          ))}
        </div>
      ) : (
        <Result
          userChoice={userChoice}
          computerChoice={computerChoice}
          result={result}
          resetGame={resetGame}
        />
      )}
    </div>
  );
}

export default Game;