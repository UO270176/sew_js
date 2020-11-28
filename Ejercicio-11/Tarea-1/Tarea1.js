"use strict";
class Geolocalización {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
    }
    getPosicion(posicion) {
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
    }
    getLongitud() {
        return this.longitud;
    }
    getLatitud() {
        return this.latitud;
    }
    getAltitud() {
        return this.altitud;
    }
    verTodo(dondeVerlo) {
        var ubicacion = document.getElementById(dondeVerlo);
        var datos = '';
        datos += '<ul><li>Longitud: ' + this.longitud + ' grados</li>';
        datos += '<li>Latitud: ' + this.latitud + ' grados</li>';
        datos += '<li>Precisión de la latitud y longitud: ' + this.precision + ' metros</li>';
        datos += '<li>Altitud: ' + this.altitude + ' metros</li>';
        datos += '<li>Precisión de la altitud: ' + this.precisionAltitud + ' metros</li>';
        datos += '<li>Rumbo: ' + this.rumbo + ' grados</li>';
        datos += '<li>Velocidad: ' + this.velocidad + ' metros/segundo</li></ul>';
        ubicacion.innerHTML = datos;
    }
}
var miPosicion = new Geolocalización();