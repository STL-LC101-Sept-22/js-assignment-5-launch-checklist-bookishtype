// Write your JavaScript code here!

window.addEventListener("load", function() {  
  let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
   event.preventDefault();
       
    let pilotName = document.querySelector("input[name=pilotName]");
    let pilot = pilotName.value;
    let copilotName = document.querySelector("input[name=copilotName]");
    let copilot = copilotName.value;
    let fuelLevelVariable = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelLevelVariable.value);
    let cargoMassVariable = document.querySelector("input[name=cargoMass]");
    let cargoLevel = Number(cargoMassVariable.value);
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
 
       
  formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  
   });
    
let listedPlanets;
let listedPlanetsResponse = myFetch()
listedPlanetsResponse.then(function (result) {
    listedPlanets = result; 
    console.log(listedPlanets);
}).then(function () {
    console.log(listedPlanets);
   let targetPlanet = pickPlanet(listedPlanets);
        let name = targetPlanet.name;
        let diameter = targetPlanet.diameter;
        let star = targetPlanet.star;
        let distance = targetPlanet.distance;
        let imageUrl = targetPlanet.image;
        let moons = targetPlanet.moons;


  addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    });

});
