Meteor.publishComposite('profile', (username) => {
  return {
    find() {
      return Users.find({ username: username });
    },
    children: [
      {
        find(user) {
          return Roms.find({ stars: user._id });
        },

        children: [
          {
            find(rom) {
              return Images.find({ _id: rom.imageId });
            }
          }
        ]
      }
    ]
  }
});

Meteor.publishComposite('roms', {
  find() {
    return Roms.find({ });
  },
  children: [
    {
      find(rom) {
        return Images.find({ _id: rom.imageId });
      }
    }
  ]
});

Meteor.publishComposite('rom', (slug) => {
  return { 
    find() {
      return Roms.find({ slug: slug });
    },
    children: [
      {
        find(rom) {
          return Files.find({ _id: rom.fileId });
        }
      },
      {
        find(rom) {
          return Images.find({ _id: rom.imageId });
        }
      }
    ]
  };
});

Meteor.publishComposite('file', (_id) => {
  return {
    find() {
      return Files.find({ _id: _id });
    }
  }
});
