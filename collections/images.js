Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("imagesStore")]
});


isServer(function() {

    // security Role
    Images.files.permit(['insert', 'remove', 'update']).ifHasRole('admin').apply();
});
