takeAPictureWithEditOptionsAtCustomCompression = function (addFunction, quallityCompression, DimensionCompression) {
    try {
        navigator.camera.getPicture(
        function (imageData) {
            addFunction(imageData);
        },
        function (element) {
            alert("Lo sentimos tuvimos un problema al obtener tus imagenes.");
        },
        {
            quality: quallityCompression,
            targetHeight: DimensionCompression,
            targetWidth: DimensionCompression,
            allowEdit: true,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true
        });
    } catch (e) {

    }
}

getImageFromGalleryWithEditOptionTrueAnCustomCompression = function (addFunction, quallityCompression, DimensionCompression) {
    try {
        navigator.camera.getPicture(
    addFunction,
    function (element) {
        alert("Lo sentimos tuvimos un problema al obtener tus imagenes.");
    },
    {
        quality: quallityCompression,
        targetHeight: DimensionCompression,
        targetWidth: DimensionCompression,
        allowEdit: true,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
    });
    } catch (e) {

    }
}