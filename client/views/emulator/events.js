Template.upload.events({
  'change #File': function(event, template) {

    // each all files
    FS.Utility.eachFile(event, function(file) {

      // insert file
      Files.insert(file, function(err, fileObj) {

        // is uploaded file then
        fileObj.on('uploaded', function() {

          // go to emulator.
          Router.go('Emulator', {
            _id: fileObj._id
          });
        });
      });
    });
  },
  'click #Play': function(event, template) {
    template.find('#File').click();
  }
});
