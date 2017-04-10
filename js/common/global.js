/*****************************************************************************************************************************************************************************************************************************************************************
--------------------------------------------------------------------------------V A R I A B L E S---------------------------------------------------------------------------------------------------------------------------------------------
*****************************************************************************************************************************************************************************************************************************************************************/
var Sesion = {
    FechaSistema: new Date(),
    IpMaquina: ''
}
/*Tiempo que se mostrará la notificación (Toast)*/
var notificationTime = 5000;
var deviceType;
/*****************************************************************************************************************************************************************************************************************************************************************
--------------------------------------------------------------------------------P A T R Ó N  D E  C A R A C T E R E S---------------------------------------------------------------------------------------------------------------------------------------------
*****************************************************************************************************************************************************************************************************************************************************************/
CORE_PATTERN_LETTERS = 'a-zA-ZñÑáÁéÉíÍóÓúÚ';
CORE_PATTERN_INT = '0-9';
CORE_PATTERN_SPECIALS_ALLOWED = String.fromCharCode(47) + String.fromCharCode(45);
CORE_PAGINATION = 15;

/*****************************************************************************************************************************************************************************************************************************************************************
----------------------------------------------------------------------------------------E N U M E R A D O S-------------------------------------------------------------------------------------------------------------------------------------------------------
*****************************************************************************************************************************************************************************************************************************************************************/
/* Enumerado de los caracteres especiales */
CORE_SPECIAL_CHAR = {
    ASTERISK: "42",//*
    CLOSE_EXCLAMATION: "33",//!
    NUMERAL: "35",//#
    LEFT_PARENTHESES: "40",//(
    RIGHT_PARENTHESES: "41",//)
    DOLAR: "36",//$
    PERCENTAGE: "37",//%
    AMPERSAND: "38",//&
    EQUAL: "61",//=
    PLUS: "43",//+
    AT: "64",//"@"
    OPEN_QUESTION_MARK: "191",//¿
    CLOSE_QUESTION_MARK: "63",//?
    COMMA: "44",//,
    TWO_POINT: "58",//:
    LESS_THAN: "60",//<
    GREATER_THAN: "62",//>
    DOWN_DASH: "95",//_
    DOT: "46",//.
    DOT_COMMA: "59",//;
    EQUIVALENCE: "126",//~
    VERTUCAL_BAR: "124",//|
    SPACE: "32"//ESPACIO
}


/* Enumerado de los tipos de controles que se manejan en la aplicación */
var typeControl = {
    TextBox: 'textbox',
    NumberBox: 'numberbox',
    SelectBox: 'selectbox',
    DateBox: 'datebox',
    TextArea: 'textarea',
    Button: 'boton',
    Check: 'check',
    DataGrid: 'grid',
    TagBox: 'tagbox',
    Switch: 'switch',
    Popup: 'popup',
    ListBox: 'list',
    RadioGroup: 'radiogroup'
}

/* Enumerado de los tipos de botones que se pueden configurar */
var typeButtons = {
    Normal: 'normal',
    Default: 'default',
    Back: 'back',
    Danger: 'danger',
    Success: 'success',
}

var classButtons = {
    Accept: CORE_TAG('Button_Accept'),
    Cancel: CORE_TAG('Button_Cancel'),
    New: CORE_TAG('Button_New'),
    Print: CORE_TAG('Button_Print'),
    Send: CORE_TAG('Button_Send'),
    Save: CORE_TAG('Button_Save'),
    Search: CORE_TAG('Button_Search'),
    Refresh: CORE_TAG('Button_Refresh'),
    Delete: CORE_TAG('Delete'),
    Other: CORE_TAG('Button_Other'),
}

/* Enumerado de las clases de mensajes a desplegar en la aplicación */
var classMessage = {
    Info: 'MENINF',
    Warning: 'MENADV',
    Danger: 'MENERR',
    Question: 'MENPRE',
    Success: 'MENSUC'
}

/* Enumerado para los modos de selección en un control tipo lista*/
var modeSelection = {
    None: 'none',
    Single: 'single',
    Multiple: 'multi',
    MultipleGrid: 'multiple'
}

/* Enumerado para indicar la posición en la que aparecerá un control determinado */
var positionControls = {
    Top: 'top',
    Bottom: 'bottom',
    Right: 'rigth',
    Left: 'left'
}

/* Enumerado para indicar el tipo de caracteres permitidos*/
var typeCharAllowed = {
    OnlyText: 'textOnly',
    OnlyNumber: 'numberOnly',
    OnlyTextAndNumber: 'textAndNumberOnly',
    OnlyTextAndChar: 'textAndCharactersOnly',
    OnlyNumberAndChar: 'NumberAndCharactersOnly',
    OnlyTextNumberAndChar: 'textNumberAndCharactersOnly',
    AllChar: 'allChartes',
}

var typePatternColumn = {
    CED: 'ID',
    CellPhone: 'CELU',
    Email: 'EMAIL',
    Extention: 'EXTC',
    AccountNumber: 'NUMCTA',
    DecimalNumber: 'NDEC',
    IntNumber: 'NENT',
    RUC: 'RUC',
    OnlyLetters: 'TXTONLY',
    OnlyLetterChar: 'TXTCHARONLY',
    OnlyNumbers: 'NUMONLY',
    OnlyNumbersChar: 'NUMCHARONLY',
    OnlyLettersNumber: 'TXTNUMONLY',
    OnlyLettersNumberChar: 'TXTNUCHARMONLY',
    AllChars: 'ALLCHAR',
    Phone: 'TELF'
}

/* Enumerado para indicar cómo se mostrará un control en su configuración inicial*/
var stateControl = {
    disabled: 'disabled',
    hide: 'hide',
    readOnly: 'readOnly'
}

var typeSelectionGrid = {
    None: 'none',
    Single: 'single',
    Multiple: 'multiple',
    AllowSelect: 'allowSelectAll'
}

var typeValidation = {
    Required: 'required',
    Numeric: 'numeric',
    Range: 'range',
    RangoDate: 'rangeDate',
    Pattern: 'pattern',
    RangePattern: 'rangePattern',
    StringLength: 'stringLength',
    Compare: 'compare',
    Custom: 'custom',
    Email: 'email'
}

var textAlignment = {
    Right: 'right',
    Left: 'left',
    Center: 'center',
    Justify: 'justify'
}

var presentationText = {
    OnlyText: 'onlytext',
    OnlyIcon: 'onlyicon',
    IconText: 'icontext'
}

var typeSummaryGrid = {
    Count: 'count',
    Sum: 'sum',
    Min: 'min',
    Max: 'max',
    Average: 'avg'
}

var eventsControl = {
    change: 'change',
    copy: 'copy',
    cut: 'cut',
    disposing: 'disposing',
    enterKey: 'enterKey',
    focusIn: 'focusIn',
    focusOut: 'focusOut',
    initialized: 'initialized',
    input: 'input',
    keyDown: 'keyDown',
    keyPress: 'keyPress',
    keyUp: 'keyUp',
    optionChanged: 'optionChanged',
    paste: 'paste',
    valueChanged: 'valueChanged'
}

var typeLetter = {
    upper: 'uppercase',
    lower: 'lowercase',
    normal: 'none'
}

var toolBarButtons = {
    New: 'buttonToolBarNew',
    Edit: 'buttonToolBarEdit',
    Save: 'buttonToolBarSave',
    Print: 'buttonToolBarPrint',
    Search: 'buttonToolBarSearch',
    Send: 'buttonToolBarSend',
    Cancel: 'buttonToolBarCancel',
    Export: 'buttonToolBarExport',
    Accept: 'buttonToolBarAccept',
    Other: 'buttonToolBarOther'
}

var stateToolBar = {
    disabled: 'disabled',
    hidden: 'hidden',
    enabled: 'enabled',
    visible: 'visible'
}

var searchOperations = {
    Equal: '=',
    Different: '<>',
    GreaterThan: '>',
    GreaterEqualThan: '>=',
    LessThan: '<',
    LessEqualThan: '<',
    StartsWith: 'startswith',
    EndsWith: 'endswith',
    Contains: 'contains',
    NotContains: 'notcontains',
}

var dateParts = {
    Seconds: 'second',
    Minutes: 'minute',
    Hours: 'hour',
    Days: 'day',
    Months: 'month',
    Years: 'year'
}

var typesDate = {
    ShortDate: 'shortdate',
    LongDate: 'longdate'
}

var typesNotification = {
    Error: 'error',
    Success: 'success',
    Warning: 'warning',
    Info: 'info'
}

var typesLinearGauge = {
    Rectangle: 'rectangle',
    Rhombus: 'rhombus',
    Circle: 'circle',
    TextCloud: 'textCloud',
    TriangleMarker: 'triangleMarker'
}

var formatValues = {
    Money: '$',
    Percent: '%'
}

var typePhones = {
    Phone: 'phone',
    Mobile: 'mobile'
}

var sizeFloatButtons = {
    small: 'small',
    normal: 'normal'
}

var typeFloatButtons = {
    "default": 'btn-default',
    white: 'btn-white'
}

var typeOrders = {
    Ascendent: 'asc',
    Descendent: 'desc'
}

var stateScreen = {
    Active: 'Activa',
    Lock: 'Bloqueada'
}

/*****************************************************************************************************************************************************************************************************************************************************************
----------------------------------------------------------------------------C O N F I G U R A C I Ó N  C O N T R O L E S------------------------------------------------------------------------------------------------------------------------------------------
*****************************************************************************************************************************************************************************************************************************************************************/

/*
    Configuración del control Popup.
        Permite configurar un elemento html (div) en una pantalla flotante.
    Parámetros: 
        visible: Valor booleano para indicar si el control se muestra visible inicialmente.
        width: Indica el ancho de la pantalla flotante. 'auto'==> Se autoajusta al contenido de la pantalla flotante. '100%'==> Se establecerá el ancho en porcentaje. '100px'==> Se establecerá un tamaño fijo
        height: Indica la altura de la pantalla flotante. 'auto'==> Se autoajusta al contenido de la pantalla flotante. '100%'==> Se establecerá el ancho en porcentaje. '100px'==> Se establecerá un tamaño fijo
        showTitle: Valor booleano para indicar si se muestra un título en la pantalla flotante.
        title: Texto que indica el título de la pantalla flotante. Válido solo si mostrarTitulo es true.
        showCloseButton: Valor booleano que indica si muestro el ícono de cerrar en la cabecera de la pantalla flotante.
        resizeEnabled: Valor booleano que indica si puedo cambiar el tamaño de la pantalla flotante en tiempo de ejecución.
*/
function setupPopup(visible, width, height, showTitle, title, showCloseButton, resizeEnabled) {
    var popup = {
        visible: visible,
        width: width,
        height: height,
        title: title,
        maxHeight: '98%',
        maxWidth: '98%',
        deferRendering: false,
        resizeEnabled: resizeEnabled,
        showTitle: showTitle,
        fullScreen: false,
        showCloseButton: showCloseButton,
        onShowing: null,
        onShown: null,
        onHiding: null,
        onHidden: null
    }
    return popup;
}

function setupPopover(target, position, width, shading, showTitle, title, showCloseButton) {
    var popover = {
        closeOnOutsideClick: true,
        deferRendering: false,
        height: 'auto',
        onContentReady: null,
        onDisposing: null,
        onHidden: null,
        onHiding: null,
        onInitialized: null,
        onOptionChanged: null,
        onShowing: null,
        onShown: null,


        onTitleRendered: null,
        position: position,
        rtlEnabled: undefined,
        shading: shading,
        shadingColor: 'rgba(0, 0, 0, 0.5)',
        showCloseButton: showCloseButton,
        showTitle: showTitle,
        target: target,
        title: title,
        titleTemplate: undefined,
        visible: false,
        width: width,
        toolbarItems: []
    }

    return popover;
}

/*
    Configuración de control Switch.
        Permite configurar un elemento html (div) en un control tipo switch.
    Parámetros:
        onText: Texto a mostrar cuando el valor del switch sea ON.
        offText: Texto a mostrar cuando el valor del switch sea OFF.
        defaultValue: Valor inicial del control.
        typeStateField: Estado en el que se desea visualizar el control (Oculto, Deshabilitado, Solo de Lectura) [Opcional].
*/
function setupSwitchControl(onText, offText, defaultValue, typeStateField) {
    var switchBox = {
        onText: onText,
        offText: offText,
        value: defaultValue,
        disabled: false,
        visible: true,
        readonly: false
    }

    if (typeStateField)
        setStateField(switchBox, typeStateField);

    return switchBox;
}
















/*
    Configuración de control Botón.
        Permite configurar un elemento html (div) en un control de botón.
    Parametros:
        text: Texto a mostrar en la etiqueta del botón.
        action: Acción a ejecutar en el evento click del botón.
        type: Tipo de botón a configurar; pueden ser de tres tipos: Exito, PorDefecto, Error, Normal; forma de invocar: tiposBoton.Exito
        validationGroup: Establece el grupo de validación asociado a este botón, con el fin de validar solo los controles asociados a este grupo.
        typeStateField: Estado en el que se desea visualizar el control (Oculto, Deshabilitado, Solo de Lectura) [Opcional].
*/
function setupButtonControl(text, action, validationGroup, type, icon, typeStateField, rtlEnabled) {
    var button = {
        text: text,
        type: type,
        icon: icon ? 'fa ' + icon : undefined,
        validationGroup: validationGroup,
        disabled: false,
        visible: true,
        readonly: false,
        rtlEnabled: rtlEnabled,
        onClick: function (params) {
            if (action)
                action(params);
        }
    }

    if (typeStateField)
        setStateField(button, typeStateField);

    return button;
}

/*
    Configura el botón aceptar de un popup o una vista.
    Parámetros:
        action: Acción a ejecutar en el evento click del botón.
        validationGroup: Establece el grupo de validación asociado a este botón, con el fin de validar solo los controles asociados a este grupo.
        allowIcon: Valor Booleano para indicar si se presentará ícono en el botón
        typeStateField: Estado en el que se desea visualizar el control (Oculto, Deshabilitado, Solo de Lectura) [Opcional].
*/
function setupButtonControlDefault(classButton, action, validationGroup, allowIcon, typeStateField) {
    var textButton = classButton;
    var icon = undefined;
    if (allowIcon == true) {
        switch (classButton) {
            case classButtons.Accept:
                icon = 'fa ' + iconosCore.check;
                break;
            case classButtons.Cancel:
                icon = 'fa ' + iconosCore.times;
                break;
            case classButtons.Refresh:
                icon = 'fa ' + iconosCore.refresh;
                break;
            case classButtons.Send:
                icon = 'fa ' + iconosCore.send_o;
                break;
            case classButtons.New:
                icon = 'fa ' + iconosCore.file_o;
                break;
            case classButtons.Print:
                icon = 'fa ' + iconosCore.print;
                break;
            case classButtons.Save:
                icon = 'fa ' + iconosCore.floppy;
                break;
            default:
                break;
        }
    }
    return setupButtonControl(textButton, action, validationGroup, typeButtons.Default, icon, typeStateField);
}

