Router.route('/', {
  name: 'Roms'
});

Router.route('/rom/:slug', {
  name: 'Rom',
  template: 'Emulator',
  waitOn() {
    return Meteor.subscribe('rom', this.params.slug);
  },
  data: function() {
    const params = this.params;
    return {
      rom() {
        return Roms.findOne({ slug: params.slug });
      }
    }
  }
});
