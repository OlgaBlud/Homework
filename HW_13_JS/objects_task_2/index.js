let spaceship = {
   'Fuel Type': 'Turbo Fuel',
   homePlanet: 'Earth'
};

// Write your code below
let greenEnergy = obj => {
   obj['Fuel Type'] = 'avocado oil'
};
greenEnergy(spaceship);
// console.log(`Fuel type is ${spaceship.['Fuel Type']}`);

let remotelyDisable = object => {
   object.disabled = true
}
remotelyDisable(spaceship);

console.log(spaceship);

