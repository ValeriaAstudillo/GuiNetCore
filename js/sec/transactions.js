function LoadScreenSecurity(transactionCode) {
    var messageLoad = CORE_MESSAGE('WaitPlease');
    switch (transactionCode) {
        case 'GETUSERBYINSTITUTION':
        case 'GETALLUSERS':
            messageLoad = CORE_MESSAGE('LoadingUsers');
            break;
        case 'GETUSERBYDNI':
        case 'GETUSERBYUSERNAME':
            messageLoad = CORE_MESSAGE('SearchingUser');
            break;
        case 'CREATEUSER':
            messageLoad = CORE_MESSAGE('CreatingUser');
            break;
        case 'UPDATEUSER':
            messageLoad = CORE_MESSAGE('UpdatingUser');
            break;
        case 'GETALLPROFILES':
            messageLoad = CORE_MESSAGE('LoadingProfiles');
            break;
        case 'GETPROFILESUSER':
            messageLoad = CORE_MESSAGE('LoadingProfilesUser');
            break;
        case 'GETPROFILEBYCODE':
        case 'GETPROFILEBYID':
            messageLoad = CORE_MESSAGE('SearchingProfile');
            break;
        case 'CREATEPROFILE':
            messageLoad = CORE_MESSAGE('CreatingProfile');
            break;
        case 'UPDATEPROFILE':
            messageLoad = CORE_MESSAGE('UpdatingProfile');
            break;
        case 'INPSYS':
            messageLoad = CORE_MESSAGE('EnteringSystem');
            break;
        default:
            break;
    }
    initProcess(messageLoad);
}

