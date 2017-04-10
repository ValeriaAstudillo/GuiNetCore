
var intentosConexion = 0;
var Request;

function SendPostRequestToService(WebRequest, addFunction, LoadScreen, platForm) {
    Request = WebRequest;
    if (WebRequest.AppVersion != undefined && Parameters)
        WebRequest.AppVersion = Parameters.AppVersion;
    WebRequest.Parameters = encrypt3DES(JSON.stringify(WebRequest.Parameters));
    var isAsync = true;
    if (LoadScreen)
        LoadScreen(WebRequest.TransactionCode);
    if (deviceType === undefined || deviceType === "null") {
        if(!platForm || platForm == 'Web')
            return AjaxPostService(WebRequest, addFunction, isAsync);
        else
            return AjaxPostServiceMobile(WebRequest, addFunction, isAsync);
    } else {
        return SSLPinningPost(WebRequest, addFunction, isAsync);
    }
}

function SuccessServiceCall(data, CoreRequest, addFunction) {
    parameters = JSON.parse(decrypt(CoreRequest.Parameters));
    var responseClaro = decrypt(data);
    var result = JSON.parse(decodeURIComponent(escape(responseClaro)));
    if (addFunction) {
        $.extend(result, { esRegistro: parameters.esRegistro });
        var isOk = addFunction.handlerError(result, parameters);
        if (isOk)
            addFunction(result.ResponseElements);
    }
    stopProcess();
}


function AnalizeServerResponse(result) {
    try {
        if (result.TransactionResponseCode != '00') {
            throw result;
        }
        return result.ResponseElements;
    } catch (e) {
        throw e;
    }
}

function ServiceFailed(result, WebRequest, addFunction, isAsync) {
    stopProcess();
    intentosConexion++;
    if (intentosConexion < 2) {
        SendPostRequestToService(WebRequest, addFunction, function () {
            LoadScreenCore(Request, true);
        });
    } else {
        intentosConexion = 0;
        showErrorMessage('Error de Conexión', 'Error de conexión con el servidor, por favor intente más tarde. ' + result.status + ' ' + result.statusText);
        //Type = null; var Url = null; Data = null; ContentType = null; DataType = null; ProcessData = null;
    }
}