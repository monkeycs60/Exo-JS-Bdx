//create a const for couleur1
const container = document.querySelector('.container');

const ensembleCouleurs = document.querySelector('.couleurs');
const couleur1 = document.getElementsByClassName('couleur1');
const couleur2 = document.getElementsByClassName('couleur2');


const colorFormula = '#' + Math.floor(Math.random() * 16777215).toString(16);
const colorFormula2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

const range = document.getElementById('range');
const cursor = document.querySelector('.btn0');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

couleur1[0].style.background = colorFormula;
couleur2[0].style.background = colorFormula2;


document.querySelector('.couleur1').value += colorFormula;
document.querySelector('.couleur2').value += colorFormula2;

//change text color of couleur1 to colorFormula2
couleur1[0].style.color = colorFormula2;
//change text color of couleur2 to colorFormula
couleur2[0].style.color = colorFormula;

//set a linear gradient background for container with the value of colorFormula and colorFormula2
container.style.background = `linear-gradient(to right, ${colorFormula}, ${colorFormula2})`;


//when the range is changed, change the degree of the linear gradient

cursor.addEventListener('input', function() {
    console.log(cursor.value * -1 *7.2);
    //if cursor.value is less than 50, change the degree of the linear gradient
    if (cursor.value < 50) {
        container.style.background = `linear-gradient(${cursor.value * -1 *7.2}deg, ${colorFormula}, ${colorFormula2})`;
    }
    else if (cursor.value === 50) {
    container.style.background = `linear-gradient(${this.value}deg, ${colorFormula}, ${colorFormula2})`;
}
    else {
        container.style.background = `linear-gradient(${cursor.value *7.2}deg, ${colorFormula2}, ${colorFormula})`;
    }
}
);

//addeventlistener to btn1, when click, add a div with the class couleur1 to the ensembleCouleurs, the background color is the value of colorFormula
btn1.addEventListener('click', function() {
    const div = document.createElement('div');
    div.classList.add('couleur1');
    div.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
    //div.value is equal to its background
    div.innerHTML +=  '#' + Math.floor(Math.random() * 16777215).toString(16);
    ensembleCouleurs.appendChild(div);
    //add div.style.background to container.style.background linear gradient
    container.style.background = `linear-gradient(to right, ${colorFormula}, ${colorFormula2}, ${div.style.background})`;
}
);