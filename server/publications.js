Meteor.publishComposite('roms', {
  find: function() {
    return Roms.find({ });
  },
  children: [
    {
      find: function(rom) {
        return Images.find({ _id: rom.imageId });
      }
    }
  ]
});

Meteor.publishComposite('rom', function(slug) {
  return { 
    find: function() {
      return Roms.find({ slug: slug });
    },
    children: [
      {
        find: function(rom) {
          return Files.find({ _id: rom.fileId });
        }
      },
      {
        find: function(rom) {
          return Images.find({ _id: rom.imageId });
        }
      }
    ]
  };
});
