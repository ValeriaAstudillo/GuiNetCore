var GlobalPush;

var GetAndSetApplicationBadgeNumber = function () {
    GlobalPush.getApplicationIconBadgeNumber(
        function (badgeNumber) {
            SetApplicationBadgeNumber(badgeNumber++);
        },
        function (errorElement) {
            console.log(JSON.stringify(errorElement));
        }
        )
}

var SetApplicationBadgeNumber = function (number) {
    GlobalPush.setApplicationIconBadgeNumber(
        function (successElement) {
            console.log(JSON.stringify(successElement));
        },
        function (errorElement) {
            console.log(JSON.stringify(errorElement));
        },
        number)
}

