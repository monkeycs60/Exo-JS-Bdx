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
                    // change background color of each card according to the type of pokemon
                    if (data.types[0].type.name === 'fire') {
                        card.style.backgroundColor = '#FF4500';
                    } else if (data.types[0].type.name === 'water') {
                        card.style.backgroundColor = '#00BFFF';
                    } else if (data.types[0].type.name === 'grass') {
                        card.style.backgroundColor = '#228B22';
                    } else if (data.types[0].type.name === 'electric') {
                        card.style.backgroundColor = '#FFD700';
                    } else if (data.types[0].type.name === 'ground') {
                        card.style.backgroundColor = '#8B4513';
                    } else if (data.types[0].type.name === 'flying') {
                        card.style.backgroundColor = '#87CEEB';
                    } else if (data.types[0].type.name === 'psychic') {
                        card.style.backgroundColor = '#FFA500';
                    } else if (data.types[0].type.name === 'fighting') {
                        card.style.backgroundColor = '#FF0000';
                    } else if (data.types[0].type.name === 'poison') {
                        card.style.backgroundColor = '#800080';
                    } else if (data.types[0].type.name === 'normal') {
                        card.style.backgroundColor = '#D3D3D3';
                    } else if (data.types[0].type.name === 'fairy') {
                        card.style.backgroundColor = '#FF69B4';
                    } else if (data.types[0].type.name === 'steel') {
                        card.style.backgroundColor = '#B0C4DE';
                    } else if (data.types[0].type.name === 'ice') {
                        card.style.backgroundColor = '#00FFFF';
                    } else if (data.types[0].type.name === 'dragon') {
                        card.style.backgroundColor = '#800080';
                    } else if (data.types[0].type.name === 'ghost') {
                        card.style.backgroundColor = '#F8F8FF';
                    } else if (data.types[0].type.name === 'dark') {
                        card.style.backgroundColor = '#000000';
                    } else if (data.types[0].type.name === 'rock') {
                        card.style.backgroundColor = '#B22222';
                    } else if (data.types[0].type.name === 'bug') {
                        card.style.backgroundColor = '#006400';
                    }})
                console.log(pokemon.name);
                //             fetch('https://pokeapi.co/api/v2/pokemon-species/pokemon.name')
               
   
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                   // create a const for each pokemon french name
                    const frenchName = document.createElement('h4');
                    frenchName.classList.add('frenchName');
                    frenchName.innerHTML = data.names.find(name => name.language.name === 'fr').name;
                    card.appendChild(frenchName);
                    // create a const for each pokemon ID
                    const id = document.createElement('p');
                    id.classList.add('id');
                    id.innerHTML = `#${data.id}`;
                    card.appendChild(id);
                   
                    
                   
                })
  
            })
            console.log(data.results.name);
                
            });
           //fetch pokemon name in french in pokemon-species
        }
    
    appelPoke();

    // addeventlistener to the input, when you search for the first letter of a pokemon, it will display the first pokemon with that letter
    
    // const search = document.querySelector('input');
    // search.addEventListener('keyup', (e) => {
    //     const searchValue = e.target.value.toLowerCase();
    //     const cards = document.querySelectorAll('.card');
    //     cards.forEach(card => {
    //         const pokemonName = card.querySelector('.frenchName').innerHTML.toLowerCase();
    //         if (pokemonName.startsWith(searchValue)) {
    //             card.style.display = 'flex';
    //         } else {
    //             card.style.display = 'none';
    //         }
    //     })
    // })

    // addeventerlistener on the button, when you click on it, it will display pokemon with the first letters of the input
    const search = document.querySelector('input');
    const button = document.querySelector('button');
    button.addEventListener('click', (e) => {
        //prevent default
        e.preventDefault();
        const searchValue = document.querySelector('input').value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const pokemonName = card.querySelector('.frenchName').innerHTML.toLowerCase();
            if (pokemonName.startsWith(searchValue)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        })
    })

     
 
  


    
  

console.log(document.getElementsByClassName('frenchName'));

   
    
