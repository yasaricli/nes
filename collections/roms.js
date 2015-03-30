Roms = new Mongo.Collection("roms");

Roms.attachSchema(new SimpleSchema({
    name: { type: String },
    description: { type: String, optional: true, autoform: new Field().textarea() },
    createdAt: { type: Date, denyUpdate: true },
    fileId: { type: String, label: 'file', autoform: new Field().upload('Files') },
    imageId: { type: String, label: 'image', autoform: new Field().upload('Images') },
    active: { type: Boolean },
}));

Roms.helpers({
    file: function() {
        return Files.findOne(this.fileId);
    },
    image: function() {
        return Images.findOne(this.imageId);
    }
});


// HOOKS
Roms.before.insert(function(userId, doc) {
    doc.createdAt = new Date();
});


isServer(function() {

    // security Role
    Roms.permit('insert').ifHasRole('admin').apply();
});
