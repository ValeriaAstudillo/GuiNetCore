function ConstantsBehaivor(){	
}
/***************
***placeholder*****
*** aquie se debe cambiar por pais las etiquetas de los holders
***************/
//Formato del Numero de cuenta
ConstantsBehaivor.PLACEHOLDER_ACCOUNT_NUMBER = '13 dígitos (#############)';
//Formato del número Telefonico  Convencional
ConstantsBehaivor.PLACEHOLDER_PHONE = "8 dígitos (########)";
//Formato del número celular
ConstantsBehaivor.PLACEHOLDER_CELLPHONE = "9 dígitos (9########)";
//Formato de la identificación Natural
ConstantsBehaivor.PLACEHOLDER_DNI = "8 dígitos (########)";
//Formato de la identificacion Jurídica
ConstantsBehaivor.PLACEHOLDER_RUC = "11 dígitos (###########)";
//Formato hora 
ConstantsBehaivor.PLACEHOLDER_TIME = '24H(23:59)';
//Moneda
ConstantsBehaivor.SYMBOLMONEY = 'S/. ';

//Place Holder para campos Seleccion
ConstantsBehaivor.PLACEHOLDER_SELECTION_FIELD = "Seleccione una opción";
//Place Holder para campos email
ConstantsBehaivor.PLACEHOLDER_EMAIL_FIELD = "ejemplo@correo.com";


/*************
***PATRONES***
** aqui se debe cambiar el formato d eingreso de los campos según el pais
**************/
ConstantsBehaivor.PATTERN_ACCOUNT_NUMBER = '^([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])+$'; 
ConstantsBehaivor.PATTERN_CELLPHONE = '^(9[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])+$'
ConstantsBehaivor.PATTERN_PHONE = '^([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])+$';
ConstantsBehaivor.PATTERN_CED = '^([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])+$';
ConstantsBehaivor.PATTERN_RUC = '^([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])+$';
// el separador debe coincidir con el ConstantsBehaivor.SEPARADOR_FORMATO_FECHA que está abajo
ConstantsBehaivor.PATTERN_SHORTDATE = 'yyyy/MM/dd';
ConstantsBehaivor.PATTERN_LONGDATE = 'yyyy/MM/dd HH:mm:ss';
ConstantsBehaivor.PATTERN_TIME = 'HH:mm';



/*************
***SEPARADORES***
** aqui se debe cambiar el formato d eingreso de los campos según el pais
**************/
ConstantsBehaivor.SEPARATOR_DATE = "/";
ConstantsBehaivor.SEPARATOR_PHONE = "-";
ConstantsBehaivor.INIT_NUMBER_CELLPHONE = "9";

/****************
***LONGITUDES****
*****************/

//Longitud del código de la ubicación geográfica 2
ConstantsBehaivor.CODE_LENGTH_UG2 = 2;
//Longitud del código de la ubicación geográfica 3
ConstantsBehaivor.CODE_LENGTH_UG3 = 8;
//Longitud del número teléfonico
ConstantsBehaivor.LENGTH_PHONE = 8;
ConstantsBehaivor.LENGTH_EXTENTION_PHONE = 8;
//Longitud del número  celular
ConstantsBehaivor.LENGTH_CELLPHONE = 9;
//Longitud del número de identificacion Natural
ConstantsBehaivor.LENGTH_DNI = 8;
//Longitud del número de identificacion Júridica
ConstantsBehaivor.LENGTH_RUC = 11;
//Longitud del número de identificacion Extrangera
ConstantsBehaivor.LENGTH_PASSPORT = 16;
//Longitud Numero Cuenta
ConstantsBehaivor.LENGTH_ACCOUNT_NUMBER = 13;
//Longitud del número de identificacion()
//ConstantsBehaivor.LONGITUD_CEX = 9;

ConstantsBehaivor.LENGTH_MIN_PWD = 6;
ConstantsBehaivor.LENGTH_MAX_PWD = 16;

ConstantsBehaivor.PRECISION_DECIMAL = 2;


/*************
***VECTORES***
**************/
ConstantsBehaivor.DAYS_WEEK = new Array('Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado');
ConstantsBehaivor.MONTHS_YEAR = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');