/*
    Configuración de control text box.
        Permite configurar un elemento html (div) en un control textbox.
    Parametros:
        maxLenght: Cantidad de caracteres permitidos en el control.
        placeholder: Texto de ayuda que se mostrará en el control.
        typeStateField: Estado en el que se desea visualizar el control (Oculto, Deshabilitado, Solo de Lectura) [Opcional].
*/
function setupTextBoxControl(defaultValue, maxLenght, placeholder, typeLetterControl, typeStateField, allowSpace, typeChar, specialsChar) {

    var textbox = {
        value: defaultValue,
        maxLength: maxLenght,
        disabled: false,
        visible: true,
        readOnly: false,
        placeholder: placeholder,
        mode: 'text',
        onChange: function (evt) {
            if (typeLetterControl) {
                var nameField = '#' + evt.element[0].id;
                switch (typeLetterControl) {
                    case typeLetter.upper:
                        $(nameField).dxTextBox('option', 'value', $(nameField).dxTextBox('option', 'value') == null ? '' : $(nameField).dxTextBox('option', 'value').toUpperCase())
                        break;
                    case typeLetter.lower:
                        $(nameField).dxTextBox('option', 'value', $(nameField).dxTextBox('option', 'value') == null ? '' : $(nameField).dxTextBox('option', 'value').toLowerCase())
                        break;
                    default:
                        break;
                }
            }
        },
        onCopy: function (evt) {
            var variable = "";
        },
        onCut: null,
        onDisposing: null,
        onEnterKey: null,
        onFocusIn: function (evt) {
            if (typeLetterControl)
                setTypeLetter(evt, typeLetterControl);
        },
        onFocusOut: null,
        onInitialized: null,
        onInput: null,
        onKeyDown: null,
        onKeyPress: function (evt) {
            restrictionTextControl(evt.element[0].id, typeChar, allowSpace, specialsChar);
        },
        onKeyUp: null,
        onOptionChanged: null,
        onPaste: null,
        onValueChanged: null,
    }

    if (typeStateField)
        setStateField(textbox, typeStateField);

    return textbox;
}

function setTypeLetter(evt, typeLetter) {
    var control = document.getElementById(evt.element[0].id);
    control.firstChild.firstChild.style.textTransform = typeLetter;
}

/*
    Permite establecer un evento inicial a un control determinado.
    Parámetros:
        optionsControl: Opciones del control al que se va a establecer el evento.
        event: Evento a establecer.
        functionEvent: Acción a ejecutar en el evento.
*/
function setEventControls(optionsControl, event, functionEvent) {
    switch (event) {
        case this.eventsControl.change:
            optionsControl.onChange = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.copy:
            optionsControl.onCopy = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.cut:
            optionsControl.onCut = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.disposing:
            optionsControl.onDisposing = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.enterKey:
            optionsControl.onEnterKey = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.focusIn:
            optionsControl.onFocusIn = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.focusOut:
            optionsControl.onFocusOut = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.initialized:
            optionsControl.onInitialized = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.input:
            optionsControl.onInput = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.keyDown:
            optionsControl.onKeyDown = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.keyPress:
            optionsControl.onKeyPress = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.keyUp:
            optionsControl.onKeyUp = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.optionChanged:
            optionsControl.onOptionChanged = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.paste:
            optionsControl.onPaste = function (e) {
                functionEvent(e);
            }
            break;
        case this.eventsControl.valueChanged:
            optionsControl.onValueChanged = function (e) {
                functionEvent(e);
            }
            break;
        default:
            showErrorMessage(CORE_TAG('ErrorMessage'), CORE_MESSAGE('NoEventControl'))
            break;
    }
}

/*
    Configuración de un control textbox en modo Email.
    Parámetros:
        maxLenght: Cantidad de caracteres permitidos en el control.
        placeholder: Texto de ayuda que se mostrará en el control.
        typeStateField: Estado en el que se desea visualizar el control (Oculto, Deshabilitado, Solo de Lectura) [Opcional].
*/
function setupEmailControl(defaultValue, maxLength, typeStateField, placeHolder) {
    var textbox = setupTextBoxControl(defaultValue, maxLength, placeHolder ? placeHolder : ConstantsBehaivor.PLACEHOLDER_EMAIL_FIELD, typeLetter.lower, typeStateField, false, typeCharAllowed.OnlyTextNumberAndChar, '@-_.');

    textbox.mode = 'email';

    return textbox;
}

function setupTextPasswordControl(defaultValue, maxLength, placeholder, typeStateField) {
    if (!placeholder)
        placeholder = CORE_TAG('Password');
    var textbox = setupTextBoxControl(defaultValue, maxLength, placeholder, undefined, typeStateField);

    textbox.mode = 'password';

    return textbox;
}

/*
    Configuración de un text box solo para ingresar DNI
    Parámetros:
        typeStateField: Estado en el que se desea visualizar el control (Oculto, Deshabilitado, Solo de Lectura) [Opcional].
*/
function setupTextBoxDNIControl(defaultValue, typeStateField) {
    var textbox = setupTextBoxControl(defaultValue, ConstantsBehaivor.LENGTH_DNI, ConstantsBehaivor.PLACEHOLDER_DNI, null, typeStateField, false);

    textbox.mode = 'number';

    textbox.onKeyUp = function (e) {
        var value = e.jQueryEvent.currentTarget.value;
        if (e.jQueryEvent.keyCode == '107' || e.jQueryEvent.keyCode == '106' || e.jQueryEvent.keyCode == '109' || e.jQueryEvent.keyCode == '111')
            e.jQueryEvent.currentTarget.value = value.substring(0, value.length - 1);
        if (value.length > textbox.maxLength) {
            e.jQueryEvent.currentTarget.value = value.substring(0, value.length - 1);
        }
    }

    return textbox;
}

function setupTextRUCControl(defaultValue, typeStateField) {
    var textbox = setupTextBoxControl(defaultValue, ConstantsBehaivor.LENGTH_RUC, ConstantsBehaivor.PLACEHOLDER_RUC, null, typeStateField, false);
    textbox.mode = 'number';

    return textbox;
}

function setupTextPASAPORTControl(defaultValue, typeStateField) {
    var textbox = setupTextBoxControl(defaultValue, ConstantsBehaivor.LENGTH_PASSPORT, ConstantsBehaivor.PLACEHOLDER_PASSPORT, null, typeStateField, false, typeCharAllowed.OnlyTextAndNumber);

    return textbox;
}

function setupTextPhoneControl(defaultValue, typePhone, typeStateField, placeHolder) {

    var textbox = setupTextBoxControl(defaultValue);

    textbox.mode = 'number';

    switch (typePhone) {
        case typePhones.Phone:
            textbox.maxLength = ConstantsBehaivor.LENGTH_PHONE;
            textbox.placeholder = placeHolder ? placeHolder : ConstantsBehaivor.PLACEHOLDER_PHONE;
            break;
        case typePhones.Mobile:
            textbox.maxLength = ConstantsBehaivor.LENGTH_CELLPHONE;
            textbox.placeholder = placeHolder ? placeHolder : ConstantsBehaivor.PLACEHOLDER_CELLPHONE;
            break;
        default:
            break;
    }

    textbox.onKeyUp = function (e) {
        var value = e.jQueryEvent.currentTarget.value;
        if (e.jQueryEvent.keyCode == '107' || e.jQueryEvent.keyCode == '106' || e.jQueryEvent.keyCode == '109' || e.jQueryEvent.keyCode == '111')
            e.jQueryEvent.currentTarget.value = value.substring(0, value.length - 1);
        if (value.length > textbox.maxLength) {
            e.jQueryEvent.currentTarget.value = value.substring(0, value.length - 1);
        }
    }

    return textbox;
}

/*
    Configuración de un control de tipo selección.
    Parámetros:
        dataSource: Origen de Datos para alimentar el control.
        displayMember: Texto que se mostrará en cada ítem del control.
        valueMember: Valor que se establecerá al seleccionar un ítem del control.
        searchEnabled: Indica si se habilitará la búsqueda en el control.
        typeStateField: Estado en el que se desea visualizar el control (Oculto, Deshabilitado, Solo de Lectura) [Opcional].
*/
function setupComboBoxControl(dataSource, displayMember, valueMember, defaultValue, searchEnabled, typeStateField, width, placeHolder) {

    var combobox = {
        value: defaultValue,
        dataSource: dataSource,
        displayExpr: displayMember,
        valueExpr: valueMember,

        placeholder: placeHolder,
        showClearButton: false,
        disabled: false,
        visible: true,
        readonly: false,
        width: width,
        searchEnabled: searchEnabled ? searchEnabled : false,
        onChange: null,
        onClosed: null,
        onContentReady: null,
        onCopy: null,
        onCut: null,
        onDisposing: null,
        onEnterKey: null,
        onFocusIn: null,
        onFocusOut: null,
        onInitialized: null,
        onInput: null,

        onItemClick: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onOpened: null,
        onOptionChanged: null,
        onPaste: null,
        onSelectionChanged: null,
        onValueChanged: null
    }

    if (typeStateField)
        setStateField(combobox, typeStateField);

    return combobox;
}

/*
    Configuración de un control para el ingreso de fechas.
    Parámetros:
        minDate: Fecha Mínima que acepta el control.
        maxDate: Fecha Máxima que acepta el control.
        typeStateField: Estado en el que se desea visualizar el control (Oculto, Deshabilitado, Solo de Lectura) [Opcional].
*/
function setupDateControl(defaultValue, minDate, maxDate, width, typeStateField) {
    var dateBox = {
        type: 'date',
        width: width,
        value: defaultValue,
        placeholder: ConstantsBehaivor.PATTERN_SHORTDATE,
        displayFormat: ConstantsBehaivor.PATTERN_SHORTDATE,
        pickerType: 'calendar',
        max: maxDate ? maxDate : undefined,
        min: minDate ? minDate : undefined,
        acceptCustomValue: false,
        disabled: false,
        visible: true,
        readonly: false,
        dateOutOfRangeMessage: CORE_VALIDATION('DateOutRange'),
        invalidDateMessage: CORE_VALIDATION('InvalidDate'),
        onValueChanged: null,
        onOpened: null,
        onClosed: null,
        onChange: null
    }
    if (typeStateField)
        setStateField(dateBox, typeStateField);

    return dateBox;
}

/*
    Configuración de una grilla de datos.
    Parámetros
        dataSource: Origen de datos que alimenta a la grilla.
        columns: Columnas a configurar a la grilla.
        modeSelection: Modo de selección de la grilla (Ninguna, Simple, Múltiple).
        pagination: Indica si se desea o no una paginación
        typeStateField: Estado en el que se desea visualizar el control (Oculto, Deshabilitado, Solo de Lectura) [Opcional].
*/
function setupDataGrid(dataSource, columns, modeSelectionGrid, pagination, allowFilter, allowEditing, summary, isGroupedSummary, pageSize, typeStateField) {
    dataSource = dataSource ? dataSource : [];
    modeSelectionGrid = modeSelectionGrid ? modeSelectionGrid : modeSelection.None;
    pagination = pagination ? pagination : false;

    var dataGrid = {
        columnAutoWidth: true,
        columns: columns,
        dataSource: dataSource,
        disabled: false,
        filterRow: {
            applyFilter: 'auto',
            applyFilterText: CORE_TAG('applyFilterText'),
            betweenEndText: CORE_TAG('betweenEndText'),
            betweenStartText: CORE_TAG('betweenStartText'),
            operationDescriptions: {
                '=': CORE_TAG('Equal'),
                '<>': CORE_TAG('NotEqual'),
                '<': CORE_TAG('LessThan'),
                '<=': CORE_TAG('LessEqualThan'),
                '>': CORE_TAG('GreaterThan'),
                '>=': CORE_TAG('GreaterEqualThan'),
                'startswith': CORE_TAG('StartsWith'),
                'contains': CORE_TAG('Contains'),
                'notcontains': CORE_TAG('NotContains'),
                'endswith': CORE_TAG('EndsWith'),
                'between': CORE_TAG('Between'),
            },
            resetOperationText: CORE_TAG('Reset'),
            showAllText: CORE_TAG('All'),

            visible: allowFilter
        },
        hoverStateEnabled: true,
        selection: {
            mode: modeSelectionGrid,
            allowSelectAll: modeSelectionGrid == modeSelection.MultipleGrid ? true : undefined,
            showCheckBoxesMode: modeSelectionGrid == modeSelection.MultipleGrid ? 'always' : 'none'
        },
        editing: {
            allowAdding: allowEditing,
            allowDeleting: allowEditing,
            allowUpdating: allowEditing,
            mode: 'form',
            texts: {
                addRow: CORE_MESSAGE('AddRow'),
                cancelAllChanges: CORE_MESSAGE('CancelAllChanges'),
                cancelRowChanges: CORE_MESSAGE('CancelRowChanges'),
                confirmDeleteMessage: CORE_MESSAGE('ConfirmDeleteMessage'),
                confirmDeleteTitle: CORE_MESSAGE('ConfirmDeleteTitle'),
                deleteRow: CORE_MESSAGE('DeleteRow'),
                editRow: CORE_MESSAGE('EditRow'),
                saveAllChanges: CORE_MESSAGE('SaveAllChanges'),
                saveRowChanges: CORE_MESSAGE('SaveRowChanges'),
                validationCancelChanges: CORE_MESSAGE('ValidationCancelChanges'),
            }
        },
        paging: {
            enabled: pagination,
            pageSize: pageSize ? pageSize : CORE_PAGINATION
        },
        showBorders: true,
        rowAlternationEnabled: true,
        showRowLines: true,
        visible: true,
        readonly: false,
        onSelectionChanged: null,
        onInitNewRow: null,
        onRowInserting: null,
        onRowInserted: null,
        onRowUpdating: null,
        onRowUpdated: null,
        onRowRemoving: null,
        onRowRemoved: null,
        onRowCollapsed: null,
        onRowPrepared: null,
        onEditingStart: null,
        noDataText: CORE_MESSAGE('NoData'),
        summary: {
            groupItems: null,
            totalItems: null,
            texts: {
                avg: CORE_TAG('Summary_Avg') + ' = {0}',
                avgOtherColumn: CORE_TAG('Summary_Other_Avg') + ' {1} es {0}',
                count: CORE_TAG('Summary_Count') + ' = {0}',
                max: CORE_TAG('Summary_Max') + ' = {0}',
                maxOtherColumn: CORE_TAG('Summary_Other_Max') + ' {1} es {0}',
                min: CORE_TAG('Summary_Min') + ' = {0}',
                minOtherColumn: CORE_TAG('Summary_Other_Min') + ' {1} es {0}',
                sum: CORE_TAG('Summary_Sum') + ' = {0}',
                sumOtherColumn: CORE_TAG('Summary_Other_Sum') + ' {1} es {0}'
            }
        },
    }

    if (summary && summary.length) {
        if (isGroupedSummary == true)
            dataGrid.summary.groupItems = summary;
        else
            dataGrid.summary.totalItems = summary;
    }

    if (typeStateField)
        setStateField(dataGrid, typeStateField);

    return dataGrid;
}

/*
    Configuración de un control para mostrar un resumen de los campos inválidos.
    Parámetros:
        groupValidation: Grupo de validación a desplegar el resumen.
*/
function setupSummaryValidation(groupValidation) {
    var summary = {
        hoverStateEnabled: true,
        validationGroup: groupValidation
    }

    return summary;
}

function setupListBox(dataSource, selectionMode, showCheck, height, itemTemplate, grouped, groupTemplate, typeStateField) {
    var listBox = {
        dataSource: dataSource,
        grouped: grouped,
        groupTemplate: groupTemplate,
        itemTemplate: itemTemplate,
        collapsibleGroups: false,
        noDataText: '',//CORE_MESSAGE('NoData'),
        height: height,
        width: '100%',
        onContentReady: null,
        onDisposing: null,
        onGroupRendered: null,
        onInitialized: null,
        onItemClick: null,
        onItemContextMenu: null,
        onItemDeleted: null,
        onItemDeleting: null,
        onItemHold: null,
        onItemRendered: null,
        onItemReordered: null,
        onItemSwipe: null,
        onOptionChanged: null,
        onPageLoading: null,
        onPullRefresh: null,
        onScroll: null,
        onSelectionChanged: null,
        pageLoadingText: '',//CORE_MESSAGE('LoadingData'),
        pulledDownText: CORE_MESSAGE('ReleaseRefresh'),
        pullingDownText: CORE_MESSAGE('PullDownRefresh'),
        refreshingText: CORE_MESSAGE('Refreshing'),
        selectionMode: selectionMode,
        showSelectionControls: showCheck,
        visible: true,
        disabled: false,
        readOnly: false,
        allowItemDeleting: false,
        itemDeleteMode: 'static'
    }

    if (typeStateField)
        setStateField(listBox, typeStateField);

    return listBox;
}

