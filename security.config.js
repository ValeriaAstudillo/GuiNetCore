// NOTE object below must be a valid JSON
window.Security = $.extend(true, window.Security, {
    "config": {
        "layoutSet": "desktop",
        "animationSet": "default",
        "navigation": [
            {
                "title": "About",
                "onExecute": "#About",
                "icon": "info"
            }
        ]
    },
    stateConection: {
        Offline: 1,
        Online: 2,
        Lock: 3,
        AutoLock: 4
    },
    actionsLogSecurity: {
        LOCKUSER: 1,
        AUTOLOCK: 2,
        LOGIN: 3,
        LOGOUT: 4,
        UNLOCKUSER: 5,
        NOTUSER: 6,
        GENERATEKEY: 7,
        CHANGEPASSWORD: 8,
        CHANGEOFFICEPROFILE: 9
    }
});
