


// On géocalise l'utilisateur
navigator.geolocation.getCurrentPosition(success);

const bouton = document.querySelector("#but");
const modale = document.querySelector(".modale");

let alternance = false;
document.querySelector("#but2").addEventListener("click", () => {
    alternance = !alternance;
    if (alternance) {
      
        document.querySelector(".modale").style.visibility = "visible";
        document.querySelector("#but2").innerText = "Fermer";

       
    } else {
        document.querySelector(".modale").style.visibility = "hidden";
        document.querySelector("#but2").innerText = "Détails";

    }
});

let scriptVignette = document.querySelector(".vignette1");

let alternance2 = false;
document.querySelector("#but").addEventListener("click", () => {
    alternance2 = !alternance2;
    if (alternance2) {
        scriptVignette.style.transform = "scale(2) translateY(-5%)";
        document.querySelector("#but").innerText = "Retour";
        
    
    } else {
        scriptVignette.style.transform="scale(1)";
        document.querySelector("#but").innerText = "Zoom";

    }
});

let caseHour = document.getElementsByClassName("h");
let caseDay = document.getElementsByClassName("d");

let jour = new Date().getDay();
const semaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

let wind = document.getElementsByClassName("wind");
let clouds = document.getElementsByClassName("clouds");
let humidity = document.getElementsByClassName("humidity");
let uvi = document.getElementsByClassName("uvi");
let tempFeeling = document.getElementsByClassName("tempFeeling");

function success(pos) {
    
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    AppelAPI(longitude, latitude);
}

