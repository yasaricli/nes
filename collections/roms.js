Roms = new Mongo.Collection("roms");

Roms.attachSchema(new SimpleSchema({
    name: { type: String },
    description: { type: String, optional: true, autoform: new Field().textarea() },
    createdAt: { type: Date, denyUpdate: true },
    fileId: { type: String, label: 'file', autoform: new Field().upload('Files') },
    imageId: { type: String, label: 'image', autoform: new Field().upload('Images') },
    active: { type: Boolean },

    stars: {
        type: [String], // 'userId'
        optional: true
    }
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

// ADMIN
Roms.attachAdmin({
  name: 'Roms',
  list_display: ['name', 'active'],
  sort: ['-createdAt'],
  security: true,
  list_per_page: 10,
  verbose_name: 'Rom'
});
