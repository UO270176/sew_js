class LectorArchivos {
    constructor() { }
    leerArchivoTexto(files) {
        //Solamente toma un archivo
        //var archivo = document.getElementById("archivoTexto").files[0];
        for (var c of files) {
            
            let archivo = c;

            var areaVisualizacion = document.getElementById("areaTexto");
            var errorArchivo = document.getElementById("errorLectura");

            let archivoProp = "";

            archivoProp += "<ul><li>Nombre del archivo: " + archivo.name + "</li>";
            archivoProp += "<li>Tamaño del archivo: " + archivo.size + " bytes" + "</li>";
            archivoProp += "<li>Tipo del archivo: " + archivo.type + "</li>";
            archivoProp += "<li>Fecha de la última modificación: " + archivo.lastModifiedDate + "</li>";
            archivoProp += "<li>Contenido del archivo de texto:" + "</li></ul>";
            
            //Solamente admite archivos de tipo texto
            var tipoTexto = /text.*/;
            var tipoJson = /json.*/;
            if (archivo.type.match(tipoTexto) || archivo.type.match(tipoJson)) {
                let lector = new FileReader();
                lector.onload = function (evento) {
                    //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
                    //La propiedad "result" es donde se almacena el contenido del archivo
                    //Esta propiedad solamente es válida cuando se termina la operación de lectura
                    areaVisualizacion.innerHTML += archivoProp;
                    areaVisualizacion.innerHTML += "<p>" + lector.result + "</p>";
                }
                lector.readAsText(archivo);

            }
            else {
                errorArchivo.innerText = "Error : ¡¡¡ Archivo no válido !!!";
            }
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

var lectorArchivos = new LectorArchivos();

