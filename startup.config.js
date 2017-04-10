// NOTE object below must be a valid JSON
window.StartUp = $.extend(true, window.StartUp, {
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
    }
});
