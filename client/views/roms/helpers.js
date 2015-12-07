Template.roms.helpers({
  roms(prop) {
    return Roms.find({});
  },
  
  hasNext() {
    return Roms.paginated.hasNext();
  }
});
