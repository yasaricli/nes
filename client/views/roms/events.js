Template.roms.events({
  'click .setStar'(event, template) {
    const hasStar = _.contains(this.stars, Meteor.userId());
    const starObj = { stars: Meteor.userId() };

    return isAuthenticated(() => {
      // pull remove star
      if (hasStar) {
        return Roms.update(this._id, { $pull: starObj });
      }

      // $push insert stars list
      Roms.update(this._id, { $push: starObj });
    }, this);
  },

  'click .remove'(event, template) {
    event.preventDefault();
    return isAuthenticated(() => {

      // Remove
      Roms.remove(this._id);
    }, this);
  },

  'click .more'() {

    // Next
    Roms.paginated.next();
  }
});
