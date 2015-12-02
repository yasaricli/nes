const root = this;

const HELPERS = {
      isAuthenticated() {
        return Meteor.userId();
      },

      uploadQueue() {
        return FS.HTTP.uploadQueue;
      },

      isEqual(a, b) {
        return _.isEqual(a, b);
      },

      session(key) {
        return Session.get(key);
      },

      excerpt(text, limit) {
        return text.substring(0, limit) + (text.length > limit  ? '...' : '');
      },

      contains(list, _id) {
        return _.contains(list, _id);
      },

      hasStar() {
        return _.contains(this.stars, Meteor.userId());
      }
    };

root.isAuthenticated = (callback, $this) => {
  return Meteor.userId() && callback.call($this ? $this : {});
};

// REGISTER
_.each(HELPERS, (fn, name) => {
  Blaze.registerHelper(name, fn);
});
