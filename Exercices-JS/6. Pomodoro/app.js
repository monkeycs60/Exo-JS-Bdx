// create a p in travail, then add to it a timer of 30 minutes
// create a p in pause, then add to it a timer of 5 minutes

const travail = document.querySelector('.travail');
const repos = document.querySelector('.repos');
const timer30 = document.createElement('p');
const pause5 = document.createElement('p');
// timer30 is (datenow + 30min) - datenow;
timer30.innerHTML = new Date((Date.now() - 1800000) - Date.now() ).toLocaleTimeString();
travail.appendChild(timer30);

pause5.innerHTML = new Date((Date.now() - 3300000) - Date.now() ).toLocaleTimeString();
repos.appendChild(pause5);

//addeventlistener to the start button, when you click on it, the timer30 is started
//addeventlistener to the stop button, when you click on it, the timer30 is stopped
//addeventlistener to the reset button, when you click on it, the timer30 is reseted
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

start.addEventListener('click', () => {
    
    timer30.innerHTML = new Date((Date.now() - 1800000) - Date.now() ).toLocaleTimeString();
    setInterval(() => {
        timer30.innerHTML = new Date((Date.now() - 1800000) - Date.now() ).toLocaleTimeString();
    }, 1000);
});

