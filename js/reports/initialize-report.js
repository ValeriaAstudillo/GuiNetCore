var previewModel;
function initializeReport() {
    var promises = $("script[type='text/html']").map(function (_, script) {
        if (script.src) {
            var deffered = $.Deferred();
            $.get(script.src, function (tmpl) {
                script.text = tmpl;
                if (tmpl.indexOf('type="text/html"') !== -1 || tmpl.indexOf("type='text/html'") !== -1) {
                    $('#pageContent').append(tmpl);
                }
                deffered.resolve();
            });
            return deffered.promise();
        }
    });

    $.when.apply($.when, promises).done(function () {
        initViewer();
    });
}

function initViewer() {
    $('.dx-designer').innerHtml = '';
    //var backendPrefix = 'http://localhost:53924/';
    var backendPrefix = 'http://localhost/';
    var dxxrdViewerElement = $('.dx-designer')[0];
    //function getHandlerUri() {
    //    DevExpress.Report.Preview.HandlerUri = backendPrefix + 'Api/SecurityReportWebApi';
    //    return backendPrefix + 'Api/SecurityReportWebApi';
    //}

    DevExpress.Report.Preview.HandlerUri = backendPrefix + 'Api/SecurityReportWebApi/api/WebDocumentViewerWebApi';

    var viewerModel = {
        handlerUri: backendPrefix + 'Api/SecurityReportWebApi/api/WebDocumentViewerWebApi'
    };

    previewModel = DevExpress.Report.Preview.createAndInitPreviewModel(viewerModel, dxxrdViewerElement);

}

function openReport(report) {
    previewModel.reportPreview.openReport(report);
}
