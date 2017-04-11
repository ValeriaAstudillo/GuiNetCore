/*REACT LIBRARIES*/
import * as React from "react"

/*REACT CHILD COMPONENTS*/

/*GLOBAL VARIABLES*/
var columnsGridProfile = [
    setupTextColumn('codigoPerfil', 'Código Perfil'),
    setupTextColumn('nombre', 'Nombre'),
    setupCheckColumn('esActivo', 'Es Activo', 'auto'),
    setupCheckColumn('esGeneral', 'Es General', 'auto'),
]

var profiles = new DevExpress.data.DataSource({
    store: {
        type: "array",
        data: [],
        key: "id"
    },
})

var userProfiles = new DevExpress.data.DataSource({
    store: [],
});

var currentProfile = "";

/*REACT COMPONENT*/
export default class Core extends React.Component<any, any>{

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
        this.state = {
            isEdit: false
        }
        this.initializeToolBar = this.initializeToolBar.bind(this);
        this.newProfile = this.newProfile.bind(this);
        this.saveProfile = this.saveProfile.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
        this.selectionEvtGrdProfiles = this.selectionEvtGrdProfiles.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.mapProfile = this.mapProfile.bind(this);
    }

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
                <div className="content-middle" style={{ width: '70%' }}>                                   
                    <div id="grdPerfiles"></div>
                </div>
                <div id="popupDatosPerfil">
                    <div id="scrollView">                   
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="tags-form">Nombre</label>
                                <div id="txtNombreperfil"></div>
                            </div>
                            <div className="col-lg-6">
                                <label className="tags-form">Código Perfil</label>
                                <div id="txtCodigoPerfil"></div>
                            </div>                            
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="tags-form">{CORE_TAG('IsActive')}</label>
                                <div id="swEsActivo" style={{ display: 'block' }}></div>
                            </div>
                            <div className="col-lg-6">
                                <label className="tags-form">Es General</label>
                                <div id="swEsGeneral" style={{ display: 'block' }}></div>
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
        debugger;
        var gridProfilesConfiguration: DevExpress.ui.dxDataGridOptions;
        gridProfilesConfiguration = setupDataGrid([], columnsGridProfile, modeSelection.Single, true, true, false);
        $("#grdPerfiles").dxDataGrid(gridProfilesConfiguration); 

        var popProfilesConfiguration: DevExpress.ui.dxPopupOptions;
        popProfilesConfiguration = setupPopup(false, '50%', 'auto', true, 'ADMINISTRACIÓN DE PERFILES', false, false);
        $("#popupDatosPerfil").dxPopup(popProfilesConfiguration);  

        var nameConfiguration: DevExpress.ui.dxTextBoxOptions;
        nameConfiguration = setupTextBoxControl(undefined, 32, 'Nombre', typeLetter.upper, null, true, typeCharAllowed.OnlyText);
        $("#txtNombreperfil").dxTextBox(nameConfiguration)

        var codeConfiguration: DevExpress.ui.dxTextBoxOptions;
        codeConfiguration = setupTextBoxControl(undefined, 32, 'Código Perfil', typeLetter.upper, null, true, typeCharAllowed.OnlyText);
        $("#txtCodigoPerfil").dxTextBox(codeConfiguration)

        var isActiveConfiguration: DevExpress.ui.dxSwitchOptions;
        isActiveConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), false);
        $("#swEsActivo").dxSwitch(isActiveConfiguration);

        var isGeneralConfiguration: DevExpress.ui.dxSwitchOptions;
        isGeneralConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), false);
        $("#swEsGeneral").dxSwitch(isGeneralConfiguration);

        var acceptConfiguration: DevExpress.ui.dxButtonOptions;
        acceptConfiguration = setupButtonControlDefault(classButtons.Accept, this.saveProfile, undefined, true);
        $("#btnAceptar").dxButton(acceptConfiguration);

        var cancelConfiguration: DevExpress.ui.dxButtonOptions;
        cancelConfiguration = setupButtonControlDefault(classButtons.Cancel, this.cancelSave, undefined, true);
        $("#btnCancelar").dxButton(cancelConfiguration);  

        this.initializeToolBar();

        fetch('http://webapiaspnetcore20170410104844.azurewebsites.net/api/Perfil',{
  				method: "get",
  				headers: {   			
    			'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                }
  			})
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                profiles._store._array = data;
                $('#grdPerfiles').dxDataGrid('option', 'dataSource', profiles);
            });

        changePropertyControl('#grdPerfiles', typeControl.DataGrid, 'onSelectionChanged', this.selectionEvtGrdProfiles);
    }    

    initializeToolBar() {
        setupButtonToolBar(toolBarButtons.New, this.newProfile);
        setupButtonToolBar(toolBarButtons.Edit, this.editProfile, stateToolBar.disabled);
    }  

    newProfile(){
        this.setState({isEdit: false});
        $('#popupDatosPerfil').dxPopup('option', 'visible', true);
    }

    editProfile(){
        this.setState({isEdit:true});
        $('#popupDatosPerfil').dxPopup('option', 'visible', true);
        changePropertyControl('#txtNombreperfil', typeControl.TextBox, 'value', currentProfile.nombre);
        changePropertyControl('#txtCodigoPerfil', typeControl.TextBox, 'value', currentProfile.codigoPerfil);
        changePropertyControl('#swEsActivo', typeControl.Switch, 'value', currentProfile.esActivo);
        changePropertyControl('#swEsGeneral', typeControl.Switch, 'value', currentProfile.esGeneral);
    }

    saveProfile(){    
        debugger;
        if(this.state.isEdit){
            var newProfile = this.mapProfile()
            fetch('http://webapiaspnetcore20170410104844.azurewebsites.net/api/Perfil/'+newProfile.id,{
                    method: "PUT",
                    headers: { 		                
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',	
                    'Access-Control-Allow-Origin': '*',
                    "cache-control": "no-cache",
                    }, body:  JSON.stringify(newProfile)
                }).then((response) => {
                    return response.json();
                })            
                .then((data) => {
                    showSuccessMessage('ADMINISTRACIÓN DE PERFILES', CORE_MESSAGE('SuccessTransaction'), function () {
                        $('#popupDatosPerfil').dxPopup('option', 'visible', false);
                        profiles.store().update(data.id, data);
                        $('#grdPerfiles').dxDataGrid('instance').refresh();
                        $('#grdPerfiles').dxDataGrid('instance').deselectAll();
                    })
                });
        } 
        else{
            var newProfile = this.mapProfile()
            fetch('http://webapiaspnetcore20170410104844.azurewebsites.net/api/Perfil',{
                    method: "POST",
                    headers: { 		                
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',	
                    'Access-Control-Allow-Origin': '*',
                    "cache-control": "no-cache",
                    }, body:  JSON.stringify(newProfile)
                }).then((response) => {
                    return response.json();
                })            
                .then((data) => {
                    showSuccessMessage('ADMINISTRACIÓN DE PERFILES', CORE_MESSAGE('SuccessTransaction'), function () {
                        $('#popupDatosPerfil').dxPopup('option', 'visible', false);
                        profiles.store().insert(data);
                        $('#grdPerfiles').dxDataGrid('instance').refresh();
                        $('#grdPerfiles').dxDataGrid('instance').deselectAll();
                    })
                });
        }  
        
    }

    mapProfile(){
         var mapProfile = {
            id : this.state.isEdit == true ? currentProfile.id : 0,
            codigoPerfil : $('#txtCodigoPerfil').dxTextBox('option', 'value'),
            nombre: $('#txtNombreperfil').dxTextBox('option', 'value'),
            esActivo: $('#swEsActivo').dxSwitch('option', 'value'),
            esGeneral :  $('#swEsGeneral').dxSwitch('option', 'value')
        }
        return mapProfile;
    }

    cancelSave(){
        $('#popupDatosPerfil').dxPopup('option', 'visible', false);
    }

    /*  ----------- EVENTS METHODS -------------    */

    selectionEvtGrdProfiles(data: any) {
        var item = data.selectedRowsData[0];
        if (item != null) {
            changeStateToolBar(toolBarButtons.Edit, stateToolBar.enabled);       
            currentProfile = item; 
        } else {
            changeStateToolBar(toolBarButtons.Edit, stateToolBar.disabled);
        }
    }
    
}
