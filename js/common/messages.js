/// <reference path="js/globalize.js" />
/// <reference path="js/globalize.min.js" />
/// <reference path="js/globalize/currency.min.js" />
/// <reference path="js/globalize/date.min.js" />
/// <reference path="js/globalize/message.min.js" />
/// <reference path="js/globalize/number.min.js" />

Globalize.loadMessages({
    'en': {
        validations: {
            required: "El campo (nameControl) es obligatorio",
            numeric: "El campo (nameControl) solo permite números",
            stringLength: "El campo (nameControl) solo admite entre (minLength) y (maxLength) caracteres",
            range: "El campo (nameControl) no debe ser menor a (rangomenor) ni mayor a (rangomayor)",
            pattern: "El campo (nameControl) no coincide con el patrón establecido",
            email: "El campo (nameControl) no es un email válido",
            compare: "El campo (nameControl) no coincide con el campo (campocomparar)",
            custom: "El campo (nameControl) no se válido",
            vced: "El campo Identificación no es válido",
            vruc: "El campo RUC no es válido",
            vtelfcon: "El campo teléfono debe seguir el siguiente formato: ",
            vcel: "El campo celular debe seguir el siguiente formato: ",
            vpass: "El campo pasporte no es válido",
            InputDateFrom: 'Ingrese la Fecha Desde',
            DateOutRange: 'El valor de la fecha está fuera del rango establecido.',
            ErrorRangeDate: "Rango de fechas incorrectas",
            DateFromGreatherThanDateAt: 'La Fecha Desde debe ser menor a la Fecha Hasta',
            InvalidDate: 'La fecha establecida es inválida.',
        },
        tags: {
            Summary_Avg: 'Promedio',
            Summary_Other_Avg: 'Promedio de',
            Summary_Count: 'Total',
            Summary_Max: 'Máximo',
            Summary_Other_Max: 'Máximo de',
            Summary_Min: 'Mínimo',
            Summary_Other_Min: 'Mínimo de',
            Summary_Sum: 'Sumatoria',
            Summary_Other_Sum: 'Sumatoria de',
            Button_Accept: 'Aceptar',
            CountSelect: 'Total Seleccionados=',
            Button_Cancel: 'Cancelar',
            Button_Find: 'Buscar',
            Button_Save: 'Guardar',
            Button_Back: 'Regresar',
            Button_Edit: 'Editar',
            Button_New: 'Nuevo',
            Button_Print: 'Imprimir',
            Button_Search: 'Buscar',
            Button_Send: 'Enviar',
            Button_Export: 'Exportar',
            Button_Refresh: 'Refrescar',
            IsActive: 'Es Activo',
            IsMasive: 'Es Masivo',
            Yes: 'SI',
            No: 'NO',
            Email: 'Correo Electrónico',
            TypeDNI: 'Tipo Identificación',
            Identification: 'Identificación',
            FirstName: 'Primer Nombre',
            MiddleName: 'Segundo Nombre',
            LastName: 'Apellido Paterno',
            MotherLastName: 'Apellido Materno',
            FullName: 'Nombre Completo',
            Change: 'Cambiar',
            SaveData: 'Guardar Información',
            ErrorMessage: 'Mensaje de Error',
            Actions: 'Acciones',
            Edit: 'Editar',
            Delete: 'Eliminar',
            Error: 'ERROR',
            ErrorData: 'Datos Incorrectos',
            ColumnChooser: 'Selector de Columnas',
            Institution: 'Institución',
            StandardSearch: 'Criterios de Búsqueda',
            ValueSearch: 'Valor Búsqueda',
            applyFilterText: 'Aplicar Filtro',
            betweenEndText: 'Fin',
            betweenStartText: 'Inicio',
            Equal: 'Igual',
            NotEqual: 'No Igual',
            LessThan: 'Menor que',
            LessEqualThan: 'Menor o igual que',
            GreaterThan: 'Mayor que',
            GreaterEqualThan: 'Mayor o igual que',
            StartsWith: 'Comienza con',
            Contains: 'Contiene',
            NotContains: 'No Contiene',
            EndsWith: 'Termina con',
            Between: 'Entre',
            Reset: 'Restablecer',
            All: 'Todos',
            Filters: 'Filtros',
            Office: 'Oficina',
            Profile: 'Perfil',
            DateFrom: 'Fecha Desde',
            DateAt: 'Fecha Hasta',
            ChangePassword: 'Cambiar Contraseña',
            CurrentPassword: 'Contraseña Actual',
            NewPassword: 'Nueva Contraseña',
            ConfirmPassword: 'Confirme Contraseña',
            User: 'Usuario',
            Location: 'Ubicación',
            UserName: 'User Name',
            IPHost: 'IP Estación',
            NameHost: 'Estación',
            ServerServices: 'Servidor de Servicios',
            ServerBDD: 'Servidor Base Datos',
            Data: 'Datos',
            WorkStation: 'Estación de Trabajo',
            Version: 'Versión',
            MyProfile: 'Mi Perfil',
            ChangeOfficeProfile: 'Cambiar Oficina/Perfil',
            ChangeUser: 'Cambiar Usuario',
            LockScreen: 'Bloquear Pantalla',
            SignOut: 'Cerrar Sesión',
            SignIn: 'Iniciar Sesión',
            Password: 'Contraseña',
            RememberPassword: 'Recordar',
            Unlock: 'Desbloquear',
            RecoverPassword: 'Restablecer Contraseña',
            LockDisplay: 'Pantalla Bloqueada',
            Login: 'Inicio de Sesión',
            VigencyDate: 'Fecha de Vigencia',
            IsGeneral: 'Es General',
            DisplayToAssign: 'Pantallas a asignar',
        },
        messages: {
            LoadingCatalogs: 'Cargando catálogos',
            LoadingMessages: 'Cargando mensajes',
            SearchingParameter: 'Consultando parámetro',
            LoadingContries: 'Cargando países',
            LoadingLocation: 'Cargando ubicaciones',
            LoadingInstitutions: 'Cargando instituciones',
            LoadingOffices: 'Cargando oficinas',
            ChangingPassword: 'Cambiando contraseña',
            EntrySistem: 'Validando información del usuario',
            InputingSystem: 'Ingresando al sistema',
            SuccessTransaction: "TRANSACCIÓN REALIZADA SATISFACTORIAMENTE.",
            DangerTransaccion: "Transacción rechazada",
            SelectSearch: "Seleccionar el criterio de búsqueda",
            InputDataSearch: "Ingresar el dato de búsqueda",
            ErrorData: "Existen campos llenados incorrectamente",
            ErrorSaving: "Error al guardar los datos",
            FailedQuery: "Error al consultar los datos",
            SureDeleteRecord: "¿Eliminar este registro?",
            SureMakeAction: '¿Realizar esta acción?',
            NoData: "Sin datos disponibles",
            Loading: 'Cargando',
            LoadingData: 'Cargando Información',
            ConsultingData: 'Consultando Información... Espere por favor',
            SavingData: 'Guardando Información',
            CannotReadError: 'No se pudo interprepar el mensaje de Error. Puede ser un problema de error de conexión de la red.',
            NoEventControl: 'No existe el evento establecido para el control.',
            DragColumnGrid: 'Arrastre una columna aquí para ocultarla.',
            ReleaseRefresh: 'Suelte para actualizar',
            PullDownRefresh: 'Arrastre hacia abajo para actualizar',
            Refreshing: 'Actualizando',
            AddRow: 'Agregar una Fila',
            CancelAllChanges: 'Deshacer cambios',
            CancelRowChanges: 'Cancelar',
            ConfirmDeleteMessage: '¿Eliminar este registro?',
            ConfirmDeleteTitle: 'Eliminar registro',
            DeleteRow: 'Eliminar',
            EditRow: 'Editar',
            SaveAllChanges: 'Guardar cambios',
            SaveRowChanges: 'Guardar',
            ValidationCancelChanges: 'Cancelar cambios',
            NotMatchPassword: 'La nueva contraseña no coincide con la contraseña de confirmación.',
            SuccessChangePassword: 'La contraseña del usuario {0} ha sido cambiada satisfactoriamente. La contraseña ha sido enviada al correo {1}',
            UserLoginSelectProfile: 'El usuario {0} ya ha iniciado su sesión con el perfil {1} de la oficina {2}',
            UserHasOnlyProfile: 'Usuario {0} posee un único perfil.',
            InvalidCredentials: 'Usuario o contraseña inválida',
            ForgetPassword: '¿Olvidó su contraseña?',
            AuthenticateWith: 'Autenticar con',
            InpupEmailResetPass: 'Ingresar su dirección de correo-e para restablecer su contraseña',
            LockDisplay: 'Pantalla bloqueada',
            SelectOffice: 'Seleccionar una oficina.',
            SelectProfile: 'Seleccionar un perfil.',
            SureSignOut: '¿Cerrar su sesión actual?',
            InputOneDisplay: 'Ingresar al menos una pantalla.',
            WaitPlease: 'Un momento por favor',
            RetryConnection: 'Reintentando conexión.',
            ClosingSystem: 'Cerrando el sistema',
            DontSetCurrentModule: 'No se ha establecido el módulo actual'
        }
    }
})

