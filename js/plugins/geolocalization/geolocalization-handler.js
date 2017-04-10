/*{ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };*/
var watchIDGeoLocalizacion = "";

var currentPosition = {
    Latitud: -0.1693638,
    Longitud: -78.4865797,
    PosicionInsertar: "[" + String(-0.1693638) + "," + String(-78.4865797) + "]",
    DummyPosition: true
}

function onSuccessGeoposition(position) {
    currentPosition = {
        Latitud: position.coords.latitude,
        Longitud: position.coords.longitude,
        PosicionInsertar: "[" + String(position.coords.latitude) + "," + String(position.coords.longitude) + "]",
        DummyPosition: false
    }
    stopLookPositions();
    stopProcess();
}

function onErrorGeoposition(error) {
    stopProcess();
    showNotificationError(CORE_MESSAGE('NoGPS'))
    currentPosition = {
        Latitud: -0.1693638,
        Longitud: -78.4865797,
        PosicionInsertar: "[" + String(-0.1693638) + "," + String(-78.4865797) + "]",
        DummyPosition: true
    }
}

function downLoadCurrentPosition(action) {
    initProcess('Obteniendo Posición');
    watchIDGeoLocalizacion = navigator.geolocation.getCurrentPosition(onSuccessGeoposition, onErrorGeoposition, { timeout: 30000, enableHighAccuracy: false });
    if (action)
        action(currentPosition);
    stopProcess();
}

function lookPositions() {
    watchIDGeoLocalizacion = navigator.geolocation.watchPosition(onSuccessGeoposition, onErrorGeoposition, { maximumAge: 3000, timeout: 30000, enableHighAccuracy: false });
}

function stopLookPositions() {
    navigator.geolocation.clearWatch(watchIDGeoLocalizacion);
}


function calculateAndDisplayRoute(directionsService, directionsDisplay, origin, destination) {
    directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}