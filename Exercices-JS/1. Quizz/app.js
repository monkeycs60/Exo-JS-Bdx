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
    for (let j = 0; j < 5; j++) {
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
    }
    for (let k = 0; k < 5; k++) {
       
        if (tabBool[k] === true) {
            questionBox[k].style.background = "green";
        } else if (tabBool[k] === false){
            questionBox[k].style.background = "red";
            questionBox[k].classList.add('echec');
        }
    }
    console.log(tableauResult);
    console.log(tabBool);
    console.log(compteurScore);
    

   
console.log(noteResult[0].textContent);

if (compteurScore === 0) {
    titreResult[0].textContent = `${emojis[4]} Quelle fantastique absence de culture ${emojis[4]}`;
    aideResult[0].textContent = "Change tout pour voir !";
} else if (compteurScore === 1) {
    titreResult[0].textContent = `${emojis[3]} Pas loin de la totale médiocrité... ${emojis[3]}`;
    aideResult[0].textContent = "Tu as encore du boulot à faire !";
}
 else if (compteurScore === 2) {
    titreResult[0].textContent = `${emojis[2]} Pas fou ! Progresse encore... ${emojis[2]}`;
    aideResult[0].textContent = "Recoche de nouvelles cases pour faire mieux";
} else if (compteurScore === 3) {
    titreResult[0].textContent = `${emojis[1]} C'est correct ${emojis[1]}`;
    aideResult[0].textContent = "Corrige tes deux mauvaises réponse !";
} else if (compteurScore === 4) {
    titreResult[0].textContent = `${emojis[0]} Presque ${emojis[0]}`;
    aideResult[0].textContent = "Une dernière erreur à corriger !";
} else if (compteurScore === 5) {
    titreResult[0].textContent = `${emojis[0]} Superbe ! ${emojis[0]}`;
    aideResult[0].textContent = "T'es le meilleur !";
}


    noteResult[0].textContent = `${compteurScore}/5`;
    
    tableauResult = [];
    tabBool = [];
    compteurScore = 0;
  
  
    
})


