//create const for travail, repos, start, pause, reset, cycles
const travail = document.querySelector('.travail');
const repos = document.querySelector('.repos');
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
    let interval = setInterval(() => {
        //create a variable for the time
        let time = document.querySelector('.time');
        //create a variable for the minutes and seconds
        let minutes = Math.floor(travailTime / 60);
        let seconds = travailTime % 60;
        //display the minutes and seconds in time
        travail.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        //if the time is equal to 0, stop the interval and display a message
        console.log(travailTime);
        if (travailTime <= 0) {
            clearInterval(interval);
            travailTime = 10;
            travail.innerHTML = `${Math.floor(travailTime / 60)}:${travailTime % 60 < 10 ? '0' : ''}${travailTime % 60}`;
            //begin the repos timer
            let interval2 = setInterval(() => {
                let minutes = Math.floor(reposTime / 60);
                let seconds = reposTime % 60;
                repos.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                if (reposTime <= 0) {
                    clearInterval(interval2);
                    reposTime = 5;
                    repos.innerHTML = `${Math.floor(reposTime / 60)}:${reposTime % 60 < 10 ? '0' : ''}${reposTime % 60}`;
                }
                //decrease the reposTime by 1
                reposTime--;
            }, 1000);
        }
        //decrease the time by 1 second
        travailTime--;
    }, 1000);
});