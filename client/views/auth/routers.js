Router.route('/~:username', {
  name: 'Profile',
  waitOn() {
      return Meteor.subscribe('profile', this.params.username);
  },
  data() {
    const params = this.params;
    return {
      profile() {
        return Users.findOne({ username: params.username });
      },
      roms() {
        return Roms.find();
      }
    }
  }
});
