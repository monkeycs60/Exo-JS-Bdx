//create const for travail, repos, start, pause, reset, cycles
const travail = document.querySelector('.travail-2');
const repos = document.querySelector('.repos-2');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const cycles = document.querySelector('.cycles');

//create two variables for travail and repos
let travailTime = 1800;
let reposTime = 300;
let pauseBtn = false;
let checkInterval = false;

// display travailTime in travail and convert it to minutes and seconds
// add a zero before the minutes and seconds if they are less than 10
travail.innerHTML = `${Math.floor(travailTime / 60)}:${travailTime % 60 < 10 ? '0' : ''}${travailTime % 60}`;
//display reposTime in repos and convert it to minutes and seconds
//add a zero before the minutes and seconds if they are less than 10
repos.innerHTML = `${Math.floor(reposTime / 60)}:${reposTime % 60 < 10 ? '0' : ''}${reposTime % 60}`;


//addeventlistener to start button, click, begin the timer
start.addEventListener('click', () => {
    //create a variable for the interval
    if(checkInterval === false) {

        checkInterval = true;
        
    
    travailTime--; 
    travail.innerHTML = `${Math.floor(travailTime / 60)}:${travailTime % 60 < 10 ? '0' : ''}${travailTime % 60}`;  
    compteur = 0;
        
  
    
    let interval = setInterval(() => {
        //create a variable for the time
        timer();
        
        
    }
    , 1000);
    reset.addEventListener('click', () => {
        //stop the interval
        clearInterval(interval);
        checkInterval = false;
        //reset the time
        travailTime = 1800;
        reposTime = 300;
        //display the time
        travail.innerHTML = `${Math.floor(travailTime / 60)}:${travailTime % 60 < 10 ? '0' : ''}${travailTime % 60}`;
        repos.innerHTML = `${Math.floor(reposTime / 60)}:${reposTime % 60 < 10 ? '0' : ''}${reposTime % 60}`;
        //reset the cycles
        compteur = 0;
        cycles.innerHTML = `Nombre de cycles : ${compteur}`;
    });
    } else {
        return
    }
       
    });
// addeventlistener to pause button, click, stop the interval

    

function timer() {
    let minutes = Math.floor(travailTime / 60);
    let seconds = travailTime % 60;
    //display the minutes and seconds in time
    travail.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    //if the time is equal to 0, stop the interval and display a message
    console.log(travailTime);
    if ( pauseBtn === false && travailTime > 0) {
        travailTime--;
        travail.innerHTML = `${Math.floor(travailTime / 60)}:${travailTime % 60 < 10 ? '0' : ''}${travailTime % 60}`;
    } 
    else if (pauseBtn === false && travailTime === 0 && reposTime === 0) {
        reposTime = 300;
        travailTime = 1800;
        travail.innerHTML = `${Math.floor(travailTime / 60)}:${travailTime % 60 < 10 ? '0' : ''}${travailTime % 60}`;
        repos.innerHTML = `${Math.floor(reposTime / 60)}:${reposTime % 60 < 10 ? '0' : ''}${reposTime % 60}`;
        compteur++;
        console.log(compteur);
        cycles.innerHTML = `Nombre de cycles : ${compteur}`;
    }
    else if (pauseBtn === false && travailTime === 0) {
        reposTime--;
        repos.innerHTML = `${Math.floor(reposTime / 60)}:${reposTime % 60 < 10 ? '0' : ''}${reposTime % 60}`;
    }
    
}
//pause button
pause.addEventListener('click', () => {
    pauseBtn = !pauseBtn;
    //change pause text to "Reprendre"
    if (pauseBtn === true) {
        pause.innerHTML = 'Reprendre';
        // color pause button to red
        pause.style.backgroundColor = 'green';
    } else {
        pause.innerHTML = 'Pause';
        // color pause button to green
        pause.style.backgroundColor = 'red';
    }
});