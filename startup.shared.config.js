// NOTE object below must be a valid JSON
window.StartUp = $.extend(true, window.StartUp, {
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
    UserNameLogin: '',
});

//Kernel_Shared.currentDev = window.StartUp;