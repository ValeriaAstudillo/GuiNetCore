var callViewByModule = function (nameView) {
    if (Kernel_Shared.currentModule) {
        switch (Kernel_Shared.currentModule.code) {
            case 'CAM':
                Campaign.app.navigate(nameView);
                break;
            case 'SGS':
                Security.app.navigate(nameView);
                break;
            default:
                break;
        }
    } else {
        showNotificationError(CORE_MESSAGE('DontSetCurrentModule'));
    }
}