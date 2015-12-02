const root = this;

root.isServer = (callback) => {
  return Meteor.isServer && callback()
};
