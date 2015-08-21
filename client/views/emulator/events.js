Template.upload.events({
  'change #File': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Files.insert(file, function(err, fileObj) {
        if (_.isUndefined(err)) {
          Router.go('Emulator', {
            _id: fileObj._id
          });
        }
      });
    });
  },
  'click #Play': function(event, template) {
    template.find('#File').click();
  }
});
