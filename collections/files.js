Files = new FS.Collection("files", {
    stores: [new FS.Store.GridFS("filesStore")],
    filter: {
        allow: {
            maxSize: 1048576, // in bytes
            extensions: ['nes']
        }
    }
});

isServer(function() { });
