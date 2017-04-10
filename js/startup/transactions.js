function LoadScreenStartup(transactionCode) {
    var messageLoad = CORE_MESSAGE('WaitPlease');
    switch (transactionCode) {
        case 'ENTSYS':
            messageLoad = CORE_MESSAGE('ValidatingCredentials');
            break;
        case 'INPSYS':
            messageLoad = CORE_MESSAGE('EnteringSystem');
            break;
        default:
            break;
    }

    initProcess(messageLoad);
}

var transactionsStartUp = {
    EntrySystem: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "EntrySystem", TransactionCode: "ENTSYS", Parameters: { Clave: '', NombreUsuario: '', IpMaquina: '', HostName: '' } },
    LoginSystem: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "LoginSystem", TransactionCode: "INPSYS", Parameters: { userName: '' } },
    InputSystemLogin: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "INPUTSYSTEMLOGIN", TransactionCode: "INPUTSYSTEMLOGIN", Parameters: { userName: '' } },
    ChangePassword: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "CHANGEPASSWORD", TransactionCode: "CHANGEPASSWORD", Parameters: { UserName: '', ContraseniaActual: '', NuevaContrasenia: '', ViewCall: '' } },
    ChangeUser: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "CHANGEUSER", TransactionCode: "CHANGEUSER", Parameters: { userOption: {}, userNameChange: '', viewCall: '' } },
    CloseSystem: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "CLOSESYSTEM", TransactionCode: "CLOSESYSTEM", Parameters: { userName: '' } },
    SaveUserLog: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "SAVEUSERLOG", TransactionCode: "SAVEUSERLOG", Parameters: { user: {}, stateConnection: 0, actionLog: 0 } },
}

var EntrySystem = function (optionsUser, addFunction) {
    try {
        var transaction = Object.create(transactionsStartUp.EntrySystem);
        transaction.Parameters.Clave = optionsUser.Clave;
        transaction.Parameters.NombreUsuario = optionsUser.NombreUsuario;
        transaction.Parameters.IpMaquina = optionsUser.IpMaquina;
        transaction.Parameters.HostName = optionsUser.HostName;
        SendPostRequestToService(transaction, addFunction, LoadScreenStartup);
    } catch (e) {

    }
}

var LoginSystem = function (userName, addFunction) {
    try {
        var transaction = Object.create(transactionsStartUp.LoginSystem);
        transaction.Parameters.userName = userName;
        SendPostRequestToService(transaction, addFunction, LoadScreenStartup);
    } catch (e) {

    }
}

var InputSystemLogin = function (userName, addFunction) {
    try {
        var transaction = Object.create(transactionsStartUp.InputSystemLogin);
        transaction.Parameters.userName = userName;
        SendPostRequestToService(transaction, addFunction, LoadScreenStartup);
    } catch (e) {

    }
}

/*
    Registra el log de usuario
*/
var SaveUserLog = function (user, stateConnection, actionLog, addFunction) {
    try {
        var transaction = Object.create(transactionsStartUp.SaveUserLog);
        transaction.Parameters.user = user;
        transaction.Parameters.stateConnection = stateConnection;
        transaction.Parameters.actionLog = actionLog;
        SendPostRequestToService(transaction, addFunction, LoadScreenStartup);
    } catch (e) {

    }
}

/*
    Cambia la contraseña del usuario
*/
var ChangePassword = function (userName, oldPassword, newPassword, viewCall, addFunction) {
    try {
        var transaction = Object.create(transactionsStartUp.ChangePassword);
        transaction.Parameters.UserName = userName;
        transaction.Parameters.ContraseniaActual = oldPassword;
        transaction.Parameters.NuevaContrasenia = newPassword;
        transaction.Parameters.ViewCall = viewCall;
        SendPostRequestToService(transaction, addFunction, LoadScreenStartup);
    } catch (e) {

    }
}

/*
    Transacción para Cambiar de Usuario
*/
var ChangeUser = function (userOption, userNameChange, viewCall, addFunction) {
    try {
        var transaction = Object.create(transactionsStartUp.ChangeUser);
        transaction.Parameters.userOption = userOption;
        transaction.Parameters.userNameChange = userNameChange;
        transaction.Parameters.viewCall = viewCall;
        SendPostRequestToService(transaction, addFunction, LoadScreenStartup);
    } catch (e) {

    }
}

/*
    Cierra el sistema
*/
var CloseSystem = function (userName, addFunction) {
    try {
        var transaction = Object.create(transactionsStartUp.CloseSystem);
        transaction.Parameters.userName = userName;
        SendPostRequestToService(transaction, addFunction, LoadScreenStartup);
    } catch (e) {

    }
}

