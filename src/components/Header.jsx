function Header({ currentScore, highScore }) {
    return (
        <header>
            <h1>Pokemon Memory Game</h1>
            <h2>Click as many different Pokemon in a row as you can!</h2>
            <p>Current Score - {currentScore ?? 0}</p>
            <p>High Score - {highScore ?? 0}</p>
        </header>
    );
}

export default Header;
