var root = this,

    HELPERS = {
      isAuthenticated: function() {
        return Meteor.userId();
      },

      uploadQueue: function() {
        return FS.HTTP.uploadQueue;
      }
    };


root.isAuthenticated = function(callback, $this) {
  return Meteor.userId() && callback.call($this ? $this : {});
};

root.getFile = function(file, callback) {
  return $.ajax({
    url: file.url(),
    xhr: function() {
      var xhr = $.ajaxSettings.xhr();
      xhr.overrideMimeType('text/plain; charset=x-user-defined');
      return xhr;
    },
    complete: function(xhr, status) {
      callback(xhr.responseText);
    }
  });
};

// REGISTER
_.each(HELPERS, function(fn, name) {
  Blaze.registerHelper(name, fn);
});
