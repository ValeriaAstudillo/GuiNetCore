function LoadScreenCore(RequestWeb, esReconexion) {
    var messageLoad = CORE_MESSAGE('WaitPlease');
    switch (RequestWeb.TransactionCode) {
        case "CONFIG001":
            messageLoad = CORE_MESSAGE('LoadingCatalogs');
            break;
        case "CONFIG002":
            messageLoad = CORE_MESSAGE('LoadingMessages');
            break;
        case "CONFIG003":
            messageLoad = CORE_MESSAGE('SearchingParameter');
            break;
        case "CONFIG004":
            messageLoad = CORE_MESSAGE('LoadingContries');
            break;
        case "CONFIG005":
        case "CONFIG006":
        case "CONFIG007":
        case "CONFIG008":
        case "CONFIG009":
        case "CONFIG010":
        case "CONFIG011":
            messageLoad = CORE_MESSAGE('LoadingLocation');
            break;
        case "CONFIG012":
            messageLoad = CORE_MESSAGE('LoadingInstitutions');
            break;
        case "CONFIG013":
        case "CONFIG014":
            messageLoad = CORE_MESSAGE('LoadingOffices');
            break;
        default:
            break;
    }
    if (esReconexion && esReconexion == true)
        messageLoad = CORE_MESSAGE('RetryConnection');
    initProcess(messageLoad);
}

var transactionsCore = {
    GetCatalogsByCode: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtiene catálogos por código", TransactionCode: "CONFIG001", Parameters: { codeData: '' } },
    GetMessagesByCode: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtiene mensajes por código", TransactionCode: "CONFIG002", Parameters: { codeData: '' } },
    GetParametersByCode: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtiene parámetros por código", TransactionCode: "CONFIG003", Parameters: { codeData: '' } },
    GetCountries: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtiene países", TransactionCode: "CONFIG004", Parameters: { } },
    GetLocation1ByCountry: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtiene ubicación geográfica 1 por país", TransactionCode: "CONFIG005", Parameters: { idCountry: 0 } },
    GetLocation2ByIdLocation1: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtiene ubicación geográfica 2 por el id de ubicación geográfica 1", TransactionCode: "CONFIG006", Parameters: { idLocation: 0 } },
    GetLocation2ByCodeLocation1: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtener Ubicación Geográfica 2 por código Ubicacion Geográfica 1", TransactionCode: "CONFIG007", Parameters: { codeLocation: '' } },
    GetLocation3ByIdLocation2: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtiene ubicación geográfica 3 por el id de ubicación geográfica 2", TransactionCode: "CONFIG008", Parameters: { idLocation: 0 } },
    GetLocation3ByCodeLocation2: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtener Ubicación Geográfica 3 por código Ubicacion Geográfica 2", TransactionCode: "CONFIG009", Parameters: { codeLocation: '' } },
    GetLocation4ByIdLocation3: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtiene ubicación geográfica 4 por el id de ubicación geográfica 3", TransactionCode: "CONFIG010", Parameters: { idLocation: 0 } },
    GetLocation4ByCodeLocation3: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtener Ubicación Geográfica 4 por código Ubicacion Geográfica 3", TransactionCode: "CONFIG011", Parameters: { codeLocation: '' } },
    GetActiveInstitutions: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtiene las instituciones activas", TransactionCode: "CONFIG012", Parameters: { } },
    GetAllOffices: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtiene todas las oficinas", TransactionCode: "CONFIG013", Parameters: {} },
    GetOfficesByInstitution: { URL: Kernel_Shared.WebApiConfiguration, Controller: "Configuration", TransactionDescription: "Obtiene todas las oficinas dada su institución", TransactionCode: "CONFIG014", Parameters: { idInstitution: 0} },
}

/*
    Obtiene catálogos por su código
*/
var GetCatalogsByCode = function (codeCatalog, addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetCatalogsByCode);
        transaction.Parameters.codeData = codeCatalog;
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene un mensaje por su código
*/
var GetMessagesByCode = function (codeMessage, addFunction) {
    try {
        var transaction = Object.create(transactions.GetMessagesByCode);
        transaction.Parameters.codeData = codeMessage;
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene un parámetro por su código
*/
var GetParametersByCode = function (codeParameter, addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetParametersByCode);
        transaction.Parameters.codeData = codeParameter;
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene todos los países
*/
var GetCountries = function (addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetCountries);
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene ubicaciones geográficas 1 por país
*/
var GetLocation1ByCountry = function (idCountry, addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetLocation1ByCountry);
        transaction.Parameters.idCountry = idCountry;
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene ubicaciones geográficas 2 por id ubicación geográfica 1
*/
var GetLocation2ByIdLocation1 = function (idLocation1, addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetLocation2ByIdLocation1);
        transaction.Parameters.idLocation = idLocation1;
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene ubicaciones geográficas 2 por código ubicación geográfica 1
*/
var GetLocation2ByCodeLocation1 = function (codeLocation1, addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetLocation2ByCodeLocation1);
        transaction.Parameters.codeLocation = codeLocation1;
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene ubicaciones geográficas 3 por id ubicación geográfica 2
*/
var GetLocation3ByIdLocation2 = function (idLocation2, addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetLocation3ByIdLocation2);
        transaction.Parameters.idLocation = idLocation2;
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene ubicaciones geográficas 3 por código ubicación geográfica 2
*/
var GetLocation3ByCodeLocation2 = function (codeLocation2, addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetLocation3ByCodeLocation2);
        transaction.Parameters.codeLocation = codeLocation2;
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene ubicaciones geográficas 4 por id ubicación geográfica 3
*/
var GetLocation4ByIdLocation3 = function (idLocation3, addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetLocation4ByIdLocation3);
        transaction.Parameters.idLocation = idLocation3;
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene ubicaciones geográficas 4 por código ubicación geográfica 3
*/
var GetLocation4ByCodeLocation3 = function (codeLocation3, addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetLocation4ByCodeLocation3);
        transaction.Parameters.codeLocation = codeLocation3;
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene todas las instituciones activas
*/
var GetActiveInstitutions = function (addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetActiveInstitutions);
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene todas las oficinas
*/
var GetAllOffices = function (addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetAllOffices);
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}

/*
    Obtiene las oficinas de una institución
*/
var GetOfficesByInstitution = function (idInstitution, addFunction) {
    try {
        var transaction = Object.create(transactionsCore.GetOfficesByInstitution);
        transaction.Parameters.idInstitution = idInstitution;
        SendPostRequestToService(transaction, addFunction, LoadScreenCore);
    } catch (e) {

    }
}