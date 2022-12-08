window.addEventListener("load", function() {  
    let list = document.getElementById("faultyItems");
list.style.visibility = "hidden";
    let listedPlanets;
    let listedPlanetsResponse = myFetch()
listedPlanetsResponse.then(function (result) {
    listedPlanets = result; 
}).then(function () {
    let planet = pickPlanet(listedPlanets); 
      
  
  addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
});
  
  
    let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    let pilotNameVariable = document.querySelector("input[name=pilotName]");
    let pilot = pilotNameVariable.value;
    let copilotNameVariable = document.querySelector("input[name=copilotName]");
    let copilot = copilotNameVariable.value;
    let fuelLevelVariable = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelLevelVariable.value);
    let cargoMassVariable = document.querySelector("input[name=cargoMass]");
    let cargoLevel = Number(cargoMassVariable.value);
    
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();
   });
   
});


let listedPlanets;
let listedPlanetsResponse = myFetch()
listedPlanetsResponse.then(function (results) {
    listedPlanets = results; 
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
