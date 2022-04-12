const form = document.querySelector('.formulaire')
let tableauResult = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(document.querySelector('input[name="q3"]').value);
    
    // console.log(document.getElementById('btn2').value);
   for (let index = 1; index < 6; index++) {
       tableauResult.push(document.querySelector(`input[name="q${index}]`.value));
   }
   console.log(tableauResult);
})


let reponse1 = document.getElementById("btn3").value;
let reponse2 = document.getElementById("btn4").value;
let reponse3 = document.getElementById("btn8").value;
let reponse4 = document.getElementById("btn10").value;
let reponse5 = document.getElementById("btn15").value;
