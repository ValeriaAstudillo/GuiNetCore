$(function () {
    if (sessionStorage.Sesion && SesionWeb().Sesion.IdUsuario == 0) {
        location.href = 'index.html';
    }
    var startupView = "index";
    if (sessionStorage.Estado == stateScreen.Lock) {
        startupView = "UnLockScreen";
    }
    DevExpress.devices.current("desktop");

    var layoutSet = DevExpress.framework.html.layoutSets[App.config.layoutSet],
        navigation = App.config.navigation;


    App.app = new DevExpress.framework.html.HtmlApplication({
        namespace: App,
        layoutSet: layoutSet,
        animationSet: DevExpress.framework.html.animationSets[App.config.animationSet],
        mode: "webSite",
        navigation: navigation,
        commandMapping: App.config.commandMapping,
        navigateToRootViewMode: "keepHistory",
        useViewTitleAsBackText: true
    });

    App.app.on("viewShown", function(args) {
        document.title = ko.unwrap(args.viewInfo.model.title) || "App";
    });

    $(window).unload(function() {
        App.app.saveState();
    });

    App.app.router.register(":view/:id", { view: startupView, id: undefined });
    App.app.navigate();

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