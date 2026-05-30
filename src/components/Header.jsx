function Header({ score }) {
  return (
    <div className="header">
      <img src="/images/logo.svg" alt="logo" />

      <div className="score-box">
        <p>SCORE</p>
        <h2>{score}</h2>
      </div>
    </div>
  );
}

export default Header;