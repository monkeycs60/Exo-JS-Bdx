// On géocalise l'utilisateur
navigator.geolocation.getCurrentPosition(success);

let caseHour = document.getElementsByClassName("h");
let caseDay = document.getElementsByClassName("d");

let jour = new Date().getDay();
const semaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];


function success(pos) {
    
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    AppelAPI(longitude, latitude);
}

function AppelAPI(longitude, latitude) {

/// Premier Appel API pour la meteo ACTUELLE (à 0s)

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ad38d891525e48eb7f62af8273be531f&units=metric&lang=fr`);
xhr.responseType = 'json';
xhr.onload = function(){
   
    const icone = xhr.response.weather[0].icon;

    let weatherIcon = document.getElementsByClassName("weatherIcon");
    let imageRef = document.createElement("img");
    if (icone === "01n") {
       imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/nuit/01n.svg';
       imageRef.width = "350"
    } else if (icone === "02n") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/nuit/02n.svg';
       imageRef.width = "350"
    } else if (icone === "03n") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/nuit/03n.svg';
       imageRef.width = "350"
    } else if (icone === "04n") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/nuit/04n.svg';
       imageRef.width = "350"
    } else if (icone === "09n") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/nuit/09n.svg';
       imageRef.width = "350"
    } else if (icone === "10n") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/nuit/10n.svg';
       imageRef.width = "350"
    } else if (icone === "11n") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/nuit/11n.svg';
       imageRef.width = "350"
    } else if (icone === "13n") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/nuit/13n.svg';
       imageRef.width = "350"
    } else if (icone === "50n") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/nuit/50n.svg';
       imageRef.width = "350"
    } else if (icone === "01d") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/jour/01d.svg';
       imageRef.width = "350"
    } else if (icone === "02d") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/jour/02d.svg';
       imageRef.width = "350"
    } else if (icone === "03d") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/jour/03d.svg';
       imageRef.width = "350"
    }
    else if (icone === "04d") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/jour/04d.svg';
       imageRef.width = "350"
    }
    else if (icone === "09d") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/jour/09d.svg';
       imageRef.width = "350"
    }
    else if (icone === "10d") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/jour/10d.svg';
       imageRef.width = "350"
    }
    else if (icone === "11d") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/jour/11d.svg';
       imageRef.width = "350"
    }
    else if (icone === "13d") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/jour/13d.svg';
       imageRef.width = "350"
    }
    else if (icone === "50d") {
        imageRef.src = '/Exercices-JS/2. AppMétéo/ressources/jour/50d.svg';
       imageRef.width = "350"
    }
   
    weatherIcon[0].appendChild(imageRef);
    // weatherIcon[0].innerHTML = `<div> ${icone}</div>`
    

    const description = xhr.response.weather[0].description;
    let tabMajDescription = [];
    const majDescription = description[0].toUpperCase();
    tabMajDescription.push(majDescription);
    for (let index = 1; index < description.length; index++) {
        tabMajDescription.push(description[index])
    }

    let descriptionWeather = tabMajDescription.join('');
    const temperature = xhr.response.main.temp;
    let temperatureArrondie = Math.round(temperature);

    const ville = xhr.response.name;
    
    let todayData = document.getElementsByClassName("weatherCurrentData");
    
    todayData[0].innerHTML = `<div class='old'> ${descriptionWeather} </div>`;
    todayData[0].innerHTML += `<div class='old'> ${temperatureArrondie}°C </div>`
    todayData[0].innerHTML += `<div class='old'> ${ville} </div>`
}
xhr.send();

fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=ad38d891525e48eb7f62af8273be531f&units=metric&lang=fr`)
.then((reponse) => {
    return reponse.json();
})
.then((data) => {
   
    let heureActuelle = new Date().getHours();
    for (let l = 1; l < 8; l++) {
        let heureAug = heureActuelle + l * 3;
        if (heureAug === 24) {
            heureAug = "00";
        } else if (heureAug > 24){
           heureAug -= 24;
        }
        caseHour[l-1].innerHTML = `<p> ${heureAug} h </p>`;
        caseHour[l-1].innerHTML += `<div> ${Math.round(data.hourly[l*3].temp)}°C </div>`;
        
        let indiceSemaine = jour + l - 1;
        if (indiceSemaine > 6) {
            indiceSemaine -= 7;
        }
        let jourPrecis = semaine[indiceSemaine];
        
        caseDay[l-1].innerHTML = `<p> ${jourPrecis} </p>`;
        caseDay[l-1].innerHTML += `<div> ${Math.round(data.daily[l].temp.day)}°C </div>`;
        
    }

})

}




