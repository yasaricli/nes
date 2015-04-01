var root = this;

root.isServer = function(callback) {
    return Meteor.isServer && callback()
};

root.Field = function() {
    this.textarea = function() {
        return {
            type: "textarea"
        }
    };
    this.upload = function(col) {
        return {
            afFieldInput: {
                type: 'fileUpload',
                collection: col
            }
        }
    };
};

// contains(['a', 'b', 'c'], ['a', 'c']) --> true
root.contains = function(l, i) {
    return _.any(i, function(value) {
        return _.contains(l, value);
    });
}
