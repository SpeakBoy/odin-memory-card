import { useState } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import Card from "./Card.jsx";

const pocketMonsters = await fetchPocketMonsters();

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

async function fetchPocketMonsters() {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const response = await fetch(`${baseUrl}/pokemon?limit=151`);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    const pocketMonsters = result.results;
    const shuffledMonsters = shuffleArray(pocketMonsters);
    const monstersSample = shuffledMonsters.slice(0, 12);

    return await Promise.all(
        monstersSample.map(async (pokemon) => {
            const cardInfo = await fetchPokemon(pokemon);
            return cardInfo;
        }),
    );
}

async function fetchPokemon(pokemon) {
    const response = await fetch(pokemon.url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return {
        id: result["id"],
        name: result["name"],
        image_url: result["sprites"]["other"]["official-artwork"]["front_default"],
    };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default App;
