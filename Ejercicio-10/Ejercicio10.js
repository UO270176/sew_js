class Traductor {

    constructor() {

    }

    traduce(texto, target) {

        var text = $('#' + texto).val();
        var idioma = this.detectarIdioma(text);
        var idiomaDestino = $('#' + target).val();
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "accept-encoding": "application/gzip",
                "x-rapidapi-key": "0662d35972msh319564c551edbf8p143cb1jsnd5b8fe7cdfda",
                "x-rapidapi-host": "google-translate1.p.rapidapi.com"
            },
            "data": {
                "q": text,
                "source": idioma,
                "target": idiomaDestino
            }
        };


        $.ajax(settings).done(function (response) {
            $("pre").text(JSON.stringify(response, null, 2));
            var result = '';
            var traduc = response.data.translations;

            for (var t in traduc) {
                result += traduc[0].translatedText;
            }

            $("#resultado").text(result);
        });


    }

    detectarIdioma(text) {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "accept-encoding": "application/gzip",
                "x-rapidapi-key": "0662d35972msh319564c551edbf8p143cb1jsnd5b8fe7cdfda",
                "x-rapidapi-host": "google-translate1.p.rapidapi.com"
            },
            "data": {
                "q": text
            }
        };

        $.ajax(settings).done(function (response) {
            return response.data.detections[0].language;
        });
    }

}
var traductor = new Traductor();


