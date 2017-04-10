/*REACT LIBRARIES*/
import * as React from "react"
import {connect} from 'react-redux'

import * as changePasswordAction from "../../../actions/change-password-actions"

/*REACT CHILD COMPONENTS*/

/*GLOBAL VARIABLES*/
var groupValidation = 'CHANGEPASSWORD';
var that;

/*REACT COMPONENT*/
class ChangePasswordUser extends React.Component<any, any>{

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
        this.changePassword = this.changePassword.bind(this);
        this.updateState = this.updateState.bind(this);
        this.backLogin = this.backLogin.bind(this);
        this.getModel = this.getModel.bind(this);
        this.clearControls = this.clearControls.bind(this);
        that = this;
    }

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        return (
            <div className="content-middle box-controls" style={{ maxWidth: 500 }}>
                <span>{CORE_TAG('ChangePassword') }</span>
                <div className="row">
                    <div className="col-lg-12">
                        <label className="tags-form">{CORE_TAG('CurrentPassword') }</label>
                        <div id="txtCurrentPassword"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <label className="tags-form">{CORE_TAG('NewPassword') }</label>
                        <div id="txtNewPassword"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <label className="tags-form">{CORE_TAG('ConfirmPassword') }</label>
                        <div id="txtConfirmPassword"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div id="summaryValidation"></div>
                    </div>
                </div>
                <div className="row" style={{ textAlign: "center" }}>
                    <div id="btnAccept"></div>&nbsp; &nbsp;
                    <div id="btnCancel"></div>
                </div>
            </div>
        )
    }

    /*componentDidMount: Only get called once, as soon as the render method has been executed.
        - Enables to define DOM manipulations or data fetching operations.
    */
    componentDidMount() {
        debugger;
        var validationCurrentPassword = validateRequired(groupValidation, CORE_TAG('CurrentPassword'));
        var currentPasswordConfiguration: DevExpress.ui.dxTextBoxOptions;
        currentPasswordConfiguration = setupTextPasswordControl(this.props.changePassword.currentPassword, 128, CORE_TAG('CurrentPassword'));
        $("#txtCurrentPassword").dxTextBox(currentPasswordConfiguration).dxValidator(validationCurrentPassword);

        var validationNewPassword = validateRequired(groupValidation, CORE_TAG('NewPassword'));
        var newPasswordConfiguration: DevExpress.ui.dxTextBoxOptions;
        newPasswordConfiguration = setupTextPasswordControl(this.props.changePassword.newPassword, 128, CORE_TAG('NewPassword'));
        $("#txtNewPassword").dxTextBox(newPasswordConfiguration).dxValidator(validationNewPassword);

        var validationConfirmPassword = validateRequired(groupValidation, CORE_TAG('ConfirmPassword'));
        var confirmPasswordConfiguration: DevExpress.ui.dxTextBoxOptions;
        confirmPasswordConfiguration = setupTextPasswordControl(this.props.changePassword.confirmPassword, 128, CORE_TAG('ConfirmPassword'));
        $("#txtConfirmPassword").dxTextBox(confirmPasswordConfiguration).dxValidator(validationConfirmPassword);

        var validationConfiguration: DevExpress.ui.dxValidationSummaryOptions;
        validationConfiguration = setupSummaryValidation(groupValidation);
        $("#summaryValidation").dxValidationSummary(validationConfiguration);

        var acceptConfiguration: DevExpress.ui.dxButtonOptions;
        acceptConfiguration = setupButtonControlDefault(classButtons.Accept, this.changePassword, groupValidation, true);
        $("#btnAccept").dxButton(acceptConfiguration);

        var cancelConfiguration: DevExpress.ui.dxButtonOptions;
        cancelConfiguration = setupButtonControlDefault(classButtons.Cancel, this.backLogin, groupValidation, true);
        $("#btnCancel").dxButton(cancelConfiguration);
    }

    /*METHODS*/

    changePassword(params: any) {
        debugger;
        try {
            var result = params.validationGroup.validate();
            if (result.isValid) {
                this.updateState();
                var changePasswords = this.getModel();
                if (this.props.changePassword.newPassword != this.props.changePassword.confirmPassword) {
                    showWarningMessage(CORE_TAG('ChangePassword'), CORE_MESSAGE('NotMatchPassword'), function () {
                        $('#txtConfirmPassword').dxTextBox('instance').reset();
                        $('#txtConfirmPassword').dxTextBox('instance').focus();
                    });
                    return;
                }
                
                ChangePassword(changePasswords.UserName, changePasswords.ContraseniaActual, changePasswords.NuevaContrasenia, "changePassword", function (data:any) {
                    showSuccessMessage(CORE_TAG('ChangePassword'), CORE_MESSAGE_ADD('SuccessChangePassword', [data.CodigoUsuario, data.CorreoElectronico]), function () {
                        that.backLogin();
                    })
                });

                /*var parameters = {
                    Method: Kernel_Shared.methods.ChangePassword,
                    Parameters: JSON.stringify(changePasswords)
                };

                callService(Kernel_Shared.SystemModules.Seguridad, parameters, function (data: any) {
                    showSuccessMessage(CORE_TAG('ChangePassword'), CORE_MESSAGE_ADD('SuccessChangePassword', [data.CodigoUsuario, data.CorreoElectronico]), function () {
                        this.backLogin(params);
                    })
                }, false, function (error:any) {
                    if (error.contains('contraseña') && error.contains('incorrecta')) {
                        $('#txtCurrentPassword').dxTextBox('instance').reset();
                        $('#txtCurrentPassword').dxTextBox('instance').focus();
                    } else if (error.contains('Mayúscula') && error.contains('Número')) {
                        $('#txtNewPassword').dxTextBox('instance').reset();
                        $('#txtNewPassword').dxTextBox('instance').focus();
                    }
                });*/

            } else {
                showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE('ErrorData'));
            }
        } catch (e) {
            showErrorMessage(CORE_TAG('ErrorMessage'), e);
        }
    }

    updateState() {
        this.props.dispatch(
            changePasswordAction.setPasswordState(
                $("#txtCurrentPassword").dxTextBox('option', 'value'),
                $("#txtNewPassword").dxTextBox('option', 'value'),
                $("#txtConfirmPassword").dxTextBox('option', 'value')
        ))
    }

    getModel() {
        var passwords = {
            UserName: SesionWeb().Usuario.CodigoUsuario,
            ContraseniaActual: this.props.changePassword.currentPassword,
            NuevaContrasenia: this.props.changePassword.newPassword
        }
        return passwords;
    }

    backLogin(params: any) {
        params.validationGroup.reset();
        this.clearControls();
        location.href = Kernel_Shared.plantilla.layout;
    }

    clearControls() {
        $('#txtCurrentPassword').dxTextBox('instance').reset();
        $('#txtNewPassword').dxTextBox('instance').reset();
        $('#txtConfirmPassword').dxTextBox('instance').reset();
    }
}

/*REDUX METHODS*/
function mapStateToProps(state: any) {
    return {
        changePassword: state.changePassword
        //changeUser: state.changeUser
    }
}

export default connect(mapStateToProps)(ChangePasswordUser);