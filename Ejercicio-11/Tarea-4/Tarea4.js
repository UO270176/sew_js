"use strict";
class Mapa {
    initMap() {
        var akihabara = { lat: 35.702159, lng: 139.774335 };
        var mapaAkihabara = new google.maps.Map(document.getElementById('mapa'), { zoom: 8, center: akihabara });
        var marcador = new google.maps.Marker({ position: akihabara, map: mapaAkihabara });
    }
}
var mapaDinamicoGoogle = new Mapa();
