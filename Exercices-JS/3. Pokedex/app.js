const grid = document.querySelector('.grid-pokedex');
let allPokemons = [];


fetch(`https://pokeapi.co/api/v2/pokemon-species/charmander`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

            })

    
    
    function appelPoke() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.results);
            data.results.forEach(pokemon => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <p> ${pokemon.name}</p>
                `;
                grid.appendChild(card);
                
            
                //fetch sprite for each pokemon
                fetch(pokemon.url)  

                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sprite = document.createElement('img');
                    sprite.src = data.sprites.front_default;
                    card.appendChild(sprite);
                })
            })
                
            });
           //fetch pokemon name in french in pokemon-species
            fetch('https://pokeapi.co/api/v2/pokemon-species/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
//for each pokemon-species, fetch the french name
                data.results.forEach(pokemon => {
              const namePokemon = document.createElement('p');
                namePokemon.innerHTML = pokemon.name;
                grid.appendChild(namePokemon);


                    })
                }
            )
        }
    
    appelPoke();

   
    
