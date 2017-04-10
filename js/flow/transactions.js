function LoadScreenFlow(transactionCode) {
    var messageLoad = CORE_MESSAGE('WaitPlease');
    switch (transactionCode) {
        case 'GETVIEWS':
        case 'GETVIEWSBYSTATE':
            messageLoad = CORE_MESSAGE('LoadingViews');
            break;
        case 'CREATEVIEW':
            messageLoad = CORE_MESSAGE('CreatingView');
            break;
        case 'UPDATEVIEW':
            messageLoad = CORE_MESSAGE('UpdatingView');
            break;
        /*case 'SAVEVIEWCONFIGURATION':
            messageLoad = CORE_MESSAGE('CreatingView');
            break;*/
        default:
            break;
    }
    initProcess(messageLoad);
}

var flowTransactions = {
    GetViews: { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "GETVIEWS", TransactionCode: "GETVIEWS", Parameters: {} }, 
    GetViewsByState: { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "GETVIEWSBYSTATE", TransactionCode: "GETVIEWSBYSTATE", Parameters: {IsActive: true, ChangeWidgetIdentifier: false} }, 
    GetWidgetsByIdView: { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "GETWIDGETSBYIDVIEW", TransactionCode: "GETWIDGETSBYIDVIEW", Parameters: { IdView: 0 } },
     
/* INCLUIDOS */
    SaveSp: { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "SAVESP", TransactionCode: "SAVESP", Parameters: {Name: '', Database: '', IdUser: '', IdOffice:'', IdProfile:''}},
    SaveTransaction: { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "SAVETRANSACTION", TransactionCode: "SAVETRANSACTION", Parameters: {Name:'',TransactionName:'', TransactionDescription:'', TransactionCode:'', Url:'', Controller:'', TypeApplication:''}}, 
    SaveFlow: { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "SAVEFLOW", TransactionCode: "SAVEFLOW", Parameters: { NameFlow: '', ViewSequence: '', IsActive: true, DesignXml: '', IdParentFlow: null, Step: [] }},
    GetFlowsByStateWithXml : { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "GETFLOWSBYSTATEWITHXML", TransactionCode: "GETFLOWSBYSTATEWITHXML", Parameters: {IsActive: true} },
    GetFlowsByState : { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "GETFLOWSBYSTATE", TransactionCode: "GETFLOWSBYSTATE", Parameters: {IsActive: true} }, 
    GetSpById : { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "GETSPBYID", TransactionCode: "GETSPBYID", Parameters: { IdSp: 0 } },
    GetTransactionById : { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "GETTRANSACTIONBYID", TransactionCode: "GETTRANSACTIONBYID", Parameters: { IdTransaction: 0 } },
}
 //PRUEBA   
    /*GetFlowsByState : { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "GETFLOWSBYSTATE", TransactionCode: "GETFLOWSBYSTATE", Parameters: {IsActive: true} }, 
    SaveFlow: { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "SAVEFLOW", TransactionCode: "SAVEFLOW", 
    Parameters: { 
            NameFlow: 'DOMICILIO',
            ViewSequence: '2-1',
            IsActive: true,
            DesignXml: '',
            Step: [
                {                 
                    IdView: 2,
                    IdFlow: null,
                    IdSp: null,
                    IdTransaction: null,
                    Property: [
                        {
                            IdStep: null,
                            ValidationIdentifier: 'provincia',
                            ValidationType: 'isRequired',
                            IsRequired: true,
                            GroupValidation: 'UBICACION',
                            FieldName: 'Provincia',
                            Table: 'Provincia',
                            Column: 'nombre',
                            DataType: 'string'
                        },
                        {
                            IdStep: null,
                            ValidationIdentifier: 'ciudad',
                            ValidationType: 'isRequired',
                            IsRequired: true,
                            GroupValidation: 'UBICACION',
                            FieldName: 'Ciudad',
                            Table: 'Ciudad',
                            Column: 'nombre',
                            DataType: 'string'
                        },
                        {
                            IdStep: null,
                            ValidationIdentifier: 'parroquia',
                            ValidationType: 'isRequired',
                            IsRequired: true,
                            GroupValidation: 'UBICACION',
                            FieldName: 'Parroquia',
                            Table: 'Parroquia',
                            Column: 'nombre',
                            DataType: 'string'
                        },
                        {
                            IdStep: null,
                            ValidationIdentifier: 'telefono',
                            ValidationType: 'isRequired',
                            IsRequired: true,
                            GroupValidation: 'UBICACION',
                            FieldName: 'Telefono',
                            Table: 'Telefono',
                            Column: 'numero',
                            DataType: 'string'
                        }
                    ]
                },
                {                 
                    IdView: 1,
                    IdFlow: null,
                    IdSp: null,
                    IdTransaction: 1,
                    Property: [
                        {
                            IdStep: null,
                            ValidationIdentifier: 'estadoCivil',
                            ValidationType: 'isRequired',
                            IsRequired: true,
                            GroupValidation: 'INFOCLIENTE',
                            FieldName: 'Estado Civil',
                            Table: 'Cliente',
                            Column: 'estadoCivil',
                            DataType: 'string'
                        },
                        {
                            IdStep: null,
                            ValidationIdentifier: 'ocupacion',
                            ValidationType: '',
                            IsRequired: false,
                            GroupValidation: 'INFOCLIENTE',
                            FieldName: 'Ocupacion',
                            Table: 'Cliente',
                            Column: 'ocupacion',
                            DataType: 'string'
                        },
                        {
                            IdStep: null,
                            ValidationIdentifier: 'edad',
                            ValidationType: 'isRequired',
                            IsRequired: true,
                            GroupValidation: 'INFOCLIENTE',
                            FieldName: 'Edad',
                            Table: 'Cliente',
                            Column: 'Edad',
                            DataType: 'int'
                        }
                    ]
                },
                {                 
                    IdView: 3,
                    IdFlow: null,
                    IdSp: 1,
                    IdTransaction: null,
                    Property: [
                        {
                            IdStep: null,
                            ValidationIdentifier: 'tipoInmueble',
                            ValidationType: 'isRequired',
                            IsRequired: true,
                            GroupValidation: 'VIVIENDA',
                            FieldName: 'Tipo Inmueble',
                            Table: 'Inmueble',
                            Column: 'Inmuebletipo',
                            DataType: 'string'
                        },
                        {
                            IdStep: null,
                            ValidationIdentifier: 'tipoPropiedad',
                            ValidationType: 'isRequired',
                            IsRequired: true,
                            GroupValidation: 'VIVIENDA',
                            FieldName: 'Tipo Propiedad',
                            Table: 'Inmueble',
                            Column: 'propiedadTipo',
                            DataType: 'string'
                        },
                        {
                            IdStep: null,
                            ValidationIdentifier: 'materialVivienda',
                            ValidationType: 'isRequired',
                            IsRequired: true,
                            GroupValidation: 'VIVIENDA',
                            FieldName: 'Material Vivienda',
                            Table: 'Inmueble',
                            Column: 'material',
                            DataType: 'string'
                        },
                        {
                            IdStep: null,
                            ValidationIdentifier: 'color',
                            ValidationType: '',
                            IsRequired: false,
                            GroupValidation: 'VIVIENDA',
                            FieldName: 'Color',
                            Table: 'Inmueble',
                            Column: 'color',
                            DataType: 'string'
                        },
                    ],
                    SubSequence: [{
                        IdStep: null,
                        SubSequenceIdentifier: 'materialVivienda',
                        Value: 'Concreto',
                        SubSequence: '3',
                        TypeWidget: 'SELECTBOX'
                    }]
                }
            ]
        } 
    },
    UpdateFlow: { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "UPDATEFLOW", TransactionCode: "UPDATEFLOW", 
    Parameters: { 
            IdFlow: 2,
            NameFlow: 'Flujo Transaction 1',
            ViewSequence: '38-39',
            IsActive: true,
            DesignXml: '',
            Step: [
                {       
                    IdStep:2,
                    IdView: null,
                    IdFlow: 2,
                    IdSp: null,
                    IdTransaction: null,
                    Property: [
                        {
                            IdProperty: 1,
                            IdStep: 2,
                            ValidationIdentifier: 'nombreTarjeta',
                            ValidationType: 'isRequired',
                            IsRequired: false,
                            GroupValidation: 'NUEVO',
                            FieldName: 'Ingrese correctamente',
                            Table: 'tarjeta',
                            Column: 'nombre',
                            DataType: 'string'
                        },
                        {
                            IdProperty: 2,
                            IdStep: 2,
                            ValidationIdentifier: 'tiposVerificadores',
                            ValidationType: 'isRequired',
                            IsRequired: false,
                            GroupValidation: 'NUEVO',
                            FieldName: 'Ingrese correctamente',
                            Table: 'tarjeta',
                            Column: 'verificador',
                            DataType: 'string'
                        }
                    ],
                    SubSequence: [{
                        IdSubSequence: 1,
                        IdStep: 2,
                        SubSequenceIdentifier: 'tiposVerificadores',
                        Value: 'CASADO',
                        SubSequence: '32-33',
                        TypeWidget: 'TEXTBOX'
                    }]
                }
            ]
        } 
    },
    SavePostBox: { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "SAVEPOSTBOX", TransactionCode: "SAVEPOSTBOX", 
    Parameters: {         
            IdTask:1,
            IdUser: 1,
            IdOffice: 2,
            IdProfile: 1,
            IdStep: null,
            AprobationState: 'NO APROBADO'
        }
    },
    GetPostBoxByUser : { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "GETPOSTBOXBYUSER", TransactionCode: "GETPOSTBOXBYUSER", Parameters: {IdUser: 0} }, 
    GetFlowsByStateWithXml : { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "GETFLOWSBYSTATEWITHXML", TransactionCode: "GETFLOWSBYSTATEWITHXML", Parameters: {IsActive: true} },
 //PRUEBA

    SaveViewConfiguration: { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "SAVEVIEWCONFIGURATION", TransactionCode: "SAVEVIEWCONFIGURATION", 
    Parameters: {         
            IdView: 0, 
            Name: '', 
            Description: '', 
            Path: '', Logo: '', 
            IsActive: '', 
            Widget: []
        }
    },
    UpdateViewConfiguration: { URL: Kernel_Shared.WebApiFlow, Controller: "Flow", TransactionDescription: "UPDATEVIEWCONFIGURATION", TransactionCode: "UPDATEVIEWCONFIGURATION", 
    Parameters: {         
            IdView: 0, 
            Name: '', 
            Description: '', 
            Path: '', Logo: '', 
            IsActive: '', 
            Widget: []
        }
    } 

}*/
//PRUEBA
/*var SaveFlow = function(addFunction){
    try {
        var transaction = Object.create(flowTransactions.SaveFlow);
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}
var UpdateFlow = function(addFunction){
    try {
        var transaction = Object.create(flowTransactions.UpdateFlow);
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

var GetFlowsByState = function (isActive, addFunction) {
    try {
        var transaction = Object.create(flowTransactions.GetFlowsByState);
        transaction.Parameters.IsActive = isActive;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

var GetPostBoxByUser = function (idUser, addFunction) {
    try {
        var transaction = Object.create(flowTransactions.GetPostBoxByUser);
        transaction.Parameters.IdUser = idUser;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

var SavePostBox = function(addFunction){
    try {
        var transaction = Object.create(flowTransactions.SavePostBox);
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}*/

