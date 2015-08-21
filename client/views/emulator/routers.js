Router.route('/upload', {
  name: 'Upload'
});

Router.route('/emulator/:_id', {
  name: 'Emulator',
  waitOn: function() {
    return Meteor.subscribe('file', this.params._id);
  },
  data: function() {
    var params = this.params;
    return {
      rom: function() {
        return {
          file: function() {
            return Files.findOne(params._id);
          }
        }
      }
    }
  }
});
