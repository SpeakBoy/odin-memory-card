import shuffleArray from "./shuffle.js";

const pocketMonsters = await fetchPocketMonsters();

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
        name: result["name"][0].toUpperCase() + result["name"].slice(1),
        image_url: result["sprites"]["other"]["official-artwork"]["front_default"],
    };
}

export default pocketMonsters;
