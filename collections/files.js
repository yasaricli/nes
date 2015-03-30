Files = new FS.Collection("files", {
    stores: [new FS.Store.GridFS("filesStore")]
});


isServer(function() {

    // security Role
    Files.files.permit(['insert', 'remove', 'update']).ifHasRole('admin').apply();
});
