//código para arquivos geojson estaduais
//Alto Alegre
var rodEstALG = L.geoJSON(rodEstAltoAlegre);
//Amajari
var rodEstAMJ = L.geoJSON(rodEstAmajari);
//Boa Vista
var rodEstBVA = L.geoJSON(rodEstBoaVista, {
    color:'red'
});
//Bonfim
var rodEstBOM = L.geoJSON(rodEstBonfim);
//Canta
var rodEstCTA = L.geoJSON(rodEstCanta);
//Mucajai
var rodEstMUC = L.geoJSON(rodEstMucajai);
//Normandia
var rodEstNOD = L.geoJSON(rodEstNormandia);
//Pacaraima
var rodEstPAC = L.geoJSON(rodEstPacaraima);
//Uiramuta
var rodEstUTA = L.geoJSON(rodEstUiramuta);

var rodoviasEstaduais = L.layerGroup([rodEstALG, rodEstAMJ, rodEstBVA, rodEstBOM, rodEstCTA, rodEstMUC, rodEstNOD, rodEstPAC, rodEstUTA]);