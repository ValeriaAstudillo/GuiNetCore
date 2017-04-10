/*REACT LIBRARIES*/
import * as React from "react"

/*REACT CHILD COMPONENTS*/

/*GLOBAL VARIABLES*/

var profilesOfficesTransactions = SesionWeb().PerfilOficinaTransacciones;
var selectOffice: any = null;
var selectProfile: any  = null;
var transactionsProfile: any = [];

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

var groupValidation = 'CAMBIAROFICINAPERFIL';

/*REACT COMPONENT*/
class ChangeOfficeProfile extends React.Component<any, any>{

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
        this.acceptChanges = this.acceptChanges.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
        this.changeEventComboOffice = this.changeEventComboOffice.bind(this);
        this.changeEventComboProfile = this.changeEventComboProfile.bind(this);
        this.initialize = this.initialize.bind(this);
        this.setSession = this.setSession.bind(this);
    }

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {      
        return (
            <div className="content-middle box-controls" style={{ maxWidth: 500 }}>
                <span>{CORE_TAG('ChangeOfficeProfile')}</span>
                <div className="row">
                    <div className="col-lg-12">
                        <label className="tags-form">{CORE_TAG('Office')}</label>
                        <div id="cmbOffice"></div>
                    </div>
                </div>
                <div className="row">
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
                <div className="row" style={{textAlign:"center"}}>
                    <div id="btnAccept"></div>&nbsp; &nbsp;
                    <div id="btnCancelar"></div>
                </div>
            </div>
        )
    }

    /*componentDidMount: Only get called once, as soon as the render method has been executed.
        - Enables to define DOM manipulations or data fetching operations.
    */
    componentDidMount() {
        debugger;        
        var comboOfficeConfiguration: DevExpress.ui.dxSelectBoxOptions;
        comboOfficeConfiguration = setupComboBoxControl(offices, 'NombreOficina', 'IdOficina');
        $("#cmbOffice").dxSelectBox(comboOfficeConfiguration);

        var comboProfileConfiguration: DevExpress.ui.dxSelectBoxOptions;
        comboProfileConfiguration = setupComboBoxControl(profiles, 'NombrePerfil', 'IdPerfil');
        $("#cmbProfile").dxSelectBox(comboProfileConfiguration);

        var acceptConfiguration: DevExpress.ui.dxButtonOptions;
        acceptConfiguration = setupButtonControlDefault(classButtons.Accept, this.acceptChanges, groupValidation, true);
        $("#btnAccept").dxButton(acceptConfiguration);

        var acceptConfiguration: DevExpress.ui.dxButtonOptions;
        acceptConfiguration = setupButtonControlDefault(classButtons.Cancel, this.cancelChanges, groupValidation, true);
        $("#btnCancel").dxButton(acceptConfiguration);

        var validationConfiguration: DevExpress.ui.dxValidationSummaryOptions;
        validationConfiguration = setupSummaryValidation(groupValidation);
        $("#summaryValidation").dxValidationSummary(validationConfiguration);

        changePropertyControl('#cmbOffice', typeControl.SelectBox, 'onValueChanged', this.changeEventComboOffice);
        changePropertyControl('#cmbProfile', typeControl.SelectBox, 'onValueChanged', this.changeEventComboProfile);  
        this.initialize();
        
    }

    acceptChanges(params: any) {
        debugger;
        try {
            var result = params.validationGroup.validate();
            if (result.isValid == true) {
                if (selectOffice.IdOficina == SesionWeb().Sesion.IdOficina && selectProfile.IdPerfil == SesionWeb().Sesion.IdPerfilUsuario) {
                    showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE_ADD('UserLoginSelectProfile',[SesionWeb().Usuario.CodigoUsuario,selectProfile.NombrePerfil,selectOffice.NombreOficina] ));
                    return;
                }
                var user = SesionWeb().Usuario;
                this.setSession();
                SaveUserLog(user, Security.stateConection.Online, Security.actionsLogSecurity.CHANGEOFFICEPROFILE, function () {
                    location.href = Kernel_Shared.plantilla.layout;
                });
            } else {
                showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE('ErrorData'));
            }
        } catch (e) {
            showErrorMessage(CORE_TAG('ErrorMessage'), e);
        }
    }

    setSession() {
        var sesion = JSON.parse(sessionStorage.Sesion);

        sesion.IdPerfilUsuario = selectProfile.IdPerfil;
        sesion.IdOficina = selectOffice.IdOficina;
        sesion.NombreOficina = selectOffice.NombreOficina;
        sesion.CodigoPerfil = selectProfile.CodigoPerfil;
        sesion.NombrePerfil = selectProfile.NombrePerfil;
        sessionStorage.Transacciones = JSON.stringify(transactionsProfile);
        sessionStorage.Sesion = JSON.stringify(sesion);
    }

    cancelChanges(params: any) {
        params.validationGroup.reset();
        location.href = Kernel_Shared.plantilla.layout;
        $('#cmbOffice').dxSelectBox('instance').reset();
        $('#cmbProfile').dxSelectBox('instance').reset();
    }

    initialize() {
        debugger;
        //initToolBar();
           
        for (var i = 0; i < profilesOfficesTransactions.length; i++) {
            var dataSearch = searchArray(offices.store()._array, 'IdOficina', profilesOfficesTransactions[i].IdOficina, searchOperations.Equal);
            if (dataSearch.length == 0)
                offices.store().insert(profilesOfficesTransactions[i]);
        }
        changePropertyControl('#cmbOffice', typeControl.SelectBox, 'value', SesionWeb().Sesion.IdOficina);
    }

    changeEventComboOffice(e: any) {
        debugger;
        if (e.value) {
            selectOffice = e.value;
            profiles.store()._array = searchArray(profilesOfficesTransactions, 'IdOficina', selectOffice, searchOperations.Equal);
            changePropertyControl('#cmbProfile', typeControl.SelectBox, 'dataSource', profiles.store()._array);
            changePropertyControl('#cmbProfile', typeControl.SelectBox, 'value', profiles.store()._array[0].IdPerfil);
            selectOffice = $('#cmbOffice').dxSelectBox('option', 'selectedItem');
        }
    }

    changeEventComboProfile(e: any) {
        debugger;
        if (e.value) { 
            selectProfile = $('#cmbProfile').dxSelectBox('option', 'selectedItem');
            transactionsProfile = searchArray(searchArray(profilesOfficesTransactions, 'IdOficina', selectOffice.IdOficina, searchOperations.Equal), 'IdPerfil', selectProfile.IdPerfil, searchOperations.Equal)[0].Transacciones;
        }
    }
}

export default ChangeOfficeProfile;