
function getSimInfo() {
    window.plugins.sim.getSimInfo(simSuccessCallback, simErrorCallback);
}

function simSuccessCallback(result) {
    console.log(result);
    infoSIM = result;
    if (deviceType === 'iPhone' || deviceType === 'iPad') {
        infoSIM.deviceId = DeviceInfo.DeviceUUID;
    }
    DeviceInfo.DeviceIMEI = infoSIM.deviceId;
    /*alert(
        "carrierName: " + result.carrierName+"\n"+
        "deviceId: " + result.deviceId+"\n"+
        "countryCode: " + result.countryCode+"\n"+
        "mcc: " + result.mcc+"\n"+
        "mnc: " + result.mnc+"\n"+
        "simSerialNumber: " + result.simSerialNumber+"\n"+
        "subscriberId: " + result.subscriberId + "\n"+
        "phoneNumber: " + result.phoneNumber+"\n"
        );*/
}

function simErrorCallback(error) {
    console.log(error);
}

// check permission
function hasReadPermission() {
    window.plugins.sim.hasReadPermission(successCallbackHasPermission, simErrorCallback);
}

var successCallbackHasPermission = function (valueHasPermission) {
    if (!valueHasPermission) {
        requestReadPermission();
    }
}

// request permission
function requestReadPermission() {
    // no callbacks required as this opens a popup which returns async
    window.plugins.sim.requestReadPermission();
}