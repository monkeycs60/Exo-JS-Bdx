//create a const for couleur1
const container = document.querySelector('.container');

const couleur1 = document.getElementsByClassName('couleur1');
const couleur2 = document.getElementsByClassName('couleur2');


const colorFormula = '#' + Math.floor(Math.random() * 16777215).toString(16);
const colorFormula2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

couleur1[0].style.background = colorFormula;
couleur2[0].style.background = colorFormula2;

//add the text "clever" to couleur1
document.querySelector('.couleur1').innerHTML = "gggf";

console.log(colorFormula);
console.log(colorFormula2);

//set a linear gradient background for container with the value of colorFormula and colorFormula2
container.style.background = `linear-gradient(to right, ${colorFormula}, ${colorFormula2})`;