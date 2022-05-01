const grid = document.querySelector('.grid-pokedex');
let allPokemons = [];



    
    
    function appelPoke() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.results.forEach(pokemon => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <p> ${pokemon.name}</p>
                `;
                grid.appendChild(card);
            });
    
          })
    }
    appelPoke();

    function fetchPokemonComplet(pokemon) {
        let objPokemonFull = {};    
        let url = pokemon.url;
        let nameP = pokemon.name;
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            objPokemonFull.pic = data.sprites.front_default;
            objPokemonFull.type = data.types[0].name;
            objPokemonFull.id = data.id;

            fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameP}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                objPokemonFullName = data.names[4].name;
                allPokemons.push(objPokemonFull);
                if (allPokemons.length === 151) {
                    console.log(allPokemon);
                }
                    
                }
            

        
        )
    }
    )
}
fetchPokemonComplet(pokemon);
    
    
    
