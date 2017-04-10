(function ($, DX, undefined) {
    DX.framework.html.EmptyLayoutController = DX.framework.html.DefaultLayoutController.inherit({
        ctor: function (options) {
            options = options || {};
            options.name = options.name || "mobile";
            this.callBase(options)
        }
    });
    var layoutSets = DX.framework.html.layoutSets;
    layoutSets["mobile"] = layoutSets["mobile"] || [];
    layoutSets["mobile"].push({ controller: new DX.framework.html.EmptyLayoutController })
})(jQuery, DevExpress);