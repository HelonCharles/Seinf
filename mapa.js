var map = L.map(document.getElementById('mapDIV'), {
    center: [2.81954, -60.6714],
    zoom: 7
    });

var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    
});

var google = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

rodoviasMunicipais.addTo(map);
rodoviasFederais.addTo(map);
rodoviasEstaduais.addTo(map);

console.log(rodoviasFederais);

var mapas = {"Mapas":{
    'OpenStreetMap': osm,
    'Google': google}
};

var rodovias = {"Rodovias":{
    'Federais (BRs)': rodoviasFederais,
    'Estaduais (RRs)': rodoviasEstaduais,
    'Municipais (Vicinais)': rodoviasMunicipais}
};

var pontes = {

}


L.control.groupedLayers(mapas, null).addTo(map);
L.control.groupedLayers(null, rodovias).addTo(map);
L.control.layers(null, null, pontes).addTo(map);
    
    
    
    