function ponerMarcador(latitud, longitud, titulo="") {
    new google.maps.Marker({
        position: {lat: latitud, lng: longitud},
        map,
        title: titulo
    })
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1.5,
        center: {lat: 30, lng: 0}
    })

    marker1 = ponerMarcador(6.217445, -75.558931, "Casa en Medellin")
    marker2 = ponerMarcador(22.310296, 39.101520, "KAUST")
    marker3 = ponerMarcador(59.272207, 18.072425, "Cada en Estocolmo")
}
