/*REACT LIBRARIES*/
import * as React from "react"
import {connect} from 'react-redux'

/*GLOBAL VARIABLES*/

var auxProfileScreen: any[] = [];
var auxProfiles: any;
var listProfiles: any;
var selectProfile: any = null;
var SessionWeb = SesionWeb();
var SessionInstitucion;
var idInstitucion: any;
var esAdministrativa: any;

/*-------------------------GRID COLUMNS -------------------------------*/
var columnsGrid = [
    setupTextColumn('CodigoPerfil', CORE_TAG('CodeProfile'), '100%', true, textAlignment.Left),
    setupTextColumn('Nombre', CORE_TAG('NameProfile'), '100%', true, textAlignment.Left),
    setupDateColumn('FechaVigencia', CORE_TAG('VigencyDate'), '100%', true),
    setupBoolColumn('EsActivo', CORE_TAG('IsActive'), '100%', false, true),
    setupBoolColumn('EsGeneral', CORE_TAG('IsGeneral'), '100%', false, true),
];

var listPantallas: any;

var columnsGridPantalla = [
    setupSelectionColumn('IdPantalla', 'Descripcion', [], 'Descripcion', 'IdPantalla', '100%', true, true),
    setupCheckColumn('EsActivo', CORE_TAG('IsActive'), 'auto'),
]

var summariesGrid = [
    setupSummaryColumn('CodigoPerfil', typeSummaryGrid.Count),
];

/*-------------------------DATA FOR GRID---------------------------*/

var listInstituciones: any;

/*-------------------VALIDATION GROUP-----------------------*/

var groupValidation = 'PERFILES';


