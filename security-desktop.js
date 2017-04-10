$(function () {
    if (sessionStorage.Sesion && SesionWeb().Sesion.IdUsuario == 0) {
        location.href = '/views/STARTUP/metronic/login-metronic.html';
    }
    var startupView = "index";
    if (sessionStorage.Estado == stateScreen.Lock) {
        startupView = "UnLockScreen";
    }
    DevExpress.devices.current("desktop");

    var layoutSet = DevExpress.framework.html.layoutSets[Security.config.layoutSet],
        navigation = Security.config.navigation;


    Security.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Security,
        layoutSet: layoutSet,
        animationSet: DevExpress.framework.html.animationSets[Security.config.animationSet],
        mode: "webSite",
        navigation: navigation,
        commandMapping: Security.config.commandMapping,
        navigateToRootViewMode: "keepHistory",
        useViewTitleAsBackText: true
    });

    Security.app.on("viewShown", function(args) {
        document.title = ko.unwrap(args.viewInfo.model.title) || "Security";
    });

    $(window).unload(function() {
        Security.app.saveState();
    });

    Security.app.router.register(":view/:id", { view: startupView, id: undefined });
    Security.app.navigate();

    if (sessionStorage.Estado == stateScreen.Lock) {
        var pageContent = document.getElementById('pageContent');
        var pageSideBar = document.getElementById('contentSideBar');
        var pageHeader = document.getElementById('pageHeader');
        var toolBar = document.getElementById('barraHerramienta');
        var titlePage = document.getElementById('title-page');
        if (pageSideBar)
            pageSideBar.style.display = 'none';
        if (pageHeader)
            pageHeader.style.display = 'none';
        if (pageContent)
            pageContent.style.background = 'rgb(54, 65, 80)';
        if (toolBar)
            toolBar.style.display = 'none';
        if (titlePage)
            titlePage.style.display = 'none';
    }
});