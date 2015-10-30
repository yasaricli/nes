Meteor.publishComposite('profile', function(username) {
  return {
    find: function() {
      return Users.find({ username: username });
    },
    children: [
      {
        find: function(user) {
          return Roms.find({ stars: user._id });
        },

        children: [
          {
            find: function(rom) {
              return Images.find({ _id: rom.imageId });
            }
          }
        ]
      }
    ]
  }
});

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

Meteor.publishComposite('file', function(_id) {
  return {
    find: function() {
      return Files.find({ _id: _id });
    }
  }
});