var transactionsSecurity = {
    GetAllUsers: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETALLUSERS", TransactionCode: "GETALLUSERS", Parameters: {} },
    GetUsersByInstitution: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETUSERBYINSTITUTION", TransactionCode: "GETUSERBYINSTITUTION", Parameters: { idInstitution: 0 } },
    GetUserByDNI: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETUSERBYDNI", TransactionCode: "GETUSERBYDNI", Parameters: { dni: '' } },
    GetUserByUserName: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETUSERBYUSERNAME", TransactionCode: "GETUSERBYUSERNAME", Parameters: { userName: '' } },
    SaveUserLog: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "SAVEUSERLOG", TransactionCode: "SAVEUSERLOG", Parameters: { user: {}, stateConnection: 0, actionLog: 0 } }, //comment
    CreateUser: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "CREATEUSER", TransactionCode: "CREATEUSER", Parameters: { user: {} } },
    UpdateUser: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "UPDATEUSER", TransactionCode: "UPDATEUSER", Parameters: { user: {} } },
    GetAllProfiles: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETALLPROFILES", TransactionCode: "GETALLPROFILES", Parameters: {} },
    GetProfilesUser: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETPROFILESUSER", TransactionCode: "GETPROFILESUSER", Parameters: { userName: '' } },
    GetProfileById: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETPROFILEBYID", TransactionCode: "GETPROFILEBYID", Parameters: { idProfile: 0 } },
    GetProfileByCode: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETPROFILEBYCODE", TransactionCode: "GETPROFILEBYCODE", Parameters: { codeProfile: '' } },
    CreateProfile: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "CREATEPROFILE", TransactionCode: "CREATEPROFILE", Parameters: { profile: {} } },
    UpdateProfile: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "UPDATEPROFILE", TransactionCode: "UPDATEPROFILE", Parameters: { profile: {} } },
    GetScreenById: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETSCREENBYID", TransactionCode: "GETSCREENBYID", Parameters: { idScreen: 0 } },
    CreateScreen: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "CREATESCREEN", TransactionCode: "CREATESCREEN", Parameters: { screen: {} } },
    UpdateScreen: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "UPDATESCREEN", TransactionCode: "UPDATESCREEN", Parameters: { screen: {} } },
    GetStructureOptionMenu: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETSTRUCTUREOPTIONMENU", TransactionCode: "GETSTRUCTUREOPTIONMENU", Parameters: { idUser: 0, idOffice: 0, idProfile: 0 } },
    CreateMenu: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "CREATEMENU", TransactionCode: "CREATEMENU", Parameters: { menu: {} } },
    UpdateMenu: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "UPDATEMENU", TransactionCode: "UPDATEMENU", Parameters: { menu: {} } },
    UnlockUser: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "UNLOCKUSER", TransactionCode: "UNLOCKUSER", Parameters: { userName: '' } },
    GenerateKey: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GENERATEKEY", TransactionCode: "GENERATEKEY", Parameters: { userName: '' } },
    GetProfilesByInstitution: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETPROFILESBYINSTITUTION", TransactionCode: "GETPROFILESBYINSTITUTION", Parameters: { idInstitution: 0 } },
    GetScreenByProfile: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETSCREENBYPROFILE", TransactionCode: "GETSCREENBYPROFILE", Parameters: { idProfile: 0 } },
    GetScreenActives: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETSCREENSACTIVE", TransactionCode: "GETSCREENSACTIVE", Parameters: { } },
    GetUserProfileByUserName: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "GETUSERPROFILEBYUSERNAME", TransactionCode: "GETUSERPROFILEBYUSERNAME", Parameters: { userName: '' } },
    CreateUserProfile: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "CREATEUSERPROFILE", TransactionCode: "CREATEUSERPROFILE", Parameters: { userProfile: {} } },
    UpdateUserProfile: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "UPDATEUSERPROFILE", TransactionCode: "UPDATEUSERPROFILE", Parameters: { userProfile: {} } },
    ChangePassword: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "CHANGEPASSWORD", TransactionCode: "CHANGEPASSWORD", Parameters: { UserName: '', ContraseniaActual: '', NuevaContrasenia: '', ViewCall: '' } }, //comment
    ChangeUser: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "CHANGEUSER", TransactionCode: "CHANGEUSER", Parameters: { userOption: {}, userNameChange: '', viewCall: '' } }, //comment
    InputSystemLogin: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "INPUTSYSTEMLOGIN", TransactionCode: "INPUTSYSTEMLOGIN", Parameters: { userName: '' } },
    CloseSystem: { URL: Kernel_Shared.WebApiSecurity, Controller: "Seguridad", TransactionDescription: "CLOSESYSTEM", TransactionCode: "CLOSESYSTEM", Parameters: { userName: '' } }, //comment
}

/*
    Obtiene todos los usuarios del sistema
*/
var GetAllUsers = function (addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetAllUsers);
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene todos los usuarios por institución
*/
var GetUsersByInstitution = function (idInstitution, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetUsersByInstitution);
        transaction.Parameters.idInstitution = idInstitution;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene un usuario por su identificación
*/
var GetUserByDNI = function (dni, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetUserByDNI);
        transaction.Parameters.dni = dni;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene un usuario por su User Name
*/
var GetUserByUserName = function (userName, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetUserByUserName);
        transaction.Parameters.userName = userName;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Registra el log de usuario
*/
var SaveUserLog = function (user, stateConnection, actionLog, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.SaveUserLog);
        transaction.Parameters.user = user;
        transaction.Parameters.stateConnection = stateConnection;
        transaction.Parameters.actionLog = actionLog;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Crea un nuevo usuario
*/
var CreateUser = function (user, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.CreateUser);
        transaction.Parameters.user = user;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Actualiza un usuario existente
*/
var UpdateUser = function (user, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.UpdateUser);
        transaction.Parameters.user = user;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene todos los perfiles
*/
var GetAllProfiles = function (addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetAllProfiles);
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene los perfiles de un usuario determinado
*/
var GetProfilesUser = function (userName, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetProfilesUser);
        transaction.Parameters.userName = userName;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene un perfil dado su Id
