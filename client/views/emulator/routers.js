Router.route('/emulator/:_id', {
  name: 'Emulator',
  waitOn() {
    return Meteor.subscribe('file', this.params._id);
  },
  data() {
    const params = this.params;
    return {
      rom() {
        return {
          file() {
            return Files.findOne(params._id);
          }
        }
      }
    }
  }
});
