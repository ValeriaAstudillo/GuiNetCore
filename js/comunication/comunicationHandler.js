
var intentosConexion = 0;

function SendPostRequestToService(WebRequest, addFunction, isAsync, esReconexion) {
    WebRequest.Parameters = encrypt3DES(JSON.stringify(WebRequest.Parameters));
    if (isAsync == undefined)
        isAsync = true;
    LoadScreen(WebRequest, esReconexion);
    if (deviceType === undefined || deviceType === "null") {
        return AjaxPostService(WebRequest, addFunction, isAsync);
    } else {
        return SSLPinningPost(WebRequest, addFunction, isAsync);
    }
}

function SuccessServiceCall(data, MovilRequest, addFunction) {
    parameters = JSON.parse(decrypt(MovilRequest.Parameters));
    var responseClaro = decrypt(data);
    var result = JSON.parse(decodeURIComponent(escape(responseClaro)));
    if (addFunction) {
        $.extend(result, { esRegistro: parameters.esRegistro });
        var isOk = addFunction.handlerError(result);
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

function ServiceFailed(result, movilRequest, addFunction, isAsync) {
    stopProcess();
    intentosConexion++;
    if (intentosConexion < 2) {
        SendPostRequestToService(movilRequest, addFunction, isAsync, true);
    } else {
        intentosConexion = 0;
        showErrorMessage('Error de Conexión', 'Error de conexión con el servidor, por favor intente más tarde. ' + result.status + ' ' + result.statusText);
        //Type = null; var Url = null; Data = null; ContentType = null; DataType = null; ProcessData = null;
    }
}

//var callService = function (module, parameters, successFunction, isAsync, errorFunction, typeComunication) {
//    debugger;
//    if (typeComunication === undefined)
//        typeComunication = Kernel_Shared.typeComunication

//    var url = Kernel_Shared.ServerWebApi + getUrlServiceModule(module);

//    if (sessionStorage.Sesion)
//        parameters.Session = SesionWeb().Sesion;

//    switch (typeComunication) {
//        case typesComunication.AJAX:
//            if (isAsync == null)
//                isAsync = false;
//            paramsAjax.url = url;
//            paramsAjax.isAsync = isAsync;
//            paramsAjax.success = successFunction;
//            paramsAjax.error = errorFunction;
//            paramsAjax.beforeSend = function () {
//                initProcess(getLoadMessage(module, parameters.Method));
//            };
//            paramsAjax.data = parameters;
//            return ServiceAjax(paramsAjax);
//            break;
//        case typeComunication.SSLPINNING:
//            break;
//        default:
//            break;
//    }
//}


//var getUrlServiceModule = function (module) {
//    var url = '';
//    switch (module) {
//        case 'SEG':
//            url = Kernel_Shared.Modules.Seguridad.WebApi + '/api/' + Kernel_Shared.Modules.Seguridad.Controller;
//            break;
//        case 'CON':
//            url = Kernel_Shared.Modules.Configuracion.WebApi + '/api/' + Kernel_Shared.Modules.Configuracion.Controller;
//            break;
//        default:

//    }

//    return url;
//}

//var getLoadMessage = function (module, method) {
//    var messageLoad = CORE_MESSAGE('LoadingData');
//    if (module == Kernel_Shared.SystemModules.Seguridad) {
//        switch (method) {
//            case 1:
//            case 2:
//            case 5:
//            case 6:
//                messageLoad = CORE_MESSAGE('LoadingUsers');
//                break;
//            case 3:
//            case 4:
//                messageLoad = CORE_MESSAGE('SearchingUser');
//                break;
//            case 8:
//                messageLoad = CORE_MESSAGE('EntrySistem');
//                break;
//            case 9:
//                messageLoad = CORE_MESSAGE('CreatingUser');
//                break;
//            case 10:
//                messageLoad = CORE_MESSAGE('UpdatingUser');
//                break;
//            case 11:
//            case 12:
//            case 27:
//            case 30:
//                messageLoad = CORE_MESSAGE('LoadingProfiles');
//                break;
//            case 13:
//            case 14:
//                messageLoad = CORE_MESSAGE('SearchingProfile');
//                break;
//            case 15:
//                messageLoad = CORE_MESSAGE('CreatingProfile');
//                break;
//            case 16:
//                messageLoad = CORE_MESSAGE('UpdatingProfile');
//                break;
//            case 17:
//            case 28:
//                messageLoad = CORE_MESSAGE('SearchingScreen');
//                break;
//            case 18:
//                messageLoad = CORE_MESSAGE('CreatingScreen');
//                break;
//            case 19:
//                messageLoad = CORE_MESSAGE('UpdatingScreen');
//                break;
//            case 20:
//            case 21:
//            case 22:
//                messageLoad = CORE_MESSAGE('LoadingMenuOptions');
//                break;
//            case 23:
//                messageLoad = CORE_MESSAGE('CreatingMenu');
//                break;
//            case 24:
//                messageLoad = CORE_MESSAGE('UpdatingMenu');
//                break;
//            case 25:
//                messageLoad = CORE_MESSAGE('UnlockingUser');
//                break;
//            case 26:
//                messageLoad = CORE_MESSAGE('GeneratingKey');
//                break;
//            case 29:
//                messageLoad = CORE_MESSAGE('LoadingScreens');
//                break;
//            case 31:
//                messageLoad = CORE_MESSAGE('CreatingUserProfile');
//                break;
//            case 32:
//                messageLoad = CORE_MESSAGE('UpdatingUserProfile');
//                break;
//            case 34:
//                messageLoad = CORE_MESSAGE('ChangingUser');
//                break;
//            case 36:
//                messageLoad = CORE_MESSAGE('ClosingSystem');
//                break;
//            case 37:
//                messageLoad = CORE_MESSAGE('UnlockingScreen');
//                break;
//            default:
//                break;
//        }
//    } else if (module == Kernel_Shared.SystemModules.Configuracion) {
//        switch (method) {
//            case 1:
//                messageLoad = CORE_MESSAGE('LoadingCatalogs');
//                break;
//            case 2:
//                messageLoad = CORE_MESSAGE('LoadingMessages');
//                break;
//            case 3:
//                messageLoad = CORE_MESSAGE('SearchingParameter');
//                break;
//            case 4:
//                messageLoad = CORE_MESSAGE('LoadingContries');
//                break;
//            case 5:
//            case 6:
//            case 7:
//            case 8:
//            case 9:
//            case 10:
//            case 11:
//                messageLoad = CORE_MESSAGE('LoadingLocation');
//                break;
//            case 12:
//                messageLoad = CORE_MESSAGE('LoadingInstitutions');
//                break;
//            case 13:
//            case 14:
//                messageLoad = CORE_MESSAGE('LoadingOffices');
//                break;
//            case 33:
//                messageLoad = CORE_MESSAGE('ChangingPassword');
//                break;
//            case 34:
//                messageLoad = CORE_MESSAGE('InputingSystem');
//                break;
//            default:
//                break;
//        }
//    }

//    return messageLoad;
//}