
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
//ValidatorBehavior.ValidateDNI = function (ID, codeUB) {

//    var listMainTypeID = getListMainTypeID();
//    var isValid = false;
//    for (var i = 0; i < listMainTypeID.length; i++) {
//        isValid = isValid || validateLengthID(ID, listMainTypeID[i].lengthTypeID)

//    };

//    return isValid;
//};
//-------------------DNI--ECUADOR--------------------
//Permite validar el DNI de Ecuador
ValidatorBehavior.ValidateDNI = function (ID, codeUB) {
    
    var listMainTypeID = getListMainTypeID();
    var isValid = false;    
    
    var cedula = ID.value;
    array = cedula.split("");
    num = array.length;
    if (num == 10)
    {
        total = 0;
        digito = (array[9] * 1);
        for (i = 0; i < (num - 1) ; i++) {
            mult = 0;
            if ((i % 2) != 0) {
                total = total + (array[i] * 1);
            }
            else {
                mult = array[i] * 2;
                if (mult > 9)
                    total = total + (mult - 9);
                else
                    total = total + mult;
            }
        }
        decena = total / 10;
        decena = Math.floor(decena);
        decena = (decena + 1) * 10;
        final = (decena - total);
        if ((final == 10 && digito == 0) || (final == digito))
        {
            //alert("La c\xe9dula ES v\xe1lida!!!");
            //return true;
            isValid = true;
        }
        else {
            //alert("La c\xe9dula NO es v\xe1lida!!!");
            //return false;
            isValid = false;
        }
    }
    else {
        //alert("La c\xe9dula no puede tener menos de 10 d\xedgitos");
        //return false;
        isValid = false;
    }

    return isValid;
};
ValidatorBehavior.ValidateRUC = function (data, codesUB)
{
    var ruc = data.value;
    var isValid = false;
        

    var dto = ruc.length;
    var valor;
    var acu = 0;
    if (dto != ConstantsBehaivor.LENGTH_RUC || dto<0) {
        //alert('No has ingresado ningún dato, porfavor ingresar los datos correspondientes.');
        isValid = false;
    }
    else {
        for (var i = 0; i < dto; i++) {
            valor = ruc.substring(i, i + 1);
            if (valor == 0 || valor == 1 || valor == 2 || valor == 3 || valor == 4 || valor == 5 || valor == 6 || valor == 7 || valor == 8 || valor == 9) {
                acu = acu + 1;
            }
        }
        if (acu == dto)
        {
            if (ruc.substring(10, 13) != 001)
            {
                //alert('Los tres últimos dígitos no tienen el código del RUC 001.');
                //return;
                isValid = false;
            }
            if (ruc.substring(0, 2) > 24)
            {
                //alert('Los dos primeros dígitos no pueden ser mayores a 24.');
                //return;
                isValid = false;
            }
            //alert('El RUC está escrito correctamente');
            //alert('Se procederá a analizar el respectivo RUC.');
            isValid = true;

            //var porcion1 = ruc.substring(2, 3);
            //if (porcion1 < 6) {
            //    alert('El tercer dígito es menor a 6, por lo \ntanto el usuario es una persona natural.\n');
            //}
            //else {
            //    if (porcion1 == 6) {
            //        alert('El tercer dígito es igual a 6, por lo \ntanto el usuario es una entidad pública.\n');
            //    }
            //    else {
            //        if (porcion1 == 9) {
            //            alert('El tercer dígito es igual a 9, por lo \ntanto el usuario es una sociedad privada.\n');
            //        }
            //    }
            //}
        }
        else {
            //alert("ERROR: Por favor no ingrese texto");
            isValid = false;
        }
    }
    return isValid;
}

//---------------------------------------------------


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
//ValidatorBehavior.ValidateRUC = function (ruc, codesUB) {
//    if (ruc) {
//        return true;
//    }

//    if (ruc.length == 0) {
//        return true;
//    }

//    if (ruc.length != ConstantsBehaivor.LENGTH_RUC) {
//        return false;
//    }


//    //if (!ValidatorBehavior.EsNumeros(ruc))
//    //    return false;


//    var dig01 = parseInt(ruc[0]) * 5;
//    var dig02 = parseInt(ruc[1]) * 4;
//    var dig03 = parseInt(ruc[2]) * 3;
//    var dig04 = parseInt(ruc[3]) * 2;
//    var dig05 = parseInt(ruc[4]) * 7;
//    var dig06 = parseInt(ruc[5]) * 6;
//    var dig07 = parseInt(ruc[6]) * 5;
//    var dig08 = parseInt(ruc[7]) * 4;
//    var dig09 = parseInt(ruc[8]) * 3;
//    var dig10 = parseInt(ruc[9]) * 2;
//    var dig11 = parseInt(ruc[10]);


//    var suma = dig01 + dig02 + dig03 + dig04 + dig05 + dig06 + dig07 + dig08 + dig09 + dig10;

//    var residuo = suma % 11;
//    var resta = 11 - residuo;
//    var digChk = 0;


//    if (resta == 10) {
//        digChk = 0;
//    } else if (resta == 11) {
//        digChk = 1;
//    } else {

//        digChk = (11 - residuo) % 10;
//    }

//    if (dig11 == digChk) {
//        return true;
//    } else {
//        return false;
//    }

//};

//Valida Pasaporte
// CAMBIAR LA LÓGICA DE VALIDACIÓN DE PASAPORTE PARA OTRO PAIS
ValidatorBehavior.ValidatePassport = function (passport, codesUB) {
    
    if (passport.value.length == 0)
        return false;

    var pas = passport.value.trim();
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









