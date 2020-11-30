class LectorKML {
    constructor() {
        this.validaNavegador();
    }


    leerArchivoTexto(files) {

        var archivo = files[0];
        var errorArchivo = document.getElementById("errorLectura");

        if (archivo.name.split(".")[1].toLowerCase() != "kml") {
            errorArchivo.innerText = "Error : ¡¡¡ Archivo no válido !!!";
            return;
        } else {
            var lector = new FileReader();
            lector.onload = function (evento) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(lector.result, "application/xml");

                for (var c of doc.childNodes[0].childNodes[0].children) {

                    var nombre = c.children[0].textContent;

                    var coordHitos = c.children[1].children[2].textContent;
                    var arraycord = coordHitos.split("\n");

                    var polyline = [];


                    for (var i = 1; i < arraycord.length - 1; i++) {

                        var coordenadas = arraycord[i].split(",");
                        var longitud = parseFloat(coordenadas[0]);
                        var latitud = parseFloat(coordenadas[1]);
                        var posicion = { lat: latitud, lng: longitud };

                        polyline.push(posicion);

                        var marcador = new google.maps.Marker({
                            position: posicion,
                            title: nombre,
                            map: lectorKML.map
                        });

                        var indicador = new google.maps.InfoWindow({
                            content: nombre,
                        });

                        marcador.indicador = indicador;
                        marcador.addListener("click", function () {
                            this.indicador.open(lectorKML.map, this);
                        });
                    }

                    var ruta = new google.maps.Polyline({
                        path: polyline,
                        geodesic: true,
                        strokeColor: "#FF0000",
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });

                    ruta.setMap(lectorKML.map);

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
    lectorKML.map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 10
    });
}

var lectorKML = new LectorKML();





