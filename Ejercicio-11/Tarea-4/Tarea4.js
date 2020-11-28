"use strict";
var mapaDinamicoGoogle = new Object();
function initMap(){
    var akihabara = {lat: 35.702159, lng: 139.774335};
    var mapaAkihabara = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:akihabara});
    var marcador = new google.maps.Marker({position:akihabara,map:mapaAkihabara});
}
mapaDinamicoGoogle.initMap = initMap;