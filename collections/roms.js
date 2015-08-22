Roms = new Mongo.Collection("roms");

Roms.attachSchema(new SimpleSchema({
    name: {
      type: String
    },
    slug: {
      type: String,
      optional: true
    },
    description: {
      type: String,
      optional: true,
      autoform: {
        type: 'textarea'
      }
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    },
    fileId: {
      type: String,
      label: 'Nes File',
      autoform: {
        afFieldInput: {
          type: 'fileUpload',
          collection: 'Files'
        }
      }
    },
    imageId: {
      type: String,
      label: 'Nes Image',
      autoform: {
        afFieldInput: {
          type: 'fileUpload',
          collection: 'Images'
        }
      }
    },
    active: {
      type: Boolean
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
  doc.slug = slugify(doc.name);
});

// ADMIN
Roms.attachAdmin({
  name: 'Roms',
  list_display: ['name', 'active', 'stars'],
  exclude: ['createdAt', 'slug'],
  sort: { createdAt: -1 },
  security: true,
  list_per_page: 10,
  verbose_name: 'Rom',
  subscriptions: {
    'cfs.files.filerecord': {},
    'cfs.images.filerecord': {}
  }
});
