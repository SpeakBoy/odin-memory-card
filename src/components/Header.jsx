function Header({ currentScore, highScore }) {
    return (
        <header>
            <div className="container">
                <h1>Pokemon Memory Game</h1>
                <h2>Click as many different Pokemon in a row as you can!</h2>
                <p>Current Score - {currentScore}</p>
                <p>High Score - {highScore}</p>
            </div>
        </header>
    );
}

export default Header;
