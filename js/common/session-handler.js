var sessionWeb = null;
function startSession(dataSession) {
    sessionStorage.setItem('Tipo', 'Full');
    sessionStorage.setItem('Estado', stateScreen.Active);
    sessionStorage.setItem('Transacciones', dataSession.Transacciones);
    sessionStorage.setItem('PerfilOficinaTransacciones', dataSession.PerfilOficinaTransacciones);
    sessionStorage.setItem('IPEstacion', dataSession.IpEstacion);
    sessionStorage.setItem('NombreEstacion', dataSession.NombreEstacion);
    sessionStorage.setItem('ServidorServicios', dataSession.ServidorServicios);
    sessionStorage.setItem('ServidorBDD', dataSession.ServidorBDD);
    sessionStorage.setItem('Usuario', dataSession.Usuario);
    sessionStorage.setItem('Sesion', dataSession.Sesion);
    sessionStorage.setItem('PantallaActual', undefined);
    sessionStorage.setItem('Sistemas', dataSession.Sistemas);
    SesionWeb();
}

function endSesion() {
    sessionStorage.removeItem('Tipo');
    sessionStorage.removeItem('Transacciones');
    sessionStorage.removeItem('PerfilOficinaTransacciones');
    sessionStorage.removeItem('IPEstacion');
    sessionStorage.removeItem('NombreEstacion');
    sessionStorage.removeItem('ServidorServicios');
    sessionStorage.removeItem('ServidorBDD');
    sessionStorage.removeItem('Usuario');
    sessionStorage.removeItem('Sesion');
    sessionStorage.removeItem('PantallaActual');
    sessionStorage.removeItem('Sistemas');
}

function SesionWeb() {
    if (sessionStorage.Sesion) {
        if (sessionStorage.Tipo == "Full") {
            var transacciones = sessionStorage.Transacciones != "undefined" ? JSON.parse(sessionStorage.Transacciones) : undefined;
            var perfilOficinaTransacciones = sessionStorage.PerfilOficinaTransacciones != "undefined" ? JSON.parse(sessionStorage.PerfilOficinaTransacciones) : undefined;
            var ipEstacion = sessionStorage.IPEstacion != "undefined" ? sessionStorage.IPEstacion : undefined;
            var nombreEstacion = sessionStorage.NombreEstacion != "undefined" ? sessionStorage.NombreEstacion : undefined;
            var servidorServicios = sessionStorage.ServidorServicios != "undefined" ? sessionStorage.ServidorServicios : undefined;
            var servidorBDD = sessionStorage.ServidorBDD != "undefined" ? sessionStorage.ServidorBDD : undefined;
            var sesion = sessionStorage.Sesion != "undefined" ? JSON.parse(sessionStorage.Sesion) : undefined;
            var usuario = sessionStorage.Usuario != "undefined" ? JSON.parse(sessionStorage.Usuario) : undefined;
            var pantallaActual = sessionStorage.PantallaActual != 'undefined' ? JSON.parse(sessionStorage.PantallaActual) : null;
            var sistemas = sessionStorage.Sistemas != "undefined" ? JSON.parse(sessionStorage.Sistemas) : undefined

            sessionWeb = {
                Transacciones: transacciones,
                PerfilOficinaTransacciones: perfilOficinaTransacciones,
                IpEstacion: ipEstacion,
                NombreEstacion: nombreEstacion,
                ServidorServicios: servidorServicios,
                ServidorBDD: servidorBDD,
                Sesion: sesion,
                Usuario: usuario,
                PantallaActual: pantallaActual,
                Sistemas: sistemas
            }
        }
        else {
            sessionWeb = {
                Sesion: JSON.parse(sessionStorage.Sesion)
            }
        }
    }

    return sessionWeb;
}

function startSessionLigth() {
    var sessionLigth = {
        IdOficina: 0,
        OficinaExterna: '',
        IdInstitucion: 0,
        EsInstitucionAdministrativa: false,
        IdPerfilUsuario: 0,
        CodigoPerfil: '',
        IdUsuario: 0,
        FechaSistema: new Date(),
        NombreOficina: '',
        NombreInstitucion: '',
        NombreCompletoUsuario: '',
        NombreCortoUsuario: '',
        IPEstacion: Kernel_Shared.IpMaquina,
        NombreEstacion: '',
        TipoIdentificacionUsuario: '',
        IdentificacionUsuario: '',
        NombrePerfil: ''
    }
    sessionStorage.setItem('Tipo', 'Ligth');
    sessionStorage.setItem('Sesion', JSON.stringify(sessionLigth));
}