function AppelAPI(longitude, latitude) {

/// Premier Appel API pour la meteo ACTUELLE (à 0s)

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=44.797829&lon=-1.234520&appid=ad38d891525e48eb7f62af8273be531f&units=metric&lang=fr`);
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
    todayData[0].innerHTML += `<div class='old'> ${temperatureArrondie}°C </div>`;
    todayData[0].innerHTML += `<div class='old'> ${ville} </div>`;

   
}


xhr.send();

fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=44.797829&lon=-1.234520&exclude={part}&appid=ad38d891525e48eb7f62af8273be531f&units=metric&lang=fr`)
.then((reponse) => {
    return reponse.json();
})
.then((data) => {
    console.log(data);
    console.log(data.current.wind_speed);
    console.log(data.current.wind_speed * 3.6);

    let imageWind = document.createElement("img");

    let windDir = document.getElementsByClassName("windDirection");
    // windDir[0].innerHTML = `<div class='dir'> ${data.current.wind_deg} </div>`;
    if (data.current.wind_deg < 22.5) {
        windDir[0].innerHTML += "<p>Nord</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/north.png";
        imageWind.width = "200";    
    }
    else if (data.current.wind_deg < 45) {
        windDir[0].innerHTML += "<p>Nord / Nord Est</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/northnortheast.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 67.5) {
        windDir[0].innerHTML += "<p>Nord Est</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/northeast.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 90) {
        windDir[0].innerHTML += "<p>Est / Nord Est</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/eastnortheast.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 112.5) {
        windDir[0].innerHTML += "<p>Est</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/east.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 135) {
        windDir[0].innerHTML += "<p>Est / Sud Est</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/eastsoutheast.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 157.5) {
        windDir[0].innerHTML += "<p>Sud Est</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/southeast.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 180) {
        windDir[0].innerHTML += "<p>Sud Est / Sud</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/souteastsouth.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 202.5) {
        windDir[0].innerHTML += "<p>Sud</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/south.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 225) {
        windDir[0].innerHTML += "<p>Sud / Sud Ouest</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/southwestsouth.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 247.5) {
        windDir[0].innerHTML += "<p>Sud Ouest</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/Southwest.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 270) {
        windDir[0].innerHTML += "<p>Ouest / Sud Ouest</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/westsouthwest.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 292.5) {
        windDir[0].innerHTML += "<p>Ouest</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/west.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 315) {
        windDir[0].innerHTML += "<p>Ouest / Nord Ouest</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/westnorthwest.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg < 337.5) {
        windDir[0].innerHTML += "<p>Nord Ouest</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/northwest.png";
        imageWind.width = "200"; 
    }
    else if (data.current.wind_deg > 337.5) {
        windDir[0].innerHTML += "<p>Nord / Nord Ouest</p>";
        imageWind.src = "/Exercices-JS/2. BIS AppMétéo - plage/ressources/windirection/northnorthwest.png";
        imageWind.width = "200"; 
    }
   windDir[0].appendChild(imageWind);

    wind[0].innerHTML = `<p class='intro'> Force du vent</p>`;
    wind[0].innerHTML += `<div class='detailed'> ${Math.round(data.current.wind_speed * 3.6)} km/h </div>`;
    
    if ((data.current.wind_speed * 3.6) < 1) {
       wind[0].style.background = "rgb(248, 249, 250)";
    }
   else if ((data.current.wind_speed * 3.6) < 5) {
       wind[0].style.background = "rgb(204, 255, 255)";
    }
    else  if ((data.current.wind_speed * 3.6) < 11) {
       wind[0].style.background = "rgb(153, 255, 255)";
    }
    else  if ((data.current.wind_speed * 3.6) < 19) {
       wind[0].style.background = "rgb(102, 255, 255)";
    }
    else  if ((data.current.wind_speed * 3.6) < 28) {
       wind[0].style.background = "rgb(0, 255, 255)";
    }
    else  if ((data.current.wind_speed * 3.6) < 38) {
       wind[0].style.background = "rgb(0, 204, 255)";
    }
    else  if ((data.current.wind_speed * 3.6) < 49) {
       wind[0].style.background = "rgb(0, 153, 255)";
    }
    else  if ((data.current.wind_speed * 3.6) < 61) {
       wind[0].style.background = "rgb(0, 102, 255)";
    }
    else  if ((data.current.wind_speed * 3.6) < 74) {
       wind[0].style.background = "rgb(0, 0, 255)";
    }
    else  if ((data.current.wind_speed * 3.6) < 88) {
       wind[0].style.background = "rgb(0, 158, 247)";
    }
    else  if ((data.current.wind_speed * 3.6) < 102) {
       wind[0].style.background = "rgb(0, 0, 153)";
    }
    else  if ((data.current.wind_speed * 3.6) < 117) {
       wind[0].style.background = "rgb(0, 0, 102)";
    }
    else  if ((data.current.wind_speed * 3.6) > 118) {
       wind[0].style.background = "rgb(0, 0, 0)";
    }

    clouds[0].innerHTML = `<p class='intro'> Taux d'ennuagement</p>`;
    clouds[0].innerHTML += `<div class='detailed'> ${data.current.clouds} % </div>`;

    humidity[0].innerHTML = `<p class='intro'> Taux d'humidité</p>`;
    humidity[0].innerHTML += `<div class='detailed'> ${data.current.humidity} % </div>`;

    uvi[0].innerHTML = `<p class='intro'> Indice UV </p>`;
    uvi[0].innerHTML += `<div class='detailed'> ${data.current.uvi} </div>`;
    if (data.current.uvi < 2) {
    uvi[0].style.background = "green";
    }
    else if (data.current.uvi < 5) {
        uvi[0].style.background = "yellow";
    }
    else if (data.current.uvi < 7) {
        uvi[0].style.background = "orange";
    }
    else if (data.current.uvi < 10) {
        uvi[0].style.background = "red";
    }
    else if (data.current.uvi < 20) {
        uvi[0].style.background = "violet";
    }
    

    tempFeeling[0].innerHTML = `<p class='intro'> Température ressentie </p>`;
    tempFeeling[0].innerHTML += `<div class='detailed'> ${Math.round(data.current.feels_like)} °C </div>`;
   
    let heureActuelle = new Date().getHours();
console.log(data.daily);
    let aSup = document.getElementsByClassName("addendum");
    for (let l = 1; l < 8; l++) {
        let heureAug = heureActuelle + l * 2;
        if (heureAug === 24) {
            heureAug = "00";
        } else if (heureAug > 24){
           heureAug -= 24;
        }
        caseHour[l-1].innerHTML = `<p> ${heureAug} h </p>`;
        caseHour[l-1].innerHTML += `<div> ${Math.round(data.hourly[l*3].temp)}°C </div>`;
     
        console.log(new Date().getDay());
        let indiceSemaine = jour + l - 1;
        if (indiceSemaine > 6) {
            indiceSemaine -= 7;
        }
        let jourPrecis = semaine[indiceSemaine];

        console.log(data.hourly[l*2].clouds);
        
        caseDay[l-1].innerHTML = `<p> ${jourPrecis} </p>`;
        caseDay[l-1].innerHTML += `<div> ${Math.round(data.daily[l].temp.day)}°C </div>`;
        console.log(jourPrecis);
        // do a tooltip while hovering caseHour[l]
        caseHour[l-1].addEventListener("mouseover", function() {
            let tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.innerHTML += `<p> Température ressentie : ${data.hourly[l*2].feels_like} °C </p>`;
            tooltip.innerHTML += `<p> Nuage : ${data.hourly[l*2].clouds} % </p>`;
            tooltip.innerHTML += `<p> Humidité : ${data.hourly[l*2].humidity} %  </p>`;
            tooltip.innerHTML += `<p> Indice UV : ${data.hourly[l*2].uvi} / 11+ </p>`;
            tooltip.innerHTML += `<p> Vent : ${Math.round(data.hourly[l*2].wind_speed * 3.6)} km/h  </p>`;
            tooltip.innerHTML += `<p> ${data.hourly[l*2].weather[0].description.charAt(0).toUpperCase()+data.hourly[l*2].weather[0].description.slice(1)}  </p>`;
            caseHour[l-1].appendChild(tooltip);
        }
        );
        caseHour[l-1].addEventListener("mouseout", function() {
            let tooltip = document.querySelector(".tooltip");
            caseHour[l-1].removeChild(tooltip);
        }
        );
        //do a tooltip while hovering caseDay[l]
        caseDay[l-1].addEventListener("mouseover", function() {
            let tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.innerHTML += `<p> Température ressentie : ${data.daily[l].feels_like.day} °C </p>`;
            tooltip.innerHTML += `<p> Nuage : ${data.daily[l].clouds} % </p>`;
            tooltip.innerHTML += `<p> Humidité : ${data.daily[l].humidity} % </p>`;
            tooltip.innerHTML += `<p> Indice UV : ${data.daily[l].uvi} / 11+ </p>`;
            tooltip.innerHTML += `<p> Vent : ${Math.round(data.daily[l].wind_speed * 3.6)} km/h </p>`;
            tooltip.innerHTML += `<p> ${data.daily[l].weather[0].description.charAt(0).toUpperCase()+data.daily[l].weather[0].description.slice(1)}  </p>`;
            caseDay[l-1].appendChild(tooltip);
        }
        );
        caseDay[l-1].addEventListener("mouseout", function() {
            let tooltip = document.querySelector(".tooltip");
            caseDay[l-1].removeChild(tooltip);
        }
        );
    }

})




