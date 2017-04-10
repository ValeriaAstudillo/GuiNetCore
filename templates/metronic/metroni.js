function ptPortlet(options) {
    var nombreControl = options.nombreControl;
    var titulo = options.titulo;
    var iconoTitulo = options.iconoTitulo;
    var descripcion = options.descripcion;
    var botonEdit = options.botonEdit;
    var accionBotonEdit = null;//options.accionBotonEdit();
    var botonAdd = options.botonAdd;
    var accionBotonAdd = null;//options.accionBotonAdd();
    var template = options.template();

    $('#' + nombreControl).addClass("portlet");
    $('#' + nombreControl).addClass("light");
    var divTitulo = document.createElement('div');
    var divCuerpo = document.createElement('div');
    divTitulo.className = 'portlet-title';
    divCuerpo.className = 'portlet-body';

    var divCaptionTitulo = document.createElement('div');
    divCaptionTitulo.className = 'caption';

    var iconoPortlet = document.createElement('i');
    iconoPortlet.className = 'icon-speech';
    var spanTitulo = document.createElement('span');
    spanTitulo.classList.add('caption-subject');
    spanTitulo.classList.add('bold');
    spanTitulo.classList.add('uppercase');
    spanTitulo.innerText = titulo;
    if (descripcion) {
        var spanDescTitulo = document.createElement('span');
        spanDescTitulo.className = 'caption-helper';
        spanDescTitulo.innerText = descripcion;
        spanDescTitulo.style.marginLeft = '5px';
    }
    divCaptionTitulo.appendChild(iconoPortlet);
    divCaptionTitulo.appendChild(spanTitulo);
    if (descripcion)
        divCaptionTitulo.appendChild(spanDescTitulo);

    var divActionsHeader = document.createElement('div');
    divActionsHeader.className = 'actions';

    if (botonEdit == true) {
        var accionEdit = document.createElement('a');
        accionEdit.classList.add('btn');
        accionEdit.classList.add('btn-circle');
        accionEdit.classList.add('btn-default');
        
        //if (accionBotonEdit) {
        //    accionEdit.click(function () {
        //        options.accionBotonEdit();
        //    })
        //}
        accionEdit.text = 'Editar';

        var iconoAccionEdit = document.createElement('i');
        iconoAccionEdit.classList.add('fa');
        iconoAccionEdit.classList.add('fa-pencil');
        accionEdit.appendChild(iconoAccionEdit);
        accionEdit.click(function () {
            if (options.accionBotonEdit)
                options.accionBotonEdit();
        })
        divActionsHeader.appendChild(accionEdit);
    }

    if (botonAdd == true) {
        var accionAdd = document.createElement('a');
        accionAdd.classList.add('btn');
        accionAdd.classList.add('btn-circle');
        accionAdd.classList.add('btn-default');
        
        //if (accionBotonAdd) {
        //    accionAdd.click(function () {
        //        accionBotonAdd();
        //    })
        //}
        accionAdd.text = 'Agregar';

        var iconoAccionAdd = document.createElement('i');
        iconoAccionAdd.classList.add('fa');
        iconoAccionAdd.classList.add('fa-plus');
        accionAdd.appendChild(iconoAccionAdd);
        accionAdd.click(function () {
            if (options.accionBotonAdd)
                options.accionBotonAdd();
        })
        divActionsHeader.appendChild(accionAdd);

    }

    var expandir = document.createElement('a');
    expandir.classList.add('btn');
    expandir.classList.add('btn-circle');
    expandir.classList.add('btn-icon-only');
    expandir.classList.add('btn-default');
    expandir.classList.add('fullscreen');

    divActionsHeader.appendChild(expandir);

    divTitulo.appendChild(divCaptionTitulo);
    divTitulo.appendChild(divActionsHeader);

    var divScrollBody = document.createElement('div');
    divScrollBody.style.width = 'auto';
    divScrollBody.style.height = '200px';
    divScrollBody.style.overflow = 'hidden';
    divScrollBody.style.position = 'relative';

    var divScroller = document.createElement('div');
    divScroller.className = 'scroller';
    divScroller.style.width = 'auto';
    divScroller.style.height = '200px';
    divScroller.style.overflow = 'hidden';

    var divScrollerSlim = document.createElement('div');
    divScrollerSlim.className = 'slimScrollBar';
    divScrollerSlim.style.background = 'rgb(161, 178, 189)';
    divScrollerSlim.style.borderRadius = '7px';
    divScrollerSlim.style.top = '0px';
    divScrollerSlim.style.width = '7px';
    divScrollerSlim.style.height = '152.09px';
    divScrollerSlim.style.right = '1px';
    divScrollerSlim.style.display = 'none';
    divScrollerSlim.style.position = 'absolute';
    divScrollerSlim.style.zIndex = '99';
    divScrollerSlim.style.opacity = '0.4';

    divScroller.innerHTML = template;

    divScrollBody.appendChild(divScroller);
    divScrollBody.appendChild(divScrollerSlim);

    divCuerpo.appendChild(divScrollBody);

    $('#' + nombreControl).append(divTitulo);
    $('#' + nombreControl).append(divCuerpo);
}