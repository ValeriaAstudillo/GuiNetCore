/* Enumerado tipos de widgets*/
export var flwTypeWidgets = [
    {Description: 'ACCORDION', SaveCode: 'ACCORDION'},
    {Description: 'ACTIONSHEET', SaveCode: 'ACTIONSHEET'},
    {Description: 'BUTTON', SaveCode: 'BUTTON'},
    {Description: 'CHECKBOX', SaveCode: 'CHECKBOX'},
    {Description: 'DATAGRID', SaveCode: 'DATAGRID'},
    {Description: 'DATE', SaveCode: 'DATE'},
    {Description: 'DEFAULTBUTTON', SaveCode: 'DEFAULTBUTTON'},
    {Description: 'FLOATBUTTON', SaveCode: 'FLOATBUTTON'},
    {Description: 'GALLERY', SaveCode: 'GALLERY'},
    {Description: 'LISTBOX', SaveCode: 'LISTBOX'},
    {Description: 'MAP', SaveCode: 'MAP'},
    {Description: 'NUMBERBOX', SaveCode: 'NUMBERBOX'},
    {Description: 'POPOVER', SaveCode: 'POPOVER'},
    {Description: 'POPUP', SaveCode: 'POPUP'},
    {Description: 'RADIOGROUP', SaveCode: 'RADIOGROUP'},
    {Description: 'SELECTBOX', SaveCode: 'SELECTBOX'},
    {Description: 'SUMMARYVALIDATION', SaveCode: 'SUMMARYVALIDATION'},
    {Description: 'SWITCH', SaveCode: 'SWITCH'},
    {Description: 'TAB', SaveCode: 'TAB'},
    {Description: 'TEXTAREA', SaveCode: 'TEXTAREA'},
    {Description: 'TEXTBOX', SaveCode: 'TEXTBOX'},
    {Description: 'TOOLBAR', SaveCode: 'TOOLBAR'}
]

/* Enumerado de los tipos de textbox que se pueden configurar */
export var flwTypeTextBox = [
    {Description: 'CONTRASEÑA', SaveCode: 'PASSWORD'},
    {Description: 'DNI', SaveCode: 'DNI'},
    {Description: 'EMAIL', SaveCode: 'EMAIL'},
    {Description: 'NUMERO TELEFONICO', SaveCode: 'PHONE'},
    {Description: 'NUMERO CELULAR', SaveCode: 'MOBILE'},
    {Description: 'PASAPORTE', SaveCode: 'PASSPORT'},
    {Description: 'POR DEFECTO', SaveCode: 'DEFAULT'},
    {Description: 'RUC', SaveCode: 'RUC'}
]

/* Enumerado para indicar el formato de letra*/
export var flwTypeLetter = [
    {Description: 'NINGUNO', SaveCode: 'undefined'},
    {Description: 'MAYÚSCULAS', SaveCode: 'upper'},
    {Description: 'MINÚSCULAS', SaveCode: 'lower'},
    {Description: 'NORMAL', SaveCode: 'normal'},
]

/* Enumerado para indicar cómo se mostrará un control en su configuración inicial*/
export var flwStateControl = [
    {Description: 'NINGUNO', SaveCode: 'undefined'},
    {Description: 'DESHABILITADO', SaveCode: 'disabled'},
    {Description: 'OCULTO', SaveCode: 'hide'},
    {Description: 'SOLO LECTURA', SaveCode: 'readOnly'},
]

/* Enumerado para indicar el tipo de caracteres permitidos*/
export var flwTypeCharAllowed = [
    {Description: 'NINGUNO', SaveCode: 'undefined'},
    {Description: 'SOLO TEXTO', SaveCode: 'OnlyText'},
    {Description: 'SOLO NUMEROS', SaveCode: 'OnlyNumber'},
    {Description: 'SOLO TEXTO Y NUMEROS', SaveCode: 'OnlyTextAndNumber'},
    {Description: 'SOLO TEXTO Y CARACTERES', SaveCode: 'OnlyTextAndChar'},
    {Description: 'SOLO NUMEROS Y CARACTERES', SaveCode: 'OnlyNumberAndChar'},
    {Description: 'SOLO TEXTO, NUMEROS Y CARACTERES', SaveCode: 'OnlyTextNumberAndChar'},
    {Description: 'TODOS LOS CARACTERES', SaveCode: 'AllChar'},
]

