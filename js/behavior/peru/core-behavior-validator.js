
/*******
CLASE PARA VALIDACIONES ESPECIFICAS DE PERU
******/

function ValidatorBehavior() {

};

/*
*PROPIEDADES ESTATICAS
*/

function DTOTypeID(code, isNatural, isMain, length) {
    this.codeTypeID = code;
    this.isNaturalTypeID = isNatural;
    this.isMainTypeID = isMain;
    this.lengthTypeID = length;
};

//Preparando tipo de Identificaciones
ValidatorBehavior.listTypeID = [new DTOTypeID("CED", true, true, ConstantsBehaivor.LENGTH_DNI)];
ValidatorBehavior.listTypeID.push(new DTOTypeID("CEX", true, false, ConstantsBehaivor.LONGITUD_CEX));
ValidatorBehavior.listTypeID.push(new DTOTypeID("RUC", true, false, ConstantsBehaivor.LENGTH_RUC));
ValidatorBehavior.listTypeID.push(new DTOTypeID("PAS", true, false, ConstantsBehaivor.LENGTH_PASSPORT));

/*
* VALIDANDO IDENTIFICACIONES
*/

//Valida Número de Documento Identificación Personal
// CAMBIAR LA LÓGICA DE VALIDACIÓN DE DCTO PARA OTRO PAIS
ValidatorBehavior.ValidateDNI = function (ID, codeUB) {

    var listMainTypeID = getListMainTypeID();
    var isValid = false;
    for (var i = 0; i < listMainTypeID.length; i++) {
        isValid = isValid || validateLengthID(ID, listMainTypeID[i].lengthTypeID)

    };

    return isValid;
};
//Obteniendo Tipos de Identificaciones Principales --PRIVADO
function getListMainTypeID () {
    var listTI = [];
    for (var i = ValidatorBehavior.listTypeID.length - 1; i >= 0; i--) {
        if (ValidatorBehavior.listTypeID[i].isMainTypeID) {
            listTI.push(ValidatorBehavior.listTypeID[i]);
        }
    };
    return listTI;
};

//Valida la longitud de una identificacion
function validateLengthID(ID, length) {

    if (ID != null) {
        var idAux = ID.trim();

        if (idAux.length == length || idAux.length == 0) {
            return true;
        } else {
            return false;
        }
    } else
        return false;
    
};





//Valida Número de Documento Juridico
// CAMBIAR LA LÓGICA DE VALIDACIÓN DE DCTO RUC PARA OTRO PAIS
ValidatorBehavior.ValidateRUC = function (ruc, codesUB) {
    if (ruc) {
        return true;
    }

    if (ruc.length == 0) {
        return true;
    }

    if (ruc.length != ConstantsBehaivor.LENGTH_RUC) {
        return false;
    }


    //if (!ValidatorBehavior.EsNumeros(ruc))
    //    return false;


    var dig01 = parseInt(ruc[0]) * 5;
    var dig02 = parseInt(ruc[1]) * 4;
    var dig03 = parseInt(ruc[2]) * 3;
    var dig04 = parseInt(ruc[3]) * 2;
    var dig05 = parseInt(ruc[4]) * 7;
    var dig06 = parseInt(ruc[5]) * 6;
    var dig07 = parseInt(ruc[6]) * 5;
    var dig08 = parseInt(ruc[7]) * 4;
    var dig09 = parseInt(ruc[8]) * 3;
    var dig10 = parseInt(ruc[9]) * 2;
    var dig11 = parseInt(ruc[10]);


    var suma = dig01 + dig02 + dig03 + dig04 + dig05 + dig06 + dig07 + dig08 + dig09 + dig10;

    var residuo = suma % 11;
    var resta = 11 - residuo;
    var digChk = 0;


    if (resta == 10) {
        digChk = 0;
    } else if (resta == 11) {
        digChk = 1;
    } else {

        digChk = (11 - residuo) % 10;
    }

    if (dig11 == digChk) {
        return true;
    } else {
        return false;
    }

};

//Valida Pasaporte
// CAMBIAR LA LÓGICA DE VALIDACIÓN DE PASAPORTE PARA OTRO PAIS
ValidatorBehavior.ValidatePassport = function (passport, codesUB) {
    if (passport.length == 0)
        return false;

    var pas = passport.trim();
    //var esCaracterValido = ValidatorBehavior.EsLetrasYNumeros(pasaporte);
    if (pas.length <= ConstantsBehaivor.LENGTH_PASSPORT)
        return true;
    else
        return false;
};

//Valida una cadena como NúmeroTelefonico
// CAMBIAR LA LÓGICA DE VALIDACIÓN DE TELEFONO CONVENCIONAL PARA OTRO PAIS
ValidatorBehavior.EsPhone = function (phone, codesProvince) {
    //No se realiza valicacion por Mascara
    return true;
}

//Valida una cadena como celular
// CAMBIAR LA LÓGICA DE VALIDACIÓN DE TELEFONO CELULAR PARA OTRO PAIS
ValidatorBehavior.EsCellPhone = function (cellphone) {
       return true;
 
}




/***********************************
**ESTRUCTURA TIPO DE IDENTIFICACIÓN*
***********************************/









