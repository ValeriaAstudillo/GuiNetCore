function behaviorError(codeError, parameters) {
    debugger;
    switch (codeError) {
        case "FLW001": //Vista con path existente
            $('#txtPath').dxTextBox('instance').focus();
        default:
            $('#btnResetear').click();
            break;
    }
}