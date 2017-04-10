/*REACT LIBRARIES*/
import * as React from "react"

import * as catalog from "../../../js/flow/catalogs"

/*REACT CHILD COMPONENTS*/

/*GLOBAL VARIABLES*/
var that;
var groupValidation = 'VIEWS';
var groupValidationWidget = 'WIDGET';
var groupValidationTextBox = 'TEXTBOX';
var groupValidationButton = 'BUTTON';
var groupValidationTextArea = 'TEXTAREA';
var groupValidationSwitch = 'SWITCH';
var groupValidationDate = 'DATE';
var groupValidationNumberBox = 'NUMBERBOX';
var groupValidationDefaultButton = 'DEFAULTBUTTON';
var groupValidationFloatButton = 'FLOATBUTTON';
var groupValidationPopup = 'POPUP';
var groupValidationPopover = 'POPOVER';
var groupValidationSummary = 'SUMMARYVALIDATION';
var groupValidationRadio = 'RADIOGROUP';
var groupValidationAccordion = 'ACCORDION';
var groupValidationActionSheet = 'ACTIONSHEET';
var groupValidationCheckBox = 'CHECKBOX';
var groupValidationComboBox = 'SELECTBOX';
var groupValidationDataGrid = 'DATAGRID';
var groupValidationGallery = 'GALLERY';
var groupValidationListBox = 'LISTBOX';
var groupValidationMap = 'MAP';
var groupValidationTab = 'TAB';
var groupValidationToolBar = 'TOOLBAR';

var listViews = new DevExpress.data.DataSource({
    store: {
        type: "array",
        data: [],
        key: "IdView"
    }
});

var listWidgets = new DevExpress.data.DataSource({
    store: {
        type: "array",
        data: [],
        key: "Identifier"
    }
});

var objNewView = {
        IdView: 0,
        Name:  '',
        Description: '',
        Path: '',
        Logo: null, 
        IsActive: true,
        Widget: []
}

var columnsGridViews = [
    setupTextColumn('Name', CORE_TAG('ViewName')),
    setupTextColumn('Description', CORE_TAG('ViewDescription')),
    setupTextColumn('Path', CORE_TAG('Path')),
    setupBoolColumn('IsActive', CORE_TAG('IsActive'), 'auto', false)
];

var summariesGrid = [
    setupSummaryColumn('IdView', typeSummaryGrid.Count),
];

var columnsGridWidgets = [
    setupTextColumn('DescriptionWidget', CORE_TAG('WidgetDescription'), undefined, undefined, undefined, true),
    setupTextColumn('Identifier', CORE_TAG('WidgetIdentifier'), undefined,undefined, undefined, true),
    setupTextColumn('TypeWidget', CORE_TAG('WidgetType'), undefined,undefined, undefined, true),
    setupTextColumn('Position', CORE_TAG('WidgetPosition'), undefined,undefined, undefined, true)
]

var selectView;

var selectWidget;

var selectEditWidget;

var oldWidgets;

/*REACT COMPONENT*/
export default class Views extends React.Component<any, any>{

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
        this.state ={
            idView: 0,
            viewName : '',
            viewDescription: '',
            viewPath:'/*',
            isActive: true,
            isEdit: false, 
            widgets: [],
            idWidget: ''
        }
        this.initializeToolBar = this.initializeToolBar.bind(this);
        this.hideDivs = this.hideDivs.bind(this);
        this.newView = this.newView.bind(this);
        this.clearControls = this.clearControls.bind(this);
        this.editView = this.editView.bind(this);
        this.shownEvtPopup = this.shownEvtPopup.bind(this);
        this.hidingEvtPopupAddWidgets = this.hidingEvtPopupAddWidgets.bind(this);
        this.valueChangedEvtTxtViewName = this.valueChangedEvtTxtViewName.bind(this);
        this.generatePath = this.generatePath.bind(this);
        this.valueChangedEvtTxtWidgetDescription = this.valueChangedEvtTxtWidgetDescription.bind(this);
        this.generateIdentifier = this.generateIdentifier.bind(this);
        this.selectionEvtGrdViews = this.selectionEvtGrdViews.bind(this);
        this.selectionEvtCmbTypeTextBox = this.selectionEvtCmbTypeTextBox.bind(this);
        this.disableWidgetsTextBox = this.disableWidgetsTextBox.bind(this);
        this.saveNewWidget = this.saveNewWidget.bind(this);
        this.mapWidgets = this.mapWidgets.bind(this);
        this.successSaveConfiguration = this.successSaveConfiguration.bind(this);
        this.saveConfiguration = this.saveConfiguration.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
        this.cancelConfigureWidgets = this.cancelConfigureWidgets.bind(this);
        this.addEditWidgets = this.addEditWidgets.bind(this);
        this.resetControls = this.resetControls.bind(this);

