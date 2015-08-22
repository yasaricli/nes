Template.roms.events({
  'click .setStar': function(event, template) {
    var hasStar = _.contains(this.stars, Meteor.userId()),
        starObj = { stars: Meteor.userId() };

    return isAuthenticated(function() {
       // pull remove star
       if (hasStar) {
           return Roms.update(this._id, { $pull: starObj });
       }

       // $push insert stars list
       Roms.update(this._id, { $push: starObj });
    }, this);
  },

  'click .remove': function(event, template) {
    event.preventDefault();
    return isAuthenticated(function() {

      // Remove
      Roms.remove(this._id);
    }, this);
  }
});
