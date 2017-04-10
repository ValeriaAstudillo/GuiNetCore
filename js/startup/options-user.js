$(document).ready(function () {
    debugger;
    if (sessionStorage.Sesion) {
        var SessionWeb = SesionWeb();
        var spanUserName = document.getElementById('UserNameLogin');
        spanUserName.innerText = SessionWeb.Usuario.NombreCompletoUsuario;
        $('#myProfile').text(CORE_TAG('MyProfile'));
        $('#changeOfficeProfile').text(CORE_TAG('ChangeOfficeProfile'));
        $('#changeUser').text(CORE_TAG('ChangeUser'));
        $('#changePassword').text(CORE_TAG('ChangePassword'));
        $('#lockScreen').text(CORE_TAG('LockScreen'));
        $('#signOut').text(CORE_TAG('SignOut'));

        /*$('#myProfile').click(function () {
            $('.ViewerContainer').hide();
            $('.dx-viewport').show();
            Core_Seguridad.app.navigate('profileUser');
            var tituloPagina = document.getElementById('tituloPagina');
            tituloPagina.style.display = 'block';
            tituloPagina.style.textAlign = 'center';
            tituloPagina.innerHTML = "<span style='font-size:24px'>Perfil del Usuario " + SessionWeb.Usuario.NombreCompletoUsuario + " </span> <small style='display:block'>Información del Usuario</small>";
            var mapaSitio = document.getElementById('mapaSitio');
            mapaSitio.style.display = 'none';
        })

        $('#changeOfficeProfile').click(function () {
            if (SessionWeb.PerfilOficinaTransacciones.length > 1) {
                $('.ViewerContainer').hide();
                $('.dx-viewport').show();
                Core_Seguridad.app.navigate('changeOfficeProfile');
                var tituloPagina = document.getElementById('tituloPagina');
                tituloPagina.style.display = 'block';
                tituloPagina.style.textAlign = 'center';
                tituloPagina.innerHTML = "<span style='font-size:24px'>" + CORE_TAG('ChangeOfficeProfile') + " ";
                var mapaSitio = document.getElementById('mapaSitio');
                mapaSitio.style.display = 'none';
            } else {
                showSimpleMessage(CORE_TAG('ChangeOfficeProfile'), CORE_MESSAGE_ADD('UserHasOnlyProfile', SessionWeb.Usuario.CodigoUsuario));
                return;
            }
        })

        $('#changeUser').click(function () {
            $('.ViewerContainer').hide();
            $('.dx-viewport').show();
            Core_Seguridad.app.navigate('changeUser');
            var tituloPagina = document.getElementById('tituloPagina');
            tituloPagina.style.display = 'block';
            tituloPagina.style.textAlign = 'center';
            tituloPagina.innerHTML = "<span style='font-size:24px'>" + CORE_TAG('ChangeUser') + " ";
            var mapaSitio = document.getElementById('mapaSitio');
            mapaSitio.style.display = 'none';
        })

        $('#changePassword').click(function () {
            $('.ViewerContainer').hide();
            $('.dx-viewport').show();
            Core_Seguridad.app.navigate('changePasswordSys');
            var tituloPagina = document.getElementById('tituloPagina');
            tituloPagina.style.display = 'block';
            tituloPagina.style.textAlign = 'center';
            tituloPagina.innerHTML = "<span style='font-size:24px'>" + CORE_TAG('ChangePassword') + " ";
            var mapaSitio = document.getElementById('mapaSitio');
            mapaSitio.style.display = 'none';
        })

        $('#signOut').click(function () {
            showQuestionMessage(CORE_TAG('SignOut'), CORE_MESSAGE('SureSignOut'), function () {
                signOut();
            })
        })

        $('#lockScreen').click(function () {
            $('.ViewerContainer').hide();
            $('.dx-viewport').show();
            sessionStorage.Estado = stateScreen.Lock;
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
            Core_Seguridad.app.navigate('UnLockScreen');
        })*/
    }
})
