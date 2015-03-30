var RegisterHelpers = {
    session: function(key) {
        return Session.get(key);
    },
    excerpt: function(text, limit) {
        return text.substring(0, limit) + (text.length > limit  ? '...' : '');
    }
};

_.each(RegisterHelpers, function(fn, name) {
    Template.registerHelper(name, fn);
});
