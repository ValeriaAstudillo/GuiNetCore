/*REACT LIBRARIES*/
import * as React from "react"

/*REACT CHILD COMPONENTS*/

/*GLOBAL VARIABLES*/

/*REACT COMPONENT*/
class ProfileUser extends React.Component<any, any>{

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.signOutYes = this.signOutYes.bind(this);
    }

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        return (
            <div className="content-middle box-controls">
                <span>PERFIL DE USUARIO</span>
                <div className="row">
                    <div className="col-lg-4" style={{ textAlign: 'center' }}>
                        <div style={{ backgroundColor: 'white', border: 15, paddingTop: 10, paddingBottom: 10 }}>
                            <img style ={{ height: 256, width: 256, border: '1 solid lightgrey' }} src={"../images/icons/Supervisores_128.png"} />
                            <span id="userName" style={{ display: 'block', textAlign: 'center', fontSize: 32, color: 'darkblue', fontWeight: 'bold' }}>{SesionWeb().Usuario.CodigoUsuario}</span>
                            <span id="identificacion" style={{ display: 'block', fontSize: 24, color: 'darkblue' }}>{SesionWeb().Usuario.NumeroIdentificacion}</span>
                            <span id="idUsuario"  style={{ display: 'block', fontSize: 18, color: 'darkblue' }}>{'ID USUARIO: ' + SesionWeb().Usuario.IdUsuario}</span>
                            <div style={{ marginTop: 15 }} id="btnCerrarSesion" data-bind="dxButton: btnCerrarSesion"></div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row" style={{ backgroundColor: 'white', border: 15, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, marginRight: 10 }}>
                            <div className="title-1">
                                <i className="fa fa-paw"></i>
                                <span>Información Personal</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Primer Nombre: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{SesionWeb().Usuario.PrimerNombre}</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Segundo Nombre: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{SesionWeb().Usuario.SegundoNombre}</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Apellido Paterno: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{SesionWeb().Usuario.ApellidoPaterno}</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Apellido Materno: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{SesionWeb().Usuario.ApellidoMaterno}</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Nombre Completo: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{SesionWeb().Usuario.NombreCompletoUsuario}</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Correo Electrónico: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{SesionWeb().Usuario.CorreoElectronico}</span>
                            </div>
                        </div>

                        <div className="row" style={{ backgroundColor: 'white', border: 15, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, marginRight: 10 }}>
                            <div className="title-1">
                                <i className="fa fa-bolt"></i>
                                <span>Información Ingreso</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Fecha Creación: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{new Date(SesionWeb().Usuario.FechaCreacion).toString('yyyy/MM/dd') }</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Fecha Ingreso: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{new Date(SesionWeb().Usuario.FechaIngreso).toString('yyyy/MM/dd') }</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Fecha Salida: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{new Date(SesionWeb().Usuario.FechaSalida).toString('yyyy/MM/dd') }</span>
                            </div>
                        </div>

                        <div className="row" style={{ backgroundColor: 'white', border: 15, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, marginRight: 10 }}>
                            <div className="title-1">
                                <i className="fa fa-bookmark"></i>
                                <span>Información Acceso</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Intentos Acceso Actual: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{SesionWeb().Usuario.IntentosActualAcceso}</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Intentos Último Acceso: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{SesionWeb().Usuario.IntentosUltimoAcceso}</span>
                            </div>
                            <div>
                                <span style={{ display: 'inline-block', fontSize: 22, color: 'darkred' }}>Fecha Expiración Clave: </span>
                                <span style={{ display: 'inline-block', fontSize: 26, marginLeft: 20, color: 'darkblue' }}>{new Date(SesionWeb().Usuario.FechaExpiracion).toString('yyyy/MM/dd') }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    /*componentDidMount: Only get called once, as soon as the render method has been executed.
        - Enables to define DOM manipulations or data fetching operations.
    */
    componentDidMount() {
        debugger;        
        var logOutConfiguration: DevExpress.ui.dxButtonOptions;
        logOutConfiguration = setupButtonControl(CORE_TAG('SignOut'), this.logOut, undefined, typeButtons.Danger);
        $("#btnCerrarSesion").dxButton(logOutConfiguration);
    }

    logOut() {
        /*GetFlowsByState(true, function(data:any){
            console.log("bien");
        })*/
        /*SaveFlow(function(data:any){
            alert("bien");
        })*/
        /*SavePostBox(function(data:any){
            alert("bien");
        })*/
        /*GetPostBoxByUser(1, function(data:any){
            alert("bien");
        })*/
        /*UpdateFlow(function(data:any){
            console.log("bien");
        })*/
        showQuestionMessage(CORE_TAG('SignOut'), CORE_MESSAGE('SureSignOut'), this.signOutYes)
    }

    signOutYes() {
        var parameters = {
            Method: Security.methods.CloseSystem,
            parameters: SesionWeb().Usuario.CodigoUsuario
        }
        callService(Kernel_Shared.SystemModules.Seguridad, parameters, function (data: any) {
            endSesion();
            location.href = '/views/STARTUP/metronic/login-metronic.html';
        })
    }
}

export default ProfileUser;