
function ChoiceButton({ choice, onClick }) {
  return (
    <button
      className={`choice ${choice}`}
      onClick={() =>
        onClick && onClick(choice)
      }
    >
      <div className="inner-circle">
        <img
          src={`/images/icon-${choice}.svg`}
          alt={choice}
        />
      </div>
    </button>
  );
}

export default ChoiceButton;

