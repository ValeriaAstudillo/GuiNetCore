function AjaxPostService(WebRequest, addFunction, isAsync, esReconexion) {
    try {
        var ResponseAjaxCall = $.ajax({
            type: "POST",
            dataType: "json",
            scriptCharset: "utf-8",
            url: WebRequest.URL + '/api/' + WebRequest.Controller,
            data: WebRequest,
            success: function (data) {
                SuccessServiceCall(data, WebRequest, addFunction);
            },
            error: function (result) {
                ServiceFailed(result, WebRequest, addFunction, isAsync);
            },
            async: isAsync
        });
        if (isAsync == false) {
            var responseClaro = decrypt(ResponseAjaxCall.responseJSON);
            var ObjetoRespuesta = AnalizeServerResponse(JSON.parse(decodeURIComponent(escape(responseClaro))));
            return ObjetoRespuesta;
        }
    } catch (e) {
        throw e;
    }
}

function AjaxPostServiceMobile(MovilRequest, addFunction, isAsync, esReconexion) {
    try {
        var ResponseAjaxCall = $.ajax({
            type: "POST",
            dataType: "json",
            scriptCharset: "utf-8",
            url: Parameters.ServiceUri,
            data: MovilRequest,
            success: function (data) {
                SuccessServiceCall(data, MovilRequest, addFunction);
            },
            error: function (result) {
                ServiceFailed(result, MovilRequest, addFunction, isAsync);
            },
            async: isAsync
        });
    } catch (e) {
        throw e;
    }
}
