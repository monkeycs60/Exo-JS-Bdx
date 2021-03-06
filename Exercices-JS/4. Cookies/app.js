
const buttonCreate = document.querySelector('.button1');
console.log(buttonCreate);
// create a new date that is today's date
const today = new Date();
// create a new date that is 7 days from today
const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
const nextWeekYear = (nextWeek + '0').split(' ')[3];
const nextWeekDay = (nextWeek + '0').split(' ')[2];
const nextWeekMonth = (nextWeek + '0').split(' ')[1];
console.log(nextWeek.getMonth());
//create an array with all months
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//match next week's month with the array
//transforùm next week's month to a number
const nextWeekMonthNumber = months.indexOf(nextWeekMonth) + 1;
//convert nextweekmonthnumber to an array
const convert = nextWeekMonthNumber.toString().split('');
let month = convert;
if (convert.length > 1) {
    month = convert[0] + convert[1];
    console.log(month);
} else {
    month = `0${convert[0]}`;
    console.log(month);
    
}
//check if the array has more than 1 digit
console.log(month);
console.log(typeof nextWeekMonthNumber);

console.log(nextWeek);
console.log(convert);
//log all const 
const dateComplete = `${nextWeekYear}-${month}-${nextWeekDay}`;

//set input3 value to the nextWeek date
const input3 = document.querySelector('.input3');


document.querySelector('.input3').value = dateComplete;


// premier bouton CREER
///////////////////////////////////////////////
buttonCreate.addEventListener('click', (e) => {
    //prevent default
    e.preventDefault();
    const list = document.querySelector('.liste-cookie');
    list.innerHTML = '';
    document.querySelector('.info-cookie').style.display = 'block';
    const name = document.querySelector('.input1').value;
    const value = document.querySelector('.input2').value;
    const duration = document.querySelector('.input3').value;
    
    document.querySelector('.info-cookie').innerHTML = `Cookie <span class="nom-bold">${name}</span> créé !`;
    setTimeout(() => {
        document.querySelector('.info-cookie').style.display = 'none';
    }, 5000);
    console.log(name, value, duration);
    //if name is already in the cookies then display a message in the info-cookie, that the name is already used
    if (name === '' || value === '' || duration === '') {
        document.querySelector('.info-cookie').innerHTML = 'Veuillez remplir tous les champs !';  
    } 
    else if (document.cookie.includes(name)) {
        document.querySelector('.info-cookie').innerHTML = 'Le nom du cookie est déjà utilisé !';
    } 

    else {

    //create a cookie with name, value and duration
    document.cookie = `${name}=${value}; expires=${new Date(duration).toUTCString()}`;
    }
     
    document.querySelector('.input1').value = '';
    document.querySelector('.input2').value = '';
    document.querySelector('.input3').value = dateComplete;

}
);

// deuxième bouton SUPPRIMER
//addeventlistener to the button2 to display the name and the value for each cookie and their date of expiration in the ol list
const button2 = document.querySelector('.button2');
button2.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.cookie === '') {
        document.querySelector('.info-cookie').innerHTML = 'Aucun cookie à afficher !';
        
    }
    else {
    document.querySelector('.info-cookie').style.display = 'block';
    document.querySelector('.info-cookie').innerHTML = '';
    const list = document.querySelector('.liste-cookie');
    list.innerHTML = '';
    const cookies = document.cookie.split(';');
    console.log(cookies);
    for (let i = 0; i < cookies.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `Nom : ${cookies[i].split('=')[0]} // Valeur : ${cookies[i].split('=')[1]}`;
        list.appendChild(li);
    }

}
}
);

//addeventlistener to the li, when you click on an li it will delete the cookie
const list = document.querySelector('.liste-cookie');
list.addEventListener('click', (e) => {
    
    console.log(e.target.innerHTML.split(' : ')[2].split(' // ')[0]);
    
    if (e.target.tagName === 'LI') {
        // const name = e.target.innerHTML.split(' ')[3];
        const name = e.target.innerHTML.split(' : ')[1].split(' // ')[0];
         
        document.cookie = `${name}=; expires=${new Date(0).toUTCString()}`;
        e.target.remove();
    }
    // if Valeur : undefined in li, then display an error message on info-cookie
    if (e.target.innerHTML.split(' : ')[2].split(' // ')[0] === "") {
        // create an li to the ol with the error message
        const li = document.createElement('li');
        li.innerHTML = `Ce cookie n'existe pas`;
        document.querySelector('.info-cookie').appendChild(li);
        const cookies = document.cookie.split(';');   
       console.log(cookies);     
    }

});
console.log(document.cookie);