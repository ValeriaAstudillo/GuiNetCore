﻿/// <reference path="js/globalize.js" />
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
            InputDateAt: 'Ingrese la Fecha Hasta',
            DateOutRange: 'El valor de la fecha está fuera del rango establecido.',
            ErrorRangeDate: "Rango de fechas incorrectas",
            DateFromGreatherThanDateAt: 'La Fecha Desde debe ser menor a la Fecha Hasta',
            DateFromGreaterThanAdmissionDate: 'La Fecha Desde debe ser mayor a la Fecha de Ingreso',
            DateFromLessThanDepartureDate: 'La Fecha Desde debe ser menor a la Fecha de Salida',
            DateAtLessThanDepartureDate: 'La Fecha Hasta debe ser menor a la Fecha de Salida',
            DateAtGreatherThanDateFrom: 'La Fecha Hasta debe ser mayor a la Fecha Desde',
            DateAtGreatherThanAdmissionDate: 'La Fecha Hasta debe ser mayor a la Fecha de Ingreso',
            InvalidDate: 'La fecha establecida es inválida.',
            UserHasProfileOffice: 'El usuario ya tiene un Perfil en esta oficina'
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
            DisplayToAssign: 'Pantallas a Asignar',
            CodeProfile: 'Código Perfil',
            NameProfile: 'Nombre Perfil',
            EffectiveDate: 'Fecha de Vigencia',
            Institution: 'Institución',
            AssignTransaction: 'Asignar Transacción',
            ManagementProfiles: 'Administración de Perfiles',
            AdmissionDate: 'Fecha Ingreso',
            DepartureDate: 'Fecha Salida',
            AccessStation: 'Estación Acceso',
            DateLastAccess: 'Fecha Último Acceso',
            StateConnection: 'Estado Conexión',
            GenerateKey: 'Regenerar Clave',
            ManagementUsers: 'Administración de Usuarios',
            ProfileToAssign: 'Perfiles a asignar',
            UnlockUser: 'Desbloquear usuario',
            Offline: 'Desconectado',
            Online: 'Conectado',
            Lock: 'Bloqueado'
        },
        messages: {
            LoadingCatalogs: 'Cargando Catálogos',
            LoadingMessages: 'Cargando Mensajes',
            SearchingParameter: 'Consultando Parámetro',
            LoadingContries: 'Cargando Países',
            LoadingLocation: 'Cargando Ubicaciones',
            LoadingInstitutions: 'Cargando Instituciones',
            LoadingOffices: 'Cargando Oficinas',
            ChangingPassword: 'Cambiando Contraseña',
            EntrySistem: 'Validando Información del Usuario',
            InputingSystem: 'Ingresando al Sistema',
            SuccessTransaction: "TRANSACCIÓN REALIZADA SATISFACTORIAMENTE.",
            DangerTransaccion: "Transacción Rechazada",
            SelectSearch: "Seleccione el criterio de búsqueda",
            InputDataSearch: "Ingrese el dato de búsqueda",
            ErrorData: "Existen campos llenados incorrectamente",
            ErrorSaving: "Error al guardar los datos",
            FailedQuery: "Error al consultar los datos",
            SureDeleteRecord: "¿Seguro de Eliminar este registro?",
            SureMakeAction: '¿Seguro de Realizar esta acción?',
            NoData: "Sin Datos Disponibles",
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
            CancelAllChanges: 'Deshacer Cambios',
            CancelRowChanges: 'Cancelar',
            ConfirmDeleteMessage: '¿Está seguro de eliminar este registro?',
            ConfirmDeleteTitle: 'Eliminar Registro',
            DeleteRow: 'Eliminar',
            EditRow: 'Editar',
            SaveAllChanges: 'Guardar Cambios',
            SaveRowChanges: 'Guardar',
            ValidationCancelChanges: 'Cancelar Cambios',
            NotMatchPassword: 'La nueva contraseña no coincide con la contraseña de confirmación.',
            SuccessChangePassword: 'La contraseña del usuario {0} ha sido cambiada satisfactoriamente. La contraseña ha sido enviada al correo {1}',
            UserLoginSelectProfile: 'El usuario {0} ya ha iniciado su sesión con el perfil {1} de la oficina {2}',
            UserHasOnlyProfile: 'Usuario {0} posee un único perfil.',
            InvalidCredentials: 'Usuario o contraseña inválida',
            ForgetPassword: '¿Olvidó su contraseña?',
            AuthenticateWith: 'Autenticar con',
            InpupEmailResetPass: 'Ingrese su dirección de email para resetear su contraseña',
            LockDisplay: 'Pantalla Bloqueada',
            SelectOffice: 'Seleccione una oficina.',
            SelectProfile: 'Seleccione un perfil.',
            SureSignOut: '¿Está seguro de cerrar su sesión actual?',
            InputOneDisplay: 'Ingrese al menos una Pantalla.',
            InputOneProfile: 'Ingrese al menos un Perfil.',
            SureUnlockUser: '¿Está seguro de desbloquear el usuario {0}?',
            UnlockUserSuccess: 'El usuario {0} ha sido desbloqueado satisfactoriamente',
            SureGenerateKey: '¿Está seguro de Regenerar la Clave del usuario {0}?',
            SelectAtLessProfile: 'Seleccione al menos un Perfil para el usuario {0}',
            GenerateKeySuccess: 'Se ha regenerado la clave del usuario {0} satisfactoriamente'
        }
    }
})