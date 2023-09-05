//código para arquivos geojson municipais
//Alto Alegre
var rodMunALG = L.geoJSON(rodVicMunAltoAlegre, {
    color: '#3bad81'
});
//Amajari
var rodMunAMJ = L.geoJSON(rodVicMunAmajari, {
    color: '#3bad81'
});
//Boa Vista
var rodMunBVA = L.geoJSON(rodVicMunBoaVista, {
    color: '#3bad81'
});
//Bonfim
var rodMunBOM = L.geoJSON(rodVicMunBonfim, {
    color: '#3bad81'
});
//Canta
var rodMunCTA = L.geoJSON(rodVicMunCanta, {
    color: '#3bad81'
});
//Caracarai
var rodMunCAI = L.geoJSON(rodVicMunCaracarai, {
    color: '#3bad81'
});
//Caroebe
var rodMunCAB = L.geoJSON(rodVicMunCaroebe, {
    color: '#3bad81'
});
//Iracema
var rodMunIRA = L.geoJSON(rodVicMunIracema, {
    color: '#3bad81'
});
//Mucajai
var rodMunMUC = L.geoJSON(rodVicMunMucajai, {
    color: '#3bad81'
});
//Normandia
var rodMunNOD = L.geoJSON(rodVicMunNormandia, {
    color: '#3bad81'
});
//Pacaraima
var rodMunPAC = L.geoJSON(rodVicMunPacaraima, {
    color: '#3bad81'
});
//Rorainopolis
var rodMunRPO = L.geoJSON(rodVicMunRorainopolis, {
    color: '#3bad81'
});
//Sao Joao da Baliza
var rodMunSJB = L.geoJSON(rodVicMunSJBaliza, {
    color: '#3bad81'
});
//Sao Luiz do Anaua
var rodMunSLA = L.geoJSON(rodVicMunSLAnaua, {
    color: '#3bad81'
});
//Uiramuta
var rodMunUTA = L.geoJSON(rodVicMunUiramuta, {
    color: '#3bad81'
});

var rodoviasMunicipais = L.layerGroup([rodMunALG, rodMunAMJ, rodMunBVA, rodMunBOM, rodMunCTA, rodMunCAI, rodMunCAB, rodMunIRA, rodMunMUC, rodMunNOD, rodMunPAC, rodMunRPO, rodMunSJB, rodMunSLA, rodMunUTA]);
console.log(rodoviasMunicipais);