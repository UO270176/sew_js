class Pizarra {

    constructor() {

        window.color = 'black';
        window.grosor = 5;

        // Seleccionamos el id del elemento 
        window.canvas = document.querySelector('canvas');

        // Contexto del canva para operaciones 2d 
        window.ctx = canvas.getContext('2d');
        // Colocamos el curos en su posición inicial 
        window.coordenadas = { x: 0, y: 0 };

        // Con esta variable se inicia deshabilitado el dibujado en el Canvas 
        window.dibujar = false;
        // Esperamos el contenido del elemento de ventana para hacer las operaciones 
        window.addEventListener('load', () => {

            this.redimensionar(); // Redimensionamos el tamaño del canvas al cargar la Página 
            document.addEventListener('mousedown', this.iniciarDibujado);
            document.addEventListener('mouseup', this.detenerDibujado);
            document.addEventListener('mousemove', this.dibujo);
            window.addEventListener('resize', this.redimensionar);
        });
    }

    // Redimensionamos el tamaño del canvas según el tamaño de la ventana 
    redimensionar() {
        window.ctx.canvas.width = window.innerWidth;
        window.ctx.canvas.height = window.innerHeight * 0.7;
    }

    // Habilitamos el dibujado en el Canvas  
    iniciarDibujado(event) {
        window.dibujar = true;
        window.coordenadas.x = event.clientX - window.canvas.offsetLeft;
        window.coordenadas.y = event.clientY - window.canvas.offsetTop;
    }

    // Detenemos el dibujado 
    detenerDibujado() {
        window.dibujar = false;
    }

    dibujo(event) {

        if (!window.dibujar) return;

        window.ctx.beginPath();

        window.ctx.lineWidth = window.grosor;

        // Trazo redondeado 
        window.ctx.lineCap = 'round';

        // Color del trazo del dibujo en el Canvas 
        window.ctx.strokeStyle = window.color;

        // El cursor para comenzar a dibujar se mueve a esta coordenada 
        window.ctx.moveTo(window.coordenadas.x, window.coordenadas.y);

        // La posición del cursor se actualiza a medida que movemos el mouse alrededor del Canvas 
        window.coordenadas.x = event.clientX - window.canvas.offsetLeft;
        window.coordenadas.y = event.clientY - window.canvas.offsetTop;

        // Se traza una línea desde el inicio 
        window.ctx.lineTo(window.coordenadas.x, window.coordenadas.y);

        // Dibujamos las líneas  
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
}
var pizarra = new Pizarra();