class Calculadora {

    Calculadora() {
        this.first = 1;
        this.mr = false;
    }

    calc() {
        this.first = 1;
        var x;
        x = document.getElementById("resultado").value;
        try {
            document.getElementById("resultado").value = eval(x);
        }
        catch (err) {
            document.getElementById("resultado").value = "Error = " + err;
        }
    }

    botonClick(ch) {
        if (Boolean(this.first)) {
            document.getElementById('resultado').value = ch;
            this.first = 0;
        } else
            document.getElementById('resultado').value += ch;
    }

    botonClearClick() {
        document.getElementById('resultado').value = '';
        this.first = 1;
        this.mr = false;
    }

    botonMRAddClick() {
        if (!Boolean(this.mr)) {
            this.mr = document.getElementById('resultado').value;
        } else {
            var x;
            x = document.getElementById("resultado").value;
            try {
                this.mr = eval(this.mr + '+' + x);
            }
            catch (err) {
                document.getElementById("resultado").value = "Error = " + err;
            }
        }
    }

    botonMRMinusClick() {
        var x;
        x = document.getElementById("resultado").value;
        try {
            this.mr = eval(this.mr + '-' + x);
        }
        catch (err) {
            document.getElementById("resultado").value = "Error = " + err;
        }
    }

    botonMRCClick() {
        document.getElementById("resultado").value = this.mr;
    }
}
class CalculadoraCientifica extends Calculadora {

    constructor() {
        super();
    }
    
    botonX2Click() {
        document.getElementById('resultado').value = Math.pow(document.getElementById('resultado').value, 2);
    }
    botonXYClick() {
        document.getElementById('resultado').value += '**';
    }
    botonLogClick() {
        document.getElementById('resultado').value = Math.log(document.getElementById('resultado').value);
    }
    botonExpClick() {
        document.getElementById('resultado').value = Math.exp(document.getElementById('resultado').value);
    }
    botonSinClick() {
        document.getElementById('resultado').value = Math.sin(document.getElementById('resultado').value);
    }
    botonCosClick() {
        document.getElementById('resultado').value = Math.cos(document.getElementById('resultado').value);
    }
    botonTanClick() {
        document.getElementById('resultado').value = Math.tan(document.getElementById('resultado').value);
    }
    botonAcSinClick() {
        document.getElementById('resultado').value = Math.asin(document.getElementById('resultado').value);
    }
    botonAcCosClick() {
        document.getElementById('resultado').value = Math.acos(document.getElementById('resultado').value);
    }
    botonAcTanClick() {
        document.getElementById('resultado').value = Math.atan(document.getElementById('resultado').value);
    }
    botonPiClick() {
        document.getElementById('resultado').value += Math.PI;
    }
    botonSignClick() {
            document.getElementById('resultado').value = eval(-document.getElementById('resultado').value);
    }
    boton10XClick() {
        document.getElementById('resultado').value = Math.pow(10, document.getElementById('resultado').value);
    }
    botonSqrtClick() {
        document.getElementById('resultado').value = Math.sqrt(document.getElementById('resultado').value);
    }


}

var calculadoraCientifica = new CalculadoraCientifica();