function setupAccordion(dataSource, titleTemplate, itemTemplate, multiple) {
    try {
        var accordion = {
            dataSource: dataSource,
            animationDuration: 300,
            collapsible: true,
            multiple: multiple,
            deferRendering: false,
            itemTitleTemplate: titleTemplate,
            itemTemplate: itemTemplate,
            selectedItems: dataSource,
            onSelectionChanged: null
        }

        return accordion;

    } catch (e) {
        showErrorMessage('', 'No se pudo crear el control (' + e + '). Por favor comuníquese con el Administrador.');
    }

}

function setupNumberBox(defaultValue, minValue, maxValue, width, maxlength, mode) {
    try {
        if (mode == undefined)
            mode = 'number';

        var numberBox = {
            value: defaultValue,
            min: minValue,
            max: maxValue,
            rtlEnabled: false,
            mode: mode,
            maxLength: maxlength,
            width: width,
            invalidValueMessage: 'Ingrese un número válido',
            onKeyPress: function (event) {
                var nameField = '#' + event.element[0].id;
                var jqueryevent = event.jQueryEvent;

                var str = String.fromCharCode(jqueryevent.keyCode);
                if (str == ',') {
                    jqueryevent.preventDefault();
                    return;
                }

                var presicion = ConstantsBehaivor.PRECISION_DECIMAL == null ? 0 : ConstantsBehaivor.PRECISION_DECIMAL;
                var number = $(nameField).dxNumberBox('option', 'text') == null ? '' : $(nameField).dxNumberBox('option', 'text').split('.');
                if (number.length > 1) {
                    if (number[1].length > 2) {
                        jqueryevent.preventDefault();
                        return;
                    } else {
                        if (number[1].length > 1) {
                            var numero = number[1].substring(0, presicion);
                            var salary = 0.0;
                            salary = number[0] + '.' + numero;
                            var salary2 = parseFloat(salary);
                            $(nameField).dxNumberBox('option', 'value', $(nameField).dxNumberBox('option', 'attr').text = salary2);
                            jqueryevent.preventDefault();
                            return;
                        } else {

                            if (number[1].length == 3) {
                                var numero = number[1].substring(0, presicion);
                                var salary = 0.0;
                                salary = number[0] + '.' + numero;
                                var salary2 = parseFloat(salary);
                                $(nameField).dxNumberBox('option', 'value', $(nameField).dxNumberBox('option', 'attr').text = salary2);
                                jqueryevent.preventDefault();
                                return;
                            }
                        }
                    }
                }

            }
        }

        return numberBox;
    } catch (e) {
        showErrorMessage('', 'No se pudo crear el control (' + e + '). Por favor comuníquese con el Administrador.');
    }
}

function setupCheckBoxControl(defaultValue, text, typeStateField) {
    try {
        var checkBox = {
            value: defaultValue,
            text: text,
            disabled: false,
            visible: true,
            readonly: false,
            onValueChanged: null,
        }
        if (typeStateField)
            setStateField(checkBox, typeStateField);

        return checkBox;
    } catch (e) {
        showErrorMessage('', 'No se pudo crear el control (' + e + '). Por favor comuníquese con el Administrador.');
    }
}

function setupTextAreaControl(defaultValue, maxLength, width, height, placeHolder, typeStateField) {
    try {
        var textArea = {
            value: defaultValue,
            placeholder: placeHolder,
            maxLength: maxLength,
            width: width,
            height: height,
            disabled: false,
            visible: true,
            readonly: false,
            onValueChanged: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onEnterKey: null
        }

        if (typeStateField)
            setStateField(textArea, typeStateField);

        return textArea;
    } catch (e) {
        showErrorMessage('', 'No se pudo crear el control (' + e + '). Por favor comuníquese con el Administrador.');
    }
}

function setupMapControl(markersData, width, height, zoom, iconMarker) {
    try {
        var maps = {
            center: { lat: PosicionActual.Latitud, lng: PosicionActual.Longitud },
            zoom: zoom,
            height: function () {
                return window.innerHeight - 210;
            },
            width: width,
            markers: markersData,
            autoAdjust: true,
            controls: true,
            provider: 'google',
            key: { google: 'AIzaSyBamz0SmdOUDV6iLW7g-KMbPbM-DcPfDxY' },
            type: 'roadmap',
            markerIconSrc: './images/' + iconMarker + '.png'
        }

        return maps;
    } catch (e) {
        showErrorMessage('', 'No se pudo crear el control (' + e + '). Por favor comuníquese con el Administrador.');
    }
}

function setupRadioGroup(defaultValue, dataSource, displayExpr, valueExpr, itemTemplate) {
    try {
        if (!itemTemplate)
            itemTemplate = 'item';
        var radioGroup = {
            dataSource: dataSource,
            value: defaultValue,
            layout: 'vertical',
            displayExpr: displayExpr,
            valueExpr: valueExpr,
            onValueChanged: null,
            itemTemplate: itemTemplate
        }

        return radioGroup;
    } catch (e) {
        showErrorMessage('', 'No se pudo crear el control (' + e + '). Por favor comuníquese con el Administrador.');
    }

}

function setupToolBarView(title, click, type, textType) {

    var toolBarView = {
        items: [
            {
                location: 'before',
                options: { type: type, text: textType ? textType : undefined, onClick: !click ? backView : click },
                widget: 'dxButton',
            },
            { text: title }
        ]
    }

    return toolBarView;
}

/*
    Configura un control de gallería de Imágenes.
    Parámetros:
        dataSource: Origen de Datos a cargar en el gallery.
        height: Alto del control.
        slideShow: Booleano que indica si las imágenes se desplazan automáticamente.
        delaySlide: Tiempo de desplazamiento de las imágenes.
        loop: Booleano que indica si se desplaza nuevamente la primera imagen después de la última.
        showButtons: Booleano que indica si se muestran los botones de navegación.
        showIndicator: Booleano que indica si se muestran los indicadores de imágenes.
*/
function setupGallery(dataSource, slideShow, delaySlide, loop, showButtons, showIndicator) {
    var gallery = {
        dataSource: dataSource,
        width: '100%',
        slideshowDelay: slideShow ? delaySlide : 0,
        loop: loop,
        showNavButtons: showButtons,
        showIndicator: showIndicator
    }

    return gallery;
}

function setupTabsControl(dataSource, selectedIndex, itemTemplate) {

    var tabs = {
        dataSource: dataSource,
        selectedIndex: selectedIndex,
        itemTemplate: itemTemplate,
        deferRendering: true,
        onItemClick: null,
        onSelectionChanged: null,
    }

    return tabs;
}

/*
    Configura un control de hoja de acciones (Se usa en móbiles)
    Parámetros:
        dataSource: Origen de datos que contiene las acciones a realizar,
        showTitle: Valor booleano para indicar si se muestra o no un título,
        title: Título a mostrar en la hoja de acciones,
        itemTemplate: Diseño que se desea mostrar en cada ítem
*/
function setupActionSheet(dataSource, showTitle, title, itemTemplate) {
    var actionSheet = {
        dataSource: dataSource,
        showCancelButton: true,
        showTitle: showTitle,
        title: title,
        onItemClick: null,
        onCancelClick: null,
        visible: false,
        cancelText: 'Cancelar',
        itemTemplate: itemTemplate
    }

    return actionSheet;
}


/*
    Permite la configuración de un botón flotante en la pantalla.
    Parámetros:
        typeButton: Tipo de Botón a crear
*/
function setupFloatButton(classButton, action, icon, sizeFloatButtons, typeFloatButtons, aditionalClass, groupValidation) {
    var areaFloat = document.getElementById('floatButtons');
    var floatButtons = document.createElement('div');

    $(floatButtons).dxButton({
        visible: true,


        validationGroup: groupValidation,
        onClick: function (params) {
            if (action)
                action(params);
        }
    });
    var classCurrentButton = 'btn-movil';

    if (!icon)
        icon = iconosCore.check;

    if (!typeFloatButtons)
        typeFloatButtons = this.typeFloatButtons.default;

    if (sizeFloatButtons == this.sizeFloatButtons.small)
        classCurrentButton = 'btn-movil-small';

    floatButtons.classList.add(classCurrentButton);
    floatButtons.classList.add(typeFloatButtons);

    $(floatButtons).dxButton('option', 'visible', true);
    $(floatButtons).dxButton('option', 'onClick', function (params) {
        if (action)
            action(params);
    });

    switch (classButton) {
        case classButtons.Cancel:
            icon = iconosCore.times;
            floatButtons.id = 'floatButtonCancel';
            break;
        case classButtons.Save:
            icon = iconosCore.floppy;
            floatButtons.id = 'floatButtonSave';
            break;
        case classButtons.Delete:
            icon = iconosCore.minus;
            floatButtons.id = 'floatButtonDelete';
            break;
        case classButtons.New:
            icon = iconosCore.plus;
            floatButtons.id = 'floatButtonNew';
            break;
        case classButtons.Accept:
            icon = iconosCore.check;
            floatButtons.id = 'floatButtonAccept';
            break;
        case classButtons.Search:
            icon = iconosCore.search;
            floatButtons.id = 'floatButtonSearch';
            break;
        case classButtons.Other:
            floatButtons.id = 'floatButtonOther_' + icon.split('-')[1];
            break;
    }
    $(floatButtons).dxButton('option', 'icon', 'fa ' + icon);



    areaFloat.appendChild(floatButtons);
}

function hideFloatButtons() {
    var floatButtons = document.getElementById('floatButtons');
    floatButtons.innerHTML = '';
}

function setupLoadPanel() {
    var loadPanel = {
        message: 'Cargando',
        visible: false,
        deferRendering: false,
        height: 'auto'
    }

    return loadPanel;
}

/*****************************************************************************************************************************************************************************************************************************************************************
-------------------------------------------------C O N F I G U R A C I Ó N   C O N T R O L E S   E S T A D I S T I C O S------------------------------------------------------------------------------------------------------------------------------------------
*****************************************************************************************************************************************************************************************************************************************************************/

function setupPieChar(dataSource, series, height, width, title, subtitle, showLegend, extendPropierties) {
    if (!showLegend)
        showLegend = true;

    var pieChart = {
        dataSource: dataSource,
        series: series,
        size: {
            height: height,
            width: width
        },
        legend: {
            visible: showLegend,
            horizontalAlignment: "center",
            verticalAlignment: "bottom"
        },
        tooltip: {
            enabled: true,
            format: "currency",
            percentPrecision: 2,
            customizeTooltip: function (arg) {
                return {
                    text: arg.valueText + " - " + arg.percentText
                };
            }
        },
        title: {
            text: title,
            font: {
                size: 16,
                family: mainFontFamily,
                color: '#00c0d5'
            },
            subtitle: {
                text: subtitle,
                size: 12,
                family: mainFontFamily,
                color: 'grey'
            }
        },
        commonSeriesSettings: {
            type: "doughnut",
            innerRadius: 0.2,
            label: {
                visible: true,
                connector: {
                    visible: true,
                    width: 0.5
                },
                format: "currency",
                customizeText: function (arg) {
                    return arg.argumentText + " (" + arg.percentText + ")";
                }
            }
        }
    }

    if (extendPropierties)
        $.extend(pieChart, extendPropierties);

    return pieChart;
}

function setupLinearGauge(defaultValue, startValue, endValue, subValues, typeLinear, formatValue) {
    if (!formatValue)
        formatValue = formatValues.Money;
    if (!typeLinear)
        typeLinear = typesLinearGauge.Rectangle;
    var linearGauge = {
        animation: {
            enabled: true,
            duration: 5000
        },
        startValue: startValue,
        endValue: endValue,
        value: defaultValue,
        tickInterval: 50,
        label: {
            customizeText: function (arg) {
                if (formatValue == formatValues.Percent)
                    return arg.valueText + formatValue;
                else
                    return formatValue + arg.valueText;
            }
        },
        subvalues: subValues,
        subvalueIndicator: {
            type: typeLinear,
            color: mainColor
        },
        tooltip: {
            enabled: true,
            format: 'currency',
            precision: 2,
            font: {
                size: 12,
                weight: 700,
                family: mainFontFamily
            },
            color: mainColor,

        }
    }

    return linearGauge;
}

function setupCircularGauge(defaultValue, startValues, endValues, subvalues, typeLinear, title, interval) {

    if (!interval)
        interval = 100;

    if (!typeLinear)
        typeLinear = typesLinearGauge.Rectangle;

    var circularGauge = {
        scale: {
            startValue: startValues,
            endValue: endValues,
            tickInterval: interval,
            label: {
                useRangeColors: true
            }
        },
        rangeContainer: {
            palette: 'pastel',
            ranges: [
                { startValue: startValues, endValue: startValues + ((endValues * 30) / 100), color: '#f16f5c' },
                { startValue: startValues + ((endValues * 30) / 100), endValue: startValues + ((endValues * 60) / 100), color: 'orange' },
                { startValue: startValues + ((endValues * 60) / 100), endValue: endValues, color: mainColor }
            ]
        },
        valueIndicator: {
            type: typeLinear,
            color: mainColor
        },
        subvalues: subvalues,
        subvalueIndicator: {
            type: typeLinear,
            color: mainColor
        },
        size: {
            height: 200,
        },
        value: defaultValue,
        title: {
            text: title,
            font: {
                size: 16,
                color: mainColor,
                family: mainFontFamily
            }
        }
    }

    return circularGauge;

}

function setupChartLine(dataSource, fieldArgumentSerie, series, title, subtitle, heightLine) {
    var lineChart = {
        tooltip: {
            enabled: true,
            zIndex: 3,
            customizeTooltip: function (args) {
                return {
                    text: '$' + args.value.toFixed(2)
                };
            }
        },
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: fieldArgumentSerie,
            type: 'line', label: {
                customizeText: function (args) {
                    var FechaRegular = Date.parse(args.valueText + 'T00:00:00');
                    return new Date(FechaRegular).getDay() + '/' + new Date(FechaRegular).getMonth();
                },
                rotationAngle: 45
            }
        },
        "export": {
            enabled: false
        },
        margin: {
            bottom: 20
        },
        argumentAxis: {
            valueMarginsEnabled: false,
            discreteAxisDivisionMode: "crossLabels",
            grid: {
                visible: true
            },
            label: {
                customizeText: function (args) {
                    var FechaRegular = Date.parse(args.value + 'T00:00:00');
                    return mesesAnio[Date.parse(FechaRegular).getMonth()].Texto + ', ' + (Date.parse(FechaRegular).getDate());
                },
                overlappingBehavior: {
                    mode: 'rotate',
                    rotationAngle: 315,
                    staggeringSpacing: 1,
                },
                indentFromAxis: 5
            },
            tickInterval: {
                days: 1
            }
        },
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center",
            itemTextPosition: "bottom",
        },
        size: {
            height: heightLine
        },
        series: series,
        title: {
            text: title,
            subtitle: {
                text: subtitle
            }
        },
        valueAxis: {
            label: {
                format: 'currency'
            }
        },
    }

    return lineChart;
}


/*****************************************************************************************************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------C O N F I G U R A C I Ó N  C O L U M N A S----------------------------------------------------------------------------------------------------------------------------
*****************************************************************************************************************************************************************************************************************************************************************/

/*
    Establece el estado de una columna
    Parámetros
        column: Columna a establecer el estado.
        typeStateField: Estado a establecer en la columna.
*/
function setStateColumn(column, typeStateField) {

    switch (typeStateField) {
        case 'hide':
            column.visible = false;
            break;
        case 'disabled':
            column.disabled = true;
            break;
        case 'readOnly':
            column.readonly = true;
            break;
    }
    return column;
}

