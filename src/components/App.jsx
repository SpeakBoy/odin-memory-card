import { useState } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import pocketMonsters from "../data.js";

function App() {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const handleCardClick = (isClicked) => {
        if (isClicked) {
            setCurrentScore(0);
        } else {
            const newScore = currentScore + 1;
            setCurrentScore(newScore);
            if (newScore > highScore) {
                setHighScore(newScore);
            }
        }
    };

    return (
        <>
            <Header currentScore={currentScore} highScore={highScore} />
            <main>
                {pocketMonsters.map((mon) => (
                    <Card
                        key={mon.id}
                        name={mon.name}
                        imageUrl={mon.image_url}
                        handleClick={handleCardClick}
                    />
                ))}
            </main>
        </>
    );
}

export default App;
