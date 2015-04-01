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
