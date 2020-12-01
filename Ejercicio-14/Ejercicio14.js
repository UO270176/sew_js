class Pizarra {

    constructor() {

        window.color = 'black';
        window.grosor = 5;

        window.canvas = document.querySelector('canvas');

        window.ctx = canvas.getContext('2d');

        window.coordenadas = { x: 0, y: 0 };

        window.dibujar = false;

        window.addEventListener('load', () => {

            this.redimensionar();
            document.addEventListener('mousedown', this.iniciarDibujado);
            document.addEventListener('mouseup', this.detenerDibujado);
            document.addEventListener('mousemove', this.dibujo);
            window.addEventListener('resize', this.redimensionar);
        });

        // Evento pantalla completa
        document.addEventListener("keydown", function (e) {
            if (e.keyCode == 13) {
                if (!document.fullscreenElement) {

                    document.documentElement.requestFullscreen();

                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                }
            }
        }, false);
    }



    redimensionar() {
        var data = window.ctx.getImageData(0, 0, window.ctx.canvas.width, window.ctx.canvas.height);
        window.ctx.canvas.width = window.innerWidth;
        window.ctx.canvas.height = window.innerHeight * 0.7;
        window.ctx.putImageData(data, 0, 0);
    }


    iniciarDibujado(event) {
        window.dibujar = true;
        window.coordenadas.x = event.clientX - window.canvas.offsetLeft;
        window.coordenadas.y = event.clientY - window.canvas.offsetTop;
    }


    detenerDibujado() {
        window.dibujar = false;
    }

    dibujo(event) {
        if (!window.dibujar) return;

        window.ctx.beginPath();

        window.ctx.lineWidth = window.grosor;

        window.ctx.lineCap = 'round';

        window.ctx.strokeStyle = window.color;

        window.ctx.moveTo(window.coordenadas.x, window.coordenadas.y);

        window.coordenadas.x = event.clientX - window.canvas.offsetLeft;
        window.coordenadas.y = event.clientY - window.canvas.offsetTop;

        window.ctx.lineTo(window.coordenadas.x, window.coordenadas.y);

        window.ctx.stroke();
    }

    cambiarColor(newColor) {
        window.color = newColor;
    }
    cambiarGrosor(newGrosor) {
        window.grosor = newGrosor;
    }
    limpiar() {
        window.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight * 0.7);
        document.getElementById('grosor').value = 5;
        new Pizarra();
    }

    pantallaCompleta() {
        var elem = document.getElementById("myvideo");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    }
    guardar() {
        var a = document.createElement("a");
        document.body.appendChild(a);

        var imageURI = window.canvas.toDataURL("image/jpg");
        a.href = imageURI;
        var fecha = new Date(Date.now());
        a.download = "pizarra_" + fecha.getDate() + "_" + fecha.getMonth() + "_" + fecha.getFullYear() + ".jpg";
        a.click();

        window.URL.revokeObjectURL(a);
        document.body.removeChild(a);
    }

    dropHandler(ev) {
        ev.preventDefault();
        if (ev.dataTransfer.items) {

            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                if (ev.dataTransfer.items[i].kind === 'file') {
                    var file = ev.dataTransfer.items[i].getAsFile();
                }
            }

            var img = new Image();
            img.src = file.name;
            img.onload = function () {
                window.ctx.drawImage(img, 0, 0);
            }

            this.removeDragData(ev);
        }
    }

    dragOverHandler(ev) {
        ev.preventDefault();
    }

    removeDragData(ev) {
        if (ev.dataTransfer.items) {
            ev.dataTransfer.items.clear();
        } else {
            ev.dataTransfer.clearData();
        }
    }
}
var pizarra = new Pizarra();