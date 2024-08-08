
async function fetchCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character/');
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error("Erro ao buscar os personagens:", error);
    }
}


function displayCharacters(characters) {
    const container = document.getElementById('character-container');
    container.innerHTML = '';

    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card';

        characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p>Status: ${character.status}</p>
            <p>Espécie: ${character.species}</p>
            <p>Origem: ${character.origin.name}</p>
        `;

        container.appendChild(characterCard);
    });
}


window.onload = fetchCharacters;