fetch(`https://api.windy.com/api/webcams/v2/list/nearby=45.0,-1.2,20/orderby=distance/limit=20/?show=webcams:player&key=zcAvXCSW4fsVUkC8UC9j9QwgxMYuYirn`)
// nearby=45.0,-1.2,200/orderby=distance
.then((reponse) => {
    return reponse.json();
})
.then((data) => {
    console.log(data.result.webcams[0].player);
   
    let videor = document.querySelector(".video");
    let webcams = document.createElement("div");
    webcams.innerHTML = `<iframe width="760" height="415" src="https://webcams.windy.com/webcams/public/embed/player/1583127872/day" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    videor.appendChild(webcams);
    
})
    
//     let video = document.createElement("video");
//     // video.src=data.result.webcams[0].url.current.desktop;
//     video.src="https://www.windy.com/webcams/1583127872&key=zcAvXCSW4fsVUkC8UC9j9QwgxMYuYirn";
//     // data.result.webcams[0].player.day.embed;
//     // "https://webcams.windy.com/webcams/public/embed/player/1583127872/day"
   
//     video.poster="/Exercices-JS/2. AppMétéo/ressources/chargement/circles.svg";
//     video.autoplay = true;
//     video.controls = true;
//     video.crossOrigin = "anonymous";
//     video.width = 500;
//     let camLacanau = document.querySelector(".webcam");
//     camLacanau.appendChild(video);
     

// })
let charg = document.querySelector(".chargement");
charg.classList.add("disparition");
}


// https://api.windy.com/api/webcams/v2?key=zcAvXCSW4fsVUkC8UC9j9QwgxMYuYirn


