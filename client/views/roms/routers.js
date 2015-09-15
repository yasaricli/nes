Router.route('/', {
  name: 'Roms',
  waitOn: function() {
    return Meteor.subscribe('roms');
  }
});

Router.route('/watch/:id', {
  name: 'Watch',

  data: function() {
    var params = this.params;
    return {
      streamId: function() {
        return params.id;
      }
    }
  }
});

Router.route('/rom/:slug', {
  name: 'Rom',
  template: 'Emulator',
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