/*****************************************************************************************************************************************************************************************************************************************************************
--------------------------------------------------------------A C C E S O  E T I Q U E T A S / M E N S A J E S / V A L I D A C I O N E S--------------------------------------------------------------------------------------------------------------------------
*****************************************************************************************************************************************************************************************************************************************************************/

/*
    Acceso a Mensajes
        Accede al mensaje establecido en el archivo de recursos de acuerdo a su código de mensaje
    Parámetros:
        messageCode: Código de Mensaje al cual se desea acceder.
*/
CORE_MESSAGE = function (messageCode) {
    try {
        return Globalize('en').formatMessage('messages/' + messageCode);
    } catch (e) {
        return messageCode;
    }
}

CORE_MESSAGE_ADD = function (messageCode, valuesReplace) {
    try {
        var message = Globalize('en').messageFormatter('messages/' + messageCode);
        return message(valuesReplace);
    } catch (e) {
        return messageCode;
    }

}

/*
    Acceso a Etiquetas
        Accede a la etiqueta establecida en el archivo de recursos de acuerdo a su código.
    Parámetros:
        tagCode: Código de Etiqueta al cual se desea acceder.
*/
CORE_TAG = function (tagCode) {
    try {
        return Globalize('en').formatMessage("tags/" + tagCode);
    } catch (e) {
        return tagCode;
    }
}

/*
    Acceso a Validaciones
        Accede a la validación establecida en el archivo de recursos de acuerdo al tipo de validación.
    Parámetros:
        typeValidation: Validación al cual se desea acceder.
*/
CORE_VALIDATION = function (typeValidation) {
    try {
        return Globalize('en').formatMessage("validations/" + typeValidation);
    } catch (e) {
        return typeValidation;
    }
}

