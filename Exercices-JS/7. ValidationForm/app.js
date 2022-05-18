// input 'nom' has to be between 3 and 24 characters, only alphabetical and numbers
const form = document.querySelector('form');
const nom = document.querySelector('#nom');
const username = document.querySelector('.username');

const p = document.createElement('p');
let activeClass = document.querySelectorAll('.active');



// addeventlistener to nom
nom.addEventListener('keyup', function (e) {
    // e.target.value is the value of the input
    //create a regex to check if the input is only alphabetical and numbers
    const regex = /^[a-zA-Z0-9]{3,24}$/;
    
    if (e.target.value.length < 3 || e.target.value.length > 24) {
    p.innerHTML = 'Le nom doit contenir entre 3 et 24 caractères';
    nom.classList.remove('successInput');
        //add green font to input
     nom.classList.remove('successTxt');
    
    p.classList.add('errorTxt');
    //add red border to input
    nom.classList.add('errorTxt');
    nom.classList.add('errorInput');
    //add red border to nom when class is active
    username.appendChild(p);
   //add error.svg to nom
    document.querySelector('input[name="nom"]').innerHTML += `<img src="/Exercices-JS/7. ValidationForm/ressources/error.svg" width="20" alt="error" class="errorImg">`;
  

    
        
    } 
    else if (!regex.test(e.target.value)) {
        p.innerHTML = 'Le nom ne peut contenir que des lettres et des chiffres';
        nom.classList.remove('successInput');
            //add green font to input
         nom.classList.remove('successTxt');
        
        p.classList.add('errorTxt');
        //add red border to input
        nom.classList.add('errorTxt');
        nom.classList.add('errorInput');
        //add red border to nom when class is active
        username.appendChild(p);


    }
    
    else {
        //remove p from username
        username.removeChild(p);
        //remove red border from input
        nom.classList.remove('errorInput');
        nom.classList.remove('errorTxt');
        //add success border to input
        nom.classList.add('successInput');
        //add green font to input
        nom.classList.add('successTxt');
    }
});



