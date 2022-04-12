const form = document.querySelector('.formulaire')
let tableauResult = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(document.querySelector('input').name);
    console.log(document.querySelector('input[name="q1"]').value);
    
    // console.log(document.getElementById('btn2').value);
   for (let index = 1; index < 6; index++) {
       tableauResult.push(document.querySelector(`input[name="q${index}]`.value));
   }
   console.log(tableauResult);
})


