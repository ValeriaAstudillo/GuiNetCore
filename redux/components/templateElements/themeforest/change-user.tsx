/*REACT LIBRARIES*/
import * as React from "react"
import {connect} from 'react-redux'

import * as changeUserAction from "../../../actions/change-user-actions"

/*REACT CHILD COMPONENTS*/

/*GLOBAL VARIABLES*/
var offices = new DevExpress.data.DataSource({
    store: {
        data: [],
        type: 'array'
    }
})

var profiles = new DevExpress.data.DataSource({
    store: {
        data: [],
        type: 'array'
    }
})

var selectOffice: any = null;
var selectProfile: any = null;
var optionsUser: any = null;
var transactionsProfile: any = [];
var profilesOfficesTransactions: any = [];
var groupValidation = 'CHANGEUSER';

var auxUser: any = null;
var auxProfileOfficeTransactions: any = [];
var auxNameServicesServer: any = null;
var auxNameServerBDD: any = null;
var that;


/*REACT COMPONENT*/
class ChangeNewUser extends React.Component<any, any>{
    
    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            profile: 0,
            office: 0,
            selectOfficeProfile: false
        };
        this.initializeAreas = this.initializeAreas.bind(this);
        this.logIn = this.logIn.bind(this);
        this.getModel = this.getModel.bind(this);
        this.resetControls = this.resetControls.bind(this);
        this.setSession = this.setSession.bind(this);
        this.changeEventComboOffice = this.changeEventComboOffice.bind(this);
        this.changeEventComboProfile = this.changeEventComboProfile.bind(this);
        that = this;
    }

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {        
        return (
            <div className="content-middle box-controls" style={{ maxWidth:500 }}>
                <span>{CORE_TAG('ChangeUser')}</span>
                <div className="row">
                    <div className="col-lg-12">
                        <label className="tags-form">{CORE_TAG('UserName')}</label>
                        <div id="txtUserName"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <label className="tags-form">{CORE_TAG('Password')}</label>
                        <div id="txtPassword"></div>
                    </div>
                </div>
                <div className="row" id="areaOficina" style={{ display: "none" }}>
                    <div className="col-lg-12">
                        <label className="tags-form">{CORE_TAG('Office')}</label>
                        <div id="cmbOffice"></div>
                    </div>
                </div>
                <div className="row" id="areaPerfil" style={{ display: "none" }}>
                    <div className="col-lg-12">
                        <label className="tags-form">{CORE_TAG('Profile')}</label>
                        <div id="cmbProfile"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div id="summaryValidation"></div>
                    </div>
                </div>
                <div className="row" style={{ textAlign: "center" }}>
                    <div className="col-lg-12">
                        <div id="btnLogin"></div>&nbsp; &nbsp;
                        <div id="btnReset"></div>
                    </div>
                </div>
            </div>
        )
    }

    /*componentDidMount: Only get called once, as soon as the render method has been executed.
        - Enables to define DOM manipulations or data fetching operations.
    */
    componentDidMount() {
        var validationUserName = validateRequired(groupValidation, CORE_TAG('UserName'));
        var userNameConfiguration: DevExpress.ui.dxTextBoxOptions;
        userNameConfiguration = setupTextBoxControl(this.props.changeUser.user.userName, 32, CORE_TAG('UserName'), typeLetter.upper, undefined, false, typeCharAllowed.OnlyTextAndNumber);
        $("#txtUserName").dxTextBox(userNameConfiguration).dxValidator(validationUserName);

        var validationPassword = validateRequired(groupValidation, CORE_TAG('Password'));
        var passwordConfiguration: DevExpress.ui.dxTextBoxOptions;
        passwordConfiguration = setupTextPasswordControl(this.props.changeUser.user.userPassword, 128);
        $("#txtPassword").dxTextBox(passwordConfiguration).dxValidator(validationPassword);

        var oficinaConfiguration: DevExpress.ui.dxSelectBoxOptions;
        oficinaConfiguration = setupComboBoxControl(offices, 'NombreOficina', 'IdOficina', this.state.office, undefined, undefined, true);
        $("#cmbOffice").dxSelectBox(oficinaConfiguration);

        var profileConfiguration: DevExpress.ui.dxSelectBoxOptions;
        profileConfiguration = setupComboBoxControl(profiles, 'NombrePerfil', 'IdPerfil', this.state.profile, undefined, undefined, true);
        $("#cmbProfile").dxSelectBox(profileConfiguration);

        var validationConfiguration: DevExpress.ui.dxValidationSummaryOptions;
        validationConfiguration = setupSummaryValidation(groupValidation);
        $("#summaryValidation").dxValidationSummary(validationConfiguration);

        var loginConfiguration: DevExpress.ui.dxButtonOptions;
        loginConfiguration = setupButtonControl(CORE_TAG('SignIn'), this.logIn, groupValidation, typeButtons.Default, iconosCore.sign_in);
        $("#btnLogin").dxButton(loginConfiguration);

        var resetearConfiguration: DevExpress.ui.dxButtonOptions;
        resetearConfiguration = setupButtonControl(CORE_TAG('Reset'), this.resetControls, groupValidation);
        $("#btnReset").dxButton(resetearConfiguration);

        this.initializeAreas();
        
    }

    /*METHODS*/
    initializeAreas() {
        $('#areaOficina').hide();
        $('#areaPerfil').hide();
        initToolBar();
    }

    logIn(params: any) {
        debugger;   
        try {
            if (this.props.changeUser.selectOfficeProfile.selectOfficeProfile == false) {
                var result = params.validationGroup.validate();
                if (result.isValid) {
                    this.props.dispatch(
                        changeUserAction.setUserState(
                            $("#txtUserName").dxTextBox('option', 'value'),
                            $("#txtPassword").dxTextBox('option', 'value'))
                    );
                    var optionsLogin = this.getModel();
                    
                    ChangeUser(optionsLogin, SesionWeb().Usuario.CodigoUsuario, "changeUser", function (data) {
                        optionsUser = data;
                        profilesOfficesTransactions = optionsUser.PerfilOficinaTransacciones;
                        if (optionsUser.PerfilOficinaTransacciones.length > 1) {
                            that.props.dispatch(
                                changeUserAction.setSelectOfficeProfileState(true)
                            );
                            $('#areaOficina').show();
                            $('#areaPerfil').show();
                            for (var i = 0; i < optionsUser.PerfilOficinaTransacciones.length; i++) {
                                var dataSearch = searchArray(offices.store()._array, 'IdOficina', optionsUser.PerfilOficinaTransacciones[i].IdOficina, searchOperations.Equal);
                                if (dataSearch.length == 0)
                                    offices.store().insert(optionsUser.PerfilOficinaTransacciones[i]);
                            }
                            changePropertyControl('#cmbOffice', typeControl.SelectBox, 'dataSource', offices.store()._array);
                            changePropertyControl('#cmbOffice', typeControl.SelectBox, 'onValueChanged', that.changeEventComboOffice);
	                        changePropertyControl('#cmbProfile', typeControl.SelectBox, 'onValueChanged', that.changeEventComboProfile);
                            changePropertyControl('#txtUserName', typeControl.TextBox, 'disabled', true);
                            changePropertyControl('#txtPassword', typeControl.TextBox, 'disabled', true);
                        } else if (optionsUser.PerfilOficinaTransacciones.length == 1) {
                            changePropertyControl('#cmbOffice', typeControl.SelectBox, 'dataSource', optionsUser.PerfilOficinaTransacciones);
                            changePropertyControl('#cmbOffice', typeControl.SelectBox, 'onValueChanged', that.changeEventComboOffice);
	                        changePropertyControl('#cmbProfile', typeControl.SelectBox, 'onValueChanged', that.changeEventComboProfile);
                            changePropertyControl('#cmbOffice', typeControl.SelectBox, 'value', optionsUser.PerfilOficinaTransacciones[0].IdOficina);

                            InputSystemLogin(optionsUser.Usuario.CodigoUsuario, function () {
                                debugger;
                                that.setSession(optionsUser); 
                                location.href = Kernel_Shared.plantilla.layout;
                            })
                        }
                    });
                } else {
                    showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE('ErrorData'));
                }
            } else {
                if (!this.props.changeUser.office.office) {
                    showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE('SelectOffice'), function () {
                        $('#cmbOffice').dxSelectBox('instance').focus();
                    });

                    return;
                }

                if (!this.props.changeUser.profile.profile) {
                    showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE('SelectProfile'), function () {
                        $('#cmbProfile').dxSelectBox('instance').focus();
                    });

                    return;
                }
                InputSystemLogin(optionsUser.Usuario.CodigoUsuario, function () {
                    that.setSession(optionsUser);
                    location.href = Kernel_Shared.plantilla.layout;
                });
            }
        } catch (e) {
            showErrorMessage(CORE_TAG('ErrorMessage'), e);
        }
    }

    getModel() {
        var optionsLogin = {
            Usuario: auxUser,
            PerfilOficinaTransacciones: auxProfileOfficeTransactions,
            NombreUsuario: this.props.changeUser.user.userName,
            Clave: this.props.changeUser.user.userPassword,
            NombreServidorServicios: auxNameServicesServer,
            NombreServidorBDD: auxNameServerBDD,
            IntentosActualAcceso: 0,
            IntentosUltimoAcceso: 0,
            IdPerfil: this.props.changeUser.profile.profile ? this.props.changeUser.profile.profile : 0,
            Oficina: this.props.changeUser.office.office ? this.props.changeUser.office.office : 0,
            IpMaquina: Kernel_Shared.IpMaquina,
            HostName: Kernel_Shared.HostName
        }
        return optionsLogin;
    }

    setSession(data: any) {
        var dataSession = {
            PerfilOficinaTransacciones: JSON.stringify(profilesOfficesTransactions),
            Transacciones: JSON.stringify(transactionsProfile),
            IpEstacion: data.IpMaquina,
            NombreEstacion: data.HostName,
            ServidorServicios: data.NombreServidorServicios,
            ServidorBDD: data.NombreServidorBDD,
            Usuario: JSON.stringify(data.Usuario),
            Sesion: JSON.stringify(data.Sesion)
        }
        startSession(dataSession);
    }

    changeEventComboOffice(e: any) {
        debugger;
        if (e.value) {
            selectOffice = $('#cmbOffice').dxSelectBox('option', 'selectedItem');
            this.props.dispatch(
                changeUserAction.setOfficeState(selectOffice)
            );
            optionsUser.Sesion.IdOficina = selectOffice.IdOficina;
            optionsUser.Sesion.OficinaExterna = selectOffice.CodigoOficina;
            optionsUser.Sesion.NombreOficina = selectOffice.NombreOficina;
            profiles.store()._array = searchArray(profilesOfficesTransactions, 'IdOficina', selectOffice.IdOficina, searchOperations.Equal);
            changePropertyControl('#cmbProfile', typeControl.SelectBox, 'dataSource', profiles.store()._array);
            changePropertyControl('#cmbProfile', typeControl.SelectBox, 'value', profiles.store()._array[0].IdPerfil);
        }
    }

    changeEventComboProfile(e: any) {
        debugger;
        if (e.value) {
            selectProfile = $('#cmbProfile').dxSelectBox('option', 'selectedItem');
            this.props.dispatch(
                changeUserAction.setProfileState(selectProfile)
            );
            optionsUser.Sesion.IdPerfilUsuario = selectProfile.IdPerfil;
            optionsUser.Sesion.CodigoPerfil = selectProfile.CodigoPerfil;
            optionsUser.Sesion.NombrePerfil = selectProfile.NombrePerfil;
            transactionsProfile = searchArray(searchArray(profilesOfficesTransactions, 'IdOficina', selectOffice.IdOficina, searchOperations.Equal), 'IdPerfil', selectProfile.IdPerfil, searchOperations.Equal);
        }
    }

    /*errorData(dataError: any) {
        StartUp.UserNameLogin = this.props.changeUser.user.userName;
        if (dataError.contains('(Clave Generada)') || dataError.contains('(Clave Expirada)')) {
            Security.app.navigate('changePasswordSys');
        }
    }*/

    resetControls(params: any) {
        this.props.dispatch(
            changeUserAction.setSelectOfficeProfileState(false)
        );
        params.validationGroup.reset();
        changePropertyControl('#txtUserName', typeControl.TextBox, 'disabled', false);
        changePropertyControl('#txtPassword', typeControl.TextBox, 'disabled', false);
        $('#txtUserName').dxTextBox('instance').reset();
        $('#txtPassword').dxTextBox('instance').reset();
        $('#cmbOffice').dxSelectBox('instance').reset();
        $('#cmbProfile').dxSelectBox('instance').reset();
        offices.store()._array = [];
        profiles.store()._array = [];
        changePropertyControl('#cmbOffice', typeControl.SelectBox, 'dataSource', offices.store()._array);
        changePropertyControl('#cmbProfile', typeControl.SelectBox, 'dataSource', profiles.store()._array);
        $('#txtUserName').dxTextBox('instance').focus();
        $('#areaOficina').hide();
        $('#areaPerfil').hide();
    }
}

/*REDUX METHODS*/
function mapStateToProps(state: any) {
    return {
        changeUser: state.changeUser
    }
}

export default connect(mapStateToProps)(ChangeNewUser);