/* Enumerado de los caracteres especiales */
export var flwSpecialsChar = [
    {Description: 'NINGUNO', SaveCode: 'undefined'},
    {Description: 'ASTERISCO', SaveCode: 'ASTERISK'},
    {Description: 'EXCLAMACION CERRADA', SaveCode: 'CLOSE_EXCLAMATION'},
    {Description: 'NUMERAL', SaveCode: 'NUMERAL'},
    {Description: 'PARENTESIS IZQUIERDO', SaveCode: 'LEFT_PAARENTHESIS'},
    {Description: 'PARENTESIS DERECHO', SaveCode: 'RIGHT_PARENTHESIS'},
    {Description: 'DOLAR', SaveCode: 'DOLAR'},
    {Description: 'PORCENTAJE', SaveCode: 'PERCENTAJE'},
    {Description: 'AMPERSAND', SaveCode: 'AMPERSAND'},
    {Description: 'IGUAL', SaveCode: 'EQUAL'},
    {Description: 'MAS', SaveCode: 'PLUS'},
    {Description: 'ARROBA', SaveCode: 'AT'},
    {Description: 'PREGUNTA ABIERTA', SaveCode: 'OPEN_QUESTION_MARK'},
    {Description: 'PREGUNTA CERRADA', SaveCode: 'CLOSE_QUESTION_MARK'},
    {Description: 'COMA', SaveCode: 'COMA'},
    {Description: 'DOS PUNTOS', SaveCode: 'TWO_POINT'},
    {Description: 'MENOR QUE', SaveCode: 'LESS_THAN'},
    {Description: 'MAYOR QUE', SaveCode: 'GREATER_THAN'},
    {Description: 'GUION BAJO', SaveCode: 'DOWN_DASH'},
    {Description: 'PUNTO', SaveCode: 'DOT'},
    {Description: 'PUNTO Y COMA', SaveCode: 'DOT_COMMA'},
    {Description: 'EQUIVALENTE', SaveCode: 'EQUIVALENCE'},
    {Description: 'BARRA VERTICAL', SaveCode: 'VERTUCAL_BAR'},
    {Description: 'ESPACIO', SaveCode: 'SPACE'},
]

/* Enumerado de tipos de botones que se pueden configurar*/
export var flwClassButtons = [
    {Description: 'ACEPTAR', SaveCode: 'Accept'},
    {Description: 'BUSCAR', SaveCode: 'Search'},
    {Description: 'CANCELAR', SaveCode: 'Cancel'},
    {Description: 'ELIMINAR', SaveCode: 'Delete'},
    {Description: 'ENVIAR', SaveCode: 'Send'},
    {Description: 'GUARDAR', SaveCode: 'Save'},
    {Description: 'IMPRIMIR', SaveCode: 'Print'},
    {Description: 'NUEVO', SaveCode: 'New'},    
    {Description: 'OTRO', SaveCode: 'Other'},
    {Description: 'REFRESCAR', SaveCode: 'Refresh'}
]

export var flwTypeButtons = [
    {Description: 'ATRAS', SaveCode: 'Back'},
    {Description: 'NORMAL', SaveCode: 'Normal'},    
    {Description: 'PELIGRO', SaveCode: 'Danger'},
    {Description: 'POR DEFECTO', SaveCode: 'Default'},
    {Description: 'SATISFACTORIO', SaveCode: 'Success'}
]

/* Enumerado de íconos */

