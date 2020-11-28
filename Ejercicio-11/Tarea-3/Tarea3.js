"use strict";
class MapaEstaticoGoogle {
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
    getMapaEstaticoGoogle(dondeVerlo) {
        var ubicacion = document.getElementById(dondeVerlo);

        var datos = '<p>' + this.mensaje + '</p>';

        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        //URL: obligatoriamente https
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        //Parámetros
        // centro del mapa (obligatorio si no hay marcadores)
        var centro = "center=" + this.latitud + "," + this.longitud;
        //zoom (obligatorio si no hay marcadores)
        //zoom: 1 (el mundo), 5 (continentes), 10 (ciudad), 15 (calles), 20 (edificios)
        var zoom = "&zoom=15";
        //Tamaño del mapa en pixeles (obligatorio)
        var tamaño = "&size=800x600";
        //Escala (opcional)
        //Formato (opcional): PNG,JPEG,GIF
        //Tipo de mapa (opcional)
        //Idioma (opcional)
        //region (opcional)
        //marcadores (opcional)
        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        //rutas. path (opcional)
        //visible (optional)
        //style (opcional)
        var sensor = "&sensor=false";

        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        ubicacion.innerHTML = datos + "<img src='" + this.imagenMapa + "'/>";
    }
}
var miMapa = new MapaEstaticoGoogle();