/*
    Permite la configuración de una columna de texto de un grid.
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        caption: Nombre de la columna del grid.
        isRequerid: Valor Booleano que indica si la columna es un dato obligatorio.
        width: Ancho de la columna.
        typeCharAllowed: Tipo de caracteres permitidos en la columna.
        specialsChar: Caracteres especiales que permitirá la columna. Solo aplica para los tipos de caracteres permitidos (OnlyLetterChar, OnlyNumbersChar, OnlyLettersNumberChar).
        typeStateField: Valor que indica cómo se establecerá la columna inicialmente
*/
function setupTextColumn(dataField, caption, width, allowFilter, alignment, isRequerid, typeCharAllowed, specialsChar, typeStateField) {
    var rulePattern = null;
    var messageText = CORE_VALIDATION("custom");
    var messageValidation = CORE_VALIDATION("required");
    messageValidation = messageValidation.replace("(nameControl)", caption);
    var column = null;
    var rulesValidation = [];
    if (isRequerid) {
        var messageValidation = CORE_VALIDATION("required");
        messageValidation = messageValidation.replace("(nameControl)", caption);
        rulesValidation.push({ type: 'required', message: messageValidation });
    }
    switch (typeCharAllowed) {
        case 'textOnly':
            rulePattern = getColumnPattern(typePatternColumn.OnlyLetters);
            break;
        case 'numberOnly':
            rulePattern = getColumnPattern(typePatternColumn.OnlyNumbers);
            break;
        case 'textAndNumberOnly':
            rulePattern = getColumnPattern(typePatternColumn.OnlyLettersNumber);
            break;
        case 'textAndCharactersOnly':
            rulePattern = getColumnPattern(typePatternColumn.OnlyLetterChar, specialsChar);
            break;
        case 'NumberAndCharactersOnly':
            rulePattern = getColumnPattern(typePatternColumn.OnlyNumbersChar, specialsChar);
            break;
        case 'textNumberAndCharactersOnly':
            rulePattern = getColumnPattern(typePatternColumn.OnlyLettersNumberChar, specialsChar);
            break;
    }
    if (rulePattern != null)
        rulesValidation.push(rulePattern);
    column = {
        dataField: dataField,
        caption: caption,
        allowEditing: true,
        width: width,
        visible: true,
        readonly: false,
        disabled: false,
        alignment: alignment ? alignment : textAlignment.Center,
        allowFiltering: allowFilter != null ? allowFilter : true,
        validationRules: rulesValidation,
    };
    column = setStateColumn(column, typeStateField);
    return column;
}

/*
    Configuración de una columna tipo check
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        caption: Nombre de la columna del grid.
        width: Ancho de la columna.
        typeStateField: Valor que indica cómo se establecerá la columna inicialmente.
*/
function setupCheckColumn(dataField, caption, width, typeStateField) {
    var column = null;
    column = {
        dataField: dataField,
        caption: caption,
        allowEditing: true,
        dataType: 'boolean',
        visible: true,
        readonly: false,
        disabled: false,
        width: width
    };
    column = setStateColumn(column, typeStateField);
    return column;
}

/*
    Configuración de una columna para ingresar la cédula
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        caption: Nombre de la columna del grid.
        isRequerid: Valor Booleano que indica si la columna es un dato obligatorio.
        width: Ancho de la columna.
        typeStateField: Valor que indica cómo se establecerá la columna inicialmente.
*/
function setupColumnCED(dataField, caption, width, isRequerid, typeStateField) {
    var rulePatternCED = getColumnPattern(typePatternColumn.CED);
    var messageValidationCED = CORE_VALIDATION("vced");
    messageValidationCED = messageValidationCED.replace("(nameControl)", caption);
    var column = null;
    var rulesValidation = [];

    if (isRequerid) {
        var messageValidation = CORE_VALIDATION("required");
        messageValidation = messageValidation.replace("(nameControl)", caption);
        rulesValidation.push({ type: 'required', message: messageValidation });
    }
    rulesValidation.push(rulePatternCED);
    rulesValidation.push({ type: 'custom', validationCallback: checkDNI, message: messageValidationCED });
    column = {
        dataField: dataField,
        caption: caption,
        width: ancho,
        allowEditing: true,
        visible: true,
        readonly: false,
        disabled: false,
        placeholder: ConstantsBehaivor.PLACEHOLDER_DNI,
        validationRules: rulesValidation
    };
    column = setStateColumn(column, typeStateField);
    return column;
}

/*
    Configuración de una columna de tipo fecha
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        caption: Nombre de la columna del grid.
        isRequerid: Valor Booleano que indica si la columna es un dato obligatorio.
        width: Ancho de la columna.
        minDate: Fecha Mínima.
        maxDate: Fecha Máxima.
        typeStateField: Valor que indica cómo se establecerá la columna inicialmente.
*/
function setupDateColumn(dataField, caption, width, allowFilter, isRequerid, minDate, maxDate, typeStateField) {
    var column = null;
    var rulesValidation = [];
    if (isRequerid) {
        rulesValidation.push(getValidationRule(typeValidation.Required, caption));
    }

    if (minDate != null || maxDate != null) {
        if (minDate == null) {
            minDate = Date.parse('1900-01-01');
        }

        if (maxDate == null) {
            maxDate = Date.parse('2900-01-01');
        }
        messageValidation = CORE_VALIDATION('range');
        messageValidation = messageValidation.replace("(nameControl)", caption);
        messageValidation = messageValidation.replace("(rangomenor)", minDate.toDateString());
        messageValidation = messageValidation.replace("(rangomayor)", maxDate.toDateString());
        rulesValidation.push({ type: 'range', min: Date.parse(minDate.toDateString()), max: Date.parse(maxDate.toDateString()), message: messageValidation });
    }
    column = {
        dataField: dataField,
        caption: caption,
        dataType: 'date',
        width: width,
        allowEditing: true,
        value: maxDate == null ? null : Date.parse(maxDate.toDateString()),
        visible: true,
        readonly: false,
        disabled: false,
        alignment: textAlignment.Center,
        allowFiltering: allowFilter != null ? allowFilter : true,
        placeholder: ConstantsBehaivor.PATTERN_SHORTDATE,
        format: ConstantsBehaivor.PATTERN_SHORTDATE,
        validationRules: rulesValidation
    };
    column = setStateColumn(column, typeStateField);
    return column;
}

/*
    Configuración de una columna con el formato de fecha y hora.
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        caption: Nombre de la columna del grid.
        width: Ancho de la columna.
        typeStateField: Valor que indica cómo se establecerá la columna inicialmente.
*/
function setupDateTimeColumn(dataField, caption, width, allowFilter, typeStateField) {
    var column = {
        dataField: dataField,
        caption: caption,
        dataType: 'date',
        width: width,
        allowEditing: true,
        alignment: textAlignment.Center,
        allowFiltering: allowFilter != null ? allowFilter : true,
        placeholder: ConstantsBehaivor.PATTERN_LONGDATE,
        format: ConstantsBehaivor.PATTERN_LONGDATE
    }
    column = setStateColumn(column, typeStateField);

    return column;
}

/*
    Configuración de una columna de tipo moneda
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        caption: Nombre de la columna del grid.
        isRequerid: Valor Booleano que indica si la columna es un dato obligatorio.
        align: Alineación del texto de la columna
        width: Ancho de la columna.
        typeStateField: Valor que indica cómo se establecerá la columna inicialmente.
*/
function setupMoneyColumn(dataField, caption, width, isRequerid, align, typeStateField) {
    var rulePatternNumber = getColumnPattern(typePatternColumn.DecimalNumber);
    var column = null;
    var rulesValidation = [];
    if (isRequerid) {
        var messageValidation = CORE_VALIDATION("required");
        messageValidation = messageValidation.replace("(nameControl)", caption);
        rulesValidation.push({ type: 'required', message: messageValidation });
    }
    rulesValidation.push(rulePatternNumber);
    column = {
        dataField: dataField,
        caption: caption,
        width: width,
        allowEditing: true,
        visible: true,
        readonly: false,
        disabled: false,
        alignment: textAlignment.Center,
        format: 'currency',
        precision: 2,
        alignment: align,
        dataType: 'number',
        validationRules: rulesValidation
    };

    column = setStateColumn(column, typeStateField);
    return column;
}

/*
    Configuración de una columna de tipo selección
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        caption: Nombre de la columna del grid.
        isRequerid: Valor Booleano que indica si la columna es un dato obligatorio.
        dataSource: Fuente de datos para alimentar el combo.
        displayText: Texto a desplegar en el combo.
        valueSelection: Valor de selección.
        width: Ancho de la columna.
        typeStateField: Valor que indica cómo se establecerá la columna inicialmente.
*/
function setupSelectionColumn(dataField, caption, dataSource, displayText, valueSelection, width, allowFilter, isRequerid, typeStateField) {
    var column = null;
    var rulesValidation = [];
    if (isRequerid) {
        var messageValidation = CORE_VALIDATION("required");
        messageValidation = messageValidation.replace("(nameControl)", caption);
        rulesValidation.push({ type: 'required', message: messageValidation });
    }
    column = {
        dataField: dataField,
        caption: caption,
        allowEditing: true,
        visible: true,
        readonly: false,
        disabled: false,
        alignment: textAlignment.Center,
        width: width,
        allowFiltering: allowFilter != null ? allowFilter : true,
        validationRules: rulesValidation,
        lookup: {
            dataSource: dataSource, valueExpr: valueSelection, displayExpr: displayText
        }
    };
    column = setStateColumn(column, typeStateField);
    return column;
}

/*
    Configuración de una columna de tipo booleano
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        caption: Nombre de la columna del grid.
        width: Ancho de la columna.
*/
function setupBoolColumn(dataField, caption, width, allowFilter) {
    var columna = {
        dataField: dataField,
        caption: caption,
        allowEditing: true,
        width: width,
        alignment: textAlignment.Center,
        allowFiltering: allowFilter != null ? allowFilter : true,
        cellTemplate: function (container, options) {
            var htmlColumna = "";
            if (options.value == true)
                htmlColumna = "<div style='color:green'> <i style='margin-right:3px; display:inline-block' class='fa " + iconosCore.check + "' /> <span style='display:inline-block; font-size:12px'>" + CORE_TAG('Yes') + "</span></div>";
            else
                htmlColumna = "<div style='color:red'> <i style='margin-right:3px; display:inline-block' class='fa " + iconosCore.times + "' /> <span style='display:inline-block; font-size:12px'>" + CORE_TAG('No') + "</span></div>";

            $(htmlColumna).appendTo(container);
        }
    }

    return columna;
}

/*
    Configuración de una columna de tipo booleano
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        caption: Nombre de la columna del grid.
        width: Ancho de la columna.
*/
function setupBoolOtherColumn(dataField, caption, width, textAprove, textCancel) {
    var columna = {
        dataField: dataField,
        caption: caption,
        width: width,
        alignment: textAlignment.Center,
        cellTemplate: function (container, options) {
            var htmlColumna = "";
            if (options.value == true)
                htmlColumna = "<div style='color:green'> <i style='margin-right:3px; display:inline-block' class='fa " + iconosCore.check + "' /> <span style='display:inline-block; font-size:12px'>" + textAprove + "</span></div>";
            else
                htmlColumna = "<div style='color:red'> <i style='margin-right:3px; display:inline-block' class='fa " + iconosCore.times + "' /> <span style='display:inline-block; font-size:12px'>" + textCancel + "</span></div>";

            $(htmlColumna).appendTo(container);
        }
    }

    return columna;
}

/*
    Configuración de una columna con un estilo predefinido.
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        caption: Nombre de la columna del grid.
        width: Ancho de la columna.
        cellTemplate: Función que devuelve el estilo que se desea dar a la columna
*/
function setupStyleColumn(dataField, caption, width, allowFilter, cellTemplate) {
    var columna = {
        dataField: dataField,
        caption: caption,
        width: width,
        alignment: textAlignment.Center,
        allowFiltering: allowFilter != null ? allowFilter : true,
        cellTemplate: function (container, options) {
            $(cellTemplate(options)).appendTo(container);
        }
    }

    return columna;
}

/*
    Configuración de una columna con acciones de Editar y Eliminar.
    Parámetros:
        actionEdit: Acción que se establece al editar un registro. Si la función no está definida, no se dibuja esta acción.
        accionDelete: Acción que se establece al eliminar un registro. Si la función no está definida, no se dibuja esta acción.
        presentationText: Modo de presentación de la acción
*/
function setupActionColumns(actionEdit, actionDelete, presentationText) {
    var column = {
        dataField: '',
        caption: CORE_TAG('Actions'),
        alignment: textAlignment.Center,
        width: 'auto',
        cellTemplate: function (container, options) {
            if (actionEdit) {
                var htmlEdit = "<a class='column-action-grid'>";
                switch (presentationText) {
                    case 'onlytext':
                        htmlEdit = htmlEdit + "<span>" + CORE_TAG('Edit') + "</span>";
                        break;
                    case 'onlyicon':
                        htmlEdit = htmlEdit + "<i title='" + CORE_TAG('Edit') + "' class='fa " + iconosCore.edit + "' />";
                        break;
                    case 'icontext':
                        htmlEdit = htmlEdit + "<i style='display:inline-block;' class='fa " + iconosCore.edit + "' /> <span style='display:inline-block'>" + CORE_TAG('Edit') + "</span>";
                        break;
                    default:
                        break;
                }
                htmlEdit = htmlEdit + "</a>";
                $(htmlEdit).on('click', function (e) {
                    actionEdit(options.data);
                }).appendTo(container);
            }
            if (actionDelete) {
                var htmlDelete = "<a class='column-action-grid'>";
                switch (presentationText) {
                    case 'onlytext':
                        htmlDelete = htmlDelete + "<span>" + CORE_TAG('Delete') + "</span>";
                        break;
                    case 'onlyicon':
                        htmlDelete = htmlDelete + "<i title='" + CORE_TAG('Delete') + "' class='fa " + iconosCore.minus_circle + "' />";
                        break;
                    case 'icontext':
                        htmlDelete = htmlDelete + "<i style='display:inline-block; margin-right:1px' class='fa " + iconosCore.minus_circle + "' /> <span style='display:inline-block'>" + CORE_TAG('Delete') + "</span>";
                        break;
                    default:
                        break;
                }
                htmlDelete = htmlDelete + "</a>";
                $(htmlDelete).on('click', function (e) {
                    actionDelete(options.data);
                }).appendTo(container);
            }
        }
    }

    return column;
}

/*
    Configuración de una columna de tipo botón.
    Parámetros:
        caption: Nombre de la columna del grid.
        text: Texto de la etiqueta del botón.
        presentationText: Modo de presentación del botón.
        icon: Ícono a mostrar en el botón.
        type: Tipo de botón a configurar.
        action: Acción que se ejecutará en el botón.
*/
function setupButtonColumn(caption, text, presentationText, icon, type, action) {
    var column = {
        caption: caption,
        dataField: '',
        alignment: textAlignment.Center,
        width: 'auto',
        cellTemplate: function (container, options) {
            var classcss = "button-blue";
            switch (type) {
                case 'default':
                    classcss = 'button-orange';
                    break;
                case 'success':
                    classcss = 'button-green'
                    break;
                case 'danger':
                    classcss = 'button-red'
                    break;
                default:
                    break;
            }
            var htmlButton = "<a class='column-button-grid " + classcss + "'>";
            switch (presentationText) {
                case 'onlytext':
                    htmlButton = htmlButton + "<span>" + text + "</span>";
                    break;
                case 'onlyicon':
                    htmlButton = htmlButton + "<i title='" + text + "' class='fa " + icon + "' />";
                    break;
                case 'icontext':
                    htmlButton = htmlButton + "<i style='display:inline-block;' class='fa " + icon + "' /> <span style='display:inline-block'>" + text + "</span>";
                    break;
                default:
                    break;
            }
            htmlButton = htmlButton + "</a>";
            $(htmlButton).on('click', function (e) {
                action(options);
            }).appendTo(container);
        }
    }

    return column;
}

