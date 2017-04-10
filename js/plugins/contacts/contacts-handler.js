var errorHandler = function (e) {
    console.log("errorHandler: " + e);
}

var getContacts = function (lstContacts) {
    Contacts = lstContacts;
    //$.each(Contacts, function (item, index) {
    //    $.extend(Contacts[index], { GroupList: Contacts[index].displayName.substring(0, 1).toUpperCase() });
    //})
}

var initCollectorMain = function (action) {
    initProcess("Estamos obteniendo tus contactos. Espera un momento por favor");
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    options.desiredFields = [navigator.contacts.fieldType.addresses, navigator.contacts.fieldType.birthday, navigator.contacts.fieldType.categories, navigator.contacts.fieldType.country, navigator.contacts.fieldType.department, navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.emails, navigator.contacts.fieldType.familyName, navigator.contacts.fieldType.formatted, navigator.contacts.fieldType.givenName, navigator.contacts.fieldType.honorificPrefix, navigator.contacts.fieldType.honorificSuffix, navigator.contacts.fieldType.id, navigator.contacts.fieldType.ims, navigator.contacts.fieldType.locality, navigator.contacts.fieldType.middleName, navigator.contacts.fieldType.name, navigator.contacts.fieldType.nickname, navigator.contacts.fieldType.note, navigator.contacts.fieldType.organizations, navigator.contacts.fieldType.phoneNumbers, navigator.contacts.fieldType.photos, navigator.contacts.fieldType.postalCode, navigator.contacts.fieldType.region, navigator.contacts.fieldType.streetAddress, navigator.contacts.fieldType.title, navigator.contacts.fieldType.urls];
    options.hasPhoneNumber = true;
    var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, getContacts, errorHandler, options);
    if (action)
        action();
    stopProcess();
}


var PickContact = function (action) {
    navigator.contacts.pickContact(function (contact) {
        if(action)
            action(contact);
        //console.log('The following contact has been selected:' + JSON.stringify(contact));
        //alert('The following contact has been selected:' + JSON.stringify(contact))
    }, function (err) {
        console.log('Error: ' + err);
    });
}

var createContact = function (dataContact, actionSuccess, actionError) {
    var contact = navigator.contacts.create({
        displayName: dataContact.displayName,
        phoneNumbers: dataContact.phoneNumbers,
        name: {
            givenName: dataContact.name.givenName,
            familyName: dataContact.name.familyName
        },
        photos: dataContact.photos,
        emails: dataContact.emails,
        addresses: dataContact.addresses
    })

    contact.save(actionSuccess, actionError);

}

var updateContact = function (displayName, contactToUpdate, actionSuccess, actionError) {
    var options = new ContactFindOptions();
    options.filter = displayName;
    options.multiple = false;
    var fields = ["id", "displayName", "phoneNumbers", "emails"];
    navigator.contacts.find(fields, function (contacts) {
        successUpdate(contacts, contactToUpdate, actionSuccess, actionError);
    }, function () {
        showNotificationError('Error al buscar el contacto a actualizar');
    }, options);
}

function successUpdate(contacts, contactToUpdate, actionSuccess, actionError) {
    var update = contacts[0];
    update.phoneNumbers = contactToUpdate.phoneNumbers;
    update.displayName = contactToUpdate.displayName;
    update.name = contactToUpdate.name;
    update.emails = contactToUpdate.emails;
    update.addresses = contactToUpdate.addresses;
    update.photos = contactToUpdate.photos;
    update.save(actionSuccess, actionError);
}

