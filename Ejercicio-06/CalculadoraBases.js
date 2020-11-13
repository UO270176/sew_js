class CalculadoraBases {

    constructor() {
        this.first = 1;
        this.mr = false;
    }

    toBinarioClick() {
        var stack = new Array();
        var value = document.getElementById('resultado').value;
        this.botonClearClick();

        while (value != 1 && value != 0) {
            stack.push(value % 2);
            value = Math.floor(value / 2);
        }

        stack.push(value);

        while (stack.length != 0)
            document.getElementById('resultado').value += stack.pop();
    }


    toOctalClick() {

    }

    toHexClick() {

    }

    toDecimalClick() {

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
}
var calculadoraBases = new CalculadoraBases();