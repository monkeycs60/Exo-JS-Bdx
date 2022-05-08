const grid = document.querySelector(".grid-pokedex");

// first call to the api, POKEAPI

function appelPoke() {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      //creating the 'card' div, child of grid-pokedex, related to the 'card' class created in the css file

      data.results.forEach((pokemon) => {
        const card = document.createElement("div");
        card.classList.add("card");
        grid.appendChild(card);

        //fetch sprite (img) for each pokemon
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            //creating img, child of 'card'
            const sprite = document.createElement("img");
            //defining the source for the img
            sprite.src = data.sprites.front_default;
            card.appendChild(sprite);

            // change background color of each card according to the type of pokemon
            switch (data.types[0].type.name) {
              case "fire":
                card.style.backgroundColor = "#FF4500";
                break;
              case "water":
                card.style.backgroundColor = "#00BFFF";
                break;
              case "grass":
                card.style.backgroundColor = "#228B22";
                break;
              case "electric":
                card.style.backgroundColor = "#FFD700";
                break;
              case "ground":
                card.style.backgroundColor = "#8B4513";
                break;
              case "flying":
                card.style.backgroundColor = "#87CEEB";
                break;
              case "psychic":
                card.style.backgroundColor = "#FFA500";
                break;
              case "fighting":
                card.style.backgroundColor = "#FF0000";
                break;
              case "poison":
                card.style.backgroundColor = "#800080";
                break;
              case "normal":
                card.style.backgroundColor = "#D3D3D3";
                break;
              case "fairy":
                card.style.backgroundColor = "#FF69B4";
                break;
              case "steel":
                card.style.backgroundColor = "#B0C4DE";
                break;
              case "ice":
                card.style.backgroundColor = "#00FFFF";
                break;
              case "dragon":
                card.style.backgroundColor = "#800080";
                break;
              case "ghost":
                card.style.backgroundColor = "#F8F8FF";
                break;
              case "dark":
                card.style.backgroundColor = "#000000";
                break;
              case "rock":
                card.style.backgroundColor = "#B22222";
                break;
              case "bug":
                card.style.backgroundColor = "#006400";
                break;
              default:
                card.style.backgroundColor = "#D3D3D3";
                break;
            }
          });


        //fetch name of each pokemon in all languages - because the default fetch only displayes the english name
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            // create a const for each pokemon name (in french) and add the corresponding class in css, then display it in the card
            const frenchName = document.createElement("h4");
            frenchName.classList.add("frenchName");

            //the method to find the french name among all languages
            frenchName.innerHTML = data.names.find(
              (name) => name.language.name === "fr"
            ).name;
            card.appendChild(frenchName);

            // create a const for each pokemon ID with the corresponding class in css and display the ID in the card
            const id = document.createElement("p");
            id.classList.add("id");
            id.innerHTML = `#${data.id}`;
            card.appendChild(id);
          });
      });
    });
  //end of the first call to the api

  //disappearance of the loader when the API datas are fully loaded
  let charg = document.querySelector(".chargement");
  charg.classList.add("disparition");
}

//call the function created above
appelPoke();

// listening to the input, when you enter one or more letters in the input, it will display the pokemons starting with that same letter(s)
const search = document.querySelector("input");
search.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  //the pokemons that don't match the search will be hidden and the others will be displayed
  cards.forEach((card) => {
    const pokemonName = card
      .querySelector(".frenchName")
      .innerHTML.toLowerCase();
    if (pokemonName.startsWith(searchValue)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
    card.style.opacity = "1";
  });
});

// OPTIONNAL feature : to use the button (not activated)
// addeventerlistener on the button, when you click on it, it will display pokemons starting with the same first letters as the input

// const search = document.querySelector('input');
// const button = document.querySelector('button');
// button.addEventListener('click', (e) => {

//     e.preventDefault();

//     const searchValue = document.querySelector('input').value.toLowerCase();
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

//only display cards that are in the viewport (some kind of infinite scroll)
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");

  //with the relative position of the cards (getBoundingClientRect), we can check if they are in the viewport
  //we let a little margin (-50px) so that, next cards will be loaded a bit before we finish our scroll so that it will be less laggy
  cards.forEach((card) => {
    if (card.getBoundingClientRect().top - 50 < window.innerHeight) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }

    //the cards will be displayed with a fade-in effect
    if (card.getBoundingClientRect().top + 250 < window.innerHeight) {
      card.style.opacity = "1";
    } else {
      card.style.opacity = "0.3";
    }
  });
});

//only display the footer when the user scrolls down (2000px under the bottom of the page)
window.addEventListener("scroll", () => {
  const footer = document.querySelector("footer");
  if (window.scrollY > 5000) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
});