        that = this;
    }

    /*componentWillMount: is called before the render method is executed.
    */
    componentWillMount() {

    }

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        return (
            <div>
                <div id="barraHerramienta" className="toolbar" style={{ display: "block", marginBottom: 20, position: "relative", marginLeft: 0 }}>
                </div>
                <div id="mapaSitio" className="page-bar" style={{ display: "block", marginTop: 20, position: "relative" }}>
                    <ul className="page-breadcrumb">
                        <li>
                            <i id="iconoModulo" className="fa fa-random"></i>&nbsp;
                            <a id="modulo">FLUJO</a>&nbsp;
                            <i className="fa fa-angle-right"></i>&nbsp;
                        </li>
                        <li>
                            <i id="iconoSubModulo" className="fa fa-file-image-o"></i>&nbsp;
                            <a id="submodulo">VISTAS</a>&nbsp;
                            <i className="fa fa-angle-right"></i>&nbsp;
                        </li>
                        <li>
                            <i id="iconoPantalla" className="fa fa-cogs"></i>&nbsp;
                            <a id="tituloPantalla">Administración</a>&nbsp;
                        </li>
                    </ul>
                </div>
                <div id="loadPanel"></div>
                <div className="content-middle" style={{ width: '70%', marginBottom: 40 }}>                                 
                    <div id="grdViews"></div>
                </div>
                <div id="popupViewData">   
                    <div id="scrollViewPopupViewData">                  
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="tags-form">{CORE_TAG('ViewName')}</label>
                                <div id="txtViewName"></div>
                            </div>
                            <div className="col-lg-6">
                                <label className="tags-form">{CORE_TAG('Path')}</label>
                                <div id="txtPath"></div>
                            </div>                                                                                        
                        </div> 
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="tags-form">{CORE_TAG('ViewDescription')}</label>
                                <div id="txtViewDescription"></div>
                            </div>
                            <div className="col-lg-6">
                                    <label className="tags-form">{CORE_TAG('IsActive')}</label>
                                    <div id="swIsActive" style={{ display: 'block' }}></div>
                            </div>
                        </div> 
                        <br></br><br></br>       
                        <div style={{margin:'auto' , textAlign: 'center', display:'block'}}>                                
                            <div id="btnAddWidgets" style={{width: 230}}  ></div>                               
                            <div id="btnCancel" style={{width: 230}} ></div>                                
                        </div>  
                        <div id="divCreatedWidgets">
                            <div className="title-1">
                                <i className="fa fa-cubes"></i>
                                <span>{' ' +CORE_TAG('WidgetsToInclude')+' '}</span>
                            </div>
                            <div className="row">
                                <div id="grdWidgets1"></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div id="btnAccept" style={{ display: 'block' }}></div>
                                </div>                               
                            </div>        
                        </div>           
                    </div>
                </div>  
                <div id="popupAddWidgets">
                    <div id="scrollViewPopupAddWidgets">   
                        <div style={{marginTop: 10}} className="title-1">
                            <i className="fa fa-cubes"></i>
                            <span>{' ' +CORE_TAG('IncludedWidgets')+' '}</span>                            
                        </div>         
                        <div id="grdWidgets" style={{marginTop: 20, marginBottom: 20 }}></div>       
                        <div className="title-1">
                            <i className="fa fa-cubes"></i>
                            <span>{' ' +CORE_TAG('WidgetsToInclude')+' '}</span>                            
                        </div>         
                        <div id="divWidget" style={{marginTop: 20 }}>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('WidgetType')}</label>
                                    <div id="cmbWidgetType"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('WidgetDescription')}</label>
                                    <div id="txtWidgetDescription"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('WidgetIdentifier')}</label>
                                    <div id="txtWidgetIdentifier"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('WidgetPosition')}</label>
                                    <div id="nmbWidgetPosition"></div>
                                </div>
                            </div>
                        </div>
                        <div id="divTextBox">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeTextBox')}</label>
                                    <div id="cmbTypeTextBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DefaultValue')}</label>
                                    <div id="txtDefaultValueTextBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('MaxLength')}</label>
                                    <div id="txtMaxLengthTextBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Placeholder')}</label>
                                    <div id="txtPlaceholderTextBox"></div>
                                </div>
                            </div>
                            <div className="row">                                
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeLetter')}</label>
                                    <div id="cmbTypeLetterTextBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeStateField')}</label>
                                    <div id="cmbTypeStateTextBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeChar')}</label>
                                    <div id="cmbTypeCharTextBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('SpecialsChar')}</label>
                                    <div id="cmbSpecialsCharTextBox"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('AllowSpace')}</label>
                                    <div id="swAllowSpaceTextBox" style={{ display: 'block' }}></div>
                                </div>                                
                            </div>                            
                        </div>
                        <div id="divButton">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Text')}</label>
                                    <div id="txtTextButton"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Action')}</label>
                                    <div id="txtActionButton"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ValidationGroup')}</label>
                                    <div id="txtValidationGroupButton"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeStateField')}</label>
                                    <div id="cmbTypeStateButton"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeButton')}</label>
                                    <div id="cmbTypeButton"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Icon')}</label>
                                    <div id="cmbIconButton"></div>
                                </div>                                
                            </div>    
                        </div> 
                        <div id="divTextArea">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DefaultValue')}</label>
                                    <div id="txtDefaultValueTextArea"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('MaxLength')}</label>
                                    <div id="txtMaxLengthTextArea"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Width')}</label>
                                    <div id="txtWidthTextArea"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Height')}</label>
                                    <div id="txtHeightTextArea"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Placeholder')}</label>
                                    <div id="txtPlaceholderTextArea"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeStateField')}</label>
                                    <div id="cmbTypeStateTextArea"></div>
                                </div>                                
                            </div>
                        </div>
                        <div id="divSwitch">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('OnText')}</label>
                                    <div id="txtOnTextSwitch"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('OffText')}</label>
                                    <div id="txtOffTextSwitch"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DefaultValue')}</label>
                                    <div id="cmbDefaultValueSwitch"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeStateField')}</label>
                                    <div id="cmbTypeStateSwitch"></div>
                                </div>
                            </div>
                        </div>
                        <div id="divDate">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DefaultValue')}</label>
                                    <div id="dtDefaultValueDate"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('MinDate')}</label>
                                    <div id="dtMinDate"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('MaxDate')}</label>
                                    <div id="dtMaxDate"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Width')}</label>
                                    <div id="txtWidthDate"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeStateField')}</label>
                                    <div id="cmbTypeStateDate"></div>
                                </div>
                            </div>
                        </div>
                        <div id="divNumberBox">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DefaultValue')}</label>
                                    <div id="nmbDefaultValueNumberBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('MinValue')}</label>
                                    <div id="nmbMinValueNumberBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('MaxValue')}</label>
                                    <div id="nmbMaxValueNumberBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Width')}</label>
                                    <div id="txtWidthNumberBox"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('MaxLength')}</label>
                                    <div id="txtMaxLengthNumberBox"></div>
                                </div>
                            </div>
                        </div>
                        <div id="divDefaultButton">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ClassButton')}</label>
                                    <div id="cmbClassDefaultButton"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Action')}</label>
                                    <div id="txtActionDefaultButton"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ValidationGroup')}</label>
                                    <div id="txtValidationGroupDefaultButton"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeStateField')}</label>
                                    <div id="cmbTypeStateDefaultButton"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('AllowIcon')}</label>
                                    <div id="swAllowIconDefaultButton" style={{ display: 'block' }}></div>
                                </div>                                
                            </div>
                        </div>
                        <div id="divFloatButton">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ClassButton')}</label>
                                    <div id="cmbClassFloatButton"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Action')}</label>
                                    <div id="txtActionFloatButton"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Icon')}</label>
                                    <div id="cmbIconFloatButton"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Size')}</label>
                                    <div id="cmbSizeFloatButton"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ClassButton')}</label>
                                    <div id="cmbTypeFloatButton"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ValidationGroup')}</label>
                                    <div id="txtValidationGroupFloatButton"></div>
                                </div>
                            </div>
                        </div>
                        <div id="divPopup">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Title')}</label>
                                    <div id="txtTitlePopup"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Width')}</label>
                                    <div id="txtWidthPopup"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Height')}</label>
                                    <div id="txtHeightPopup"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Visible')}</label>
                                    <div id="swVisiblePopup" style={{ display: 'block' }}></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ShowTitle')}</label>
                                    <div id="swShowTitlePopup" style={{ display: 'block' }}></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ShowCloseButton')}</label>
                                    <div id="swShowCloseButtonPopup" style={{ display: 'block' }}></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ResizeEnabled')}</label>
                                    <div id="swResizeEnabledPopup" style={{ display: 'block' }}></div>
                                </div>
                            </div>
                        </div>
                        <div id="divPopover">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Target')}</label>
                                    <div id="txtTargetPopover"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('WidgetPosition')}</label>
                                    <div id="cmbPositionPopover"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Width')}</label>
                                    <div id="txtWidthPopover"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Title')}</label>
                                    <div id="txtTitlePopover"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Shading')}</label>
                                    <div id="swShadingPopover" style={{ display: 'block' }}></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ShowTitle')}</label>
                                    <div id="swShowTitlePopover" style={{ display: 'block' }}></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ShowCloseButton')}</label>
                                    <div id="swShowCloseButtonPopover" style={{ display: 'block' }}></div>
                                </div>
                            </div>
                        </div>
                        <div id="divSummaryValidation">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ValidationGroup')}</label>
                                    <div id="txtValidationGroupSummary"></div>
                                </div>
                            </div>
                        </div>
                        <div id="divRadioGroup">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DefaultValue')}</label>
                                    <div id="txtDefaultValueRadio"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DataSource')}</label>
                                    <div id="txtDataSourceRadio"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DisplayExpr')}</label>
                                    <div id="txtDisplayExprRadio"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ValueExpr')}</label>
                                    <div id="txtValueExprRadio"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ItemTemplate')}</label>
                                    <div id="txtItemTemplateRadio"></div>
                                </div>
                            </div>
                        </div>
                        <div id="divAccordion">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DataSource')}</label>
                                    <div id="txtDataSourceAccordion"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TitleTemplate')}</label>
                                    <div id="txtTitleTemplateAccordion"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ItemTemplate')}</label>
                                    <div id="txtItemTemplateAccordion"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('MultipleAccordion')}</label>
                                    <div id="swMultipleAccordion" style={{ display: 'block' }}></div>
                                </div>
                            </div>
                        </div>
                        <div id="divActionSheet">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DataSource')}</label>
                                    <div id="txtDataSourceActionSheet"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Title')}</label>
                                    <div id="txtTitleActionSheet"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ItemTemplate')}</label>
                                    <div id="txtItemTemplateActionSheet"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ShowTitle')}</label>
                                    <div id="swShowTitleActionSheet" style={{ display: 'block' }}></div>
                                </div>
                            </div>
                        </div>
                        <div id="divCheckBox">
                            <div className="row">                                
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Text')}</label>
                                    <div id="txtTextCheckBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeStateField')}</label>
                                    <div id="cmbTypeStateCheckBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('CheckBoxDefaultValue')}</label>
                                    <div id="swDefaultValueCheckBox" style={{ display: 'block' }}></div>
                                </div>
                            </div>
                        </div>
                        <div id="divComboBox">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DataSource')}</label>
                                    <div id="txtDataSourceCombo"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DisplayExpr')}</label>
                                    <div id="txtDisplayExprCombo"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ValueExpr')}</label>
                                    <div id="txtValueExprCombo"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DefaultValue')}</label>
                                    <div id="txtDefaultValueCombo"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeStateField')}</label>
                                    <div id="cmbTypeStateCombo"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Width')}</label>
                                    <div id="txtWidthCombo"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Placeholder')}</label>
                                    <div id="txtPlaceholderCombo"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('SearchEnabled')}</label>
                                    <div id="swSearchEnabledCombo" style={{ display: 'block' }}></div>
                                </div>                                
                            </div>
                        </div>
                        <div id="divDataGrid">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DataSource')}</label>
                                    <div id="txtDataSourceGrid"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Columns')}</label>
                                    <div id="txtColumnsGrid"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ModeSelection')}</label>
                                    <div id="cmbModeSelectionGrid"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Summary')}</label>
                                    <div id="cmbSummaryGrid"></div>
                                </div>
                                                                
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('IsGroupedSummary')}</label>
                                    <div id="swIsGroupedSummaryGrid" style={{ display: 'block' }}></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('AllowFilter')}</label>
                                    <div id="swAllowFilterGrid" style={{ display: 'block' }}></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('AllowEditing')}</label>
                                    <div id="swAllowEditingGrid" style={{ display: 'block' }}></div>
                                </div>
                                 
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Pagination')}</label>
                                    <div id="swPaginationGrid" style={{ display: 'block' }}></div>
                                </div>                                                                                               
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('PageSize')}</label>
                                    <div id="txtPageSizeGrid"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeStateField')}</label>
                                    <div id="cmbTypeStateGrid"></div>
                                </div>                           
                            </div>
                        </div>
                        <div id="divGallery">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DataSource')}</label>
                                    <div id="txtDataSourceGallery"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DelaySlide')}</label>
                                    <div id="txtDelaySlideGallery"></div>
                                </div> 
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('SlideShow')}</label>
                                    <div id="swSlideShowGallery" style={{ display: 'block' }}></div>
                                </div>                                                                
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Loop')}</label>
                                    <div id="swLoopGallery" style={{ display: 'block' }}></div>
                                </div>                                                                                               
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ShowButtons')}</label>
                                    <div id="swShowNavButtonGallery" style={{ display: 'block' }}></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ShowIndicator')}</label>
                                    <div id="swShowIndicatorGallery" style={{ display: 'block' }}></div>
                                </div>                                                           
                            </div>
                        </div>
                        <div id="divListBox">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DataSource')}</label>
                                    <div id="txtDataSourceListBox"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ModeSelection')}</label>
                                    <div id="cmbModeSelectionListBox"></div>
                                </div>                                                                                                
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Height')}</label>
                                    <div id="txtHeightListBox"></div>
                                </div>     
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeStateField')}</label>
                                    <div id="cmbTypeStateListBox"></div>
                                </div>                                                                                          
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ShowCheck')}</label>
                                    <div id="swShowCheckListBox" style={{ display: 'block' }}></div>
                                </div> 
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Grouped')}</label>
                                    <div id="swGroupedListBox" style={{ display: 'block' }}></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ItemTemplate')}</label>
                                    <div id="txtItemTemplateListBox"></div>
                                </div>                                 
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('GroupTemplate')}</label>
                                    <div id="txtGroupTemplateListBox" ></div>
                                </div>                                                                                          
                            </div>
                        </div>
                        <div id="divMap">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('MarkersData')}</label>
                                    <div id="txtMarkersDataMap"></div>
                                </div> 
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Width')}</label>
                                    <div id="txtWidthMap"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Height')}</label>
                                    <div id="txtHeightMap"></div>
                                </div>                                 
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Zoom')}</label>
                                    <div id="nmbZoomMap" ></div>
                                </div>                                                                                          
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('IconMarker')}</label>
                                    <div id="txtIconMarkerMap"></div>
                                </div>                                                                                                                       
                            </div>
                        </div>
                        <div id="divTab">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('DataSource')}</label>
                                    <div id="txtDataSourceTab"></div>
                                </div> 
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('SelectedIndex')}</label>
                                    <div id="nmbSelectedIndexTab"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('ItemTemplate')}</label>
                                    <div id="txtItemTemplateTab"></div>
                                </div>                                                                                   
                            </div>
                        </div>
                        <div id="divToolBar">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('Title')}</label>
                                    <div id="txtTitleToolBar"></div>
                                </div> 
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('OnClick')}</label>
                                    <div id="txtOnClickToolBar"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeToolBar')}</label>
                                    <div id="txtTypeToolBar"></div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="tags-form">{CORE_TAG('TypeToolBar')}</label>
                                    <div id="txtTextTypeToolBar"></div>
                                </div>                                                                                   
                            </div>
                        </div>
                        <div >
                            <br></br><br></br>
                            <div style={{margin:'auto' , textAlign: 'center', display:'block'}}>                                
                                    <div id="btnSaveWidget" style={{width: 280}}  ></div>                               
                                    <div id="btnEndViewConfiguration" style={{width: 280}} ></div>                                
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

        var gridViewsConfiguration: DevExpress.ui.dxDataGridOptions;
        gridViewsConfiguration = setupDataGrid([], columnsGridViews, modeSelection.Single, true, true, false, summariesGrid);
        $("#grdViews").dxDataGrid(gridViewsConfiguration);

        var popViewsConfiguration: DevExpress.ui.dxPopupOptions;
        popViewsConfiguration = setupPopup(false, '50%', 'auto', true, (CORE_TAG('ManagementViews')).toUpperCase(), false, false);
        $("#popupViewData").dxPopup(popViewsConfiguration);  

        /*VIEW*/      

            var validationViewName = validateRequired(groupValidation, CORE_TAG('ViewName'));
            var viewNameConfiguration: DevExpress.ui.dxTextBoxOptions;
            viewNameConfiguration = setupTextBoxControl(this.state.viewName, 64, CORE_TAG('ViewName'), typeLetter.upper, null, true, typeCharAllowed.OnlyText);
            $("#txtViewName").dxTextBox(viewNameConfiguration).dxValidator(validationViewName);

            var validationViewDescription = validateRequired(groupValidation, CORE_TAG('ViewDescription'));
            var viewDescriptionConfiguration: DevExpress.ui.dxTextBoxOptions;
            viewDescriptionConfiguration = setupTextBoxControl(this.state.viewDescription, 256, CORE_TAG('ViewDescription'), typeLetter.upper, null, true, typeCharAllowed.OnlyText);
            $("#txtViewDescription").dxTextBox(viewDescriptionConfiguration).dxValidator(validationViewDescription);
            
            var validationPath = validateRequired(groupValidation, CORE_TAG('Path'));
            var pathConfiguration: DevExpress.ui.dxTextBoxOptions;
            pathConfiguration = setupTextBoxControl(this.state.viewPath, 64, CORE_TAG('Path'), typeLetter.normal, null, true, typeCharAllowed.OnlyText);
            $("#txtPath").dxTextBox(pathConfiguration).dxValidator(validationPath);        

            var isActiveConfiguration: DevExpress.ui.dxSwitchOptions;
            isActiveConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), this.state.isActive , stateControl.disabled);
            $("#swIsActive").dxSwitch(isActiveConfiguration);

            var cancelConfiguration: DevExpress.ui.dxButtonOptions;
            cancelConfiguration = setupButtonControlDefault(classButtons.Cancel, this.cancelSave, groupValidation, true);
            $("#btnCancel").dxButton(cancelConfiguration);      

            var addWidgetsConfiguration: DevExpress.ui.dxButtonOptions;
            addWidgetsConfiguration = setupButtonControl(CORE_TAG('AddWidgets'), this.addEditWidgets, groupValidation, typeButtons.Success, iconosCore.file_image_o );
            $("#btnAddWidgets").dxButton(addWidgetsConfiguration);             
            
        var popAddWidgetsConfiguration: DevExpress.ui.dxPopupOptions;
        popAddWidgetsConfiguration = setupPopup(false, '70%', '80%', true, undefined, true, false);
        $("#popupAddWidgets").dxPopup(popAddWidgetsConfiguration);   

            /* WIDGET */

                var gridWidgetsConfiguration: DevExpress.ui.dxDataGridOptions;
                gridWidgetsConfiguration = setupDataGrid( []/*objNewView.Widget*/, columnsGridWidgets, modeSelection.Single, true, true, false, null, null, 3);
                $("#grdWidgets").dxDataGrid(gridWidgetsConfiguration);    

                var typeControlConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeControlConfiguration = setupComboBoxControl(catalog.flwTypeWidgets, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('WidgetType'));
                $("#cmbWidgetType").dxSelectBox(typeControlConfiguration);
                        
                var widgetDescriptionConfiguration: DevExpress.ui.dxTextBoxOptions;
                widgetDescriptionConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('WidgetDescription'), typeLetter.normal, stateControl.disabled, true);
                $("#txtWidgetDescription").dxTextBox(widgetDescriptionConfiguration);
            
                var widgetIdentifierConfiguration: DevExpress.ui.dxTextBoxOptions;
                widgetIdentifierConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('WidgetIdentifier'), typeLetter.normal, stateControl.disabled, false );
                $("#txtWidgetIdentifier").dxTextBox(widgetIdentifierConfiguration);

                var widgetPositionConfiguration: DevExpress.ui.dxTextBoxOptions;
                widgetPositionConfiguration = setupNumberBox(undefined, 1, undefined, undefined, 5);
                $("#nmbWidgetPosition").dxNumberBox(widgetPositionConfiguration);

            /* TEXTBOX */

                var validationTypeTextBox = validateRequired(groupValidationTextBox, CORE_TAG('TypeTextBox'));
                var typeTextBoxConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeTextBoxConfiguration = setupComboBoxControl(catalog.flwTypeTextBox, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeTextBox'));
                $("#cmbTypeTextBox").dxSelectBox(typeTextBoxConfiguration).dxValidator(validationTypeTextBox);
                
                var defaultValueTextBoxConfiguration: DevExpress.ui.dxTextBoxOptions;
                defaultValueTextBoxConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DefaultValue'), typeLetter.normal, stateControl.disabled, true);
                $("#txtDefaultValueTextBox").dxTextBox(defaultValueTextBoxConfiguration);

                var lengthTextBoxConfiguration: DevExpress.ui.dxTextBoxOptions;
                lengthTextBoxConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('MaxLength'), typeLetter.normal, stateControl.disabled, false, typeCharAllowed.OnlyNumber);
                $("#txtMaxLengthTextBox").dxTextBox(lengthTextBoxConfiguration);
                
                var validationPlaceholderTextBox = validateRequired(groupValidationTextBox, CORE_TAG('Placeholder'));
                var placeholderTextBoxConfiguration: DevExpress.ui.dxTextBoxOptions;
                placeholderTextBoxConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Placeholder'), typeLetter.normal, stateControl.disabled, true);
                $("#txtPlaceholderTextBox").dxTextBox(placeholderTextBoxConfiguration).dxValidator(validationPlaceholderTextBox);
                
                var validationTypeLetterTextBox = validateRequired(groupValidationTextBox, CORE_TAG('TypeLetter'));
                var typeLetterTextBoxConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeLetterTextBoxConfiguration = setupComboBoxControl(catalog.flwTypeLetter, 'Description', 'SaveCode', undefined, false, stateControl.disabled, undefined, CORE_TAG('TypeLetter'));
                $("#cmbTypeLetterTextBox").dxSelectBox(typeLetterTextBoxConfiguration).dxValidator(validationTypeLetterTextBox);

                var validationTypeStateTextBox = validateRequired(groupValidationTextBox, CORE_TAG('TypeStateField'));
                var typeStateTextBoxConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeStateTextBoxConfiguration = setupComboBoxControl(catalog.flwStateControl, 'Description', 'SaveCode', undefined, false, stateControl.disabled, undefined, CORE_TAG('TypeStateField'));
                $("#cmbTypeStateTextBox").dxSelectBox(typeStateTextBoxConfiguration).dxValidator(validationTypeStateTextBox);

                var validationTypeCharTextBox = validateRequired(groupValidationTextBox, CORE_TAG('TypeChar'));
                var typeCharTextBoxConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeCharTextBoxConfiguration = setupComboBoxControl(catalog.flwTypeCharAllowed, 'Description', 'SaveCode', undefined, false, stateControl.disabled, undefined, CORE_TAG('TypeChar'));
                $("#cmbTypeCharTextBox").dxSelectBox(typeCharTextBoxConfiguration).dxValidator(validationTypeCharTextBox);

                var validationSpecialsCharTextBox = validateRequired(groupValidationTextBox, CORE_TAG('SpecialsChar'));
                var specialsCharTextBoxConfiguration: DevExpress.ui.dxSelectBoxOptions;
                specialsCharTextBoxConfiguration = setupComboBoxControl(catalog.flwSpecialsChar, 'Description', 'SaveCode', undefined, false, stateControl.disabled, undefined, CORE_TAG('SpecialsChar'));
                $("#cmbSpecialsCharTextBox").dxSelectBox(specialsCharTextBoxConfiguration).dxValidator(validationSpecialsCharTextBox);

                var allowSpaceTextBoxConfiguration: DevExpress.ui.dxSwitchOptions;
                allowSpaceTextBoxConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true, stateControl.disabled);
                $("#swAllowSpaceTextBox").dxSwitch(allowSpaceTextBoxConfiguration);

            /* BUTTON */

                var textButtonConfiguration: DevExpress.ui.dxTextBoxOptions;
                textButtonConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Text'), typeLetter.normal, undefined, true);
                $("#txtTextButton").dxTextBox(textButtonConfiguration);
                
                var actionButtonConfiguration: DevExpress.ui.dxTextBoxOptions;
                actionButtonConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('PlaceholderAction'), typeLetter.normal, undefined, false);
                $("#txtActionButton").dxTextBox(actionButtonConfiguration);

                var validationGroupButtonConfiguration: DevExpress.ui.dxTextBoxOptions;
                validationGroupButtonConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('PlaceholderValidationGroup'), typeLetter.normal, undefined, false);
                $("#txtValidationGroupButton").dxTextBox(validationGroupButtonConfiguration);

                var validationTypeStateButton = validateRequired(groupValidationButton, CORE_TAG('TypeStateField'));
                var typeStateButtonConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeStateButtonConfiguration = setupComboBoxControl(catalog.flwStateControl, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeStateField'));
                $("#cmbTypeStateButton").dxSelectBox(typeStateButtonConfiguration).dxValidator(validationTypeStateButton);

                var validationTypeButton = validateRequired(groupValidationButton, CORE_TAG('TypeButton'));
                var typeButtonConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeButtonConfiguration = setupComboBoxControl(catalog.flwTypeButtons, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeButton'));
                $("#cmbTypeButton").dxSelectBox(typeButtonConfiguration).dxValidator(validationTypeButton);

                var validationIconButton = validateRequired(groupValidationButton, CORE_TAG('Icon'));
                var iconButtonConfiguration: DevExpress.ui.dxSelectBoxOptions;
                iconButtonConfiguration = setupComboBoxControl(catalog.flwIcons, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('Icon'));
                $("#cmbIconButton").dxSelectBox(iconButtonConfiguration).dxValidator(validationIconButton);

            /* TEXTAREA */

                var defaultValueTextAreaConfiguration: DevExpress.ui.dxTextBoxOptions;
                defaultValueTextAreaConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DefaultValue'), typeLetter.normal, undefined, true);
                $("#txtDefaultValueTextArea").dxTextBox(defaultValueTextAreaConfiguration);
                
                var maxLengthTextAreaConfiguration: DevExpress.ui.dxTextBoxOptions;
                maxLengthTextAreaConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('MaxLength'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtMaxLengthTextArea").dxTextBox(maxLengthTextAreaConfiguration);

                var validationWidthTextArea = validateRequired(groupValidationTextArea, CORE_TAG('Width'));
                var widthTextAreaConfiguration: DevExpress.ui.dxTextBoxOptions;
                widthTextAreaConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('Width'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtWidthTextArea").dxTextBox(widthTextAreaConfiguration).dxValidator(validationWidthTextArea);
                
                var validationHeightTextArea = validateRequired(groupValidationTextArea, CORE_TAG('Height'));
                var heightTextAreaConfiguration: DevExpress.ui.dxTextBoxOptions;
                heightTextAreaConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('Height'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtHeightTextArea").dxTextBox(heightTextAreaConfiguration).dxValidator(validationHeightTextArea);

                var validationPlaceholderTextArea = validateRequired(groupValidationTextArea, CORE_TAG('Placeholder'));
                var placeholderTextAreaConfiguration: DevExpress.ui.dxTextBoxOptions;
                placeholderTextAreaConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Placeholder'), typeLetter.normal, undefined, true);
                $("#txtPlaceholderTextArea").dxTextBox(placeholderTextAreaConfiguration).dxValidator(validationPlaceholderTextArea);

                var validationTypeStateTextArea = validateRequired(groupValidationTextArea, CORE_TAG('TypeStateField'));
                var typeStateTextAreaConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeStateTextAreaConfiguration = setupComboBoxControl(catalog.flwStateControl, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeStateField'));
                $("#cmbTypeStateTextArea").dxSelectBox(typeStateTextAreaConfiguration).dxValidator(validationTypeStateTextArea);

            /* SWITCH */

                var onTextSwitchConfiguration: DevExpress.ui.dxTextBoxOptions;
                onTextSwitchConfiguration = setupTextBoxControl(undefined, 16, CORE_TAG('OnText'), typeLetter.upper, undefined, false);
                $("#txtOnTextSwitch").dxTextBox(onTextSwitchConfiguration);

                var offSwitchConfiguration: DevExpress.ui.dxTextBoxOptions;
                offSwitchConfiguration = setupTextBoxControl(undefined, 16, CORE_TAG('OffText'), typeLetter.upper, undefined, false);
                $("#txtOffTextSwitch").dxTextBox(offSwitchConfiguration);

                var defaultValueSwitchConfiguration: DevExpress.ui.dxSelectBoxOptions;
                defaultValueSwitchConfiguration = setupComboBoxControl(catalog.flwDefaultValueSwitch, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('DefaultValue'));
                $("#cmbDefaultValueSwitch").dxSelectBox(defaultValueSwitchConfiguration);

                var validationTypeStateSwitch = validateRequired(groupValidationSwitch, CORE_TAG('TypeStateField'));
                var typeStateSwitchConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeStateSwitchConfiguration = setupComboBoxControl(catalog.flwStateControl, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeStateField'));
                $("#cmbTypeStateSwitch").dxSelectBox(typeStateSwitchConfiguration).dxValidator(validationTypeStateSwitch);

            /* DATE */

                var defaultValueDateConfiguration: DevExpress.ui.dxDateBoxOptions;
                defaultValueDateConfiguration = setupDateControl();
                $("#dtDefaultValueDate").dxDateBox(defaultValueDateConfiguration);

                var minDateConfiguration: DevExpress.ui.dxDateBoxOptions;
                minDateConfiguration = setupDateControl();
                $("#dtMinDate").dxDateBox(minDateConfiguration);

                var maxDateConfiguration: DevExpress.ui.dxDateBoxOptions;
                maxDateConfiguration = setupDateControl();
                $("#dtMaxDate").dxDateBox(maxDateConfiguration);

                var widthDateConfiguration: DevExpress.ui.dxTextBoxOptions;
                widthDateConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('Width'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtWidthDate").dxTextBox(widthDateConfiguration);

                var validationTypeStateDate = validateRequired(groupValidationDate, CORE_TAG('TypeStateField'));
                var typeStateDateConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeStateDateConfiguration = setupComboBoxControl(catalog.flwStateControl, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeStateField'));
                $("#cmbTypeStateDate").dxSelectBox(typeStateDateConfiguration).dxValidator(validationTypeStateDate);

            /* NUMBERBOX */

                var defaultValueNumberBoxConfiguration: DevExpress.ui.dxNumberBoxOptions;
                defaultValueNumberBoxConfiguration = setupNumberBox(undefined, undefined, undefined, undefined, 16);
                $("#nmbDefaultValueNumberBox").dxNumberBox(defaultValueNumberBoxConfiguration);

                var minValueNumberBoxConfiguration: DevExpress.ui.dxNumberBoxOptions;
                minValueNumberBoxConfiguration = setupNumberBox(undefined, undefined, undefined, undefined, 16);
                $("#nmbMinValueNumberBox").dxNumberBox(minValueNumberBoxConfiguration);

                var maxValueNumberBoxConfiguration: DevExpress.ui.dxNumberBoxOptions;
                maxValueNumberBoxConfiguration = setupNumberBox(undefined, undefined, undefined, undefined, 16);;
                $("#nmbMaxValueNumberBox").dxNumberBox(maxValueNumberBoxConfiguration);

                var widthNumberBoxConfiguration: DevExpress.ui.dxTextBoxOptions;
                widthNumberBoxConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Width'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtWidthNumberBox").dxTextBox(widthNumberBoxConfiguration);

                var validationMaxLengthNumberBox = validateRequired(groupValidationNumberBox, CORE_TAG('MaxLength'));
                var maxLengthNumberBoxConfiguration: DevExpress.ui.dxTextBoxOptions;
                maxLengthNumberBoxConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('MaxLength'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtMaxLengthNumberBox").dxTextBox(maxLengthNumberBoxConfiguration).dxValidator(validationMaxLengthNumberBox);

            /* DEFAULT BUTTON */

                var validationClassDefaultButton = validateRequired(groupValidationDefaultButton, CORE_TAG('ClassButton'));
                var classDefaultButtonConfiguration: DevExpress.ui.dxSelectBoxOptions;
                classDefaultButtonConfiguration = setupComboBoxControl(catalog.flwClassButtons, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('ClassButton'));
                $("#cmbClassDefaultButton").dxSelectBox(classDefaultButtonConfiguration).dxValidator(validationClassDefaultButton);

                var actionDefaultButtonConfiguration: DevExpress.ui.dxTextBoxOptions;
                actionDefaultButtonConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Action'), typeLetter.normal, undefined, false);
                $("#txtActionDefaultButton").dxTextBox(actionDefaultButtonConfiguration);

                var validationGroupDefaultButtonConfiguration: DevExpress.ui.dxTextBoxOptions;
                validationGroupDefaultButtonConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('ValidationGroup'), typeLetter.normal, undefined, false);
                $("#txtValidationGroupDefaultButton").dxTextBox(validationGroupDefaultButtonConfiguration);

                var validationTypeStateDefaultButton = validateRequired(groupValidationDefaultButton, CORE_TAG('TypeStateField'));
                var typeStateDefaultButtonConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeStateDefaultButtonConfiguration = setupComboBoxControl(catalog.flwStateControl, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeStateField'));
                $("#cmbTypeStateDefaultButton").dxSelectBox(typeStateDefaultButtonConfiguration).dxValidator(validationTypeStateDefaultButton);

                var allowIconDefaultButtonConfiguration: DevExpress.ui.dxSwitchOptions;
                allowIconDefaultButtonConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swAllowIconDefaultButton").dxSwitch(allowIconDefaultButtonConfiguration);

            /* FLOAT BUTTON */
                
                var validationClassFloatButton = validateRequired(groupValidationFloatButton, CORE_TAG('ClassButton'));
                var classFloatButtonConfiguration: DevExpress.ui.dxSelectBoxOptions;
                classFloatButtonConfiguration = setupComboBoxControl(catalog.flwClassButtons, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('ClassButton'));
                $("#cmbClassFloatButton").dxSelectBox(classFloatButtonConfiguration).dxValidator(validationClassFloatButton);

                var actionFloatButtonConfiguration: DevExpress.ui.dxTextBoxOptions;
                actionFloatButtonConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Action'), typeLetter.normal, null, false);
                $("#txtActionFloatButton").dxTextBox(actionFloatButtonConfiguration);

                var validationIconFloatButton = validateRequired(groupValidationFloatButton, CORE_TAG('Icon'));
                var iconFloatButtonConfiguration: DevExpress.ui.dxSelectBoxOptions;
                iconFloatButtonConfiguration = setupComboBoxControl(catalog.flwIcons, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('Icon'));
                $("#cmbIconFloatButton").dxSelectBox(iconFloatButtonConfiguration).dxValidator(validationIconFloatButton);

                var sizeFloatButtonConfiguration: DevExpress.ui.dxSelectBoxOptions;
                sizeFloatButtonConfiguration = setupComboBoxControl(catalog.flwSizeFloatButtons, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('Size'));
                $("#cmbSizeFloatButton").dxSelectBox(sizeFloatButtonConfiguration)

                var typeFloatButtonConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeFloatButtonConfiguration = setupComboBoxControl(catalog.flwTypeFloatButtons, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeButton'));
                $("#cmbTypeFloatButton").dxSelectBox(typeFloatButtonConfiguration)

                var groupValidationFloatButtonConfiguration: DevExpress.ui.dxTextBoxOptions;
                groupValidationFloatButtonConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('ValidationGroup'), typeLetter.normal, undefined, false);
                $("#txtValidationGroupFloatButton").dxTextBox(groupValidationFloatButtonConfiguration);

            /* POPUP */      
            
                var validationTitlePopup = validateRequired(groupValidationPopup, CORE_TAG('ClassButton'));
                var titlePopupConfiguration: DevExpress.ui.dxTextBoxOptions;
                titlePopupConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Title'), typeLetter.upper, undefined, true, typeCharAllowed.AllChar);
                $("#txtTitlePopup").dxTextBox(titlePopupConfiguration).dxValidator(validationTitlePopup); 

                var widthPopupConfiguration: DevExpress.ui.dxTextBoxOptions;
                widthPopupConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('Width'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtWidthPopup").dxTextBox(widthPopupConfiguration);
                
                var heightPopupConfiguration: DevExpress.ui.dxTextBoxOptions;
                heightPopupConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('Height'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtHeightPopup").dxTextBox(heightPopupConfiguration);

                var visiblePopupConfiguration: DevExpress.ui.dxSwitchOptions;
                visiblePopupConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swVisiblePopup").dxSwitch(visiblePopupConfiguration); 
                
                var showTitlePopupConfiguration: DevExpress.ui.dxSwitchOptions;
                showTitlePopupConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swShowTitlePopup").dxSwitch(showTitlePopupConfiguration);   
                
                var showCloseButtonPopupConfiguration: DevExpress.ui.dxSwitchOptions;
                showCloseButtonPopupConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swShowCloseButtonPopup").dxSwitch(showCloseButtonPopupConfiguration); 
                
                var resizeEnabledPopupConfiguration: DevExpress.ui.dxSwitchOptions;
                resizeEnabledPopupConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swResizeEnabledPopup").dxSwitch(resizeEnabledPopupConfiguration);

            /* POPOVER */

                var validationTargetPopover = validateRequired(groupValidationPopover, CORE_TAG('Target'));
                var targetPopoverConfiguration: DevExpress.ui.dxTextBoxOptions;
                targetPopoverConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Target'), typeLetter.normal, undefined, false, typeCharAllowed.AllChar);
                $("#txtTargetPopover").dxTextBox(targetPopoverConfiguration).dxValidator(validationTargetPopover); 

                var validationPositionPopover = validateRequired(groupValidationPopover, CORE_TAG('WidgetPosition'));
                var positionPopoverConfiguration: DevExpress.ui.dxSelectBoxOptions;
                positionPopoverConfiguration = setupComboBoxControl(catalog.flwPositionControls, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('WidgetPosition'));
                $("#cmbPositionPopover").dxSelectBox(positionPopoverConfiguration).dxValidator(validationPositionPopover);

                var widthPopoverConfiguration: DevExpress.ui.dxTextBoxOptions;
                widthPopoverConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('Width'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtWidthPopover").dxTextBox(widthPopoverConfiguration);

                var titlePopoverConfiguration: DevExpress.ui.dxTextBoxOptions;
                titlePopoverConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Title'), typeLetter.normal, undefined, true, typeCharAllowed.AllChar);
                $("#txtTitlePopover").dxTextBox(titlePopoverConfiguration);

                var shadingPopoverConfiguration: DevExpress.ui.dxSwitchOptions;
                shadingPopoverConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swShadingPopover").dxSwitch(shadingPopoverConfiguration); 
                
                var showTitlePopoverConfiguration: DevExpress.ui.dxSwitchOptions;
                showTitlePopoverConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swShowTitlePopover").dxSwitch(showTitlePopoverConfiguration); 
                
                var showCloseButtonPopupConfiguration: DevExpress.ui.dxSwitchOptions;
                showCloseButtonPopupConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swShowCloseButtonPopover").dxSwitch(showCloseButtonPopupConfiguration); 
                
            /* SUMMARY VALIDATION */

                var validationGroupSummary = validateRequired(groupValidationSummary, CORE_TAG('ValidationGroup'));
                var validationGroupSummaryConfiguration: DevExpress.ui.dxTextBoxOptions;
                validationGroupSummaryConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('ValidationGroup'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtValidationGroupSummary").dxTextBox(validationGroupSummaryConfiguration).dxValidator(validationGroupSummary); 

            /* RADIOGROUP */

                var defaultValueRadioConfiguration: DevExpress.ui.dxTextBoxOptions;
                defaultValueRadioConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DefaultValue'), typeLetter.normal, undefined, true, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDefaultValueRadio").dxTextBox(defaultValueRadioConfiguration); 

                var validationDataSourceRadio = validateRequired(groupValidationRadio, CORE_TAG('DataSource'));
                var dataSourceRadioConfiguration: DevExpress.ui.dxTextBoxOptions;
                dataSourceRadioConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DataSource'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDataSourceRadio").dxTextBox(dataSourceRadioConfiguration).dxValidator(validationDataSourceRadio); 

                var validationDisplayExprRadio = validateRequired(groupValidationRadio, CORE_TAG('DisplayExpr'));
                var displayExprRadioConfiguration: DevExpress.ui.dxTextBoxOptions;
                displayExprRadioConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DisplayExpr'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDisplayExprRadio").dxTextBox(displayExprRadioConfiguration).dxValidator(validationDisplayExprRadio); 

                var validationValueExprRadio = validateRequired(groupValidationRadio, CORE_TAG('ValueExpr'));
                var valueExprRadioConfiguration: DevExpress.ui.dxTextBoxOptions;
                valueExprRadioConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('ValueExpr'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtValueExprRadio").dxTextBox(valueExprRadioConfiguration).dxValidator(validationValueExprRadio); 

                var itemTemplateRadioConfiguration: DevExpress.ui.dxTextBoxOptions;
                itemTemplateRadioConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('ItemTemplate'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtItemTemplateRadio").dxTextBox(itemTemplateRadioConfiguration); 

            /* ACCORDION */

                var validationDataSourceAccordion = validateRequired(groupValidationAccordion, CORE_TAG('DataSource'));
                var dataSourceAccordionConfiguration: DevExpress.ui.dxTextBoxOptions;
                dataSourceAccordionConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DataSource'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDataSourceAccordion").dxTextBox(dataSourceAccordionConfiguration).dxValidator(validationDataSourceAccordion); 
                
                var titleTemplateAccordionConfiguration: DevExpress.ui.dxTextBoxOptions;
                titleTemplateAccordionConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('TitleTemplate'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtTitleTemplateAccordion").dxTextBox(titleTemplateAccordionConfiguration); 

                var itemTemplateAccordionConfiguration: DevExpress.ui.dxTextBoxOptions;
                itemTemplateAccordionConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('ItemTemplate'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtItemTemplateAccordion").dxTextBox(itemTemplateAccordionConfiguration); 

                var multipleAccordionConfiguration: DevExpress.ui.dxSwitchOptions;
                multipleAccordionConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swMultipleAccordion").dxSwitch(multipleAccordionConfiguration); 

            /* ACTION SHEET */

                var validationDataSourceActionSheet = validateRequired(groupValidationActionSheet, CORE_TAG('DataSource'));
                var dataSourceActionSheetConfiguration: DevExpress.ui.dxTextBoxOptions;
                dataSourceActionSheetConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DataSource'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDataSourceActionSheet").dxTextBox(dataSourceActionSheetConfiguration).dxValidator(validationDataSourceActionSheet); 
                
                var titleActionSheetConfiguration: DevExpress.ui.dxTextBoxOptions;
                titleActionSheetConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Title'), typeLetter.normal, undefined, true, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtTitleActionSheet").dxTextBox(titleActionSheetConfiguration); 

                var itemTemplateActionSheetConfiguration: DevExpress.ui.dxTextBoxOptions;
                itemTemplateActionSheetConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('ItemTemplate'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtItemTemplateActionSheet").dxTextBox(itemTemplateActionSheetConfiguration); 

                var showTitleActionSheetConfiguration: DevExpress.ui.dxSwitchOptions;
                showTitleActionSheetConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swShowTitleActionSheet").dxSwitch(showTitleActionSheetConfiguration); 

            /* CHECKBOX */

                var defaultValueCheckBoxConfiguration: DevExpress.ui.dxSwitch;
                defaultValueCheckBoxConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), false);
                $("#swDefaultValueCheckBox").dxSwitch(defaultValueCheckBoxConfiguration); 

                var textCheckBoxConfiguration: DevExpress.ui.dxTextBoxOptions;
                textCheckBoxConfiguration = setupTextBoxControl(undefined, 256, CORE_TAG('Text'), typeLetter.normal, undefined, true, typeCharAllowed.AllChar);
                $("#txtTextCheckBox").dxTextBox(textCheckBoxConfiguration);

                var validationTypeStateCheckBox = validateRequired(groupValidationCheckBox, CORE_TAG('TypeStateField'));
                var typeStateCheckBoxConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeStateCheckBoxConfiguration = setupComboBoxControl(catalog.flwStateControl, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeStateField'));
                $("#cmbTypeStateCheckBox").dxSelectBox(typeStateCheckBoxConfiguration).dxValidator(validationTypeStateCheckBox);

            /* SELECTBOX */

                var validationDataSourceCombo = validateRequired(groupValidationComboBox, CORE_TAG('DataSource'));
                var dataSourceComboConfiguration: DevExpress.ui.dxTextBoxOptions;
                dataSourceComboConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DataSource'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDataSourceCombo").dxTextBox(dataSourceComboConfiguration).dxValidator(validationDataSourceCombo); 

                var validationDisplayExprCombo = validateRequired(groupValidationComboBox, CORE_TAG('DisplayExpr'));
                var displayExprComboConfiguration: DevExpress.ui.dxTextBoxOptions;
                displayExprComboConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DisplayExpr'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDisplayExprCombo").dxTextBox(displayExprComboConfiguration).dxValidator(validationDisplayExprCombo); 

                var validationValueExprCombo = validateRequired(groupValidationComboBox, CORE_TAG('ValueExpr'));
                var valueExprComboConfiguration: DevExpress.ui.dxTextBoxOptions;
                valueExprComboConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('ValueExpr'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtValueExprCombo").dxTextBox(valueExprComboConfiguration).dxValidator(validationValueExprCombo); 

                var defaultValueComboConfiguration: DevExpress.ui.dxTextBoxOptions;
                defaultValueComboConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DefaultValue'), typeLetter.normal, undefined, true, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDefaultValueCombo").dxTextBox(defaultValueComboConfiguration); 

                var validationTypeStateCombo = validateRequired(groupValidationComboBox, CORE_TAG('TypeStateField'));
                var typeStateComboConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeStateComboConfiguration = setupComboBoxControl(catalog.flwStateControl, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeStateField'));
                $("#cmbTypeStateCombo").dxSelectBox(typeStateComboConfiguration).dxValidator(validationTypeStateCombo);

                var widthComboConfiguration: DevExpress.ui.dxTextBoxOptions;
                widthComboConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('Width'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtWidthCombo").dxTextBox(widthComboConfiguration);

                var validationPlaceholderCombo = validateRequired(groupValidationComboBox, CORE_TAG('Placeholder'));
                var placeholderComboConfiguration: DevExpress.ui.dxTextBoxOptions;
                placeholderComboConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Placeholder'), typeLetter.normal, undefined, true);
                $("#txtPlaceholderCombo").dxTextBox(placeholderComboConfiguration).dxValidator(validationPlaceholderCombo);

                var searchEnabledComboConfiguration: DevExpress.ui.dxSwitchOptions;
                searchEnabledComboConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swSearchEnabledCombo").dxSwitch(searchEnabledComboConfiguration); 

            /* DATAGRID */

                var validationDataSourceGrid = validateRequired(groupValidationDataGrid, CORE_TAG('DataSource'));
                var dataSourceGridConfiguration: DevExpress.ui.dxTextBoxOptions;
                dataSourceGridConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DataSource'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDataSourceGrid").dxTextBox(dataSourceGridConfiguration).dxValidator(validationDataSourceGrid); 

                var validationColumnsGrid = validateRequired(groupValidationDataGrid, CORE_TAG('Columns'));
                var columnsGridConfiguration: DevExpress.ui.dxTextBoxOptions;
                columnsGridConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Columns'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtColumnsGrid").dxTextBox(columnsGridConfiguration).dxValidator(validationColumnsGrid); 

                var modeSelectionGridConfiguration: DevExpress.ui.dxSelectBoxOptions;
                modeSelectionGridConfiguration = setupComboBoxControl(catalog.flwTypeSelectionGrid, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('ModeSelection'));
                $("#cmbModeSelectionGrid").dxSelectBox(modeSelectionGridConfiguration); 

                var paginationGridConfiguration: DevExpress.ui.dxSwitchOptions;
                paginationGridConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swPaginationGrid").dxSwitch(paginationGridConfiguration);

                var allowFilterGridConfiguration: DevExpress.ui.dxSwitchOptions;
                allowFilterGridConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swAllowFilterGrid").dxSwitch(allowFilterGridConfiguration);

                var allowEditingGridConfiguration: DevExpress.ui.dxSwitchOptions;
                allowEditingGridConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swAllowEditingGrid").dxSwitch(allowEditingGridConfiguration);

                var summaryGridConfiguration: DevExpress.ui.dxSelectBoxOptions;
                summaryGridConfiguration = setupComboBoxControl(catalog.flwTypeSummaryGrid, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('Summary'));
                $("#cmbSummaryGrid").dxSelectBox(summaryGridConfiguration);

                var isGroupedSummaryGridConfiguration: DevExpress.ui.dxSwitchOptions;
                isGroupedSummaryGridConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swIsGroupedSummaryGrid").dxSwitch(isGroupedSummaryGridConfiguration);

                var pageSizeGridConfiguration: DevExpress.ui.dxTextBoxOptions;
                pageSizeGridConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('PageSize'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtPageSizeGrid").dxTextBox(pageSizeGridConfiguration);

                var validationTypeStateGrid = validateRequired(groupValidationDataGrid, CORE_TAG('TypeStateField'));
                var typeStateGridConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeStateGridConfiguration = setupComboBoxControl(catalog.flwStateControl, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeStateField'));
                $("#cmbTypeStateGrid").dxSelectBox(typeStateGridConfiguration).dxValidator(validationTypeStateGrid);

            /* GALLERY */

                var validationDataSourceGallery = validateRequired(groupValidationGallery, CORE_TAG('DataSource'));
                var dataSourceGalleryConfiguration: DevExpress.ui.dxTextBoxOptions;
                dataSourceGalleryConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DataSource'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDataSourceGallery").dxTextBox(dataSourceGalleryConfiguration).dxValidator(validationDataSourceGallery);
                
                var slideShowGalleryConfiguration: DevExpress.ui.dxSwitchOptions;
                slideShowGalleryConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swSlideShowGallery").dxSwitch(slideShowGalleryConfiguration);

                var delaySlideGalleryConfiguration: DevExpress.ui.dxTextBoxOptions;
                delaySlideGalleryConfiguration = setupTextBoxControl(undefined, 2, CORE_TAG('DelaySlide'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtDelaySlideGallery").dxTextBox(delaySlideGalleryConfiguration);

                var loopGalleryConfiguration: DevExpress.ui.dxSwitchOptions;
                loopGalleryConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swLoopGallery").dxSwitch(loopGalleryConfiguration);
                
                var showNavButtonGalleryConfiguration: DevExpress.ui.dxSwitchOptions;
                showNavButtonGalleryConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swShowNavButtonGallery").dxSwitch(showNavButtonGalleryConfiguration);
                
                var showIndicatorGalleryConfiguration: DevExpress.ui.dxSwitchOptions;
                showIndicatorGalleryConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swShowIndicatorGallery").dxSwitch(showIndicatorGalleryConfiguration);

            /* LISTBOX */

                var validationDataSourceListBox = validateRequired(groupValidationListBox, CORE_TAG('DataSource'));
                var dataSourceListBoxConfiguration: DevExpress.ui.dxTextBoxOptions;
                dataSourceListBoxConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DataSource'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDataSourceListBox").dxTextBox(dataSourceListBoxConfiguration).dxValidator(validationDataSourceListBox);

                var modeSelectionListBoxConfiguration: DevExpress.ui.dxSelectBoxOptions;
                modeSelectionListBoxConfiguration = setupComboBoxControl(catalog.flwModeSelection, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('ModeSelection'));
                $("#cmbModeSelectionListBox").dxSelectBox(modeSelectionListBoxConfiguration);

                var showCheckListBoxConfiguration: DevExpress.ui.dxSwitchOptions;
                showCheckListBoxConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swShowCheckListBox").dxSwitch(showCheckListBoxConfiguration);

                var heightListBoxConfiguration: DevExpress.ui.dxTextBoxOptions;
                heightListBoxConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('Height'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtHeightListBox").dxTextBox(heightListBoxConfiguration);

                var itemTemplateListBoxConfiguration: DevExpress.ui.dxTextBoxOptions;
                itemTemplateListBoxConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('ItemTemplate'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtItemTemplateListBox").dxTextBox(itemTemplateListBoxConfiguration);

                var groupedListBoxConfiguration: DevExpress.ui.dxSwitchOptions;
                groupedListBoxConfiguration = setupSwitchControl(CORE_TAG('Yes'), CORE_TAG('No'), true);
                $("#swGroupedListBox").dxSwitch(groupedListBoxConfiguration);

                var groupTemplateListBoxConfiguration: DevExpress.ui.dxTextBoxOptions;
                groupTemplateListBoxConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('GroupTemplate'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtGroupTemplateListBox").dxTextBox(groupTemplateListBoxConfiguration);

                var validationTypeStateListBox = validateRequired(groupValidationListBox, CORE_TAG('TypeStateField'));
                var typeStateListBoxConfiguration: DevExpress.ui.dxSelectBoxOptions;
                typeStateListBoxConfiguration = setupComboBoxControl(catalog.flwStateControl, 'Description', 'SaveCode', undefined, false, undefined, undefined, CORE_TAG('TypeStateField'));
                $("#cmbTypeStateListBox").dxSelectBox(typeStateListBoxConfiguration).dxValidator(validationTypeStateListBox);

            /* MAP */

                var validationMarkersDataMap = validateRequired(groupValidationMap, CORE_TAG('MarkersData'));
                var markersDataMapConfiguration: DevExpress.ui.dxTextBoxOptions;
                markersDataMapConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('MarkersData'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtMarkersDataMap").dxTextBox(markersDataMapConfiguration).dxValidator(validationMarkersDataMap);

                var widthMapConfiguration: DevExpress.ui.dxTextBoxOptions;
                widthMapConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('Width'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtWidthMap").dxTextBox(widthMapConfiguration);

                var heightMapConfiguration: DevExpress.ui.dxTextBoxOptions;
                heightMapConfiguration = setupTextBoxControl(undefined, 3, CORE_TAG('Height'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyNumber);
                $("#txtHeightMap").dxTextBox(heightMapConfiguration);

                var zoomMapConfiguration: DevExpress.ui.dxTextBoxOptions;
                zoomMapConfiguration = setupNumberBox(undefined, 1, 22, undefined, 2);
                $("#nmbZoomMap").dxNumberBox(zoomMapConfiguration);

                var iconMarkerMapConfiguration: DevExpress.ui.dxTextBoxOptions;
                iconMarkerMapConfiguration = setupTextBoxControl(undefined, 64, 'Imagen sin extensiones', typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtIconMarkerMap").dxTextBox(iconMarkerMapConfiguration);

            /* TAB */

                var validationDataSourceTab = validateRequired(groupValidationTab, CORE_TAG('DataSource'));
                var dataSourceTabConfiguration: DevExpress.ui.dxTextBoxOptions;
                dataSourceTabConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('DataSource'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtDataSourceTab").dxTextBox(dataSourceTabConfiguration).dxValidator(validationDataSourceTab);

                var selectedIndexTabConfiguration: DevExpress.ui.dxTextBoxOptions;
                selectedIndexTabConfiguration = setupNumberBox(-1, -1, undefined, undefined, 2);
                $("#nmbSelectedIndexTab").dxNumberBox(selectedIndexTabConfiguration);

                var itemTemplateTabConfiguration: DevExpress.ui.dxTextBoxOptions;
                itemTemplateTabConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('ItemTemplate'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtItemTemplateTab").dxTextBox(itemTemplateTabConfiguration);

            /* TOOLBAR */

                var validationTitleToolBar = validateRequired(groupValidationToolBar, CORE_TAG('Title'));
                var titleToolBarConfiguration: DevExpress.ui.dxTextBoxOptions;
                titleToolBarConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('Title'), typeLetter.normal, undefined, true, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtTitleToolBar").dxTextBox(titleToolBarConfiguration).dxValidator(validationTitleToolBar);

                var onClickToolBarConfiguration: DevExpress.ui.dxTextBoxOptions;
                onClickToolBarConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('OnClick'), typeLetter.normal, undefined, false, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtOnClickToolBar").dxTextBox(onClickToolBarConfiguration);

                var typeToolBarConfiguration: DevExpress.ui.dxTextBoxOptions;
                typeToolBarConfiguration = setupTextBoxControl(undefined, 32, CORE_TAG('TypeToolBar'), typeLetter.normal, undefined, true, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtTypeToolBar").dxTextBox(typeToolBarConfiguration);

                var textTypeToolBarConfiguration: DevExpress.ui.dxTextBoxOptions;
                textTypeToolBarConfiguration = setupTextBoxControl(undefined, 64, CORE_TAG('TextType'), typeLetter.normal, undefined, true, typeCharAllowed.OnlyTextNumberAndChar);
                $("#txtTextTypeToolBar").dxTextBox(textTypeToolBarConfiguration);

            /* BUTTONS WIDGET */

                var acceptTextBoxConfiguration: DevExpress.ui.dxButtonOptions;
                acceptTextBoxConfiguration = setupButtonControl(CORE_TAG('SaveWidget'), this.saveNewWidget, undefined, typeButtons.Success, iconosCore.floppy );
                $("#btnSaveWidget").dxButton(acceptTextBoxConfiguration);

                var cancelTextBoxConfiguration: DevExpress.ui.dxButtonOptions;
                cancelTextBoxConfiguration = setupButtonControl(CORE_TAG('EndConfigurationView'), this.saveConfiguration, undefined, typeButtons.Default, iconosCore.times );
                $("#btnEndViewConfiguration").dxButton(cancelTextBoxConfiguration);        
        
        this.initializeToolBar();
        this.hideDivs();
        debugger;        
        GetViewsByState(true, false, function (data:any) {    
            listViews._store._array = data;
            changePropertyControl('#grdViews', typeControl.DataGrid, 'dataSource', listViews);
        })

        changePropertyControl('#popupViewData', typeControl.Popup, 'onShown', this.shownEvtPopup);
        changePropertyControl('#popupAddWidgets', typeControl.Popup, 'onHiding', this.hidingEvtPopupAddWidgets);
        changePropertyControl('#popupAddWidgets', typeControl.Popup, 'onShown', this.shownEvtPopup);
        changePropertyControl('#txtViewName', typeControl.TextBox, 'onValueChanged', this.valueChangedEvtTxtViewName);        
        changePropertyControl('#cmbWidgetType', typeControl.SelectBox, 'onSelectionChanged', this.selectionEvtCmbWidgetType);
        changePropertyControl('#txtWidgetDescription', typeControl.TextBox, 'onValueChanged', this.valueChangedEvtTxtWidgetDescription);
        changePropertyControl('#cmbTypeTextBox', typeControl.SelectBox, 'onSelectionChanged', this.selectionEvtCmbTypeTextBox);       
        changePropertyControl('#grdViews', typeControl.DataGrid, 'onSelectionChanged', this.selectionEvtGrdViews);
        changePropertyControl('#grdWidgets', typeControl.DataGrid, 'editing.allowAdding', false);
        changePropertyControl('#grdWidgets', typeControl.DataGrid, 'editing.allowDeleting', false);  
        
}      

    /*          -------- EVENT ON SHOWN ------------        */

    shownEvtPopup(e: any){
        debugger;
        var idPopup = e.element.context.id;
        switch (idPopup){
            case 'popupViewData':
                $("#scrollViewPopupViewData").dxScrollView();
                $('#txtViewName').dxTextBox('instance').focus();
                break;
            case 'popupAddWidgets':
                $("#scrollViewPopupAddWidgets").dxScrollView();
                $('#cmbWidgetType').dxSelectBox('instance').focus();            
            default:
                break;
        }      
    }

    /*          -------- EVENT ON HIDING ------------        */

    hidingEvtPopupAddWidgets(){
        debugger;
        changePropertyControl('#popupViewData', typeControl.Popup, 'visible', false);
        $('#grdViews').dxDataGrid('instance').deselectAll();
        changeStateToolBar(toolBarButtons.Edit, stateToolBar.disabled);
        if(this.state.isEdit){
            GetViewsByState(true,false,function (data:any) {    
                listViews._store._array = data;
                changePropertyControl('#grdViews', typeControl.DataGrid, 'dataSource', listViews);
            })
            listWidgets._store._array = [];
            changePropertyControl('#grdWidgets', typeControl.DataGrid, 'dataSource', listWidgets._store._array);
        }        
        objNewView.Widget = [];
        changePropertyControl('#grdWidgets', typeControl.DataGrid, 'dataSource', objNewView.Widget);
    }

    /*          -------- EVENT ON VALUE CHANGED ------------        */

    valueChangedEvtTxtViewName(e:any){
        debugger;
        if(!this.state.isEdit)
        {
            $('#txtPath').dxTextBox('instance').reset();      
            var newGeneratePath = this.generatePath();
            changePropertyControl('#txtPath', typeControl.TextBox, 'value', newGeneratePath);
        }        
    }  

    generatePath(){
        debugger;
        var name = '';        
        this.setState({ viewName: $('#txtViewName').dxTextBox('option', 'value')});
        var auxviewName = this.state.viewName.split(" ");
        if(auxviewName.length >0)
        {
            for(var i = 0; i < auxviewName.length ; i++) {
                if(i==0)
                {
                    var temp = auxviewName[i].trim();
                    name += temp.charAt(0).toLowerCase() + temp.slice(1).toLowerCase();
                }
                else
                {
                    var temp = auxviewName[i].trim();
                    name += temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase();
                }                
            }            
        }
        var auxPath = "/" + name;
        return auxPath;
    }

    valueChangedEvtTxtWidgetDescription(){
        debugger; 
        if(selectWidget != null && !this.state.isEdit)
        {
            $('#txtWidgetIdentifier').dxTextBox('instance').reset();
            var newSuggestion = this.generateIdentifier();
            changePropertyControl('#txtWidgetIdentifier', typeControl.TextBox, 'value', newSuggestion);
            if(selectWidget.Description == 'TEXTBOX'){
                changePropertyControl('#txtPlaceholderTextBox', typeControl.TextBox, 'value', $("#txtWidgetDescription").dxTextBox('option', 'value'));
            }
            if(selectWidget.Description == 'TEXTAREA'){
                changePropertyControl('#txtPlaceholderTextArea', typeControl.TextBox, 'value', $("#txtWidgetDescription").dxTextBox('option', 'value'));
            }
            if(selectWidget.Description == 'SELECTBOX'){
                changePropertyControl('#txtPlaceholderCombo', typeControl.TextBox, 'value', $("#txtWidgetDescription").dxTextBox('option', 'value'));
            }
        }
    }    

    generateIdentifier(){
        debugger;
        var identifier = '';
        var auxIdentifier = $('#txtWidgetDescription').dxTextBox('option', 'value').split(" ");
        if(auxIdentifier.length >0)
        {
            for(var i = 0; i < auxIdentifier.length ; i++) {
                if(i==0)
                {
                    var temp = auxIdentifier[i].trim();
                    identifier += temp.charAt(0).toLowerCase() + temp.slice(1).toLowerCase();
                }
                else
                {
                    var temp = auxIdentifier[i].trim();
                    identifier += temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase();
                }                
            }            
        }        
        return identifier;
    }

    /*          -------- EVENT ON SELECTION CHANGED ------------      */

    selectionEvtCmbWidgetType(data:any){
        debugger;
        var selectedWidget = data.selectedItem;   
        
        if (selectedWidget != null)
        {
            selectWidget = data.selectedItem;
            that.hideDivs();
            that.resetControls();
            changePropertyControl('#txtWidgetDescription', typeControl.TextBox, 'disabled', false);
            changePropertyControl('#txtWidgetIdentifier', typeControl.TextBox, 'disabled', false);
            changePropertyControl('#nmbWidgetPosition', typeControl.NumberBox, 'disabled', false);
            $('#txtWidgetDescription').dxTextBox('instance').focus();                
            $('#btnSaveWidget').toggle();           
            switch(selectedWidget.Description){
                case 'TEXTBOX':
                    $('#divTextBox').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationTextBox, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationTextBox, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationTextBox, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationTextBox );
                    $('#cmbTypeTextBox').dxSelectBox('instance').reset();
                    $('#txtDefaultValueTextBox').dxTextBox('instance').reset();
                    $('#txtMaxLengthTextBox').dxTextBox('instance').reset();
                    $('#txtPlaceholderTextBox').dxTextBox('instance').reset();
                    $('#cmbTypeLetterTextBox').dxSelectBox('instance').reset();
                    $('#cmbTypeStateTextBox').dxSelectBox('instance').reset();
                    $('#swAllowSpaceTextBox').dxSwitch('instance').reset();
                    $('#cmbTypeCharTextBox').dxSelectBox('instance').reset();
                    $('#cmbSpecialsCharTextBox').dxSelectBox('instance').reset();                                     
                    break;
                case 'BUTTON':
                    $('#divButton').toggle();
                    var validationWidgetDescription = validateRequired(groupValidationButton, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationButton, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationButton, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationButton );
                    changePropertyControl('#cmbIconButton', typeControl.SelectBox, 'itemTemplate', function(icons){
                            return "<i class='" + icons.TagCode + "'>" +" " + icons.Description + "</i>"
                    });
                    $('#txtTextButton').dxTextBox('instance').reset();
                    $('#txtActionButton').dxTextBox('instance').reset();
                    $('#txtValidationGroupButton').dxTextBox('instance').reset();
                    $('#cmbTypeButton').dxSelectBox('instance').reset();
                    $('#cmbIconButton').dxSelectBox('instance').reset();
                    $('#cmbTypeStateButton').dxSelectBox('instance').reset();
                    break;
                case 'TEXTAREA':
                    $('#divTextArea').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationTextArea, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationTextArea, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationTextArea, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationTextArea );
                    $('#txtDefaultValueTextArea').dxTextBox('instance').reset();
                    $('#txtMaxLengthTextArea').dxTextBox('instance').reset();
                    $('#txtWidthTextArea').dxTextBox('instance').reset();
                    $('#txtHeightTextArea').dxTextBox('instance').reset();
                    $('#txtPlaceholderTextArea').dxTextBox('instance').reset();
                    $('#cmbTypeStateTextArea').dxSelectBox('instance').reset();
                    break;
                case 'SWITCH':
                    $('#divSwitch').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationSwitch, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationSwitch, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationSwitch, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationSwitch );
                    $('#txtOnTextSwitch').dxTextBox('instance').reset();
                    $('#txtOffTextSwitch').dxTextBox('instance').reset();
                    $('#cmbDefaultValueSwitch').dxSelectBox('instance').reset();
                    $('#cmbTypeStateSwitch').dxSelectBox('instance').reset();
                    break;
                case 'DATE':
                    $('#divDate').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationDate, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationDate, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationDate, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationDate );
                    $('#dtDefaultValueDate').dxDateBox('instance').reset();
                    $('#dtMinDate').dxDateBox('instance').reset();
                    $('#dtMaxDate').dxDateBox('instance').reset();
                    $('#txtWidthDate').dxTextBox('instance').reset();
                    $('#cmbTypeStateDate').dxSelectBox('instance').reset();
                    break;
                case 'NUMBERBOX':
                    $('#divNumberBox').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationNumberBox, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationNumberBox, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationNumberBox, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationNumberBox );
                    $('#nmbDefaultValueNumberBox').dxNumberBox('instance').reset();
                    $('#nmbMinValueNumberBox').dxNumberBox('instance').reset();
                    $('#nmbMaxValueNumberBox').dxNumberBox('instance').reset();
                    $('#txtWidthNumberBox').dxTextBox('instance').reset();
                    $('#txtMaxLengthNumberBox').dxTextBox('instance').reset();
                    break;
                case 'DEFAULTBUTTON':
                    $('#divDefaultButton').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationDefaultButton, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationDefaultButton, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationDefaultButton, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationDefaultButton );
                    $('#cmbClassDefaultButton').dxSelectBox('instance').reset();
                    $('#txtActionDefaultButton').dxTextBox('instance').reset();
                    $('#txtValidationGroupDefaultButton').dxTextBox('instance').reset();
                    $('#swAllowIconDefaultButton').dxSwitch('instance').reset();
                    $('#cmbTypeStateDefaultButton').dxSelectBox('instance').reset();
                    break;
                case 'FLOATBUTTON':
                    $('#divFloatButton').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationFloatButton, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationFloatButton, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationFloatButton, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationFloatButton );
                    changePropertyControl('#cmbIconFloatButton', typeControl.SelectBox, 'itemTemplate', function(icons){
                            return "<i class='" + icons.TagCode + "'>" +" " + icons.Description + "</i>"
                    });
                    $('#cmbClassFloatButton').dxSelectBox('instance').reset();
                    $('#txtActionFloatButton').dxTextBox('instance').reset();
                    $('#cmbIconFloatButton').dxSelectBox('instance').reset();
                    $('#cmbSizeFloatButton').dxSelectBox('instance').reset();
                    $('#cmbTypeFloatButton').dxSelectBox('instance').reset();
                    $('#txtValidationGroupFloatButton').dxTextBox('instance').reset();
                    break;
                case 'POPUP':
                    $('#divPopup').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationPopup, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationPopup, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationPopup, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationPopup );
                    $('#swVisiblePopup').dxSwitch('instance').reset();
                    $('#txtWidthPopup').dxTextBox('instance').reset();
                    $('#txtHeightPopup').dxTextBox('instance').reset();
                    $('#swShowTitlePopup').dxSwitch('instance').reset();
                    $('#txtTitlePopup').dxTextBox('instance').reset();
                    $('#swShowCloseButtonPopup').dxSwitch('instance').reset();
                    $('#swResizeEnabledPopup').dxSwitch('instance').reset();
                    break;
                case 'POPOVER':
                    $('#divPopover').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationPopover, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationPopover, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationPopover, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationPopover );
                    $('#txtTargetPopover').dxTextBox('instance').reset();
                    $('#cmbPositionPopover').dxSelectBox('instance').reset();
                    $('#txtWidthPopover').dxTextBox('instance').reset();
                    $('#swShadingPopover').dxSwitch('instance').reset();
                    $('#swShowTitlePopover').dxSwitch('instance').reset();
                    $('#txtTitlePopover').dxTextBox('instance').reset();
                    $('#swShowCloseButtonPopover').dxSwitch('instance').reset();
                    break;
                case 'SUMMARYVALIDATION':
                    $('#divSummaryValidation').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationSummary, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationSummary, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationSummary, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationSummary );
                    $('#txtValidationGroupSummary').dxTextBox('instance').reset();
                    break;
                case 'RADIOGROUP':
                    $('#divRadioGroup').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationRadio, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationRadio, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationRadio, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationRadio );
                    $('#txtDefaultValueRadio').dxTextBox('instance').reset();
                    $('#txtDataSourceRadio').dxTextBox('instance').reset();
                    $('#txtDisplayExprRadio').dxTextBox('instance').reset();
                    $('#txtValueExprRadio').dxTextBox('instance').reset();
                    $('#txtItemTemplateRadio').dxTextBox('instance').reset();
                    break;
                case 'ACCORDION':
                    $('#divAccordion').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationAccordion, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationAccordion, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationAccordion, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationAccordion );
                    $('#txtDataSourceAccordion').dxTextBox('instance').reset();
                    $('#txtTitleTemplateAccordion').dxTextBox('instance').reset();
                    $('#txtItemTemplateAccordion').dxTextBox('instance').reset();
                    $('#swMultipleAccordion').dxSwitch('instance').reset();
                    break;
                case 'ACTIONSHEET':
                    $('#divActionSheet').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationActionSheet, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationActionSheet, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationActionSheet, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationActionSheet );
                    $('#txtDataSourceActionSheet').dxTextBox('instance').reset();
                    $('#txtTitleActionSheet').dxTextBox('instance').reset();
                    $('#txtItemTemplateActionSheet').dxTextBox('instance').reset();
                    $('#swShowTitleActionSheet').dxSwitch('instance').reset();
                    break;
                case 'CHECKBOX':
                    $('#divCheckBox').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationCheckBox, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationCheckBox, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationCheckBox, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationCheckBox );
                    $('#swDefaultValueCheckBox').dxSwitch('instance').reset();
                    $('#txtTextCheckBox').dxTextBox('instance').reset();
                    $('#cmbTypeStateCheckBox').dxSelectBox('instance').reset();
                    break;
                case 'SELECTBOX':
                    $('#divComboBox').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationComboBox, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationComboBox, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationComboBox, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationComboBox );
                    $('#txtDataSourceCombo').dxTextBox('instance').reset();
                    $('#txtDisplayExprCombo').dxTextBox('instance').reset();
                    $('#txtValueExprCombo').dxTextBox('instance').reset();
                    $('#txtDefaultValueCombo').dxTextBox('instance').reset();
                    $('#cmbTypeStateCombo').dxSelectBox('instance').reset();
                    $('#txtWidthCombo').dxTextBox('instance').reset();
                    $('#txtPlaceholderCombo').dxTextBox('instance').reset();
                    $('#swSearchEnabledCombo').dxSwitch('instance').reset();
                    break;
                case 'DATAGRID':
                    $('#divDataGrid').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationDataGrid, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationDataGrid, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationDataGrid, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationDataGrid );
                    $('#txtDataSourceGrid').dxTextBox('instance').reset();
                    $('#txtColumnsGrid').dxTextBox('instance').reset();
                    $('#cmbModeSelectionGrid').dxSelectBox('instance').reset();
                    $('#swPaginationGrid').dxSwitch('instance').reset();
                    $('#swAllowFilterGrid').dxSwitch('instance').reset();
                    $('#swAllowEditingGrid').dxSwitch('instance').reset();
                    $('#cmbSummaryGrid').dxSelectBox('instance').reset();
                    $('#swIsGroupedSummaryGrid').dxSwitch('instance').reset();
                    $('#txtPageSizeGrid').dxTextBox('instance').reset();
                    $('#cmbTypeStateGrid').dxSelectBox('instance').reset();
                    break;
                case 'GALLERY':
                    $('#divGallery').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationGallery, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationGallery, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationGallery, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationGallery );
                    $('#txtDataSourceGallery').dxTextBox('instance').reset();
                    $('#swSlideShowGallery').dxSwitch('instance').reset();
                    $('#txtDelaySlideGallery').dxTextBox('instance').reset();
                    $('#swLoopGallery').dxSwitch('instance').reset();
                    $('#swShowNavButtonGallery').dxSwitch('instance').reset();
                    $('#swShowIndicatorGallery').dxSwitch('instance').reset();
                    break;
                case 'LISTBOX':
                    $('#divListBox').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationListBox, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationListBox, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationListBox, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationListBox );
                    $('#txtDataSourceListBox').dxTextBox('instance').reset();
                    $('#cmbModeSelectionListBox').dxSelectBox('instance').reset();
                    $('#swShowCheckListBox').dxSwitch('instance').reset();
                    $('#txtHeightListBox').dxTextBox('instance').reset();
                    $('#txtItemTemplateListBox').dxTextBox('instance').reset();
                    $('#swGroupedListBox').dxSwitch('instance').reset();
                    $('#txtGroupTemplateListBox').dxTextBox('instance').reset();
                    $('#cmbTypeStateListBox').dxSelectBox('instance').reset();
                    break;
                case 'MAP':
                    $('#divMap').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationMap, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationMap, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationMap, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationMap );
                    $('#txtMarkersDataMap').dxTextBox('instance').reset();
                    $('#txtWidthMap').dxTextBox('instance').reset();
                    $('#txtHeightMap').dxTextBox('instance').reset();
                    $('#nmbZoomMap').dxNumberBox('instance').reset();
                    $('#txtIconMarkerMap').dxTextBox('instance').reset();
                    break;
                case 'TAB':
                    $('#divTab').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationTab, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationTab, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationTab, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationTab );
                    $('#txtDataSourceTab').dxTextBox('instance').reset();
                    $('#nmbSelectedIndexTab').dxNumberBox('instance').reset();
                    $('#txtItemTemplateTab').dxTextBox('instance').reset();
                    break;
                case 'TOOLBAR':
                    $('#divToolBar').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationToolBar, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationToolBar, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationToolBar, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationToolBar );
                    $('#txtTitleToolBar').dxTextBox('instance').reset();
                    $('#txtOnClickToolBar').dxTextBox('instance').reset();
                    $('#txtTypeToolBar').dxTextBox('instance').reset();
                    $('#txtTextTypeToolBar').dxTextBox('instance').reset();
                    break;
                default:
                    break;
            }
        }
    }

    selectionEvtCmbTypeTextBox(data:any){
        debugger;
        this.disableWidgetsTextBox();
        if(data.selectedItem != null)
        {
            var typeTextBox = data.selectedItem.Description;        
            switch (typeTextBox){
                case 'CONTRASEÑA':
                case 'EMAIL':
                    changePropertyControl('#txtDefaultValueTextBox', typeControl.TextBox, 'disabled', false);
                    changePropertyControl('#txtMaxLengthTextBox', typeControl.TextBox, 'disabled', false);
                    changePropertyControl('#cmbTypeStateTextBox', typeControl.SelectBox, 'disabled', false);
                    changePropertyControl('#txtPlaceholderTextBox', typeControl.TextBox, 'disabled', false);
                    changePropertyControl('#txtDefaultValueTextBox', typeControl.TextBox, 'typeChar', typeCharAllowed.AllChar);
                    break;
                case 'DNI':
                case 'PASAPORTE':
                case 'RUC':
                    changePropertyControl('#txtDefaultValueTextBox', typeControl.TextBox, 'disabled', false);
                    changePropertyControl('#cmbTypeStateTextBox', typeControl.SelectBox, 'disabled', false);
                    changePropertyControl('#txtDefaultValueTextBox', typeControl.TextBox, 'onKeyPress', function (evt) {
                        restrictionTextControl(evt.element[0].id, typeCharAllowed.OnlyNumber, false, undefined);
                    });
                    break;
                case 'NUMERO TELEFONICO':
                case 'NUMERO CELULAR':
                    changePropertyControl('#txtDefaultValueTextBox', typeControl.TextBox, 'disabled', false);
                    changePropertyControl('#cmbTypeStateTextBox', typeControl.SelectBox, 'disabled', false);
                    changePropertyControl('#txtPlaceholderTextBox', typeControl.TextBox, 'disabled', false);
                    changePropertyControl('#txtDefaultValueTextBox', typeControl.TextBox, 'typeChar', typeCharAllowed.OnlyNumber);
                    break;
                case 'POR DEFECTO':
                    changePropertyControl('#txtDefaultValueTextBox', typeControl.TextBox, 'disabled', false);
                    changePropertyControl('#txtMaxLengthTextBox', typeControl.TextBox, 'disabled', false);
                    changePropertyControl('#txtPlaceholderTextBox', typeControl.TextBox, 'disabled', false);
                    changePropertyControl('#cmbTypeLetterTextBox', typeControl.SelectBox, 'disabled', false);
                    changePropertyControl('#cmbTypeCharTextBox', typeControl.SelectBox, 'disabled', false);
                    changePropertyControl('#cmbTypeStateTextBox', typeControl.SelectBox, 'disabled', false);
                    changePropertyControl('#cmbSpecialsCharTextBox', typeControl.SelectBox, 'disabled', false);
                    changePropertyControl('#swAllowSpaceTextBox', typeControl.Switch, 'disabled', false);
                    changePropertyControl('#txtDefaultValueTextBox', typeControl.TextBox, 'typeChar', typeCharAllowed.AllChar);
                default:
                    break;
            }
        }
    }

    disableWidgetsTextBox(){
        changePropertyControl('#txtDefaultValueTextBox', typeControl.TextBox, 'disabled', true);
        changePropertyControl('#txtMaxLengthTextBox', typeControl.TextBox, 'disabled', true);
        changePropertyControl('#txtPlaceholderTextBox', typeControl.TextBox, 'disabled', true);
        changePropertyControl('#cmbTypeLetterTextBox', typeControl.SelectBox, 'disabled', true);
        changePropertyControl('#cmbTypeCharTextBox', typeControl.SelectBox, 'disabled', true);
        changePropertyControl('#cmbTypeStateTextBox', typeControl.SelectBox, 'disabled', true);
        changePropertyControl('#cmbSpecialsCharTextBox', typeControl.SelectBox, 'disabled', true);
        changePropertyControl('#swAllowSpaceTextBox', typeControl.Switch, 'disabled', true);

    }       

    selectionEvtGrdViews(data: any){
        debugger;
        this.clearControls();
        var selectedView = data.selectedRowsData[0];  
        if(selectedView != null)
        {
            selectView = data.selectedRowsData[0];
            changeStateToolBar(toolBarButtons.Edit, stateToolBar.enabled);
            listWidgets._store._array = [];
            listWidgets._store._array = selectView.Widget;
            $('#grdWidgets').dxDataGrid('option', 'dataSource', listWidgets);                    
                
        }
    }

    selectionEvtGrdWidgets(data:any){
        debugger;
        var selectedWidget = data.selectedRowsData[0];        
        if(selectedWidget != null){
            selectEditWidget = data.selectedRowsData[0];
            $('#btnSaveWidget').toggle(); 
            $('#btnEndViewConfiguration').dxButton('option', 'disabled', false);
            switch(selectedWidget.TypeWidget){
                case 'TEXTBOX':                  
                    $('#divTextBox').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationTextBox, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationTextBox, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationTextBox, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationTextBox );                    
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var textBoxData = '';
                    if(!Array.isArray(selectEditWidget.TextBox)){
                        textBoxData = selectEditWidget.TextBox;
                    } else {
                        textBoxData = selectEditWidget.TextBox[0];
                    }   
                    $('#cmbTypeTextBox').dxSelectBox('option', 'value', textBoxData.TypeControl);
                    $('#txtDefaultValueTextBox').dxTextBox('option', 'value', textBoxData.DefaultValue);
                    $('#txtMaxLengthTextBox').dxTextBox('option', 'value', textBoxData.MaxLength);
                    $('#txtPlaceholderTextBox').dxTextBox('option', 'value', textBoxData.Placeholder);
                    $('#cmbTypeLetterTextBox').dxSelectBox('option', 'value', textBoxData.TypeLetterControl);
                    $('#cmbTypeStateTextBox').dxSelectBox('option', 'value', textBoxData.TypeStateField);
                    $('#swAllowSpaceTextBox').dxSwitch('option', 'value', textBoxData.AllowSpace);
                    $('#cmbTypeCharTextBox').dxSelectBox('option', 'value', textBoxData.TypeChar);
                    $('#cmbSpecialsCharTextBox').dxSelectBox('option', 'value', textBoxData.SpecialsChar);          
                    break;
                case 'BUTTON':
                    $('#divButton').toggle();
                    var validationWidgetDescription = validateRequired(groupValidationButton, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationButton, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationButton, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationButton );
                    changePropertyControl('#cmbIconButton', typeControl.SelectBox, 'itemTemplate', function(icons){
                            return "<i class='" + icons.TagCode + "'>" +" " + icons.Description + "</i>"
                    });
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var buttonData = '';
                    if(!Array.isArray(selectEditWidget.Button)){
                        buttonData = selectEditWidget.Button;
                    } else {
                        buttonData = selectEditWidget.Button[0];
                    }   
                    $('#txtTextButton').dxTextBox('option', 'value', buttonData.Text);
                    $('#txtActionButton').dxTextBox('option', 'value', buttonData.Action);
                    $('#txtValidationGroupButton').dxTextBox('option', 'value', buttonData.ValidationGroup);
                    $('#cmbTypeButton').dxSelectBox('option', 'value', buttonData.Type);
                    $('#cmbIconButton').dxSelectBox('option', 'value', buttonData.Icon);
                    $('#cmbTypeStateButton').dxSelectBox('option', 'value', buttonData.TypeState);
                    break;
                case 'TEXTAREA':
                    $('#divTextArea').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationTextArea, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationTextArea, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationTextArea, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationTextArea );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var textAreaData = '';
                    if(!Array.isArray(selectEditWidget.TextArea)){
                        textAreaData = selectEditWidget.TextArea;
                    } else {
                        textAreaData = selectEditWidget.TextArea[0];
                    }  
                    $('#txtDefaultValueTextArea').dxTextBox('option', 'value', textAreaData.DefaultValue);
                    $('#txtMaxLengthTextArea').dxTextBox('option', 'value', textAreaData.MaxLength);
                    $('#txtWidthTextArea').dxTextBox('option', 'value', textAreaData.Width);
                    $('#txtHeightTextArea').dxTextBox('option', 'value', textAreaData.Height);
                    $('#txtPlaceholderTextArea').dxTextBox('option', 'value', textAreaData.Placeholder);
                    $('#cmbTypeStateTextArea').dxSelectBox('option', 'value', textAreaData.TypeStateField);
                    break;
                case 'SWITCH':
                    $('#divSwitch').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationSwitch, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationSwitch, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationSwitch, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationSwitch );   
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var switchData = '';
                    if(!Array.isArray(selectEditWidget.Switch)){
                        switchData = selectEditWidget.Switch;
                    } else {
                        switchData = selectEditWidget.Switch[0];
                    }  
                    $('#txtOnTextSwitch').dxTextBox('option', 'value', switchData.OnText);
                    $('#txtOffTextSwitch').dxTextBox('option', 'value', switchData.OffText);
                    $('#cmbDefaultValueSwitch').dxSelectBox('option', 'value', switchData.DefaultValue);
                    $('#cmbTypeStateSwitch').dxSelectBox('option', 'value', switchData.TypeStateField);
                    break;
                case 'DATE':
                    $('#divDate').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationDate, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationDate, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationDate, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationDate );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var dateData = '';
                    if(!Array.isArray(selectEditWidget.Date)){
                        dateData = selectEditWidget.Date;
                    } else {
                        dateData = selectEditWidget.Date[0];
                    }
                    $('#dtDefaultValueDate').dxDateBox('option', 'value', dateData.DefaultValue);
                    $('#dtMinDate').dxDateBox('option', 'value', dateData.MinDate);
                    $('#dtMaxDate').dxDateBox('option', 'value', dateData.MaxDate);
                    $('#txtWidthDate').dxTextBox('option', 'value', dateData.Width);
                    $('#cmbTypeStateDate').dxSelectBox('option', 'value', dateData.TypeStateField);
                    break;
                case 'NUMBERBOX':
                    $('#divNumberBox').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationNumberBox, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationNumberBox, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationNumberBox, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationNumberBox );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var numberBoxData = '';
                    if(!Array.isArray(selectEditWidget.NumberBox)){
                        numberBoxData = selectEditWidget.NumberBox;
                    } else {
                        numberBoxData = selectEditWidget.NumberBox[0];
                    }
                    $('#nmbDefaultValueNumberBox').dxNumberBox('option', 'value', numberBoxData.DefaultValue);
                    $('#nmbMinValueNumberBox').dxNumberBox('option', 'value', numberBoxData.MinValue);
                    $('#nmbMaxValueNumberBox').dxNumberBox('option', 'value', numberBoxData.MaxValue);
                    $('#txtWidthNumberBox').dxTextBox('option', 'value', numberBoxData.Width);
                    $('#txtMaxLengthNumberBox').dxTextBox('option', 'value', numberBoxData.MaxLength);
                    break;
                case 'DEFAULTBUTTON':
                    $('#divDefaultButton').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationDefaultButton, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationDefaultButton, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationDefaultButton, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationDefaultButton );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var defaultButtonData = '';
                    if(!Array.isArray(selectEditWidget.DefaultButton)){
                        defaultButtonData = selectEditWidget.DefaultButton;
                    } else {
                        defaultButtonData = selectEditWidget.DefaultButton[0];
                    }
                    $('#cmbClassDefaultButton').dxSelectBox('option', 'value', defaultButtonData.ClassButton);
                    $('#txtActionDefaultButton').dxTextBox('option', 'value', defaultButtonData.Action);
                    $('#txtValidationGroupDefaultButton').dxTextBox('option', 'value', defaultButtonData.ValidationGroup);
                    $('#swAllowIconDefaultButton').dxSwitch('option', 'value', defaultButtonData.AllowIcon);
                    $('#cmbTypeStateDefaultButton').dxSelectBox('option', 'value', defaultButtonData.TypeStateField);
                    break;
                case 'FLOATBUTTON':
                    $('#divFloatButton').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationFloatButton, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationFloatButton, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationFloatButton, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationFloatButton );
                    changePropertyControl('#cmbIconFloatButton', typeControl.SelectBox, 'itemTemplate', function(icons){
                            return "<i class='" + icons.TagCode + "'>" +" " + icons.Description + "</i>"
                    });
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var floatButtonData = '';
                    if(!Array.isArray(selectEditWidget.FloatButton)){
                        floatButtonData = selectEditWidget.FloatButton;
                    } else {
                        floatButtonData = selectEditWidget.FloatButton[0];
                    }
                    $('#cmbClassFloatButton').dxSelectBox('option', 'value', floatButtonData.ClassButton);
                    $('#txtActionFloatButton').dxTextBox('option', 'value', floatButtonData.Action);
                    $('#cmbIconFloatButton').dxSelectBox('option', 'value', floatButtonData.Icon);
                    $('#cmbSizeFloatButton').dxSelectBox('option', 'value', floatButtonData.SizeFloatButton);
                    $('#cmbTypeFloatButton').dxSelectBox('option', 'value', floatButtonData.TypeFloatButton);
                    $('#txtValidationGroupFloatButton').dxTextBox('option', 'value', floatButtonData.GroupValidation);
                    break;
                case 'POPUP':
                    $('#divPopup').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationPopup, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationPopup, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationPopup, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationPopup );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var popupData = '';
                    if(!Array.isArray(selectEditWidget.Popup)){
                        popupData = selectEditWidget.Popup;
                    } else {
                        popupData = selectEditWidget.Popup[0];
                    }
                    $('#swVisiblePopup').dxSwitch('option', 'value', popupData.Visible);
                    $('#txtWidthPopup').dxTextBox('option', 'value', popupData.Width);
                    $('#txtHeightPopup').dxTextBox('option', 'value', popupData.Height);
                    $('#swShowTitlePopup').dxSwitch('option', 'value', popupData.ShowTitle);
                    $('#txtTitlePopup').dxTextBox('option', 'value', popupData.Title);
                    $('#swShowCloseButtonPopup').dxSwitch('option', 'value', popupData.ShowCloseButton);
                    $('#swResizeEnabledPopup').dxSwitch('option', 'value', popupData.ResizeEnabled);
                    break;
                case 'POPOVER':
                    $('#divPopover').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationPopover, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationPopover, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationPopover, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationPopover );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var popoverData = '';
                    if(!Array.isArray(selectEditWidget.Popover)){
                        popoverData = selectEditWidget.Popover;
                    } else {
                        popoverData = selectEditWidget.Popover[0];
                    }
                    $('#txtTargetPopover').dxTextBox('option', 'value', popoverData.Target);
                    $('#cmbPositionPopover').dxSelectBox('option', 'value', popoverData.Position);
                    $('#txtWidthPopover').dxTextBox('option', 'value', popoverData.Width);
                    $('#swShadingPopover').dxSwitch('option', 'value', popoverData.Shading);
                    $('#swShowTitlePopover').dxSwitch('option', 'value', popoverData.ShowTitle);
                    $('#txtTitlePopover').dxTextBox('option', 'value', popoverData.Title);
                    $('#swShowCloseButtonPopover').dxSwitch('option', 'value', popoverData.ShowCloseButton);
                    break;
                case 'SUMMARYVALIDATION':
                    $('#divSummaryValidation').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationSummary, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationSummary, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationSummary, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationSummary );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);                    
                    var summaryData = '';
                    if(!Array.isArray(selectEditWidget.SummaryValidation)){
                        summaryData = selectEditWidget.SummaryValidation;
                    } else {
                        summaryData = selectEditWidget.SummaryValidation[0];
                    }
                    $('#txtValidationGroupSummary').dxTextBox('option', 'value', summaryData.GroupValidation);
                    break;
                case 'RADIOGROUP':
                    $('#divRadioGroup').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationRadio, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationRadio, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationRadio, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationRadio );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);   
                    var radioGroupData = '';
                    if(!Array.isArray(selectEditWidget.RadioGroup)){
                        radioGroupData = selectEditWidget.RadioGroup;
                    } else {
                        radioGroupData = selectEditWidget.RadioGroup[0];
                    }
                    $('#txtDefaultValueRadio').dxTextBox('option', 'value', radioGroupData.DefaultValue);
                    $('#txtDataSourceRadio').dxTextBox('option', 'value', radioGroupData.DataSource);
                    $('#txtDisplayExprRadio').dxTextBox('option', 'value', radioGroupData.DisplayExpr);
                    $('#txtValueExprRadio').dxTextBox('option', 'value', radioGroupData.ValueExpr);
                    $('#txtItemTemplateRadio').dxTextBox('option', 'value', radioGroupData.ItemTemplate);
                    break;
                case 'ACCORDION':
                    $('#divAccordion').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationAccordion, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationAccordion, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationAccordion, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationAccordion );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);   
                    var accordionData = '';
                    if(!Array.isArray(selectEditWidget.Accordion)){
                        accordionData = selectEditWidget.Accordion;
                    } else {
                        accordionData = selectEditWidget.Accordion[0];
                    }
                    $('#txtDataSourceAccordion').dxTextBox('option', 'value', accordionData.DataSource);
                    $('#txtTitleTemplateAccordion').dxTextBox('option', 'value', accordionData.TitleTemplate);
                    $('#txtItemTemplateAccordion').dxTextBox('option', 'value', accordionData.ItemTemplate);
                    $('#swMultipleAccordion').dxSwitch('option', 'value', accordionData.Multiple);
                    break;
                case 'ACTIONSHEET':
                    $('#divActionSheet').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationActionSheet, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationActionSheet, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationActionSheet, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationActionSheet );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position); 
                    var actionSheetData = '';
                    if(!Array.isArray(selectEditWidget.ActionSheet)){
                        actionSheetData = selectEditWidget.ActionSheet;
                    } else {
                        actionSheetData = selectEditWidget.ActionSheet[0];
                    }
                    $('#txtDataSourceActionSheet').dxTextBox('option', 'value', actionSheetData.DataSource);
                    $('#txtTitleActionSheet').dxTextBox('option', 'value', actionSheetData.Title);
                    $('#txtItemTemplateActionSheet').dxTextBox('option', 'value', actionSheetData.ItemTemplate);
                    $('#swShowTitleActionSheet').dxSwitch('option', 'value', actionSheetData.ShowTitle);
                    break;
                case 'CHECKBOX':
                    $('#divCheckBox').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationCheckBox, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationCheckBox, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationCheckBox, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationCheckBox );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var checkBoxData = '';
                    if(!Array.isArray(selectEditWidget.CheckBox)){
                        checkBoxData = selectEditWidget.CheckBox;
                    } else {
                        checkBoxData = selectEditWidget.CheckBox[0];
                    }
                    $('#swDefaultValueCheckBox').dxSwitch('option', 'value', checkBoxData.DefaultValue);
                    $('#txtTextCheckBox').dxTextBox('option', 'value', checkBoxData.Text);
                    $('#cmbTypeStateCheckBox').dxSelectBox('option', 'value', checkBoxData.TypeStateField);
                    break;
                case 'SELECTBOX':
                    $('#divComboBox').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationComboBox, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationComboBox, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationComboBox, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationComboBox );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var comboBoxData = '';
                    if(!Array.isArray(selectEditWidget.ComboBox)){
                        comboBoxData = selectEditWidget.ComboBox;
                    } else {
                        comboBoxData = selectEditWidget.ComboBox[0];
                    }
                    $('#txtDataSourceCombo').dxTextBox('option', 'value', comboBoxData.DataSource);
                    $('#txtDisplayExprCombo').dxTextBox('option', 'value', comboBoxData.DisplayMember);
                    $('#txtValueExprCombo').dxTextBox('option', 'value', comboBoxData.ValueMember);
                    $('#txtDefaultValueCombo').dxTextBox('option', 'value', comboBoxData.DefaultValue);
                    $('#cmbTypeStateCombo').dxSelectBox('option', 'value', comboBoxData.TypeStateField);
                    $('#txtWidthCombo').dxTextBox('option', 'value', comboBoxData.Width);
                    $('#txtPlaceholderCombo').dxTextBox('option', 'value', comboBoxData.Placeholder);
                    $('#swSearchEnabledCombo').dxSwitch('option', 'value', comboBoxData.SearchEnabled);
                    break;
                case 'DATAGRID':
                    $('#divDataGrid').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationDataGrid, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationDataGrid, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationDataGrid, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationDataGrid );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var dataGridData = '';
                    if(!Array.isArray(selectEditWidget.DataGrid)){
                        dataGridData = selectEditWidget.DataGrid;
                    } else {
                        dataGridData = selectEditWidget.DataGrid[0];
                    }
                    $('#txtDataSourceGrid').dxTextBox('option', 'value', dataGridData.DataSource);
                    $('#txtColumnsGrid').dxTextBox('option', 'value', dataGridData.Columns);
                    $('#cmbModeSelectionGrid').dxSelectBox('option', 'value', dataGridData.ModeSelectionGrid);
                    $('#swPaginationGrid').dxSwitch('option', 'value', dataGridData.Pagination);
                    $('#swAllowFilterGrid').dxSwitch('option', 'value', dataGridData.AllowFilter);
                    $('#swAllowEditingGrid').dxSwitch('option', 'value', dataGridData.AllowEditing);
                    $('#cmbSummaryGrid').dxSelectBox('option', 'value', dataGridData.Summary);
                    $('#swIsGroupedSummaryGrid').dxSwitch('option', 'value', dataGridData.IsGroupedSummary);
                    $('#txtPageSizeGrid').dxTextBox('option', 'value', dataGridData.PageSize);
                    $('#cmbTypeStateGrid').dxSelectBox('option', 'value', dataGridData.TypeStateField);
                    break;
                case 'GALLERY':
                    $('#divGallery').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationGallery, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationGallery, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationGallery, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationGallery );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var galleryData = '';
                    if(!Array.isArray(selectEditWidget.Gallery)){
                        galleryData = selectEditWidget.Gallery;
                    } else {
                        galleryData = selectEditWidget.Gallery[0];
                    }
                    $('#txtDataSourceGallery').dxTextBox('option', 'value', galleryData.DataSource);
                    $('#swSlideShowGallery').dxSwitch('option', 'value', galleryData.SlideShow);
                    $('#txtDelaySlideGallery').dxTextBox('option', 'value', galleryData.DelaySlide);
                    $('#swLoopGallery').dxSwitch('option', 'value', galleryData.Loop);
                    $('#swShowNavButtonGallery').dxSwitch('option', 'value', galleryData.ShowButtons);
                    $('#swShowIndicatorGallery').dxSwitch('option', 'value', galleryData.showIndicator);
                    break;
                case 'LISTBOX':
                    $('#divListBox').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationListBox, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationListBox, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationListBox, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationListBox );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var listBoxData = '';
                    if(!Array.isArray(selectEditWidget.ListBox)){
                        listBoxData = selectEditWidget.ListBox;
                    } else {
                        listBoxData = selectEditWidget.ListBox[0];
                    }
                    $('#txtDataSourceListBox').dxTextBox('option', 'value', listBoxData.DataSource);
                    $('#cmbModeSelectionListBox').dxSelectBox('option', 'value', listBoxData.SelectionMode);
                    $('#swShowCheckListBox').dxSwitch('option', 'value', listBoxData.ShowCheck);
                    $('#txtHeightListBox').dxTextBox('option', 'value', listBoxData.Height);
                    $('#txtItemTemplateListBox').dxTextBox('option', 'value', listBoxData.ItemTemplate);
                    $('#swGroupedListBox').dxSwitch('option', 'value', listBoxData.Grouped);
                    $('#txtGroupTemplateListBox').dxTextBox('option', 'value', listBoxData.GroupTemplate);
                    $('#cmbTypeStateListBox').dxSelectBox('option', 'value', listBoxData.TypeStateField);
                    break;
                case 'MAP':
                    $('#divMap').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationMap, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationMap, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationMap, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationMap );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var mapData = '';
                    if(!Array.isArray(selectEditWidget.Map)){
                        mapData = selectEditWidget.Map;
                    } else {
                        mapData = selectEditWidget.Map[0];
                    }
                    $('#txtMarkersDataMap').dxTextBox('option', 'value', mapData.MarkersData);
                    $('#txtWidthMap').dxTextBox('option', 'value', mapData.Width);
                    $('#txtHeightMap').dxTextBox('option', 'value', mapData.Height);
                    $('#nmbZoomMap').dxNumberBox('option', 'value', mapData.Zoom);
                    $('#txtIconMarkerMap').dxTextBox('option', 'value', mapData.IconMarker);
                    break;
                case 'TAB':
                    $('#divTab').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationTab, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationTab, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationTab, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationTab );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var tabData = '';
                    if(!Array.isArray(selectEditWidget.Tab)){
                        tabData = selectEditWidget.Tab;
                    } else {
                        tabData = selectEditWidget.Tab[0];
                    }
                    $('#txtDataSourceTab').dxTextBox('option', 'value', tabData.DataSource);
                    $('#nmbSelectedIndexTab').dxNumberBox('option', 'value', tabData.SelectedIndex);
                    $('#txtItemTemplateTab').dxTextBox('option', 'value', tabData.ItemTemplate);
                    break;
                case 'TOOLBAR':
                    $('#divToolBar').toggle();  
                    var validationWidgetDescription = validateRequired(groupValidationToolBar, CORE_TAG('WidgetDescription'));
                    $("#txtWidgetDescription").dxValidator(validationWidgetDescription); 
                    var validationWidgetIdentifier = validateRequired(groupValidationToolBar, CORE_TAG('WidgetIdentifier'));
                    $("#txtWidgetIdentifier").dxValidator(validationWidgetIdentifier); 
                    var validationWidgetPosition = validateRequired(groupValidationToolBar, CORE_TAG('WidgetPosition'));
                    $("#nmbWidgetPosition").dxValidator(validationWidgetPosition);
                    changePropertyControl('#btnSaveWidget', typeControl.Button, 'validationGroup', groupValidationToolBar );
                    $('#cmbWidgetType').dxSelectBox('option', 'value', selectEditWidget.TypeWidget);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'value', selectEditWidget.Identifier);
                    $('#txtWidgetIdentifier').dxTextBox('option', 'disabled', true);
                    $('#txtWidgetDescription').dxTextBox('option', 'value', selectEditWidget.DescriptionWidget);
                    $('#nmbWidgetPosition').dxNumberBox('option', 'value', selectEditWidget.Position);
                    var toolBarData = '';
                    if(!Array.isArray(selectEditWidget.ToolBar)){
                        toolBarData = selectEditWidget.ToolBar;
                    } else {
                        toolBarData = selectEditWidget.ToolBar[0];
                    }
                    $('#txtTitleToolBar').dxTextBox('option', 'value', toolBarData.Title);
                    $('#txtOnClickToolBar').dxTextBox('option', 'value', toolBarData.Click);
                    $('#txtTypeToolBar').dxTextBox('option', 'value', toolBarData.Type);
                    $('#txtTextTypeToolBar').dxTextBox('option', 'value', toolBarData.TextType);
                default: 
                    break;
            }
        }
    }

    /*          -------- METHODS ------------      */

    initializeToolBar() {
        setupButtonToolBar(toolBarButtons.New, this.newView);
        setupButtonToolBar(toolBarButtons.Edit, this.editView, stateToolBar.disabled);
    }     

    hideDivs(){
        $('#divCreatedWidgets').hide();
        $('#btnSaveWidget').hide();
        $('#divTextBox').hide();
        $('#divButton').hide();
        $('#divTextArea').hide(); 
        $('#divSwitch').hide();  
        $('#divDate').hide();  
        $('#divNumberBox').hide();  
        $('#divDefaultButton').hide(); 
        $('#divFloatButton').hide(); 
        $('#divPopup').hide();  
        $('#divPopover').hide();  
        $('#divSummaryValidation').hide();  
        $('#divRadioGroup').hide();  
        $('#divAccordion').hide();  
        $('#divActionSheet').hide();
        $('#divCheckBox').hide();  
        $('#divComboBox').hide();  
        $('#divDataGrid').hide(); 
        $('#divGallery').hide();
        $('#divListBox').hide();
        $('#divMap').hide();
        $('#divTab').hide();
        $('#divToolBar').hide();
    }

    newView(){
        this.setState({isEdit: false});
        $('#popupViewData').dxPopup('option', 'visible', true); 
        $('#txtViewName').dxTextBox('instance').reset();
        $('#txtViewDescription').dxTextBox('instance').reset();
        $('#txtPath').dxTextBox('instance').reset();        
        changePropertyControl('#swEsActivo', typeControl.Switch, 'value', true);
        changePropertyControl('#swEsActivo', typeControl.Switch, 'disabled', true);
        changePropertyControl('#txtPath', typeControl.TextBox, 'disabled', false);        
        objNewView.Widget = [];
        changePropertyControl('#grdWidgets', typeControl.DataGrid, 'dataSource', objNewView.Widget);
    }    

    editView(currentView:any){
        debugger;        
        if (!currentView)
            currentView = selectView;
        this.setState({ isEdit: true});        
        $('#popupViewData').dxPopup('option', 'visible', true);        
        changePropertyControl('#txtViewName', typeControl.TextBox, 'value', currentView.Name);
        changePropertyControl('#txtViewDescription', typeControl.TextBox, 'value', currentView.Description);
        changePropertyControl('#txtPath', typeControl.TextBox, 'value', currentView.Path);
        changePropertyControl('#swEsActivo', typeControl.Switch, 'value', currentView.IsActive);
        changePropertyControl('#swEsActivo', typeControl.Switch, 'disabled', false);
        changePropertyControl('#txtPath', typeControl.TextBox, 'disabled', true);
    }

    addEditWidgets(params:any){
        debugger;
        try{
            var result = params.validationGroup.validate();
            if (result.isValid) {                
                if(this.state.isEdit){
                    objNewView.IdView= selectView.IdView;
                    objNewView.Name=  $("#txtViewName").dxTextBox('option', 'value');
                    objNewView.Description= $("#txtViewDescription").dxTextBox('option', 'value');
                    objNewView.Path= $("#txtPath").dxTextBox('option', 'value');
                    objNewView.Logo= null;
                    objNewView.IsActive= true;                        
                    $('#popupAddWidgets').dxPopup('option', 'visible', true);
                    $('#popupAddWidgets').dxPopup('option', 'title', (CORE_TAG('ManagementWidgets')+ ' - '+ CORE_TAG('View') + ' ' + $("#txtViewName").dxTextBox('option', 'value')).toUpperCase());             
                    this.hideDivs();
                    this.resetControls();
                    $('#cmbWidgetType').dxSelectBox('option', 'disabled', true);
                    $('#btnEndViewConfiguration').dxButton('option', 'disabled', true);
                    changePropertyControl('#grdWidgets', typeControl.DataGrid, 'onSelectionChanged', this.selectionEvtGrdWidgets);                      
                }
                else{
                    var lastViews = listViews._store._array;
                    var validateView = false;
                    for (var i = 0; i < lastViews.length; i++) {
                        if(lastViews[i].Path == $("#txtPath").dxTextBox('option', 'value')){
                            validateView = true;
                            break;
                        } 
                    }
                    if(!validateView){
                        objNewView.Name=  $("#txtViewName").dxTextBox('option', 'value');
                        objNewView.Description= $("#txtViewDescription").dxTextBox('option', 'value');
                        objNewView.Path= $("#txtPath").dxTextBox('option', 'value');
                        objNewView.Logo= null;
                        objNewView.IsActive= true;                        
                        $('#popupAddWidgets').dxPopup('option', 'visible', true);
                        $('#popupAddWidgets').dxPopup('option', 'title', (CORE_TAG('ManagementWidgets')+ ' - '+ CORE_TAG('View') + ' ' + $("#txtViewName").dxTextBox('option', 'value')).toUpperCase());             
                        this.hideDivs();
                        this.resetControls();
                        $('#cmbWidgetType').dxSelectBox('option', 'disabled', false);
                        $('#btnEndViewConfiguration').dxButton('option', 'disabled', false);
                        changePropertyControl('#grdWidgets', typeControl.DataGrid, 'onSelectionChanged', undefined);  
                    }  
                    else{
                        showWarningMessage(CORE_TAG('ManagementViews'), CORE_VALIDATION('SameViewPath'), function(){
                            $('#txtPath').dxTextBox('instance').focus();
                        });               
                    }                    
                }
            } else {
                showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE('ErrorData'));
            }            
        } catch (e) {
            showErrorMessage(CORE_TAG('ErrorMessage'), e);
        }        
    }

    saveNewWidget(params: any){
        debugger;
        try
        {
            var result = params.validationGroup.validate();
            if (result.isValid) {
                if(!this.state.isEdit)
                {
                    var oldWidgets = objNewView.Widget;
                    var validateIdentifier = false;
                    for (var i = 0; i < oldWidgets.length; i++) {
                        if(oldWidgets[i].Identifier == $("#txtWidgetIdentifier").dxTextBox('option', 'value')){
                            validateIdentifier = true;
                            break;
                        } 
                    }
                    if(!validateIdentifier){
                        this.mapWidgets();
                        changePropertyControl('#grdWidgets', typeControl.DataGrid, 'dataSource', objNewView.Widget);
                        this.resetControls();
                        this.hideDivs();
                    }  
                    else{
                        showWarningMessage(CORE_TAG('ManagementWidgets'), CORE_VALIDATION('SameWidgetIdentifier'), function(){
                            $('#txtWidgetIdentifier').dxTextBox('instance').focus();
                        });               
                    }            
                }
                else{
                    this.mapWidgets();
                    changePropertyControl('#grdWidgets', typeControl.DataGrid, 'dataSource', listWidgets);  
                    $('#grdWidgets').dxDataGrid('instance').deselectAll();              
                    this.resetControls();
                    this.hideDivs();
                }
                                                    
            }
            else {
                showWarningMessage(CORE_TAG('ErrorData'), CORE_MESSAGE('ErrorData'));
            }            
        }
        catch(e){
            showErrorMessage(CORE_TAG('ErrorMessage'), e);
        }
    }

    mapWidgets(){
        debugger;
        switch(selectWidget.Description){
            case 'TEXTBOX':
                var textBox = 
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    TextBox: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        TypeControl: $("#cmbTypeTextBox").dxSelectBox('option', 'value'), 
                        DefaultValue: $("#txtDefaultValueTextBox").dxTextBox('option', 'value'), 
                        MaxLength: $("#txtMaxLengthTextBox").dxTextBox('option', 'value'),
                        Placeholder: $("#txtPlaceholderTextBox").dxTextBox('option', 'value'),
                        TypeLetterControl: $("#cmbTypeLetterTextBox").dxSelectBox('option', 'value'),
                        TypeStateField: $("#cmbTypeStateTextBox").dxSelectBox('option', 'value'),
                        AllowSpace: $("#swAllowSpaceTextBox").dxSwitch('option', 'value'),
                        TypeChar: $("#cmbTypeCharTextBox").dxSelectBox('option', 'value'),
                        SpecialsChar: $("#cmbSpecialsCharTextBox").dxSelectBox('option', 'value')
                    }
                };                                    
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, textBox);                
                objNewView.Widget.push(textBox); 
                
                break;
            case 'BUTTON':
               var button =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    Button: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        Text: $("#txtTextButton").dxTextBox('option', 'value'),
                        Action: $("#txtActionButton").dxTextBox('option', 'value'),
                        ValidationGroup: $("#txtValidationGroupButton").dxTextBox('option', 'value'),
                        Type: $("#cmbTypeButton").dxSelectBox('option', 'value'),
                        Icon: $("#cmbIconButton").dxSelectBox('option', 'value'),
                        TypeStateField: $("#cmbTypeStateButton").dxSelectBox('option', 'value')
                    }
                };
                if(this.state.isEdit){
                    listWidgets.store().update(selectEditWidget.Identifier, button);
                }
                objNewView.Widget.push(button);
                break;
            case 'TEXTAREA':
                var textArea =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    TextArea: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DefaultValue: $("#txtDefaultValueTextArea").dxTextBox('option', 'value'),
                        MaxLength: $("#txtMaxLengthTextArea").dxTextBox('option', 'value'),
                        Width: $("#txtWidthTextArea").dxTextBox('option', 'value'),
                        Height: $("#txtHeightTextArea").dxTextBox('option', 'value'),
                        Placeholder: $("#txtPlaceholderTextArea").dxTextBox('option', 'value'),                            
                        TypeStateField: $("#cmbTypeStateTextArea").dxSelectBox('option', 'value')
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, textArea);           
                objNewView.Widget.push(textArea);                
                break;
            case 'SWITCH':
                var newSwitch =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    Switch: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        OnText: $("#txtOnTextSwitch").dxTextBox('option', 'value'),
                        OffText: $("#txtOffTextSwitch").dxTextBox('option', 'value'),
                        DefaultValue: $("#cmbDefaultValueSwitch").dxSelectBox('option', 'value'),                            
                        TypeStateField: $("#cmbTypeStateSwitch").dxSelectBox('option', 'value')
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, newSwitch);      
                objNewView.Widget.push(newSwitch); 
                break;
            case 'DATE':
                var date =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    Date: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DefaultValue: new Date($("#dtDefaultValueDate").dxDateBox('option', 'value')),
                        MinDate: new Date($("#dtMinDate").dxDateBox('option', 'value')),
                        MaxDate: new Date($("#dtMaxDate").dxDateBox('option', 'value')),   
                        Width: $("#txtWidthDate").dxTextBox('option', 'value'),                            
                        TypeStateField: $("#cmbTypeStateDate").dxSelectBox('option', 'value')
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, date);
                objNewView.Widget.push(date); 
                break;
            case 'NUMBERBOX':
                var numberBox =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    NumberBox: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DefaultValue: $("#nmbDefaultValueNumberBox").dxNumberBox('option', 'value'),
                        MinValue: $("#nmbMinValueNumberBox").dxNumberBox('option', 'value'),
                        MaxValue: $("#nmbMaxValueNumberBox").dxNumberBox('option', 'value'),   
                        Width: $("#txtWidthNumberBox").dxTextBox('option', 'value'),                            
                        MaxLength: $("#txtMaxLengthNumberBox").dxTextBox('option', 'value'),
                        Mode: undefined
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, numberBox);
                objNewView.Widget.push(numberBox); 
                break;
            case 'DEFAULTBUTTON':
                var defaultButton =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    DefaultButton: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        ClassButton: $("#cmbClassDefaultButton").dxSelectBox('option', 'value'),
                        Action: $("#txtActionDefaultButton").dxTextBox('option', 'value'),
                        ValidationGroup: $("#txtValidationGroupDefaultButton").dxTextBox('option', 'value'),   
                        AllowIcon: $("#swAllowIconDefaultButton").dxSwitch('option', 'value'),                            
                        TypeStateField: $("#cmbTypeStateDefaultButton").dxSelectBox('option', 'value')
                    }
                }
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, defaultButton);     
                objNewView.Widget.push(defaultButton); 
                break;
            case 'FLOATBUTTON':
                var floatButton =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    FloatButton: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        ClassButton: $("#cmbClassFloatButton").dxSelectBox('option', 'value'),
                        Action: $("#txtActionFloatButton").dxTextBox('option', 'value'),
                        Icon: $("#cmbIconFloatButton").dxSelectBox('option', 'value'),
                        SizeFloatButton: $("#cmbSizeFloatButton").dxSelectBox('option', 'value'),
                        TypeFloatButton: $("#cmbTypeFloatButton").dxSelectBox('option', 'value'),
                        AditionalClass: undefined,
                        GroupValidation: $("#txtValidationGroupFloatButton").dxTextBox('option', 'value')
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, floatButton);                
                objNewView.Widget.push(floatButton);                 
                break;
            case 'POPUP':
                var popup =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    Popup: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        Visible: $("#swVisiblePopup").dxSwitch('option', 'value'),
                        Width: $("#txtWidthPopup").dxTextBox('option', 'value'),
                        Height: $("#txtHeightPopup").dxTextBox('option', 'value'),
                        ShowTitle: $("#swShowTitlePopup").dxSwitch('option', 'value'),
                        Title: $("#txtTitlePopup").dxTextBox('option', 'value'),
                        ShowCloseButton: $("#swShowCloseButtonPopup").dxSwitch('option', 'value'),
                        ResizeEnabled: $("#swResizeEnabledPopup").dxSwitch('option', 'value')
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, popup);
                objNewView.Widget.push(popup);                       
                break;
            case 'POPOVER':
                var popover =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    Popover: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        Target: $("#txtTargetPopover").dxTextBox('option', 'value'),
                        Position: $("#cmbPositionPopover").dxSelectBox('option', 'value'),
                        Width: $("#txtWidthPopover").dxTextBox('option', 'value'),
                        Shading: $("#swShadingPopover").dxSwitch('option', 'value'),
                        ShowTitle: $("#swShowTitlePopover").dxSwitch('option', 'value'),
                        Title: $("#txtTitlePopover").dxTextBox('option', 'value'),
                        ShowCloseButton: $("#swShowCloseButtonPopover").dxSwitch('option', 'value')
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, popover);
                objNewView.Widget.push(popover);    
                break;
            case 'SUMMARYVALIDATION':
                var summaryValidation =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    SummaryValidation: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        GroupValidation: $("#txtValidationGroupSummary").dxTextBox('option', 'value'),
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, summaryValidation);
                objNewView.Widget.push(summaryValidation);
                break;
            case 'RADIOGROUP':
                var radioGroup =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    RadioGroup: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DefaultValue: $("#txtDefaultValueRadio").dxTextBox('option', 'value'),
                        DataSource: $("#txtDataSourceRadio").dxTextBox('option', 'value'),
                        DisplayExpr: $("#txtDisplayExprRadio").dxTextBox('option', 'value'),
                        ValueExpr: $("#txtValueExprRadio").dxTextBox('option', 'value'),
                        ItemTemplate: $("#txtItemTemplateRadio").dxTextBox('option', 'value')
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, radioGroup);
                objNewView.Widget.push(radioGroup);
                break;
            case 'ACCORDION':
                var accordion =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    Accordion: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DataSource: $("#txtDataSourceAccordion").dxTextBox('option', 'value'),
                        TitleTemplate: $("#txtTitleTemplateAccordion").dxTextBox('option', 'value'),
                        ItemTemplate: $("#txtItemTemplateAccordion").dxTextBox('option', 'value'),
                        Multiple: $("#swMultipleAccordion").dxSwitch('option', 'value')
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, accordion);
                objNewView.Widget.push(accordion);
                break;
            case 'ACTIONSHEET':
                var actionSheet = 
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    ActionSheet: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DataSource: $("#txtDataSourceActionSheet").dxTextBox('option', 'value'),
                        Title: $("#txtTitleActionSheet").dxTextBox('option', 'value'),
                        ItemTemplate: $("#txtItemTemplateActionSheet").dxTextBox('option', 'value'),
                        ShowTitle: $("#swShowTitleActionSheet").dxSwitch('option', 'value')
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, actionSheet);
                objNewView.Widget.push(actionSheet);
                break;
            case 'CHECKBOX':
                var checkBox =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    CheckBox: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DefaultValue: $("#swDefaultValueCheckBox").dxSwitch('option', 'value'),
                        Text: $("#txtTextCheckBox").dxTextBox('option', 'value'),
                        TypeStateField: $("#cmbTypeStateCheckBox").dxSelectBox('option', 'value')
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, checkBox);
                objNewView.Widget.push(checkBox);
                break;
            case 'SELECTBOX':
                var selectBox =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    ComboBox: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DataSource: $("#txtDataSourceCombo").dxTextBox('option', 'value'),
                        DisplayMember: $("#txtDisplayExprCombo").dxTextBox('option', 'value'),
                        ValueMember: $("#txtValueExprCombo").dxTextBox('option', 'value'),
                        DefaultValue: $("#txtDefaultValueCombo").dxTextBox('option', 'value'),
                        SearchEnabled: $("#swSearchEnabledCombo").dxSwitch('option', 'value'),
                        TypeStateField: $("#cmbTypeStateCombo").dxSelectBox('option', 'value'),
                        Width: $("#txtWidthCombo").dxTextBox('option', 'value'),
                        Placeholder: $("#txtPlaceholderCombo").dxTextBox('option', 'value'),
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, selectBox);
                objNewView.Widget.push(selectBox);
                break;
            case 'DATAGRID':
                var dataGrid =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    DataGrid: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DataSource: $("#txtDataSourceGrid").dxTextBox('option', 'value'),
                        Columns: $("#txtColumnsGrid").dxTextBox('option', 'value'),
                        ModeSelectionGrid: $("#cmbModeSelectionGrid").dxSelectBox('option', 'value'),
                        Pagination: $("#swPaginationGrid").dxSwitch('option', 'value'),
                        AllowFilter: $("#swAllowFilterGrid").dxSwitch('option', 'value'),
                        AllowEditing: $("#swAllowEditingGrid").dxSwitch('option', 'value'),
                        Summary: $("#cmbSummaryGrid").dxSelectBox('option', 'value'),
                        IsGroupedSummary: $("#swIsGroupedSummaryGrid").dxSwitch('option', 'value'),
                        PageSize: $("#txtPageSizeGrid").dxTextBox('option', 'value'),
                        TypeStateField: $("#cmbTypeStateGrid").dxSelectBox('option', 'value'),
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, dataGrid);
                objNewView.Widget.push(dataGrid);                
                break;
            case 'GALLERY':
                var gallery =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    Gallery: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DataSource: $("#txtDataSourceGallery").dxTextBox('option', 'value'),
                        SlideShow: $("#swSlideShowGallery").dxSwitch('option', 'value'),
                        DelaySlide: $("#txtDelaySlideGallery").dxTextBox('option', 'value'),
                        Loop: $("#swLoopGallery").dxSwitch('option', 'value'),
                        ShowButtons: $("#swShowNavButtonGallery").dxSwitch('option', 'value'),
                        ShowIndicator: $("#swShowIndicatorGallery").dxSwitch('option', 'value')
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, gallery);
                objNewView.Widget.push(gallery);        
                break;
            case 'LISTBOX':
                var listBox =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    ListBox: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DataSource: $("#txtDataSourceListBox").dxTextBox('option', 'value'),
                        SelectionMode: $("#cmbModeSelectionListBox").dxSelectBox('option', 'value'),
                        ShowCheck: $("#swShowCheckListBox").dxSwitch('option', 'value'),
                        Height: $("#txtHeightListBox").dxTextBox('option', 'value'),
                        ItemTemplate: $("#txtItemTemplateListBox").dxTextBox('option', 'value'),
                        Grouped: $("#swGroupedListBox").dxSwitch('option', 'value'),
                        GroupTemplate: $("#txtGroupTemplateListBox").dxTextBox('option', 'value'),
                        TypeStateField: $("#cmbTypeStateListBox").dxSelectBox('option', 'value')
                    }
                }
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, listBox);
                objNewView.Widget.push(listBox); 
                break;
            case 'MAP':
                var map =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    Map: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        MarkersData: $("#txtMarkersDataMap").dxTextBox('option', 'value'),
                        Width: $("#txtWidthMap").dxTextBox('option', 'value'),
                        Height: $("#txtHeightMap").dxTextBox('option', 'value'),
                        Zoom: $("#nmbZoomMap").dxNumberBox('option', 'value'),
                        IconMarker: $("#txtIconMarkerMap").dxTextBox('option', 'value')                            
                    }
                }
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, map);
                objNewView.Widget.push(map); 
                break;
            case 'TAB':
                var tab =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    Tab: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        DataSource: $("#txtDataSourceTab").dxTextBox('option', 'value'),
                        SelectedIndex: $("#nmbSelectedIndexTab").dxNumberBox('option', 'value'),
                        ItemTemplate: $("#txtItemTemplateTab").dxTextBox('option', 'value')                                                   
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, tab);
                objNewView.Widget.push(tab);
                break;
            case 'TOOLBAR':
                var toolbar =
                {
                    DescriptionWidget: $("#txtWidgetDescription").dxTextBox('option', 'value'),
                    Identifier: $("#txtWidgetIdentifier").dxTextBox('option', 'value'),
                    TypeWidget: selectWidget.Description,
                    Position: $("#nmbWidgetPosition").dxNumberBox('option', 'value'),
                    ToolBar: {
                        IdWidget: this.state.isEdit ? selectEditWidget.IdWidget : 0,
                        Title: $("#txtTitleToolBar").dxTextBox('option', 'value'),
                        Click: $("#txtOnClickToolBar").dxTextBox('option', 'value'),
                        Type: $("#txtTypeToolBar").dxTextBox('option', 'value'),
                        TextType: $("#txtTextTypeToolBar").dxTextBox('option', 'value')                                                                   
                    }
                };
                if(this.state.isEdit)
                    listWidgets.store().update(selectEditWidget.Identifier, toolbar);
                objNewView.Widget.push(toolbar);
                break;
            default:
                break;
        }        
    }

    resetControls(){                
        changePropertyControl('#txtWidgetDescription', typeControl.TextBox, 'disabled', true );
        changePropertyControl('#txtWidgetIdentifier', typeControl.TextBox, 'disabled', true );
        changePropertyControl('#nmbWidgetPosition', typeControl.NumberBox, 'disabled', true );
        changePropertyControl('#cmbWidgetType', typeControl.SelectBox, 'value', '' )   
        $('#cmbWidgetType').dxSelectBox('instance').reset();
        $('#txtWidgetDescription').dxTextBox('instance').reset();
        $('#txtWidgetIdentifier').dxTextBox('instance').reset();
        $('#nmbWidgetPosition').dxNumberBox('instance').reset();         
    }    

    saveConfiguration(){
        debugger;
        var stateEdit= this.state.isEdit;
        showQuestionMessage(CORE_TAG('ManagementViews'), CORE_MESSAGE_ADD('ConfirmViewSettings', objNewView.Name), function(){
                if(objNewView.Widget.length > 0)
                {
                    if(!stateEdit) {
                        listWidgets._store._array = objNewView.Widget;                   
                        SaveViewConfiguration(objNewView.Name, objNewView.Description , objNewView.Path, objNewView.Logo, objNewView.IsActive, listWidgets._store._array, function(data:any){
                            that.successSaveConfiguration(data);
                        });
                    }                        
                    else            
                        UpdateViewConfiguration(objNewView.IdView, objNewView.Name, objNewView.Description , objNewView.Path, objNewView.Logo, objNewView.IsActive, listWidgets._store._array, function(data:any){
                            that.successSaveConfiguration(data);
                        });      
                }
                else
                {
                    showWarningMessage(CORE_TAG('ManagementViews'), CORE_MESSAGE('AddNewWidget'));
                }
        });       
    }

    successSaveConfiguration(data: any){
        debugger;
        var stateEdit= this.state.isEdit;
        showSuccessMessage(CORE_TAG('ManagementViews'), CORE_MESSAGE('SuccessTransaction'), function () {
            changePropertyControl('#popupViewData', typeControl.Popup, 'visible', false);
            changePropertyControl('#popupAddWidgets', typeControl.Popup, 'visible', false);            
            if (!stateEdit)
                listViews.store().insert(data);
            else
                listViews.store().update(data.IdView, data);
            $('#grdViews').dxDataGrid('instance').refresh();
            $('#grdViews').dxDataGrid('instance').deselectAll();            
            changeStateToolBar(toolBarButtons.Edit, stateToolBar.disabled);
        })
    }    

    clearControls() {        
        listWidgets._store._array = [];
        changePropertyControl('#grdWidgets', typeControl.DataGrid, 'dataSource', listWidgets);
    }

    cancelSave(params: any) {
        debugger;
        $('#popupViewData').dxPopup('option', 'visible', false);
        $('#grdViews').dxDataGrid('instance').deselectAll();
        changeStateToolBar(toolBarButtons.Edit, stateToolBar.disabled);
        params.validationGroup.reset();
    }

    cancelConfigureWidgets(){
        debugger;                
        $('#grdViews').dxDataGrid('instance').deselectAll();
        $('#grdViews').dxDataGrid('instance').refresh();
        changeStateToolBar(toolBarButtons.Edit, stateToolBar.disabled);
    }
}

/*REDUX METHODS*/
/*If a component have to connect to any reducer of the store, uncomment the mapStateToProps function*/

/*function mapStateToProps(state: any) {
    return {
        example: state.example
    }
}*/