export var flwIcons = [
    {Description: 'NINGUNO', TagCode: '', SaveCode: 'undefined'},
    {Description: 'ABAJO', TagCode: 'fa fa-caret-square-o-down', SaveCode: 'down'},
    {Description: 'ADN', TagCode: 'fa fa-adn', SaveCode: 'adn'},
    {Description: 'ADVERTENCIA', TagCode: 'fa fa-warning', SaveCode: 'warning'},
    {Description: 'AJUSTAR', TagCode: 'fa fa-adjust', SaveCode: 'adjust'},
    {Description: 'ALEATORIO', TagCode: 'fa fa-random', SaveCode: 'random'},
    {Description: 'ALINEACION CENTRO', TagCode: 'fa fa-align-center', SaveCode: 'align_center'},
    {Description: 'ALINEACION DERECHA', TagCode: 'fa fa-align-right', SaveCode: 'align_right'},
    {Description: 'ALINEACION IZQUIERDA', TagCode: 'fa fa-align-left', SaveCode: 'align_left'},
    {Description: 'ALINEACION JUSTIFICADA', TagCode: 'fa fa-align-justify', SaveCode: 'align_justify'},
    {Description: 'ALTO DE LETRA', TagCode: 'fa fa-text-height', SaveCode: 'text_height'},
    {Description: 'AMBULANCIA', TagCode: 'fa fa-ambulance', SaveCode: 'ambulance'},
    {Description: 'ANCHO DE LETRA', TagCode: 'fa fa-text-width', SaveCode: 'text_width'},
    {Description: 'ANCLA', TagCode: 'fa fa-anchor', SaveCode: 'anchor'},
    {Description: 'ANDROID', TagCode: 'fa fa-android', SaveCode: 'android'},
    {Description: 'ANGULO ABAJO', TagCode: 'fa fa-angle-down', SaveCode: 'angle_down'},
    {Description: 'ANGULO ARRIBA', TagCode: 'fa fa-angle-up', SaveCode: 'angle_up'},
    {Description: 'ANGULO DERECHA', TagCode: 'fa fa-angle-right', SaveCode: 'angle_right'},
    {Description: 'ANGULO IZQUIERDA', TagCode: 'fa fa-angle-left', SaveCode: 'angle_left'},
    {Description: 'APAGAR', TagCode: 'fa fa-power-off', SaveCode: 'power_off'},
    {Description: 'APPLE', TagCode: 'fa fa-apple', SaveCode: 'apple'},
    {Description: 'TACHUELA', TagCode: 'fa fa-thumb-tack', SaveCode: 'thumb_tack'},

]

/* Enumerado de valores de switch */

export var flwDefaultValueSwitch = [
    {Description: 'ACTIVADO (ON)', SaveCode: true},
    {Description: 'DESACTIVADO (OFF)', SaveCode: false},
]

/* Enumerado de tamaño de botones flotantes */

export var flwSizeFloatButtons = [
    {Description: 'PEQUEÑO', SaveCode: 'small'},
    {Description: 'NORMAL', SaveCode: 'normal'},
]

/* Enumerado de tipo de botones flotantes */

export var flwTypeFloatButtons = [
    {Description: 'POR DEFECTO', SaveCode: 'default'},
    {Description: 'BLANCO', SaveCode: 'white'},
]

/* Enumerado de posición de controles */

export var flwPositionControls = [
    {Description: 'ARRIBA', SaveCode: 'Top'},
    {Description: 'ABAJO', SaveCode: 'Bottom'},
    {Description: 'DERECHA ', SaveCode: 'Right'},
    {Description: 'IZQUIERDA', SaveCode: 'Left'},
]

/* Enumerado de modo de selección */

export var flwModeSelection = [
    {Description: 'NINGUNO', SaveCode: 'None'},
    {Description: 'UNO', SaveCode: 'Single'},
    {Description: 'MULTIPLE', SaveCode: 'Multiple'},
]

/* Enumerado de tipo de resumen de un grid */

export var flwTypeSummaryGrid = [
    {Description: 'TOTAL', SaveCode: 'Count'},
    {Description: 'SUMA', SaveCode: 'Sum'},
    {Description: 'MÍNIMO', SaveCode: 'Min'},
    {Description: 'MÁXIMO', SaveCode: 'Max'},
    {Description: 'PROMEDIO', SaveCode: 'Average'},
]

/* Enumerado de tipo de selección de un grid */

export var flwTypeSelectionGrid = [
    {Description: 'NINGUNO', SaveCode: 'None'},
    {Description: 'UNO', SaveCode: 'Single'},
    {Description: 'MULTIPLE', SaveCode: 'Multiple'},
    {Description: 'TODOS', SaveCode: 'AllowSelect'},
]
