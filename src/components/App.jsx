import { useState } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import pocketMonsters from "../data.js";
import shuffleArray from "../shuffle.js";

function App() {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedIDs, setClickedIDs] = useState([]);
    const [shuffledMonsters, setShuffledMonsters] = useState(pocketMonsters);

    const handleCardClick = (id) => {
        if (clickedIDs.includes(id)) {
            setCurrentScore(0);
            setClickedIDs([]);
        } else {
            const newScore = currentScore + 1;
            setCurrentScore(newScore);
            if (newScore > highScore) {
                setHighScore(newScore);
            }
            setClickedIDs([...clickedIDs, id]);
        }
        setShuffledMonsters(shuffleArray(pocketMonsters));
    };

    return (
        <>
            <Header currentScore={currentScore} highScore={highScore} />
            <main>
                {shuffledMonsters.map((mon) => (
                    <Card
                        key={mon.id}
                        id={mon.id}
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
