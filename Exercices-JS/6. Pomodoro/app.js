//create const for travail, repos, start, pause, reset, cycles
const travail = document.querySelector('.travail-2');
const repos = document.querySelector('.repos-2');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const cycles = document.querySelector('.cycles');

//create two variables for travail and repos
let travailTime = 10;
let reposTime = 5;

// display travailTime in travail and convert it to minutes and seconds
// add a zero before the minutes and seconds if they are less than 10
travail.innerHTML = `${Math.floor(travailTime / 60)}:${travailTime % 60 < 10 ? '0' : ''}${travailTime % 60}`;
//display reposTime in repos and convert it to minutes and seconds
//add a zero before the minutes and seconds if they are less than 10
repos.innerHTML = `${Math.floor(reposTime / 60)}:${reposTime % 60 < 10 ? '0' : ''}${reposTime % 60}`;


//addeventlistener to start button, click, begin the timer
start.addEventListener('click', () => {
    //create a variable for the interval
    
    travailTime--; 
    travail.innerHTML = `${Math.floor(travailTime / 60)}:${travailTime % 60 < 10 ? '0' : ''}${travailTime % 60}`;  
    compteur = 0;
        
  
    
    let interval = setInterval(() => {
        //create a variable for the time
        reset.addEventListener('click', () => {
            //stop the interval
            clearInterval(interval);
            //reset the time
            travailTime = 10;
            reposTime = 5;
            //display the time
            travail.innerHTML = `${Math.floor(travailTime / 60)}:${travailTime % 60 < 10 ? '0' : ''}${travailTime % 60}`;
            repos.innerHTML = `${Math.floor(reposTime / 60)}:${reposTime % 60 < 10 ? '0' : ''}${reposTime % 60}`;
            //reset the cycles
            compteur = 0;
            cycles.innerHTML = `Nombre de cycles : ${compteur}`;
        });
         timer();
                
           
        }
        , 1000);
        
       
    });
// addeventlistener to pause button, click, stop the interval

    

function timer() {
    let minutes = Math.floor(travailTime / 60);
    let seconds = travailTime % 60;
    //display the minutes and seconds in time
    travail.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    //if the time is equal to 0, stop the interval and display a message
    console.log(travailTime);
    if (travailTime > 0) {
        travailTime--;
        travail.innerHTML = `${Math.floor(travailTime / 60)}:${travailTime % 60 < 10 ? '0' : ''}${travailTime % 60}`;
    } 
    else if (travailTime === 0 && reposTime === 0) {
        reposTime = 5;
        travailTime = 10;
        travail.innerHTML = `${Math.floor(travailTime / 60)}:${travailTime % 60 < 10 ? '0' : ''}${travailTime % 60}`;
        repos.innerHTML = `${Math.floor(reposTime / 60)}:${reposTime % 60 < 10 ? '0' : ''}${reposTime % 60}`;
        compteur++;
        console.log(compteur);
        cycles.innerHTML = `Nombre de cycles : ${compteur}`;
    }
    else if (travailTime === 0) {
        reposTime--;
        repos.innerHTML = `${Math.floor(reposTime / 60)}:${reposTime % 60 < 10 ? '0' : ''}${reposTime % 60}`;
    }
    
}
//addeventlistener to reset button
