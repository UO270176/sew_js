class HtmlEditor {
    constructor() {
    }
    mostrar(elem) {
        $(elem).show();
    }
    ocultar(elem) {
        $(elem).hide();
    }
    modificar(elem, newValue) {
        $(elem).text($('#' + newValue).val());
    }
    addParrafo(id, texto) {
        $('#' + id).after('<p>' + $('#' + texto).val() + '</p>');
    }
    delete(elem) {
        $(elem).remove();
    }
    recorrido() {
        $("*", document.body).each(function () {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode("Etiqueta padre : <" + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName + "> valor : "));
        });
    }
    sumarFilas() {
        $("table tr td").each(function () {
            var celda = $.trim($(this).text());
        });
    }
}
var htmlEditor = new HtmlEditor();