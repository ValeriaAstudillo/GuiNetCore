var Vibrate = function (timeMS) {
    navigator.vibrate(timeMS)
}


/*Pattern = [1000, 1000, 3000, 1000, 5000]*/
var VibratePattern = function (Pattern) {
    navigator.vibrate(Pattern);
}

var VibrateWithPattern = function (Pattern) {
    navigator.notification.vibrateWithPattern(Pattern);
}