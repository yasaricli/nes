Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("imagesStore")]
});

isServer(function() {});