*/
var GetProfileById = function (idProfile, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetProfileById);
        transaction.Parameters.idProfile = idProfile;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene un perfil dado su código
*/
var GetProfileByCode = function (codeProfile, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetProfileByCode);
        transaction.Parameters.codeProfile = codeProfile;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Crea un nuevo perfil
*/
var CreateProfile = function (profile, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.CreateProfile);
        transaction.Parameters.profile = profile;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Actualiza un perfil existente
*/
var UpdateProfile = function (profile, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.UpdateProfile);
        transaction.Parameters.profile = profile;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene una pantalla por su Id
*/
var GetScreenById = function (idScreen, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetScreenById);
        transaction.Parameters.idScreen = idScreen;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Crea una nueva pantalla
*/
var CreateScreen = function (screen, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.CreateScreen);
        transaction.Parameters.screen = screen;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Actualiza una pantalla existente
*/
var UpdateScreen = function (screen, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.UpdateScreen);
        transaction.Parameters.screen = screen;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene la estructura de menú opción
*/
var GetStructureOptionMenu = function (idUser, idOffice, idProfile, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetStructureOptionMenu);
        transaction.Parameters.idUser = idUser;
        transaction.Parameters.idOffice = idOffice;
        transaction.Parameters.idProfile = idProfile;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Crea una nueva opción de menú
*/
var CreateMenu = function (menu, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.CreateMenu);
        transaction.Parameters.menu = menu;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Actualiza una opción de menú existente
*/
var UpdateMenu = function (menu, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.UpdateMenu);
        transaction.Parameters.menu = menu;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Desbloquea un usuario
*/
var UnlockUser = function (userName, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.UnlockUser);
        transaction.Parameters.userName = userName;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Genera una clave a un usuario
*/
var GenerateKey = function (userName, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GenerateKey);
        transaction.Parameters.userName = userName;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene los perfiles por institución
*/
var GetProfilesByInstitution = function (idInstitution, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetProfilesByInstitution);
        transaction.Parameters.idInstitution = idInstitution;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene las pantallas por perfil
*/
var GetScreensByProfile = function (idProfile, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetScreenByProfile);
        transaction.Parameters.idProfile = idProfile;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene las pantallas activas
*/
var GetScreenActives = function (addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetScreenActives);
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Obtiene la relación de usuario y perfil dado el user name del usuario
*/
var GetUserProfileByUserName = function (userName, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.GetUserProfileByUserName);
        transaction.Parameters.userName = userName;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Crea una relación de usuario perfil
*/
var CreateUserProfile = function (userProfile, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.CreateUserProfile);
        transaction.Parameters.userProfile = userProfile;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Actualiza la relación de usuario perfil
*/
var UpdateUserProfile = function (userProfile, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.UpdateUserProfile);
        transaction.Parameters.userProfile = userProfile;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Cambia la contraseña del usuario
*/
var ChangePassword = function (userName, oldPassword, newPassword, viewCall, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.ChangePassword);
        transaction.Parameters.UserName = userName;
        transaction.Parameters.ContraseniaActual = oldPassword;
        transaction.Parameters.NuevaContrasenia = newPassword;
        transaction.Parameters.ViewCall = viewCall;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Transacción para Cambiar de Usuario
*/
var ChangeUser = function (userOption, userNameChange, viewCall, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.ChangeUser);
        transaction.Parameters.userOption = userOption;
        transaction.Parameters.userNameChange = userNameChange;
        transaction.Parameters.viewCall = viewCall;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
     } catch (e) {

    }
}

var InputSystemLogin = function (userName, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.InputSystemLogin);
        transaction.Parameters.userName = userName;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}

/*
    Cierra el sistema
*/
var CloseSystem = function (userName, addFunction) {
    try {
        var transaction = Object.create(transactionsSecurity.CloseSystem);
        transaction.Parameters.userName = userName;
        SendPostRequestToService(transaction, addFunction, LoadScreenSecurity);
    } catch (e) {

    }
}