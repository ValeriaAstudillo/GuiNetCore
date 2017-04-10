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
}

function SesionWeb() {
    var sessionWeb = null;
    if (sessionStorage.Sesion) {
        if (sessionStorage.Tipo == "Full") {
            sessionWeb = {
                Transacciones: JSON.parse(sessionStorage.Transacciones),
                PerfilOficinaTransacciones: JSON.parse(sessionStorage.PerfilOficinaTransacciones),
                IPEstacion: sessionStorage.IPEstacion,
                NombreEstacion: sessionStorage.NombreEstacion,
                ServidorServicios: sessionStorage.ServidorServicios,
                ServidorBDD: sessionStorage.ServidorBDD,
                Sesion: JSON.parse(sessionStorage.Sesion),
                Usuario: JSON.parse(sessionStorage.Usuario),
                PantallaActual: sessionStorage.PantallaActual != 'undefined' ? JSON.parse(sessionStorage.PantallaActual) : null,
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