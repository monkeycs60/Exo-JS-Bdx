let alternance = false;
document.getElementById("but").addEventListener("active", function(){
    alternance = !alternance;
    if (alternance) {
        
        document.getElementById("mod").style.visibility="visible";
    } else {
        document.getElementById("mod").style.visibility="hidden";

    }
});


// const bouton = document.querySelector(".btn");
// let modale = document.getElementsByClassName("modal");


// bouton.addEventListener("click", () => {
//     modale.style.visibility = "visible";
    
    
// })