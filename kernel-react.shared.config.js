// NOTE object below must be a valid JSON
window.Kernel_React = $.extend(true, window.Kernel_React, {
    "config": {
        "endpoints": {
            "db": {
                "local": "",
                "production": ""
            }
        },
        "services": {
            "db": {
                "entities": {
                }
            }
        }
    },
    /* Parametros de conexion
        typeCommunication: tipo de conexion con el servidor.
        ServerWebApi: servidor al que se va a realizar la conexi�n.
    */
    typeCommunication: "ajax",
    ServerWebApi: "http://localhost/Api/",
    /*
        Acceso a metodos del servicio, de acuerdo a su numeracion
    */
    methods: {
        SaveUserLog: 7,
        ChangePassword: 33,
        ChangeUser: 34,
        InputSystemLogin: 35,
        CloseSystem: 36,
        UnLockScreen: 37
    },
    actionsLog: {
        LOCKUSER : 1,
        AUTOLOCK : 2,
        LOGIN : 3,
        LOGOUT : 4,
        UNLOCKUSER : 5,
        NOTUSER : 6,
        GENERATEKEY : 7,
        CHANGEPASSWORD : 8,
        CHANGEOFFICEPROFILE : 9
    },
    /* Datos para acceso a la maquina*/
    IpMaquina: '',
    HostName: '',

    /* Parametro para conexion con la Api
        SystemModules: modulos existentes del sistema.
        Modules: De acuerdo al modulo, se conecta a la WebApi y controlador del servicio.
    */
    SystemModules: {
        Seguridad: 'SEG',
        Configuracion: 'CON',
        },
    Modules: {
        Seguridad: {
                WebApi: 'Security',
                Controller: 'Security'
        },
        Configuracion: {
                WebApi: 'Configuration',
                Controller: 'Configuration'
        }
    },

    /*Datos informativos
        CurrentView: vista actual.
        Version: no cambia para Web.
    */
    CurrentView: 'index',
    Version: '1.0.0.0',

    /*Definicion de plantilla a utilizar*/
    plantilla: '',
    layoutPlantilla: ''
});
