
const buttonCreate = document.querySelector('.button1');
console.log(buttonCreate);
// create a new date that is today's date
const today = new Date();
// create a new date that is 7 days from today
const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
const nextWeekNumber = (nextWeek + '0').split(' ')[3];
console.log(nextWeekNumber);
//set input3 value to the nextWeek date
const input3 = document.querySelector('.input3');
input3.value = 

buttonCreate.addEventListener('click', (e) => {
    //prevent default
    e.preventDefault();
    const name = document.querySelector('.input1').value;
    const value = document.querySelector('.input2').value;
    const duration = document.querySelector('.input3').value;
    console.log(name, value, duration);
    //if name is already in the cookies then display a message in the info-cookie, that the name is already used
    if (document.cookie.includes(name)) {
        document.querySelector('.info-cookie').innerHTML = 'The name is already used';
    } else {

    //create a cookie with name, value and duration
    document.cookie = `${name}=${value}; expires=${new Date(duration).toUTCString()}`;
    }
      
    document.querySelector('.input1').value = '';
    document.querySelector('.input2').value = '';
    document.querySelector('.input3').value = '';

}
);

//addeventlistener to the button2 to display the name and the value for each cookie and their date of expiration in the ol list
const button2 = document.querySelector('.button2');
button2.addEventListener('click', (e) => {
    e.preventDefault();
    const list = document.querySelector('.liste-cookie');
    list.innerHTML = '';
    const cookies = document.cookie.split(';');
    console.log(cookies);
    for (let i = 0; i < cookies.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `Nom : ${cookies[i].split('=')[0]} // Valeur : ${cookies[i].split('=')[1]} // expire le ${cookies[i].split('=')[2]}`;
        list.appendChild(li);
    }
    console.log(cookies.length);

//if cookie is empty display a message
if (cookies === '') {
    list.innerHTML = 'Aucun cookie';

    
}

}
);
console.log(document.cookie);

//addeventlistener to the li, when you click on an li it will delete the cookie
const list = document.querySelector('.liste-cookie');
list.addEventListener('click', (e) => {
    
    console.log(e.target.innerHTML.split(' : ')[2].split(' // ')[0]);
    
    if (e.target.tagName === 'LI') {
        // const name = e.target.innerHTML.split(' ')[3];
        const name = e.target.innerHTML.split(' : ')[1].split(' // ')[0];
         

       
        console.log(name);
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
}
);

