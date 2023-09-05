//código para arquivos geojson federais
//Amajari
var rodFedAMJ = L.geoJSON(rodFedAmajari, {
    color: 'black'
});

console.log(rodFedAMJ);
//Boa Vista
var rodFedBVA = L.geoJSON(rodFedBoaVista, {
    color: 'black'
});

console.log(rodFedBVA);

//Bonfim
var rodFedBOM = L.geoJSON(rodFedBonfim, {
    color: 'black'
});

console.log(rodFedBOM);

//Canta
var rodFedCTA = L.geoJSON(rodFedCanta, {
    color: 'black'
});

console.log(rodFedCTA)

//Caracarai
var rodFedCAI = L.geoJSON(rodFedCaracarai, {
    color: 'black'
});

console.log(rodFedCAI);

//Caroebe
var rodFedCAB = L.geoJSON(rodFedCaroebe, {
    color: 'black'
});

console.log(rodFedCAB);

//Iracema
var rodFedIRA = L.geoJSON(rodFedIracema, {
    color: 'black'
});

console.log(rodFedIRA);

//Mucajai
var rodFedMUC = L.geoJSON(rodFedMucajai, {
    color: 'yellow'
});

console.log(rodFedMUC);

//Normandia
var rodFedNOD = L.geoJSON(rodFedNormandia, {
    color: 'byellow'
});

console.log(rodFedNOD);

//Pacaraima
var rodFedPAC = L.geoJSON(rodFedPacaraima, {
    color: 'yellow'
});

console.log(rodFedPAC);

//Rorainopolis
var rodFedRPO = L.geoJSON(rodFedRorainopolis, {
    color: 'yellow'
});

console.log(rodFedRPO);

//Sao Joao da Baliza
var rodFedSJB = L.geoJSON(rodFedSJBaliza, {
    color: 'yellow'
});

console.log(rodFedSJB);

//Sao Luiz do Anaua
var rodFedSLA = L.geoJSON(rodFedSLAnaua, {
    color: 'yellow'
});
console.log(rodFedSLA);

var rodoviasFederais = L.layerGroup([rodFedAMJ, rodFedBVA, rodFedBOM, rodFedCTA, rodFedCAI, rodFedCAB, rodFedIRA, rodFedMUC, rodFedNOD, rodFedPAC, rodFedRPO, rodFedSJB, rodFedSLA]);