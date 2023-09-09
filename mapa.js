var map = L.map(document.getElementById('mapDIV'), {
    center: [2.81954, -60.6714],
    zoom: 7
    });

var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    
}).addTo(map);

var google = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

/* Não é necessário essa parte do código

rodoviasMunicipais.addTo(map);
rodoviasFederais.addTo(map);
rodoviasEstaduais.addTo(map);*/

//O controle de mapas não deve ter o nome do grupo "Mapas"
var mapas = {
    'OpenStreetMap': osm,
    'Google': google
};

var municipios = {"Municípios":{'Alto Alegre': munAltoAlegre, 'Amajarí': munAmajari, 'Boa Vista': munBoaVista, 'Bonfim': munBonfim, 'Cantá': munCanta, 'Caracaraí': munCaracarai, 'Caroebe': munCaroebe, 'Iracema': munIracema, 'Mucajaí': munMucajai, 'Normandia': munNormandia, 'Pacaraima': munPacaraima, 'Rorainópolis': munRorainopolis, 'São João da Baliza': munSJBaliza, 'São Luiz do Anauá': munSLAnaua, 'Uiramutã': munUiramuta}
};

var rodovias = {"Rodovias":{
    'Federais (BRs)': rodoviasFederais,
    'Estaduais (RRs)': rodoviasEstaduais,
    'Municipais (Vicinais)': rodoviasMunicipais}
};

var pontes = {"Pontes": {
    'Pontes de Madeira': pontesMadeira, 'Pontes de Concreto': pontesConcreto}
};


L.control.groupedLayers(mapas, null).addTo(map);
L.control.groupedLayers(null, municipios).addTo(map);
L.control.groupedLayers(null, rodovias).addTo(map);
L.control.groupedLayers(null, pontes).addTo(map);
    
    
    
    