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
                console.log(pokemon.name);
                const card = document.createElement('div');
                card.classList.add('card');
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
                console.log(pokemon.name);
                //             fetch('https://pokeapi.co/api/v2/pokemon-species/pokemon.name')
               
   
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                   // create a const for each pokemon french name
                    const frenchName = document.createElement('p');
                    frenchName.innerHTML = data.names.find(name => name.language.name === 'fr').name;
                    card.appendChild(frenchName);
                    // create a const for each pokemon ID
                    const id = document.createElement('p');
                    id.innerHTML = `#${data.id}`;
                    card.appendChild(id);
                })
  
            })
            console.log(data.results.name);
                
            });
           //fetch pokemon name in french in pokemon-species
        }
    
    appelPoke();

   
    