/*REACT COMPONENT*/
class Profiles extends React.Component<any, any>{

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);    
        this.state = {
            IdPerfil: 0,
            IdInstitucion: 0,
            CodigoPerfil: '',
            Nombre: '',
            EsActivo: '',
            FechaVigencia: new Date(),
            PerfilesPantalla: [],
            EsGeneral: false,
            isEdit: false
        }

        //this.getScreenActive = this.getScreenActive.bind(this);
        this.getInstitucionAdministrable = this.getInstitucionAdministrable.bind(this);
        //this.optionEventComboInstitution = this.optionEventComboInstitution.bind(this);
        //this.getProfilesByIdInstitucion = this.getProfilesByIdInstitucion.bind(this);
        this.selectEventComboInstitution = this.selectEventComboInstitution.bind(this);
        this.selectionEventGrdPerfiles = this.selectionEventGrdPerfiles.bind(this);
        this.initNewRowEventGrdPantallas = this.initNewRowEventGrdPantallas.bind(this);
        this.rowInsertingEventGrdPantallas = this.rowInsertingEventGrdPantallas.bind(this);
        this.editingStartEventGrdPantallas = this.editingStartEventGrdPantallas.bind(this);
        this.rowUpdatedEventGrdPantallas = this.rowUpdatedEventGrdPantallas.bind(this);
        this.shownEventPopupPerfiles = this.shownEventPopupPerfiles.bind(this);
        this.valueChangeEventTxtNombre = this.valueChangeEventTxtNombre.bind(this);
        this.generateProfileName = this.generateProfileName.bind(this);
        //this.getCodigo = this.getCodigo.bind(this);
        this.initializeToolBar = this.initializeToolBar.bind(this);
        this.newProfile = this.newProfile.bind(this);
        this.cleanControls = this.cleanControls.bind(this);
        this.editProfile = this.editProfile.bind(this);
        //this.getScreenIdProfiles = this.getScreenIdProfiles.bind(this);
        this.saveProfile = this.saveProfile.bind(this);
        this.mapProfileModel = this.mapProfileModel.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
    }

    /*componentWillMount: is called before the render method is executed.
    */
    componentWillMount() {
        /*listPantallas = new DevExpress.data.ArrayStore({
            data: this.getScreenActive(true)
        });

        listInstituciones = new DevExpress.data.ArrayStore({
            data: this.getInstitucionAdministrable(),
            key: 'IdInstitucion'
        });*/
        listProfiles = new DevExpress.data.DataSource({
            store: {
                type: "array",
                data: [],
                key: "IdPerfil"
            }
        });
        //columnsGridPantalla[0].lookup.dataSource = listPantallas;
    }

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        return (
            <div>
                <div id="barraHerramienta" className="toolbar" style={{ display: "block", marginBottom:20, position: "relative", marginLeft: 0}}>     
                </div>
                <div id="mapaSitio" className="page-bar" style={{ display: "block", marginTop: 20, position: "relative" }}>
                    <ul className="page-breadcrumb">
                        <li>
                            <i id="iconoModulo" className="fa fa-lock"></i>&nbsp;
                            <a id="modulo">SEGURIDAD</a>&nbsp;
                            <i className="fa fa-angle-right"></i>&nbsp;
                        </li>
                        <li>
                            <i id="iconoSubModulo" className="fa fa-users"></i>&nbsp;
                            <a id="submodulo">PERFILES</a>&nbsp;
                            <i className="fa fa-angle-right"></i>&nbsp;
                        </li>
                        <li>
                            <i id="iconoPantalla" className="fa fa-cogs"></i>&nbsp;
                            <a id="tituloPantalla">Administración</a>&nbsp;
                        </li>
                    </ul>
                </div>
                <div id="loadPanel"></div>
                <div className="content-middle">
                    <div className="row box-controls" >
                        <span>{CORE_TAG('Filters')}</span>
                        <div className="col-lg-3">
                            <label className="tags-form">{CORE_TAG('Institution')}</label>
                            <div id="cmbInstitucion"></div>
                        </div>
                    </div>
                    <div>
                        <div id="grdPerfiles"></div>
                    </div>
                    <div id="popupDatosPerfiles">  
                        <div id="scrollView">                   
                            <div className="row">                                
                                <div className="col-lg-6">
                                    <label className="tags-form">{CORE_TAG('NameProfile')}</label>
                                    <div id="txtNombrePerfil"></div>
                                </div>
                                <div className="col-lg-6">
                                    <label className="tags-form">{CORE_TAG('CodeProfile')}</label>
                                    <div id="txtCodigoPerfil"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="tags-form">{CORE_TAG('EffectiveDate')}</label>
                                    <div id="dtFechaVigencia" style={{ display: 'block'}}></div>
                                </div>
                                <div className="col-lg-6">
                                    <label className="tags-form">{CORE_TAG('IsActive')}</label>
                                    <div id="swEsActivo" style={{ display: 'block' }}></div>
                                </div>
                            </div>
                            <div className="row" id="esPerfilGeneral">
                                <div className="col-lg-6">
                                    <label className="tags-form">{CORE_TAG('IsGeneral')}</label>
                                    <div id="swEsGeneral" style={{ display: 'block' }}></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div id="summaryValidation"></div>
                                </div>
                            </div>
                            <div className="title-1">
                                <i className="fa fa-cubes"></i>
                                <span>{' ' +CORE_TAG('DisplayToAssign')+' '}</span>
                                <label>{'(' + CORE_MESSAGE('InputOneDisplay') + ')'}</label>
                            </div>
                            <div className="row">
                                <div id="grdPantalla"></div>
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
            </div>
        )
    }

    /*componentDidMount: Only get called once, as soon as the render method has been executed.
        - Enables to define DOM manipulations or data fetching operations.
    */
    componentDidMount() {
        debugger;
        var date = new Date();

        var loadPanelConfiguration: DevExpress.ui.dxLoadPanelOptions;
        loadPanelConfiguration = { showIndicator: true, visible: false, deferRendering: false, shadingColor: '#9e9c9e' };
        $("#loadPanel").dxLoadPanel(loadPanelConfiguration);  

        var institutionConfiguration: DevExpress.ui.dxSelectBoxOptions;
        institutionConfiguration = setupComboBoxControl([], 'NombreInstitucion', 'IdInstitucion', undefined, false);
        $("#cmbInstitucion").dxSelectBox(institutionConfiguration);

        var gridProfilesConfiguration: DevExpress.ui.dxDataGridOptions;
        gridProfilesConfiguration = setupDataGrid([], columnsGrid, modeSelection.Single, true, true, false, summariesGrid);
        $("#grdPerfiles").dxDataGrid(gridProfilesConfiguration);

        var popProfilesConfiguration: DevExpress.ui.dxPopupOptions;
        popProfilesConfiguration = setupPopup(false, '40%', 'auto', true, (CORE_TAG('ManagementProfiles')).toUpperCase(), false, true);
        $("#popupDatosPerfiles").dxPopup(popProfilesConfiguration);

        var validationProfileCode = validateRequired(groupValidation, CORE_TAG('CodeProfile'));
        var profileCodeConfiguration: DevExpress.ui.dxTextBoxOptions;
        profileCodeConfiguration = setupTextBoxControl(this.state.CodigoPerfil, 32, CORE_TAG('CodeProfile'), typeLetter.upper, null, false, typeCharAllowed.OnlyTextAndNumber);
        $("#txtCodigoPerfil").dxTextBox(profileCodeConfiguration).dxValidator(validationProfileCode);

        var validationProfileName = validateRequired(groupValidation, CORE_TAG('NameProfile'));
        var profileNameConfiguration: DevExpress.ui.dxTextBoxOptions;
        profileNameConfiguration = setupTextBoxControl(this.state.Nombre, 64, CORE_TAG('NameProfile'), typeLetter.upper, null, true, typeCharAllowed.OnlyTextAndNumber);
        $("#txtNombrePerfil").dxTextBox(profileNameConfiguration).dxValidator(validationProfileName);

        var effectiveDateConfiguration: DevExpress.ui.dxDateBoxOptions;
        effectiveDateConfiguration = setupDateControl(this.state.FechaVigencia, Date.parse(SessionWeb.Sesion.FechaSistema));
        $("#dtFechaVigencia").dxDateBox(effectiveDateConfiguration);

        var isActiveConfiguration: DevExpress.ui.dxSwitchOptions;
        isActiveConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), this.state.EsActivo, stateControl.disabled);
        $("#swEsActivo").dxSwitch(isActiveConfiguration);

        var isGeneralConfiguration: DevExpress.ui.dxSwitchOptions;
        isGeneralConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), this.state.EsGeneral);
        $("#swEsGeneral").dxSwitch(isGeneralConfiguration);

        var validationConfiguration: DevExpress.ui.dxValidationSummaryOptions;
        validationConfiguration = setupSummaryValidation(groupValidation);
        $("#summaryValidation").dxValidationSummary(validationConfiguration);

        var gridScreenConfiguration: DevExpress.ui.dxDataGridOptions;
        gridScreenConfiguration = setupDataGrid(this.state.PerfilesPantalla, columnsGridPantalla, modeSelection.Single, true, false, true, null, null, 3);
        $("#grdPantalla").dxDataGrid(gridScreenConfiguration);
        
        var acceptConfiguration: DevExpress.ui.dxButtonOptions;
        acceptConfiguration = setupButtonControlDefault(classButtons.Accept, this.saveProfile, groupValidation, true);
        $("#btnAceptar").dxButton(acceptConfiguration);

        var cancelConfiguration: DevExpress.ui.dxButtonOptions;
        cancelConfiguration = setupButtonControlDefault(classButtons.Cancel, this.cancelSave, groupValidation, true);
        $("#btnCancelar").dxButton(cancelConfiguration);   

        //changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'onOptionChanged', this.optionEventComboInstitution);
        //changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'onSelectionChanged', this.selectEventComboInstitution);
        changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'onSelectionChanged', this.selectEventComboInstitution);
        changePropertyControl('#grdPerfiles', typeControl.DataGrid, 'onSelectionChanged', this.selectionEventGrdPerfiles);
        changePropertyControl('#grdPantalla', typeControl.DataGrid, 'onInitNewRow', this.initNewRowEventGrdPantallas);
        changePropertyControl('#grdPantalla', typeControl.DataGrid, 'onRowInserting', this.rowInsertingEventGrdPantallas);
        changePropertyControl('#grdPantalla', typeControl.DataGrid, 'onEditingStart', this.editingStartEventGrdPantallas);
        changePropertyControl('#grdPantalla', typeControl.DataGrid, 'onRowUpdating', this.rowUpdatedEventGrdPantallas);
        changePropertyControl('#popupDatosPerfiles', typeControl.Popup, 'onShown', this.shownEventPopupPerfiles);
        changePropertyControl('#txtNombrePerfil', typeControl.TextBox, 'onValueChanged', this.valueChangeEventTxtNombre);
        changePropertyControl('#grdPantalla', typeControl.DataGrid, 'editing.allowDeleting', false);
        
        this.initializeToolBar();
        idInstitucion = SessionWeb.Sesion.IdInstitucion;
        esAdministrativa = SessionWeb.Sesion.EsInstitucionAdministrativa;
        this.getInstitucionAdministrable();
        GetScreenActives(function (data) {
            debugger;
            if (esAdministrativa == false) {
                var pantallas = searchArray(data, 'EsAdministrable', true);
                listPantallas = new DevExpress.data.ArrayStore({
                    data: pantallas
                });
                columnsGridPantalla[0].lookup.dataSource = listPantallas;
                $('#esPerfilGeneral').hide();
                changePropertyControl('#grdPantalla', typeControl.DataGrid, 'columns', columnsGridPantalla);
            } else {
                changePropertyControl('#swEsGeneral', typeControl.Switch, 'value', true);
            }
            /*var pantallas = data;
                if (esAdministrativa == true) { 
                    changePropertyControl('#swEsGeneral', typeControl.Switch, 'value', true);
                }
                else{
                    changePropertyControl('#swEsGeneral', typeControl.Switch, 'value', false);
                }
                listPantallas = new DevExpress.data.ArrayStore({
                    data: pantallas
                });
                columnsGridPantalla[0].lookup.dataSource = listPantallas;
                $('#esPerfilGeneral').hide();
                changePropertyControl('#grdPantalla', typeControl.DataGrid, 'columns', columnsGridPantalla);*/
        });
        /*changePropertyControl('#grdPantalla', typeControl.DataGrid, 'columns', columnsGridPantalla);
        changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'value', idInstitucion);
        changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'disabled', !esAdministrativa);*/
    }    

    /*METHODS*/

    /*getScreenActive(EsAdministrable: any) {
        var parameters = {
            Method: Security.methods.GetScreensActive,
            Parameters: EsAdministrable
        }
        var data = callService(Kernel_Shared.SystemModules.Seguridad, parameters);
        return data;
    }*/

    getInstitucionAdministrable() {
        debugger;
        var listInstitucionAdministrable: any = [];
        var EsAdministrable = 0;
        
        GetActiveInstitutions(function (data) {
            var institutions = data;
            if (institutions != undefined && institutions.length > 0) {
                var Institucion = $.map(institutions, function (item, index) {
                    if (item.IdInstitucion == SesionWeb().Sesion.IdInstitucion)   ///Necesario cambiar por el IdInstitucion que exite en la Session
                        return item
                });

                if (institutions != undefined && Institucion.length > 0) {
                    if (institutions[0].EsAdministrativa == true) {
                        var list = $.map(institutions, function (item, index) {
                            if (item.IdInstitucionAdministra == institutions[0].IdInstitucionAdministra)
                                return item
                        });
                        listInstitucionAdministrable = list;
                    }
                    else
                        listInstitucionAdministrable = institutions;
                }
                listInstituciones = new DevExpress.data.ArrayStore({
                    data: institutions,
                    key: 'IdInstitucion'
                });
                changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'dataSource', listInstituciones);
                changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'value', idInstitucion);
                changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'disabled', !esAdministrativa);
            }
        })
    }

    /*optionEventComboInstitution(e: any) {
        if (e.value) {
            selectProfile = $('#cmbInstitucion').dxSelectBox('option', 'selectedItem');
            if (selectProfile != null && selectProfile.IdInstitucion > 0) {
                listProfiles._store._array = this.getProfilesByIdInstitucion(selectProfile.IdInstitucion);
                changePropertyControl('#grdPerfiles', typeControl.DataGrid, 'dataSource', listProfiles);
            }            
        }
        changePropertyControl('#cmbInstitucion', typeControl.SelectBox, 'onOptionChanged', undefined);
    }*/

    /*getProfilesByIdInstitucion(IdInstitucion: any) {
        var parameters = {
            Method: Security.methods.GetProfilesByIdInstitucion,
            Parameters: IdInstitucion
        }
        var data = callService(Kernel_Shared.SystemModules.Seguridad, parameters);

        return data;
    }*/

    /*selectEventComboInstitution(data: any) {
        debugger;
        if (data.selectedItem != null && data.selectedItem.IdInstitucion > 0) {
             GetProfilesByInstitution(data.selectedItem.IdInstitucion, function (data:any) {
                listProfiles._store._array = data;
                //$('#grdPerfiles').dxDataGrid('option', 'dataSource', listProfiles);
                changePropertyControl('#grdPerfiles', typeControl.DataGrid, 'dataSource', listProfiles);
            })
        }  
    }*/

    selectEventComboInstitution(data: any) {
        debugger;
        if (data.selectedItem != null && data.selectedItem.IdInstitucion > 0) {
             GetProfilesByInstitution(data.selectedItem.IdInstitucion, function (data:any) {
                listProfiles._store._array = data;
                //$('#grdPerfiles').dxDataGrid('option', 'dataSource', listProfiles);
                changePropertyControl('#grdPerfiles', typeControl.DataGrid, 'dataSource', listProfiles);
            })
        }  
    }

    selectionEventGrdPerfiles(data: any) {
        debugger;
        var item = data.selectedRowsData[0];
        selectProfile = data.selectedRowsData[0];
        if (item != null) {
            changeStateToolBar(toolBarButtons.Edit, stateToolBar.enabled);
            changeStateToolBar(toolBarButtons.Other, stateToolBar.enabled, CORE_TAG('AssignTransaction'));
        } else {
            changeStateToolBar(toolBarButtons.Edit, stateToolBar.disabled);
            changeStateToolBar(toolBarButtons.Other, stateToolBar.disabled, CORE_TAG('AssignTransaction'));
        }
    }

    initNewRowEventGrdPantallas(e: any) {
        e.data.ObjectState = 1;
        e.data.EsActivo = true;
        columnsGridPantalla[0].allowEditing = true;
        columnsGridPantalla[1].allowEditing = false;
        changePropertyControl('#grdPantalla', typeControl.DataGrid, 'columns', columnsGridPantalla);
        if (selectProfile != undefined) {
            e.data.IdPerfil = selectProfile.IdPerfil;
            this.setState({ IdPerfil: selectProfile.IdPerfil });
        }
    }

    rowInsertingEventGrdPantallas(e: any) {
        var dataInserting = e.data;
        dataInserting.IdPerfil = this.state.IdPerfil;
        auxProfileScreen.push(dataInserting);
        auxProfiles = auxProfileScreen;
        this.setState({ PerfilesPantalla: auxProfileScreen });
        var existData = searchArray(this.state.PerfilesPantalla._latestValue, 'IdPerfil', dataInserting.IdPerfil);
        existData = searchArray(existData, 'IdPantalla', dataInserting.IdPantalla);
        if (existData.length > 0) {
            showWarningMessage(CORE_TAG('ManagementProfiles'), CORE_MESSAGE('ScreenExist'));
            e.cancel = true;
        }
    }

    editingStartEventGrdPantallas(e: any) {
        e.data.ObjectState = 2;
        columnsGridPantalla[1].allowEditing = false;
        if (this.state.isEdit == true) {
            columnsGridPantalla[0].allowEditing = true;
            columnsGridPantalla[1].allowEditing = true;
        }
        changePropertyControl('#grdPantalla', typeControl.DataGrid, 'columns', columnsGridPantalla);
        
    }

    rowUpdatedEventGrdPantallas(e: any) {
        var oldData = e.oldData;
        var newData = e.newData;
        auxProfiles.map(function (item:any) {
            if (item.Nombre != undefined) {
                delete item.Nombre;
            }
            if (item.IdPantalla == oldData.IdPantalla) {
                if (newData.IdPantalla != undefined && newData.EsActivo != undefined) {
                    item.IdPantalla = newData.IdPantalla;
                    item.EsActivo = newData.EsActivo;
                } if (newData.EsActivo != undefined) {
                    item.EsActivo = newData.EsActivo;
                } if (newData.IdPantalla != undefined) {
                    item.IdPantalla = newData.IdPantalla;
                }

            }
            return item;
        });
        this.setState({ PerfilesPantalla: auxProfiles });
    }

    shownEventPopupPerfiles() {
        $("#scrollView").dxScrollView();
        $('#txtNombrePerfil').dxTextBox('instance').focus();
    }

    valueChangeEventTxtNombre() {
        changePropertyControl('#txtCodigoPerfil', typeControl.TextBox, 'value', this.generateProfileName);
    }
    
    generateProfileName() {
        this.setState({ Nombre: $('#txtNombrePerfil').dxTextBox('option', 'value') });
        var profileName = this.state.Nombre;        
        return profileName.getCode(3);
        /*this.setState({ Nombre: $('#txtNombrePerfil').dxTextBox('option', 'value') });
        var firstName = this.state.Nombre;
        var profileName = this.getCodigo(firstName, 3);
        this.setState({ CodigoPerfil: profileName });
        return profileName;*/
    }

    /*getCodigo(cadena: any, numero: any) { 
        var codigo = '';
        var listPalabras = cadena.split(" ");
        if (listPalabras.length > 0 && numero > 0) {
            listPalabras.forEach(function (element:any, index:any, miArray:any) {
                if (numero <= element.length)
                    codigo = codigo + element.substring(0, numero);
            });
        }

        return codigo.toUpperCase();
    }*/

    initializeToolBar() {
        var toolBar = $('.toolbar');
        toolBar.empty();
        setupButtonToolBar(toolBarButtons.New, this.newProfile);
        setupButtonToolBar(toolBarButtons.Edit, this.editProfile, stateToolBar.disabled);
        setupButtonToolBar(toolBarButtons.Other, null, stateToolBar.disabled, CORE_TAG('AssignTransaction'), iconosCore.cubes);
    }

    newProfile() {
        this.setState({isEdit: false});
        this.cleanControls();
        selectProfile = null;
        changePropertyControl('#popupDatosPerfiles', typeControl.Popup, 'visible', true);
        changePropertyControl('#swEsActivo', typeControl.Switch, 'disabled', true); 
        $('#grdPantalla').dxDataGrid('option', 'dataSource', []);
    }

    cleanControls() {
        changePropertyControl('#txtCodigoPerfil', typeControl.TextBox, 'value', '');
        changePropertyControl('#txtNombrePerfil', typeControl.TextBox, 'value', '');
        changePropertyControl('#dtFechaVigencia', typeControl.DateBox, 'value', '');
        changePropertyControl('#swEsActivo', typeControl.Switch, 'value', true);
    }

    editProfile() {
        this.setState({ isEdit: true });

        if (selectProfile.IdPerfil != ''){
            GetScreensByProfile(selectProfile.IdPerfil, function (data) {
                $('#grdPantalla').dxDataGrid('option', 'dataSource', data);
            })
        }
        else
            $('#grdPantalla').dxDataGrid('option', 'dataSource', []);

        $('#popupDatosPerfiles').dxPopup('option', 'visible', true);
        //changePropertyControl('#popupDatosPerfiles', typeControl.Popup, 'visible', true);        
        changePropertyControl('#txtCodigoPerfil', typeControl.TextBox, 'value', selectProfile.CodigoPerfil);
        changePropertyControl('#txtNombrePerfil', typeControl.TextBox, 'value', selectProfile.Nombre);
        changePropertyControl('#dtFechaVigencia', typeControl.DateBox, 'value', selectProfile.FechaVigencia);
        changePropertyControl('#swEsActivo', typeControl.Switch, 'value', selectProfile.EsActivo);
        changePropertyControl('#swEsActivo', typeControl.Switch, 'disabled', false);
    }

    /*getScreenIdProfiles(IdPerfil:any) {
        var parameters = {
            Method: Security.methods.GetScreenProfileId,
            Parameters: IdPerfil
        }
        var data = callService(Kernel_Shared.SystemModules.Seguridad, parameters);
        auxProfiles = data;
        return data;
    }*/
    
    saveProfile(params: any) {
        try {
            var result = params.validationGroup.validate();
            if (result.isValid) {                             
                this.setState({
                    Nombre: $("#txtNombrePerfil").dxTextBox('option', 'value'),
                    FechaVigencia: new Date($("#dtFechaVigencia").dxDateBox('option', 'value')),
                    EsActivo: $("#swEsActivo").dxSwitch('option', 'value'),
                    EsGeneral: $("#swEsGeneral").dxSwitch('option', 'value')
                });
                var currentProfile = this.mapProfileModel();

                $.map(currentProfile.PerfilesPantalla, function (item, index) { item.IdPerfil = currentProfile.IdPerfil });

                if (currentProfile.EsGeneral == true)
                    currentProfile.IdInstitucion = 0;

                var parameters = { Method: '', Parameters: '' };
                if (this.state.isEdit == true) {
                    currentProfile.ObjectState = 2;
                    UpdateProfile(currentProfile, function (data) {
                        currentProfile = data;
                        this.successSaveProfile(currentProfile); //Posible error
                    });
                }
                else {
                    currentProfile.ObjectState = 1;
                    CreateProfile(currentProfile, function (data) {
                        currentProfile = data;
                        this.successSaveProfile(currentProfile); // Posible error
                    });
                } 
                return currentProfile;
            } else {
                showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE('ErrorData'));
            }
        } catch (e) {
            showErrorMessage(CORE_TAG('ErrorMessage'), e);
        }
    }

    successSaveProfile(data:any) {
        var auxEdit = this.state.isEdit;
        showSuccessMessage(CORE_TAG('ManagementProfiles'), CORE_MESSAGE('SuccessTransaction'), function () {
            if (!auxEdit)
                listProfiles.store().insert(data);
            else
                listProfiles.store().update(data.IdPerfil, data);

            $('#grdPerfiles').dxDataGrid('instance').refresh();
            changePropertyControl('#popupDatosPerfiles', typeControl.Popup, 'visible', false);
            params.validationGroup.reset();
        })
    }

    mapProfileModel() {
        var mapProfile = {
            IdPerfil: selectProfile ? selectProfile.IdPerfil : 0,
            IdInstitucion: $('#cmbInstitucion').dxSelectBox('option', 'value'),
            CodigoPerfil: this.state.CodigoPerfil,
            Nombre: this.state.Nombre,
            FechaVigencia: this.state.FechaVigencia,
            EsActivo: this.state.EsActivo,
            EsGeneral: this.state.EsGeneral,
            PerfilesPantalla: this.state.PerfilesPantalla
        }
        return mapProfile;
    }

    cancelSave(params: any) {
        changePropertyControl('#popupDatosPerfiles', typeControl.Popup, 'visible', false);
        $('#grdPerfiles').dxDataGrid('instance').deselectAll();
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

export default Profiles;