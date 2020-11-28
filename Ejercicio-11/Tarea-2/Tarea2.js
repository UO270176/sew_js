"use strict";
class Geolocalización {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
    }
    getPosicion(posicion) {
        this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
    }
    verErrores(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                this.mensaje = "El usuario no permite la petición de geolocalización"
                break;
            case error.POSITION_UNAVAILABLE:
                this.mensaje = "Información de geolocalización no disponible"
                break;
            case error.TIMEOUT:
                this.mensaje = "La petición de geolocalización ha caducado"
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje = "Se ha producido un error desconocido"
                break;
        }
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
        var datos = '<p>' + this.mensaje + '</p>';
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