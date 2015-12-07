Router.route('/', {
  name: 'Roms',
  waitOn() {
    return Roms.paginated.subscribe();
  }
});

Router.route('/watch/:id', {
  name: 'Watch',
  data() {
    const params = this.params;
    return {
      watchId() {
        return params.id;
      }
    }
  }
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
