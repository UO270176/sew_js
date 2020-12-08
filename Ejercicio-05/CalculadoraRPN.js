class CalculadoraRPN {

    constructor() {
        this.first = 1;
        this.mr = false;
        this.pila = new Array();
    }

    mostrar() {
        if (this.pila.length != 0) {
            var stringPila = "";
			stringPila+="<p>Pila de operaciones</p><ol>";
            for (var i in this.pila) {
                stringPila += "<li>" + this.pila[i] + "</li>";
            }
            stringPila += "</ol>";
            return stringPila;
        } else
            return '';
    }

    botonClearClick() {
        this.pila = new Array();
        document.getElementById('linea').value = '';
        document.getElementById('pila').innerHTML = '<p>Pila de operaciones</p>';
        this.first = 1;
        this.mr = false;
    }

    enter() {
        if (document.getElementById("linea").value.length == 0) {
            this.pila.push('0');
            document.getElementById("linea").value = "";
            document.getElementById('pila').innerHTML = this.mostrar();
        }
        else {
            this.pila.push(document.getElementById("linea").value);
            document.getElementById("linea").value = "";
            document.getElementById('pila').innerHTML = this.mostrar();
        }
    }

    botonSumClick() {
        var x;
        var y;
        x = this.pila.pop();
        y = this.pila.pop();
        this.pila.push(parseFloat(x) + parseFloat(y));

        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';
    }

    botonMinusClick() {
        var x;
        var y;
        x = this.pila.pop();
        y = this.pila.pop();
        this.pila.push(parseFloat(x) - parseFloat(y));

        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';
    }

    botonMultClick() {
        var x;
        var y;
        x = this.pila.pop();
        y = this.pila.pop();
        this.pila.push(parseFloat(x) * parseFloat(y));

        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';
    }

    botonDivClick() {
        var x;
        var y;
        x = this.pila.pop();
        y = this.pila.pop();
        this.pila.push(parseFloat(y) / parseFloat(x));

        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';
    }

    botonClick(ch) {
        if (Boolean(this.first)) {
            document.getElementById('linea').value = ch;
            this.first = 0;
        } else
            document.getElementById('linea').value += ch;
    }

    botonX2Click() {
        var x = this.pila.pop();
        this.pila.push(Math.pow(x, 2));
        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';
    }
    botonXYClick() {
        document.getElementById('linea').value += '**';
    }
    botonLogClick() {
        var x = this.pila.pop();
        this.pila.push(Math.log(x));
        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';
    }
    botonExpClick() {
        var x = this.pila.pop();
        this.pila.push(Math.exp(x));
        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';

    }
    botonSinClick() {
        var x = this.pila.pop();
        this.pila.push(Math.sin(x));
        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';

    }
    botonCosClick() {
        var x = this.pila.pop();
        this.pila.push(Math.cos(x));
        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';

    }
    botonTanClick() {
        var x = this.pila.pop();
        this.pila.push(Math.tan(x));
        document.getElementById('pila').innerHTML = this.mostrar();
    }
    botonAcSinClick() {
        var x = this.pila.pop();
        this.pila.push(Math.asin(x));
        document.getElementById('pila').innerHTML = this.mostrar();

    }
    botonAcCosClick() {
        var x = this.pila.pop();
        this.pila.push(Math.acos(x));
        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';
    }
    botonAcTanClick() {
        var x = this.pila.pop();
        this.pila.push(Math.atan(x));
        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';
    }
    botonPiClick() {
        this.pila.push(Math.PI);
        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';
    }
    botonSignClick() {
        document.getElementById('linea').value = eval(-document.getElementById('linea').value);
    }

    botonSqrtClick() {
        var x = this.pila.pop();
        this.pila.push(Math.sqrt(x));
        document.getElementById('pila').innerHTML = this.mostrar();
        document.getElementById('linea').value = '';

    }


}
var calculadoraRPN = new CalculadoraRPN();
