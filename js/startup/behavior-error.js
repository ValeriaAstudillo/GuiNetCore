function behaviorError(codeError, parameters) {
    switch (codeError) {
        case "SEG002": //Clave Generada
        case "SEG005": //Clave Expirada
            StartUp.UserNameLogin = $('#txtUserName').dxTextBox('option', 'value');
            if (parameters.viewCall == "changeUser")
                StartUp.app.navigate('changePasswordSys');
            else
                StartUp.app.navigate('changePassword');
            break;
        case "SEG004": //Clave Incorrecta
            if (parameters.viewCall == "changePassword") {
                $('#txtPassword').dxTextBox('option', 'value', undefined);
                $('#txtPassword').dxTextBox('instance').focus();
            } else {
                $('#txtNewPassword').dxTextBox('instance').reset();
                $('#txtNewPassword').dxTextBox('instance').focus();
                $('#txtCurrentPassword').dxTextBox('instance').reset();
                $('#txtCurrentPassword').dxTextBox('instance').focus();
            }
            break;
        case "LOGIN": //Error al loguear al usuario
            break;
        case "SEG016": //Contraseña no cumple la expresión regular
        case "SEG017": //Contraseña ya se ingresó anteriormente
            $('#txtNewPassword').dxTextBox('instance').reset();
            $('#txtNewPassword').dxTextBox('instance').focus();
            $('#txtCurrentPassword').dxTextBox('instance').reset();
            $('#txtCurrentPassword').dxTextBox('instance').focus();
            break;
        case "SEG001": //Usuario Inactivo
        case "SEG003": //Usuario Bloqueado Automáticamente
        case "SEG006": //Usuario no existe
        case "SEG007": //Usuario conectado en otra máquina
        case "SEG008": //Usuario Bloqueado
        case "SEG010": //Perfil fuera de periodo de acceso permitido
        case "SEG011": //Perfil Inactivo
        case "SEG012": //Perfil no tiene opciones válidas
        case "SEG013": //Usuario no tiene perfil
        default:
            $('#btnResetear').click();
            break;
    }
}