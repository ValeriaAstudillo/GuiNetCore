if (sessionStorage.Sesion && sessionWeb.Transacciones != undefined)
    var menu = sessionWeb.Transacciones;
else
    var menu = [];

function buildMenu() {
    var areaMenu = document.getElementById('areaMenu');
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].Nivel == 'SUBMODULO') {
            var liSubModulos = document.createElement('li');
            liSubModulos.id = 'SUBMOD_' + menu[i].IdMenu;
            var aSubModulos = document.createElement('a');
            var iSubModulos = document.createElement('i');
            iSubModulos.className = menu[i].Icono ? 'fa ' + menu[i].Icono : '';
            var spanSubModulos1 = document.createElement('span');
            var spanSubModulos2 = document.createElement('span');
            spanSubModulos2.className = 'arrow';
            aSubModulos.href = 'javascript:;';
            if (menu[i].EsFavorito == true) {
                liSubModulos.classList.add('start');
                liSubModulos.classList.add('active');
                liSubModulos.classList.add('open');
                spanSubModulos2.classList.add('open');
            }
            spanSubModulos1.innerText = menu[i].Nombre;
            var spanSel = document.createElement('span');
            spanSel.className = 'selected';
            spanSel.id = 'spanSel_' + menu[i].IdMenu;
            spanSel.style.display = 'none';
            aSubModulos.appendChild(spanSel);
            if (menu[i].EsFavorito == true)
                spanSel.style.display = 'block';

            spanSubModulos1.classList.add('title');
            aSubModulos.appendChild(iSubModulos);
            aSubModulos.appendChild(spanSubModulos1);
            aSubModulos.appendChild(spanSubModulos2);
            aSubModulos.id = "aSUBMOD_" + menu[i].IdMenu;
            liSubModulos.appendChild(aSubModulos);
            var ulPantalla = document.createElement('ul');
            ulPantalla.className = 'sub-menu';
            ulPantalla.id = "SUBMODul" + menu[i].IdMenu;
            liSubModulos.appendChild(ulPantalla);
            $('#aSUBMOD_' + menu[i].IdMenu).click(function (e) {
                var idMenu = e.srcElement.id.split('_')[1];
                activeItemMenu("SUBMODULO", idMenu);
            })
        }
        if (menu[i].Nivel == 'PANTALLA') {
            var liPantalla = document.createElement('li');
            liPantalla.id = "liPANTALLA_" + menu[i].IdMenu;
            var aPantalla = document.createElement('a');
            var spanPantalla = document.createElement('span');
            if (menu[i].Icono) {
                var iPantalla = document.createElement('i');
                iPantalla.className = 'fa ' + menu[i].Icono;
                iPantalla.style.marginRight = '5px';
                aPantalla.appendChild(iPantalla);
            }
            spanPantalla.innerText = menu[i].Nombre;
            aPantalla.appendChild(spanPantalla);
            aPantalla.id = 'PANTALLA_' + menu[i].IdMenu;
            liPantalla.appendChild(aPantalla);
            $('#SUBMODul' + menu[i].IdMenuPadre).append(liPantalla);

            $('#PANTALLA_' + menu[i].IdMenu).click(function (e) {
                debugger;
                var idMenu = e.currentTarget.id.split('_')[1];
                var menuSelected = getItemMenu(idMenu);
                changeHeaderDisplay(idMenu);
                activeItemMenu("PANTALLA", idMenu);
                sessionStorage.setItem("PantallaActual", JSON.stringify(menuSelected));
                if (menuSelected.TipoPantalla == 'REPORTE')
                {
                    $('.ViewerContainer').show();
                    initToolBar();
                    $('#barraHerramienta').hide();
                    Kernel_Shared.currentModule.namespace.app.navigate(menuSelected.Vista + "/" + menuSelected.Reporte);
                    //Kernel_Shared.app.navigate(menuSelected.Vista + "/" + menuSelected.Reporte);
                    //$('.dx-viewport').hide();
                } else {
                    $('#barraHerramienta').show();
                    $('.ViewerContainer').hide();
                    Kernel_Shared.currentModule.namespace.app.navigate(menuSelected.Vista);
                    //Kernel_Shared.app.navigate(menuSelected.Vista);
                }
            })

        }
        if (liSubModulos)
            areaMenu.appendChild(liSubModulos);
    }
}

function changeHeaderDisplay (idMenu) {
    var tituloPagina = document.getElementById('tituloPagina');
    tituloPagina.style.display = 'block';
    tituloPagina.style.textAlign = 'left';
    tituloPagina.innerHTML = getItemMenu(idMenu).Nombre + " <small>" + getItemMenu(idMenu).Descripcion + "</small>";
    var mapaSitio = document.getElementById('mapaSitio');
    mapaSitio.style.display = 'block';
    var moduloMenu = getItemMenu(getItemMenu(getItemMenu(idMenu).IdMenuPadre).IdMenuPadre);
    var tituloModulo = document.getElementById('modulo')
    tituloModulo.innerText = moduloMenu.Nombre;
    if (moduloMenu.Icono != null) {
        var iconoModulo = document.getElementById('iconoModulo');
        iconoModulo.setAttribute('class', 'fa ' + moduloMenu.Icono);
    }

    var subModuloMenu = getItemMenu(getItemMenu(idMenu).IdMenuPadre);
    var tituloSubModulo = document.getElementById('submodulo');
    tituloSubModulo.innerText = subModuloMenu.Nombre;
    if (subModuloMenu.Icono != null) {
        var iconoSubModulo = document.getElementById('iconoSubModulo');
        iconoSubModulo.setAttribute('class', 'fa ' + subModuloMenu.Icono);
    }

    var tituloPantalla = document.getElementById('tituloPantalla');
    tituloPantalla.innerText = getItemMenu(idMenu).Nombre;
    if (getItemMenu(idMenu).Icono != null) {
        var iconoPantalla = document.getElementById('iconoPantalla');
        iconoPantalla.setAttribute('class', 'fa ' + getItemMenu(idMenu).Icono);
    }
}

function activeItemMenu(grupo, idMenu) {
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].Nivel == "SUBMODULO") {
            $('#SUBMOD_' + menu[i].IdMenu).removeClass("active");
            $('#spanSel_' + menu[i].IdMenu).attr('style', 'display:none');
        }
    }
    switch (grupo) {
        case "PANTALLA":
            $('#liPANTALLA_' + idMenu).addClass("active");
            for (var i = 0; i < menu.length; i++) {
                if (menu[i].IdMenu != idMenu && menu[i].Nivel == grupo)
                    $('#liPANTALLA_' + menu[i].IdMenu).removeClass("active");
                else {
                    $('#SUBMOD_' + menu[i].IdMenuPadre).addClass("active");
                    $('#spanSel_' + menu[i].IdMenuPadre).attr('style', 'display:block');
                }
            }
            break;
        default:

    }
}

function getItemMenu(idMenu) {
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].IdMenu == idMenu)
            return menu[i];
    }
}

buildMenu();
