$(function () {
    var startupView = "login";
    DevExpress.devices.current("desktop");

    StartUp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: StartUp,
        layoutSet: DevExpress.framework.html.layoutSets[StartUp.config.layoutSet],
        animationSet: DevExpress.framework.html.animationSets[StartUp.config.animationSet],
        mode: "webSite",
        navigation: StartUp.config.navigation,
        commandMapping: StartUp.config.commandMapping,
        navigateToRootViewMode: "keepHistory",
        useViewTitleAsBackText: true
    });

    StartUp.app.on("viewShown", function(args) {
        document.title = ko.unwrap(args.viewInfo.model.title) || "StartUp";
    });

    $(window).unload(function() {
        StartUp.app.saveState();
    });

    StartUp.app.router.register(":view/:id", { view: startupView, id: undefined });
    StartUp.app.navigate();

    startSessionLigth();

    if (SesionWeb().Sesion.IdUsuario > 0) {
        location.href = '/index-app.html';
    }
});