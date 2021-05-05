//Buttons
var searchButton = document.getElementById('translateButton')
var nasaSearchButton = document.getElementById('nasaButton')

//API Keys
var klingonApiKey = "P_1PfvREpAnXXFJE3XlWOgeF";
var NasaApiKey="6A5nb7r3yXYipJUqN3OSIIdZyFwKcfQqrjJdXX8r";

//Event Listeners
searchButton.onclick = translationRequests;
nasaSearchButton.onclick = nasaTechRequest;

//Klingon API
//NOTE: The API key will likely no longer work as this is a paid service

//Function to call functions for translation of individual elements
function translationRequests(){
    klingonApiRequestDescription();
    klingonApiRequestTitle();
    klingonApiRequestBenefits();
}

//Returns the Discription in Klingon
async function klingonApiRequestDescription(){
    let message = document.getElementById("description").textContent;
    let response = await fetch(`https://api.funtranslations.com/translate/klingon.json?text=${message}&api_key=${klingonApiKey}`);
    let data = await response.json();
    document.getElementById('description').innerHTML = data.contents.translated;
}

//Returns the Title in Klingon
async function klingonApiRequestTitle(){
     let title = document.getElementById("title").textContent
     let response = await fetch(`https://api.funtranslations.com/translate/klingon.json?text=${title}&api_key=${klingonApiKey}`);
     let data = await response.json();
     document.getElementById('title').innerHTML = data.contents.translated;
 }

//Returns the Benifits in Klingon
 async function klingonApiRequestBenefits(){
     let benefits = document.getElementById("benefits").textContent
     let response = await fetch(`https://api.funtranslations.com/translate/klingon.json?text=${benefits}&api_key=${klingonApiKey}`);
     let data = await response.json();
     document.getElementById('benefits').innerHTML = data.contents.translated;
 }

//NASA API

//Function for accessing NASA Techport API
async function nasaTechRequest(){
    let message = document.getElementById("ReportNumber").value;
    let response = await fetch(`https://api.nasa.gov/techport/api/projects/${message}?api_key=${NasaApiKey}`);
    let data = await response.json();
    document.getElementById('description').innerHTML = data.project.description;
    document.getElementById('benefits').innerHTML = data.project.benefits;
    document.getElementById('title').innerHTML = data.project.title;
}

