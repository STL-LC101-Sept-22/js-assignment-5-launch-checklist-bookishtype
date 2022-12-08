// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
                // <h2>Mission Destination</h2>
                // <ol>
                //     <li>Name: </li>
                //     <li>Diameter: </li>
                //     <li>Star: ${star}</li>
                //     <li>Distance from Earth: </li>
                //     <li>Number of Moons: </li>
                // </ol>
                // <img src="">
   
}

function validateInput(testInput) {
    let testNum = Number(testInput);
    if(testInput === "") {
        return "Empty";
    } else if(isNaN(testInput)) {
        return "Not a Number";
    } else if(isNaN(testInput)=== false){
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let launchStatus = document.getElementById("launchStatus");


   if (validateInput(pilot) === "Empty" ||
   validateInput(copilot)=== "Empty" ||
   validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoMass) === "Empty" ) {
        alert("All fields are required!");

    } else if(validateInput(pilot) === "Is a Number" ||
    validateInput(copilot)=== "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
     validateInput(cargoMass) === "Not a Number" ) {
        alert("Please enter a valid value!");
     } else{
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            if(fuelLevel < 10000 && cargoMass <= 10000){
                
            }
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
