document.getElementById('searchButton').addEventListener('click', searchPokemon);

async function searchPokemon() {
    const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
    const errorMessage = document.getElementById('errorMessage');
    const pokemonData = document.getElementById('pokemonData');
    const pokemonName = document.getElementById('pokemonName');
    const pokemonImage = document.getElementById('pokemonImage');
    const pokemonID = document.getElementById('pokemonID');
    const pokemonType = document.getElementById('pokemonType');
    
    // Hide previous error and card data
    errorMessage.classList.add('hidden');
    pokemonData.classList.add('hidden');

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);
        
        if (!response.ok) throw new Error('Pokemon not found');

        const data = await response.json();

        pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        pokemonImage.src = data.sprites.front_default;
        pokemonID.textContent = data.id;
        pokemonType.textContent = data.types.map(type => type.type.name).join(', ');

        pokemonData.classList.remove('hidden');
    } catch (error) {
        errorMessage.classList.remove('hidden');
    }
}
