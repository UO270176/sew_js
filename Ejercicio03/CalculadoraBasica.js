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

var calculadora = new Calculadora();