/*
    Configuración de una columna de tipo imagen.
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        caption: Nombre de la columna del grid.
        width: Ancho de la columna.
        sizeImage: Tamaño de la imagen a mostrar
*/
function setupImageColumn(dataField, caption, width, sizeImage) {
    var column = {
        dataField: dataField,
        caption: caption,
        width: width,
        cellTemplate: function (container, options) {
            $("<img style='height:" + sizeImage + "px; width:" + sizeImage + "px' />")
            .attr("src", "images/" + options.value)
            .appendTo(container);
        }
    }

    return column;
}

/*
    Permite configurar un resumen en una columna especificada.
    Parámetros:
        dataField: Nombre del campo asociado a la fuente de datos que se carga en el grid.
        description: Descripción del resumen.
        format: Formato del valor del resumen.
        typeSummary: Tipo de resumen a configurar.
*/
function setupSummaryColumn(dataField, typeSummary, description, format) {
    var summary = {
        column: dataField, summaryType: typeSummary, customizeText: null, valueFormat: null
    };

    if (description) {
        summary.customizeText = function (e) {
            return description + ": " + e.value
        }
    }

    if (format) {
        summary.valueFormat = format;
    }

    return summary;
}
/*****************************************************************************************************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------V A L I D A C I O N E S-----------------------------------------------------------------------------------------------------------------------------------------------
*****************************************************************************************************************************************************************************************************************************************************************/

