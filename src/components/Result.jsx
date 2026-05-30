import ChoiceButton from "./ChoiceButton";

function Result({
  userChoice,
  computerChoice,
  result,
  resetGame
}) {
  return (
    <div className="result-container">

      {/* USER */}

      <div className="result-column">

        <p className="result-label">
          YOU PICKED
        </p>

        <ChoiceButton choice={userChoice} />

      </div>

      {/* RESULT */}

      <div className="result-middle">

        <h1>{result}</h1>

        <button
          className="play-again-btn"
          onClick={resetGame}
        >
          PLAY AGAIN
        </button>

      </div>

      {/* COMPUTER */}

      <div className="result-column">

        <p className="result-label">
          THE HOUSE PICKED
        </p>

        <ChoiceButton choice={computerChoice} />

      </div>

    </div>
  );
}

export default Result;