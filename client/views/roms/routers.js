Router.route('/', {
  name: 'Roms',
  waitOn: function() {
    return Meteor.subscribe('roms');
  }
});

Router.route('/rom/:slug', {
  name: 'Rom',
  waitOn: function() {
      return Meteor.subscribe('rom', this.params.slug);
  },
  data: function() {
    var params = this.params;
    return {
      rom: function() {
        return Roms.findOne({ slug: params.slug });
      }
    }
  }
});
