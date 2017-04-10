Function.prototype.handlerError = function (data, parameters) {
    var isOK = true;
    if (data) {
        if (data.TransactionResponseCode && data.TransactionResponseCode != '00') {
            showErrorMessage(CORE_TAG('DefaultTitle'), data.AditionalCoreMessage, function () {
                if (behaviorError)
                    behaviorError(data.TransactionResponseCode, parameters);
            });
            isOK = false;
        }

    }

    return isOK;
}
