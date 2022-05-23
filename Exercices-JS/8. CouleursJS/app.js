//create a const for couleur1
const container = document.querySelector('.container');

const ensembleCouleurs = document.querySelector('.couleurs');
const couleur1 = document.getElementsByClassName('couleur1');
const couleur2 = document.getElementsByClassName('couleur2');

let colorFormula = '#' + Math.floor(Math.random() * 16777215).toString(16);
const colorFormula2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
let colorTab = [colorFormula, colorFormula2];
console.log(colorTab);

let randomTab = [];

const range = document.getElementById('range');
const cursor = document.querySelector('.btn0');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

couleur1[0].style.background = colorTab[0];
couleur2[0].style.background = colorTab[1];


document.querySelector('.couleur1').value += colorTab[0];
document.querySelector('.couleur2').value += colorTab[1];



//set a linear gradient background for container with the value of colorFormula and colorFormula2
container.style.background = `linear-gradient(to right, ${colorTab})`;


//when the range is changed, change the degree of the linear gradient

cursor.addEventListener('input', function() {
    console.log(cursor.value * -1 *7.2);
    //if cursor.value is less than 50, change the degree of the linear gradient
    if (cursor.value < 50) {
        container.style.background = `linear-gradient(${cursor.value * -1 *7.2}deg, ${colorTab})`;
    }
    else if (cursor.value === 50) {
    container.style.background = `linear-gradient(${this.value}deg, ${colorTab})`;
}
    else {
        container.style.background = `linear-gradient(${cursor.value *7.2}deg, ${colorTab})`;
    }
}
);

//addeventlistener to btn1, when click, add a div with the class couleur1 to the ensembleCouleurs, the background color is the value of colorFormula
btn1.addEventListener('click', function() {
    const div = document.createElement('div');
    div.classList.add('couleur1');
    const couleurRandom = '#' + Math.floor(Math.random() * 16777215).toString(16);
    div.style.background = couleurRandom;
    //div.value is equal to its background
    div.innerHTML += couleurRandom;
    colorTab.push(couleurRandom);
    ensembleCouleurs.appendChild(div);
    //add div.style.background to container.style.background linear gradient
   
    
    container.style.background = `linear-gradient(to right, ${colorTab})`;
    //everytime you click btn1, add div.style.background to container linear gradient
      
}
);

//addeventlistener to btn2, when click remove the last div created with the class couleur1
btn2.addEventListener('click', function() {
    //you cannot remove the first two divs
    if (ensembleCouleurs.childElementCount > 2) {
    ensembleCouleurs.removeChild(ensembleCouleurs.lastChild);
    colorTab.pop();
    container.style.background = `linear-gradient(to right, ${colorTab})`;

    
}
}
);

//btn3, when click, reload window   and reset the linear gradient
btn3.addEventListener('click', function() {
    //foreach color in colorTab, replace each value with a new value of '#' + Math.floor(Math.random() * 16777215).toString(16)
    
    for (let index = 0; index < colorTab.length; index++) {
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        console.log(color);
        //push to randomTab the new value of color
        randomTab.push(color);
        //replace colorTab value with randomTab value
        console.log(randomTab);
        
        //set color to ensembleCouleurs children div background
        ensembleCouleurs.children[index].style.background = randomTab[index];
        ensembleCouleurs.children[index].value = randomTab[index];

        
    }
  
    colorTab = randomTab;
  
    container.style.background = `linear-gradient(to right, ${colorTab})`;
    console.log(colorTab);
    randomTab = [];

    // window.location.reload();
}
);