import { LikeButton } from 'meteor/color:like-button';

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

Meteor.publishComposite('roms', (safe) => {
  return {
    find() {
      let filter = {};

      if (safe) {
        filter._id = {
          $in: LikeButton.collection.find({ userId: this.userId }).map((doc) => {
            return doc.likedId
          })
        }
      }

      return Roms.find(filter, {
        sort: {
          createdAt: -1
        }
      });
    },

    children: [
      {
        find(rom) {
          return Images.find({ _id: rom.imageId });
        }
      }
    ]
  }
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

Meteor.publishComposite('rom._id', (_id) => {
  return { 
    find() {
      return Roms.find({ _id });
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

Meteor.publishComposite('images', (_id) => {
  return {
    find() {
      return Images.find({ });
    }
  }
});
