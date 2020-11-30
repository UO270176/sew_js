class LectorGeoJSON {
    constructor() {
        this.validaNavegador();
    }


    leerArchivoTexto(files) {

        var archivo = files[0];
        var errorArchivo = document.getElementById("errorLectura");

        if (archivo.name.split(".")[1].toLowerCase() != "geojson") {
            errorArchivo.innerText = "Error : ¡¡¡ Archivo no válido !!!";
            return;
        } else {
            var lector = new FileReader();
            lector.onload = function (evento) {
                var doc = JSON.parse(lector.result);

                for (var c of doc.features) {

                    var nombre = c.properties.name;

                    var coordHitos =  c.geometry.coordinates;

                    var polyline = [];

                    for (var i = 0; i < coordHitos.length ; i++) {

                        var longitud = parseFloat(coordHitos[i][0]);
                        var latitud = parseFloat(coordHitos[i][1]);
                        var posicion = { lat: latitud, lng: longitud };

                        polyline.push(posicion);

                        var marcador = new google.maps.Marker({
                            position: posicion,
                            title: nombre,
                            map: lectorGeoJSON.map
                        });

                        var indicador = new google.maps.InfoWindow({
                            content: nombre,
                        });

                        marcador.indicador = indicador;
                        marcador.addListener("click", function () {
                            this.indicador.open(lectorGeoJSON.map, this);
                        });
                    }

                    var ruta = new google.maps.Polyline({
                        path: polyline,
                        geodesic: true,
                        strokeColor: "#FF0000",
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });

                    ruta.setMap(lectorGeoJSON.map);

                }
            }

            lector.readAsText(archivo);
        }

    }

    validaNavegador() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            //El navegador soporta el API File
            document.write("<p>Este navegador soporta el API File </p>");
        }
        else document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
    }

}

function initMap() {
    //Asturias
    var center = { lat: 43.473013, lng: -5.822196};
    lectorGeoJSON.map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 10
    });
}

var lectorGeoJSON = new LectorGeoJSON();





