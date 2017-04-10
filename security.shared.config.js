// NOTE object below must be a valid JSON
window.Security = $.extend(true, window.Security, {
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
    methods: {
        GetAllUser: 1,
        GetUsersByInstitution: 2,
        GetUserByDNI: 3,
        GetUserByUserName: 4,
        GetUsersByCodeProfile: 5,
        GetUsersByIdProfile: 6,
        SaveUserLog: 7,
        EntrySystem: 8,
        CreateUser: 9,
        UpdateUser: 10,
        GetAllProfiles: 11,
        GetProfilesUser: 12,
        GetProfileById: 13,
        GetProfileByCode: 14,
        CreateProfile: 15,
        UpdateProfile: 16,
        GetScreenById: 17,
        CreateScreen: 18,
        UpdateScreen: 19,
        GetStructureOptionMenu: 20,
        GetAllOptionsMenu: 21,
        GetOptionMenuById: 22,
        CreateMenu: 23,
        UpdateMenu: 24,
        UnlockUser: 25,
        GenerateKey: 26,
        GetProfilesByIdInstitucion: 27,
        GetScreenProfileId: 28,
        GetScreensActive: 29,
        GetUserProfilesByUserName: 30,
        CreateUserProfile: 31,
        UpdateUserProfile: 32,
        ChangeUser: 34,
        CloseSystem: 36,
        UnLockScreen: 37
    },
    stateConection: {
        Offline: 'DES',
        Online: 'CON',
        Lock: 'BLO',
        AutoLock: 'BLOAUT'
    },
    actionsLogSecurity: {
        LOCKUSER : 1,
        AUTOLOCK : 2,
        LOGIN : 3,
        LOGOUT : 4,
        UNLOCKUSER : 5,
        NOTUSER : 6,
        GENERATEKEY : 7,
        CHANGEPASSWORD : 8,
        CHANGEOFFICEPROFILE : 9
    }
});
