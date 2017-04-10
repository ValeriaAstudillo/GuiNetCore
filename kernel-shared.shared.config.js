// NOTE object below must be a valid JSON
window.Kernel_Shared = $.extend(true, window.Kernel_Shared, {
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
    IpMaquina: '',
    HostName: '',
    WebApiSecurity: "http://localhost/Api/Security",
    WebApiConfiguration: "http://localhost/Api/Configuration",
    WebApiCampaign: "http://localhost/Api/Campaign",
    WebApiUncouple: "http://localhost/Api/Uncouple",
    WebApiFlow: "http://localhost/Api/Flow",
    CurrentView: 'index',
    Version: '1.0.0.0',
    template: {
        Metronic:{
            login: '/views/startup/metronic/login-metronic.html',
            layout: '/index-metronic.html',
            name: 'metronic'
        },
        Porto: {
            login: '/views/startup/porto/login-porto.html',
            layout: '/index-porto.html',
            name: 'porto'
        },
        Omega: {
            login: '/views/startup/omega/login-omega.html',
            layout: '/index-omega.html',
            name: 'omega'
        },
        Forest: {
            login: '/index.html',
            layout: '/index-app.html',
            name: 'forest'
        }
    },
    plantilla: {},
    module: {
        Security: {
            code: 'SGS',
            text: 'Seguridad',
            namespace: undefined
        },
        Campaign: {
            code: 'CAM',
            text: 'Campa�a',
            namespace: undefined
        },
        Configuration: {
            code: 'CFG',
            text: 'Configuracion',
            namespace: undefined
        },
        StartUp: {
            code: 'STP',
            text: 'Inicio',
            namespace: undefined
        },
        Uncouple: {
            code: 'DSC',
            text: 'Desacople',
            namespace: undefined
        }
    },
    currentModule: undefined,
    currentDev: undefined
});

$.getJSON("http://jsonip.com?callback=?", function (data) {
    Kernel_Shared.IpMaquina = data.ip;
})
