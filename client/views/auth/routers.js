Router.route('/~:username', {
  name: 'Profile',
  waitOn: function() {
      return Meteor.subscribe('profile', this.params.username);
  },
  data: function() {
    var params = this.params;
    return {
      profile: function() {
        return Users.findOne({ username: params.username });
      },
      roms: function() {
        return Roms.find();
      }
    }
  }
});
