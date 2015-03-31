Template.roms.events({
    'click .setStar': function(event, template) {
        var hasStar = _.contains(this.stars, Meteor.userId()),
            starObj = { stars: Meteor.userId() };

        // pull remove star
        if (hasStar) {
            return Roms.update(this._id, { $pull: starObj });
        }

        // $push insert stars list
        Roms.update(this._id, { $push: starObj});
    }
});
