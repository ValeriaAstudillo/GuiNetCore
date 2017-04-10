/*REACT LIBRARIES*/
import * as React from "react"
import { browserHistory } from 'react-router'

/*REACT CHILD COMPONENTS*/

/*GLOBAL VARIABLES*/
var groupValidation = 'LOCKSCREEN';

/*REACT COMPONENT*/
class UnlockScreen extends React.Component<any, any>{

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
        this.state = {
            password:""
        }
        this.unLock = this.unLock.bind(this);
        this.getModel = this.getModel.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        return (
            <div style={{backgroundColor: "#323d4b", position: "absolute", left: "0", top: "0", right: "0", width: "100%", height: "100%", zIndex: 1000 }}>
                <div className="page-body" style={{ width: "30%", marginLeft: "auto", marginRight: "auto", marginTop: 200}}>
                    <div className="lock-head">
                        <span>{CORE_TAG('LockDisplay')}</span>
                    </div>
                    <div className="lock-body">    
                        <div className="pull-left lock-avatar-block">
                            <img src="../templates/metronic/admin/pages/media/profile/photo3.jpg" className="lock-avatar" />
                        </div>                    
                        <div className="lock-form pull-left">
                            <h4>{SesionWeb().Usuario.PrimerNombre + ' ' + SesionWeb().Usuario.ApellidoPaterno}</h4>
                            <div className="form-group">
                                <div id="txtPassword"></div>
                                <div id="summaryValidation"></div>    
                            </div>                                                                 
                            <div className="form-actions">
                                <div id="btnUnlock"></div>
                            </div>
                        </div>
                    </div>
                    <div className="lock-bottom">
                        <div id="btnLogOut"></div>
                    </div>
                </div>
                <div className="page-footer-custom">
                    2016 &copy; Portales.Módulo de Seguridad.
                </div>
            </div>
        )
    }

    /*componentDidMount: Only get called once, as soon as the render method has been executed.
        - Enables to define DOM manipulations or data fetching operations.
    */
    componentDidMount() {    
        var validationPassword = validateRequired(groupValidation, CORE_TAG('Password'));
        var passwordConfiguration: DevExpress.ui.dxTextBoxOptions;
        passwordConfiguration = setupTextPasswordControl(this.state.password, 128);
        $("#txtPassword").dxTextBox(passwordConfiguration).dxValidator(validationPassword);

        var validationConfiguration: DevExpress.ui.dxValidationSummaryOptions;
        validationConfiguration = setupSummaryValidation(groupValidation);
        $("#summaryValidation").dxValidationSummary(validationConfiguration);

        var unlockConfiguration: DevExpress.ui.dxButtonOptions;
        unlockConfiguration = setupButtonControl(CORE_TAG('Unlock'), this.unLock, groupValidation, typeButtons.Success);
        $("#btnUnlock").dxButton(unlockConfiguration);

        var logoutConfiguration: DevExpress.ui.dxButtonOptions;
        logoutConfiguration = setupButtonControl('No eres ' + SesionWeb().Usuario.PrimerNombre + ' ' + SesionWeb().Usuario.ApellidoPaterno, this.logOut, groupValidation, typeButtons.Danger);
        $("#btnLogOut").dxButton(logoutConfiguration);
    }

    /*METHODS*/
    unLock(params: any) {
        debugger;
        try {
            var result = params.validationGroup.validate();
            if (result.isValid == true) {
                this.setState({ password: $("#txtPassword").dxTextBox('option', 'value') });
                var optUnLock = this.getModel();
                
                if (encrypt3DES(optUnLock.Clave) != optUnLock.ClaveOriginal) {
                    showErrorMessage(CORE_TAG('DefaultTitle'), CORE_MESSAGE('WrongPassword'));
                } else {
                    sessionStorage.Estado = stateScreen.Active;
                    $('#summaryValidation').dxValidationSummary('instance').repaint();  
                    $('#txtPassword').dxTextBox('instance').reset();
                    browserHistory.goBack();
                }

                /*var parameters = {
                    Method: Security.methods.UnLockScreen,
                    Parameters: optUnLock.Clave,
                    ParametersAdd: optUnLock.ClaveOriginal
                };
                callService(Kernel_Shared.SystemModules.Seguridad, parameters, function (data: any) {
                    sessionStorage.Estado = stateScreen.Active;
                    $('#summaryValidation').dxValidationSummary('instance').repaint();  
                    browserHistory.goBack();                          
                });*/
            } else {
                showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE('ErrorData'));
            }
        } catch (e) {
            showErrorMessage(CORE_TAG('ErrorMessage'), e);
        }
    }

    getModel() {
        var optionsLogin = {
            Clave: this.state.password,
            ClaveOriginal: SesionWeb().Usuario.Clave
        }
        return optionsLogin;
    }

    logOut() {
        CloseSystem(SesionWeb().Usuario.CodigoUsuario, function () {
            debugger;
            endSesion();
            location.href = Kernel_Shared.plantilla.login;
        });
    }
}

export default UnlockScreen;