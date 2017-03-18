Template.roms.onRendered(function() {
  const data = this.data || {};

  this.subscribe('roms', data.safe);
});
