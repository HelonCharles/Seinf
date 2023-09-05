<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapa</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" crossorigin=""></script>

    <!--API Maps JavaScript inline-->
    <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script>

    <!--GeodJson rodovias estaduais-->
    <script src="./GeoJson/rodoviasEstaduais/rodEstAltoAlegre.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstAmajari.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstBoaVista.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstBonfim.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstCanta.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstMucajai.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstNormandia.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstPacaraima.geojson"></script>
    <script src="./GeoJson/rodoviasEstaduais/rodEstUiramuta.geojson"></script>

    <!--GeodJson rodovias federais-->

    <script src="./GeoJson/rodoviasFederais/rodFedAmajari.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedBoaVista.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedBonfim.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedCanta.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedCaracarai.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedCaroebe.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedIracema.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedMucajai.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedNormandia.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedPacaraima.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedRorainopolis.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedSJBaliza.geojson"></script>
    <script src="./GeoJson/rodoviasFederais/rodFedSLAnaua.geojson"></script>

    

    <!--GeodJson rodovias municipais-->
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunAltoAlegre.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunAmajari.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunBoaVista.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunBonfim.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunCanta.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunCaracarai.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunCaroebe.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunIracema.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunMucajai.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunNormandia.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunPacaraima.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunRorainopolis.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunSJBaliza.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunSLAnaua.geojson"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/rodVicMunUiramuta.geojson"></script>

    <!--GeoJson municipios de RR-->
    <script src="./GeoJson/municipios/altoAlegre.geojson"></script>
    <script src="./GeoJson/municipios/amajari.geojson"></script>
    <script src="./GeoJson/municipios/boaVista.geojson"></script>
    <script src="./GeoJson/municipios/bonfim.geojson"></script>
    <script src="./GeoJson/municipios/canta.geojson"></script>
    <script src="./GeoJson/municipios/caracarai.geojson"></script>
    <script src="./GeoJson/municipios/caroebe.geojson"></script>
    <script src="./GeoJson/municipios/iracema.geojson"></script>
    <script src="./GeoJson/municipios/mucajai.geojson"></script>
    <script src="./GeoJson/municipios/normandia.geojson"></script>
    <script src="./GeoJson/municipios/pacaraima.geojson"></script>
    <script src="./GeoJson/municipios/rorainopolis.geojson"></script>
    <script src="./GeoJson/municipios/sjBaliza.geojson"></script>
    <script src="./GeoJson/municipios/slAnaua.geojson"></script>
    <script src="./GeoJson/municipios/uiramuta.geojson"></script>


    <!--Biblioteca Leaflet-->
    <link rel="stylesheet" href="./Leaflet/leaflet.groupedlayercontrol.css">
    <script src="./Leaflet/leaflet.groupedlayercontrol.js"></script>


    <style>
    #mapDIV {
        
        height: 1000px;
        min-width: 300px;
        max-width: 100%;
        border: solid 1px black;
    }
    </style>
</head>

<body>
    <div id='mapDIV'></div>
    
    <script src="./GeoJson/rodoviasEstaduais/codigosEst/rodEstaduais.js"></script>
    <script src="./GeoJson/rodoviasFederais/codigosFed/rodFederais.js"></script>
    <script src="./GeoJson/rodoviasVicMunicipais/codigosMun/rodMunicipais.js"></script>
    <script src="./GeoJson/municipios/codigos/municipios.js"></script>
    <script src="./mapa.js"></script>
 
   
</body>

</html>