//PRUEBA

/*
    Obtener todas las vistas almacenadas
*/
var GetViews = function (addFunction) {
    try {
        var transaction = Object.create(flowTransactions.GetViews);
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

/*
    Obtener todas las vistas por el estado (activo)
*/
var GetViewsByState = function (isActive, changeWidgetIdentifier, addFunction) {
    try {
        var transaction = Object.create(flowTransactions.GetViewsByState);
        transaction.Parameters.IsActive = isActive;
        transaction.Parameters.ChangeWidgetIdentifier = changeWidgetIdentifier;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

/*
    Obtener widgets por id vista
*/

var GetWidgetsByIdView = function (idView, addFunction) {
    try {
        var transaction = Object.create(flowTransactions.GetWidgetsByIdView);
        transaction.Parameters.IdView = idView;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

/* 
    Guardar configuración de vista
 */

var SaveViewConfiguration = function(name, description, path, logo, isActive, widgets, addFunction){
    try{
        var transaction = Object.create(flowTransactions.SaveViewConfiguration);
        transaction.Parameters.Name = name;
        transaction.Parameters.Description = description;
        transaction.Parameters.Path = path;
        transaction.Parameters.Logo = logo;
        transaction.Parameters.IsActive = isActive;
        transaction.Parameters.Widget = widgets;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e){

    }
}

/*
    Actualizar configuración de vista
*/
var UpdateViewConfiguration = function (idView, name, description, path, logo, isActive, widgets, addFunction) {
    try {
        var transaction = Object.create(flowTransactions.UpdateViewConfiguration);
        transaction.Parameters.IdView = idView;
        transaction.Parameters.Name = name;
        transaction.Parameters.Description = description;
        transaction.Parameters.Path = path;
        transaction.Parameters.Logo = logo;
        transaction.Parameters.IsActive = isActive;
        transaction.Parameters.Widget = widgets;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

/* INCLUIDOS */

/* Obtener Flujos con Xml */

var GetFlowsByStateWithXml = function (isActive, addFunction) {
    try {
        var transaction = Object.create(flowTransactions.GetFlowsByStateWithXml);
        transaction.Parameters.IsActive = isActive;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

var SaveFlow = function(flow, addFunction){
    try {
        var transaction = Object.create(flowTransactions.SaveFlow);
        transaction.Parameters.NameFlow = flow.NameFlow;
        transaction.Parameters.ViewSequence = flow.ViewSequence;
        transaction.Parameters.IsActive = flow.IsActive;
        transaction.Parameters.DesignXml = flow.DesignXml;
        transaction.Parameters.IdParentFlow = flow.IdParentFlow;
        transaction.Parameters.Step = flow.Step;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

var SaveTransaction = function (newTransaction, addFunction) {
    try {
        var transaction = Object.create(flowTransactions.SaveTransaction);
        transaction.Parameters.TransactionName = newTransaction.TransactionName;
        transaction.Parameters.TransactionDescription = newTransaction.TransactionDescription;
        transaction.Parameters.TransactionCode = newTransaction.TransactionCode;
        transaction.Parameters.Url = newTransaction.Url;
        transaction.Parameters.Controller = newTransaction.Controller;
        transaction.Parameters.TypeApplication = newTransaction.TypeApplication;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

var SaveSp = function (sp, addFunction) {
    try {
        var transaction = Object.create(flowTransactions.SaveSp);
        transaction.Parameters.Name = sp.Name;
        transaction.Parameters.Database = sp.Database;
        transaction.Parameters.IdUser = sp.IdUser;
        transaction.Parameters.IdOffice = sp.IdOffice;
        transaction.Parameters.IdProfile = sp.IdProfile;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

var GetFlowsByState = function (isActive, addFunction) {
    try {
        var transaction = Object.create(flowTransactions.GetFlowsByState);
        transaction.Parameters.IsActive = isActive;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}


/* Obtener Sp por id */

var GetSpById = function (idSp, addFunction) {
    try {
        var transaction = Object.create(flowTransactions.GetSpById);
        transaction.Parameters.IdSp = idSp;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}

/* Obtener Transaction por id */

var GetTransactionById = function (idTransaction, addFunction) {
    try {
        var transaction = Object.create(flowTransactions.GetTransactionById);
        transaction.Parameters.IdTransaction = idTransaction;
        SendPostRequestToService(transaction, addFunction, LoadScreenFlow);
    } catch (e) {

    }
}