Roms = new Mongo.Collection("roms");

// Attach behaviour with the default options
Roms.attachBehaviour('timestampable');

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
