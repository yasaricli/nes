var root = this;

root.isServer = function(callback) {
    return Meteor.isServer && callback()
};
