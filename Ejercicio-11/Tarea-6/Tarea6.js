class Mapa {
    initMap() {
        var pos = {
            lat: 0,
            lng: 0
        }
        var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 2,
            center: pos,
            mapTypeId: google.maps.MapTypeId.GLOBE
        });

        mapaGeoposicionado.setCenter(pos);
        new google.maps.Marker({ position: pos, map: mapaGeoposicionado });

    }

    randomPos() {
        var pos;
        return pos = {
            lat: Math.round(Math.random() * (90 - (-90)) + (-90)),
            lng: Math.round(Math.random() * (180 - (-180)) + (-180))
        };
    }

    posicionAleatoria() {
        var pos = this.randomPos();
        var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 3,
            center: pos,
            mapTypeId: google.maps.MapTypeId.GLOBE
        });

        mapaGeoposicionado.setCenter(pos);
        new google.maps.Marker({ position: pos, map: mapaGeoposicionado });
    }

    buscar(lt, long) {

        var pos = {
            lat: parseFloat(document.getElementById(lt).value),
            lng: parseFloat(document.getElementById(long).value)
        }
        var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 3,
            center: pos,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        mapaGeoposicionado.setCenter(pos);
        new google.maps.Marker({ position: pos, map: mapaGeoposicionado });
    }
}
var miMapa = new Mapa();