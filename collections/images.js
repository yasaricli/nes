Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("imagesStore")],
    filter: {
        allow: {
            maxSize: 1048576, // in bytes
            extensions: ['png'],
            contentTypes: ['image/*']
        }
    }
});

isServer(function() {});
