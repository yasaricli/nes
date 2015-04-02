var subs = new SubsManager();

Router.route('/', {
  name: 'Roms',
  waitOn: function() {
      return subs.subscribe('roms');
  }
});

Router.route('/rom/:_id', {
  name: 'Rom',
  waitOn: function() {
      return subs.subscribe('rom', this.params._id);
  },
  data: function() {
      var params = this.params;
      return {
          rom: function() {
              return Roms.findOne(params._id);
          }
      }
  }
});
