Files = new FS.Collection("files", {
    stores: [new FS.Store.GridFS("filesStore")],
    filter: {
        allow: {
            extensions: ['nes']
        }
    }
});

isServer(function() { });
