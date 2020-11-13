class CalculadoraBases {

    constructor() {
        this.first = 1;
        this.mode="decimal";
        this.modeDecimal();
    }

    modeDecimal() {
        this.toDecimal();
        this.activarDecimal();
        this.mode = "decimal";
        this.deseleccionarBotones();
        document.getElementById('decimal').style = "border: outset red;";
    }

    modeBinario() {
        this.toBinario();
        this.activarBinario();
        this.mode = "binario";
        this.deseleccionarBotones();
        document.getElementById('binario').style = "border: outset red;";
    }

    modeOctal() {
        this.toOctal();
        this.activarOctal();
        this.mode = "octal";
        this.deseleccionarBotones();
        document.getElementById('octal').style = "border: outset red;";
    }

    modeHex() {
        this.activarTodo();
        this.toHex();
        this.mode = "hex";
        this.deseleccionarBotones();
        document.getElementById('hex').style = "border: outset red;";
    }

    deseleccionarBotones() {
        document.getElementById('decimal').style = "";
        document.getElementById('binario').style = "";
        document.getElementById('octal').style = "";
        document.getElementById('hex').style = "";
       
    }

    decimalToBinario() {
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
    toDecimal() {
        switch (this.mode) {
            case "binario":
                this.binarioToDecimal();
                break;
            case "octal":
                this.octalToDecimal();
                break;
            case "hex":
                this.hexToDecimal();
                break;
            default:
                break;
        }
    }
    toBinario() {
        switch (this.mode) {
            case "decimal":
                this.decimalToBinario();
                break;
            case "octal":
                this.octalToDecimal();
                this.decimalToBinario();
                break;
            case "hex":
                this.hexToDecimal();
                this.decimalToBinario();
                break;
            default:
                break;
        }
    }
    toOctal() {
        switch (this.mode) {
            case "decimal":
                this.decimalToOctal();
                break;
            case "binario":
                this.binarioToDecimal();
                this.decimalToOctal();
                break;
            case "hex":
                this.hexToDecimal();
                this.decimalToOctal();
                break;
            default:
                break;
        }
    }
    toHex() {
        switch (this.mode) {
            case "decimal":
                this.decimalToHex();
                break;
            case "binario":
                this.binarioToDecimal();
                this.decimalToHex();
                break;
            case "octal":
                this.octalToDecimal();
                this.decimalToHex();
                break;
            default:
                break;
        }
    }

    binarioToDecimal() {
        var result = 0;
        var value = document.getElementById('resultado').value;
        for (var i in value) {
            switch (value.charAt(i)) {
                case '0':
                    break;
                case '1':
                    result += Math.pow(2, value.length - i - 1);
                    break;
            }
        }
        document.getElementById('resultado').value = result;
    }

    octalToDecimal() {
        var result = 0;
        var value = document.getElementById('resultado').value;
        for (var i in value) {
            switch (value.charAt(i)) {
                case '0':
                    break;
                default:
                    result += parseInt(value.charAt(i)) * Math.pow(8, value.length - i - 1);
                    break;
            }
        }
        document.getElementById('resultado').value = result;
    }

    hexToDecimal() {
        var result = 0;
        var value = document.getElementById('resultado').value;
        for (var i in value) {
            switch (value.charAt(i)) {
                case '0':
                    break;
                case 'A':
                    result += 10 * Math.pow(16, value.length - i - 1);
                    break;
                case 'B':
                    result += 11 * Math.pow(16, value.length - i - 1);
                    break;
                case 'C':
                    result += 12 * Math.pow(16, value.length - i - 1);
                    break;
                case 'D':
                    result += 13 * Math.pow(16, value.length - i - 1);
                    break;
                case 'E':
                    result += 14 * Math.pow(16, value.length - i - 1);
                    break;
                case 'F':
                    result += 15 * Math.pow(16, value.length - i - 1);
                    break;
                default:
                    result += parseInt(value.charAt(i)) * Math.pow(16, value.length - i - 1);
                    break;
            }
        }
        document.getElementById('resultado').value = result;
    }

    decimalToOctal() {
        var stack = new Array();
        var value = document.getElementById('resultado').value;
        this.botonClearClick();

        while (value != 1 && value != 0) {
            stack.push(value % 8);
            value = Math.floor(value / 8);
        }

        stack.push(value);

        while (stack.length != 0)
            document.getElementById('resultado').value += stack.pop();
    }

    decimalToHex() {
        var stack = new Array();
        var value = document.getElementById('resultado').value;
        this.botonClearClick();

        while (value != 1 && value != 0) {
            switch (value % 16) {
                case 10:
                    stack.push('A');
                    break;
                case 11:
                    stack.push('B');
                    break;
                case 12:
                    stack.push('C');
                    break;
                case 13:
                    stack.push('D');
                    break;
                case 14:
                    stack.push('E');
                    break;
                case 15:
                    stack.push('F');
                    break;
                default:
                    stack.push(value % 16);
                    break;
            }

            value = Math.floor(value / 16);
        }

        stack.push(value);

        while (stack.length != 0)
            document.getElementById('resultado').value += stack.pop();
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
    }

    activarBinario() {
        this.desactivarTodo();
        document.getElementById('1').disabled = false;
        document.getElementById('0').disabled = false;
    }
    activarOctal() {
        this.desactivarTodo();
        document.getElementById('7').disabled = false;
        document.getElementById('6').disabled = false;
        document.getElementById('5').disabled = false;
        document.getElementById('4').disabled = false;
        document.getElementById('3').disabled = false;
        document.getElementById('2').disabled = false;
        document.getElementById('1').disabled = false;
        document.getElementById('0').disabled = false;

    }
    activarDecimal() {
        this.desactivarTodo();
        document.getElementById('9').disabled = false;
        document.getElementById('8').disabled = false;
        document.getElementById('7').disabled = false;
        document.getElementById('6').disabled = false;
        document.getElementById('5').disabled = false;
        document.getElementById('4').disabled = false;
        document.getElementById('3').disabled = false;
        document.getElementById('2').disabled = false;
        document.getElementById('1').disabled = false;
        document.getElementById('0').disabled = false;
    }
    desactivarTodo() {
        document.getElementById('9').disabled = true;
        document.getElementById('8').disabled = true;
        document.getElementById('7').disabled = true;
        document.getElementById('6').disabled = true;
        document.getElementById('5').disabled = true;
        document.getElementById('4').disabled = true;
        document.getElementById('3').disabled = true;
        document.getElementById('2').disabled = true;
        document.getElementById('1').disabled = true;
        document.getElementById('0').disabled = true;

        document.getElementById('A').disabled = true;
        document.getElementById('B').disabled = true;
        document.getElementById('C').disabled = true;
        document.getElementById('D').disabled = true;
        document.getElementById('E').disabled = true;
        document.getElementById('F').disabled = true;
    }
    activarTodo() {
        document.getElementById('9').disabled = false;
        document.getElementById('8').disabled = false;
        document.getElementById('7').disabled = false;
        document.getElementById('6').disabled = false;
        document.getElementById('5').disabled = false;
        document.getElementById('4').disabled = false;
        document.getElementById('3').disabled = false;
        document.getElementById('2').disabled = false;
        document.getElementById('1').disabled = false;
        document.getElementById('0').disabled = false;

        document.getElementById('A').disabled = false;
        document.getElementById('B').disabled = false;
        document.getElementById('C').disabled = false;
        document.getElementById('D').disabled = false;
        document.getElementById('E').disabled = false;
        document.getElementById('F').disabled = false;
    }
}
var calculadoraBases = new CalculadoraBases();