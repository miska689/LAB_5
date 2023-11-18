const button = document.querySelector("#schimba");
const hobbys = document.querySelectorAll(".hobbys");
const img = document.querySelector("#img");
const locul = document.querySelector("#locul");
const functia = document.querySelector("#functia");
const realizari = document.querySelector("#realizari");
const content = document.querySelector(".content");
const varstaDiv = document.querySelector(".varsta");

const email = document.createElement("input");
const buttonCheck = document.createElement("button");
const divCheck = document.createElement("div");
const dateBox = document.createElement("p");
const br = document.createElement("br");

let dark = false;

let an = 2004;
let luna = 10;
let zi = 2;

dateBox.innerHTML = "Data nasterii: " + zi + "/" + luna + "/" + an;

function changeHobbys(){
    realizari.innerHTML = "Realizari"

    hobbys[0].innerHTML = "Participarea la conferințe și evenimente de specialitate";
    hobbys[1].innerHTML = "Stagii de practică sau internship-uri";
    hobbys[2].innerHTML = "Proiecte academice relevante";
}

function changeStyle(){
    document.body.classList.add("body-dark");
    document.querySelector(".persons").classList.add("persons-dark");
    document.querySelectorAll("th").forEach((th) => {
        th.style.color = "#545151";
    });
    
    img.classList.add("img-dark");
}

function randomImg(){
    img.src = "../img/" + Math.round(Math.random()) + ".jpeg";
}


function createDivCheck(){
    email.placeholder = "Scrie un email";
    buttonCheck.innerText = "Verifica";

    divCheck.classList.add("email-check");
    email.classList.add("input-style");
    buttonCheck.classList.add("button-style");

    divCheck.appendChild(email);
    divCheck.appendChild(buttonCheck);

}

function createDivVarsta(){
    varstaDiv.appendChild(br);
    varstaDiv.appendChild(dateBox);

}


function checkEmail(){
    if(email.value.indexOf('@') != -1){
        alert("Emailul este valid!");
    } else {
        alert("Emailul nu este valid");
    }
}

function calculateAge(){
    let data = new Date();

    let ziCurenta = data.getDate();
    let lunaCurenta = data.getMonth() + 1;
    let anCurent = data.getFullYear();

    let varsta =  anCurent - an; 

    if (lunaCurenta < luna || (lunaCurenta === luna && ziCurenta < zi)) {
        varsta--;
    }

    return varsta;
}


button.addEventListener("click", () => {
    locul.innerHTML = "Locul de munca: OpenAI";
    functia.innerHTML = "Functia: Programist";

    randomImg();
    changeHobbys();
    changeStyle();
    createDivCheck();
    createDivVarsta();

    document.querySelector(".persons").appendChild(divCheck);
    document.querySelector(".schimba-viata").style.display = "none";

    dark = true;
});

buttonCheck.addEventListener("click", checkEmail);

varstaDiv.addEventListener("mouseover", () => {
    dateBox.innerHTML = "Varsta: " + calculateAge() + " ani";
});

varstaDiv.addEventListener("mouseout", () => {
    dateBox.innerHTML = "Data nasterii: " + zi + "/" + luna + "/" + an;
});

