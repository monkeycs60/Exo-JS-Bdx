// create a p in travail, then add to it a timer of 30 minutes
// create a p in pause, then add to it a timer of 5 minutes

const travail = document.querySelector('.travail');
const repos = document.querySelector('.repos');
const timer30 = document.createElement('p');
const pause5 = document.createElement('p');


// const decompte = (minutes, secondes) => {
//     let secondesRestantes = minutes * 60 + secondes;
//     let interval = setInterval(() => {
//         secondesRestantes--;
//         if (secondesRestantes >= 0) {
//             let minutesRestantes = Math.floor(secondesRestantes / 60);
//             let secondesRestantes = secondesRestantes % 60;
//             if (secondesRestantes < 10) {
//                 secondesRestantes = '0' + secondesRestantes;
//             }
//             if (minutesRestantes < 10) {
//                 minutesRestantes = '0' + minutesRestantes;
//             }
//             timer30.textContent = `${minutesRestantes}:${secondesRestantes}`;
//         } else {
//             clearInterval(interval);
//         }
//     }, 1000);
// };

// timer30 is (datenow + 30min) - datenow;
timer30.innerHTML = new Date((Date.now() - 1800000) - Date.now()).toLocaleTimeString().slice(3);
travail.appendChild(timer30);

pause5.innerHTML = new Date((Date.now() - 50100000) - Date.now()).toLocaleTimeString().slice(3);
repos.appendChild(pause5);

//addeventlistener to the start button, when you click on it, the timer30 is started
//addeventlistener to the stop button, when you click on it, the timer30 is stopped
//addeventlistener to the reset button, when you click on it, the timer30 is reseted
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

const uneSeconde = 1000;
let dateInit = new Date((Date.now() - 1800000) - Date.now());
console.log(dateInit- uneSeconde);
console.log(new Date((Date.now() - 1800000) - Date.now()).toLocaleTimeString().slice(3));
console.log(new Date((Date.now() - 1800000) - Date.now()) - 1000);

console.log(dateInit.toLocaleTimeString().slice(3));
//addeventlistener to start button to start the timer
start.addEventListener('click', () => {
    console.log("salut");
    
   let secondeDiminue = setInterval(() => {
       
        dateInit -= uneSeconde;
        const tempsActualise = new Date(dateInit);
        timer30.innerHTML = tempsActualise.toLocaleTimeString().slice(3);
        console.log(dateInit);
        if (dateInit === -3600000) {
            
            alert("Vous avez fini votre temps de travail !");
            clearInterval(secondeDiminue);
            
            //stop the timer
        } else if (dateInit < -3600000) {
            clearInterval(secondeDiminue);
            timer30.innerHTML = new Date((Date.now() - 1800000) - Date.now()).toLocaleTimeString().slice(3);
        }

 

    }, 1000);
    
});




// addeventlistener to stop button to stop the timer
