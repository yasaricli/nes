var RegisterHelpers = {
    session: function(key) {
        return Session.get(key);
    },
    excerpt: function(text, limit) {
        return text.substring(0, limit) + (text.length > limit  ? '...' : '');
    },
    contains: function(list, _id) {
        return _.contains(list, _id);
    },
    hasStar: function() {
        return _.contains(this.stars, Meteor.userId());
    }
};

_.each(RegisterHelpers, function(fn, name) {
    Template.registerHelper(name, fn);
});
