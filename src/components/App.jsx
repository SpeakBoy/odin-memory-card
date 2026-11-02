import { useState } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import Card from "./Card.jsx";

const villains = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {
    return (
        <>
            <Header />
            <main>
                {villains.map((villain) => (
                    <Card key={villain}/>
                ))}
            </main>
        </>
    );
}

export default App;