/*
    Obtiene el patrón de validación a una columna.
    Parámetros:
        typePatternColumn: Tipo de patrón a configuración de la columna.
        specialsChar: Caracteres especiales que la columna permite.
        presicion: Presicion de los números decimales.
*/
function getColumnPattern(typePatternColumn, specialsChar, presicion) {
    var rule = null;
    var vpatron = '';
    switch (typePatternColumn) {
        case "ID":
            var messageValidationCED = CORE_VALIDATION("vced");
            messageValidationCED = messageValidationCED + " debe seguir formato: " + ConstantsBehaivor.PLACEHOLDER_DNI;
            rule = { type: 'pattern', message: messageValidationCED, pattern: ConstantsBehaivor.PATTERN_CED }
            break;
        case "RUC":
            var messageValidationRUC = CORE_VALIDATION("vruc");
            messageValidationRUC = messageValidationRUC + " debe seguir formato: " + ConstantsBehaivor.PLACEHOLDER_RUC;
            rule = { type: 'pattern', message: messageValidationRUC, pattern: ConstantsBehaivor.PATTERN_RUC }
            break;
        case "TELF":
            var messageValidationPHONE = CORE_VALIDATION("vtelfcon");
            messageValidationPHONE = messageValidationPHONE + ConstantsBehaivor.PLACEHOLDER_PHONE;
            rule = { type: 'pattern', message: messageValidationPHONE, pattern: ConstantsBehaivor.PATTERN_PHONE }
            break;
        case "CELU":
            var messagesValidacionCELPHONE = CORE_VALIDATION("vcel");
            messagesValidacionCELPHONE = messagesValidacionCELPHONE + ConstantsBehaivor.PLACEHOLDER_CELLPHONE;
            rule = { type: 'pattern', message: messagesValidacionCELPHONE, pattern: ConstantsBehaivor.PLACEHOLDER_CELLPHONE }
            break;
        case "NDEC":
            var messageValidationDEC = CORE_VALIDATION("custom");
            messageValidationDEC = messageValidationDEC + ', verificar número decimal';

            if (presicion == null)
                presicion = ConstantsBehaivor.PRECISION_DECIMAL;
            var patronNumDec = '/^\d+(?:\.\d{0,' + presicion + '})$/;';

            rule = { type: 'pattern', message: messageValidationDEC, pattern: patronNumDec }
            break;
        case "NENT":
            var messageValidationINT = CORE_VALIDATION("custom");
            messageValidationINT = messageValidationINT + ', verificar número entero';
            rule = { type: 'pattern', message: messageValidationINT, pattern: "^[" + CORE_PATTERN_INT + "]+$" }
            break;
        case "NUMCTA":
            var messageValidationACCOUNT = CORE_VALIDATION("custom");
            messageValidationACCOUNT = messageValidationACCOUNT + ' debe seguir formato: ' + ConstantsBehaivor.PLACEHOLDER_ACCOUNT_NUMBER;
            rule = { type: 'pattern', message: messageValidationACCOUNT, pattern: ConstantsBehaivor.PATTERN_ACCOUNT_NUMBER }
            break;
        case "EMAIL":
            var messageValidationEMAIL = CORE_VALIDATION("custom");
            messageValidationEMAIL = messageValidationEMAIL + ', verificar email';
            rule = { type: 'email', message: messageValidationEMAIL }
            break;
        case "EXTC":
            var messageValidationEXT = CORE_VALIDATION("custom");
            messageValidationEXT = messageValidationEXT + ', verificar extensión';
            rule = { type: 'pattern', message: messageValidationEXT, pattern: "^[" + CORE_PATTERN_INT + "]+$" }
            break;
        case "TXTONLY":
            var messageValidationText = CORE_VALIDATION("custom");
            messageValidationText = messageValidationText + ', solo se acepta letras';
            vpatron = "^[" + CORE_PATTERN_LETTERS + "\\s]+$";
            rule = { type: 'pattern', message: messageValidationText, pattern: vpatron }
            break;
        case "TXTCHARONLY":
            var messageValidationChar = CORE_VALIDATION("custom");
            vpatron = "^[" + CORE_PATTERN_LETTERS + (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED + "\\s]+$";
            rule = { type: 'pattern', message: messageValidationChar, pattern: vpatron }
            break;
        case "NUMONLY":
            var messageValidationOnlyNUM = CORE_VALIDATION("custom");
            messageValidationOnlyNUM = messageValidationOnlyNUM + ', solo se acepta números';
            vpatron = "^[" + CORE_PATTERN_INT + "]+$";
            rule = { type: 'pattern', message: messageValidationOnlyNUM, pattern: vpatron }
            break;
        case "NUMCHARONLY":
            var messageValidationCHARNUM = CORE_VALIDATION("custom");
            vpatron = "^[" + CORE_PATTERN_INT + (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED + "]+$";
            rule = { type: 'pattern', message: messageValidationCHARNUM, pattern: vpatron }
            break;
        case "TXTNUMONLY":
            var messageValidationTEXTNUM = CORE_VALIDATION("custom");
            vpatron = "^[" + CORE_PATTERN_LETTERS + CORE_PATTERN_INT + "\\s]+$";
            rule = { type: 'pattern', message: messageValidationTEXTNUM, pattern: vpatron }
            break;
        case "TXTNUCHARMONLY":
            var messageValidationCHARTEXTNUM = CORE_VALIDATION("custom");
            vpatron = "^[" + CORE_PATTERN_LETTERS + CORE_PATTERN_INT + (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED + "\\s]+$";
            rule = { type: 'pattern', message: messageValidationCHARTEXTNUM, pattern: vpatron }
            break;
    }
    return rule;
}

/*
    Obtiene una regla de validación
    Parámetros:
        typeValidation: Tipo de Validación a asociar a la regla de validación.
        dataValidation: Datos necesarios para los tipos de validacion Range, stringLength.
        aditionalFunction: Función que se desea a ejecutar al validar
*/
function getValidationRule(typeValidation, fieldName, dataValidation, aditionalFunction) {
    var ruleValidation = null;
    var messageValidation = "";
    messageValidation = CORE_VALIDATION(typeValidation);
    messageValidation = messageValidation.replace('(nameControl)', fieldName);
    switch (typeValidation) {
        case "required":
            ruleValidation = { type: typeValidation, message: messageValidation };
            break;
        case "numeric":
            ruleValidation = { type: typeValidation, message: messageValidation };
            break;
        case "range":
            var rangos = dataValidation.split(',');
            var minimo = rangos[0];
            var maximo = rangos[1];
            messageValidation = messageValidation.replace("(rangomenor)", minimo);
            messageValidation = messageValidation.replace("(rangomayor)", maximo);
            ruleValidation = { type: typeValidation, min: minimo, max: maximo, message: messageValidation };
            break;
        case "rangeDate":
            var rangosD = dataValidation.split(',');
            var minimo = rangosD[0];
            var maximo = rangosD[1];
            messageValidation = messageValidation.replace("(rangomenor)", minimo);
            messageValidation = messageValidation.replace("(rangomayor)", maximo);
            ruleValidation = { type: typeValidation, min: new Date(minimo), max: new Date(maximo), message: messageValidation };
            break;
        case "compare":
            messageValidation = messageValidation.replace('(campocomparar)', dataValidation);
            ruleValidation = { type: typeValidation, comparisonTarget: aditionalFunction, message: messageValidation };
            break;
        case "custom":
            ruleValidation = { type: typeValidation, validationCallback: aditionalFunction, message: messageValidation };
            break;
        case "email":
            ruleValidation = { type: typeValidation, message: messageValidation };
            break;
        case "pattern":
            ruleValidation = { type: typeValidation, pattern: dataValidation, message: messageValidation };
            break;

        case "stringLength":
            var rango = dataValidation.split(',');
            var minimo = rango[0];
            var maximo = rango[1];
            messageValidation = messageValidation.replace("(longitudmenor)", minimo);
            messageValidation = messageValidation.replace("(longitudmayor)", maximo);
            ruleValidation = { type: typeValidation, min: minimo, max: maximo, message: messageValidation };
            break;
    }

    return ruleValidation;
}

/*
    Validación de campos obligatorios
    Parámetros:
        groupValidation: Grupo de Validación al que se asociará la validación.
        fieldName: Nombre del campo que se va a validar.
*/
function validateRequired(groupValidation, fieldName) {
    if (!fieldName)
        fieldName = '';
    var rulesValidation = [];
    rulesValidation.push(getValidationRule(typeValidation.Required, fieldName));
    var generalValidation = {
        validationGroup: groupValidation,
        validationRules: rulesValidation
    };
    return generalValidation;
}

function validateCompare(groupValidation, actionCompare, fieldName, fieldCompare) {
    var rulesValidation = [];
    rulesValidation.push(getValidationRule(typeValidation.Compare, fieldName, fieldCompare, actionCompare));
    var generalValidation = {
        validationGroup: groupValidation,
        validationRules: rulesValidation
    };
    return generalValidation;
}
/*
    Validación de un control de tipo text box.
    Parámetros:
        nameControl: Nombrel del control a asociar la validación.
        isRequerid: Indica si el control es obligatorio.
        groupValidation: Grupo de Validación que se va a asociar las validaciones.
        minLength: Cantidad mínima de caracteres permitidos en el texto.
        maxLength: Cantidad máxima de caracteres permitidos en el texto.
        typeCharAllowed: Tipos de carácteres permitidos en el texto.
        specialsChar: Caracteres especiales que se permitirán en el texto.
*/
function validateText(nameControl, isRequired, groupValidation, minLength, maxLength, typeCharAllowed, specialsChar) {
    var rulesValidation = [];
    if (isRequired == true)
        rulesValidation.push(validateRequired(groupValidation));

    var vpattern = '';
    switch (typeCharAllowed) {
        case this.typeCharAllowed.OnlyText:
            vpattern = "^[" + CORE_PATTERN_LETTERS + "\\s]+$";
            onlyTextAllowed(nameControl);
            break;
        case this.typeCharAllowed.OnlyNumber:
            vpattern = "^[" + CORE_PATTERN_INT + "\\s]+$";
            onlyNumberAllowed(nameControl);
            break;
        case this.typeCharAllowed.OnlyTextAndNumber:
            vpatron = "^[" + CORE_PATTERN_LETTERS + CORE_PATTERN_INT + "]+$";
            onlyNumberAndTextAllowed(nameControl);
            break;
        case this.typeCharAllowed.OnlyTextAndChar:
            vpatron = "^[" + CORE_PATTERN_LETTERS + (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED + "\\s]+$";
            onlyTextAndCharAllowed(nameControl, specialsChar);
            break;
        case this.typeCharAllowed.OnlyNumberAndChar:
            vpatron = "^[" + CORE_PATTERN_INT + (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED + "]+$";
            onlyNumberAndCharAllowed(nameControl, specialsChar);
            break;
        case this.typeCharAllowed.OnlyTextNumberAndChar:
            vpatron = "^[" + CORE_PATTERN_LETTERS + CORE_PATTERN_INT + (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED + "\\s]+$";
            onlyTextNumberAndCharAllowed(nameControl, specialsChar);
            break;
        default:
            break;
    }

    if (vpattern != '') {
        var message = CORE_VALIDATION(typeValidation.Custom);
        rulesValidation.push({ type: typeValidation.Pattern, pattern: vpattern, message: message })
    }

    if (!(minLength == null && maxLength == null)) {
        minLength = minLength == null ? 0 : minLength;
        maxLength = maxLength == null ? 9999 : maxLength;
        var patternMessage = '';
        patternMessage = CORE_VALIDATION(typeValidation.StringLength);
        patternMessage = patternMessage.replace('(minLength)', minLength);
        patternMessage = patternMessage.replace('(maxLength)', maxLength);
        var patternLength = "^." + "{" + minLength + "," + maxLength + "}$";
        rulesValidation.push({ type: typeValidation.Pattern, pattern: patternLength, message: patternMessage })
    }

    var generalValidation = {
        validationGroup: groupValidation,
        validationRules: rulesValidation
    }

    return generalValidation;
}

/*
    Valida la identificación de una persona en un campo de texto.
    Parámetros:
        isRequired: Indica si el campo es obligatorio.
        groupValidation: Grupo de validación a asociar las validaciones.
*/
function validateDNI(isRequired, groupValidation, fieldName) {
    if (!fieldName)
        fieldName = '';
    var rulesValidation = [];
    if (isRequired) {
        rulesValidation.push(getValidationRule(typeValidation.Required, fieldName));
    }
    var messageValidation = CORE_VALIDATION("vced");
    rulesValidation.push({
        type: typeValidation.Custom,
        validationCallback: checkDNI,
        message: messageValidation
    });
    rulesValidation.push({
        type: typeValidation.Pattern,
        pattern: ConstantsBehaivor.PATTERN_CED,
        message: messageValidation
    });

    var generalValidation = {
        validationGroup: groupValidation,
        validationRules: rulesValidation
    };

    return generalValidation;
}

function validateRUC(isRequired, groupValidation, fieldName) {
    if (!fieldName)
        fieldName = '';
    var rulesValidation = [];
    if (isRequired) {
        rulesValidation.push(getValidationRule(typeValidation.Required, fieldName));
    }
    var messageValidation = CORE_VALIDATION("vced");
    rulesValidation.push({
        type: typeValidation.Custom,
        validationCallback: checkRUC,
        message: messageValidation
    });
    rulesValidation.push({
        type: typeValidation.Pattern,
        pattern: ConstantsBehaivor.PATTERN_RUC,
        message: messageValidation
    });

    var generalValidation = {
        validationGroup: groupValidation,
        validationRules: rulesValidation
    };

    return generalValidation;
}

function validatePASS(isRequired, groupValidation, fieldName) {
    if (!fieldName)
        fieldName = '';
    var rulesValidation = [];
    if (isRequired) {
        rulesValidation.push(getValidationRule(typeValidation.Required, fieldName));
    }
    var messageValidation = CORE_VALIDATION("vpass");
    rulesValidation.push({
        type: typeValidation.Custom,
        validationCallback: checkPASS,
        message: messageValidation
    });

    var generalValidation = {
        validationGroup: groupValidation,
        validationRules: rulesValidation
    };

    return generalValidation;
}
function validateEmail(isRequired, groupValidation, fieldName) {
    var rulesValidation = [];
    if (isRequired)
        rulesValidation.push(getValidationRule(typeValidation.Required, fieldName))

    rulesValidation.push(getValidationRule(typeValidation.Email, fieldName));

    var generalValidation = {
        validationGroup: groupValidation,
        validationRules: rulesValidation
    };
    return generalValidation;
}

/*
    Verifica si la identificación de una persona es válida
*/
function checkDNI(params) {
    if (ValidatorBehavior.ValidateDNI(params.value))
        return true;
    else
        return false;
}

function checkRUC(params) {
    if (ValidatorBehavior.ValidateRUC(params))
        return true;
    else
        return false;
}


function checkPASS(params) {
    if (ValidatorBehavior.ValidatePassport(params))
        return true;
    else
        return false;
}

/*****************************************************************************************************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------M E N S A J E S   D E   I N T E R F A Z-------------------------------------------------------------------------------------------------------------------------------
*****************************************************************************************************************************************************************************************************************************************************************/

/*
    Muestra una notificación a la interfaz de tipo Error.
    Párametros: 
        message: Mensaje que se va a desplegar
*/
function showNotificationError(message, time, position) {
    notificationTime = time ? time : notificationTime;
    DevExpress.ui.notify({ message: decodeURI(message), type: 'error', displayTime: notificationTime, position: position });
}

/*
    Muestra una notificación a la interfaz de tipo Advertencia.
    Párametros: 
        message: Mensaje que se va a desplegar
*/
function showNotificationWarning(message, time, position) {
    notificationTime = time ? time : notificationTime;
    DevExpress.ui.notify({ message: decodeURI(message), type: 'warning', displayTime: notificationTime, position: position });
}

/*
    Muestra una notificación a la interfaz de tipo Exito.
    Párametros: 
        message: Mensaje que se va a desplegar
*/
function showNotificationSuccess(message, time, position) {
    notificationTime = time ? time : notificationTime;
    DevExpress.ui.notify({ message: decodeURI(message), type: 'success', displayTime: notificationTime, position: position });
}

/*
    Muestra una notificación a la interfaz de tipo Informativo.
    Párametros: 
        message: Mensaje que se va a desplegar
*/
function showNotificationInfo(message, time, position) {
    notificationTime = time ? time : notificationTime;
    DevExpress.ui.notify({ message: decodeURI(message), type: 'info', displayTime: notificationTime, position: position });
}

/*
    Despliega un mensaje de error.
    Parámetros:
        error: Error en html que se desplegará en la pantalla.
        title: Título del mensaje, si no está definido presenta un título predefinido.
        action: Acción a ejecutar después de desplegar el mensaje.
*/
function showServerErrorMessage(error, title, action) {
    try {
        //var posini = error.responseText.search("<title>") + 7;
        //var posfin = error.responseText.search("</title>");
        messageError = error.responseJSON;
        if (messageError.contains('ExceptionMessage') == true) {
            var posinimsg = messageError.search("<ExceptionMessage>") + 18;
            var posfinmsg = messageError.search("</ExceptionMessage>");
            messageError = messageError.slice(posinimsg, posfinmsg);
        }

        DevExpress.ui.dialog.alert({
            message: decodeURI(messageError),
            title: title ? title : CORE_TAG('ErrorMessage'),
            toolbarItems: [{
                text: CORE_TAG('Button_Accept'), onClick: function () {
                    if (action) {
                        action(messageError);
                    }
                    $(".dx-popup-title").removeClass("title-message-error");
                }
            }]
        });

        $(".dx-popup-title").addClass("title-message-error");
        $(".dx-popup-title").removeClass("title-message-success");
        $(".dx-popup-title").removeClass("title-message-warning");
        $(".dx-popup-title").removeClass("title-message-question");
        $(".dx-popup-title").removeClass("title-message-info");

    } catch (e) {
        showErrorMessage(CORE_TAG('ErrorMessage'), CORE_MESSAGE('CannotReadError'));
    }

}

/*
    Despliega un mensaje de error.
    Parámetros:
        error: Error en html que se desplegará en la pantalla.
        title: Título del mensaje, si no está definido presenta un título predefinido.
        action: Acción a ejecutar después de desplegar el mensaje.
*/
function showErrorMessage(title, message, action) {

    DevExpress.ui.dialog.alert({
        message: decodeURI(message),
        title: title ? title : CORE_TAG('ErrorMessage'),
        toolbarItems: [{
            text: CORE_TAG('Button_Accept'), onClick: function () {
                if (action) {
                    action();
                }
                $(".dx-popup-title").removeClass("title-message-error");
            }
        }]
    });

    $(".dx-popup-title").addClass("title-message-error");
    $(".dx-popup-title").removeClass("title-message-success");
    $(".dx-popup-title").removeClass("title-message-warning");
    $(".dx-popup-title").removeClass("title-message-question");
    $(".dx-popup-title").removeClass("title-message-info");
}

/*
    Despliega un mensaje informartivo.
    Parámetros:
        message: Mensaje que se desplegará en la pantalla.
        title: Título del mensaje, si no está definido presenta un título predefinido.
        action: Acción a ejecutar después de desplegar el mensaje.
*/
function showSimpleMessage(title, message, action, sound) {

    if (sound && sound == true) {
        var audio = document.getElementById('notificationMessage');
        audio.play();
    }

    DevExpress.ui.dialog.alert({
        message: decodeURI(message),
        title: title,
        toolbarItems: [{
            text: CORE_TAG('Button_Accept'), onClick: function () {
                if (action)
                    action();

                $(".dx-popup-title").removeClass("title-message-info");
            }
        }]
    });

    $(".dx-popup-title").addClass("title-message-info");
    $(".dx-popup-title").removeClass("title-message-success");
    $(".dx-popup-title").removeClass("title-message-error");
    $(".dx-popup-title").removeClass("title-message-question");
    $(".dx-popup-title").removeClass("title-message-warning");
}

/*
    Despliega un mensaje de advertencia.
    Parámetros:
        message: Mensaje que se desplegará en la pantalla.
        title: Título del mensaje, si no está definido presenta un título predefinido.
        action: Acción a ejecutar después de desplegar el mensaje.
*/
function showWarningMessage(title, message, action, sound) {

    if (sound && sound == true) {
        var audio = document.getElementById('notificationMessage');
        audio.play();
    }
    DevExpress.ui.dialog.alert({
        message: decodeURI(message),
        title: title,
        toolbarItems: [{
            text: CORE_TAG('Button_Accept'), onClick: function () {
                if (action)
                    action();

                $(".dx-popup-title").removeClass("title-message-warning");
            }
        }]
    });

    $(".dx-popup-title").addClass("title-message-warning");
    $(".dx-popup-title").removeClass("title-message-success");
    $(".dx-popup-title").removeClass("title-message-error");
    $(".dx-popup-title").removeClass("title-message-question");
    $(".dx-popup-title").removeClass("title-message-info");
}

/*
    Despliega un mensaje de éxito.
    Parámetros:
        message: Mensaje que se desplegará en la pantalla.
        title: Título del mensaje, si no está definido presenta un título predefinido.
        action: Acción a ejecutar después de desplegar el mensaje.
*/
function showSuccessMessage(title, message, action, sound) {

    if (sound && sound == true) {
        var audio = document.getElementById('notificationMessage');
        audio.play();
    }

    DevExpress.ui.dialog.alert({
        message: decodeURI(message),
        title: title,
        toolbarItems: [{
            text: CORE_TAG('Button_Accept'), onClick: function () {
                if (action)
                    action();

                $(".dx-popup-title").removeClass("title-message-success");
            }
        }]
    });

    $(".dx-popup-title").addClass("title-message-success");
    $(".dx-popup-title").removeClass("title-message-warning");
    $(".dx-popup-title").removeClass("title-message-error");
    $(".dx-popup-title").removeClass("title-message-question");
    $(".dx-popup-title").removeClass("title-message-info");
}

/*
    Despliega un mensaje de pregunta.
    Parámetros:
        message: Mensaje que se desplegará en la pantalla.
        title: Título del mensaje, si no está definido presenta un título predefinido.
        action: Acción a ejecutar después de desplegar el mensaje.
*/
function showQuestionMessage(title, message, actionYes, actionNo, sound) {

    if (sound && sound == true) {
        var audio = document.getElementById('notificationMessage');
        audio.play();
    }

    var customDialog = DevExpress.ui.dialog.custom({
        title: title,
        message: message == null ? '' : decodeURI(message),
        toolbarItems: [
            { text: CORE_TAG('Yes'), onClick: function () { return CORE_TAG('Yes') } },
            { text: CORE_TAG('No'), onClick: function () { return CORE_TAG('No') } },
        ]
    });
    customDialog.show().done(function (dialogResult) {
        if (dialogResult == CORE_TAG('Yes')) {
            actionYes();
            $(".dx-popup-title").removeClass("title-message-question");
        }
        else {
            if (actionNo)
                actionNo();

            $(".dx-popup-title").removeClass("title-message-question");
            return;
        }
    });

    $(".dx-popup-title").addClass("title-message-question");
    $(".dx-popup-title").removeClass("title-message-success");
    $(".dx-popup-title").removeClass("title-message-error");
    $(".dx-popup-title").removeClass("title-message-warning");
    $(".dx-popup-title").removeClass("title-message-info");

    return customDialog;
}

/*
    Permite mostrar el mensaje en la validación de campos
    Parámetros:
        title: 'Título del mensaje a desplegar',
        ruleValidation: 'Regla que se ha validado en la pantalla (result.brokenRules[0])'
*/
function showMessageValidation(title, ruleValidation) {
    showWarningMessage(title, CORE_MESSAGE('ErrorData'), function () {
        var nameControlVal = ruleValidation.validator.element()[0].id;
        var typeControl = nameControlVal.substring(0, 2);
        switch (typeControl) {
            case 'tx':
                $('#' + nameControlVal).dxTextBox('instance').focus();
                break;
            case 'cm':
                $('#' + nameControlVal).dxSelectBox('instance').focus();
                break;
            default:
                break;
        }
    });
}

function showException(message, stack, parameters, addFunction) {
    showErrorMessage(CORE_TAG('SystemError'), CORE_MESSAGE('SystemError'), function () {
        if (addFunction)
            addFunction();
    });
}

/*****************************************************************************************************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------F U N C I O N E S   D E   C O R E-------------------------------------------------------------------------------------------------------------------------------
*****************************************************************************************************************************************************************************************************************************************************************/

/*
    Obtiene el tamaño de un archivo
    Parámetros:
        controlName: Nombre del control.
        index: Índice
*/
function getSizeFile(controlName, index) {
    var control = $(controlName);
    var size = control.get(0).files[index].size;
    return size;
}

/*
    Obtiene la descripción de un catálogo dado su código.
    Parámetros:
        codeCatalog: Código de catálogo.
        listCatalog: Lista de catálogos donde se va a consultar.
*/
function getDescriptionCatalog(codeCatalog, listCatalog) {
    var descriptionCatalog = codeCatalog;

    if (!codeCatalog)
        return;

    for (var x = 0; x < listCatalog.length; x++) {
        if (listCatalog[x].CodigoDetalleCatalogo == codeCatalog) {
            descriptionCatalog = listCatalog[x].NombreCorto;
            x = listCatalog.length;
        }
    }

    return descriptionCatalog;
}

/*
    Convierte un código de caracter en una cadena.
    Parámetros:
        charCodes: Código del caracter.
*/
function convertCharCodeToString(charCodes) {
    charCodes = charCodes.split(',');
    var cadena = "";

    for (var i = 0; i < charCodes.length; i++) {
        cadena = cadena + String.fromCharCode(charCodes[i]);
    }
    return cadena;
}

/*
    Cambia el valor de una propiedad de un control determinado.
    Parámetros:
        nameControl: Nombre del control que se desea cambiar a la propiedad.
        typeControl: Tipo de control.
        nameProperty: Nombre de la propiedad del control que se desea cambiar.
        valueProperty: Nuevo valor de la propiedad.
*/
function changePropertyControl(nameControl, typeControl, nameProperty, valueProperty) {
    switch (typeControl) {
        case this.typeControl.TextBox:
            $(nameControl).dxTextBox('option', nameProperty, valueProperty);
            break;
        case this.typeControl.NumberBox:
            $(nameControl).dxNumberBox('option', nameProperty, valueProperty);
            break;
        case this.typeControl.SelectBox:
            $(nameControl).dxSelectBox('option', nameProperty, valueProperty);
            break;
        case this.typeControl.DateBox:
            $(nameControl).dxDateBox('option', nameProperty, valueProperty);
            break;
        case this.typeControl.TextArea:
            $(nameControl).dxTextArea('option', nameProperty, valueProperty);
            break;
        case this.typeControl.Button:
            $(nameControl).dxButton('option', nameProperty, valueProperty);
            break;
        case this.typeControl.Check:
            $(nameControl).dxCheckBox('option', nameProperty, valueProperty);
            break;
        case this.typeControl.DataGrid:
            $(nameControl).dxDataGrid('option', nameProperty, valueProperty);
            break;
        case this.typeControl.TagBox:
            $(nameControl).dxTagBox('option', nameProperty, valueProperty);
            break;
        case this.typeControl.Switch:
            $(nameControl).dxSwitch('option', nameProperty, valueProperty);
            break;
        case this.typeControl.Popup:
            $(nameControl).dxPopup('option', nameProperty, valueProperty);
            break;
        case this.typeControl.ListBox:
            $(nameControl).dxList('option', nameProperty, valueProperty);
            break;
    }
}

/*
    Obtiene el detalle de un catálogo establecido.
    Parámetros:
        codeCatalog: Código del catálogo del que se desea el detalle.
        listCatalog: Lista de los catálogos.
*/
function getCatalogDetail(codeCatalog, listCatalog) {
    if (listCatalog.length == 0) {
        return [];
    }
    for (var i = 0; i < listCatalog.length; i++) {
        if (listCatalog[i].CodigoCatalogo == codeCatalog) {
            return listCatalog[i].DetalleCatalogo;
        }
    }
}

/*
    Obtiene el valor de la etiqueta de un XML
    Parámetros:
        tag: Etiqueta del XML a obtener el valor.
        strXml: XML donde se va a obtener el valor.
*/
function getValueXml(tag, strXml) {
    var posini = strXml.search("<" + tag + ">");
    if (posini >= 0)
        posini = posini + (tag.length + 2);

    var posfin = strXml.search("</" + tag + ">");
    var result = strXml.slice(posini, posfin);

    return result;
}

/*
    Valida si existe alguna palabra o frase dentro de una cadena de caracteres.
    Parámetros:
        wordSearch: Frase o palabra que se desea buscar
*/
String.prototype.contains = function (wordSearch) {
    var valueString = this;
    var pos = valueString.search(wordSearch);
    if (pos > -1)
        return true;

    return false;
}

/*
    Muestra el panel de Carga al ejecutar alguna acción.
    Parámetros:
        message: Mensaje a mostrar en el panel.
*/
function initProcess(message) {
    if ($('#loadPanel').dxLoadPanel('instance')) {
        if (!message)
            message = CORE_MESSAGE('LoadingData');
        $('#loadPanel').dxLoadPanel('option', 'message', message);
        $('#loadPanel').dxLoadPanel('instance').show();
    }
}

/*
    Oculta el panel de Carga.
*/
function stopProcess() {
    $('#loadPanel').dxLoadPanel('option', 'visible', false);
}

/*
    Establece el estado en que se mostrará un control, ya sea oculto, desabilitado o de solo lectura.
    Parámetros: 
        optionsControl: opciones del control que se desea establecer el estado.
        typeStateField: estado a establecer al control.
*/
function setStateField(optionsControl, typeStateField) {
    try {
        switch (typeStateField) {
            case this.stateControl.hide:
                optionsControl.visible = false;
                break;
            case this.stateControl.disabled:
                optionsControl.disabled = true;
                break;
            case this.stateControl.readOnly:
                optionsControl.readOnly = true;
                break;
        }
    } catch (e) {
        showErrorMessage(CORE_TAG('ErrorMessage'), e);
    }

}

function restrictionTextControl(nameControl, typeCharWritten, allowSpace, specialsChar) {
    var character = typeCharWritten;
    $('#' + nameControl).unbind("keypress");
    $('#' + nameControl).keypress(function (evt) {
        if (allowSpace == false) {
            key = evt.keyCode || evt.which;
            if (key == 32)
                return false;
        }
        switch (character) {
            case typeCharAllowed.OnlyText:
                key = evt.keyCode || evt.which;
                tecla = String.fromCharCode(key).toLowerCase();
                var ban = false;
                if (key == 8)
                    ban = true;
                var patron = new RegExp("^[" + CORE_PATTERN_LETTERS + "\\s]$")
                if (patron.test(tecla) || ban == true) {
                    return true;
                } else {
                    return false;
                }
                break;
            case typeCharAllowed.OnlyNumber:
                var charCode = (evt.which) ? evt.which : event.keyCode;

                var cadena = String.fromCharCode(charCode);
                var ban = false;
                var banTeclaEspecial = false;
                if (charCode == 8 || charCode == 13) {
                    banTeclaEspecial = true;
                }
                if ((charCode > 47 && charCode < 58) || banTeclaEspecial)
                    ban = true;
                return ban;
                break;
            case typeCharAllowed.OnlyTextAndNumber:
                var key = evt.keyCode || evt.which;
                var banSoloLetras = true;
                tecla = String.fromCharCode(key).toLowerCase();
                var patron = new RegExp("^[" + CORE_PATTERN_LETTERS + "\\s]$")
                if (!patron.test(tecla))
                    banSoloLetras = false;
                var banSoloNumeros = false;
                var charCode = (evt.which) ? evt.which : event.keyCode
                if (charCode > 47 && charCode < 58)
                    banSoloNumeros = true;
                if (banSoloLetras || banSoloNumeros)
                    return true;
                else
                    return false;
                break;
            case typeCharAllowed.OnlyTextAndChar:
                var banSoloLetrasYCarateresEspeciales = true;
                var key = evt.keyCode || evt.which;

                var tecla = String.fromCharCode(key).toLowerCase();
                var caracterEspecial = (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED;
                var ban = true;
                if (caracterEspecial.indexOf(tecla) == -1)
                    ban = false;
                var patron = new RegExp("^[" + CORE_PATTERN_LETTERS + caracterEspecial + "\\s]$")
                if (patron.test(tecla)) {
                    return true;
                } else {
                    return false;
                }
                break;
            case typeCharAllowed.OnlyNumberAndChar:
                key = evt.keyCode || evt.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var ban = true;
                var caracterEspecial = (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED;
                var patron = new RegExp("^[" + caracterEspecial + "]$");
                if (!patron.test(tecla))
                    ban = false;
                var banSoloNumeros = false;
                var charCode = (evt.which) ? evt.which : event.keyCode
                if (charCode > 47 && charCode < 58)
                    banSoloNumeros = true;
                if (ban || banSoloNumeros)
                    return true;
                else
                    return false;
                break;
            case typeCharAllowed.OnlyTextNumberAndChar:
                var key = evt.keyCode || evt.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var caracterEspecial = (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED;
                var banSoloLetrasYCarateresEspeciales = true;
                var patron = new RegExp("^[" + CORE_PATTERN_LETTERS + caracterEspecial + "\\s]$")

                if (!patron.test(tecla))
                    banSoloLetrasYCarateresEspeciales = false;
                var banSoloNumeros = false;
                var charCode = (evt.which) ? evt.which : event.keyCode
                if (charCode > 47 && charCode < 58)
                    banSoloNumeros = true;
                if (banSoloLetrasYCarateresEspeciales || banSoloNumeros)
                    return true;
                else
                    return false;
                break;
            default:
                break;
        }
    });
}

/*
    Restringe el uso de espacios en el control establecido.
    Parámetros:
        nameControl: Nombre del control donde se establece la restricción.
*/
function withoutSpace(nameControl) {
    $('#' + nameControl).on('keypress', function (evt) {
        key = evt.keyCode || evt.which;
        if (key == 32)
            return false;
    });
}
/*
    Permite sólo letras en el control determinado.
    Parámetros:
        nameControl: Nombre del control donde se establece la restricción
*/
function onlyTextAllowed(nameControl) {
    $('#' + nameControl).keyPress(function (evt) {
        key = evt.keyCode || evt.which;
        tecla = String.fromCharCode(key).toLowerCase();
        var ban = false;
        if (key == 8)
            ban = true;
        var patron = new RegExp("^[" + CORE_PATTERN_LETTERS + "\\s]$")
        if (patron.test(tecla) || ban == true) {
            return true;
        } else {
            return false;
        }

    });
}

/*
    Permite sólo números en el control determinado.
    Parámetros:
        nameControl: Nombre del control donde se establece la restricción
*/
function onlyNumberAllowed(nameControl, evt) {
    $('#' + nameControl).keypress(function (evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode;

        var cadena = String.fromCharCode(charCode);
        var ban = false;
        var banTeclaEspecial = false;
        if (charCode == 8 || charCode == 13) {
            banTeclaEspecial = true;
        }
        if ((charCode > 47 && charCode < 58) || banTeclaEspecial)
            ban = true;
        return ban;
    });

}

/*
    Permite letras y números en el control determinado.
    Parámetros:
        nameControl: Nombre del control donde se establece la restricción
*/
function onlyNumberAndTextAllowed(nameControl) {
    $('#' + nameControl).on('keypress', function (evt) {
        var key = evt.keyCode || evt.which;
        var banSoloLetras = true;
        tecla = String.fromCharCode(key).toLowerCase();
        var patron = new RegExp("^[" + CORE_PATTERN_LETTERS + "\\s]$")
        if (!patron.test(tecla))
            banSoloLetras = false;
        var banSoloNumeros = false;
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 47 && charCode < 58)
            banSoloNumeros = true;
        if (banSoloLetras || banSoloNumeros)
            return true;
        else
            return false;
    });
    $('#' + nameControl).on('keydown', function (evt) {
        var charCode = 0;
        if (window.event) {
            return true;
        } else {
            var key = evt.which;
            var banSoloLetras = true;
            tecla = String.fromCharCode(key).toLowerCase();
            var patron = new RegExp("^[" + CORE_PATTERN_LETTERS + "\\s]$")
            if (!patron.test(tecla))
                banSoloLetras = false;
            var banSoloNumeros = false;
            charCode = evt.which;

            var banTeclaEspecial = false;
            if (charCode == 8 || charCode == 13) {
                banTeclaEspecial = true;
            }

            if (charCode > 47 && charCode < 58)
                banSoloNumeros = true;
            if (banSoloLetras || banSoloNumeros || banTeclaEspecial)
                return true;
            else
                return false;
        }

    });
}

/*
    Permite letras y carácteres especiales en el control determinado.
    Parámetros:
        nameControl: Nombre del control donde se establece la restricción.
        specialsChar: Caracteres especiales que se permitirán en el control.
*/
function onlyTextAndCharAllowed(nameControl, specialsChar) {
    $('#' + nameControl).on('keypress', function (evt) {
        var banSoloLetrasYCarateresEspeciales = true;
        var key = evt.keyCode || evt.which;

        var tecla = String.fromCharCode(key).toLowerCase();
        var caracterEspecial = (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED;
        var ban = true;
        if (caracterEspecial.indexOf(tecla) == -1)
            ban = false;
        var patron = new RegExp("^[" + CORE_PATTERN_LETTERS + caracterEspecial + "\\s]$")
        if (patron.test(tecla)) {
            return true;
        } else {
            return false;
        }

    });

    $('#' + nameControl).on('keydown', function (evt) {
        var charCode = 0;
        if (window.event) {
            return true;
        } else {
            var banSoloLetrasYCarateresEspeciales = true;
            charCode = evt.which;
            var banTeclaEspecial = false;
            if (charCode == 8 || charCode == 13) {
                banTeclaEspecial = true;
            }
            var tecla = String.fromCharCode(charCode).toLowerCase();
            var caracterEspecial = (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED;
            var ban = true;
            if (caracterEspecial.indexOf(tecla) == -1)
                ban = false;
            var patron = new RegExp("^[" + CORE_PATTERN_LETTERS + caracterEspecial + "\\s]$")
            if (patron.test(tecla) || banTeclaEspecial) {
                return true;
            } else {
                return false;
            }
        }
    });
}

/*
    Permite números y carácteres especiales en el control determinado.
    Parámetros:
        nameControl: Nombre del control donde se establece la restricción.
        specialsChar: Caracteres especiales que se permitirán en el control.
*/
function onlyNumberAndCharAllowed(nameControl, specialsChar) {
    $('#' + nameControl).on('keypress', function (evt) {
        key = evt.keyCode || evt.which;
        var tecla = String.fromCharCode(key).toLowerCase();
        var ban = true;
        var caracterEspecial = (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED;
        var patron = new RegExp("^[" + caracterEspecial + "]$");
        if (!patron.test(tecla))
            ban = false;
        var banSoloNumeros = false;
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 47 && charCode < 58)
            banSoloNumeros = true;
        if (ban || banSoloNumeros)
            return true;
        else
            return false;
    });


    $('#' + nameControl).on('keydown', function (evt) {
        var charCode = 0;
        if (window.event) {
            return true;
        } else {
            charCode = evt.which;
            var banTeclaEspecial = false;
            if (charCode == 8) {
                banTeclaEspecial = true;
            }
            var tecla = String.fromCharCode(charCode).toLowerCase();
            var ban = true;
            var caracterEspecial = (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED;
            var patron = new RegExp("^[" + caracterEspecial + "]$");
            if (!patron.test(tecla))
                ban = false;
            var banSoloNumeros = false;

            if (charCode > 47 && charCode < 58)
                banSoloNumeros = true;
            if (ban || banSoloNumeros || banTeclaEspecial)
                return true;
            else
                return false;
        }
    });
}

/*
    Permite letras, números y caracteres especiales en el control determinado.
    Parámetros:
        nameControl: Nombre del control donde se establece la restricción.
        specialsChar: Caracteres especiales que se permitirán en el control.
*/
function onlyTextNumberAndCharAllowed(nameControl, specialsChar) {
    $('#' + nameControl).on('keypress', function (evt) {
        var key = evt.keyCode || evt.which;
        var tecla = String.fromCharCode(key).toLowerCase();
        var caracterEspecial = (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED;
        var banSoloLetrasYCarateresEspeciales = true;
        var patron = new RegExp("^[" + CORE_PATTERN_LETTERS + caracterEspecial + "\\s]$")

        if (!patron.test(tecla))
            banSoloLetrasYCarateresEspeciales = false;
        var banSoloNumeros = false;
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 47 && charCode < 58)
            banSoloNumeros = true;
        if (banSoloLetrasYCarateresEspeciales || banSoloNumeros)
            return true;
        else
            return false;
    });

    $('#' + nameControl).on('keydown', function (evt) {
        var charCode = 0;
        if (window.event) {
            return true;
        } else {
            charCode = evt.which;
            var banTeclaEspecial = false;
            if (charCode == 8) {
                banTeclaEspecial = true;
            }
            var tecla = String.fromCharCode(key).toLowerCase();
            var caracterEspecial = (specialsChar == null ? '' : specialsChar) + CORE_PATTERN_SPECIALS_ALLOWED;
            var banSoloLetrasYCarateresEspeciales = true;
            var patron = new RegExp("^[" + CORE_PATTERN_LETTERS + caracterEspecial + "\\s]$")

            if (!patron.test(tecla))
                banSoloLetrasYCarateresEspeciales = false;
            var banSoloNumeros = false;
            var charCode = (evt.which) ? evt.which : event.keyCode
            if (charCode > 47 && charCode < 58)
                banSoloNumeros = true;
            if (banSoloLetrasYCarateresEspeciales || banSoloNumeros || banTeclaEspecial)
                return true;
            else
                return false;
        }
    });
}

/*
    Prepara la barra de herramientas para ser configurada en una pantalla.
*/
function initToolBar() {
    var toolBar = $('.toolbar');
    toolBar.attr('style', 'display:block');
    toolBar.empty();
}

/*
    Cambia el estado de un ítem de la barra de herramientas.
    Parámetros:
        toolBarButton: Ítem de la barra de herramientas a cambiar el estado.
        stateToolBar: Estado al que queremos cambiar el ítem. (Habilitado, Visible, Deshabilitado, Oculto).
*/
function changeStateToolBar(toolBarButton, stateToolBar, textButton) {
    var idItemToolBar = textButton ? toolBarButton + textButton.trim() : toolBarButton;
    var itemToolBar = document.getElementById(idItemToolBar);
    switch (stateToolBar) {
        case this.stateToolBar.enabled:
            itemToolBar.classList.add('toolbar-item');
            itemToolBar.classList.remove('toolbar-item-disabled');
            break;
        case this.stateToolBar.visible:
            itemToolBar.classList.add('toolbar-item');
            itemToolBar.classList.remove('toolbar-item-hidden');
            break;
        case this.stateToolBar.disabled:
            itemToolBar.classList.remove('toolbar-item');
            itemToolBar.classList.add('toolbar-item-disabled');
            break;
        case this.stateToolBar.hidden:
            itemToolBar.classList.remove('toolbar-item');
            itemToolBar.classList.add('toolbar-item-hidden');
            break;
        default:
            break;
    }
}

/*
    Configura un botón en la barra de herramientas de la aplicación.
    Parámetros:
        toolBarButton: Tipo de Botón que se va a crear en la barra de herramientas.
        action: Acción que se detonará al hacer click en el botón.
        textButton: Texto Personalizado para un botón [Opcional].
        iconButton: Ícono Personalizado para un botón [Opcional].
*/
function setupButtonToolBar(toolBarButton, action, stateToolBar, textButton, iconButton) {
    var toolBar = $('.toolbar');
    var itemToolBar = document.createElement('a');
    var iconToolBar = document.createElement('i');
    var textToolBar = document.createElement('span');
    itemToolBar.id = toolBarButton;
    itemToolBar.className = 'toolbar-item';
    iconToolBar.classList.add('fa');
    switch (toolBarButton) {
        case this.toolBarButtons.New:
            iconToolBar.classList.add(iconosCore.file_o);
            textToolBar.innerText = CORE_TAG('Button_New');
            break;
        case this.toolBarButtons.Edit:
            iconToolBar.classList.add(iconosCore.edit);
            textToolBar.innerText = CORE_TAG('Button_Edit');
            break;
        case this.toolBarButtons.Save:
            iconToolBar.classList.add(iconosCore.floppy);
            textToolBar.innerText = CORE_TAG('Button_Save');
            break;
        case this.toolBarButtons.Print:
            iconToolBar.classList.add(iconosCore.print);
            textToolBar.innerText = CORE_TAG('Button_Print');
            break;
        case this.toolBarButtons.Search:
            iconToolBar.classList.add(iconosCore.search);
            textToolBar.innerText = CORE_TAG('Button_Search');
            break;
        case this.toolBarButtons.Send:
            iconToolBar.classList.add(iconosCore.send_o);
            textToolBar.innerText = CORE_TAG('Button_Send');
            break;
        case this.toolBarButtons.Cancel:
            iconToolBar.classList.add(iconosCore.times);
            textToolBar.innerText = CORE_TAG('Button_Cancel');
            break;
        case this.toolBarButtons.Export:
            iconToolBar.classList.add(iconosCore.file_excel_o);
            textToolBar.innerText = CORE_TAG('Button_Export');
            break;
        case this.toolBarButtons.Accept:
            iconToolBar.classList.add(iconosCore.check);
            textToolBar.innerText = CORE_TAG('Button_Accept');
            break;
        case this.toolBarButtons.Other:
            itemToolBar.id = itemToolBar.id + textButton.trim();
            iconToolBar.classList.add(iconButton);
            textToolBar.innerText = textButton;
            break;
        default:
            break;
    }

    itemToolBar.appendChild(iconToolBar);
    itemToolBar.appendChild(textToolBar);

    toolBar.append(itemToolBar);

    itemToolBar.onclick = function (evt) {
        if (action && this.className != 'toolbar-item-disabled') {
            action();
        }
    };

    if (stateToolBar) {
        changeStateToolBar(toolBarButton, stateToolBar, textButton);
    }

}

function searchArray(data, filterExpr, valueExpr, searchOperation) {
    if (!searchOperation)
        searchOperation = searchOperations.Equal;

    var dataArray = new DevExpress.data.DataSource({
        paginate: false,
        store: data,
        requireTotalCount: true
    });

    dataArray.searchExpr(filterExpr);
    dataArray.searchOperation(searchOperation);
    dataArray.searchValue(valueExpr);

    dataArray.reload();

    return dataArray._items;
}

/*
    Permite agregar o disminuir valores de segundos, minutos, horas, días, meses o años a una fecha determinada
    Parámetros:
        datePart: Parte de la fecha que se quiere agregar o disminuir el valor.
        number: Número a agregar a la fecha
*/
Date.prototype.addDate = function (datePart, number) {
    var newDate = new Date(this.toDateString());
    switch (datePart) {
        case dateParts.Seconds:
            newDate = newDate.setSeconds(newDate.getSeconds() + number);
            break;
        case dateParts.Minutes:
            newDate = newDate.setMinutes(newDate.getMinutes() + number);
            break;
        case dateParts.Hours:
            newDate = newDate.setHours(newDate.getHours() + number);
            break;
        case dateParts.Days:
            newDate = newDate.setDate(newDate.getDate() + number);
            break;
        case dateParts.Months:
            newDate = newDate.setMonth(newDate.getMonth() + number);
            break;
        case dateParts.Years:
            newDate = newDate.setYear(newDate.getYear() + number);
            break;
        default:
            break;
    }

    newDate = new Date(newDate);

    return newDate;
}

String.prototype.withoutAccent = function () {
    var valueString = this;
    valueString = valueString.replace('á', 'a');
    valueString = valueString.replace('é', 'e');
    valueString = valueString.replace('í', 'i');
    valueString = valueString.replace('ó', 'o');
    valueString = valueString.replace('ú', 'u');
    valueString = valueString.replace('Á', 'A');
    valueString = valueString.replace('É', 'E');
    valueString = valueString.replace('Í', 'I');
    valueString = valueString.replace('Ó', 'O');
    valueString = valueString.replace('Ú', 'U');
    valueString = valueString.replace('à', 'a');
    valueString = valueString.replace('è', 'e');
    valueString = valueString.replace('ì', 'i');
    valueString = valueString.replace('ò', 'o');
    valueString = valueString.replace('ù', 'u');
    valueString = valueString.replace('À', 'A');
    valueString = valueString.replace('È', 'E');
    valueString = valueString.replace('Ì', 'I');
    valueString = valueString.replace('Ò', 'O');
    valueString = valueString.replace('Ù', 'U');

    return valueString;
}

String.prototype.withoutSpecialLetter = function () {
    var valueString = this;
    valueString = valueString.replace('ñ', 'n');
    valueString = valueString.replace('Ñ', 'N');

    return valueString;
}
/*
    Dibuja una barra de progreso en el html
*/
HTMLElement.prototype.progressBar = function (startValue, progress, endValue, startTag, endTag) {
    this.innerHTML = "";
    this.style.paddingBottom = '5px';
    var div = document.createElement('div');
    div.style.width = '95%';
    div.style.margin = '10px';
    div.style.marginBottom = '10px';
    //Obtener progreso
    var widthProgreso = (progress * 100) / endValue;

    if (widthProgreso >= 100)
        widthProgreso = 99.5;

    var divTag = document.createElement('div');
    divTag.style.display = 'block';
    divTag.style.textAlign = 'left';

    var spanTag = document.createElement('span');
    spanTag.innerHTML = startTag + "<span style='font-size:15px'>$" + progress.toFixed(2) + "</span>";
    spanTag.style.fontSize = '12px';
    spanTag.style.color = mainColor;
    spanTag.style.fontWeight = 'bold';

    var spanEnd = document.createElement('span');
    spanEnd.innerHTML = endTag + "<span style='font-size:15px'>$" + endValue.toFixed(2) + "</span>";
    spanEnd.style.fontSize = '12px';
    spanEnd.style.fontWeight = 'bold';
    spanEnd.style.color = '#474453';
    spanEnd.style.cssFloat = 'right';

    divTag.appendChild(spanTag);
    divTag.appendChild(spanEnd);

    var divMain = document.createElement('div');
    divMain.style.height = '18px';
    divMain.style.border = '1px solid #888888';
    divMain.style.borderRadius = '10px';
    divMain.style.backgroundColor = "#474453";
    divMain.style.boxShadow = '2px 4px 3px #888888';
    var divProgress = document.createElement('div');
    var spanProgress = document.createElement('span');
    spanProgress.style.fontSize = '13px';
    spanProgress.style.top = '-5px';
    spanProgress.style.fontFamily = 'Kalinga';
    spanProgress.style.fontWeight = 'bold';
    spanProgress.style.position = 'relative';
    spanProgress.style.color = 'white';
    divProgress.style.height = '14px';
    divProgress.style.textAlign = 'center';
    divProgress.style.marginTop = '1px';
    divProgress.style.marginBottom = '2px';
    divProgress.style.marginLeft = '1px';
    divProgress.style.verticalAlign = 'middle';
    divProgress.style.backgroundColor = progress <= endValue ? mainColor : negativeColor;
    divProgress.style.borderRadius = '10px';
    divProgress.style.transition = 'width 1s ease-in';
    divProgress.style.width = '0%';
    setTimeout(function () {
        divProgress.style.width = widthProgreso + '%';
        setTimeout(function () {
            spanProgress.innerText = widthProgreso < 99.5 ? widthProgreso.toFixed(2) + '%' : 100.00 + '%';
        }, 500)
    }, 1000)

    divProgress.appendChild(spanProgress);

    divMain.appendChild(divProgress);
    div.appendChild(divTag);
    div.appendChild(divMain);

    this.appendChild(div);
}

HTMLElement.prototype.InfoCards = function (dataSource, rows, allowCollapse, colorBody, showButton, iconButton, actionButton) {
    try {
        this.innerHTML = '';
        if (!allowCollapse)
            allowCollapse = false;
        for (var i = 0; i < dataSource.length; i++) {
            var divCard = document.createElement('div');
            divCard.classList.add('cards');
            divCard.classList.add('cards-expand');
            divCard.id = 'cards' + i;
            var divData = document.createElement('div');
            divData.className = 'cards-expand';
            divData.id = 'data' + i;
            if (allowCollapse == true) {
                var expandir = document.createElement('i');
                expandir.classList.add('fa');
                expandir.classList.add('fa-chevron-up');
                expandir.id = 'exp_' + i;
            }
            var divInfo = document.createElement('div');
            divInfo.id = 'info' + i;
            for (var j = 0; j < rows.length; j++) {
                var divGroup = document.createElement('div');
                var labelData = document.createElement('label')
                var spanData = document.createElement('span');

                if (divGroup) {
                    divGroup.style.display = 'block';
                    divGroup.style.textAlign = 'justify';
                    divGroup.id = 'group' + j;
                }
                if (dataSource[i][rows[j].dataField]) {
                    spanData.innerText = dataSource[i][rows[j].dataField];
                    if (rows[j].isTitle && rows[j].isTitle == true) {
                        spanData.className = 'title-cards';
                        spanData.id = 'title_' + i;
                        if (allowCollapse == true) {
                            spanData.onclick = function (e) {
                                var id = e.srcElement.id.split('_')[1];
                                if ($('#data' + id).hasClass('cards-expand') == true) {
                                    $('#data' + id).removeClass('cards-expand');
                                    $('#data' + id).addClass('cards-collapse');
                                    $('#exp_' + id).removeClass('fa-chevron-up');
                                    $('#exp_' + id).addClass('fa-chevron-down');
                                    setTimeout(function () {
                                        $('#info' + id).hide();
                                        $('#button' + id).hide();
                                    }, 300);

                                } else {
                                    $('#info' + id).show();
                                    $('#button' + id).show();
                                    $('#data' + id).addClass('cards-expand');
                                    $('#data' + id).removeClass('cards-collapse');
                                    $('#exp_' + id).addClass('fa-chevron-up');
                                    $('#exp_' + id).removeClass('fa-chevron-down');
                                }
                            }
                            spanData.appendChild(expandir);
                        }
                        divData.appendChild(spanData);
                    }
                    else if (rows[j].isImage && rows[j].isImage == true) {
                        if (dataSource[i][rows[j].dataField]) {
                            var img = document.createElement('img');
                            img.setAttribute('src', './images/' + dataSource[i][rows[j].dataField]);
                            img.className = 'cards-image'
                            divGroup.appendChild(img);
                        }
                    }
                    else {
                        labelData.innerText = rows[j].caption + ': ';
                        labelData.className = 'tag-data-cards';
                        spanData.className = 'info-data-cards';
                        divGroup.appendChild(labelData);
                        divGroup.appendChild(spanData);
                    }
                }
                divInfo.appendChild(divGroup);
            }
            divData.appendChild(divInfo);
            divCard.appendChild(divData);
            if (showButton == true) {
                var divButton = document.createElement('div');
                var aButton = document.createElement('a');
                var iButton = document.createElement('i');
                iButton.classList.add('fa');
                iButton.classList.add(iconButton);
                aButton.appendChild(iButton);
                aButton.id = 'button_' + i;
                aButton.onclick = function (e) {
                    var id = e.currentTarget.id.split('_')[1];
                    if (actionButton) {
                        var agency = dataSource[id];
                        actionButton(agency);
                    }
                }
                divButton.className = 'cards-button';
                divButton.id = 'button' + i;
                divButton.appendChild(aButton);
                divCard.appendChild(divButton);
            }
            this.appendChild(divCard);
        }
    } catch (e) {
        showErrorMessage('', 'Error al crear los info cards, por favor comuníquese con el Administrador');
    }

}

HTMLElement.prototype.Draggable = function (text, icon, action) {

    this.innerHTML = '';
    var idContent = '#' + this.id;
    this.classList.add('content-drag');
    this.classList.add('inactive');
    var draggable = document.createElement('div');
    draggable.classList.add('draggable');
    draggable.id = 'draggableControl';
    var textDrag = document.createElement('p');
    textDrag.innerText = text;
    textDrag.classList.add('innerText');
    draggable.appendChild(textDrag);

    if (icon) {
        var iconDrag = document.createElement('img');
        iconDrag.src = 'images/' + icon + '.png';
        draggable.appendChild(iconDrag);
    }

    var droppable = document.createElement('div');
    droppable.classList.add('droppable');
    droppable.id = 'droppableControl';

    $(draggable).draggable({
        containment: idContent,
        scroll: false,
        axis: "x",
    });

    $(draggable).mouseup(function (event) {
        var left = parseInt(event.currentTarget.style.left.replace('px', ''));
        if (left < 150) {
            this.style.left = '0px';
        }
    })

    $(droppable).droppable({
        drop: function (event, ui) {
            if (action)
                action();
        },
    });

    this.appendChild(draggable);
    this.appendChild(droppable);
}

HTMLElement.prototype.TileView = function (dataSource) {
    this.innerHTML = '';
    for (var i = 0; i < dataSource.length; i++) {
        if (i % 2 == 0) {
            var divFilaTile = document.createElement('div');
            divFilaTile.style.display = 'block';
            divFilaTile.style.marginTop = '0px';
        }
        var divTile = document.createElement('div');
        divTile.style.width = '46%';
        divTile.style.height = '100%';
        divTile.style.backgroundColor = dataSource[i]["background"];
        divTile.style.cursor = 'pointer';
        divTile.style.display = 'inline-block';
        divTile.style.margin = '5px';
        divTile.id = 'tile_' + i;
        var divData = document.createElement('div');
        divData.style.display = 'block';
        divData.style.marginTop = '5px';
        divData.style.marginBottom = '5px';
        var imgTile = document.createElement('img');
        imgTile.style.height = '74px';
        imgTile.style.width = '74px';
        imgTile.style.marginTop = '6px';
        imgTile.src = 'images/' + dataSource[i]["image"];
        var spanTile = document.createElement('span');
        spanTile.style.color = 'white';
        spanTile.style.display = 'block';
        spanTile.style.fontSize = '14px';
        spanTile.style.position = 'relative';
        spanTile.style.textTransform = 'none';
        spanTile.style.fontFamily = 'Tahoma';
        spanTile.innerText = dataSource[i]["texto"];
        divData.appendChild(imgTile);
        divData.appendChild(spanTile);
        if (dataSource[i]["badget"] != undefined) {
            var divBadge = document.createElement('div');
            divBadge.style.height = '25px';
            divBadge.style.width = '25px';
            divBadge.style.borderRadius = '100%';
            divBadge.style.backgroundColor = 'deeppink';
            divBadge.style.cssFloat = 'right';
            divBadge.style.marginTop = '-100px';
            divBadge.style.marginRight = '8px';
            divBadge.style.opacity = '0.4';
            if (i > 0) {
                divBadge.style.position = 'relative';
                divBadge.style.top = '100px';
            }
            var spanBadge = document.createElement('span');
            spanBadge.style.fontSize = '18px';
            spanBadge.style.color = 'white';
            spanBadge.style.fontWeight = 'bold';
            spanBadge.innerText = dataSource[i]["badget"];
            divBadge.appendChild(spanBadge);
            divData.appendChild(divBadge);
        }
        divTile.appendChild(divData);
        divTile.onclick = function (e) {
            var id = e.currentTarget.id.split('_')[1];
            e.currentTarget.style.border = "3px solid #017aff";
            for (var j = 0; j < dataSource.length; j++) {
                if (j != id) {
                    var tile = document.getElementById('tile_' + j);
                    if (tile)
                        tile.style.border = 'none';
                }
            }
            if (dataSource[id]["accion"])
                dataSource[id]["accion"](e);
        }
        divTile.onmousedown = function (e) {
            e.currentTarget.style.boxShadow = '2px 6px 3px #26252C';
        }
        divTile.onmouseup = function (e) {
            e.currentTarget.style.boxShadow = 'none';
        }
        divFilaTile.appendChild(divTile);
        this.appendChild(divFilaTile);
    }
}




function orderBy(arrayBase, field, typeOrder) {
    var desc = false;
    if (typeOrder == typeOrders.Descendent)
        desc = true;
    var newArray = new DevExpress.data.DataSource({
        requireTotalCount: true,
        sort: { getter: field, desc: desc },
        store: { type: 'array', data: arrayBase },
        paginate: false
    })

    return newArray;
}

String.prototype.getCode = function (numberChar) {
    var code = '';
    var listWords = this.split(" ");
    if (listWords.length > 0 && numberChar > 0) {
        listWords.forEach(function (element, index, myArray) {
            if (numberChar <= element.length)
                code = code + element.substring(0, numberChar);
        });
    }

    return code
}