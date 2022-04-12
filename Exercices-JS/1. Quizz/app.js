const form = document.querySelector('.formulaire')
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResult = document.getElementsByClassName("resultAppear");
const aideResult = document.getElementsByClassName("aide");
const noteResult = document.getElementsByClassName("note");
let tableauResult = [];
const tabReponse = ['c', 'a', 'b', 'a', 'c'];
let tabBool = [];

let compteurScore = 0;


let questionBox = document.querySelectorAll('.box');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(document.querySelector(`input[name="q1"]:checked`).value);
   
    // console.log(document.querySelector('input[name="q1"]:checked').value);
    
    for (let index = 1; index < 6; index++) {
        tableauResult.push(document.querySelector(`input[name="q${index}"]:checked`).value);
        
    }
    console.log(tableauResult);
    for (let j = 0; j < 6; j++) {
        if (tableauResult[j] === tabReponse[j]) {
            tabBool.push(true); 
            compteurScore += 1;
            console.log(compteurScore);

        } else if (tableauResult[j] === undefined) {
            tabBool.push(false)
        }
        else {
            tabBool.push(false)
        }
        if (tabBool[j] === true) {
            questionBox[j].style.background = "green";
        } else if (tabBool[j] === false){
            questionBox[j].style.background = "red";
            questionBox[j].classList.add('echec');
        }
    }
    console.log(tableauResult);
    console.log(tabBool);
    
    tableauResult = [];
    tabBool = [];
    compteurScore = 0;
  
    // for (let k = 0; k < 6; k++) {
//      if (tabBool[k] === true) {
// questionBox.style.background = "green";
//      } else {
//         questionBox.style.background = "red";
//      }
        
    
})


