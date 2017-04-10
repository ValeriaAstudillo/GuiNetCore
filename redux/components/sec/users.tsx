/*REACT LIBRARIES*/
import * as React from "react"
import { browserHistory } from 'react-router'

/*REACT CHILD COMPONENTS*/

/*GLOBAL VARIABLES*/

var idInstitucion = 0;
var esAdministrativa = false;
var profilesInstitution: any = [];
var selectInstitution: any = null;
var userProfiles = new DevExpress.data.DataSource({
    store: [],
});

//var activesInstitutions: any;

var officesInstitution: any = []

var groupValidation = 'USUARIOS';

/*-------------------------C O L U M N A S   D E L   G R I D-------------------------------*/
var columnsGridUser = [
    setupTextColumn('CodigoUsuario', CORE_TAG('UserName')),
    setupTextColumn('NumeroIdentificacion', CORE_TAG('Identification')),
    setupTextColumn('PrimerNombre', CORE_TAG('FirstName')),
    setupTextColumn('SegundoNombre', CORE_TAG('MiddleName'), 'auto', false),
    setupTextColumn('ApellidoPaterno', CORE_TAG('LastName')),
    setupTextColumn('ApellidoMaterno', CORE_TAG('MotherLastName'), 'auto', false),
    setupTextColumn('CorreoElectronico', CORE_TAG('Email'), 'auto', false),
    setupDateColumn('FechaIngreso', CORE_TAG('AdmissionDate')),
    setupDateColumn('FechaSalida', CORE_TAG('DepartureDate'), 'auto', false),
    setupTextColumn('EstacionUltimoAcceso', CORE_TAG('AccessStation'), 'auto', false),
    setupDateTimeColumn('FechaUltimoAcceso', CORE_TAG('DateLastAccess'), 'auto', false),
    setupStyleColumn('Estado', CORE_TAG('StateConnection'), 'auto', false, function (options:any) {
        var htmlColumn = '';
        switch (options.value) {
            case Security.stateConection.Offline:
                htmlColumn = "<div style='color:blue'><i style='margin-right:3px; display:inline-block' class='fa " + iconosCore.sign_in + "' /> <span style='display:inline-block; font-size:12px'>" + CORE_TAG('Offline').toUpperCase() + "</span></div>"
                break;
            case Security.stateConection.Online:
                htmlColumn = "<div style='color:green'><i style='margin-right:3px; display:inline-block' class='fa " + iconosCore.check_square_o + "' /> <span style='display:inline-block; font-size:12px'>" + CORE_TAG('Online').toUpperCase() + "</span></div>"
                break;
            case Security.stateConection.Lock:
            case Security.stateConection.AutoLock:
                htmlColumn = "<div style='color:red'><i style='margin-right:3px; display:inline-block' class='fa " + iconosCore.lock + "' /> <span style='display:inline-block; font-size:12px'>" + CORE_TAG('Lock').toUpperCase() + "</span></div>"
                break;
            default:
                break;
        }
        return htmlColumn;
    }),
    setupBoolColumn('EsActivo', CORE_TAG('IsActive'), 'auto', false),
]

var columnasGridPerfiles = [
    setupSelectionColumn('IdPerfil', CORE_TAG('NameProfile'), profilesInstitution, 'Nombre', 'IdPerfil', '100%', false, true),
    setupSelectionColumn('IdOficina', CORE_TAG('Office'), officesInstitution, 'Nombre', 'IdOficina', '100%', false, true),
    setupDateColumn('FechaDesde', CORE_TAG('DateFrom'), '100%', false, true),
    setupDateColumn('FechaHasta', CORE_TAG('DateAt'), '100%', false, false),
    setupCheckColumn('EsActivo', CORE_TAG('IsActive'), 'auto'),
]

var summariesGrid = [
    setupSummaryColumn('CodigoUsuario', typeSummaryGrid.Count),
]

/*---------------U S U A R I O   S E L E C C I O N A D O   D E L   G R I D-----------------*/
var selectUser: any = null;

/*-------------------------F U E N T E   D A T O S   G R I D---------------------------*/
var listUsers = new DevExpress.data.DataSource({
    store: {
        type: "array",
        data: [],
        key: "IdUsuario"
    },
})

/*REACT COMPONENT*/
class Users extends React.Component<any, any>{

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
        this.state = {
            isEdit: false,
            IdUsuario: 0,
            IdInstitucion: '',
            TipoIdentificacion: '',
            NumeroIdentificacion: '',
            PrimerNombre: '',
            SegundoNombre: '',
            ApellidoPaterno: '',
            ApellidoMaterno: '',
            CodigoUsuario: '',
            CorreoElectronico: '',
            FechaIngreso: '',
            FechaSalida: '',
            Estado: Security.stateConection.Offline,
            EsActivo: '',
            FechaExpiracion: null,
            Clave: null,
            CodigoPregunta: null,
            Respuesta: null,
            EsPersonalizada: null,
            DescripcionPregunta: null,
            RespuestaPregunta: null,
            Observaciones: null,
            FechaUltimoAcceso: null,
            EstacionUltimoAcceso: null,
            IntentosActualAcceso: 0,
            IntentosUltimoAcceso: 0,
            FechaCreacion: new Date(),
            IdUsuarioCreacion: null,
            IdOficinaCreacion: null,
            FechaActualizacion: null,
            IdUsuarioActualizacion: null,
            IdOficinaActualizacion: null,
	        ObjectState: null
        }
        this.initializeToolBar = this.initializeToolBar.bind(this);
        this.newUser = this.newUser.bind(this);
        this.clearControls = this.clearControls.bind(this);
        this.editUser = this.editUser.bind(this);
        this.unlockUser = this.unlockUser.bind(this);
        this.generateKey = this.generateKey.bind(this);
        this.getAllUsersByInstitution = this.getAllUsersByInstitution.bind(this);        
        this.changedEvtTxtPrimerNombre = this.changedEvtTxtPrimerNombre.bind(this);
        this.generateUserName = this.generateUserName.bind(this);
        this.changedEvtTxtApellidoPaterno = this.changedEvtTxtApellidoPaterno.bind(this);
        this.changedEvtTxtUserName = this.changedEvtTxtUserName.bind(this);
        this.changedEvtCmbInstitutionFilter = this.changedEvtCmbInstitutionFilter.bind(this);
        //this.changedEvtCmbInstitution = this.changedEvtCmbInstitution.bind(this);
        this.selectionEvtCmbInstitution = this.selectionEvtCmbInstitution.bind(this);
        this.changedEvtDtAdmissionDate = this.changedEvtDtAdmissionDate.bind(this);
        this.selectionEvtGrdUsers = this.selectionEvtGrdUsers.bind(this);
        this.newRowEvtGrdProfilesInstitutions = this.newRowEvtGrdProfilesInstitutions.bind(this);
        this.rowInsertingEvtGrdProfilesInstitutions = this.rowInsertingEvtGrdProfilesInstitutions.bind(this);
        this.editingStartEvtGrdProfilesInstitutions = this.editingStartEvtGrdProfilesInstitutions.bind(this);
        this.rowUpdatingEvtGrdProfilesInstitutions = this.rowUpdatingEvtGrdProfilesInstitutions.bind(this);
        this.shownEvtPopup = this.shownEvtPopup.bind(this);

