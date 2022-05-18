// input 'nom' has to be between 3 and 24 characters, only alphabetical and numbers
const form = document.querySelector('form');
const nom = document.querySelector('#nom');
const username = document.querySelector('.username');
const mail = document.querySelector('#mail');
const mdp = document.querySelector('#mdp');
const mdp2 = document.querySelector('#mdp2');
const blockConfirm = document.querySelector('.confirm');

const divStrength = document.querySelector('.strength');
const p = document.createElement('p');
const pMail = document.createElement('p');
const pMdp = document.createElement('p');
const pMdp2 = document.createElement('p');
const pMdp3 = document.createElement('p');
const pMdp4 = document.createElement('p');
const blockMail = document.querySelector('.email');
const blockMdp = document.querySelector('.password');
const confirmMDP = document.createElement('p');
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
   //add error.svg to nom style as background image
    nom.style.backgroundImage = 'url("/Exercices-JS/7. ValidationForm/ressources/error.svg")';
    //nom background position to right 95%
    nom.style.backgroundPosition = '95%';
    //nom background repeat : no repeat
    nom.style.backgroundRepeat = 'no-repeat';
    //nom bg size to 50px
    nom.style.backgroundSize = '30px';
    //nom bg padding right
    

    
  

    
        
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
        //
        nom.style.backgroundImage = 'url("/Exercices-JS/7. ValidationForm/ressources/error.svg")';
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

        nom.style.backgroundImage = 'url("/Exercices-JS/7. ValidationForm/ressources/check.svg")';
    }
});



//addeventlistener to mail
mail.addEventListener('keyup', function (e) {
     //create a regex to check if the input is a valid email
    const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regex.test(e.target.value)) {
        pMail.innerHTML = 'Veuillez entrer une adresse mail valide';
        mail.classList.remove('successInput');
            //add green font to input
         mail.classList.remove('successTxt');
        
        pMail.classList.add('errorTxt');
        //add red border to input
        mail.classList.add('errorTxt');
        mail.classList.add('errorInput');
        //add red border to nom when class is active
        blockMail.appendChild(pMail);
        //
        mail.style.backgroundImage = 'url("/Exercices-JS/7. ValidationForm/ressources/error.svg")';
         //mail background position to right 95%
        mail.style.backgroundPosition = '95%';
        //mail background repeat : no repeat
        mail.style.backgroundRepeat = 'no-repeat';
        //mail bg size to 50px
        mail.style.backgroundSize = '30px';
        //mail bg padding right
    }

    else {
        //remove p from username
        blockMail.removeChild(pMail);
        //remove red border from input
        mail.classList.remove('errorInput');
        mail.classList.remove('errorTxt');
        //add success border to input
        mail.classList.add('successInput');
        //add green font to input
        mail.classList.add('successTxt');

        mail.style.backgroundImage = 'url("/Exercices-JS/7. ValidationForm/ressources/check.svg")';
    }
});

//addeventlistener to mdp
mdp.addEventListener('keyup', function (e) {
     //create a regex to check if the password contains a symbol, a number and an uppercase letter
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!:;,@#\$%\^&\*])/;
    if (!regex.test(e.target.value)) {
        pMdp.innerHTML = 'Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un symbole';
        mdp.classList.remove('successInput');
            //add green font to input
         mdp.classList.remove('successTxt');
        
         pMdp.classList.add('errorTxt');
        //add red border to input
        mdp.classList.add('errorTxt');
        mdp.classList.add('errorInput');
        //add red border to nom when class is active
        blockMdp.appendChild(pMdp);
        //
        mdp.style.backgroundImage = 'url("/Exercices-JS/7. ValidationForm/ressources/error.svg")';
         //mdp background position to right 95%
        mdp.style.backgroundPosition = '95%';
        //mdp background repeat : no repeat
        mdp.style.backgroundRepeat = 'no-repeat';
        //mdp bg size to 50px
        mdp.style.backgroundSize = '30px';
        //mdp bg padding right
    }

    else {
        //remove p from username
        blockMdp.removeChild(pMdp);
        //remove red border from input
        mdp.classList.remove('errorInput');
        mdp.classList.remove('errorTxt');
        //add success border to input
        mdp.classList.add('successInput');
        //add green font to input
        mdp.classList.add('successTxt');

        mdp.style.backgroundImage = 'url("/Exercices-JS/7. ValidationForm/ressources/check.svg")';
    }

    //if the password is less than 5 characters
    if (e.target.value.length < 5) {
//add a p to the blockMdp with a text "faible"
        pMdp2.innerHTML = 'faible';
        pMdp2.classList.add('mdpStrength');
        //pmdp2 text align center
        pMdp2.style.textAlign = 'center';
        //pMdp2 width to 33%
        pMdp2.style.width = '33%';
        //add a top border 5px yellow to pMdp2
        pMdp2.style.borderTop = '7px solid red';
        pMdp2.style.order = '1';
        //appendchild to blockMdp
        divStrength.appendChild(pMdp2);
        divStrength.removeChild(pMdp3);
        divStrength.removeChild(pMdp4);
    }   
    else if (e.target.value.length >= 5 && e.target.value.length < 9) {
        pMdp3.innerHTML = 'moyen';
        pMdp3.classList.add('mdpStrength');
        //pmdp2 text align center
        pMdp3.style.textAlign = 'center';
        //pMdp2 width to 33%
        pMdp3.style.width = '33%';
        //add a top border 5px yellow to pMdp2
        pMdp3.style.borderTop = '7px solid orange';
        //pmdp3 order : 2
        pMdp3.style.order = '2';
        //appendchild to blockMdp
        divStrength.appendChild(pMdp3);
        divStrength.removeChild(pMdp4);

    }   
    else if (e.target.value.length >= 9) {
        pMdp4.innerHTML = 'fort';
        pMdp4.classList.add('mdpStrength');
        //pmdp2 text align center
        pMdp4.style.textAlign = 'center';
        //pMdp2 width to 33%
        pMdp4.style.width = '33%';
        //add a top border 5px yellow to pMdp2
        pMdp4.style.borderTop = '7px solid green';
        pMdp4.style.order = '3';
        //appendchild to blockMdp
        divStrength.appendChild(pMdp4);
    


    }   
});

//addeventlistener to mdp2
mdp2.addEventListener('keyup', function (e) {
    //if the password is different from mdp
    if (mdp.value !== e.target.value) {
        confirmMDP.innerHTML = 'Les mots de passe ne correspondent pas';
        confirmMDP.classList.add('errorTxt');
        //add red border to input
        mdp2.classList.add('errorTxt');
        mdp2.classList.add('errorInput');
        //add red border to nom when class is active
        blockConfirm.appendChild(confirmMDP);
        //
        mdp2.style.backgroundImage = 'url("/Exercices-JS/7. ValidationForm/ressources/error.svg")';
         //mdp background position to right 95%
        mdp2.style.backgroundPosition = '95%';
        //mdp background repeat : no repeat
        mdp2.style.backgroundRepeat = 'no-repeat';
        //mdp bg size to 50px
        mdp2.style.backgroundSize = '30px';
        //mdp bg padding right
    }

    else {
        //remove p from username
        blockConfirm.removeChild(confirmMDP);
        //remove red border from input
        mdp2.classList.remove('errorInput');
        mdp2.classList.remove('errorTxt');
        //add success border to input
        mdp2.classList.add('successInput');
        //add green font to input
        mdp2.classList.add('successTxt');

        mdp2.style.backgroundImage = 'url("/Exercices-JS/7. ValidationForm/ressources/check.svg")';
    }
});