        this.saveUser = this.saveUser.bind(this);
        this.getUserModel = this.getUserModel.bind(this);
        this.successSaveUser = this.successSaveUser.bind(this);
        
    }

    /*componentWillMount: is called before the render method is executed.
    */
    /*componentWillMount() {
        activesInstitutions = new DevExpress.data.DataSource({
            store: getActivesIntitutions(),
        });
    }*/

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        return (
            <div>
                <div id="barraHerramienta" className="toolbar" style={{ display: "block", marginBottom: 20, position: "relative", marginLeft: 0 }}></div>
                <div id="mapaSitio" className="page-bar" style={{ display: "block", marginTop: 20, position: "relative" }}>
                    <ul className="page-breadcrumb">
                        <li>
                            <i id="iconoModulo" className="fa fa-lock"></i>&nbsp;
                            <a id="modulo">SEGURIDAD</a>&nbsp;
                            <i className="fa fa-angle-right"></i>&nbsp;
                        </li>
                        <li>
                            <i id="iconoSubModulo" className="fa fa-user"></i>&nbsp;
                            <a id="submodulo">USUARIOS</a>&nbsp;
                            <i className="fa fa-angle-right"></i>&nbsp;
                        </li>
                        <li>
                            <i id="iconoPantalla" className="fa fa-cogs"></i>&nbsp;
                            <a id="tituloPantalla">Administración</a>&nbsp;
                        </li>
                    </ul>
                </div>
                <div id="loadPanel"></div>
                <div className="content-middle" style={{ width: '98%' }}>
                    <div className="row box-controls">
                        <span>{CORE_TAG('Filters')}</span>
                        <div className="col-lg-3">
                            <div className="tags-form">{CORE_TAG('Institution')}</div>
                            <div id="cmbInstitucionFiltro"></div>
                        </div>
                    </div>                
                    <div id="grdUsuarios"></div>
                </div>
                <div id="popupDatosUsuario">
                    <div id="scrollView">                   
                        <div className="row">
                            <div className="col-lg-4">
                                <label className="tags-form">{CORE_TAG('Institution')}</label>
                                <div id="cmbInstitucion"></div>
                            </div>
                            <div className="col-lg-4">
                                <label className="tags-form">{CORE_TAG('TypeDNI')}</label>
                                <div id="cmbTipoIdentificacion"></div>
                            </div>
                            <div className="col-lg-4">
                                <label className="tags-form">{CORE_TAG('Identification')}</label>
                                <div id="txtIdentificacion"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="tags-form">{CORE_TAG('FirstName')}</label>
                                <div id="txtPrimerNombre"></div>
                            </div>
                            <div className="col-lg-6">
                                <label className="tags-form">{CORE_TAG('MiddleName')}</label>
                                <div id="txtSegundoNombre"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="tags-form">{CORE_TAG('LastName')}</label>
                                <div id="txtApellidoPaterno"></div>
                            </div>
                            <div className="col-lg-6">
                                <label className="tags-form">{CORE_TAG('MotherLastName')}</label>
                                <div id="txtApellidoMaterno"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="tags-form">{CORE_TAG('UserName')}</label>
                                <div id="txtUserName"></div>
                            </div>
                            <div className="col-lg-6">
                                <label className="tags-form">{CORE_TAG('Email')}</label>
                                <div id="txtEmail"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <label className="tags-form">{CORE_TAG('AdmissionDate')}</label>
                                <div id="dtFechaIngreso"></div>
                            </div>
                            <div className="col-lg-4">
                                <label className="tags-form">{CORE_TAG('DepartureDate')}</label>
                                <div id="dtFechaSalida"></div>
                            </div>
                            <div className="col-lg-4">
                                <label className="tags-form">{CORE_TAG('IsActive')}</label>
                                <div id="swEsActivo" style={{ display: 'block' }}></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="title-1">
                                <i className="fa fa-cubes"></i>&nbsp;
                                <span>{CORE_TAG('ProfileToAssign') }</span>&nbsp;
                                <label>{'(' + CORE_MESSAGE('InputOneProfile') + ')'}</label>
                            </div>
                            <div className="col-lg-12">
                                <div id="grdPerfilesInstitucion"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="summaryValidationUser"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div id="btnAceptar" style={{ display: 'block' }}></div>
                            </div>
                            <div className="col-lg-6">
                                <div id="btnCancelar" style={{ display: 'block' }}></div>
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
    
        var loadPanelConfiguration: DevExpress.ui.dxLoadPanelOptions;
        loadPanelConfiguration = { showIndicator: true, visible: false, deferRendering: false, shadingColor: '#9e9c9e' };
        $("#loadPanel").dxLoadPanel(loadPanelConfiguration);        

        var institutionFilterConfiguration: DevExpress.ui.dxSelectBoxOptions;
        institutionFilterConfiguration = setupComboBoxControl([], 'NombreInstitucion', 'IdInstitucion');
        $("#cmbInstitucionFiltro").dxSelectBox(institutionFilterConfiguration);

        var gridUsersConfiguration: DevExpress.ui.dxDataGridOptions;
        gridUsersConfiguration = setupDataGrid([], columnsGridUser, modeSelection.Single, true, true, false, summariesGrid);
        $("#grdUsuarios").dxDataGrid(gridUsersConfiguration);

        var popUsersConfiguration: DevExpress.ui.dxPopupOptions;
        popUsersConfiguration = setupPopup(false, '50%', 'auto', true, (CORE_TAG('ManagementUsers')).toUpperCase(), false, false);
        $("#popupDatosUsuario").dxPopup(popUsersConfiguration);

        var validationInstitution = validateRequired(groupValidation, CORE_TAG('Institution'));
        var institutionConfiguration: DevExpress.ui.dxSelectBoxOptions;
        institutionConfiguration = setupComboBoxControl([], 'NombreInstitucion', 'IdInstitucion', this.state.IdInstitucion, false, stateControl.disabled);
        $("#cmbInstitucion").dxSelectBox(institutionConfiguration).dxValidator(validationInstitution);

        var validationTypeId = validateRequired(groupValidation, CORE_TAG('TypeDNI'));
        var typeIdConfiguration: DevExpress.ui.dxSelectBoxOptions;
        typeIdConfiguration = setupComboBoxControl([], 'Descripcion', 'CodigoDetalle', this.state.TipoIdentificacion, false);
        $("#cmbTipoIdentificacion").dxSelectBox(typeIdConfiguration).dxValidator(validationTypeId);

        var validationId = validateDNI(true, groupValidation, CORE_TAG('Identification'));
        var IdConfiguration: DevExpress.ui.dxTextBoxOptions;
        IdConfiguration = setupTextBoxDNIControl(this.state.NumeroIdentificacion);
        $("#txtIdentificacion").dxTextBox(IdConfiguration).dxValidator(validationId);

        var validationFirstName = validateRequired(groupValidation, CORE_TAG('FirstName'));
        var firstNameConfiguration: DevExpress.ui.dxTextBoxOptions;
        firstNameConfiguration = setupTextBoxControl(this.state.PrimerNombre, 32, CORE_TAG('FirstName'), typeLetter.upper, null, true, typeCharAllowed.OnlyText);
        $("#txtPrimerNombre").dxTextBox(firstNameConfiguration).dxValidator(validationFirstName);

        var middleNameConfiguration: DevExpress.ui.dxTextBoxOptions;
        middleNameConfiguration = setupTextBoxControl(this.state.SegundoNombre, 32, CORE_TAG('MiddleName'), typeLetter.upper, null, true, typeCharAllowed.OnlyText);
        $("#txtSegundoNombre").dxTextBox(middleNameConfiguration);

        var validationLastName = validateRequired(groupValidation, CORE_TAG('LastName'));
        var lastNameConfiguration: DevExpress.ui.dxTextBoxOptions;
        lastNameConfiguration = setupTextBoxControl(this.state.ApellidoPaterno, 32, CORE_TAG('LastName'), typeLetter.upper, null, true, typeCharAllowed.OnlyText);
        $("#txtApellidoPaterno").dxTextBox(lastNameConfiguration).dxValidator(validationLastName);
        
        var motherLastNameConfiguration: DevExpress.ui.dxTextBoxOptions;
        motherLastNameConfiguration = setupTextBoxControl(this.state.ApellidoMaterno, 32, CORE_TAG('MotherLastName'), typeLetter.upper, null, true, typeCharAllowed.OnlyText);
        $("#txtApellidoMaterno").dxTextBox(motherLastNameConfiguration);

        var validationUserName = validateRequired(groupValidation, CORE_TAG('UserName'));
        var userNameConfiguration: DevExpress.ui.dxTextBoxOptions;
        userNameConfiguration = setupTextBoxControl(this.state.CodigoUsuario, 32, CORE_TAG('UserName'), typeLetter.upper, null, false, typeCharAllowed.OnlyTextAndNumber);
        $("#txtUserName").dxTextBox(userNameConfiguration).dxValidator(validationUserName);

        var validationEmail = validateEmail(true, groupValidation, CORE_TAG('Email'));
        var emailConfiguration: DevExpress.ui.dxTextBoxOptions;
        emailConfiguration = setupEmailControl(this.state.CorreoElectronico);
        $("#txtEmail").dxTextBox(emailConfiguration).dxValidator(validationEmail);

        var validationAdmissionDate = validateRequired(groupValidation, CORE_TAG('AdmissionDate'));
        var admissionDateConfiguration: DevExpress.ui.dxDateBoxOptions;
        admissionDateConfiguration = setupDateControl(this.state.FechaIngreso, new Date().addDate(dateParts.Days, -1));
        $("#dtFechaIngreso").dxDateBox(admissionDateConfiguration).dxValidator(validationAdmissionDate);

        var departureDateConfiguration: DevExpress.ui.dxDateBoxOptions;
        departureDateConfiguration = setupDateControl(this.state.FechaSalida, new Date().addDate(dateParts.Days, -1));
        $("#dtFechaSalida").dxDateBox(departureDateConfiguration);

        var isActiveConfiguration: DevExpress.ui.dxSwitchOptions;
        isActiveConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), this.state.EsActivo, stateControl.disabled);
        $("#swEsActivo").dxSwitch(isActiveConfiguration);

        var gridInstitutionProfilesConfiguration: DevExpress.ui.dxDataGridOptions;
        gridInstitutionProfilesConfiguration = setupDataGrid(userProfiles, columnasGridPerfiles, modeSelection.None, true, false, true, null, null);
        $("#grdPerfilesInstitucion").dxDataGrid(gridInstitutionProfilesConfiguration);

        var validationConfiguration: DevExpress.ui.dxValidationSummaryOptions;
        validationConfiguration = setupSummaryValidation(groupValidation);
        $("#summaryValidation").dxValidationSummary(validationConfiguration);

        var acceptConfiguration: DevExpress.ui.dxButtonOptions;
        acceptConfiguration = setupButtonControlDefault(classButtons.Accept, this.saveUser, groupValidation, true);
        $("#btnAceptar").dxButton(acceptConfiguration);

        var cancelConfiguration: DevExpress.ui.dxButtonOptions;
        cancelConfiguration = setupButtonControlDefault(classButtons.Cancel, this.cancelSave, groupValidation, true);
        $("#btnCancelar").dxButton(cancelConfiguration);  

        this.initializeToolBar(); 
               
        /*idInstitucion = SesionWeb().Sesion.IdInstitucion;
        esAdministrativa = SesionWeb().Sesion.EsInstitucionAdministrativa;
        changePropertyControl('#cmbInstitucionFiltro', typeControl.SelectBox, 'value', idInstitucion);
        changePropertyControl('#cmbInstitucionFiltro', typeControl.SelectBox, 'disabled', !esAdministrativa);

        officesInstitution = getOfficesByInstitution(idInstitucion);

        var profiles = callService(Kernel_Shared.SystemModules.Seguridad, { Method: Security.methods.GetProfilesByIdInstitucion, Parameters: idInstitucion }, function (data: any) {
            profilesInstitution = data;
            columnasGridPerfiles[0].lookup.dataSource = profilesInstitution;
        }, true);
        columnasGridPerfiles[1].lookup.dataSource = officesInstitution;

        listUsers._store._array = this.getAllUsersByInstitution(idInstitucion);
        $('#grdUsuarios').dxDataGrid('option', 'dataSource', listUsers);
        callService(Kernel_Shared.SystemModules.Seguridad, { Method: Security.methods.GetProfilesByIdInstitucion, Parameters: idInstitucion }, function (data: any) {
            profilesInstitution = data;
            columnasGridPerfiles[0].lookup.dataSource = profilesInstitution;
        });*/
        
        GetActiveInstitutions(function (data) {
            //activesInstitutions = data;
            $('#cmbInstitucion').dxSelectBox('option', 'dataSource', data);
            $('#cmbInstitucionFiltro').dxSelectBox('option', 'dataSource', data);
            idInstitucion = SesionWeb().Sesion.IdInstitucion;
            esAdministrativa = SesionWeb().Sesion.EsInstitucionAdministrativa;
            changePropertyControl('#cmbInstitucionFiltro', typeControl.SelectBox, 'value', idInstitucion);
            changePropertyControl('#cmbInstitucionFiltro', typeControl.SelectBox, 'disabled', !esAdministrativa);
            GetCatalogsByCode('TipoIdentificacion', function (data) {
                $('#cmbTipoIdentificacion').dxSelectBox('option', 'dataSource', data);
            });
        })

        changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'columns', columnasGridPerfiles);             
        changePropertyControl('#txtPrimerNombre', typeControl.TextBox, 'onValueChanged', this.changedEvtTxtPrimerNombre);
        changePropertyControl('#txtApellidoPaterno', typeControl.TextBox, 'onValueChanged', this.changedEvtTxtApellidoPaterno);
        changePropertyControl('#txtUserName', typeControl.TextBox, 'onValueChanged', this.changedEvtTxtUserName);
        changePropertyControl('#cmbInstitucionFiltro', typeControl.SelectBox, 'onValueChanged', this.changedEvtCmbInstitutionFilter);
        //changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'onValueChanged', this.changedEvtCmbInstitution);
        changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'onSelectionChanged', this.selectionEvtCmbInstitution);
        changePropertyControl('#dtFechaIngreso', typeControl.DateBox, 'onValueChanged', this.changedEvtDtAdmissionDate);
        changePropertyControl('#grdUsuarios', typeControl.DataGrid, 'onSelectionChanged', this.selectionEvtGrdUsers);
        changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'onInitNewRow', this.newRowEvtGrdProfilesInstitutions);
        changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'onRowInserting', this.rowInsertingEvtGrdProfilesInstitutions);
        changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'onEditingStart', this.editingStartEvtGrdProfilesInstitutions);
        changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'onRowUpdating', this.rowUpdatingEvtGrdProfilesInstitutions);
        changePropertyControl('#popupDatosUsuario', typeControl.Popup, 'onShown', this.shownEvtPopup);
        
    }

    /*METHODS*/

    initializeToolBar() {
        setupButtonToolBar(toolBarButtons.New, this.newUser);
        setupButtonToolBar(toolBarButtons.Edit, this.editUser, stateToolBar.disabled);
        setupButtonToolBar(toolBarButtons.Other, this.unlockUser, stateToolBar.disabled, CORE_TAG('Unlock'), iconosCore.unlock);
        setupButtonToolBar(toolBarButtons.Other, this.generateKey, stateToolBar.disabled, CORE_TAG('GenerateKey'), iconosCore.key);
        setupButtonToolBar(toolBarButtons.Print, null, stateToolBar.disabled);
        setupButtonToolBar(toolBarButtons.Export, null, stateToolBar.disabled);
    }    

    newUser() {
        debugger;
        this.setState({ isEdit: false });
        var idInstitucion = $('#cmbInstitucionFiltro').dxSelectBox('option', 'value');
        changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'value', idInstitucion);
        $('#popupDatosUsuario').dxPopup('option', 'visible', true);
        changePropertyControl('#txtUserName', typeControl.TextBox, 'disabled', false);
        this.clearControls();
    }

    clearControls() {
        $('#txtIdentificacion').dxTextBox('instance').reset();
        $('#txtPrimerNombre').dxTextBox('instance').reset();
        $('#txtSegundoNombre').dxTextBox('instance').reset();
        $('#txtApellidoPaterno').dxTextBox('instance').reset();
        $('#txtApellidoMaterno').dxTextBox('instance').reset();
        $('#txtUserName').dxTextBox('instance').reset();
        $('#txtEmail').dxTextBox('instance').reset();
        $('#dtFechaIngreso').dxDateBox('instance').reset();
        $('#dtFechaSalida').dxDateBox('instance').reset();
        $('#cmbTipoIdentificacion').dxSelectBox('instance').reset();
        changePropertyControl('#swEsActivo', typeControl.Switch, 'value', true);
        changePropertyControl('#swEsActivo', typeControl.Switch, 'disabled', true);
        userProfiles._store._array = [];
        changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'dataSource', userProfiles);
    }

    editUser(currentUser: any) {
        debugger;
        if (!currentUser)
            currentUser = selectUser;
        currentUser.ObjectState = 2;
        this.setState({ isEdit: true});
        $('#grdUsuarios').dxDataGrid('instance').selectRows(currentUser.key, false);
        $('#popupDatosUsuario').dxPopup('option', 'visible', true);
        changePropertyControl('#cmbTipoIdentificacion', typeControl.SelectBox, 'value', currentUser.TipoIdentificacion);
        changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'value', currentUser.IdInstitucion);
        changePropertyControl('#txtIdentificacion', typeControl.TextBox, 'value', currentUser.NumeroIdentificacion);
        changePropertyControl('#txtPrimerNombre', typeControl.TextBox, 'value', currentUser.PrimerNombre);
        changePropertyControl('#txtSegundoNombre', typeControl.TextBox, 'value', currentUser.SegundoNombre);
        changePropertyControl('#txtApellidoPaterno', typeControl.TextBox, 'value', currentUser.ApellidoPaterno);
        changePropertyControl('#txtApellidoMaterno', typeControl.TextBox, 'value', currentUser.ApellidoMaterno);
        changePropertyControl('#txtUserName', typeControl.TextBox, 'value', currentUser.CodigoUsuario);
        changePropertyControl('#txtEmail', typeControl.TextBox, 'value', currentUser.CorreoElectronico);
        changePropertyControl('#dtFechaIngreso', typeControl.DateBox, 'value', currentUser.FechaIngreso);
        changePropertyControl('#dtFechaSalida', typeControl.DateBox, 'value', currentUser.FechaSalida);
        changePropertyControl('#swEsActivo', typeControl.Switch, 'value', currentUser.EsActivo);
        changePropertyControl('#swEsActivo', typeControl.Switch, 'disabled', false);
        changePropertyControl('#txtUserName', typeControl.TextBox, 'disabled', true);
    }

    unlockUser(currentUser: any) {
        debugger;
        if (!currentUser)
            currentUser = selectUser;

        var userName = currentUser.CodigoUsuario;
        showQuestionMessage(CORE_TAG('UnlockUser'), CORE_MESSAGE_ADD('SureUnlockUser', userName), function () {
            /*var parameters = {
                Method: Security.methods.UnlockUser,
                Parameters: userName
            };*/
            UnlockUser(userName, function (data) {
                debugger;
                showSuccessMessage(CORE_TAG('UnlockUser'), CORE_MESSAGE_ADD('UnlockUserSuccess', currentUser.CodigoUsuario), function () {
                    currentUser.Estado = Security.stateConection.Offline;
                    listUsers.store().update(currentUser.IdUsuario, currentUser);
                    changeStateToolBar(toolBarButtons.Other, stateToolBar.disabled, CORE_TAG('Unlock'));
                    $('#grdUsuarios').dxDataGrid('instance').refresh();
                });
            });
        });
    }

    generateKey(currentUser: any) {
        debugger;
        if (!currentUser)
            currentUser = selectUser;
        var userName = currentUser.CodigoUsuario;
        var strDataMsg = [userName, currentUser.NumeroIdentificacion];
        showQuestionMessage(CORE_TAG('GenerateKey'), CORE_MESSAGE_ADD('SureGenerateKey', strDataMsg), function () {
            
            GenerateKey(userName, function (data) {
                showSuccessMessage(CORE_TAG('GenerateKey'), CORE_MESSAGE_ADD('GenerateKeySuccess', data.CodigoUsuario + ',' + data.CorreoElectronico), function () {
                    currentUser.Estado = Security.stateConection.Offline;
                    listUsers.store().update(currentUser.IdUsuario, currentUser);
                    changeStateToolBar(toolBarButtons.Other, stateToolBar.disabled, CORE_TAG('Unlock'));
                    $('#grdUsuarios').dxDataGrid('instance').refresh();
                });
            });
        });
    }

    getAllUsersByInstitution(idInstitution: any) {
        var parameters = {
            Method: Security.methods.GetUsersByInstitution,
            Parameters: idInstitution
        }
        var users = callService(Kernel_Shared.SystemModules.Seguridad, parameters);
        return users;
    }

    generateUserName() {
        this.setState({ PrimerNombre: $('#txtPrimerNombre').dxTextBox('option', 'value'), ApellidoPaterno: $('#txtApellidoPaterno').dxTextBox('option', 'value') });
        var userName = '';
        var firstName = this.state.PrimerNombre;
        var lastName = this.state.ApellidoPaterno;
        if (firstName && lastName)
            userName = firstName.substring(0, 1) + lastName;

        return userName.withoutAccent().withoutSpecialLetter().toUpperCase();
    }
    
    /*--------------------------------O N V A L U E C H A N G E D------------------------------*/

    changedEvtTxtPrimerNombre() {
        debugger;
        if (this.state.isEdit == false)
            changePropertyControl('#txtUserName', typeControl.TextBox, 'value', this.generateUserName);
    }

    changedEvtTxtApellidoPaterno() {
        debugger;
        if (this.state.isEdit == false) {
            var newUserName = this.generateUserName();
            changePropertyControl('#txtUserName', typeControl.TextBox, 'value', newUserName);
            if (selectInstitution) {
                var suggestedEmail = (newUserName + '@' + selectInstitution.DominioMail).toLowerCase();
                changePropertyControl('#txtEmail', typeControl.TextBox, 'value', suggestedEmail);
            }
        }
    }

    changedEvtTxtUserName(e: any) {
        debugger;
        if (e.previousValue != '') {
            var valueAux = e.value.withoutAccent().withoutSpecialLetter().toUpperCase();
            changePropertyControl('#txtUserName', typeControl.TextBox, 'value', valueAux);
        }
    }

    changedEvtCmbInstitutionFilter(e: any) {
        debugger;
        GetOfficesByInstitution(e.value, function (data) {
            debugger;
            officesInstitution = data;
            columnasGridPerfiles[1].lookup.dataSource = officesInstitution;
            changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'columns', columnasGridPerfiles);
        })
        GetUsersByInstitution(e.value, function (data) {
            debugger;
            listUsers._store._array = data;
            $('#grdUsuarios').dxDataGrid('option', 'dataSource', listUsers);
        });
        GetProfilesByInstitution(e.value, function (data) {
            debugger;
            profilesInstitution = data;
            columnasGridPerfiles[0].lookup.dataSource = profilesInstitution;
            changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'columns', columnasGridPerfiles);
        })

        /*listUsers._store._array = this.getAllUsersByInstitution(e.value);
        $('#grdUsuarios').dxDataGrid('option', 'dataSource', listUsers);
        columnasGridPerfiles[1].lookup.dataSource = officesInstitution;
        callService(Kernel_Shared.SystemModules.Seguridad, { Method: Security.methods.GetProfilesByIdInstitucion, Parameters: e.value }, function (data:any) {
            debugger;
            profilesInstitution = data;
            columnasGridPerfiles[0].lookup.dataSource = profilesInstitution;
        });
        changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'columns', columnasGridPerfiles);*/
    }

    /*changedEvtCmbInstitution(e: any) {
        selectInstitution = searchArray(activesInstitutions.store(), 'IdInstitucion', e.value, searchOperations.Equal)[0];
    }*/

    changedEvtDtAdmissionDate(e: any) {
        if (e.value) {
            var valueDate = new Date(e.value);
            changePropertyControl('#dtFechaSalida', typeControl.DateBox, 'min', valueDate.addDate(dateParts.Days, 1));
        } else {
            changePropertyControl('#dtFechaSalida', typeControl.DateBox, 'min', new Date().addDate(dateParts.Days, -1));
        }
    }

    /*------------------------O N S E L E C T I O N C H A N G E D------------------------------*/

    selectionEvtCmbInstitution(e: any) {
        selectInstitution = e.selectedItem;
    }

    selectionEvtGrdUsers(data: any) {
        debugger;
        var item = data.selectedRowsData[0];
        selectUser = data.selectedRowsData[0];
        if (item != null) {
            changeStateToolBar(toolBarButtons.Edit, stateToolBar.enabled);
            if (item.EsActivo == true) {
                changeStateToolBar(toolBarButtons.Print, stateToolBar.enabled);
                changeStateToolBar(toolBarButtons.Export, stateToolBar.enabled);
                changeStateToolBar(toolBarButtons.Other, stateToolBar.enabled, CORE_TAG('GenerateKey'));
            } else {
                changeStateToolBar(toolBarButtons.Print, stateToolBar.disabled);
                changeStateToolBar(toolBarButtons.Export, stateToolBar.disabled);
                changeStateToolBar(toolBarButtons.Other, stateToolBar.disabled, CORE_TAG('GenerateKey'));
            }
            if (item.Estado == Security.stateConection.Lock && item.EsActivo == true) {
                changeStateToolBar(toolBarButtons.Other, stateToolBar.enabled, CORE_TAG('Unlock'));
            } else {
                changeStateToolBar(toolBarButtons.Other, stateToolBar.disabled, CORE_TAG('Unlock'));
            }
            GetUserProfileByUserName(selectUser.CodigoUsuario, function (data) {
                userProfiles._store._array = data;
                changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'dataSource', userProfiles);
            })
        } else {
            changeStateToolBar(toolBarButtons.Edit, stateToolBar.disabled);
            changeStateToolBar(toolBarButtons.Print, stateToolBar.disabled);
            changeStateToolBar(toolBarButtons.Export, stateToolBar.disabled);
            changeStateToolBar(toolBarButtons.Other, stateToolBar.disabled, CORE_TAG('GenerateKey'));
            changeStateToolBar(toolBarButtons.Other, stateToolBar.disabled, CORE_TAG('Unlock'));
        }
    }

    newRowEvtGrdProfilesInstitutions(e: any) {
        e.data.EsActivo = true;
        e.data.ObjectState = 1;
        if (typeof selectUser != 'undefined' && selectUser != null)
            e.data.IdUsuario = selectUser.IdUsuario;

        var idInstitucion = $('#cmbInstitucion').dxSelectBox('option', 'value')
        if (idInstitucion) {
            columnasGridPerfiles[0].allowEditing = true;
            columnasGridPerfiles[1].allowEditing = true;
            columnasGridPerfiles[4].allowEditing = false;
            changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'columns', columnasGridPerfiles);
        }
    }

    rowInsertingEvtGrdProfilesInstitutions(e: any) {
        var dataInserting = e.data;
        if (dataInserting.FechaDesde != undefined)
            dataInserting.FechaDesde = new Date(dataInserting.FechaDesde);
        if (dataInserting.FechaHasta != undefined)
            dataInserting.FechaHasta = new Date(dataInserting.FechaHasta);
        var existData = searchArray(userProfiles.store(), 'IdPerfil', dataInserting.IdPerfil);
        var fechaIngresoUser = new Date($('#dtFechaIngreso').dxDateBox('option', 'value'));
        var fechaSalidaUser = $('#dtFechaSalida').dxDateBox('option', 'value');
        if(fechaSalidaUser != null)
            fechaSalidaUser = new Date($('#dtFechaSalida').dxDateBox('option', 'value'));

        existData = searchArray(existData, 'IdOficina', dataInserting.IdOficina);
        if (existData.length > 0) {
            showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('UserHasProfileOffice'));
            e.cancel = true;
        }
        if (dataInserting.FechaDesde || dataInserting.FechaHasta) {
            if (dataInserting.FechaHasta && !dataInserting.FechaDesde) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('InputDateFrom'));
                e.cancel = true;
            }
            if (dataInserting.FechaDesde > dataInserting.FechaHasta) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateFromGreatherThanDateAt'));
                e.cancel = true;
            }
            /*if (dataInserting.FechaHasta < dataInserting.FechaDesde) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateAtGreatherThanDateFrom'));
                e.cancel = true;
            }*/
            if (fechaIngresoUser && dataInserting.FechaDesde < fechaIngresoUser) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateFromGreaterThanAdmissionDate'));
                e.cancel = true;
            }
            if (fechaSalidaUser && dataInserting.FechaDesde > fechaSalidaUser) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateFromLessThanDepartureDate'));
                e.cancel = true;
            }
            if (fechaSalidaUser && dataInserting.FechaHasta > fechaSalidaUser) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateAtLessThanDepartureDate'));
                e.cancel = true;
            }
        }
    }

    editingStartEvtGrdProfilesInstitutions(e: any) {
        debugger;
        columnasGridPerfiles[0].allowEditing = false;
        columnasGridPerfiles[1].allowEditing = false;

        if (this.state.isEdit == true)
            columnasGridPerfiles[4].allowEditing = true;

        changePropertyControl('#grdPerfilesInstitucion', typeControl.DataGrid, 'columns', columnasGridPerfiles);
    }

    rowUpdatingEvtGrdProfilesInstitutions(e: any) {
        debugger;
        var dataUpdating = e.newData;
        if (dataUpdating.FechaDesde != undefined)
            dataUpdating.FechaDesde = new Date(dataUpdating.FechaDesde);
        if (dataUpdating.FechaHasta != undefined)
            dataUpdating.FechaHasta = new Date(dataUpdating.FechaHasta);

        $.extend(dataUpdating, {
            ObjectState: 2
        })        
        var fechaIngresoUser = new Date($('#dtFechaIngreso').dxDateBox('option', 'value'));
        var fechaSalidaUser = new Date($('#dtFechaSalida').dxDateBox('option', 'value'));

        if (dataUpdating.FechaDesde || dataUpdating.FechaHasta) {
            if (dataUpdating.FechaHasta && !e.oldData.FechaDesde) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('InputDateFrom'));
                e.cancel = true;
            }
            if (new Date(dataUpdating.FechaDesde) > new Date(dataUpdating.FechaHasta)) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateFromGreatherThanDateAt'));
                e.cancel = true;
            }
            if (new Date(dataUpdating.FechaDesde) < new Date(fechaIngresoUser)) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateFromGreaterThanAdmissionDate'));
                e.cancel = true;
            }
            if (new Date(dataUpdating.FechaHasta) > new Date(fechaSalidaUser)) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateAtLessThanDepartureDate'));
                e.cancel = true;
            }
        }

        /*if (dataUpdating.FechaDesde && !dataUpdating.FechaHasta) {
            if (dataUpdating.FechaDesde > new Date(e.oldData.FechaHasta)) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateFromGreatherThanDateAt'));
                e.cancel = true;
            }
            if (dataUpdating.FechaDesde < fechaIngresoUser) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateFromGreaterThanAdmissionDate'));
                e.cancel = true;
            }
            if (fechaSalidaUser && dataUpdating.FechaDesde > fechaSalidaUser) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateFromLessThanDepartureDate'));
                e.cancel = true;
            }
        }
        if (dataUpdating.FechaHasta && !dataUpdating.FechaDesde) {
            if (dataUpdating.FechaHasta && !e.oldData.FechaDesde) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('InputDateFrom'));
                e.cancel = true;
            }
            
            if (fechaSalidaUser && dataUpdating.FechaHasta > fechaSalidaUser) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateAtLessThanDepartureDate'));
                e.cancel = true;
            }
            if (dataUpdating.FechaHasta < new Date(e.oldData.FechaDesde)) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateAtGreatherThanDateFrom'));
                e.cancel = true;
            }
            if (dataUpdating.FechaHasta < fechaIngresoUser) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateAtGreatherThanAdmissionDate'));
                e.cancel = true;
            }
        }

        if (dataUpdating.FechaDesde && dataUpdating.FechaHasta) {
            if (dataUpdating.FechaDesde > dataUpdating.FechaHasta) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateFromGreatherThanDateAt'));
                e.cancel = true;
            }
            if (dataUpdating.FechaDesde < fechaIngresoUser) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateFromGreaterThanAdmissionDate'));
                e.cancel = true;
            }
            if (fechaSalidaUser && dataUpdating.FechaDesde > fechaSalidaUser) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateFromLessThanDepartureDate'));
                e.cancel = true;
            }
            if (fechaSalidaUser && dataUpdating.FechaHasta > fechaSalidaUser) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateAtLessThanDepartureDate'));
                e.cancel = true;
            }
            if (dataUpdating.FechaHasta < dataUpdating.FechaDesde) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateAtGreatherThanDateFrom'));
                e.cancel = true;
            }
            if (dataUpdating.FechaHasta < dataUpdating.fechaIngresoUser) {
                showWarningMessage(CORE_TAG('ManagementUsers'), CORE_VALIDATION('DateAtGreatherThanAdmissionDate'));
                e.cancel = true;
            }
        }*/
    }

    shownEvtPopup(){
         $("#scrollView").dxScrollView();
    }

    saveUser(params: any) {
        debugger;
        try {
            var result = params.validationGroup.validate();
            var departureDate = $('#dtFechaSalida').dxDateBox('option', 'value');
            if (result.isValid) {
                if (departureDate!=null)
                    departureDate = new Date($('#dtFechaSalida').dxDateBox('option', 'value'));
                this.setState({
                    IdInstitucion: $('#cmbInstitucionFiltro').dxSelectBox('option', 'value'),
                    TipoIdentificacion: $('#cmbTipoIdentificacion').dxSelectBox('option', 'value'),
                    NumeroIdentificacion: $('#txtIdentificacion').dxTextBox('option', 'value'),
                    PrimerNombre: $('#txtPrimerNombre').dxTextBox('option', 'value'),
                    SegundoNombre: $('#txtSegundoNombre').dxTextBox('option', 'value'),
                    ApellidoPaterno: $('#txtApellidoPaterno').dxTextBox('option', 'value'),
                    ApellidoMaterno: $('#txtApellidoMaterno').dxTextBox('option', 'value'),
                    CodigoUsuario: $('#txtUserName').dxTextBox('option', 'value'),
                    CorreoElectronico: $('#txtEmail').dxTextBox('option', 'value'),
                    FechaIngreso: new Date($('#dtFechaIngreso').dxDateBox('option', 'value')),
                    FechaSalida: departureDate,
                    EsActivo: $('#swEsActivo').dxSwitch('option', 'value')
                });
                var currentUser = this.getUserModel();
                if (userProfiles.totalCount() == 0) {
                    showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE_ADD('SelectAtLessProfile', currentUser.PrimerNombre + ' ' + currentUser.ApellidoPaterno));
                    return;
                }

                var parameters = {
                    Method: Security.methods.CreateUser,
                    Parameters: JSON.stringify(currentUser)
                };
                if (this.state.isEdit == true) {
                    UpdateUser(currentUser, this.successSaveUser);
                } else {
                    CreateUser(currentUser, this.successSaveUser);
                }

                return currentUser;
            } else {
                showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE('ErrorData'));
            }
        } catch (e) {
            showErrorMessage(CORE_TAG('ErrorMessage'), e);
        }
    }

    getUserModel() {
        var mapUser = {
            IdInstitucion: this.state.IdInstitucion,
            TipoIdentificacion: this.state.TipoIdentificacion,
            NumeroIdentificacion: this.state.NumeroIdentificacion,
            PrimerNombre: this.state.PrimerNombre,
            SegundoNombre: this.state.SegundoNombre,
            ApellidoPaterno: this.state.ApellidoPaterno,
            ApellidoMaterno: this.state.ApellidoMaterno,
            CodigoUsuario: this.state.CodigoUsuario,
            CorreoElectronico: this.state.CorreoElectronico,
            FechaIngreso: this.state.FechaIngreso,
            FechaSalida: this.state.FechaSalida,
            Estado: this.state.isEdit == true ? selectUser.Estado : this.state.Estado,
            EsActivo: this.state.EsActivo,
            IdUsuario: this.state.isEdit == true ? selectUser.IdUsuario : this.state.IdUsuario,
            Clave: this.state.isEdit == true ? selectUser.Clave : this.state.Clave,
            FechaExpiracion: this.state.isEdit == true ? selectUser.FechaExpiracion : this.state.FechaExpiracion,
            CodigoPregunta: this.state.isEdit == true ? selectUser.CodigoPregunta : this.state.CodigoPregunta,
            Respuesta: this.state.isEdit == true ? selectUser.Respuesta : this.state.Respuesta,
            EsPersonalizada: this.state.isEdit == true ? selectUser.EsPersonalizada : this.state.EsPersonalizada,
            DescripcionPregunta: this.state.isEdit == true ? selectUser.DescripcionPregunta : this.state.DescripcionPregunta,
            RespuestaPregunta: this.state.isEdit == true ? selectUser.RespuestaPregunta : this.state.RespuestaPregunta,
            Observaciones: this.state.isEdit == true ? selectUser.Observaciones : this.state.Observaciones,
            FechaUltimoAcceso: this.state.isEdit == true ? selectUser.FechaUltimoAcceso : this.state.FechaUltimoAcceso,
            EstacionUltimoAcceso: this.state.isEdit == true ? selectUser.EstacionUltimoAcceso : this.state.EstacionUltimoAcceso,
            IntentosActualAcceso: this.state.isEdit == true ? selectUser.IntentosActualAcceso : this.state.IntentosActualAcceso,
            IntentosUltimoAcceso: this.state.isEdit == true ? selectUser.IntentosUltimoAcceso : this.state.IntentosUltimoAcceso,
            FechaCreacion: this.state.isEdit == true ? selectUser.FechaCreacion : this.state.FechaCreacion,
            IdUsuarioCreacion: this.state.isEdit == true ? selectUser.IdUsuarioCreacion : this.state.IdUsuarioCreacion,
            IdOficinaCreacion: this.state.isEdit == true ? selectUser.IdOficinaCreacion : this.state.IdOficinaCreacion,
            FechaActualizacion: this.state.isEdit == true ? new Date() : null,
            IdUsuarioActualizacion: this.state.isEdit == true ? selectUser.IdUsuarioActualizacion : this.state.IdUsuarioActualizacion,
            IdOficinaActualizacion: this.state.isEdit == true ? selectUser.IdOficinaActualizacion : this.state.IdOficinaActualizacion,
            UsuariosPerfil: userProfiles.items(),
            ObjectState: this.state.isEdit == true ? selectUser.ObjectState : this.state.ObjectState
        }
        return mapUser;
    }

    successSaveUser(data: any) {
        debugger;
        var auxEdit = this.state.isEdit;
        showSuccessMessage(CORE_TAG('ManagementUsers'), CORE_MESSAGE('SuccessTransaction'), function () {
            $('#popupDatosUsuario').dxPopup('option', 'visible', false);
            if (!auxEdit)
                listUsers.store().insert(data);
            else
                listUsers.store().update(data.IdUsuario, data);

            $('#grdUsuarios').dxDataGrid('instance').refresh();
            changePropertyControl('#popupDatosUsuario', typeControl.Popup, 'visible', false);
            $('#grdUsuarios').dxDataGrid('instance').deselectAll();
            params.validationGroup.reset();
        })
    }

    cancelSave(params: any) {
        debugger;
        $('#popupDatosUsuario').dxPopup('option', 'visible', false);
        $('#grdUsuarios').dxDataGrid('instance').deselectAll();
        params.validationGroup.reset();
    }
}

/*REDUX METHODS*/
/*function mapStateToProps(state: any) {
    debugger;
    return {
        changeUser: state.changeUser
    }
}*/

export default Users;